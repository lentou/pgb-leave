<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { toast } from 'svelte-sonner';
	import { loginFormSchema, type LoginFormSchema } from '$lib/zod-schemas';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let data: SuperValidated<Infer<LoginFormSchema>>;

	const form = superForm(data, {
		validators: zodClient(loginFormSchema),
		onUpdate(event) {
			if (!event.form.valid) {
				toast.message(event.form.message);
				return;
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<div
	class="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"
>
	<div class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
		<div
			class="absolute inset-0 bg-cover"
			style="
				background-image:
					url(https://scontent.fcrk4-1.fna.fbcdn.net/v/t1.6435-9/70057900_1488818921259582_8491025416478261248_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG32ffQHRB4VaqDnBKRzZhP_i_UmnAdGQv-L9SacB0ZCxT1BugNT3WLDPvBOhDjLeq5gMiALDe_k00TC3R1aRaM&_nc_ohc=eOnRGTGIK7YAX_B8kzR&_nc_ht=scontent.fcrk4-1.fna&oh=00_AfBpkSrWyWgU7xmrlRBdT4t7g_kyxiLZtQiZtuRiC-XEEw&oe=6619AE6E);"
		/>
		<div class="relative z-20 flex items-center text-lg font-medium">1Bataan</div>
	</div>
	<div class="lg:p-8">
		<div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
			<div class="flex flex-col space-y-2 text-center">
				<h1 class="text-2xl font-semibold tracking-tight">PGB Leave Application</h1>
				<p class="text-sm text-muted-foreground">Login to proceed</p>
			</div>

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
								required
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
								placeholder="••••"
								required
								class="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
							/>
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
				</div>
				<Form.Button
					class="bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-black focus:outline-none focus:ring-4"
					>Login</Form.Button
				>
			</form>
		</div>
	</div>
</div>
