<script lang="ts">
	import { reviews } from '../../../Constants';
	import ReviewCard from '$lib/Components/Nike_Website/ReviewCard.svelte';
</script>

<section class="max-container">
	<h3 class="font-palanquin text-center text-4xl font-bold">What Our
		<span class="text-coral-red">Customers</span> Say?</h3>
	<p class="info-text m-auto mt-4 max-w-lg text-center">
		Hear genuine stories about our customers and what lies they are telling their wives.
	</p>
	<div class="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
		{#each reviews as review}
			<ReviewCard
			key={review.customerName}
			imgURL={review.imgURL}
			customerName={review.customerName}
			rating={review.rating}
			feedback={review.feedback}
			/>
		{/each}
	</div>


</section>