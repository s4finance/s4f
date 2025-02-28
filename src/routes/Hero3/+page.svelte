<script lang="ts">
import { navLinks } from '../../Constants';
import CardProduct from '$lib/Components/CardProduct.svelte';

const cards = [
	{title: 'Tailored Solutions', description: 'One business, one approach. Unique every time.', gridspan: 'col-span-3', height:'64'},
	{title: 'Exclusive, High-Value Service', description: 'We work with businesses that seek perfection, precision and premium automation solutions.', gridspan: 'col-span-7', height:'64'},
	{title: 'Seamless Integration', description: 'Excel, enterprise software or proprietary systems, we work with your existing tools, not against them.', gridspan: 'col-span-6', height:'64'},
	{title: 'Long-Term Partnership', description: 'More than just a service, we provide ongoing support, refinement and enhancements.', gridspan: 'col-span-4', height:'64'},
]
</script>

<main class="bg-black">
	<nav class="px-8 pb-2 sticky w-full flex justify-between items-center text-white">
		<div>
			<a href="/">
				<img src="/6.png" alt="logo" height="80px" width="80px" />
			</a>
		</div>
		<ul class="flex justify-right items-center gap-16">
			{#each navLinks as link}
				<li class="border-b-2 border-transparent hover:border-b-2 hover:border-white">
					<a href="{link.href}" class="font-wix">{link.label}</a>
				</li>
			{/each}
		</ul>
		<div>
			<button class="px-10 py-2 bg-white rounded-full text-black">Enquire</button>
		</div>
	</nav>

	<section id='Hero3' class="w-full flex flex-col justify-center py-14 absolute bg-black">
		<!---->
		<div class="absolute top-0 left-0 w-full h-full opacity-70">
			<img src="/ring2.jpg" alt="Ring Hero">
		</div>
		<div class="text-center z-10 mb-96">
			<h1 class=" mx-auto font-wix text-8xl font-semibold text-white max-w-4xl">Experience DevOps Excellence</h1>
			<p class="mx-auto text-lg mt-4 text-white">Financial processes, perfected. Innovation, automation and expertise.</p>
		</div>
	</section>
	<div class="relative z-10 px-8 mt-[700px] pt-60 pb-20 flex justify-between items-center">
		<div class="">
			<p class="text-white text-3xl w-2xl">Welcome to <span class="text-blue-500">S4F</span>, merging automation and tailor-made solutions in order to transform the way businesses operate.</p>
		</div>
	</div>
	<div class="relative z-10 px-8 pt-20 pb-40 grid justify-items-end italic">
		<p class="text-white text-2xl mt-10">"The future of finance is seamless.</p>
		<p class="text-white text-2xl">The future of your business starts with S4F."</p>
	</div>
	<div class="bg-black px-8 py-3 flex mx-auto gap-6 text-white w-5/6">
		<div class="px-10 py-6 border-2 border-blue-500 rounded-2xl shadow-sm shadow-white transition hover:bg-blue-500 duration-100">
			<p class="text-2xl font-semibold pb-10">Tailored Solutions</p>
			<p class="text-xl ">One business, one approach. Unique every time.</p>
		</div>
		<div class="px-10 py-6 border-2 border-blue-500 rounded-2xl shadow-sm shadow-white transition hover:bg-blue-500 duration-100">
			<p class="text-2xl font-semibold pb-10">Exclusive, High-Value Service</p>
			<p class="text-xl ">We work with businesses that seek perfection, precision and premium automation solutions.</p>
		</div>
	</div>
	<div class="bg-black px-8 py-3 flex mx-auto gap-8 text-white w-5/6 pb-20">
		<div class="px-10 py-6 border-2 border-blue-500 rounded-2xl shadow-sm shadow-white transition hover:bg-blue-500 duration-100">
			<p class="text-2xl font-semibold pb-10">Seamless Integration</p>
			<p class="text-xl ">Excel, enterprise software or proprietary systems, we work with your existing tools, not against them.</p>
		</div>
		<div class="px-10 py-6 border-2 border-blue-500 rounded-2xl shadow-sm shadow-white transition hover:bg-blue-500 duration-100">
			<p class="text-2xl font-semibold pb-10">Long-Term Partnership</p>
			<p class="text-xl ">More than just a service, we provide ongoing support, refinement and enhancements.</p>
		</div>
	</div>

	<div class="grid grid-cols-10 place-items-center gap-6 px-32">
		{#each cards as card}
		<CardProduct title="{card.title}" description={card.description} gridspan="{card.gridspan}" height="{card.height}" />
		{/each}
	</div>

</main>

<div class="my-40 mx-40 flex gap-10">
	<a href="/" class="border-2 px-2 py-2 border-black rounded-full">Go to Hero 1</a>
	<a href="/Hero2" class="border-2 px-2 py-2 border-black rounded-full">Go to Hero 2</a>
	<a href="/Hero3" class="border-2 px-2 py-2 border-black rounded-full">Go to Hero 3</a>
</div>