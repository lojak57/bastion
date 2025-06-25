<script lang="ts">
	import {
		SiteHeroSection,
		CoreFeaturesSection,
		IncludedSection,
		TimelineSection,
		ProcessSection,
		FAQsSection,
		CTASection
	} from '$lib/components/5280-site';
	import LeadCaptureWizard from '$lib/components/wizard/LeadCaptureWizard.svelte';
</script>

<svelte:head>
	<title>$5,280 Complete Website Package | weKnowCO</title>
	<meta name="description" content="Get a complete, professional website for your Colorado business in 30 days. $5,280 flat rate, no surprises. Mobile-responsive, SEO-optimized, and built for results." />
</svelte:head>

<SiteHeroSection />
<CoreFeaturesSection />
<IncludedSection />
<TimelineSection />
<ProcessSection />
<FAQsSection />

<!-- CTA Section -->
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
		
		<LeadCaptureWizard 
			serviceInterest="5280-site"
			formName="$5,280 Site Interest"
		/>
		
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

<CTASection />