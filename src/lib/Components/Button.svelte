<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';

	let { children, ...rest } : { children : any } & HTMLButtonAttributes = $props();

</script>

<button class={twMerge("px-10 py-1 bg-gray-200 rounded-lg text-black text-sm font-light hover:bg-white", rest.class)}>{@render children()}</button>

