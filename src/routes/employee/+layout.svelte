<script lang="ts">
	import { enhance } from '$app/forms';
	import { AlignJustify } from 'lucide-svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { LayoutDashboard } from 'lucide-svelte';
	import { LogOut } from 'lucide-svelte';
	import { UsersRound } from 'lucide-svelte';

	const links = [
		{
			href: '/employee/dashboard',
			label: 'Dashboard'
		},
		{
			href: '/employee/my-leave',
			label: 'My Leave'
		},
		{
			href: '/employee/leave-history',
			label: 'Leave History'
		},
		{
			href: '/employee/leave-request',
			label: 'Leave Request'
		}
	];
</script>

<nav
	class="fixed top-0 z-50 w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
>
	<div class="px-3 py-3 lg:px-5 lg:pl-3">
		<div class="flex items-center justify-between">
			<div class="flex items-center justify-start rtl:justify-end">
				<button
					type="button"
					class="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"
				>
					<span class="sr-only">Open sidebar</span>
					<svg class="h-6 w-6">
						<path
							clip-rule="evenodd"
							fill-rule="evenodd"
							d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
						></path>
					</svg>
				</button>
				<a href="https://flowbite.com" class="ms-2 flex md:me-24">
					<span
						class="self-center whitespace-nowrap text-xl font-semibold dark:text-white sm:text-2xl"
						>PGB LEAVE APPLICATION</span
					>
				</a>
			</div>
			<div class="flex items-center">
				<div class="ms-3 flex items-center">
					<div>
						<button
							type="button"
							class="flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
							aria-expanded="false"
							data-dropdown-toggle="dropdown-user"
						>
							<span class="sr-only">Open user menu</span>
							<img
								class="h-8 w-8 rounded-full"
								src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
								alt="user photo"
							/>
						</button>
					</div>
					<div
						class="z-50 my-4 hidden list-none divide-y divide-gray-100 rounded bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700"
						id="dropdown-user"
					>
						<div class="px-4 py-3" role="none">
							<p class="text-sm text-gray-900 dark:text-white" role="none">Neil Sims</p>
							<p class="truncate text-sm font-medium text-gray-900 dark:text-gray-300" role="none">
								neil.sims@flowbite.com
							</p>
						</div>
						<ul class="py-1" role="none">
							<li>
								<a
									href="#"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
									role="menuitem">Dashboard</a
								>
							</li>
							<li>
								<a
									href="#"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
									role="menuitem">Settings</a
								>
							</li>
							<li>
								<a
									href="#"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
									role="menuitem">Earnings</a
								>
							</li>
							<li>
								<a
									href="#"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
									role="menuitem">Sign out</a
								>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</nav>

<aside
	id="logo-sidebar"
	class="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full border-r border-gray-200 bg-white pt-20 transition-transform dark:border-gray-700 dark:bg-gray-800 sm:translate-x-0"
	aria-label="Sidebar"
>
	<div class="h-full overflow-y-auto bg-white px-3 pb-4 dark:bg-gray-800">
		<ul class="space-y-2 font-medium">
			{#each links as link}
				<li>
					<a
						href={link.href}
						class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
					>
						<span class="ms-3">{link.label}</span>
					</a>
				</li>
			{/each}

			<li>
				<a
					href="#"
					class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
				>
					<LogOut />
					<form method="post" action="/logout">
						<button>Sign out</button>
					</form>
				</a>
			</li>
		</ul>
	</div>
</aside>

<div class="mt-24 p-4 sm:ml-64">
	<div class="mt-6">
		<slot />
	</div>
</div>
