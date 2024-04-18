<script lang="ts">
	import { goto } from '$app/navigation';
	import { toggleMode } from 'mode-watcher';
	import type { ComponentType } from 'svelte';
	import type { Icon } from 'lucide-svelte';
	import { LayoutDashboard, UsersRound, Landmark, SunMoon, LogOut } from 'lucide-svelte';

	type MenuItem = {
		name: string;
		href: string;
		icon: ComponentType<Icon>;
	};

	const menuItems: MenuItem[] = [
		{
			name: 'Dashboard',
			href: '/admin',
			icon: LayoutDashboard
		},
		{
			name: 'Employees',
			href: '/admin/employees',
			icon: UsersRound
		},
		{
			name: 'Department',
			href: '/admin/department',
			icon: Landmark
		}
	];
</script>

<button
	data-drawer-target="sidebar-multi-level-sidebar"
	data-drawer-toggle="sidebar-multi-level-sidebar"
	aria-controls="sidebar-multi-level-sidebar"
	type="button"
	class="ms-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"
>
	<span class="sr-only">Open sidebar</span>
	<svg
		class="h-6 w-6"
		aria-hidden="true"
		fill="currentColor"
		viewBox="0 0 20 20"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			clip-rule="evenodd"
			fill-rule="evenodd"
			d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
		></path>
	</svg>
</button>

<aside
	id="sidebar-multi-level-sidebar"
	class="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0"
	aria-label="Sidebar"
>
	<div class="h-full overflow-y-auto bg-gray-50 px-3 py-4 dark:bg-gray-800">
		<ul class="space-y-2 font-medium">
			{#each menuItems as item}
				<li>
					<a
						href={item.href}
						class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
					>
						<svelte:component this={item.icon} />
						<span class="ms-3">{item.name}</span>
					</a>
				</li>
			{/each}
			<li>
				<button
					on:click={toggleMode}
					class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
				>
					<SunMoon />
					<span class="ms-3 flex-1 whitespace-nowrap"> Theme </span>
				</button>
			</li>
			<li>
				<form method="POST" action="/admin?/signout">
					<button
						class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
					>
						<LogOut />
						<span class="ms-3 flex-1 whitespace-nowrap">Sign Out</span>
					</button>
				</form>
			</li>
		</ul>
	</div>
</aside>

<div class="p-4 sm:ml-64">
	<div class="border-collapse rounded-lg border-2 border-gray-200 p-4 dark:border-gray-700">
		<slot />
	</div>
</div>
