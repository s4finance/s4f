<script lang="ts">

import { trusts } from '../../Constants';
</script>
<main class="bg-linear-to-r from-black to-gray-700">
	<div class="flex justify-evenly items-center w-full gap-40">
		<div class="border-gray-100 py-2 px-4 rounded-full bg-white/10 backdrop-blur-lg">
			<p class="font-wix text-white">Custom Workflow</p>
		</div>
		<div class="mt-8 border-gray-100 py-2 px-4 rounded-full bg-white/10 backdrop-blur-lg">
			<p class="wix text-white">Safely secured Data</p>
		</div>
	</div>
	<section id="home" class="w-full flex justify-center">
		<div class="text-center">
			<h1 class=" font-wix text-8xl font-semibold max-w-7xl text-white">Automated Workflow. Designed for You.</h1>
			<p class="max-w-3xl mx-auto text-lg text-white mt-4">We create custom automation solutions that eliminate repetitive tasks, streamline financial processes, and save you time, so you can focus on what matters.</p>
			<button class="py-2 px-10 rounded-full mt-10 bg-white text-black">
				Get in Touch
			</button>
		</div>
	</section>
	<div class="flex justify-evenly items-center w-full gap-32 pb-2">
		<div class="border-gray-100 py-2 px-4 rounded-full bg-white/10 backdrop-blur-lg">
			<p class="font-wix text-white">Best in the business</p>
		</div>
		<div class="mb-16 border-gray-100 py-2 px-4 rounded-full bg-white/10 backdrop-blur-lg">
			<p class="wix text-white">Pump it up</p>
		</div>
	</div>
	<section class="text-white">
		<div class="flex justify-center items-center w-full gap-32 pb-4 px-4">
			{#each trusts as item}
				<div>
					<p class="text-sm font-wix text-center text-slate-400">{item.title}</p>
					<p class="text-8xl font-wix text-center">{item.number}</p>
					<p class="text-sm font-wix text-center text-slate-400">{item.description}</p>
				</div>
		{/each}
		</div>
	</section>
</main>

<div class="my-40 mx-40 flex gap-10">
	<a href="../Hero1" class="border-2 px-2 py-2 border-black rounded-full">Go to Hero 1</a>
	<a href="/Hero2" class="border-2 px-2 py-2 border-black rounded-full">Go to Hero 2</a>
</div>