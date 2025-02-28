<script lang="ts">
	let { title, description, gridspan, height} = $props();
</script>


<div class="px-10 py-6 border-2 border-blue-500 rounded-2xl shadow-sm shadow-white text-white transition hover:bg-blue-500 duration-100 {gridspan} {height}">
	<p class="text-2xl font-semibold pb-10">{title}</p>
	<p class="text-xl ">{description}</p>
</div>