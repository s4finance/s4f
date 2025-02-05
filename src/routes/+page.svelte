<!--<h1>Welcome to SvelteKit</h1>-->
<!--<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>-->

<!-- ICI TU PEUX METTRE TOUT LE CODE DONT TU AS BESOIN, EN UTILISANT DIRECTEMENT LES CLASSES TAILWIND -->

<div class="bg-red-600"></div>

<!-- POUR LANCER LE SERVEUR, ENTRE LA COMMANDE "npm run dev" -->

<!-- Test avec un truc trouvé sur internet-->

<script>
	import Nav from "./components/Nav.svelte";
	import Hero from "./components/Hero.svelte";
</script>

<Nav />
<Hero />

<style>
    body {
        background: black;
        color: white;
        font-family: sans-serif;
    }
</style>
