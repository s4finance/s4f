<script>
	import {services} from '../../Constants';
	import ServiceCard from '$lib/Components/ServiceCard.svelte';
</script>

<section class="max-container flex justify-center flex-wrap gap-9">
	{#each services as service}
		<ServiceCard {...service} />
	{/each}
</section>