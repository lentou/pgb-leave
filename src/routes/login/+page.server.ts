// Look at the database
// if user name exist
// check if password is correct
// if password is correct
// create session
// redirect to home

import type { PageServerLoad } from './$types.js';
import { message, superValidate } from 'sveltekit-superforms';
import { loginFormSchema } from '$lib/zod-schemas.js';
import { zod } from 'sveltekit-superforms/adapters';
import { lucia } from '$lib/server/auth';
import { fail, redirect } from '@sveltejs/kit';
import { Argon2id } from 'oslo/password';

import { db } from '$lib/server/db';
import { userTable } from '$lib/server/db/schema.js';

import type { Actions } from './$types';
import { eq } from 'drizzle-orm';

export const load: PageServerLoad = async (event) => {
	if (!event.locals.user) {
		redirect(303, '/employee/dashboard');
	}

	return {
		form: await superValidate(zod(loginFormSchema))
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(loginFormSchema));

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const { username, password } = form.data;

		const existingUser = await db
			.select()
			.from(userTable)
			.where(eq(userTable.username, username.toString()));

		const isUserExists = existingUser.length > 0;

		if (!isUserExists) {
			return message(form, 'User does not exists', {
				status: 403
			});
		}

		const hashedPass = existingUser[0].hashed_password;

		const validPassword = await new Argon2id().verify(hashedPass, password);
		if (!validPassword) {
			return message(form, 'Incorrect username or password', {
				status: 403
			});
		}

		const session = await lucia.createSession(existingUser[0].id, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});
		redirect(303, '/employee/dashboard');
	}
};
