<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { HTMLAnchorAttributes, HTMLAttributes } from 'svelte/elements';

	let { link, flavor="dark", children, ...rest} : {link: string, children : any, flavor : "light" | "dark" | "light2"} & HTMLAnchorAttributes = $props();

</script>

<a href={link} class={twMerge(
	"font-wix font-light block text-sm rounded-lg duration-200",
	flavor === "dark" && "text-white hover:bg-neutral-400 px-16 py-1",
	flavor === "light" && "hover:bg-white px-16 py-2",
	flavor === "light2" && "hover:bg-white px-16 py-4 hover:text-black duration-300 rounded-xl",
	rest.class)}>
	{@render children()}
</a>

