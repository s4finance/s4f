<script lang="ts">
	export let label: string;
	export let iconURL: string;
	export let backgroundColor: string;
	export let borderColor: string;
	export let textColor: string;
	export let fullWidth: boolean = false;
</script>

<button class="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
					{backgroundColor ? backgroundColor : "bg-coral-red"}
    			{textColor ? textColor : "text-white"}
    			{borderColor ? borderColor : "border-coral-red"}
    			{fullWidth ? 'w-full' : ''}">
	{label}
	{#if iconURL}
		<img src="{iconURL}" alt="Button icon" class="ml-2 rounded-full w-5 h-5">
	{/if}
</button>