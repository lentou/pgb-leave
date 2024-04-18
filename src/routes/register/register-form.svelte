<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { registerFormSchema, type RegisterFormSchema } from '$lib/zod-schemas';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let data: SuperValidated<Infer<RegisterFormSchema>>;

	const form = superForm(data, {
		validators: zodClient(registerFormSchema)
	});

	const { form: formData, enhance } = form;
</script>

<div class="flex h-screen items-center justify-center bg-slate-300">
	<div
		class="w-42 mb-4 h-4/5 rounded-l-3xl bg-gradient-to-r from-indigo-500 to-blue-500 px-8 pb-8 pt-6 shadow-lg"
	></div>
	<form
		method="POST"
		use:enhance
		class="mb-4 h-4/5 rounded-r-3xl border-b-8 border-t-8 border-gray-200 bg-white bg-gradient-to-b from-gray-200 to-transparent px-8 pb-8 pt-6 shadow-lg"
	>
		<Form.Field {form} name="username">
			<Form.Control let:attrs>
				<Input placeholder="Username/Email" {...attrs} bind:value={$formData.username} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="password">
			<Form.Control let:attrs>
				<Input placeholder="Password" type="password" {...attrs} bind:value={$formData.password} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Button
			class="mt-10 flex w-80 items-center justify-center rounded-3xl bg-gradient-to-r from-indigo-500 to-blue-500"
			>Register</Form.Button
		>
	</form>
</div>
