<script lang="ts">
	import '../../app.css';
	import { navLinks } from '../../Constants';
	import Button from '$lib/Components/Nike_Website/Button.svelte';
	let { children } = $props();
</script>

<header class="padding-x py-8 absolute z-10 w-full bg-black">
	<nav class="flex justify-between items-center max-container text-white">
		<div class="flex items-center gap-6 text-xl">
			<a href="/static">
				<img src="/S4F_1.png" alt="logo" height="40" width="40">
			</a>
			<p class="font-wix font-bold">S4F</p>
		</div>
		<ul class="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
			{#each navLinks as link}
				<li>
					<a href="{link.href}" class="font-wix">{link.label}</a>
				</li>
			{/each}
		</ul>
		<div class="">
			<Button label="Get In Touch" borderColor="border-black" bgColor="bg-white" textColor="text-black"/>
		</div>
	</nav>
</header>

{@render children()}