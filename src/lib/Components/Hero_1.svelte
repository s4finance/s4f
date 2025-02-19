<script lang="ts">
	import { goto } from '$app/navigation'
</script>

<section id="home" class="w-full flex justify-center bg-gradient-to-t from bg-gray-50 via-bg-white to bg-blue-50
">
	<div class="text-center">
		<h1 class="mt-10 font-wix text-8xl font-semibold max-w-4xl">Upgrading the Finance Sector</h1>
		<p>Automating repetitive tasks in order to spend more time developing your fortune.</p>
		<button class="py-4 px-10 rounded-full my-10 bg-black text-white">
			Get in Touch
		</button>
	</div>
</section>

<section class="shadow-2xl w-full">
	<div class="bg-white rounded-t-lg flex items-center">
		<div class="px-8 pr-24 py-8 border-r-2">
			<p class="font-wix text-xl font-semibold">Your App</p>
		</div>
		<div class="py-6 px-10 pr-24">
			<div class="py-2 pr-96 pl-4 border-2 border-gray-200 rounded-full flex">
				<img src="/search.svg" alt="search">
				<p class="font-wix text-gray-200 pl-4">Search here</p>
			</div>
		</div>
		<div class="size-12 rounded-full bg-purple-200 mx-6 flex justify-center items-center">
			<p class="font-wix text-lg">DA</p>
		</div>
		<div>
			<p class="font-wix text-lg font-light">Daniel Ataide</p>
			<p class="font-wix text-xs font-extralight ">@AKR</p>
		</div>
		<div>
			<img src="/bell-ring.svg" alt="bell icon" class="px-4">
		</div>
		<button class="bg-black px-10 py-2 rounded-full text-white">
			Logout
		</button>
	</div>

	<div class="flex rounded-b-lg">
		<aside class="w-1/6 bg-white p-4 rounded-b-lg border-t-2 border-r-2 border-gray-100">
			<nav class="mt-8">
				<ul class="space-y-6 ml-4">
					<li class="font-semibold text-gray-700">Dashboard</li>
					<li class="text-gray-600 hover:text-black cursor-pointer">Wallet</li>
					<li class="text-gray-600 hover:text-black cursor-pointer">Activity</li>
					<li class="text-gray-600 hover:text-black cursor-pointer">Team Accounts</li>
				</ul>
			</nav>
		</aside>

		<main class="w-5/6 grid grid-cols-2 gap-4 h-96 bg-white border-t-2">
			<div class=" mx-2 px-4 border-1 rounded-lg shadow-sm mt-2 bg-white border-2">
				<div class="rounded-full border-2 border-gray-200 size-16 flex justify-center items-center mx-4 my-4">
					<img src="/search.svg" alt="search icon" class="p-4 size-16">
				</div>
				<h3 class="text-gray-600 mt-20">Total Balance</h3>
				<p class="text-2xl font-semibold">$13,756.88</p>
			</div>
			<div class="mx-2 px-4 border-1 rounded-lg shadow-sm mt-2 bg-white border-2">
				<div class="rounded-full border-2 border-gray-200 size-16 flex justify-center items-center mx-4 my-4">
					<img src="/search.svg" alt="search icon" class="p-4 size-16">
				</div>
				<h3 class="text-gray-600 mt-20">Total Spendings</h3>
				<p class="text-2xl font-semibold text-red-500">$13,756.88</p>
			</div>
			<div class=" mx-2 p-4 bg-gray-50 rounded-lg shadow-sm col-span-2 bg-white border-2 mb-4">
				<h3 class="text-gray-600">Income</h3>
				<p class="text-xl font-semibold text-green-500">$29,866.06</p>
				<!-- Add a chart component here -->
			</div>
		</main>
	</div>
</section>

<div class="my-40 mx-40">
	<a href="/Hero2">Go to Hero 2</a>
</div>