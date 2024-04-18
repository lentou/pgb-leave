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
	import DeleteDeparment from './Delete-Department.svelte';
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	export let departmentId: string;
	export let departmentCode: string;
	export let departmentName: string;
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button variant="ghost" builders={[builder]} size="icon" class="relative h-8 w-8 p-0">
			<span class="sr-only">Open menu</span>
			<Ellipsis class="h-4 w-4" />
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="rounded-3xl bg-white p-3">
		<Dialog.Root>
			<div class="">
				<Dialog.Trigger class="flex rounded-2xl bg-orange-300 p-2.5 pr-14 hover:bg-orange-400 ">
					<SquarePen />
					Edit</Dialog.Trigger
				>
			</div>

			<Dialog.Content class=" sm:max-w-[625px]">
				<Dialog.Header>
					<Dialog.Title>Edit Department</Dialog.Title>
					<Dialog.Description>
						Make changes about the information about the department here. Click save when you're
						done.
					</Dialog.Description>
				</Dialog.Header>
				<form method="POST" action="?/edit_department">
					<div class="grid gap-4 py-4">
						<div class="grid grid-cols-4 items-center gap-4">
							<Label for="name" class="text-right">Department Name</Label>
							<Input id="name" value={departmentName} class="col-span-3" />
							<input type="hidden" name="id" value={departmentId} />
						</div>
						<div class="grid grid-cols-4 items-center gap-4">
							<Label for="username" class="text-right">Department Code</Label>
							<Input id="username" value={departmentCode} class="col-span-3" />
							<input type="hidden" name="id" value={departmentId} />
						</div>
					</div>

					<Dialog.Footer>
						<Button type="submit">Save changes</Button>
					</Dialog.Footer>
				</form>
			</Dialog.Content>
		</Dialog.Root>

		<DropdownMenu.Separator />

		<Dialog.Root>
			<Dialog.Trigger class="flex  rounded-2xl bg-red-300 p-2.5  pr-10	 hover:bg-red-400 ">
				<Trash />

				Delete</Dialog.Trigger
			>
			<Dialog.Content class=" sm:max-w-[625px]">
				<Dialog.Header>
					<Dialog.Title>Delete Department</Dialog.Title>
					<Dialog.Description>
						Make changes about the information about the department here. Click save when you're
						done.
					</Dialog.Description>
				</Dialog.Header>
				<Dialog.Footer>
					<form method="POST" action="?/delete_department">
						<Button type="submit">Save changes</Button>
					</form>
				</Dialog.Footer>
			</Dialog.Content>
		</Dialog.Root>
	</DropdownMenu.Content>
</DropdownMenu.Root>
