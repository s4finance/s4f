<script>
	import {services} from '../../../Constants/index';
	import ServiceCard from '$lib/Components/Nike_Website/ServiceCard.svelte';
</script>

<section class="max-container flex justify-center flex-wrap gap-9">
	{#each services as service}
		<ServiceCard {...service} />
	{/each}
</section>