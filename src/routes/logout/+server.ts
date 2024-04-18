import { lucia } from '$lib/server/auth';
import { fail, redirect } from '@sveltejs/kit';

export const POST = async (event) => {
	if (!event.locals.session) {
		throw new Error('Invalid');
	}
	await lucia.invalidateSession(event.locals.session.id);
	const sessionCookie = lucia.createBlankSessionCookie();
	event.cookies.set(sessionCookie.name, sessionCookie.value, {
		path: '.',
		...sessionCookie.attributes
	});
	redirect(302, '/login');
};
