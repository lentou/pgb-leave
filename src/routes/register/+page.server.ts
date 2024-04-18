import type { PageServerLoad, Actions } from './$types.js';
import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { registerFormSchema } from '$lib/zod-schemas';
import { zod } from 'sveltekit-superforms/adapters';

import { lucia } from '$lib/server/auth';
import { generateId } from 'lucia';
import { Argon2id } from 'oslo/password';

import { db } from '$lib/server/db';
import { userTable } from '$lib/server/db/schema.js';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(registerFormSchema))
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(registerFormSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const { username, password } = form.data;

		const userid = generateId(15);
		const hashedPassword = await new Argon2id().hash(password);

		// TODO: check if username is already used

		try {
			console.log('BEFORE INSERT');
			await db
				.insert(userTable)
				.values({
					id: userid,
					username: username,
					hashed_password: hashedPassword,
					is_admin: true
				})
				.execute();

			console.log('AFTER INSERT TO USER');

			const session = await lucia.createSession(userid, {
				expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)
			});
			console.log('AFTER CREATE SESSION');
			const sessionCookie = lucia.createSessionCookie(session.id);
			event.cookies.set(sessionCookie.name, sessionCookie.value, {
				path: '.',
				...sessionCookie.attributes
			});
		} catch (error) {
			console.log(error);
			return fail(500, {
				form
			});
		}

		redirect(302, '/');
	}
};
