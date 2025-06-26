<script lang="ts">
	import { BaseButton } from '../ui';
	
		export let title: string = "Build Your Digital Bastion";
	export let subtitle: string = "$5,280 gets you a complete website that works. 30 days. 7 pages. Zero fluff.";
	export let ctaText: string = "Start Your Climb";
	export let ctaHref: string = "/contact";
</script>

<section class="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
	<!-- Background Elements -->
	<div class="absolute inset-0 opacity-10">
		<div class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-aspen-gold-400 blur-3xl"></div>
		<div class="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-skyline-blue-300 blur-3xl"></div>
	</div>
	
	<!-- Content -->
	<div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
		<h1 class="wkc-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 fade-in">
			{title}
		</h1>
		
		<p class="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto slide-up">
			{subtitle}
		</p>
		
		<div class="flex flex-col sm:flex-row gap-4 justify-center items-center slide-up">
			<BaseButton 
				variant="secondary" 
				size="lg" 
				href={ctaHref}
				class="bg-aspen-gold-400 text-granite-gray-700 hover:bg-aspen-gold-500 transform hover:scale-105 transition-all duration-300 shadow-lg"
			>
				{ctaText}
			</BaseButton>
			
			<BaseButton 
				variant="outline" 
				size="lg" 
				href="/5280-site"
				class="border-white text-white hover:bg-white hover:text-skyline-blue-600 transition-all duration-300"
			>
				See What's Included
			</BaseButton>
		</div>
		
		<!-- Altitude Indicator -->
		<div class="mt-12 inline-flex items-center text-white/70 text-sm font-mono animate-float">
			<span class="w-2 h-2 bg-aspen-gold-400 rounded-full mr-2 animate-pulse"></span>
			Elevation: 5,280 ft • Inspiration: Unlimited
		</div>
	</div>
	
	<!-- Scroll Indicator -->
	<div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
		<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
		</svg>
	</div>
</section>

<style>
	@keyframes float {
		0%, 100% { transform: translateY(0px); }
		50% { transform: translateY(-10px); }
	}
	
	.animate-float {
		animation: float 3s ease-in-out infinite;
	}
</style>