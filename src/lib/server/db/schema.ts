import { sql } from 'drizzle-orm';
import { pgTable, text, timestamp, real, date, varchar, boolean } from 'drizzle-orm/pg-core';
import { ScrollText } from 'lucide-svelte';

export const userTable = pgTable('auth_user', {
	id: text('id').primaryKey(),
	username: text('username').notNull().unique(),
	hashed_password: text('hashed_password').notNull(),
	is_admin: boolean('is_admin').notNull().default(false),
	delete: boolean('delete').default(false)
});

export const sessionTable = pgTable('user_session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => userTable.id),
	expiresAt: timestamp('expires_at', {
		withTimezone: true,
		mode: 'date'
	}).notNull()
});

export const departmentTable = pgTable('departments', {
	id: text('id').primaryKey(),
	department_name: text('department_name').notNull(),
	department_code: text('department_code').notNull(),
	delete: boolean('delete').default(false)
});

export const employeeTable = pgTable('employees', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => userTable.id),
	first_name: text('first_name').notNull(),
	middle_name: text('middle_name'),
	email: text('email').notNull(),
	last_name: text('last_name').notNull(),
	contact_number: text('contact_number').notNull(),
	birthday: date('birthday', { mode: 'date' }),
	departmentId: text('departmentId')
		.notNull()
		.references(() => departmentTable.id),
	leaveTypeId: text('leaveTypeId')
		.notNull()
		.references(() => leaveTypeTable.id),
	leaveScoreId: text('leaveScoreId')
		.notNull()
		.references(() => leaveTypeTable.id),

	position: text('position')
});

export const leaveTypeTable = pgTable('leave_types', {
	id: text('id').primaryKey(),
	name: text('name'),
	score: real('department_code'),
	description: text('description').notNull(),
	delete: boolean('delete').default(false)
});

export const leaveScoreTable = pgTable('leave_score', {
	id: text('id').primaryKey(),
	employee_id: text('department_name')
		.notNull()
		.references(() => employeeTable.id),
	score: real('score'),
	description: text('description').notNull()
});

export const leaveApplicationTable = pgTable('leave_app', {
	id: text('id').primaryKey(),
	employee_id: text('department_name')
		.notNull()
		.references(() => employeeTable.id),
	start_date: date('start_date').notNull(),
	end_date: date('end_date'),
	reason: text('reason').notNull(),
	score: real('score'),
	status: varchar('status', { length: 10 }),
	requestedOn: timestamp('requested_on').default(sql`CURRENT_TIMESTAMP`)
});
