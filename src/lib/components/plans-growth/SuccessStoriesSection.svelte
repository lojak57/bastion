<script lang="ts">
	import { BaseCard } from '$lib/components/ui';
	
	// Success stories (outcomes without specific numbers)
	const successOutcomes = [
		{
			business: 'Local Service Provider',
			challenge: 'Invisible online, competing on price alone',
			outcome: 'Premium positioning, booked solid 3 months out',
			journey: 'Started with Trailhead, scaled to Summit in 6 months'
		},
		{
			business: 'Colorado Retail Chain',
			challenge: 'Foot traffic declining, no online presence',
			outcome: 'Omnichannel experience, online sales thriving',
			journey: 'Peak Season from day one, custom solutions added'
		},
		{
			business: 'Professional Services',
			challenge: 'Referral-dependent, feast or famine cycles',
			outcome: 'Predictable pipeline, authority in their field',
			journey: 'Summit plan with quarterly strategy pivots'
		}
	];
</script>

<!-- Success Stories -->
<section class="py-20 bg-gradient-to-br from-skyline-blue-600 via-skyline-blue-700 to-granite-gray-800 relative overflow-hidden">
	<!-- Background decorative elements -->
	<div class="absolute inset-0 overflow-hidden">
		<div class="absolute top-20 left-10 w-96 h-96 bg-aspen-gold-400/10 rounded-full blur-3xl animate-pulse"></div>
		<div class="absolute bottom-20 right-10 w-80 h-80 bg-red-rocks-rust/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
		<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-snowfield-white/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
		
		<!-- Floating success icons -->
		<div class="absolute top-1/4 right-1/4 animate-bounce delay-500">
			<svg class="w-12 h-12 text-aspen-gold-400/20" fill="currentColor" viewBox="0 0 24 24">
				<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
			</svg>
		</div>
		<div class="absolute bottom-1/4 left-1/4 animate-bounce delay-1000">
			<svg class="w-10 h-10 text-green-400/20" fill="currentColor" viewBox="0 0 24 24">
				<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
			</svg>
		</div>
		<div class="absolute top-1/3 left-1/6 animate-bounce delay-1500">
			<svg class="w-8 h-8 text-aspen-gold-400/20" fill="currentColor" viewBox="0 0 24 24">
				<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
			</svg>
		</div>
	</div>
	
	<div class="max-w-7xl mx-auto px-6 relative z-10">
		<div class="text-center mb-16">
			<h2 class="font-display text-3xl md:text-4xl font-bold text-snowfield-white mb-4">
				Real Colorado Transformations
			</h2>
			<p class="text-xl text-snowfield-white/80">
				See how businesses like yours went from struggling to thriving
			</p>
		</div>
		
		<div class="grid md:grid-cols-3 gap-8">
			{#each successOutcomes as story}
				<BaseCard class="p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-4 hover:scale-105 backdrop-blur-sm bg-white/95 hover:bg-white border border-white/20 hover:border-aspen-gold-400/50">
					<h3 class="font-semibold text-skyline-blue-600 mb-4 group-hover:text-skyline-blue-700">{story.business}</h3>
					
					<div class="space-y-4">
						<div>
							<h4 class="text-sm font-semibold text-red-rocks-rust mb-2">The Challenge</h4>
							<p class="text-granite-gray-600 text-sm">{story.challenge}</p>
						</div>
						
						<div>
							<h4 class="text-sm font-semibold text-green-600 mb-2">The Outcome</h4>
							<p class="text-granite-gray-700 text-sm font-medium">{story.outcome}</p>
						</div>
						
						<div class="pt-4 border-t border-granite-gray-200">
							<p class="text-xs text-granite-gray-500 font-medium">{story.journey}</p>
						</div>
					</div>
				</BaseCard>
			{/each}
		</div>
	</div>
</section>