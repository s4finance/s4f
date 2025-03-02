<script lang="ts">
import { navLinks } from '../../Constants';
import CardProduct from '$lib/Components/CardProduct.svelte';
import JourneyCard from '$lib/Components/JourneyCard.svelte';

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

	<section id='Hero3' class="w-full flex flex-col justify-center py-14 absolute bg-black h-full">
		<!---->
		<div class="absolute top-0 left-0 w-full h-full opacity-70">
			<img src="/ring2.jpg" alt="Ring Hero">
		</div>
		<div class="text-center z-10 mb-96">
			<h1 class=" mx-auto font-wix text-8xl font-semibold text-white max-w-4xl">Experience DevOps Excellence</h1>
			<p class="mx-auto text-lg mt-4 text-white">Financial processes, perfected. Innovation, automation and expertise.</p>
		</div>
	</section>
	<div class="relative z-10 px-8 mt-[700px] pt-40 pb-20 flex justify-between items-center">
		<div class="">
			<p class="text-white text-3xl w-2xl">Welcome to <span class="text-blue-500">S4F</span>, merging automation and tailor-made solutions in order to transform the way businesses operate.</p>
		</div>
	</div>
	<div class="relative z-10 px-8 pt-20 pb-40 grid justify-items-end italic">
		<p class="text-white text-2xl mt-10">"The future of finance is seamless.</p>
		<p class="text-white text-2xl">The future of your business starts with S4F."</p>
	</div>

	<div class="grid grid-cols-10 place-items-center gap-6 px-32">
		{#each cards as card}
		<CardProduct title="{card.title}" description={card.description} gridspan="{card.gridspan}" height="{card.height}" />
		{/each}
	</div>

	<section id="Journey1" class="p-10 grid grid-cols-10 px-32 h-dvh items-center">
		<div class="col-span-7 h-8/10 w-8/10 m-8 border-4 border-[#FFD700] rounded-4xl text-white"> <!-- This will be the card itself -->
			<h2 class="text-4xl p-12 font-semibold">Consulting</h2>
			<p class="px-12 text-xl h-80 place-content-end">
				This is an example of description that will later be replaced by the most exquisite and mind-blowing text you have ever seen in
			your life my dude. Get ready to experience excellence.
			</p>
		</div>
		<div> <!-- Put the column containing the steps -->
			<div class="flex-col *:py-4 *:my-4 text-xl font-semibold text-white *:w-96 *:rounded-xl ">
				<p class="hover:bg-linear-to-r hover:from-[#FFD700] hover:to-black"><span class="text-2xl font-semibold px-4">1.</span>Consulting</p>
				<p><span class="text-2xl font-semibold px-4">2.</span>Prototyping</p>
				<p><span class="text-2xl font-semibold px-4">3.</span>Deployment</p>
				<p><span class="text-2xl font-semibold px-4">4.</span>Maintenance</p>
			</div>
		</div>
	</section>

	<section id="Journey2" class="p-10">
		<JourneyCard />
		<div class="m-10 px-2 my-1 bg-slate-400 rounded-full flex justify-between">
			<div class="size-5 rounded-full bg-white"></div>
			<div class="size-5 rounded-full bg-white"></div>
			<div class="size-5 rounded-full bg-white"></div>
			<div class="size-5 rounded-full bg-white"></div>
		</div>
	</section>



</main>

<div class="my-40 mx-40 flex gap-10">
	<a href="/" class="border-2 px-2 py-2 border-black rounded-full">Go to Hero 1</a>
	<a href="/Hero2" class="border-2 px-2 py-2 border-black rounded-full">Go to Hero 2</a>
	<a href="/Hero3" class="border-2 px-2 py-2 border-black rounded-full">Go to Hero 3</a>
</div>