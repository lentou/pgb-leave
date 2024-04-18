<script lang="ts">
	import AddDialog from './add-dialog.svelte';
	import DataTable from './data-table.svelte';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb';

	export let data;

	const fetchDepts = data.result;
</script>

<Breadcrumb.Root>
	<Breadcrumb.List>
		<Breadcrumb.Item>
			<Breadcrumb.Link href="/admin">Dashboard</Breadcrumb.Link>
		</Breadcrumb.Item>
		<Breadcrumb.Separator />
		<Breadcrumb.Item>
			<Breadcrumb.Page>Department</Breadcrumb.Page>
		</Breadcrumb.Item>
	</Breadcrumb.List>
</Breadcrumb.Root>

<AddDialog data={data.form} />
<DataTable data={data.result} />

<!--
<Table.Root data-sveltekit-reload>
	<Table.Caption>A list of departments and its actions</Table.Caption>
	<Table.Header>
		<Table.Row>
			<Table.Head class="w-[100px]">ID</Table.Head>
			<Table.Head>Name</Table.Head>
			<Table.Head>Code</Table.Head>
			<Table.Head class="text-right">Action</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each fetchDepts as department, i (i)}
			<Table.Row>
				<Table.Cell class="font-medium">{department.id}</Table.Cell>
				<Table.Cell>{department.name}</Table.Cell>
				<Table.Cell>{department.code}</Table.Cell>
				<Table.Cell class="text-right">
					<RemoveDialog data={data.form} />
					<EditDialog data={data.form} />
				</Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
-->
