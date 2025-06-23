<script lang="ts">
	import { BaseCard } from '$lib/components/ui';
	
	// How we help different business types
	const businessTransformations = [
		{
			business: 'Local Service Providers',
			challenge: 'Invisible online, competing on price alone',
			howWeHelp: 'Build premium positioning, create consistent booking flow',
			ourApproach: 'Foundation plan, then scale to growth systems'
		},
		{
			business: 'Colorado Retail Businesses',
			challenge: 'Foot traffic declining, no online presence',
			howWeHelp: 'Create omnichannel experience, drive online sales',
			ourApproach: 'Full-scale operation with custom solutions'
		},
		{
			business: 'Professional Services',
			challenge: 'Referral-dependent, feast or famine cycles',
			howWeHelp: 'Build predictable pipeline, establish market authority',
			ourApproach: 'Growth plan with strategic pivots every quarter'
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
		
		<!-- Large watermarked favicon -->
		<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
			<img src="/favicon.png" alt="" class="w-96 h-96 select-none pointer-events-none">
		</div>
	</div>
	
	<div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
		<div class="text-center mb-8 sm:mb-12 md:mb-16">
			<h2 class="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-granite-gray-900 mb-4 sm:mb-6">
				Colorado Business Transformations
			</h2>
			<p class="text-lg sm:text-xl md:text-2xl text-granite-gray-700 max-w-3xl mx-auto">
				How we help businesses like yours go from struggling to thriving
			</p>
		</div>
		
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
			{#each businessTransformations as transformation}
				<BaseCard class="p-0 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 bg-white border-2 border-granite-gray-100 hover:border-skyline-blue-400 overflow-hidden">
					<!-- Business Header -->
					<div class="p-4 sm:p-6 bg-gradient-to-r from-skyline-blue-600 to-skyline-blue-700 text-white">
						<h3 class="font-semibold text-base sm:text-lg">{transformation.business}</h3>
					</div>
					
					<div class="p-4 sm:p-6 space-y-4 sm:space-y-6">
						<!-- Challenge Section -->
						<div class="relative">
							<div class="flex items-center gap-3 mb-3">
								<div class="w-10 h-10 rounded-full bg-red-rocks-rust/10 flex items-center justify-center flex-shrink-0">
									<svg class="w-5 h-5 text-red-rocks-rust" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
									</svg>
								</div>
								<h4 class="font-bold text-red-rocks-rust uppercase tracking-wide text-sm">Common Challenge</h4>
							</div>
							<p class="text-granite-gray-700 leading-relaxed pl-13">{transformation.challenge}</p>
						</div>
						
						<!-- How We Help Section -->
						<div class="relative">
							<div class="flex items-center gap-3 mb-3">
								<div class="w-10 h-10 rounded-full bg-evergreen-green-100 flex items-center justify-center flex-shrink-0">
									<svg class="w-5 h-5 text-evergreen-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
									</svg>
								</div>
								<h4 class="font-bold text-evergreen-green-700 uppercase tracking-wide text-sm">How We Help</h4>
							</div>
							<p class="text-granite-gray-800 font-medium leading-relaxed pl-13">{transformation.howWeHelp}</p>
						</div>
						
						<!-- Our Approach Section -->
						<div class="pt-6 border-t-2 border-granite-gray-100">
							<div class="flex items-center gap-3 mb-3">
								<div class="w-10 h-10 rounded-full bg-aspen-gold-400/10 flex items-center justify-center flex-shrink-0">
									<svg class="w-5 h-5 text-aspen-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
									</svg>
								</div>
								<h4 class="font-bold text-aspen-gold-700 uppercase tracking-wide text-sm">Our Approach</h4>
							</div>
							<p class="text-granite-gray-700 leading-relaxed pl-13">{transformation.ourApproach}</p>
						</div>
					</div>
				</BaseCard>
			{/each}
		</div>
	</div>
</section>