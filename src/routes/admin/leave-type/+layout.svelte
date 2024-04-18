<script lang="ts">
	import DashboardForm from '../../admin/+layout.svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import DataTable from '../departments/department-table/data-table.svelte';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import {
		departmentFormSchema,
		leaveTypeFormSchema,
		type LeaveTypeFormSchema
	} from '$lib/zod-schemas';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { Plus } from 'lucide-svelte';
	import { Trash2 } from 'lucide-svelte';

	export let data: SuperValidated<Infer<LeaveTypeFormSchema>>;

	const form = superForm(data, {
		validators: zodClient(leaveTypeFormSchema)
	});

	const { form: formData, enhance } = form;
</script>

<div class="container">
	<div>
		<div class="pt-7">
			<Breadcrumb.Root>
				<Breadcrumb.List>
					<Breadcrumb.Item>
						<Breadcrumb.Link asChild let:attrs>
							<a href="/" {...attrs}>Dashboard</a>
						</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator />

					<Breadcrumb.Item>
						<Breadcrumb.Page>Leave-types</Breadcrumb.Page>
					</Breadcrumb.Item>
				</Breadcrumb.List>
			</Breadcrumb.Root>
		</div>
		<p class="mb-16 text-4xl font-bold text-slate-800 max-lg:text-2xl">Manage Leave-types</p>

		<div class="mb-5 flex justify-end">
			<form method="POST" action="?/delete_department">
				<button class="mr-3 rounded-2xl bg-red-300 p-2 pb-3 hover:bg-red-400"> <Trash2 /> </button>
			</form>
			<div class="text-1xl size-fit justify-end rounded-2xl bg-green-200 p-3 hover:bg-green-400">
				<Dialog.Root>
					<Dialog.Trigger class="flex"><Plus /> Department</Dialog.Trigger>
					<Dialog.Content>
						<Dialog.Header>
							<Dialog.Title>Add Department</Dialog.Title>

							<form method="POST" action="?/add_department">
								<Form.Field {form} name="name">
									<Form.Control let:attrs>
										<Form.Label>Leave Name</Form.Label>
										<Input {...attrs} bind:value={$formData.name} />
									</Form.Control>

									<Form.FieldErrors />
								</Form.Field>
								<Form.Field {form} name="description">
									<Form.Control let:attrs>
										<Form.Label>Leave Description</Form.Label>
										<Input {...attrs} bind:value={$formData.description} />
									</Form.Control>

									<Form.FieldErrors />
								</Form.Field>
								<div class="flex justify-end">
									<Form.Button class=" rounded-2xl bg-gray-800">Save</Form.Button>
								</div>
							</form>
						</Dialog.Header>
					</Dialog.Content>
				</Dialog.Root>
			</div>
		</div>
	</div>
	<slot />
</div>
