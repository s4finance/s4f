<script>
	import PopularProductCard from './PopularProductCard.svelte';
	import { products } from '../../../Constants/index';
</script>

<section id="products" class="max-container max-sm:mt-12 ">
	<div class="flex flex-col justify-start gap-5">
		<h2 class="text-4xl font-palanquin font-bold">Our <span class="text-coral-red">Popular</span> Products</h2>
		<p class="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Experience top notch quality and style with out sought-after selections. Discover the world of Dandan.</p>
	</div>
	<div class="mt-16  grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
		{#each products as product (product.name)}
			<PopularProductCard {...product} />
		{/each}
	</div>
</section>