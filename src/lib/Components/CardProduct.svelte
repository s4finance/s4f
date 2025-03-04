<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { HTMLAttributes } from 'svelte/elements';

	let { title, description, ...rest} : {title: string, description: string} & HTMLAttributes<HTMLDivElement> = $props();

</script>

<div class={twMerge("px-10 py-6 text-white transition bg-black hover:bg-blue-500/50 backdrop-blur-xl duration-300 h-full rounded-lg", rest.class)}>
	<p class="text-2xl font-semibold pb-10">{title}</p>
	<p class="text-xl ">{description}</p>
</div>