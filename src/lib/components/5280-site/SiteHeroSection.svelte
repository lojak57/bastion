<script lang="ts">
	import { ValueProp } from '$lib/components/ui';
	
	// Value propositions
	const valueProps = [
		{ number: '30', label: 'Days to Launch', description: 'From kickoff to go-live' },
		{ number: '7', label: 'Page Maximum', description: 'Strategic, focused content' },
		{ number: '1', label: 'Fair Price', description: 'No surprises, no add-ons' },
		{ number: '∞', label: 'Peace of Mind', description: 'Professional quality guaranteed' }
	];
</script>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-skyline-blue-600 via-skyline-blue-700 to-granite-gray-800 text-white min-h-screen flex items-center">
	<!-- Mountain Background Image -->
	<div class="absolute inset-0 z-0">
		<img 
			src="/images/5280-hero-bg.png" 
			alt="Colorado Mountain Silhouette" 
			class="w-full h-full object-cover opacity-80"
		/>
		<div class="absolute inset-0 bg-gradient-to-br from-skyline-blue-600/70 via-skyline-blue-700/60 to-granite-gray-800/80"></div>
		<div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
	</div>
	
	<!-- Animated Background Elements -->
	<div class="absolute inset-0 z-10 overflow-hidden pointer-events-none">
		<div class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-aspen-gold-400/10 blur-3xl animate-pulse"></div>
		<div class="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-skyline-blue-300/10 blur-3xl animate-pulse delay-1000"></div>
		<div class="absolute top-10 right-20 w-64 h-64 rounded-full bg-red-rocks-rust/10 blur-2xl animate-float"></div>
	</div>
	
	<div class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
		<div class="inline-flex items-center bg-aspen-gold-400/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 fade-in">
			<img src="/favicon.svg" alt="" class="w-6 h-6 mr-2" />
			<span class="text-aspen-gold-400 font-mono text-sm font-semibold tracking-wider">COLORADO SPECIAL</span>
		</div>
		
		<h1 class="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 fade-in drop-shadow-2xl relative">
			<span class="relative">
				$5,280 Website
				<img 
					src="/images/logo/weknowco-icon.svg" 
					alt="" 
					class="absolute -top-8 -right-12 w-16 h-16 opacity-60 animate-float hidden lg:block"
				/>
			</span>
		</h1>
		
		<p class="text-xl md:text-2xl lg:text-3xl mb-8 max-w-3xl mx-auto text-white/95 slide-up drop-shadow-lg font-medium">
			A complete, professional website for your Colorado business.
			<br class="hidden md:block">
			30 days. Up to 7 pages. One fair price.
		</p>
		
		<!-- Value Props -->
		<div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto mb-12 slide-up">
			{#each valueProps as prop, i}
				<div class="stagger-{i}">
					<ValueProp {...prop} />
				</div>
			{/each}
		</div>
		
		<div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center slide-up px-4">
			<a 
				href="#get-started"
				class="group bg-aspen-gold-400 text-granite-gray-800 px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-aspen-gold-500 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl hover:shadow-aspen-gold-400/50 flex items-center w-full sm:w-auto justify-center"
			>
				Start Your $5,280 Site
				<svg class="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
				</svg>
			</a>
			
			<a 
				href="#timeline"
				class="group border-2 sm:border-3 border-white text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-white hover:text-skyline-blue-700 transition-all duration-300 backdrop-blur-sm bg-white/10 flex items-center w-full sm:w-auto justify-center"
			>
				See 30-Day Timeline
				<svg class="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
				</svg>
			</a>
		</div>
		
		<!-- Altitude Indicator -->
		<div class="mt-16 inline-flex items-center text-white/80 text-sm font-mono animate-float backdrop-blur-sm bg-white/10 px-6 py-3 rounded-full border border-white/20">
			<span class="w-3 h-3 bg-aspen-gold-400 rounded-full mr-3 animate-pulse shadow-lg shadow-aspen-gold-400/50"></span>
			Elevation: 5,280ft
		</div>
	</div>
</section>

<style>
	:global(.animate-float) {
		animation: float 6s ease-in-out infinite;
	}
	
	@keyframes float {
		0%, 100% { transform: translateY(0px); }
		50% { transform: translateY(-10px); }
	}
	
	:global(.fade-in) {
		animation: fadeIn 1s ease-out;
	}
	
	:global(.slide-up) {
		animation: slideUp 1s ease-out 0.3s both;
	}
	
	:global(.stagger-0) { animation-delay: 0ms; }
	:global(.stagger-1) { animation-delay: 150ms; }
	:global(.stagger-2) { animation-delay: 300ms; }
	:global(.stagger-3) { animation-delay: 450ms; }
	
	@keyframes fadeIn {
		from { opacity: 0; transform: translateY(30px); }
		to { opacity: 1; transform: translateY(0); }
	}
	
	@keyframes slideUp {
		from { opacity: 0; transform: translateY(40px); }
		to { opacity: 1; transform: translateY(0); }
	}
</style>