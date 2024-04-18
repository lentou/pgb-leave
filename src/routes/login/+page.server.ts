import type { PageServerLoad, Actions } from './$types.js';
import { fail, redirect } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
import { loginFormSchema } from '$lib/zod-schemas';
import { zod } from 'sveltekit-superforms/adapters';
import { eq } from 'drizzle-orm';

import { lucia } from '$lib/server/auth';
import { Argon2id } from 'oslo/password';

import { db } from '$lib/server/db';
import { userTable } from '$lib/server/db/schema.js';

export const load: PageServerLoad = async (event) => {

	if(event.locals.user) {
		redirect(303, "/admin");
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

		// checking if user exists in userTable
        const existingUser = await db
			.select()
			.from(userTable)
			.where(eq(userTable.username, username.toString()));

        const isUserExists = existingUser.length > 0;
		if (!isUserExists) {
			return message(form, 'Username does not exists', {
				status: 403
			});
		}

		// verify the password from userTable
		const hashedPassword = existingUser[0].hashed_password;
		const verifyPassword = await new Argon2id().verify(hashedPassword, password);

		if (!verifyPassword) {
			return message(form, 'Invalid credentials', {
				status: 403
			});
		}
		// proceed to dashboard

		const session = await lucia.createSession(existingUser[0].id, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: ".",
			...sessionCookie.attributes
		});

		redirect(303, "/admin");

	}
};
