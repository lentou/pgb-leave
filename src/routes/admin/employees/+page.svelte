<script lang="ts">
	import DashboardForm from '../../admin/+layout.svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import DataTable from '../employees/employee-table/data-table.svelte';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
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
						<Breadcrumb.Page>Employees</Breadcrumb.Page>
					</Breadcrumb.Item>
				</Breadcrumb.List>
			</Breadcrumb.Root>
		</div>
		<p class="mb-16 text-4xl font-bold text-slate-800">Manage Employees</p>
		<div class="mb-5 flex justify-end">
			<div class="text-1xl size-fit justify-end rounded-xl bg-white p-3 hover:bg-blue-400">
				<Dialog.Root>
					<Dialog.Trigger>Add Employee</Dialog.Trigger>
					<Dialog.Content>
						<Dialog.Header>
							<Dialog.Title>Are you sure absolutely sure?</Dialog.Title>
							<Dialog.Description>
								This action cannot be undone. This will permanently delete your account and remove
								your data from our servers.
							</Dialog.Description>
						</Dialog.Header>
					</Dialog.Content>
				</Dialog.Root>
			</div>
		</div>
	</div>

	<DataTable></DataTable>
</div>
