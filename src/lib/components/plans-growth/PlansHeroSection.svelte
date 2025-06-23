<script lang="ts">
	import { BaseCard } from '$lib/components/ui';
	
	// Impact metrics
	const impactMetrics = [
		{
			metric: '3x',
			label: 'Lead Generation',
			description: 'Average increase in qualified leads within 6 months'
		},
		{
			metric: '40%',
			label: 'Conversion Rate',
			description: 'Improvement in website visitor-to-customer conversion'
		},
		{
			metric: '60%',
			label: 'Time Savings',
			description: 'Less time spent on marketing tasks through automation'
		},
		{
			metric: '85%',
			label: 'Client Retention',
			description: 'Of clients continue growing with us after year one'
		}
	];
</script>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-skyline-blue-700 via-skyline-blue-800 to-granite-gray-900 text-white min-h-screen flex items-center">
	<!-- Background Elements -->
	<div class="absolute inset-0 z-10 overflow-hidden pointer-events-none">
		<div class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-aspen-gold-400/10 blur-3xl animate-pulse"></div>
		<div class="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-skyline-blue-300/10 blur-3xl animate-pulse delay-1000"></div>
	</div>
	
	<div class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
		<div class="grid lg:grid-cols-2 gap-12 items-center">
			<!-- Left Content -->
			<div class="backdrop-blur-sm bg-white/10 p-8 rounded-2xl border border-white/20 shadow-2xl">
				<div class="inline-flex items-center bg-aspen-gold-400/40 backdrop-blur-sm px-6 py-3 rounded-full mb-6 fade-in border border-aspen-gold-400/60">
					<span class="text-aspen-gold-200 font-mono text-sm font-bold tracking-wider">GROWTH JOURNEY</span>
				</div>
				
				<h1 class="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 fade-in drop-shadow-2xl leading-tight">
					From Invisible to 
					<span class="text-aspen-gold-300">Inevitable</span>
				</h1>
				
				<p class="text-xl md:text-2xl mb-8 text-white slide-up drop-shadow-lg font-medium leading-relaxed">
					See how our plans transform Colorado businesses from struggling for attention to leading their markets.
				</p>
				
				<div class="flex flex-col sm:flex-row gap-4 slide-up">
					<a 
						href="#journey"
						class="group bg-aspen-gold-400 text-granite-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-aspen-gold-300 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl hover:shadow-aspen-gold-400/50 flex items-center justify-center border-2 border-aspen-gold-300"
					>
						See Your Journey
						<svg class="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
						</svg>
					</a>
					
					<a 
						href="#choose-plans"
						class="group border-3 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-skyline-blue-800 transition-all duration-300 backdrop-blur-sm bg-white/20 flex items-center justify-center shadow-xl"
					>
						View Plans
						<svg class="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
						</svg>
					</a>
				</div>
			</div>
			
			<!-- Right Content - Impact Metrics -->
			<div class="grid grid-cols-2 gap-4 md:gap-6">
				{#each impactMetrics as metric}
					<BaseCard class="p-4 md:p-6 text-center backdrop-blur-sm bg-white/20 border-2 border-white/30 hover:bg-white/25 transition-all duration-300 shadow-xl">
						<div class="text-3xl md:text-4xl font-bold text-aspen-gold-300 mb-2">{metric.metric}</div>
						<div class="text-white font-bold mb-1">{metric.label}</div>
						<div class="text-sm text-white font-medium">{metric.description}</div>
					</BaseCard>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.fade-in {
		animation: fadeIn 1s ease-out;
	}
	
	.slide-up {
		animation: slideUp 1s ease-out 0.3s both;
	}
	
	@keyframes fadeIn {
		from { opacity: 0; transform: translateY(30px); }
		to { opacity: 1; transform: translateY(0); }
	}
	
	@keyframes slideUp {
		from { opacity: 0; transform: translateY(40px); }
		to { opacity: 1; transform: translateY(0); }
	}
</style>