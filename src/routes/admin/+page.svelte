<script lang="ts">
	import DashboardForm from '../admin/+layout.svelte';
	import DepartmentDataTable from './departments/+page.svelte';
	export let data;
</script>

<DashboardForm data={data.form} />
