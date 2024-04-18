import { lucia } from '$lib/server/auth';
import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import type { Actions, PageServerLoad } from './$types';
import { dashboardFormSchema } from '$lib/zod-schemas';

export const load: PageServerLoad = async (event) => {
	if (!event.locals.user) {
		redirect(303, '/login');
	}

	return {
		form: await superValidate(zod(dashboardFormSchema))
	};
};

export const actions: Actions = {
	admin_logout: async (event) => {
		if (!event.locals.session) {
			return fail(401);
		}
		await lucia.invalidateSession(event.locals.session.id);
		const sessionCookie = lucia.createBlankSessionCookie();
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});
		redirect(302, '/login');
	}
};
