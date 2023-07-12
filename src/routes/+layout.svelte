<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';
</script>

<svelte:head>
	<title>Portfolio</title>
</svelte:head>

<Header />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		min-height: 80vh;
	}
</style>
