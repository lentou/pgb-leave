<script lang="ts">
	// Import the child component
	import DataTable from './department-table/data-table.svelte';
	// Assuming 'data' is imported or defined in this file

	// Declare a variable to hold the data passed to the child component
	export let data;
</script>

<DataTable data={data.result}></DataTable>
