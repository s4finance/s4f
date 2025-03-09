<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';

	let { flavor="dark", children, ...rest } : { children : any, flavor : "light" | "dark" | "biglight" | "light2" | "light3"} & HTMLButtonAttributes = $props();

</script>

<button class={twMerge(
	" rounded-lg text-sm font-light",
	 flavor === "dark" && "bg-neutral-200 text-black hover:bg-white px-10 py-1",
	 flavor === "light" && "text-white bg-neutral-900 hover:bg-neutral-700 px-10 py-2",
	 flavor === "biglight" && "text-white text-2xl bg-neutral-900 hover:bg-neutral-700 px-10 py-2",
	 flavor === "light2" && "bg-white px-16 py-4 hover:bg-blue-400 mx-2 duration-300 rounded-xl",
	 flavor === "light3" && "bg-white px-20 py-6 hover:bg-blue-400 mx-2 duration-300 rounded-none border-1 border-b-4 border-black",
	 rest.class)}>
	{@render children()}
</button>

