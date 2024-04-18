<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import { Pencil } from 'lucide-svelte';
</script>

<Dialog.Root>
	<Dialog.Trigger><Pencil /></Dialog.Trigger>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Editing</Dialog.Title>
			<Dialog.Description></Dialog.Description>
		</Dialog.Header>
	</Dialog.Content>
</Dialog.Root>
