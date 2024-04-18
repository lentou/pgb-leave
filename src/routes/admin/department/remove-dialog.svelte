<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { Trash } from 'lucide-svelte';

	export let id: string;
</script>

<Dialog.Root>
	<Dialog.Trigger><Trash /></Dialog.Trigger>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>Department</Dialog.Title>
			<Dialog.Description
				>Removing department here. Are you sure you want to remove this department?</Dialog.Description
			>
		</Dialog.Header>

		<form method="POST" action="?/remove_department">
			<Dialog.Footer>
				<input type="hidden" value={id} name="remove_dept_id" />
				<Button type="submit">Submit</Button>
			</Dialog.Footer>
		</form>
	</Dialog.Content>
</Dialog.Root>
