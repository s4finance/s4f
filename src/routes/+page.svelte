<!--<h1>Welcome to SvelteKit</h1>-->
<!--<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>-->

<!-- ICI TU PEUX METTRE TOUT LE CODE DONT TU AS BESOIN, EN UTILISANT DIRECTEMENT LES CLASSES TAILWIND -->

<div class="bg-red-600"></div>

<!-- POUR LANCER LE SERVEUR, ENTRE LA COMMANDE "npm run dev" -->

<!-- Test avec un truc trouvé sur internet-->

<script>
	import Navigation from "$lib/Components/Navbar_site1.svelte";
	import Pricing from "$lib/Components/Test2_pricing.svelte"
	import Nav from "$lib/Components/Navbar_nike.svelte"
	import Hero from "$lib/Components/Hero.svelte"
	import PopularProducts from "$lib/Components/PopularProducts.svelte"
	import SuperQuality from "$lib/Components/SuperQuality.svelte"
	import Services from "$lib/Components/Services.svelte"
	import SpecialOffer from '$lib/Components/SpecialOffer.svelte';
	import CustomerReviews from '$lib/Components/CustomerReviews.svelte';
	import Subscribe from '$lib/Components/Subscribe.svelte';
	import Footer from '$lib/Components/Footer.svelte';
</script>

<main>
	<Nav />
	<section class="xl:padding-1 wide:padding-r padding-b">
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

<style>
</style>
