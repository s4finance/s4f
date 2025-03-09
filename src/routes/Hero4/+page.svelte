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
	<section class="relative grid grid-cols-1 items-center justify-center">
		<nav class="absolute top-0 z-10 flex justify-between items-center w-full bg-black p-1 rounded-b-3xl">
			<a href="/Hero3" class="ml-4 mr-32">
				<img src="/6.png" alt="logo" height="60px" width="60px" />
			</a>
			<ul class="flex justify-center gap-2 items-center text-white">
				{#each navInfo as nav}
					<li>
						<ButtonLink flavor="light2" link={nav.link}>{nav.label}</ButtonLink>
					</li>
				{/each}
			</ul>
			<Button flavor="light2" class="border-none">Enquire</Button>
		</nav>
		<div class="h-dvh">
			<div class="size-[600px] bg-[#FFD700] rounded-4xl absolute left-0 bottom-20 animate-blob "></div>
			<div class="size-[400px] bg-neutral-300 rounded-4xl absolute left-3/10 top-1/10 animate-blob animation-delay-2000"></div>
			<div class="size-[450px] bg-[#FFD700] rounded-4xl absolute right-40 top-4/10 animate-blob"></div>
			<div class="size-[700px] bg-blue-400 rounded-bl-full absolute right-0 top-0 animate-blob animation-delay-5000"></div>
		</div>
		<div class="absolute top-0 left-0 px-10 backdrop-blur-xl h-dvh w-full bg-white/20">
			<div class="flex-col justify-center items-center mt-40">
				<h1 class="font-wix font-semibold text-9xl text-center">Corporate</h1>
				<div class="flex justify-center items-center gap-10">
					<h1 class="font-wix font-semibold text-9xl text-center">Financial</h1>
					<h2 class="text-2xl py-8 px-4 bg-linear-to-r from-white/40 to-white/0 ">Elite automation solutions for visionaries<br>who accept nothing less than excellence.</h2>
				</div>
				<h1 class="font-wix font-semibold text-9xl text-center">Automation</h1>
				<div class="text-center mt-20">
					<Button flavor="light2" class="px-20 py-6 bg-black text-white">Meet Us</Button>
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