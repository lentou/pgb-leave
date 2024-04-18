import { boolean, pgTable, text, timestamp, date, varchar, real } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const userTable = pgTable('auth_user', {
	id: text('id').primaryKey(),
	username: text('username').notNull().unique(),
	hashed_password: text('hashed_password').notNull(),
	is_admin: boolean('is_admin').notNull().default(false),
	delete: boolean('delete').default(false)
});

// user session
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

export const employeeTable = pgTable('employees', {
	id: text('id').primaryKey(),
	userId: text('user_id').notNull().references(() => userTable.id),
	departmentId: text('department_id').notNull().references(() => departmentTable.id),
	leaveTypeId: text('leave_type_id').notNull().references(() => leaveTypeTable.id),
	leaveScoreId: text('leave_score_id').notNull().references(() => leaveScoreTable.id),
	firstName: text('first_name').notNull(),
	middleName: text('middle_name'),
	lastName: text('last_name').notNull(),
	contacts: text('contact').unique(),
	email: text('email'),
	birthday: date('birthday', { mode: "date"}),
	position: text('position') 
});

export const departmentTable = pgTable('department', {
	id: text('id').primaryKey(),
	name: text('name').notNull(),
	code: varchar('code', { length: 10 }).notNull(),
	desc: text('desc'),
	delete: boolean('delete').default(false)
});

export const leaveScoreTable = pgTable('leave_scores', {
	id: text('id').primaryKey(),
	employee_id: text('employee_id').notNull().references(() => employeeTable.id),
	score: real('score'),
	year: varchar('year', { length: 4})
});

export const leaveTypeTable = pgTable('leave_types', {
	id: text('id').primaryKey(),
	name: varchar('name', { length: 30}),
	desc: text('desc'),
	score: real('score')
});

export const leaveAppTable = pgTable('leave_app', {
	id: text('id').primaryKey(),
	employee_id: text('employee_id').notNull().references(() => employeeTable.id),
	start_date: date('start_date').notNull(),
	end_date: date('end_date'),
	reason: text('reason'),
	score: real('score'),
	status: varchar('status', {length: 10}),
	requestedOn: timestamp('requested_on').default(sql`CURRENT_TIMESTAMP`)
});

