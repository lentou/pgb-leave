<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Card from '$lib/components/ui/card';

	import DataTable from '../dashboard/upcoming-leave-table/data-table.svelte';
</script>

<div class=" text-4xl">Dashboard</div>

<div class="justify-center text-2xl">
	My leave Score
	<div
		class=" float-right justify-center rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-500 p-2.5 text-center"
	>
		<Dialog.Root>
			<Dialog.Trigger class="text-white">Apply Leave</Dialog.Trigger>
			<Dialog.Content>
				<Dialog.Header>
					<Dialog.Title>Are you sure absolutely sure?</Dialog.Title>
					<Dialog.Description>
						This action cannot be undone. This will permanently delete your account and remove your
						data from our servers.
					</Dialog.Description>
				</Dialog.Header>
			</Dialog.Content>
		</Dialog.Root>
	</div>
</div>
<div class="mt-10 flex space-x-5">
	<div class="-shadow-sm border-r-2">
		<Card.Root>
			<Card.Header>
				<Card.Title>Annual Leave</Card.Title>
				<Card.Description>Card Description</Card.Description>
			</Card.Header>
			<Card.Content>
				<p>Card Content</p>
			</Card.Content>
			<Card.Footer>
				<p>Card Footer</p>
			</Card.Footer>
		</Card.Root>
	</div>
	<div class="-shadow-sm border-r-2">
		<Card.Root>
			<Card.Header>
				<Card.Title>Annual Leave</Card.Title>
				<Card.Description>Card Description</Card.Description>
			</Card.Header>
			<Card.Content>
				<p>Card Content</p>
			</Card.Content>
			<Card.Footer>
				<p>Card Footer</p>
			</Card.Footer>
		</Card.Root>
	</div>
	<div class="-shadow-sm border-r-2">
		<Card.Root>
			<Card.Header>
				<Card.Title>Annual Leave</Card.Title>
				<Card.Description>Card Description</Card.Description>
			</Card.Header>
			<Card.Content>
				<p>Card Content</p>
			</Card.Content>
			<Card.Footer>
				<p>Card Footer</p>
			</Card.Footer>
		</Card.Root>
	</div>
	<div class="-shadow-sm border-r-2">
		<Card.Root>
			<Card.Header>
				<Card.Title>Annual Leave</Card.Title>
				<Card.Description>Card Description</Card.Description>
			</Card.Header>
			<Card.Content>
				<p>Card Content</p>
			</Card.Content>
			<Card.Footer>
				<p>Card Footer</p>
			</Card.Footer>
		</Card.Root>
	</div>
	<div class="-shadow-sm border-r-2">
		<Card.Root>
			<Card.Header>
				<Card.Title>Annual Leave</Card.Title>
				<Card.Description>Card Description</Card.Description>
			</Card.Header>
			<Card.Content>
				<p>Card Content</p>
			</Card.Content>
			<Card.Footer>
				<p>Card Footer</p>
			</Card.Footer>
		</Card.Root>
	</div>
</div>

<div class="mt-12 text-2xl">My Upcoming Leave</div>
<DataTable />
