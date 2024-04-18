<script lang="ts">
	import * as Breadcrumb from '$lib/components/ui/breadcrumb';
	import * as Table from '$lib/components/ui/table';
	import { Settings2 } from 'lucide-svelte';

	// TODO: for each data of employee data from employee table
	const invoices = [
		{
			invoice: 'INV001',
			paymentStatus: 'Paid',
			totalAmount: '$250.00',
			paymentMethod: 'Credit Card'
		},
		{
			invoice: 'INV002',
			paymentStatus: 'Pending',
			totalAmount: '$150.00',
			paymentMethod: 'PayPal'
		},
		{
			invoice: 'INV003',
			paymentStatus: 'Unpaid',
			totalAmount: '$350.00',
			paymentMethod: 'Bank Transfer'
		},
		{
			invoice: 'INV004',
			paymentStatus: 'Paid',
			totalAmount: '$450.00',
			paymentMethod: 'Credit Card'
		},
		{
			invoice: 'INV005',
			paymentStatus: 'Paid',
			totalAmount: '$550.00',
			paymentMethod: 'PayPal'
		},
		{
			invoice: 'INV006',
			paymentStatus: 'Pending',
			totalAmount: '$200.00',
			paymentMethod: 'Bank Transfer'
		},
		{
			invoice: 'INV007',
			paymentStatus: 'Unpaid',
			totalAmount: '$300.00',
			paymentMethod: 'Credit Card'
		}
	];
</script>

<Breadcrumb.Root>
	<Breadcrumb.List>
		<Breadcrumb.Item>
			<Breadcrumb.Link href="/admin">Dashboard</Breadcrumb.Link>
		</Breadcrumb.Item>
		<Breadcrumb.Separator />
		<Breadcrumb.Item>
			<Breadcrumb.Page>Employees</Breadcrumb.Page>
		</Breadcrumb.Item>
	</Breadcrumb.List>
</Breadcrumb.Root>

<Table.Root>
	<Table.Caption>A list of employees</Table.Caption>
	<Table.Header>
		<Table.Row>
			<Table.Head class="w-[100px]">ID</Table.Head>
			<Table.Head>Full Name</Table.Head>
			<Table.Head>Department</Table.Head>
			<Table.Head>Position</Table.Head>
			<Table.Head class="text-right">Action</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		<!--{#each invoices as invoice, i (i)}-->
		<Table.Row>
			<Table.Cell class="font-medium"><!--{invoice.invoice}--></Table.Cell>
			<Table.Cell><!--{invoice.paymentStatus}--></Table.Cell>
			<Table.Cell><!--{invoice.paymentMethod}--></Table.Cell>
			<Table.Cell></Table.Cell>
			<Table.Cell class="text-right"
				><!--{invoice.totalAmount}-->
				<button>
					<Settings2 />
				</button>
			</Table.Cell>
		</Table.Row>
		<!--{/each}-->
	</Table.Body>
</Table.Root>
