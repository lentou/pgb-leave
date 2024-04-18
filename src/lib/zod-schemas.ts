import { z } from 'zod';

export const registerFormSchema = z.object({
	username: z.string().min(6, { message: 'Must be 6 or more characters long' }).max(50).max(50),

	password: z.string().min(8, { message: 'Must be 8 or more characteres long' }).max(255)
});

export const loginFormSchema = z.object({
	username: z.string().min(6, { message: 'Must be 6 or more characters long' }).max(50),

	password: z.string().min(8, { message: 'Must be 8 or more characters long' }).max(255)
});

export const dashboardFormSchema = z.object({
	department: z.string().min(6, { message: 'Must be 6 or more characters long' }).max(50)
});

export const departmentFormSchema = z.object({
	departmentName: z.string().min(6, { message: 'Must be 6 or more characters long' }).max(50),
	departmentCode: z.string().min(1, { message: 'Must be 6 or more characters long' }).max(50)
});

export const leaveTypeFormSchema = z.object({
	name: z.string().min(1, { message: 'Must be 6 or more characters long' }).max(50),
	score: z.string().min(1, { message: 'Must be 6 or more characters long' }).max(50),
	description: z.string().min(1, { message: 'Must be 6 or more characters long' }).max(50)
});

export type RegisterFormSchema = typeof registerFormSchema;
export type LoginFormSchema = typeof loginFormSchema;
export type DashboardFormSchema = typeof dashboardFormSchema;
export type DepartmentFormSchema = typeof departmentFormSchema;
export type LeaveTypeFormSchema = typeof leaveTypeFormSchema;
