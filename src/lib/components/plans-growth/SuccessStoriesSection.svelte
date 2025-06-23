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
<section class="py-24 bg-gradient-to-br from-granite-gray-50 to-snowfield-white relative overflow-hidden">
	<!-- Background decorative elements -->
	<div class="absolute inset-0 overflow-hidden">
		<div class="absolute top-20 left-10 w-96 h-96 bg-skyline-blue-400/5 rounded-full blur-3xl animate-pulse"></div>
		<div class="absolute bottom-20 right-10 w-80 h-80 bg-aspen-gold-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
		<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-evergreen-green-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
		
		<!-- Floating success icons -->
		<div class="absolute top-1/4 right-1/4 animate-bounce delay-500">
			<svg class="w-12 h-12 text-aspen-gold-400/30" fill="currentColor" viewBox="0 0 24 24">
				<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
			</svg>
		</div>
		<div class="absolute bottom-1/4 left-1/4 animate-bounce delay-1000">
			<svg class="w-10 h-10 text-evergreen-green-600/30" fill="currentColor" viewBox="0 0 24 24">
				<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
			</svg>
		</div>
		<div class="absolute top-1/3 left-1/6 animate-bounce delay-1500">
			<svg class="w-8 h-8 text-skyline-blue-600/30" fill="currentColor" viewBox="0 0 24 24">
				<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
			</svg>
		</div>
	</div>
	
	<div class="max-w-7xl mx-auto px-6 relative z-10">
		<div class="text-center mb-16">
			<h2 class="font-display text-4xl md:text-5xl font-bold text-granite-gray-900 mb-6">
				Real Colorado Transformations
			</h2>
			<p class="text-xl md:text-2xl text-granite-gray-700 max-w-3xl mx-auto">
				See how businesses like yours went from struggling to thriving
			</p>
		</div>
		
		<div class="grid md:grid-cols-3 gap-8">
			{#each successOutcomes as story}
				<BaseCard class="p-0 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 bg-white border-2 border-granite-gray-100 hover:border-skyline-blue-400 overflow-hidden">
					<!-- Business Header -->
					<div class="p-6 bg-gradient-to-r from-skyline-blue-600 to-skyline-blue-700 text-white">
						<h3 class="font-semibold text-lg">{story.business}</h3>
					</div>
					
					<div class="p-6 space-y-6">
						<!-- Challenge Section -->
						<div class="relative">
							<div class="flex items-center gap-3 mb-3">
								<div class="w-10 h-10 rounded-full bg-red-rocks-rust/10 flex items-center justify-center flex-shrink-0">
									<svg class="w-5 h-5 text-red-rocks-rust" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
									</svg>
								</div>
								<h4 class="font-bold text-red-rocks-rust uppercase tracking-wide text-sm">The Challenge</h4>
							</div>
							<p class="text-granite-gray-700 leading-relaxed pl-13">{story.challenge}</p>
						</div>
						
						<!-- Outcome Section -->
						<div class="relative">
							<div class="flex items-center gap-3 mb-3">
								<div class="w-10 h-10 rounded-full bg-evergreen-green-100 flex items-center justify-center flex-shrink-0">
									<svg class="w-5 h-5 text-evergreen-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
									</svg>
								</div>
								<h4 class="font-bold text-evergreen-green-700 uppercase tracking-wide text-sm">The Outcome</h4>
							</div>
							<p class="text-granite-gray-800 font-medium leading-relaxed pl-13">{story.outcome}</p>
						</div>
						
						<!-- Journey Section -->
						<div class="pt-6 border-t-2 border-granite-gray-100">
							<div class="flex items-center gap-3 mb-3">
								<div class="w-10 h-10 rounded-full bg-aspen-gold-400/10 flex items-center justify-center flex-shrink-0">
									<svg class="w-5 h-5 text-aspen-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
									</svg>
								</div>
								<h4 class="font-bold text-aspen-gold-700 uppercase tracking-wide text-sm">The Journey</h4>
							</div>
							<p class="text-granite-gray-700 leading-relaxed pl-13">{story.journey}</p>
						</div>
					</div>
				</BaseCard>
			{/each}
		</div>
	</div>
</section>