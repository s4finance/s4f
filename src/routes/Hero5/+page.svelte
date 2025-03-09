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
		<nav class="absolute top-0 z-10 flex justify-between items-center w-full backdrop-blur-xl bg-black/20 p-1 rounded-b-3xl">
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
		<div class="h-dvh grid grid-cols-10 grid-rows-5 gap-1 *:bg-black ">
			<div class="size-full row-start-1 col-start-2 rounded-4xl animate-pop"></div>
			<div class="size-full row-start-1 col-start-7 rounded-4xl"></div>
			<div class="size-full row-start-1 col-start-8 rounded-4xl"></div>
			<div class="size-full row-start-1 col-start-9 rounded-4xl"></div>
			<div class="size-full row-start-1 col-start-10 rounded-4xl"></div>

			<div class="size-full row-start-2 col-start-1 rounded-4xl"></div>
			<div class="size-full row-start-2 col-start-3 rounded-4xl"></div>
			<div class="size-full row-start-2 col-start-8 rounded-4xl"></div>
			<div class="size-full row-start-2 col-start-9 rounded-4xl"></div>
			<div class="size-full row-start-2 col-start-10 rounded-4xl"></div>

			<div class="size-full row-start-3 col-start-4 rounded-4xl"></div>
			<div class="size-full row-start-3 col-start-7 rounded-4xl"></div>
			<div class="size-full row-start-3 col-start-10 rounded-4xl"></div>


			<div class="size-full row-start-4 col-start-5 rounded-4xl"></div>
			<div class="size-full row-start-4 col-start-6 rounded-4xl"></div>
			<div class="size-full row-start-4 col-start-10 rounded-4xl"></div>

			<div class="size-full row-start-3 rounded-4xl"></div>
			<div class="size-full row-start-4 rounded-4xl"></div>
			<div class="size-full row-start-4 rounded-4xl"></div>
			<div class="size-full row-start-5 rounded-4xl"></div>
			<div class="size-full row-start-5 rounded-4xl"></div>
			<div class="size-full row-start-5 rounded-4xl"></div>
		</div>
	</section>

</main>

<div class="my-40 mx-40 flex gap-10">
	<a href="/" class="border-2 px-2 py-2 border-black rounded-full">Go to Hero 1</a>
	<a href="/Hero3" class="border-2 px-2 py-2 border-black rounded-full">Go to Hero 3</a>
	<a href="/Hero4" class="border-2 px-2 py-2 border-black rounded-full">Go to Hero 4</a>
	<a href="/Hero5" class="border-2 px-2 py-2 border-black rounded-full">Go to Hero 5</a>
</div>