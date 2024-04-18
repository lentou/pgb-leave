import type { PageServerLoad, Actions } from './$types.js';
import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { departmentFormSchema } from '$lib/zod-schemas';
import { zod } from 'sveltekit-superforms/adapters';
import { generateId } from 'lucia';
import { db } from '$lib/server/db';
import { departmentTable } from '$lib/server/db/schema.js';
import { eq } from 'drizzle-orm';

export const load = (async () => {
	const result = await db.select().from(departmentTable);
	return {
		form: await superValidate(zod(departmentFormSchema)),
		result
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	add_department: async (event) => {
		const form = await superValidate(event, zod(departmentFormSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const { departmentName, departmentCode } = form.data;

		const userDepartmentId = generateId(15);

		if (!departmentName.trim() || !departmentCode.trim()) {
			return fail(400, {
				message: 'Department name and code are required.'
			});
		}

		try {
			await db
				.insert(departmentTable)
				.values({
					id: userDepartmentId,
					department_name: departmentName,
					department_code: departmentCode
				})
				.execute();
		} catch (error) {
			console.log(error);
			return fail(500, {
				form
			});
		}
	},

	edit_department: async (event) => {
		console.log('Edit department action called');
		const form = await superValidate(event, zod(departmentFormSchema));

		const { departmentName, departmentCode } = form.data;

		try {
			await db
				.update(departmentTable)
				.set({
					department_name: departmentName,
					department_code: departmentCode
				})
				.where(eq(departmentTable.id, form.id))
				.execute();
			console.log('Department updated successfully');
		} catch (error) {
			console.error('Error updating department:', error);
			return fail(500, {
				form
			});
		}
	},

	delete_department: async (event) => {
		console.log('Delete department action called');
		const form = await superValidate(event, zod(departmentFormSchema));

		const id = form.id;

		try {
			await db.delete(departmentTable).where(eq(departmentTable.id, id)).execute();
			console.log('Department deleted successfully');
		} catch (error) {
			console.error('Error deleting department:', error);
			return fail(500, {
				form
			});
		}
	}
} satisfies Actions;
