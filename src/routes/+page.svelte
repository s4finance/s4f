<!--<h1>Welcome to SvelteKit</h1>-->
<!--<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>-->

<!-- ICI TU PEUX METTRE TOUT LE CODE DONT TU AS BESOIN, EN UTILISANT DIRECTEMENT LES CLASSES TAILWIND -->

<div class="bg-red-600"></div>

<!-- POUR LANCER LE SERVEUR, ENTRE LA COMMANDE "npm run dev" -->

<!-- Test avec un truc trouvé sur internet-->

<script>
	import Nav from "$lib/Components/Nike_Website/Navbar_nike.svelte"
	import Hero from "$lib/Components/Nike_Website/Hero.svelte"
	import PopularProducts from "$lib/Components/Nike_Website/PopularProducts.svelte"
	import SuperQuality from "$lib/Components/Nike_Website/SuperQuality.svelte"
	import Services from "$lib/Components/Nike_Website/Services.svelte"
	import SpecialOffer from '$lib/Components/Nike_Website/SpecialOffer.svelte';
	import CustomerReviews from '$lib/Components/Nike_Website/CustomerReviews.svelte';
	import Subscribe from '$lib/Components/Nike_Website/Subscribe.svelte';
	import Footer from '$lib/Components/Nike_Website/Footer.svelte';
	import Nav_1 from './Hero1/Nav_1.svelte';
	import Hero_1 from './Hero1/Hero_1.svelte';

</script>

<!-- Nike Site
<main>
	<Nav />
	<section class="xl:padding-1 wide:padding-r padding">
		<Hero />
	</section>
	<section class="padding">
		<PopularProducts />
	</section>
	<section class="padding">
		<SuperQuality />
	</section>
	<section class="padding padding-x py-10">
		<Services />
	</section>
	<section class="padding">
		<SpecialOffer />
	</section>
	<section class="bg-pale-blue padding">
		<CustomerReviews />
	</section>
	<section class="padding-x sm:py-32 py-16 w-full ">
		<Subscribe />
	</section>
	<section class="bg-black padding-x padding-t pb-8">
		<Footer />
	</section>
</main>
-->

<main class="bg-gray-50">
	<section>
		<Nav_1 />
		<div class="xl:padding-1 wide:padding-r padding">
			<Hero_1 />
		</div>

	</section>
</main>

<style>
</style>
