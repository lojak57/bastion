<script lang="ts">
	import '../app.css';
	import { Navigation } from '$lib/components/layout';
	import { onMount } from 'svelte';
	import { lazyImport } from '$lib/utils/lazyLoad';

	let FooterComponent: any = null;
	let showFooter = false;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					loadFooter();
					observer.disconnect();
				}
			},
			{ rootMargin: '100px' }
		);

		const footerTrigger = document.querySelector('#footer-trigger');
		if (footerTrigger) {
			observer.observe(footerTrigger);
		}

		return () => observer.disconnect();
	});

	async function loadFooter() {
		if (!FooterComponent) {
			FooterComponent = await lazyImport(() => import('$lib/components/layout/Footer.svelte'));
			showFooter = true;
		}
	}
</script>

<div class="min-h-screen bg-snowfield-white flex flex-col">
	<Navigation />
	<main class="flex-grow">
		<slot />
	</main>
	
	<!-- Footer trigger point -->
	<div id="footer-trigger" class="h-1"></div>
	
	{#if showFooter && FooterComponent}
		<div class="animate-fade-in">
			<svelte:component this={FooterComponent} />
		</div>
	{/if}
</div>

<style>
	@keyframes fade-in {
		from { opacity: 0; transform: translateY(20px); }
		to { opacity: 1; transform: translateY(0); }
	}
	
	.animate-fade-in {
		animation: fade-in 0.3s ease-out;
	}
</style>