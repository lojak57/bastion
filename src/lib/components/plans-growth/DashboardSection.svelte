<script lang="ts">
	import { BaseCard, ContentBox } from '$lib/components/ui';
	
	// How we actually help businesses grow
	const realValue = [
		{
			category: "Revenue Attribution",
			how: "We track which content actually brings in paying customers",
			method: "Tag every touchpoint, follow the customer journey from first click to signed contract",
			result: "You know exactly where to invest your marketing budget",
			boring: "Traffic sources",
			real: "Revenue sources"
		},
		{
			category: "Customer Journey Mapping", 
			how: "We map the exact path your best customers take before buying",
			method: "Analyze behavior patterns, identify decision triggers, optimize high-value touchpoints",
			result: "More prospects follow the path that leads to sales",
			boring: "Page views",
			real: "Buying signals"
		},
		{
			category: "Lead Qualification",
			how: "We help you focus on leads that actually close",
			method: "Score based on real behavior, not demographics. Track engagement patterns that predict purchase intent",
			result: "Your sales team spends time on deals they can actually win",
			boring: "Lead count",
			real: "Revenue probability"
		},
		{
			category: "Market Positioning",
			how: "We find the gaps your competitors are missing",
			method: "Monitor competitor content, identify unmet customer needs, position you where they're not",
			result: "You become the obvious choice in your category",
			boring: "Market share",
			real: "Market gaps"
		}
	];
	
	const realOutcomes = [
		{
			what: "Lead Generation",
			how: "Content that actually converts strangers into prospects"
		},
		{
			what: "Conversion Rate",
			how: "Optimize the path from visitor to customer"
		},
		{
			what: "Customer Value",
			how: "Attract customers who spend more and stay longer"
		},
		{
			what: "Sales Cycle",
			how: "Remove friction so prospects buy faster"
		}
	];
</script>

<!-- Dashboard Section -->
<section class="py-16 md:py-20 bg-gradient-to-br from-granite-gray-50 to-snowfield-white relative overflow-hidden border-t-4 border-granite-gray-200">
	<!-- Background elements -->
	<div class="absolute inset-0 overflow-hidden">
		<div class="absolute top-20 right-20 w-64 h-64 bg-skyline-blue-100/30 rounded-full blur-3xl animate-pulse"></div>
		<div class="absolute bottom-20 left-20 w-48 h-48 bg-aspen-gold-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
		
		<!-- Floating dashboard icons -->
		<div class="absolute top-1/4 left-1/6 animate-float">
			<svg class="w-8 h-8 text-skyline-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
			</svg>
		</div>
		<div class="absolute bottom-1/3 right-1/4 animate-float delay-1000">
			<svg class="w-6 h-6 text-aspen-gold-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
			</svg>
		</div>
	</div>
	
	<div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
		<!-- Header -->
		<div class="max-w-4xl mx-auto">
			<BaseCard class="p-6 sm:p-8 md:p-12 text-center bg-white shadow-2xl border-2 border-granite-gray-200">
				<div class="inline-flex items-center bg-granite-gray-100 px-4 py-2 rounded-full mb-6">
					<svg class="w-5 h-5 mr-2 text-granite-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
					</svg>
					<span class="text-granite-gray-700 font-semibold text-sm uppercase tracking-wider">Analytics</span>
				</div>
				<div class="mb-6">
					<p class="text-granite-gray-600 text-lg italic mb-2">*sigh*</p>
					<h2 class="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-skyline-blue-700 mb-4">
						Yes...we do the fancy dashboard thing too
					</h2>
				</div>
				<p class="text-base sm:text-lg md:text-xl text-granite-gray-700 mb-6 sm:mb-8 font-medium">
					Everyone talks about "big data" and "metrics." Here's what actually matters: growing your business. No fake statistics. No inflated numbers. Just real methods that get real results.
				</p>
				<div class="bg-aspen-gold-100 border-2 border-aspen-gold-400 p-6 rounded-xl shadow-lg">
					<p class="text-aspen-gold-800 font-bold text-base">
						We don't just track numbers. We find what makes your customers buy, then do more of that.
					</p>
				</div>
			</BaseCard>
		</div>
		
		<!-- What We Actually Improve -->
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 sm:mb-12 md:mb-16">
			{#each realOutcomes as outcome}
				<BaseCard class="p-4 md:p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-2 border-skyline-blue-200 hover:border-skyline-blue-400">
					<div class="space-y-4">
						<ContentBox variant="primary" size="sm">
							<div class="text-lg md:text-xl font-bold text-skyline-blue-700">{outcome.what}</div>
						</ContentBox>
						
						<ContentBox variant="neutral" size="sm">
							<p class="text-sm text-granite-gray-700 font-medium leading-relaxed">{outcome.how}</p>
						</ContentBox>
					</div>
				</BaseCard>
			{/each}
		</div>
		
		<!-- How We Actually Help -->
		<div class="max-w-6xl mx-auto">
			<BaseCard class="p-8 text-center bg-white shadow-xl border-2 border-skyline-blue-300 mb-12">
				<h3 class="font-display text-2xl md:text-4xl font-bold text-skyline-blue-700 mb-6">
					How we actually grow your business
				</h3>
				<p class="text-granite-gray-700 max-w-2xl mx-auto text-lg font-medium">
					No fluff. No fake numbers. Just the real methods we use to get you more customers.
				</p>
			</BaseCard>
			
			<div class="grid lg:grid-cols-2 gap-6 lg:gap-8">
				{#each realValue as value}
					<BaseCard class="p-6 lg:p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 border-skyline-blue-200 hover:border-skyline-blue-400 group bg-white shadow-lg">
						<div class="space-y-6">
							<!-- Header with Visual Emphasis -->
							<div class="mb-6">
								<h4 class="font-bold text-2xl md:text-3xl text-skyline-blue-700 group-hover:text-skyline-blue-800 mb-4">
									{value.category}
								</h4>
								<div class="flex items-center justify-center space-x-4 mb-4">
									<div class="text-center">
										<div class="text-granite-gray-500 line-through text-lg font-medium">{value.boring}</div>
										<div class="text-xs text-granite-gray-400">Old Way</div>
									</div>
									<div class="text-4xl text-aspen-gold-500">→</div>
									<div class="text-center">
										<div class="text-2xl font-bold text-aspen-gold-600 bg-aspen-gold-100 px-4 py-2 rounded-lg">
											{value.real}
										</div>
										<div class="text-xs text-aspen-gold-700 font-medium">Our Way</div>
									</div>
								</div>
							</div>
							
							<!-- What We Do -->
							<div class="mb-6">
								<p class="text-granite-gray-800 font-bold mb-4 text-lg leading-relaxed">{value.how}</p>
								<div class="bg-gradient-to-r from-skyline-blue-50 to-skyline-blue-100 border-l-4 border-skyline-blue-500 p-4 rounded-r-lg">
									<p class="text-skyline-blue-900 font-medium text-base">{value.method}</p>
								</div>
							</div>
							
							<!-- Result with Visual Impact -->
							<div class="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 p-6 rounded-xl">
								<div class="flex items-center mb-2">
									<svg class="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
									</svg>
									<span class="text-green-800 font-bold text-lg">Result:</span>
								</div>
								<p class="text-green-900 font-bold text-xl leading-relaxed">{value.result}</p>
							</div>
						</div>
					</BaseCard>
				{/each}
			</div>
		</div>
		
		<!-- Beautiful Charts & Graphs -->
		<div class="mt-8 sm:mt-12 md:mt-16 max-w-7xl mx-auto">
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
				<!-- Revenue Attribution Chart -->
				<BaseCard class="p-6 bg-white shadow-xl border-2 border-green-200 hover:border-green-400 transition-all duration-300 group">
					<div class="text-center mb-4">
						<h4 class="font-bold text-green-700 text-lg mb-2">Content Performance</h4>
						<p class="text-sm text-granite-gray-600">Revenue by content type</p>
					</div>
					
					<!-- Donut Chart -->
					<div class="relative w-32 h-32 mx-auto mb-4">
						<svg class="w-full h-full transform -rotate-90" viewBox="0 0 42 42">
							<!-- Background circle -->
							<circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#e5e7eb" stroke-width="3"/>
							<!-- How-to guides: 45% -->
							<circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#10b981" stroke-width="3" 
								stroke-dasharray="45 55" stroke-dashoffset="0"/>
							<!-- Case studies: 30% -->
							<circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#3b82f6" stroke-width="3" 
								stroke-dasharray="30 70" stroke-dashoffset="-45"/>
							<!-- About content: 25% -->
							<circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#8b5cf6" stroke-width="3" 
								stroke-dasharray="25 75" stroke-dashoffset="-75"/>
						</svg>
						<div class="absolute inset-0 flex items-center justify-center">
							<div class="text-center">
								<div class="text-lg font-bold text-green-700">100%</div>
								<div class="text-xs text-granite-gray-500">Tracked</div>
							</div>
						</div>
					</div>
					
					<!-- Legend -->
					<div class="space-y-2 text-sm">
						<div class="flex items-center">
							<div class="w-3 h-3 bg-green-500 rounded mr-2"></div>
							<span class="text-granite-gray-700">How-to Guides</span>
						</div>
						<div class="flex items-center">
							<div class="w-3 h-3 bg-blue-500 rounded mr-2"></div>
							<span class="text-granite-gray-700">Case Studies</span>
						</div>
						<div class="flex items-center">
							<div class="w-3 h-3 bg-purple-500 rounded mr-2"></div>
							<span class="text-granite-gray-700">About Content</span>
						</div>
					</div>
				</BaseCard>

				<!-- Customer Journey Flow -->
				<BaseCard class="p-6 bg-white shadow-xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 group">
					<div class="text-center mb-4">
						<h4 class="font-bold text-blue-700 text-lg mb-2">Customer Journey</h4>
						<p class="text-sm text-granite-gray-600">Path to conversion</p>
					</div>
					
					<!-- Funnel Chart -->
					<div class="space-y-3">
						<div class="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center py-3 rounded-lg text-sm font-medium">
							Awareness
						</div>
						<div class="bg-gradient-to-r from-blue-400 to-blue-500 text-white text-center py-3 rounded-lg text-sm font-medium mx-2">
							Interest
						</div>
						<div class="bg-gradient-to-r from-blue-300 to-blue-400 text-white text-center py-3 rounded-lg text-sm font-medium mx-4">
							Consideration
						</div>
						<div class="bg-gradient-to-r from-green-400 to-green-500 text-white text-center py-3 rounded-lg text-sm font-medium mx-6">
							Conversion
						</div>
					</div>
					
					<div class="mt-4 text-center">
						<span class="text-green-600 font-bold text-lg">23%</span>
						<p class="text-xs text-granite-gray-600">Conversion Rate</p>
					</div>
				</BaseCard>

				<!-- Lead Quality Score -->
				<BaseCard class="p-6 bg-white shadow-xl border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 group">
					<div class="text-center mb-4">
						<h4 class="font-bold text-purple-700 text-lg mb-2">Lead Quality</h4>
						<p class="text-sm text-granite-gray-600">Behavioral scoring</p>
					</div>
					
					<!-- Gauge Chart -->
					<div class="relative w-32 h-20 mx-auto mb-4">
						<svg class="w-full h-full" viewBox="0 0 200 100">
							<!-- Background arc -->
							<path d="M 20 80 A 80 80 0 0 1 180 80" stroke="#e5e7eb" stroke-width="12" fill="none"/>
							<!-- Score arc (75%) -->
							<path d="M 20 80 A 80 80 0 0 1 140 25" stroke="#8b5cf6" stroke-width="12" fill="none" stroke-linecap="round"/>
							<!-- Pointer -->
							<circle cx="140" cy="25" r="6" fill="#8b5cf6"/>
						</svg>
						<div class="absolute bottom-0 left-1/2 transform -translate-x-1/2">
							<div class="text-center">
								<div class="text-xl font-bold text-purple-700">87</div>
								<div class="text-xs text-granite-gray-500">Score</div>
							</div>
						</div>
					</div>
					
					<div class="space-y-1 text-sm">
						<div class="flex justify-between">
							<span class="text-granite-gray-600">High Intent</span>
							<span class="text-purple-600 font-medium">76%</span>
						</div>
						<div class="flex justify-between">
							<span class="text-granite-gray-600">Qualified</span>
							<span class="text-green-600 font-medium">91%</span>
						</div>
					</div>
				</BaseCard>

				<!-- Market Position -->
				<BaseCard class="p-6 bg-white shadow-xl border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 group">
					<div class="text-center mb-4">
						<h4 class="font-bold text-orange-700 text-lg mb-2">Market Position</h4>
						<p class="text-sm text-granite-gray-600">Competitive analysis</p>
					</div>
					
					<!-- Bar Chart -->
					<div class="space-y-3">
						<div class="flex items-center">
							<span class="text-xs text-granite-gray-600 w-12">You</span>
							<div class="flex-1 bg-gray-200 rounded-full h-4 mx-2">
								<div class="bg-gradient-to-r from-orange-400 to-orange-500 h-4 rounded-full" style="width: 85%"></div>
							</div>
							<span class="text-orange-600 font-bold text-sm">Leader</span>
						</div>
						<div class="flex items-center">
							<span class="text-xs text-granite-gray-600 w-12">Comp A</span>
							<div class="flex-1 bg-gray-200 rounded-full h-4 mx-2">
								<div class="bg-gradient-to-r from-gray-400 to-gray-500 h-4 rounded-full" style="width: 60%"></div>
							</div>
							<span class="text-gray-600 font-bold text-sm">Behind</span>
						</div>
						<div class="flex items-center">
							<span class="text-xs text-granite-gray-600 w-12">Comp B</span>
							<div class="flex-1 bg-gray-200 rounded-full h-4 mx-2">
								<div class="bg-gradient-to-r from-gray-400 to-gray-500 h-4 rounded-full" style="width: 45%"></div>
							</div>
							<span class="text-gray-600 font-bold text-sm">Behind</span>
						</div>
					</div>
					
					<div class="mt-4 text-center">
						<span class="text-orange-600 font-bold">Market Leader</span>
						<p class="text-xs text-granite-gray-600">In your category</p>
					</div>
				</BaseCard>
			</div>
		</div>
		
		<!-- CTA -->
		<div class="max-w-4xl mx-auto mt-16">
			<BaseCard class="p-8 md:p-12 text-center bg-gradient-to-r from-skyline-blue-50 to-aspen-gold-50 border-2 border-skyline-blue-300 shadow-xl">
				<h3 class="font-display text-2xl md:text-3xl font-bold text-skyline-blue-700 mb-6">
					Ready to see what your business actually looks like?
				</h3>
				<p class="text-granite-gray-700 mb-8 max-w-2xl mx-auto text-lg font-medium">
					Stop guessing what's working. Get dashboards that show you exactly where your money comes from and where to invest next.
				</p>
				<a 
					href="/contact" 
					class="inline-flex items-center bg-skyline-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-skyline-blue-800 transition-colors group shadow-xl"
				>
					Show Me The Real Numbers
					<svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
					</svg>
				</a>
			</BaseCard>
		</div>
	</div>
</section>