<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { HTMLAnchorAttributes, HTMLAttributes } from 'svelte/elements';

	let { link, children, ...rest} : {link: string, children : any} & HTMLAnchorAttributes = $props();

</script>

<a href={link} class={twMerge("font-wix font-light text-sm px-10 py-1 rounded-lg hover:bg-blue-500/50 duration-200")}>{@render children()}</a>

