<script lang="ts">
	import '../app.css';
	import { Navigation, Footer } from '$lib/components/layout';
</script>

<div class="min-h-screen bg-snowfield-white flex flex-col">
	<Navigation />
	<main class="flex-grow">
		<slot />
	</main>
	<Footer />
</div>