<script lang="ts">
	import { PricingCard } from '$lib/components/marketing';
	
	// Plan data
	const plans = [
		{
			title: 'Trailhead',
			price: '$750',
			description: 'Perfect for getting started with consistent content and basic optimization.',
			features: [
				'4 geo-researched blog posts',
				'Quarterly strategy call',
				'Search tune-ups',
				'Schema markup optimization',
				'Basic analytics reporting'
			],
			ctaText: 'Start the Trail',
			ctaHref: '/contact?plan=trailhead'
		},
		{
			title: 'Summit',
			price: '$1,800',
			description: 'Comprehensive marketing with ads, video content, and continuous optimization.',
			features: [
				'Everything in Trailhead',
				'Google/Meta ads management',
				'Monthly brand video',
				'Email drip campaigns',
				'Answer engine optimization',
				'Monthly performance review'
			],
			popular: true,
			ctaText: 'Reach the Summit',
			ctaHref: '/contact?plan=summit'
		},
		{
			title: 'Peak Season',
			price: '$3,500',
			description: 'Full-scale marketing operation with testing, influencers, and premium content.',
			features: [
				'Everything in Summit',
				'Bi-weekly landing page tests',
				'Influencer micro-campaigns',
				'Quarterly brand films',
				'Advanced prompt libraries',
				'Priority support'
			],
			ctaText: 'Claim the Peak',
			ctaHref: '/contact?plan=peak'
		}
	];
</script>

<!-- Plans Snapshot -->
<section class="py-20 bg-gray-50">
	<div class="max-w-7xl mx-auto px-6">
		<div class="text-center mb-16">
			<h2 class="font-display text-3xl md:text-4xl font-bold text-skyline-blue-600 mb-4">
				Choose Your Altitude
			</h2>
			<p class="text-xl text-granite-gray-600 max-w-3xl mx-auto">
				Start with the $5,280 site, then choose how high you want to climb. 
				Simple monthly plans—no long-term handcuffs.
			</p>
		</div>
		
		<div class="grid md:grid-cols-3 gap-8">
			{#each plans as plan}
				<PricingCard {...plan} />
			{/each}
		</div>
		
		<div class="text-center mt-12">
			<p class="text-granite-gray-600 mb-6">
				Want to see the full growth journey and business outcomes?
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
				<a 
					href="/plans-growth" 
					class="inline-flex items-center text-skyline-blue-600 hover:text-skyline-blue-700 font-medium group"
				>
					See Your Growth Journey
					<svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
					</svg>
				</a>
				<span class="text-granite-gray-400">or</span>
				<a 
					href="/contact" 
					class="inline-flex items-center text-skyline-blue-600 hover:text-skyline-blue-700 font-medium group"
				>
					Schedule a Discovery Call
					<svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
					</svg>
				</a>
			</div>
		</div>
	</div>
</section>