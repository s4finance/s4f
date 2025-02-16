<script lang="ts">

import Button from '$lib/Components/Button.svelte';
</script>

<section class="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
	<div class="flex-1 ">
		<img src="/images/offer.svg" alt="SpecialOffer" width="773" height="687" class="object-contain w-full"/>
	</div>
	<div class="flex flex-1 flex-col ">
		<h2 class="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
			<span class="text-coral-red">Special</span>
			Offer
			<br/>
		</h2>
		<p class="mt-4 lg:max-w-lg info-text">Embark on a shopping experience that will blow your mind and change the way you taste food, not only by it's power of mind but the mere fact that this is not Bankai.</p>
		<p class="mt-6 lg:max-w-lg info-text">Navigate a realm of possibilities that will make you forget and remember your possibilities at the same time, chop chop my dude.</p>
		<div class="mt-11 flex flex-wrap gap-4">
			<Button label="Shop Now" iconURL="/icons/arrow-right.svg"/>
			<Button label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>
		</div>
	</div>
</section>