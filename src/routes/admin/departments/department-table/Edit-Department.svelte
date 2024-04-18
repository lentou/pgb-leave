<script lang="ts">
	import Ellipsis from 'lucide-svelte/icons/ellipsis';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Button } from '$lib/components/ui/button';
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Trash } from 'lucide-svelte';
	import { SquarePen } from 'lucide-svelte';
	import { enhance } from '$app/forms';
	import DataTable from './data-table.svelte';
	import { departmentTable } from '$lib/server/db/schema';
	export let data: { id: string; department_name: string; department_code: string };
</script>

<form method="POST" action="?/edit_department">
	<div class="grid gap-4 py-4">
		<div class="grid grid-cols-4 items-center gap-4">
			<Label for="name" class="text-right">Department Name</Label>
			<Input id="name" bind:value={data.department_name} class="col-span-3" />
		</div>
		<div class="grid grid-cols-4 items-center gap-4">
			<Label for="username" class="text-right">Department Code</Label>
			<Input id="username" bind:value={data.department_code} class="col-span-3" />
		</div>
	</div>

	<Dialog.Footer>
		<Button type="submit">Save changes</Button>
	</Dialog.Footer>
</form>
