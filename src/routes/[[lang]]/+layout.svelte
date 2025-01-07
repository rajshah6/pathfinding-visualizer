<script lang="ts">
	import Head from '$lib/Components/Head.svelte';
	export let data;
</script>

<head>
  <link rel="icon" href="/pathfinding-visualizer/favicon.ico" type="image/x-icon">
</head>

<Head {data} />
<slot />
