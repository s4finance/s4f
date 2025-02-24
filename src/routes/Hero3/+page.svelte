<script lang="ts">
import { navLinks } from '../../Constants';
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
			<button class="px-6 py-4 bg-black rounded-full text-white">Enquire</button>
		</div>
	</nav>

	<section id='Hero3' class="w-full relative flex justify-center items-center py-20 absolute">
		<!---->
		<div class="absolute top-0 left-0 w-full h-full">
			<img src="/ring2.jpg" alt="Ring Hero">
		</div>
		<div class="text-center z-10">
			<h1 class="font-wix text-8xl font-semibold text-white">Experience Financial Excellence</h1>
			<p class="mx-auto text-lg mt-4 text-white">Financial processes, perfected. Innovation, automation and expertise.</p>
			<div class="mx-auto flex justify-center px-10 py-4 bg-gray-400/30 backdrop-blur-sm py-2 rounded-lg w-7/10">
				<nav class="my-4 px-8">
					<ul class="space-y-10 *:text-gray-500 *:hover:text-fuchsia-300 *:cursor-pointer">
						<li>A</li>
						<li>B</li>
						<li>C</li>
						<li>D</li>
					</ul>
				</nav>
				<div class="w-full bg-gray-500/30 px-20">
					<div class="flex justify-around items-center">
						<h2 class="font-wix p-2 text-4xl font-semibold text-white">Your Application</h2>
						<p class="text-sm px-6 py-2 rounded-lg bg-gray-400">Implement new workflow</p>
					</div>
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
		</div>
	</section>
</main>

<div class="my-40 mx-40 flex gap-10">
	<a href="/" class="border-2 px-2 py-2 border-black rounded-full">Go to Hero 1</a>
	<a href="/Hero2" class="border-2 px-2 py-2 border-black rounded-full">Go to Hero 2</a>
	<a href="/Hero3" class="border-2 px-2 py-2 border-black rounded-full">Go to Hero 3</a>
</div>