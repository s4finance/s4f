<script lang="ts">
	import { navLinks } from "../../../Constants";
</script>

<header class="padding-x py-8 absolute z-10 w-full">
	<nav class="flex justify-between items-center max-container">
		<a href="/static">
			<img src="/images/header-logo.svg" alt="Logo" width="130" height="29">
		</a>
		<ul class="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
			{#each navLinks as item}
				<li>
					<a href={item.href} class="font-montserrat leading-normal text-lg text-slate-gray">
						{item.label}
					</a>
				</li>
			{/each}
		</ul>
		<div class="lg:hidden block ">
			<img src="/icons/hamburger.svg" alt="Hamburger" width="25" height="25">
		</div>
	</nav>
</header>
