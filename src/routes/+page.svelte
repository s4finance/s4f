<script lang="ts">
	import CardProduct from '$lib/Components/CardProduct.svelte';
	import ButtonLink from '$lib/Components/ButtonLink.svelte';
	import Button from '$lib/Components/Button.svelte';

	const navInfo =[
		{link: '#home3', label: 'Home'},
		{link: "#about", label: 'About'},
		{link: "#whyus", label: 'Why Us'},
		{link: "#process", label: 'Process'},
	]

	const cards = [
		{title: 'Tailored Solutions', description: 'One business, one approach. Unique every time.'},
		{title: 'Exclusive, High-Value Service', description: 'We work with businesses that seek perfection, precision and premium automation solutions.', gridspan: 'col-span-7'},
		{title: 'Seamless Integration', description: 'Excel, enterprise software or proprietary systems, we work with your existing tools, not against them.', gridspan: 'col-span-6'},
		{title: 'Long-Term Partnership', description: 'More than just a service, we provide ongoing support, refinement and enhancements.', gridspan: 'col-span-4'},
	]

	const services = [
		{descr: 'Design'}, {descr: 'Layout'}, {descr: 'Infrastructure'},
	]

	const processCards = [
		{title: 'Consulting', descr: 'Start with an in-depth consultation, where we analyze your workflows, challenges and objectives. The goal is to craft a vision that aligns with your goals, ensuring the solution is tailored to your needs.', do1: 'Discovery', do2: 'Understanding', do3: 'Tailored'},
		{title: 'Prototyping', descr: "Excellence begins with precision. We'll develop a high-fidelity prototype, allowing you to use and experience the transformation before full deployment. Details are refined a optimized to align seamlessly with your existing tools." , do1: 'Design', do2: 'Layout', do3: 'Infrastructure'},
		{title: 'Deployment', descr: 'We implement your bespoke solution into your financial ecosystem. We handle every technical detail or work with your experts in order to reach a stress-free deployment.', do1: 'Installation', do2: 'Onboarding', do3: 'Integration'},
		{title: 'Maintenance', descr: "Our commitment doesn't stop at deployment. We provide ongoing support, optimization and enhancements, ensuring your solution evolves with your business needs." , do1: 'Bugs', do2: 'Fixes', do3: 'Small additions'},
	]

	let x = $state(0);
</script>

<main class="bg-black">
	<nav class="px-8 py-4 sticky w-full flex justify-between items-center ">
		<a href="/Hero3">
			<img src="/6.png" alt="logo" height="60px" width="60px" />
		</a>
		<ul class="flex justify-center items-center gap-2 bg-neutral-800 rounded-lg border-gray-700">
			{#each navInfo as nav}
				<li class="block">
					<ButtonLink flavor="dark" link={nav.link}>{nav.label}</ButtonLink>
				</li>
			{/each}
		</ul>
		<Button flavor="dark">Enquire</Button>
	</nav>

	<section id='home3' class="w-full flex flex-col justify-center py-14 bg-black h-full">
		<!---->
		<div class="absolute top-20 left-0 w-full h-full opacity-70">
			<img src="/ring2.jpg" alt="Ring Hero">
		</div>
		<div class="text-center z-10 mb-96">
			<h1 class=" mx-auto font-wix text-8xl font-semibold text-white max-w-4xl">Experience Fintech Excellence</h1>
			<p class="mx-auto text-lg mt-4 text-white">Financial processes, perfected. Innovation, automation and expertise.</p>
		</div>
	</section>
	<div class="relative z-10 pt-32 flex justify-between items-center">
		<div class="mx-32 pb-20 pt-10 border-r-2 border-gray-800">
			<p class="text-white text-3xl w-2xl">Welcome to <span class="text-[#52B7FF]">S4F</span>, merging automation and tailor-made solutions in order to transform the way businesses operate.</p>
		</div>
	</div>
	<div class="border-b-2 border-b-gray-800"></div>
	<div class="relative z-10 px-8 pt-20 pb-40 grid justify-items-end italic border-r-2 border-gray-800 w-9/10">
		<p class="text-white text-2xl mt-10">"The future of finance is seamless.</p>
		<p class="text-white text-2xl">The future of your business starts with S4F."</p>
	</div>
	<h2 id="whyus" class="p-30 py-10 text-6xl text-white border-b-1 border-b-neutral-800">The Advantages</h2>
	<div id="whyus" class="grid grid-cols-10 place-items-center gap-6 px-32 py-20 *:duration-500 bg-linear-to-b from-neutral-900 from-15% to-black">
		<div class="col-span-3 h-full rounded-lg p-[1px] bg-linear-to-b from-neutral-700 to-black">
			<CardProduct class="col-span-3" title={cards[0].title} description={cards[0].description} />
		</div>
		<div class="col-span-7 h-full rounded-lg p-[1px] bg-linear-to-b from-neutral-700 to-black">
			<CardProduct class="col-span-7" title={cards[1].title} description={cards[1].description} />
		</div>
		<div class="col-span-6 h-full rounded-lg p-[1px] bg-linear-to-b from-neutral-700 to-black">
			<CardProduct class="col-span-6" title={cards[2].title} description={cards[2].description} />
		</div>
		<div class="col-span-4 h-full rounded-lg p-[1px] bg-linear-to-b from-neutral-700 to-black">
			<CardProduct class="col-span-4" title={cards[3].title} description={cards[3].description} />
		</div>
	</div>
	<h2 id="process" class="px-30 py-10 text-6xl text-white border-b-1 border-b-neutral-800">The Process</h2>
	<section  class="p-10 grid grid-cols-10 px-32 h-dvh items-center bg-linear-to-b from-neutral-900 from-15% to-black">
		<div class="col-span-7 h-8/10 w-8/10 m-8 border-1 border-[#FFD700] rounded-xl text-white"> <!-- This will be the card itself -->
			<h2 class="text-4xl px-12 py-16 font-semibold">{processCards[x].title}</h2>
			<div class="flex justify-center items-center gap-4 h-40">
				<div class="size-2 rounded-full bg-[#FFD700]"></div>
				<p class="text-2xl">{processCards[x].do1}</p>
				<div class="size-2 rounded-full bg-[#FFD700]"></div>
				<p class="text-2xl">{processCards[x].do2}</p>
				<div class="size-2 rounded-full bg-[#FFD700]"></div>
				<p class="text-2xl">{processCards[x].do3}</p>
			</div>
			<p class="px-12 text-xl h-48 place-content-end">
				{processCards[x].descr}
			</p>
		</div>
		<!-- Put the column containing the steps | to-do: onclick={() => x = 1} -->
		<div class="*:w-full col-span-3 gap-4 text-xl font-semibold text-white *:rounded-xl *:px-2 *:py-1 *:my-4 *:hover:bg-linear-to-r *:hover:from-[#FFD700] *:hover:to-black *:text-left *:duration-500 *:bg-transparent">
			<button onclick={() => x = 0}><span class="text-2xl font-semibold">1.</span>Consulting</button>
			<button onclick={() => x = 1}><span class="text-2xl font-semibold">2.</span>Prototyping</button>
			<button onclick={() => x = 2}><span class="text-2xl font-semibold">3.</span>Deployment</button>
			<button onclick={() => x = 3}><span class="text-2xl font-semibold">4.</span>Maintenance</button>
		</div>
	</section>

	<section id="Journey2" class="p-10">
		<div class="m-10 px-2 my-1 bg-slate-400 rounded-full flex justify-between">
			<div class="size-5 rounded-full bg-white"></div>
			<div class="size-5 rounded-full bg-white"></div>
			<div class="size-5 rounded-full bg-white"></div>
			<div class="size-5 rounded-full bg-white"></div>
		</div>
	</section>

	<h2 class="px-36 pt-32 text-6xl text-white">The First Step</h2>




</main>

<div class="my-40 mx-40 flex gap-10">
	<a href="/" class="border-2 px-2 py-2 border-black rounded-full">Go to Hero 1</a>
	<a href="/Hero3" class="border-2 px-2 py-2 border-black rounded-full">Go to Hero 3</a>
</div>