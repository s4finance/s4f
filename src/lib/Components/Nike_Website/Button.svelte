<script lang="ts">
	let {bgColor = 'bg-coral-red', textColor = 'text-black', imgLink, borderColor = 'boder-coral-red', label} : {bgColor: string, textColor: string, imgLink: string, borderColor: string, label: string} = $props()
</script>

<button class="flex justify-center items-center gap-2 px-10 py-3 border font-wix leading-none rounded-full
					{bgColor}
    			{textColor}
    			{borderColor}">
	{label}
	{#if imgLink}
		<img src="{imgLink}" alt="Button icon" class="ml-2 rounded-full w-5 h-5">
	{/if}
</button>