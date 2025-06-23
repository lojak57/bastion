<script lang="ts">
	import { BaseCard, ContentBox } from '$lib/components/ui';
	import { PricingCard } from '$lib/components/marketing';
	
	// Plan data with journey context
	const plans = [
		{
			title: 'Trailhead',
			price: '$750',
			subtitle: 'Foundation Builder',
			description: 'Perfect for establishing your digital foundation and getting consistent results.',
			promo: '2 months FREE with $5280 website purchase',
			features: [
				'4 geo-researched blog posts',
				'Quarterly strategy call',
				'Search tune-ups',
				'Schema markup optimization',
				'Basic analytics reporting'
			],
			outcomes: [
				'Professional online presence',
				'Local search visibility',
				'Consistent content flow',
				'Clear growth metrics'
			],
			ctaText: 'Start the Trail',
			ctaHref: '/contact?plan=trailhead'
		},
		{
			title: 'Summit',
			price: '$1,800',
			subtitle: 'Growth Accelerator',
			description: 'Comprehensive marketing that scales your business and builds lasting relationships.',
			promo: '2 months FREE with $5280 website purchase',
			features: [
				'Everything in Trailhead',
				'Google/Meta ads management',
				'Monthly brand video',
				'Email drip campaigns',
				'Answer engine optimization',
				'Monthly performance review'
			],
			outcomes: [
				'Multi-channel lead generation',
				'Engaged email audience',
				'Brand video library',
				'Optimized ad performance'
			],
			popular: true,
			ctaText: 'Reach the Summit',
			ctaHref: '/contact?plan=summit'
		},
		{
			title: 'Peak Season',
			price: '$3,500',
			subtitle: 'Market Leader',
			description: 'Full-scale marketing operation that positions you as the authority in your space.',
			promo: '$5280 Website included FREE + 2 months FREE',
			specialOffer: true,
			features: [
				'Everything in Summit',
				'Bi-weekly landing page tests',
				'Influencer micro-campaigns',
				'Quarterly brand films',
				'Advanced prompt libraries',
				'Priority support'
			],
			outcomes: [
				'Market leadership position',
				'Premium pricing power',
				'Automated growth systems',
				'Competitive moat'
			],
			ctaText: 'Claim the Peak',
			ctaHref: '/contact?plan=peak'
		}
	];
</script>

<!-- Plans Section -->
<section id="choose-plans" class="py-16 md:py-20 bg-gradient-to-br from-skyline-blue-50 via-snowfield-white to-aspen-gold-50 relative overflow-hidden border-t-4 border-skyline-blue-200">
	<!-- Background decorative elements -->
	<div class="absolute inset-0 overflow-hidden">
		<div class="absolute -top-40 -right-40 w-80 h-80 bg-skyline-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
		<div class="absolute -bottom-40 -left-40 w-80 h-80 bg-aspen-gold-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
		<div class="absolute top-1/2 left-1/4 w-60 h-60 bg-red-rocks-rust/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
	</div>
	
	<div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
		<ContentBox variant="primary" size="lg" className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
			<ContentBox variant="secondary" size="sm" className="inline-block mb-6">
				<div class="flex items-center">
					<svg class="w-5 h-5 mr-2 text-skyline-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
					</svg>
					<span class="text-skyline-blue-700 font-semibold text-sm uppercase tracking-wider">Our Plans</span>
				</div>
			</ContentBox>
			
			<ContentBox variant="neutral" size="md" className="mb-6">
				<h2 class="font-display text-3xl md:text-5xl font-bold text-skyline-blue-700">
					Choose Your Altitude
				</h2>
			</ContentBox>
			
			<ContentBox variant="neutral" size="md">
				<p class="text-lg md:text-xl text-granite-gray-700 font-medium">
					Each plan is designed for a specific stage of your growth journey. Start where you are, scale when you're ready.
				</p>
			</ContentBox>
		</ContentBox>
		
		<!-- Special Offer Banner -->
		<ContentBox variant="primary" size="lg" className="bg-gradient-to-r from-red-rocks-rust to-red-600 border-2 border-red-700 mb-8 text-center">
			<div class="flex flex-col md:flex-row items-center justify-center gap-4">
				<div class="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl">
					<p class="text-white font-bold text-xl md:text-2xl">LIMITED TIME OFFER</p>
				</div>
				<div class="text-white">
					<p class="font-bold text-lg md:text-xl">Get 2 MONTHS FREE on ANY plan with $5280 website purchase!</p>
					<p class="text-white/90 text-base mt-1">Peak Season members get the $5280 website included FREE!</p>
				</div>
			</div>
		</ContentBox>
		
		<div class="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12 md:mb-16">
			{#each plans as plan}
				<BaseCard class="p-6 lg:p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 hover:scale-105 relative {plan.popular ? 'border-2 border-aspen-gold-400 shadow-aspen-gold-400/20 transform scale-105' : plan.specialOffer ? 'border-2 border-red-rocks-rust shadow-red-rocks-rust/20' : 'border border-skyline-blue-200'} backdrop-blur-sm bg-white/95 hover:bg-white shadow-lg">
					{#if plan.popular}
						<div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-aspen-gold-400 text-granite-gray-800 px-6 py-2 rounded-full text-sm font-bold">
							Most Popular
						</div>
					{/if}
					{#if plan.specialOffer}
						<div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-rocks-rust text-white px-6 py-2 rounded-full text-sm font-bold animate-pulse">
							$5280 Website FREE!
						</div>
					{/if}
					
					<div class="text-center mb-6 space-y-3">
						<ContentBox variant="neutral" size="sm">
							<h3 class="font-display text-2xl lg:text-3xl font-bold text-skyline-blue-700">{plan.title}</h3>
						</ContentBox>
						
						<ContentBox variant="secondary" size="sm">
							<p class="text-granite-gray-700 font-semibold text-base">{plan.subtitle}</p>
						</ContentBox>
						
						<ContentBox variant="primary" size="md">
							<div class="text-4xl lg:text-5xl font-bold text-skyline-blue-800">{plan.price}</div>
						</ContentBox>
						
						{#if plan.promo}
							<ContentBox variant="accent" size="sm" className="{plan.specialOffer ? 'bg-gradient-to-r from-red-rocks-rust to-red-600 border-red-700' : ''}">
								<p class="text-sm font-bold {plan.specialOffer ? 'text-white' : 'text-granite-gray-800'}">
									{plan.promo}
								</p>
							</ContentBox>
						{/if}
						
						<ContentBox variant="neutral" size="sm">
							<p class="text-granite-gray-700 text-sm font-medium leading-relaxed">{plan.description}</p>
						</ContentBox>
					</div>
					
					<div class="space-y-6">
						<!-- What's Included -->
						<div class="bg-skyline-blue-50 p-4 rounded-lg mb-4">
							<h4 class="font-bold text-skyline-blue-700 mb-3 text-base">What's Included:</h4>
							<ul class="space-y-3 text-sm">
								{#each plan.features as feature}
									<li class="flex items-start">
										<svg class="w-5 h-5 mr-3 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
										</svg>
										<span class="text-granite-gray-800 font-medium">{feature}</span>
									</li>
								{/each}
							</ul>
						</div>
						
						<!-- Outcomes -->
						<div class="bg-aspen-gold-50 p-4 rounded-lg">
							<h4 class="font-bold text-aspen-gold-700 mb-3 text-base">Your Outcomes:</h4>
							<ul class="space-y-3 text-sm">
								{#each plan.outcomes as outcome}
									<li class="flex items-start">
										<svg class="w-5 h-5 mr-3 text-aspen-gold-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
										</svg>
										<span class="text-granite-gray-800 font-medium">{outcome}</span>
									</li>
								{/each}
							</ul>
						</div>
					</div>
					
					<ContentBox variant="primary" size="md" className="mt-6">
						<a 
							href={plan.ctaHref}
							class="w-full bg-gradient-to-r from-skyline-blue-700 to-skyline-blue-800 text-white py-4 px-6 rounded-xl font-bold text-base hover:from-skyline-blue-800 hover:to-skyline-blue-900 transition-all duration-300 inline-block text-center transform hover:scale-105 shadow-xl hover:shadow-2xl"
						>
							{plan.ctaText}
						</a>
					</ContentBox>
				</BaseCard>
			{/each}
		</div>
		
		<ContentBox variant="primary" size="lg" className="text-center max-w-3xl mx-auto">
			<ContentBox variant="neutral" size="md" className="mb-6">
				<p class="text-granite-gray-700 text-lg font-medium">
					Not sure which plan fits your business stage? Let's talk about your growth goals.
				</p>
			</ContentBox>
			
			<ContentBox variant="secondary" size="md">
				<a 
					href="/contact" 
					class="inline-flex items-center text-skyline-blue-700 hover:text-skyline-blue-800 font-bold text-lg group hover:bg-skyline-blue-100 px-6 py-3 rounded-lg transition-all"
				>
					Schedule a Strategy Call
					<svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
					</svg>
				</a>
			</ContentBox>
		</ContentBox>
	</div>
</section>