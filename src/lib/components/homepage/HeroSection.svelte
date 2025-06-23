<script lang="ts">
	// No props needed for now - all content is static
</script>

<!-- Hero Section with Mountain Background -->
<section class="relative min-h-screen flex items-center justify-center overflow-hidden">
	<!-- Mountain Background -->
	<div class="absolute inset-0 z-0">
		<img 
			src="/images/hero-mountains.png" 
			alt="Colorado Mountains" 
			class="w-full h-full object-cover object-center"
		/>
		<!-- Gradient Overlay -->
		<div class="absolute inset-0 bg-gradient-to-b from-skyline-blue-900/80 via-skyline-blue-800/70 to-skyline-blue-700/60"></div>
		<!-- Additional overlay for text readability -->
		<div class="absolute inset-0 bg-black/20"></div>
	</div>
	
	<!-- Floating Elements -->
	<div class="absolute inset-0 z-10 overflow-hidden pointer-events-none">
		<div class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-aspen-gold-400/10 blur-3xl animate-pulse"></div>
		<div class="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-skyline-blue-300/10 blur-3xl animate-pulse delay-1000"></div>
		
		<!-- Floating Logo Icons - Hidden on mobile for performance -->
		<img 
			src="/images/logo/weknowco-icon.svg" 
			alt="" 
			class="absolute top-20 right-20 w-16 h-16 md:w-24 md:h-24 opacity-20 animate-float-slow hidden sm:block"
		/>
		<img 
			src="/images/logo/weknowco-icon.svg" 
			alt="" 
			class="absolute bottom-32 left-32 w-12 h-12 md:w-16 md:h-16 opacity-15 animate-float-delayed hidden sm:block"
		/>
		<img 
			src="/favicon.svg" 
			alt="" 
			class="absolute top-1/3 right-1/4 w-16 h-16 md:w-20 md:h-20 opacity-10 animate-float-reverse hidden sm:block"
		/>
	</div>
	
	<!-- Content -->
	<div class="relative z-20 max-w-6xl mx-auto px-6 text-center">
		<!-- Inline Logo Badge -->
		<div class="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 fade-in border border-white/20">
			<img src="/images/logo/weknowco-icon.svg" alt="" class="w-8 h-8 mr-3" />
			<span class="text-white font-semibold tracking-wide">COLORADO'S DIGITAL MARKETING PARTNER</span>
		</div>
		
		<h1 class="font-display text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6 fade-in drop-shadow-2xl leading-tight">
			Turn Colorado Dreams Into 
			<span class="text-aspen-gold-400">Mile-High</span> Brands
		</h1>
		
		<p class="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 mb-8 max-w-4xl mx-auto slide-up drop-shadow-lg font-medium leading-relaxed">
			$5,280 gets you a complete website that works. 
			<br class="hidden md:block">
			30 days. 7 pages. Zero fluff.
		</p>
		
		<div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center slide-up">
			<a 
				href="/contact"
				class="group bg-aspen-gold-400 text-granite-gray-800 px-8 py-4 sm:px-10 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-aspen-gold-500 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl hover:shadow-aspen-gold-400/50 flex items-center justify-center w-full sm:w-auto"
			>
				Start Your Climb
				<svg class="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
				</svg>
			</a>
			
			<a 
				href="/5280-site"
				class="group border-3 border-white text-white px-8 py-4 sm:px-10 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-white hover:text-skyline-blue-700 transition-all duration-300 backdrop-blur-sm bg-white/10 flex items-center justify-center w-full sm:w-auto"
			>
				See What's Included
				<svg class="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
				</svg>
			</a>
		</div>
		
		<!-- Why Us CTA -->
		<div class="mt-8 text-center slide-up delay-500">
			<a 
				href="/about"
				class="group inline-flex items-center text-white/90 hover:text-white text-base font-medium underline decoration-aspen-gold-400 decoration-2 underline-offset-4 hover:decoration-white transition-all duration-300"
			>
				Why us? Read our story here
				<svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
				</svg>
			</a>
		</div>
		
		<!-- Solo Biz Helper Teaser -->
		<div class="mt-8 sm:mt-12 max-w-2xl mx-auto text-center slide-up px-4">
			<div class="bg-red-rocks-rust/20 backdrop-blur-sm border border-red-rocks-rust/30 rounded-2xl p-4 sm:p-6">
				<div class="flex items-center justify-center mb-3">
					<img src="/favicon.svg" alt="" class="w-6 h-6 mr-2 opacity-80" />
					<span class="bg-red-rocks-rust text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
						Partnership Program
					</span>
				</div>
				<h3 class="text-white font-bold text-lg sm:text-xl mb-3">Looking for a Marketing Partner?</h3>
				<p class="text-white/80 text-sm sm:text-base mb-4">
					Revenue-share, equity, and micro-retainer partnerships for qualified Colorado founders.
				</p>
				<a 
					href="/solo-biz-helper"
					class="inline-flex items-center text-aspen-gold-400 hover:text-aspen-gold-300 font-semibold text-sm transition-colors"
				>
					Learn About Solo Biz Helper
					<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
					</svg>
				</a>
			</div>
		</div>
		
		<!-- Altitude Indicator -->
		<div class="mt-16 inline-flex items-center text-white/80 text-sm font-mono animate-float backdrop-blur-sm bg-white/10 px-6 py-3 rounded-full border border-white/20">
			<span class="w-3 h-3 bg-aspen-gold-400 rounded-full mr-3 animate-pulse shadow-lg shadow-aspen-gold-400/50"></span>
			Elevation: 5,280 ft • Inspiration: Unlimited
		</div>
	</div>
	
	<!-- Scroll Indicator -->
	<div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce z-20">
		<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
		</svg>
	</div>
</section>

<style>
	@keyframes float {
		0%, 100% { transform: translateY(0px); }
		50% { transform: translateY(-10px); }
	}
	
	@keyframes float-slow {
		0%, 100% { transform: translateY(0px) rotate(0deg); }
		50% { transform: translateY(-20px) rotate(10deg); }
	}
	
	@keyframes float-delayed {
		0%, 100% { transform: translateY(0px) rotate(0deg); }
		50% { transform: translateY(-15px) rotate(-5deg); }
	}
	
	@keyframes float-reverse {
		0%, 100% { transform: translateY(-10px) rotate(0deg); }
		50% { transform: translateY(10px) rotate(5deg); }
	}
	
	.animate-float {
		animation: float 4s ease-in-out infinite;
	}
	
	:global(.animate-float-slow) {
		animation: float-slow 8s ease-in-out infinite;
	}
	
	:global(.animate-float-delayed) {
		animation: float-delayed 6s ease-in-out 2s infinite;
	}
	
	:global(.animate-float-reverse) {
		animation: float-reverse 5s ease-in-out 1s infinite;
	}
	
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