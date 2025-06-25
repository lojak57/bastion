<script lang="ts">
	import { HeroSection, Why5280Section } from '$lib/components/homepage';
	import { onMount } from 'svelte';
	import { lazyImport } from '$lib/utils/lazyLoad';

	let loadedSections: { [key: string]: any } = {};
	let visibleSections = new Set<string>();

	const sectionLoaders = {
		plans: () => lazyImport(() => import('$lib/components/homepage/PlansSnapshotSection.svelte')),
		founder: () => lazyImport(() => import('$lib/components/homepage/FounderStorySection.svelte')),
		soloBiz: () => lazyImport(() => import('$lib/components/homepage/SoloBizTeaserSection.svelte')),
		finalCTA: () => lazyImport(() => import('$lib/components/homepage/FinalCTASection.svelte'))
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
	<title>weKnowCO | Turn Colorado Dreams Into Mile-High Brands</title>
	<meta name="description" content="$5,280 gets you a complete website that works. 30 days. 7 pages. Zero fluff. Colorado's premier marketing partner for businesses that punch above altitude." />
	<meta property="og:title" content="weKnowCO | Turn Colorado Dreams Into Mile-High Brands" />
	<meta property="og:description" content="$5,280 gets you a complete website that works. 30 days. 7 pages. Zero fluff." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://weknowco.com" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<HeroSection />
<Why5280Section />

<!-- Lazy loaded sections with fade-in animation -->
<div data-section="plans" class="min-h-[50px]">
	{#if visibleSections.has('plans') && loadedSections.plans}
		<div class="animate-fade-in">
			<svelte:component this={loadedSections.plans} />
		</div>
	{/if}
</div>

<div data-section="founder" class="min-h-[50px]">
	{#if visibleSections.has('founder') && loadedSections.founder}
		<div class="animate-fade-in">
			<svelte:component this={loadedSections.founder} />
		</div>
	{/if}
</div>

<div data-section="soloBiz" class="min-h-[50px]">
	{#if visibleSections.has('soloBiz') && loadedSections.soloBiz}
		<div class="animate-fade-in">
			<svelte:component this={loadedSections.soloBiz} />
		</div>
	{/if}
</div>

<div data-section="finalCTA" class="min-h-[50px]">
	{#if visibleSections.has('finalCTA') && loadedSections.finalCTA}
		<div class="animate-fade-in">
			<svelte:component this={loadedSections.finalCTA} />
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