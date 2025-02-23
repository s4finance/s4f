<script lang="ts">
	import '../../app.css';
	import { navLinks } from '../../Constants';
	import Button from '$lib/Components/Nike_Website/Button.svelte';

	let { children } = $props();
</script>

<header class="px-8 py-8 sticky w-full bg-linear-to-r from-black to-slate-600">
	<nav class="flex justify-between items-center max-container text-white">
		<div class="flex items-center gap-6 text-xl px-6">
			<a href="/static">
				<img src="/6.png" alt="logo" height="64" width="64">
			</a>
		</div>
		<ul class="flex-1 flex justify-center items-center gap-2 border-2 border-gray-500/30 rounded-full bg-gray-500/30 backdrop-blur-md mx-64">
			{#each navLinks as link}
				<li class="hover:bg-white hover:text-black py-2 px-8 hover:rounded-full">
					<a href="{link.href}" class="font-wix text-sm">{link.label}</a>
				</li>
			{/each}
		</ul>
		<div class="">
			<Button label="Get In Touch" borderColor="border-black" bgColor="bg-white" textColor="text-black"/>
		</div>
	</nav>
</header>

{@render children()}