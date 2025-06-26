<script lang="ts">
	import { HeroSection, CoreOfferSection, WhyBastionSection, PortalPreviewSection, TestimonialsSection, CTASection } from '$lib/components/bastion';
	import { onMount } from 'svelte';
	import { lazyImport } from '$lib/utils/lazyLoad';

	let loadedSections: { [key: string]: any } = {};
	let visibleSections = new Set<string>();

	const sectionLoaders = {
		coreOffer: () => lazyImport(() => import('$lib/components/bastion/CoreOfferSection.svelte')),
		whyBastion: () => lazyImport(() => import('$lib/components/bastion/WhyBastionSection.svelte')),
		portalPreview: () => lazyImport(() => import('$lib/components/bastion/PortalPreviewSection.svelte')),
		testimonials: () => lazyImport(() => import('$lib/components/bastion/TestimonialsSection.svelte')),
		cta: () => lazyImport(() => import('$lib/components/bastion/CTASection.svelte'))
	};

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach(async (entry) => {
					if (entry.isIntersecting) {
						const sectionName = entry.target.getAttribute('data-section');
						if (sectionName && !visibleSections.has(sectionName)) {
							visibleSections.add(sectionName);
							visibleSections = new Set(visibleSections);
							
							if (!loadedSections[sectionName] && sectionLoaders[sectionName as keyof typeof sectionLoaders]) {
								loadedSections[sectionName] = await sectionLoaders[sectionName as keyof typeof sectionLoaders]();
								loadedSections = { ...loadedSections };
							}
							
							observer.unobserve(entry.target);
						}
					}
				});
			},
			{ rootMargin: '100px', threshold: 0.1 }
		);

		document.querySelectorAll('[data-section]').forEach((el) => {
			observer.observe(el);
		});

		return () => observer.disconnect();
	});
</script>

<svelte:head>
	<title>Bastion | Build Your Stronghold</title>
	<meta name="description" content="You don't need a cofounder. You need forward motion. $5K–$7.5K scoped MVPs. $1.5K/month CTO-as-a-Service. Fast. Real. Yours." />
	<meta property="og:title" content="Bastion | Build Your Stronghold" />
	<meta property="og:description" content="MVPs that don't suck and partners like a CTO when you're ready. Launch before the pitch." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://bastion.build" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<HeroSection />

<!-- Lazy loaded sections with fade-in animation -->
<div data-section="coreOffer" class="min-h-[50px]">
	{#if visibleSections.has('coreOffer') && loadedSections.coreOffer}
		<div class="animate-fade-in">
			<svelte:component this={loadedSections.coreOffer} />
		</div>
	{/if}
</div>

<div data-section="whyBastion" class="min-h-[50px]">
	{#if visibleSections.has('whyBastion') && loadedSections.whyBastion}
		<div class="animate-fade-in">
			<svelte:component this={loadedSections.whyBastion} />
		</div>
	{/if}
</div>

<div data-section="portalPreview" class="min-h-[50px]">
	{#if visibleSections.has('portalPreview') && loadedSections.portalPreview}
		<div class="animate-fade-in">
			<svelte:component this={loadedSections.portalPreview} />
		</div>
	{/if}
</div>

<div data-section="testimonials" class="min-h-[50px]">
	{#if visibleSections.has('testimonials') && loadedSections.testimonials}
		<div class="animate-fade-in">
			<svelte:component this={loadedSections.testimonials} />
		</div>
	{/if}
</div>

<div data-section="cta" class="min-h-[50px]">
	{#if visibleSections.has('cta') && loadedSections.cta}
		<div class="animate-fade-in">
			<svelte:component this={loadedSections.cta} />
		</div>
	{/if}
</div>

<style>
	@keyframes fade-in {
		from { opacity: 0; transform: translateY(20px); }
		to { opacity: 1; transform: translateY(0); }
	}
	
	.animate-fade-in {
		animation: fade-in 0.4s ease-out;
	}
</style>