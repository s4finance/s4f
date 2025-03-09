<script lang="ts">

	import ButtonLink from '$lib/Components/ButtonLink.svelte';
	import Button from '$lib/Components/Button.svelte';

	const navInfo =[
		{link: '#home3', label: 'Home'},
		{link: "#about", label: 'About'},
		{link: "#whyus", label: 'Why Us'},
		{link: "#process", label: 'Process'},
	]

</script>

<main>
	<section class="relative">
		<nav class="px-8 py-4 absolute z-10 w-full flex justify-between items-center back">
			<a href="/Hero3">
				<img src="/6.png" alt="logo" height="60px" width="60px" />
			</a>
			<ul class="flex justify-center items-center gap-2 gap-2 text-sm rounded-lg backdrop-blur-xl">
				{#each navInfo as nav}
					<li>
						<ButtonLink flavor="light" link={nav.link}>{nav.label}</ButtonLink>
					</li>
				{/each}
			</ul>
			<Button flavor="light">Enquire</Button>
		</nav>
		<div class="h-dvh">
			<div class="size-[400px] bg-neutral-300 rounded-4xl absolute right-52 top-10 animate-blob"></div>
			<div class="size-[600px] bg-[#FFD700] rounded-4xl absolute left-72 top-40 animate-blob animation-delay-2000"></div>
			<div class="size-[700px] rounded-br-full bg-blue-400 absolute animate-blob animation-delay-5000"></div>
			<div class="size-[500px] bg-neutral-300 rounded-4xl absolute right-0 bottom-0 animate-blob"></div>
		</div>
		<div class="absolute top-0 left-0 px-10 text-left grid grid-cols-10 backdrop-blur-xl bg-white/20 h-dvh">
			<h1 class="mt-32 font-wix font-bold text-[120px]/30 tracking-tighter col-span-5">Financial Automation <br>Meets Excellence</h1>
			<div class="flex flex-col justify-center items-center col-span-5">
				<div class="p-10 bg-transparent rounded-lg bg-white/40">
					<p class="text-3xl/12 font-wix font-semibold ">Seamless technology. <br>Flawless execution. <br>Designed around you.</p>
				</div>
				<div class="pt-20">
					<Button flavor="biglight">Meet Us</Button>
				</div>
			</div>
		</div>
	</section>
</main>


<div class="my-40 mx-40 flex gap-10">
	<a href="/" class="border-2 px-2 py-2 border-black rounded-full">Go to Hero 1</a>
	<a href="/Hero3" class="border-2 px-2 py-2 border-black rounded-full">Go to Hero 3</a>
	<a href="/Hero4" class="border-2 px-2 py-2 border-black rounded-full">Go to Hero 4</a>
	<a href="/Hero5" class="border-2 px-2 py-2 border-black rounded-full">Go to Hero 5</a>
</div>