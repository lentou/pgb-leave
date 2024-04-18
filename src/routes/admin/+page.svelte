<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb';
</script>

<Breadcrumb.Root>
	<Breadcrumb.List>
		<Breadcrumb.Item>
			<Breadcrumb.Page>Dashboard</Breadcrumb.Page>
		</Breadcrumb.Item>
	</Breadcrumb.List>
</Breadcrumb.Root>

<div class="mb-4 grid grid-cols-4 gap-4">
	<Card.Root>
		<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
			<Card.Title class="text-sm font-medium">Annual Leave</Card.Title>
			<!--<DollarSign class="h-4 w-4 text-muted-foreground" />-->
		</Card.Header>
		<Card.Content>
			<div class="text-2xl font-bold">23</div>
			<p class="text-xs text-muted-foreground">This March</p>
		</Card.Content>
	</Card.Root>
	<Card.Root>
		<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
			<Card.Title class="text-sm font-medium">Sick Leave</Card.Title>
			<!--<DollarSign class="h-4 w-4 text-muted-foreground" />-->
		</Card.Header>
		<Card.Content>
			<div class="text-2xl font-bold">23</div>
			<p class="text-xs text-muted-foreground">This March</p>
		</Card.Content>
	</Card.Root>
	<Card.Root>
		<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
			<Card.Title class="text-sm font-medium">Other Leave</Card.Title>
			<!--<DollarSign class="h-4 w-4 text-muted-foreground" />-->
		</Card.Header>
		<Card.Content>
			<div class="text-2xl font-bold">23</div>
			<p class="text-xs text-muted-foreground">This March</p>
		</Card.Content>
	</Card.Root>
	<Card.Root>
		<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
			<Card.Title class="text-sm font-medium">Pending Request</Card.Title>
			<!--<DollarSign class="h-4 w-4 text-muted-foreground" />-->
		</Card.Header>
		<Card.Content>
			<div class="text-2xl font-bold">23</div>
			<p class="text-xs text-muted-foreground">This March</p>
		</Card.Content>
	</Card.Root>
</div>
