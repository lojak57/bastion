<script lang="ts">
	import { BaseCard } from '$lib/components/ui';
	
	// What we focus on improving
	const growthAreas = [
		{
			focus: 'More',
			label: 'Lead Generation',
			description: 'Content and systems that bring qualified prospects'
		},
		{
			focus: 'Better',
			label: 'Conversion Rate',
			description: 'Optimize every step from visitor to customer'
		},
		{
			focus: 'Faster',
			label: 'Time Savings',
			description: 'Automation handles routine marketing tasks'
		},
		{
			focus: 'Stronger',
			label: 'Client Relationships',
			description: 'Build partnerships that grow year after year'
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
	
	<div class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-24">
		<div class="grid lg:grid-cols-2 gap-12 items-center">
			<!-- Left Content -->
			<div class="backdrop-blur-sm bg-white/10 p-6 sm:p-8 rounded-2xl border border-white/20 shadow-2xl">
				<div class="inline-flex items-center bg-aspen-gold-400/40 backdrop-blur-sm px-6 py-3 rounded-full mb-6 fade-in border border-aspen-gold-400/60">
					<span class="text-aspen-gold-200 font-mono text-sm font-bold tracking-wider">GROWTH JOURNEY</span>
				</div>
				
				<h1 class="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 fade-in drop-shadow-2xl leading-tight">
					From Invisible to 
					<span class="text-aspen-gold-300">Inevitable</span>
				</h1>
				
				<p class="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white slide-up drop-shadow-lg font-medium leading-relaxed">
					How our plans transform Colorado businesses from struggling for attention to leading their markets.
				</p>
				
				<div class="flex flex-col sm:flex-row gap-3 sm:gap-4 slide-up">
					<a 
						href="#journey"
						class="group bg-aspen-gold-400 text-granite-gray-900 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-aspen-gold-300 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl hover:shadow-aspen-gold-400/50 flex items-center justify-center border-2 border-aspen-gold-300 w-full sm:w-auto"
					>
						See Your Journey
						<svg class="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
						</svg>
					</a>
					
					<a 
						href="#choose-plans"
						class="group border-3 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-white hover:text-skyline-blue-800 transition-all duration-300 backdrop-blur-sm bg-white/20 flex items-center justify-center shadow-xl w-full sm:w-auto"
					>
						View Plans
						<svg class="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
						</svg>
					</a>
				</div>
				
				<!-- Why Us CTA -->
				<div class="mt-6 text-center slide-up delay-500">
					<a 
						href="/about"
						class="group inline-flex items-center text-white/90 hover:text-white text-sm font-medium underline decoration-aspen-gold-400 decoration-2 underline-offset-4 hover:decoration-white transition-all duration-300"
					>
						Why us? Read our story here
						<svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
						</svg>
					</a>
				</div>
			</div>
			
			<!-- Right Content - Growth Areas -->
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mt-8 lg:mt-0">
				{#each growthAreas as area}
					<BaseCard class="p-3 sm:p-4 md:p-6 text-center backdrop-blur-sm bg-white/20 border-2 border-white/30 hover:bg-white/25 transition-all duration-300 shadow-xl">
						<div class="text-2xl sm:text-3xl md:text-4xl font-bold text-aspen-gold-300 mb-2">{area.focus}</div>
						<div class="text-white font-bold mb-1 text-sm sm:text-base">{area.label}</div>
						<div class="text-xs sm:text-sm text-white font-medium">{area.description}</div>
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