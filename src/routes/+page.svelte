<script lang="ts">
	import Nav_1 from './Hero1/Nav_1.svelte';
	import Hero_1 from './Hero1/Hero_1.svelte';

	import { goto } from '$app/navigation';

	function navigate() {
		goto('/Hero2');
	}

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

<div class="my-40 mx-40 flex gap-10">
	<a href="/" class="border-2 px-2 py-2 border-black rounded-full">Go to Hero 1</a>
	<a href="/Hero2" class="border-2 px-2 py-2 border-black rounded-full">Go to Hero 2</a>
	<a href="/Hero3" class="border-2 px-2 py-2 border-black rounded-full">Go to Hero 3</a>
</div>

<style>
</style>
