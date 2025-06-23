<script lang="ts">
	import { BaseCard } from '$lib/components/ui';
	
	// Journey stages
	const journeyStages = [
		{
			stage: '1',
			title: 'Foundation',
			subtitle: 'Month 1-3',
			description: 'Your digital presence takes shape',
			outcomes: [
				'Professional website attracting qualified leads',
				'Local search visibility increases by 200%+',
				'Brand recognition in your Colorado market',
				'Clear messaging that converts visitors'
			],
			tools: ['Website Development', 'Local SEO', 'Brand Positioning', 'Content Strategy']
		},
		{
			stage: '2',
			title: 'Growth',
			subtitle: 'Month 4-9',
			description: 'Your audience grows and engages',
			outcomes: [
				'Consistent lead flow from multiple channels',
				'Email list growing 50+ qualified contacts monthly',
				'Social media following that drives business',
				'Customer retention through strategic content'
			],
			tools: ['Paid Advertising', 'Email Marketing', 'Video Content', 'Social Strategy']
		},
		{
			stage: '3',
			title: 'Scale',
			subtitle: 'Month 10+',
			description: 'Your business operates at peak efficiency',
			outcomes: [
				'Predictable revenue from digital channels',
				'Market leadership in your Colorado niche',
				'Automated systems handling routine growth',
				'Premium pricing supported by brand strength'
			],
			tools: ['Automation Systems', 'Advanced Analytics', 'A/B Testing', 'Conversion Optimization']
		}
	];
</script>

<!-- Journey Stages -->
<section id="journey" class="py-16 md:py-20 bg-gradient-to-br from-snowfield-white via-skyline-blue-25 to-aspen-gold-25 relative overflow-hidden border-t-4 border-skyline-blue-300">
	<!-- Background mountain silhouette -->
	<div class="absolute inset-0 overflow-hidden">
		<div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-granite-gray-100/30 to-transparent"></div>
		<div class="absolute top-20 right-20 w-64 h-64 bg-skyline-blue-100/30 rounded-full blur-3xl animate-pulse"></div>
		<div class="absolute bottom-20 left-20 w-48 h-48 bg-aspen-gold-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
		
		<!-- Floating journey icons -->
		<div class="absolute top-1/4 left-1/6 animate-float">
			<svg class="w-8 h-8 text-skyline-blue-200" fill="currentColor" viewBox="0 0 24 24">
				<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
			</svg>
		</div>
		<div class="absolute top-1/2 right-1/6 animate-float delay-1000">
			<svg class="w-6 h-6 text-aspen-gold-200" fill="currentColor" viewBox="0 0 24 24">
				<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
			</svg>
		</div>
		<div class="absolute bottom-1/4 left-1/3 animate-float delay-2000">
			<svg class="w-10 h-10 text-green-200" fill="currentColor" viewBox="0 0 24 24">
				<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
			</svg>
		</div>
	</div>
	
	<div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
		<div class="text-center mb-12 md:mb-16">
			<div class="inline-flex items-center bg-skyline-blue-100 px-4 py-2 rounded-full mb-6">
				<svg class="w-5 h-5 mr-2 text-skyline-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
				</svg>
				<span class="text-skyline-blue-700 font-semibold text-sm uppercase tracking-wider">Journey</span>
			</div>
			<h2 class="font-display text-3xl md:text-5xl font-bold text-skyline-blue-700 mb-6">
				Your Growth Journey
			</h2>
			<p class="text-lg md:text-xl text-granite-gray-700 max-w-3xl mx-auto font-medium">
				Every successful Colorado business follows the same path. Here's how we guide you through each stage.
			</p>
		</div>
		
		<div class="space-y-16">
			{#each journeyStages as stage, index}
				<div class="relative">
					<!-- Stage Number -->
					<div class="flex items-center mb-8">
						<div class="w-20 h-20 bg-gradient-to-br from-skyline-blue-700 to-aspen-gold-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-6 shadow-lg border-4 border-white">
							{stage.stage}
						</div>
						<div>
							<h3 class="font-display text-2xl md:text-4xl font-bold text-skyline-blue-700">{stage.title}</h3>
							<p class="text-granite-gray-600 font-bold text-lg">{stage.subtitle}</p>
						</div>
					</div>
					
					<div class="grid lg:grid-cols-2 gap-12 items-start">
						<!-- Left: Description & Tools -->
						<div class="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-skyline-blue-200 shadow-lg">
							<p class="text-lg text-granite-gray-800 mb-6 font-medium">{stage.description}</p>
							
							<h4 class="font-bold text-skyline-blue-700 mb-4 text-lg">What We Focus On:</h4>
							<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
								{#each stage.tools as tool}
									<div class="bg-skyline-blue-100 px-4 py-3 rounded-lg text-sm font-bold text-skyline-blue-800 border border-skyline-blue-300">
										{tool}
									</div>
								{/each}
							</div>
						</div>
						
						<!-- Right: Outcomes -->
						<BaseCard class="p-6 lg:p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white border-2 border-aspen-gold-300 shadow-lg">
							<h4 class="font-bold text-skyline-blue-700 mb-6 flex items-center text-lg">
								<svg class="w-6 h-6 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
								</svg>
								What You'll Achieve
							</h4>
							<ul class="space-y-4">
								{#each stage.outcomes as outcome}
									<li class="flex items-start">
										<svg class="w-6 h-6 mr-3 text-aspen-gold-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
										</svg>
										<span class="text-granite-gray-800 font-medium">{outcome}</span>
									</li>
								{/each}
							</ul>
						</BaseCard>
					</div>
					
					<!-- Progress Line -->
					{#if index < journeyStages.length - 1}
						<div class="flex justify-center my-12">
							<div class="w-px h-16 bg-gradient-to-b from-skyline-blue-300 to-aspen-gold-300 animate-pulse"></div>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>