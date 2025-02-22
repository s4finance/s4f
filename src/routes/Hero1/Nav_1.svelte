<script lang="ts">
	import { navLinks } from '../../Constants';
	import Button from '$lib/Components/Nike_Website/Button.svelte';
</script>

<header class="p-8 sticky z-10 w-full bg-slate-200">
	<nav class="flex justify-between items-center max-container">
		<div class="flex items-center gap-6 text-xl pl-2">
			<a href="/static">
				<img src="/6.png" alt="logo" height="64" width="64">
			</a>
		</div>
		<ul class="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
			{#each navLinks as link}
				<li>
					<a href="{link.href}" class="font-wix">{link.label}</a>
				</li>
			{/each}
		</ul>
		<div class="">
			<Button label="Get In Touch" borderColor="border-white" bgColor="bg-black" textColor="text-white"/>
		</div>
	</nav>
</header>