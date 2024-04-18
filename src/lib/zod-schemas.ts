import { z } from 'zod';

export const registerFormSchema = z.object({
	username: z.string().min(2, { message: "Must be 2 or more characters long" }).max(50),
	password: z.string().min(4, { message: "Must be 4 or more characters long" }).max(255)
});

export const loginFormSchema = z.object({
	username: z.string().min(2, { message: "Must be 2 or more characters long" }),
	password: z.string().min(4, { message: "Must be 4 or more characters long"})
});

export const departmentFormSchema = z.object({
	name: z.string().min(1, { message: "Put the name of department"}).max(50, { message: "Maximum of 50 characters"}),
	code: z.string().min(1, { message: "Put the code of department"}).max(10, { message: "Maximum of 10 characters"}),
	desc: z.string().min(1, { message: "Put the description of department"}).max(127, { message: "Maximum of 127 characters"})
});

export const removeDeptSchema = z.object({
	remove_id: z.string()
});

export type RegisterFormSchema = typeof registerFormSchema;
export type LoginFormSchema = typeof loginFormSchema;
export type DepartmentFormSchema = typeof departmentFormSchema;
export type RemoveDeptSchema = typeof removeDeptSchema;


