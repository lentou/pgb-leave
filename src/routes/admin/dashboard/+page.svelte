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
	import RecentDepartment from '../dashboard/recents-department.svelte';

	let date = new Date();
	function formatDate(date: Date) {
		return new Intl.DateTimeFormat('en', { dateStyle: 'full' }).format(date);
	}
</script>

<div class="container">
	<div class="">
		<div class="pt-7">Today, {formatDate(date)}</div>
		<div class=" mb-10 pt-5 text-4xl font-bold text-slate-800">Dashboard</div>
	</div>

	<div class=" grid grid-cols-1 gap-9 sm:grid-cols-4">
		<div class="  h-40 w-64 rounded-xl bg-stone-50 shadow-lg"></div>
		<div class="h-40 w-64 rounded-xl bg-stone-50 shadow-lg"></div>
		<div class="h-40 w-64 rounded-xl bg-stone-50 shadow-lg"></div>
		<div class="h-40 w-64 rounded-xl bg-stone-50 shadow-lg"></div>
	</div>

	<div class="mt-5"></div>

	<div>
		<RecentDepartment {data}></RecentDepartment>
	</div>
</div>
