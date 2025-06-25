<script lang="ts">
	import { LeadCaptureForm } from '$lib/components/forms';
	import { BaseCard } from '$lib/components/ui';
	import LeadCaptureWizard from '$lib/components/wizard/LeadCaptureWizard.svelte';
	import { page } from '$app/stores';
	import { SITE_CONFIG } from '$lib/config/site.config';
	
	// Get query parameters
	$: plan = $page.url.searchParams.get('plan');
	$: interest = $page.url.searchParams.get('interest');
	
	// Determine service interest based on URL params
	$: serviceInterest = plan ? `${plan}-plan` : (interest || 'general');
	
	// Dynamic content based on context
	$: pageTitle = plan ? `Get Started with ${plan.charAt(0).toUpperCase() + plan.slice(1)}` : 
	              interest === 'solo-biz' ? 'Apply for Solo Biz Helper' :
	              'Start Your Climb';
	              
	$: pageDescription = plan ? `Ready to begin your ${plan} journey? Let's discuss your goals and get you climbing.` :
	                    interest === 'solo-biz' ? 'Tell us about your business and let\'s explore investment opportunities.' :
	                    'Ready to turn your Colorado dream into a mile-high brand? Let\'s start the conversation.';
</script>

<svelte:head>
	<title>{pageTitle} | weKnowCO</title>
	<meta name="description" content={pageDescription} />
</svelte:head>

<div class="min-h-screen bg-snowfield-white py-12">
	<div class="max-w-4xl mx-auto px-6">
		<!-- Header -->
		<div class="text-center mb-12">
			<h1 class="wkc-heading text-4xl md:text-5xl font-bold text-skyline-blue-600 mb-4">
				{pageTitle}
			</h1>
			<p class="text-xl text-granite-gray-600 max-w-2xl mx-auto">
				{pageDescription}
			</p>
		</div>
		
		<div class="grid lg:grid-cols-2 gap-12">
			<!-- Contact Form -->
			<div>
				<LeadCaptureWizard 
					{serviceInterest}
					formName="Contact Page - {plan || interest || 'General'}"
				/>
			</div>
			
			<!-- Contact Info & FAQ -->
			<div class="space-y-8">
				<!-- Contact Methods -->
				<BaseCard class="p-8">
					<h3 class="wkc-heading text-xl font-semibold text-skyline-blue-600 mb-6">
						Other Ways to Reach Us
					</h3>
					
					<div class="space-y-6">
						<!-- Email -->
						<div class="flex items-start">
							<div class="w-10 h-10 bg-skyline-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
								<svg class="w-5 h-5 text-skyline-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
								</svg>
							</div>
							<div>
								<h4 class="font-semibold text-granite-gray-700 mb-1">Email</h4>
								<p class="text-granite-gray-600 text-sm mb-2">For detailed project discussions</p>
								<a href="mailto:{SITE_CONFIG.email}" class="text-skyline-blue-600 hover:text-skyline-blue-700 font-medium">
									{SITE_CONFIG.email}
								</a>
							</div>
						</div>
						
						<!-- Phone -->
						<div class="flex items-start">
							<div class="w-10 h-10 bg-aspen-gold-100 rounded-lg flex items-center justify-center mr-4 mt-1">
								<svg class="w-5 h-5 text-aspen-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
								</svg>
							</div>
							<div>
								<h4 class="font-semibold text-granite-gray-700 mb-1">Phone</h4>
								<p class="text-granite-gray-600 text-sm mb-2">Quick questions & urgent needs</p>
								<a href="tel:+1-720-555-5280" class="text-skyline-blue-600 hover:text-skyline-blue-700 font-medium">
									{SITE_CONFIG.phone}
								</a>
							</div>
						</div>
						
						<!-- Calendar -->
						<div class="flex items-start">
							<div class="w-10 h-10 bg-red-rocks-rust/10 rounded-lg flex items-center justify-center mr-4 mt-1">
								<svg class="w-5 h-5 text-red-rocks-rust" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
								</svg>
							</div>
							<div>
								<h4 class="font-semibold text-granite-gray-700 mb-1">Discovery Call</h4>
								<p class="text-granite-gray-600 text-sm mb-2">30-minute strategy session</p>
								<a href="{SITE_CONFIG.calendlyUrl}" target="_blank" rel="noopener noreferrer" class="text-skyline-blue-600 hover:text-skyline-blue-700 font-medium">
									Schedule on Calendly
									<svg class="inline w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</BaseCard>
				
				<!-- Response Time -->
				<BaseCard class="p-6 bg-gradient-to-r from-skyline-blue-50 to-aspen-gold-50">
					<div class="flex items-center">
						<div class="w-12 h-12 bg-aspen-gold-400 rounded-full flex items-center justify-center mr-4">
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
							</svg>
						</div>
						<div>
							<h4 class="font-semibold text-granite-gray-700 mb-1">Quick Response</h4>
							<p class="text-granite-gray-600 text-sm">
								We typically respond within 4 hours during business hours (9am-6pm MT)
							</p>
						</div>
					</div>
				</BaseCard>
				
				<!-- Quick FAQ -->
				<BaseCard class="p-6">
					<h3 class="wkc-heading text-lg font-semibold text-skyline-blue-600 mb-4">
						Common Questions
					</h3>
					
					<div class="space-y-4">
						<div>
							<h4 class="font-medium text-granite-gray-700 mb-1">How quickly can we start?</h4>
							<p class="text-sm text-granite-gray-600">
								$5,280 sites can begin within 1 week of contract signing. 
								Retainer plans start the following month.
							</p>
						</div>
						
						<div>
							<h4 class="font-medium text-granite-gray-700 mb-1">Do you work outside Colorado?</h4>
							<p class="text-sm text-granite-gray-600">
								We focus on Colorado businesses but make exceptions for the right projects. 
								Let's discuss your specific needs.
							</p>
						</div>
						
						<div>
							<h4 class="font-medium text-granite-gray-700 mb-1">What's included in the $5,280?</h4>
							<p class="text-sm text-granite-gray-600">
								Complete site (up to 7 pages), copywriting, SEO, mobile optimization, 
								and 30 days of bug fixes. <a href="/5280-site" class="text-skyline-blue-600">See full details</a>.
							</p>
						</div>
					</div>
				</BaseCard>
			</div>
		</div>
	</div>
</div>