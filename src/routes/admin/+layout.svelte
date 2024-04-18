<script lang="ts">
	import { enhance } from '$app/forms';
	import { AlignJustify, Landmark, LayoutDashboardIcon, FileText } from 'lucide-svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { FileType2 } from 'lucide-svelte';
	import { ChevronDown } from 'lucide-svelte';
	import { LogOut } from 'lucide-svelte';
	import { UsersRound } from 'lucide-svelte';
	import { dashboardFormSchema, type DashboardFormSchema } from '$lib/zod-schemas';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import type { ComponentType } from 'svelte';
	import type { Icon } from 'lucide-svelte';

	export let data: SuperValidated<Infer<DashboardFormSchema>>;

	const form = superForm(data, {
		validators: zodClient(dashboardFormSchema)
	});

	const { form: formData } = form;

	type DashboardItem = {
		name: string;
		href: string;
		icon: ComponentType<Icon>;
	};

	const dashboardItems: DashboardItem[] = [
		{
			name: 'Dashboard',
			href: '/admin/dashboard',
			icon: LayoutDashboardIcon
		},
		{
			href: '/admin/departments',
			name: 'Departments',
			icon: Landmark
		},
		{
			href: '/admin/employees',
			name: 'Employees',
			icon: UsersRound
		},
		{
			href: '/admin/leave-type',
			name: 'Leave Types',
			icon: FileText
		},
		{
			href: '/admin/leave-type',
			name: 'Manage Leaves',
			icon: FileType2
		}
	];
</script>

<aside
	id="logo-sidebar"
	class="fixed mt-6 h-screen w-64 -translate-x-full border-r transition-transform dark:border-gray-700 dark:bg-gray-800 sm:translate-x-0"
	aria-label="Sidebar"
>
	<div class="h-full overflow-y-auto bg-[url('./src/assets/login.png')] px-3 dark:bg-gray-800">
		<ul class=" space-y-2 font-medium">
			{#each dashboardItems as item}
				<li>
					<a
						href={item.href}
						class=" group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
					>
						<svelte:component this={item.icon} />
						<span class="ms-3">{item.name}</span>
					</a>
				</li>
			{/each}

			<li>
				<a
					href=""
					class=" group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
				>
					<LogOut class="mr-3 flex" />
					<form method="post" action="/logout">
						<button>Sign out</button>
					</form>
				</a>
			</li>
		</ul>
	</div>
</aside>

<div
	class="min-h-screen bg-white/30 bg-gradient-to-l from-gray-200 via-slate-300 to-gray-200 sm:ml-64"
>
	<div class="">
		<slot />
	</div>
</div>
