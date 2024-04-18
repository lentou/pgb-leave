import type { Actions } from './$types';
import type { PageServerLoad } from './$types.js';
import { fail } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
import { departmentFormSchema } from '$lib/zod-schemas';
import { zod } from 'sveltekit-superforms/adapters';
import { eq } from 'drizzle-orm';

import { generateId } from 'lucia';

import { db } from '$lib/server/db';
import { departmentTable } from '$lib/server/db/schema.js';
import { toast } from 'svelte-sonner';

export const load: PageServerLoad = async () => {
    const result = await db.select().from(departmentTable).where(eq(departmentTable.delete, false));
    const form = await superValidate(zod(departmentFormSchema));

	return {
        result: result,
        form: form
	};
};

export const actions: Actions = {
	add_department: async (event) => {
        const form = await superValidate(event, zod(departmentFormSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

        const { name, code, desc } = form.data;
        
        // example id value: deptcode-w201
        const id = code.toUpperCase() + '-' + generateId(4);

        // todo: checking if name is exists and also must be LIKE in sql
        const existingDept = await db
            .select()
            .from(departmentTable)
            .where(eq(departmentTable.name, name.toString()));

        const isDeptExists = existingDept.length > 0;
        if (isDeptExists) {
            return message(form, 'Department already exists');
        }

        try {
            
            await db
                .insert(departmentTable)
                .values(
                    {
                        id: id,
                        name: name,
                        code: code.toUpperCase(),
                        desc: desc 
                    }
                );

            return message(form, 'Added');
        } catch (error) {
            return fail(500, {
				form
			});
        }
	},
    edit_department: async (event) => {
        const form = await superValidate(event, zod(departmentFormSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

        // todo CRUD - UPDATE
        
        console.log('EDITED');
    },
    remove_department: async ({request}) => {
        const formData = await request.formData();

        const dept_id = formData.get('remove_dept_id') as string;
        
        const messages = ["Removed Successfully", "Error Fetching the Data"];
        let msg = messages[0];

        try {
            await db.update(departmentTable).set({delete: true}).where(eq(departmentTable.id, dept_id));
        } catch (error) {
            msg = messages[1] . error.message;
        }

        toast.message(msg);
    }
} satisfies Actions;