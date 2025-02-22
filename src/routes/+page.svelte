<script lang="ts">
	import Nav_1 from './Hero1/Nav_1.svelte';
	import Hero_1 from './Hero1/Hero_1.svelte';

</script>

<!-- Nike Site
<main>
	<Nav />
	<section class="xl:padding-1 wide:padding-r padding">
		<Hero />
	</section>
	<section class="padding">
		<PopularProducts />
	</section>
	<section class="padding">
		<SuperQuality />
	</section>
	<section class="padding padding-x py-10">
		<Services />
	</section>
	<section class="padding">
		<SpecialOffer />
	</section>
	<section class="bg-pale-blue padding">
		<CustomerReviews />
	</section>
	<section class="padding-x sm:py-32 py-16 w-full ">
		<Subscribe />
	</section>
	<section class="bg-black padding-x padding-t pb-8">
		<Footer />
	</section>
</main>
-->

<main class="bg-gray-50">
	<section>
		<Nav_1 />
		<div class="xl:padding-1 wide:padding-r padding">
			<Hero_1 />
		</div>
	</section>
</main>