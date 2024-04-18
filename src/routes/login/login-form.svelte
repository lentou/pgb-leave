<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';

	import { loginFormSchema, type LoginFormSchema } from '$lib/zod-schemas';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let data: SuperValidated<Infer<LoginFormSchema>>;

	let message = 'Hello, World!';
	let types = ['success', 'error', 'info'];
	let type = 'success';
	let dismissible = true;
	let timeout = 0;

	const form = superForm(data, {
		validators: zodClient(loginFormSchema),
		onUpdate(event) {
			if (!event.form.valid) {
				console.log('not valid');
				return;
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<main class=" 	flex min-h-screen items-center justify-center">
	<div class="relative right-16 inline-block">
		<div
			class="container mb-24 ml-32 rounded-2xl bg-gradient-to-l from-indigo-500 to-blue-500 pb-56 pt-32"
		>
			<p class="  font-sans text-2xl font-bold text-white">PGB Leave Application</p>
			<p class="  text-1xl font-sans text-slate-700">Apply and Manage your leaves</p>
			<p class=" text-1xl font-sans text-slate-700">in the easiest way possible</p>
		</div>
		<div>
			<img src="./src/assets/login.png" class="absolute left-10 top-60" alt="" />
		</div>
	</div>

	<div class=" relative right-20">
		<form
			method="POST"
			use:enhance
			class="  rounded-3xl border-4 bg-gray-200 px-8 pb-32 pt-32 shadow-xl"
		>
			<Form.Field {form} name="username" class=" ">
				<Form.Control let:attrs>
					<div class="mb-32 flex justify-center">
						<Form.Label class="  text-4xl  text-blue-600">Sign In</Form.Label>
					</div>
					<Form.Label>Email</Form.Label>

					<Input required placeholder="Email" {...attrs} bind:value={$formData.username} />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<Form.Field {form} name="password" class="">
				<Form.Control let:attrs>
					<Form.Label>Password</Form.Label>
					<Input
						required
						type="password"
						placeholder="Password"
						{...attrs}
						bind:value={$formData.password}
					/>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<Form.Button
				class=" mt-8 flex w-80 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 shadow-lg"
				>Login</Form.Button
			>
		</form>
	</div>
</main>
