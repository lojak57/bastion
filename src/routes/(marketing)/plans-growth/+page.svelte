<script lang="ts">
	import { PlansHeroSection, JourneyStagesSection } from '$lib/components/plans-growth';
	import { onMount } from 'svelte';
	import { lazyImport } from '$lib/utils/lazyLoad';

	let loadedSections: { [key: string]: any } = {};
	let visibleSections = new Set<string>();

	const sectionLoaders = {
		success: () => lazyImport(() => import('$lib/components/plans-growth/SuccessStoriesSection.svelte')),
		benefits: () => lazyImport(() => import('$lib/components/plans-growth/GrowthBenefitsSection.svelte')),
		plans: () => lazyImport(() => import('$lib/components/plans-growth/PlansSection.svelte')),
		dashboard: () => lazyImport(() => import('$lib/components/plans-growth/DashboardSection.svelte')),
		cta: () => lazyImport(() => import('$lib/components/plans-growth/PlansCTASection.svelte'))
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
	<title>Plans & Growth | Your Business Journey | weKnowCO</title>
	<meta name="description" content="See how weKnowCO's marketing plans transform Colorado businesses from invisible to market leaders. Real outcomes, proven journey, sustainable growth." />
</svelte:head>

<PlansHeroSection />
<JourneyStagesSection />

<!-- Lazy loaded sections -->
<div data-section="success" class="min-h-[50px]">
	{#if visibleSections.has('success') && loadedSections.success}
		<div class="animate-fade-in">
			<svelte:component this={loadedSections.success} />
		</div>
	{/if}
</div>

<div data-section="benefits" class="min-h-[50px]">
	{#if visibleSections.has('benefits') && loadedSections.benefits}
		<div class="animate-fade-in">
			<svelte:component this={loadedSections.benefits} />
		</div>
	{/if}
</div>

<div data-section="plans" class="min-h-[50px]">
	{#if visibleSections.has('plans') && loadedSections.plans}
		<div class="animate-fade-in">
			<svelte:component this={loadedSections.plans} />
		</div>
	{/if}
</div>

<div data-section="dashboard" class="min-h-[50px]">
	{#if visibleSections.has('dashboard') && loadedSections.dashboard}
		<div class="animate-fade-in">
			<svelte:component this={loadedSections.dashboard} />
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