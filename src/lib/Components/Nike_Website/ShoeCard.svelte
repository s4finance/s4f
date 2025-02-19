<script lang="ts">
	export let imgURL: { thumbnail: string; bigShoe: string };
	export let changeBigShoeImage: (newImage: string) => void;
	export let bigShoeImg: string;

	function handleClick() {
		if (bigShoeImg !== imgURL.bigShoe) {
			changeBigShoeImage(imgURL.bigShoe);
		}
	}
</script>

<!-- Accessible button wrapper (no div inside) -->
<button
	type="button"
	class="border-2 rounded-xl cursor-pointer max-sm:flex-1 flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 max-sm:p-4
		{bigShoeImg === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'}"
	on:click={handleClick}
	on:keydown={(e) => e.key === 'Enter' && handleClick()}
>
	<img
		src="{imgURL.thumbnail}"
		alt="Shoe collection"
		width="127"
		height="103.34"
		class="object-contain"
	/>
</button>
