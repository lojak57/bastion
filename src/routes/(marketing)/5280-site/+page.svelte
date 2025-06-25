<script lang="ts">
	import { SiteHeroSection, CoreFeaturesSection } from '$lib/components/5280-site';
	import LazyWizard from '$lib/components/LazyWizard.svelte';
	import { onMount } from 'svelte';
	import { lazyImport } from '$lib/utils/lazyLoad';

	let loadedSections: { [key: string]: any } = {};
	let visibleSections = new Set<string>();
	let showWizard = false;

	const sectionLoaders = {
		included: () => lazyImport(() => import('$lib/components/5280-site/IncludedSection.svelte')),
		timeline: () => lazyImport(() => import('$lib/components/5280-site/TimelineSection.svelte')),
		process: () => lazyImport(() => import('$lib/components/5280-site/ProcessSection.svelte')),
		faqs: () => lazyImport(() => import('$lib/components/5280-site/FAQsSection.svelte'))
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
	<title>$5,280 Complete Website Package | weKnowCO</title>
	<meta name="description" content="Get a complete, professional website for your Colorado business in 30 days. $5,280 flat rate, no surprises. Mobile-responsive, SEO-optimized, and built for results." />
</svelte:head>

<SiteHeroSection />
<CoreFeaturesSection />

<!-- Lazy loaded sections -->
<div data-section="included" class="min-h-[50px]">
	{#if visibleSections.has('included') && loadedSections.included}
		<div class="animate-fade-in">
			<svelte:component this={loadedSections.included} />
		</div>
	{/if}
</div>

<div data-section="timeline" class="min-h-[50px]">
	{#if visibleSections.has('timeline') && loadedSections.timeline}
		<div class="animate-fade-in">
			<svelte:component this={loadedSections.timeline} />
		</div>
	{/if}
</div>

<div data-section="process" class="min-h-[50px]">
	{#if visibleSections.has('process') && loadedSections.process}
		<div class="animate-fade-in">
			<svelte:component this={loadedSections.process} />
		</div>
	{/if}
</div>

<div data-section="faqs" class="min-h-[50px]">
	{#if visibleSections.has('faqs') && loadedSections.faqs}
		<div class="animate-fade-in">
			<svelte:component this={loadedSections.faqs} />
		</div>
	{/if}
</div>

<!-- CTA Section with Lazy Wizard -->
<section id="get-started" class="py-20 bg-gradient-to-br from-skyline-blue-600 to-red-rocks-rust text-white">
	<div class="max-w-4xl mx-auto px-6">
		<div class="text-center mb-12">
			<h2 class="font-display text-3xl md:text-4xl font-bold mb-4">
				Ready for Your $5,280 Website?
			</h2>
			<p class="text-xl text-white/90">
				Let's build something amazing for your Colorado business
			</p>
		</div>
		
		<div class="text-center">
			<button 
				on:click={() => showWizard = true}
				class="bg-white text-skyline-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-snowfield-white transition-colors duration-300 shadow-lg"
			>
				Get Started Now
			</button>
		</div>
		
		<!-- Alternative CTA -->
		<div class="text-center mt-8">
			<p class="text-white/80 mb-4">
				Have questions? Want to see examples?
			</p>
			<div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
				<a 
					href="/case-stories"
					class="inline-flex items-center justify-center px-5 sm:px-6 py-3 border-2 border-white/50 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-sm sm:text-base w-full sm:w-auto"
				>
					View Case Studies
					<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
					</svg>
				</a>
				<a 
					href="mailto:hello@weknowco.com?subject=$5,280 Website Inquiry"
					class="inline-flex items-center justify-center px-5 sm:px-6 py-3 border-2 border-white/50 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-sm sm:text-base w-full sm:w-auto"
				>
					Email Us Directly
					<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
					</svg>
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Lazy Wizard -->
<LazyWizard 
	wizardType="lead-capture" 
	bind:isOpen={showWizard} 
	onClose={() => showWizard = false}
/>

<style>
	@keyframes fade-in {
		from { opacity: 0; transform: translateY(20px); }
		to { opacity: 1; transform: translateY(0); }
	}
	
	.animate-fade-in {
		animation: fade-in 0.4s ease-out;
	}
</style>