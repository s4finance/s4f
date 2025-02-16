<script lang="ts">
	export let imgURL: string;
	export let customerName: string;
	export let rating: number;
	export let feedback: string;
</script>


<div class="flex justify-center items-center flex-col">
	<img src={imgURL} alt="customer" class="rounded-full object-cover w-[120px] h-[120px]">
	<p class="mt-6 max-w-sm text-center info-text">{feedback}</p>
	<div class="mt-3 flex justify-center items-center gap-2.5">
		<img src=/icons/star.svg alt="Star" class="object-contain m-0">
		<p class="text-xl font-montserrat text-slate-gray">{rating}</p>
		<h3 class="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>

	</div>
</div>