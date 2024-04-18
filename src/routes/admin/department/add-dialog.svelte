<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { SquarePlus } from 'lucide-svelte';
	import { toast } from 'svelte-sonner';
	import { departmentFormSchema, type DepartmentFormSchema } from '$lib/zod-schemas';

	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let data: SuperValidated<Infer<DepartmentFormSchema>>;

	const form = superForm(data, {
		validators: zodClient(departmentFormSchema),
		onUpdate(event) {
			if (!event.form.valid) {
				toast.message(event.form.message);
				return;
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<Dialog.Root>
	<Dialog.Trigger><SquarePlus /></Dialog.Trigger>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>Department</Dialog.Title>
			<Dialog.Description>Adding department here. Click submit when you're done.</Dialog.Description
			>
		</Dialog.Header>

		<form method="POST" use:enhance action="?/add_department">
			<div class="grid gap-4 py-4">
				<Form.Field {form} name="name">
					<Form.Control let:attrs>
						<div class="grid grid-cols-4 items-center gap-4">
							<Label for="name" class="text-right">Name</Label>
							<Input
								{...attrs}
								bind:value={$formData.name}
								placeholder="Full name of deparment"
								class="col-span-3"
							/>
						</div>
						<Form.FieldErrors />
					</Form.Control>
				</Form.Field>
				<Form.Field {form} name="code">
					<Form.Control let:attrs>
						<div class="grid grid-cols-4 items-center gap-4">
							<Label for="code" class="text-right">Code</Label>
							<Input
								{...attrs}
								bind:value={$formData.code}
								placeholder="Code or abbreviation"
								class="col-span-3"
							/>
						</div>
						<Form.FieldErrors />
					</Form.Control>
				</Form.Field>
				<Form.Field {form} name="desc">
					<Form.Control let:attrs>
						<div class="grid grid-cols-4 items-center gap-4">
							<Label for="desc" class="text-right">Description</Label>
							<Input
								{...attrs}
								bind:value={$formData.desc}
								placeholder="Short description of department"
								class="col-span-3"
							/>
						</div>
						<Form.FieldErrors />
					</Form.Control>
				</Form.Field>
			</div>
			<Dialog.Footer>
				<Button type="submit">Submit</Button>
			</Dialog.Footer>
		</form>
	</Dialog.Content>
</Dialog.Root>
