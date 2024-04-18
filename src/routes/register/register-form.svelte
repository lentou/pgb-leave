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

<section class="bg-gray-50 dark:bg-gray-900">
	<div class="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
		<div
			class="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0"
		>
			<div class="space-y-4 p-6 sm:p-8 md:space-y-6">
				<h1
					class="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl"
				>
					Create account
				</h1>
				<form class="space-y-4 md:space-y-6" method="POST" use:enhance>
					<div>
						<Form.Field {form} name="username">
							<Form.Control let:attrs>
								<Form.Label
									for="email"
									class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
									>Username</Form.Label
								>
								<Input
									type="text"
									{...attrs}
									bind:value={$formData.username}
									class="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
								/>
							</Form.Control>
							<Form.FieldErrors />
						</Form.Field>
					</div>
					<div>
						<Form.Field {form} name="password">
							<Form.Control let:attrs>
								<Form.Label
									for="password"
									class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
									>Password</Form.Label
								>
								<Input
									type="password"
									{...attrs}
									bind:value={$formData.password}
									placeholder="••••••••"
									class="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
								/>
							</Form.Control>
							<Form.FieldErrors />
						</Form.Field>
					</div>
					<Form.Button
						class="bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-black focus:outline-none focus:ring-4"
						>Create an account</Form.Button
					>
					<p class="text-sm font-light text-gray-500 dark:text-gray-400">
						Already have an account? <a
							href="#"
							class="text-primary-600 dark:text-primary-500 font-medium hover:underline"
							>Login here</a
						>
					</p>
				</form>
			</div>
		</div>
	</div>
</section>
