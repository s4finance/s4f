<script lang="ts">

import { navLinks } from '../../Constants';
</script>

<main class="bg-radial-[at_50%_10%] from-gray-600 to-black">
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
			<button class="px-6 py-4 bg-black rounded-full text-white">Enquire</button>
		</div>
	</nav>

	<section id='Hero3' class="w-full flex justify-center items-center py-32">
		<div class="text-center">
			<h1 class="font-wix text-8xl font-semibold text-white">Experience Financial Excellence</h1>
			<p class="mx-auto text-lg mt-4 text-white">Financial processes, perfected. Innovation, automation and expertise.</p>
		</div>
	</section>

	<div class="flex justify-center px-60">
		<aside class="w-1/10 bg-gray-700 p-4 rounded-lg">
			<nav class="mt-8">
				<ul class="space-y-6 ml-4">
					<li class="text-gray-600 hover:text-fuchsia-500 cursor-pointer">A</li>
					<li class="text-gray-600 hover:text-fuchsia-500 cursor-pointer">B</li>
					<li class="text-gray-600 hover:text-fuchsia-500 cursor-pointer">C</li>
					<li class="text-gray-600 hover:text-fuchsia-500 cursor-pointer">D</li>
				</ul>
			</nav>
		</aside>
		<div class="w-9/10 bg-gray-500">
			Place for title
			<div>
				Card 1
			</div>
			<div>
				Card 2
			</div>
			<div>
				Card 3
			</div>
		</div>
	</div>
</main>

<div class="my-40 mx-40 flex gap-10">
	<a href="/" class="border-2 px-2 py-2 border-black rounded-full">Go to Hero 1</a>
	<a href="/Hero2" class="border-2 px-2 py-2 border-black rounded-full">Go to Hero 2</a>
	<a href="/Hero3" class="border-2 px-2 py-2 border-black rounded-full">Go to Hero 3</a>
</div>