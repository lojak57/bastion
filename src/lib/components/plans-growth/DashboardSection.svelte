<script lang="ts">
	import { BaseCard, ContentBox } from '$lib/components/ui';
	
	// Real dashboard metrics that actually matter
	const dashboardFeatures = [
		{
			category: "Revenue Attribution",
			insight: "Which channels actually drive paying customers",
			example: "$47K revenue traced to 3 specific blog posts",
			metric: "ROI: 1,247%",
			boring: "Traffic sources",
			real: "Revenue sources"
		},
		{
			category: "Customer Journey Mapping", 
			insight: "Exact touchpoints before conversion",
			example: "87% of $5K+ clients read these 2 pages first",
			metric: "Conversion: 23%",
			boring: "Page views",
			real: "Buying signals"
		},
		{
			category: "Predictive Lead Scoring",
			insight: "Which leads become customers (before they buy)",
			example: "LinkedIn + demo request = 67% close rate",
			metric: "Accuracy: 91%",
			boring: "Lead count",
			real: "Revenue probability"
		},
		{
			category: "Competitive Intelligence",
			insight: "What your competitors are doing (and missing)",
			example: "Competitor X lost 40% traffic after site redesign",
			metric: "Opportunity: $120K",
			boring: "Market share",
			real: "Market gaps"
		}
	];
	
	const realMetrics = [
		{
			label: "Revenue Per Visitor",
			value: "$47.32",
			trend: "+234%",
			context: "Not just traffic"
		},
		{
			label: "Customer Acquisition Cost",
			value: "$127",
			trend: "-67%",
			context: "Getting cheaper"
		},
		{
			label: "Lifetime Value",
			value: "$8,940",
			trend: "+89%",
			context: "Getting better"
		},
		{
			label: "Time to Revenue",
			value: "14 days",
			trend: "-56%",
			context: "Getting faster"
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
			<BaseCard class="p-8 md:p-12 text-center bg-white shadow-2xl border-2 border-granite-gray-200">
				<div class="inline-flex items-center bg-granite-gray-100 px-4 py-2 rounded-full mb-6">
					<svg class="w-5 h-5 mr-2 text-granite-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
					</svg>
					<span class="text-granite-gray-700 font-semibold text-sm uppercase tracking-wider">Analytics</span>
				</div>
				<div class="mb-6">
					<p class="text-granite-gray-600 text-lg italic mb-2">*sigh*</p>
					<h2 class="font-display text-3xl md:text-5xl font-bold text-skyline-blue-700 mb-4">
						Yes...we do the fancy dashboard thing too
					</h2>
				</div>
				<p class="text-lg md:text-xl text-granite-gray-700 mb-8 font-medium">
					Look, everyone wants "analytics" and "dashboards." Fine. But while they're showing you pretty charts about page views, we're tracking what actually matters.
				</p>
				<div class="bg-aspen-gold-100 border-2 border-aspen-gold-400 p-6 rounded-xl shadow-lg">
					<p class="text-aspen-gold-800 font-bold text-base">
						Spoiler: It's not how many people visited your blog. It's how many became customers.
					</p>
				</div>
			</BaseCard>
		</div>
		
		<!-- Real Metrics Grid -->
		<div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
			{#each realMetrics as metric}
				<BaseCard class="p-4 md:p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-2 border-skyline-blue-200 hover:border-skyline-blue-400">
					<div class="space-y-3">
						<ContentBox variant="primary" size="sm">
							<div class="text-2xl md:text-3xl font-bold text-skyline-blue-700">{metric.value}</div>
						</ContentBox>
						
						<ContentBox variant="neutral" size="sm">
							<div class="text-sm font-bold text-granite-gray-800">{metric.label}</div>
						</ContentBox>
						
						<ContentBox variant="accent" size="sm">
							<div class="flex items-center justify-center space-x-2">
								<span class="text-green-700 font-bold text-sm">{metric.trend}</span>
								<svg class="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
								</svg>
							</div>
						</ContentBox>
						
						<ContentBox variant="neutral" size="sm">
							<p class="text-xs text-granite-gray-600 font-medium">{metric.context}</p>
						</ContentBox>
					</div>
				</BaseCard>
			{/each}
		</div>
		
		<!-- Dashboard Features -->
		<div class="max-w-6xl mx-auto">
			<BaseCard class="p-8 text-center bg-white shadow-xl border-2 border-skyline-blue-300 mb-12">
				<h3 class="font-display text-2xl md:text-4xl font-bold text-skyline-blue-700 mb-6">
					What we track (while others count clicks)
				</h3>
				<p class="text-granite-gray-700 max-w-2xl mx-auto text-lg font-medium">
					These aren't vanity metrics. Every data point connects directly to your bank account.
				</p>
			</BaseCard>
			
			<div class="grid lg:grid-cols-2 gap-6 lg:gap-8">
				{#each dashboardFeatures as feature}
					<BaseCard class="p-6 lg:p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 border-skyline-blue-200 hover:border-skyline-blue-400 group bg-white shadow-lg">
						<div class="space-y-6">
							<!-- Header -->
							<div class="flex items-center justify-between mb-4">
								<h4 class="font-bold text-xl md:text-2xl text-skyline-blue-700 group-hover:text-skyline-blue-800">
									{feature.category}
								</h4>
								<div class="text-right">
									<div class="text-sm text-granite-gray-600 line-through font-medium">{feature.boring}</div>
									<div class="text-sm font-bold text-aspen-gold-700">{feature.real}</div>
								</div>
							</div>
							
							<!-- Insight -->
							<div class="mb-4">
								<p class="text-granite-gray-800 font-bold mb-3 text-base">{feature.insight}</p>
								<div class="bg-skyline-blue-100 border-2 border-skyline-blue-400 p-4 rounded-lg">
									<p class="text-skyline-blue-800 text-sm font-bold">"{feature.example}"</p>
								</div>
							</div>
							
							<!-- Metric -->
							<div class="flex items-center justify-between pt-4 border-t-2 border-granite-gray-300">
								<span class="text-granite-gray-700 text-sm font-bold">Key Metric:</span>
								<span class="text-green-700 font-bold text-lg">{feature.metric}</span>
							</div>
						</div>
					</BaseCard>
				{/each}
			</div>
		</div>
		
		<!-- Mock Dashboard Preview -->
		<div class="mt-20 max-w-6xl mx-auto">
			<BaseCard class="p-8 text-center bg-white shadow-xl border-2 border-granite-gray-300 mb-12">
				<h3 class="font-display text-2xl md:text-3xl font-bold text-skyline-blue-700 mb-4">
					Fine. Here's what the actual dashboard looks like.
				</h3>
				<p class="text-granite-gray-700 font-medium">
					(It's not as pretty as those other agencies', but it actually works)
				</p>
			</BaseCard>
			
			<!-- Dashboard Mockup -->
			<div class="bg-white p-4 rounded-2xl shadow-2xl border-2 border-granite-gray-200">
				<BaseCard class="p-8 bg-granite-gray-900 border-2 border-skyline-blue-200/50 relative overflow-hidden">
				<!-- Terminal-style header -->
				<div class="flex items-center space-x-2 mb-6 pb-4 border-b border-granite-gray-700">
					<div class="w-3 h-3 bg-red-500 rounded-full"></div>
					<div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
					<div class="w-3 h-3 bg-green-500 rounded-full"></div>
					<span class="text-granite-gray-400 text-sm ml-4 font-mono">weknowco-analytics.dashboard</span>
				</div>
				
				<!-- Dashboard content -->
				<div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
					<!-- Revenue Stream -->
					<div class="space-y-4">
						<h4 class="text-aspen-gold-400 font-semibold">Revenue Attribution</h4>
						<div class="space-y-2 text-sm font-mono">
							<div class="flex justify-between">
								<span class="text-granite-gray-300">Blog Post #47:</span>
								<span class="text-green-400">$23,400</span>
							</div>
							<div class="flex justify-between">
								<span class="text-granite-gray-300">LinkedIn Campaign:</span>
								<span class="text-green-400">$18,900</span>
							</div>
							<div class="flex justify-between">
								<span class="text-granite-gray-300">Email Sequence #3:</span>
								<span class="text-green-400">$14,200</span>
							</div>
							<div class="pt-2 border-t border-granite-gray-700">
								<div class="flex justify-between">
									<span class="text-white font-semibold">Total This Month:</span>
									<span class="text-aspen-gold-400 font-bold">$56,500</span>
								</div>
							</div>
						</div>
					</div>
					
					<!-- Customer Journey -->
					<div class="space-y-4">
						<h4 class="text-aspen-gold-400 font-semibold">Customer Journey</h4>
						<div class="space-y-2 text-sm">
							<div class="bg-granite-gray-800 p-3 rounded">
								<div class="text-white font-medium">High-Value Path:</div>
								<div class="text-granite-gray-300 text-xs">Homepage → About → Plans → Contact</div>
								<div class="text-green-400 text-xs">Conversion: 34%</div>
							</div>
							<div class="bg-granite-gray-800 p-3 rounded">
								<div class="text-white font-medium">Quick Convert:</div>
								<div class="text-granite-gray-300 text-xs">5280-Site → Contact</div>
								<div class="text-green-400 text-xs">Conversion: 67%</div>
							</div>
						</div>
					</div>
					
					<!-- Predictions -->
					<div class="space-y-4">
						<h4 class="text-aspen-gold-400 font-semibold">This Week's Predictions</h4>
						<div class="space-y-2 text-sm">
							<div class="flex items-center space-x-2">
								<div class="w-2 h-2 bg-green-500 rounded-full"></div>
								<span class="text-granite-gray-300">3 hot leads likely to close</span>
							</div>
							<div class="flex items-center space-x-2">
								<div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
								<span class="text-granite-gray-300">Blog traffic spike expected Thu</span>
							</div>
							<div class="flex items-center space-x-2">
								<div class="w-2 h-2 bg-blue-500 rounded-full"></div>
								<span class="text-granite-gray-300">Email campaign ready to send</span>
							</div>
							<div class="pt-2 border-t border-granite-gray-700">
								<div class="text-aspen-gold-400 font-semibold">Projected Revenue: $28K</div>
							</div>
						</div>
					</div>
				</div>
				
				<!-- Terminal cursor -->
				<div class="mt-6 pt-4 border-t border-granite-gray-700">
					<span class="text-granite-gray-400 font-mono text-sm">$ </span>
					<span class="text-white font-mono text-sm">generating_real_results.exe</span>
					<span class="text-aspen-gold-400 animate-pulse">|</span>
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