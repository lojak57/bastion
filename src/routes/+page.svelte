<script lang="ts">
	import { Hero, PricingCard } from '$lib/components/marketing';
	import { BaseCard } from '$lib/components/ui';
	
	// Plan data
	const plans = [
		{
			title: 'Trailhead',
			price: '$750',
			description: 'Perfect for getting started with consistent content and basic optimization.',
			features: [
				'4 geo-researched blog posts',
				'Quarterly strategy call',
				'Search tune-ups',
				'Schema markup optimization',
				'Basic analytics reporting'
			],
			ctaText: 'Start the Trail',
			ctaHref: '/contact?plan=trailhead'
		},
		{
			title: 'Summit',
			price: '$1,800',
			description: 'Comprehensive marketing with ads, video content, and continuous optimization.',
			features: [
				'Everything in Trailhead',
				'Google/Meta ads management',
				'Monthly brand video',
				'Email drip campaigns',
				'Answer engine optimization',
				'Monthly performance review'
			],
			popular: true,
			ctaText: 'Reach the Summit',
			ctaHref: '/contact?plan=summit'
		},
		{
			title: 'Peak Season',
			price: '$3,500',
			description: 'Full-scale marketing operation with testing, influencers, and premium content.',
			features: [
				'Everything in Summit',
				'Bi-weekly landing page tests',
				'Influencer micro-campaigns',
				'Quarterly brand films',
				'Advanced prompt libraries',
				'Priority support'
			],
			ctaText: 'Claim the Peak',
			ctaHref: '/contact?plan=peak'
		}
	];
</script>

<svelte:head>
	<title>weKnowCO | Turn Colorado Dreams Into Mile-High Brands</title>
	<meta name="description" content="$5,280 gets you a complete website that works. 30 days. 7 pages. Zero fluff. Colorado's premier marketing partner for businesses that punch above altitude." />
	<meta property="og:title" content="weKnowCO | Turn Colorado Dreams Into Mile-High Brands" />
	<meta property="og:description" content="$5,280 gets you a complete website that works. 30 days. 7 pages. Zero fluff." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://weknowco.com" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

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
	</div>
	
	<!-- Content -->
	<div class="relative z-20 max-w-6xl mx-auto px-6 text-center">
		<h1 class="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 fade-in drop-shadow-2xl">
			Turn Colorado Dreams Into 
			<span class="text-aspen-gold-400">Mile-High</span> Brands
		</h1>
		
		<p class="text-xl md:text-2xl lg:text-3xl text-white/95 mb-8 max-w-4xl mx-auto slide-up drop-shadow-lg font-medium">
			$5,280 gets you a complete website that works. 
			<br class="hidden md:block">
			30 days. 7 pages. Zero fluff.
		</p>
		
		<div class="flex flex-col sm:flex-row gap-6 justify-center items-center slide-up">
			<a 
				href="/contact"
				class="group bg-aspen-gold-400 text-granite-gray-800 px-10 py-5 rounded-xl font-bold text-lg hover:bg-aspen-gold-500 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl hover:shadow-aspen-gold-400/50 flex items-center"
			>
				Start Your Climb
				<svg class="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
				</svg>
			</a>
			
			<a 
				href="/5280-site"
				class="group border-3 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-skyline-blue-700 transition-all duration-300 backdrop-blur-sm bg-white/10 flex items-center"
			>
				See What's Included
				<svg class="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
				</svg>
			</a>
		</div>
		
		<!-- Solo Biz Helper Teaser -->
		<div class="mt-12 max-w-2xl mx-auto text-center slide-up px-4">
			<div class="bg-red-rocks-rust/20 backdrop-blur-sm border border-red-rocks-rust/30 rounded-2xl p-4 sm:p-6">
				<div class="flex items-center justify-center mb-3">
					<span class="bg-red-rocks-rust text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
						Partnership Program
					</span>
				</div>
				<h3 class="text-white font-bold text-xl mb-3">Looking for a Marketing Partner?</h3>
				<p class="text-white/80 text-sm mb-4">
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

<!-- Why $5,280 Section -->
<section class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-6">
		<div class="text-center mb-16">
			<h2 class="font-display text-3xl md:text-4xl font-bold text-skyline-blue-600 mb-4">
				Why $5,280? Because That's Our Altitude.
			</h2>
			<p class="text-xl text-granite-gray-600 max-w-3xl mx-auto">
				No hidden fees. No scope creep. No Silicon Valley pricing. 
				Just honest work at Colorado's elevation—where the air is thin but the results are thick.
			</p>
		</div>
		
		<div class="grid md:grid-cols-3 gap-8">
			<BaseCard class="text-center p-8 hover:shadow-lg transition-all duration-300 group hover:-translate-y-2">
				<div class="w-16 h-16 bg-aspen-gold-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
					<svg class="w-8 h-8 text-aspen-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
					</svg>
				</div>
				<h3 class="font-display text-xl font-semibold text-skyline-blue-600 mb-2">
					Transparent Pricing
				</h3>
				<p class="text-granite-gray-600">
					One price. One timeline. One guarantee. 
					No surprises at the summit.
				</p>
			</BaseCard>
			
			<BaseCard class="text-center p-8 hover:shadow-lg transition-all duration-300 group hover:-translate-y-2">
				<div class="w-16 h-16 bg-skyline-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
					<svg class="w-8 h-8 text-skyline-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
					</svg>
				</div>
				<h3 class="font-display text-xl font-semibold text-skyline-blue-600 mb-2">
					Colorado Focused
				</h3>
				<p class="text-granite-gray-600">
					We know the Front Range, the Western Slope, 
					and everything in between.
				</p>
			</BaseCard>
			
			<BaseCard class="text-center p-8 hover:shadow-lg transition-all duration-300 group hover:-translate-y-2">
				<div class="w-16 h-16 bg-red-rocks-rust/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
					<svg class="w-8 h-8 text-red-rocks-rust" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
					</svg>
				</div>
				<h3 class="font-display text-xl font-semibold text-skyline-blue-600 mb-2">
					Results Over Noise
				</h3>
				<p class="text-granite-gray-600">
					Built to stay findable even as search evolves. 
					No buzzwords, just outcomes.
				</p>
			</BaseCard>
		</div>
	</div>
</section>

<!-- Plans Snapshot -->
<section class="py-20 bg-gray-50">
	<div class="max-w-7xl mx-auto px-6">
		<div class="text-center mb-16">
			<h2 class="font-display text-3xl md:text-4xl font-bold text-skyline-blue-600 mb-4">
				Choose Your Altitude
			</h2>
			<p class="text-xl text-granite-gray-600 max-w-3xl mx-auto">
				Start with the $5,280 site, then choose how high you want to climb. 
				Simple monthly plans—no long-term handcuffs.
			</p>
		</div>
		
		<div class="grid md:grid-cols-3 gap-8">
			{#each plans as plan}
				<PricingCard {...plan} />
			{/each}
		</div>
		
		<div class="text-center mt-12">
			<p class="text-granite-gray-600 mb-6">
				Not sure which plan fits? Let's talk about your goals.
			</p>
			<a 
				href="/contact" 
				class="inline-flex items-center text-skyline-blue-600 hover:text-skyline-blue-700 font-medium group"
			>
				Schedule a Discovery Call
				<svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
				</svg>
			</a>
		</div>
	</div>
</section>

<!-- Founder Story Preview -->
<section class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-6">
		<div class="grid lg:grid-cols-2 gap-12 items-center">
			<div>
				<h2 class="font-display text-3xl md:text-4xl font-bold text-skyline-blue-600 mb-6">
					Born on Opposite Ends of Highway 119
				</h2>
				<p class="text-lg text-granite-gray-600 mb-6">
					Mitch & Trent grew up on opposite ends of Colorado 119 and rode career switchbacks 
					through retail, oil & gas, software, and non-profit ops—sometimes mopping floors, 
					sometimes running P&Ls.
				</p>
				<p class="text-lg text-granite-gray-600 mb-8">
					The common thread? Coaching people to outgrow us. 
					<strong class="text-skyline-blue-600">weKnowCO</strong> scales that joy statewide.
				</p>
				<a 
					href="/about" 
					class="inline-flex items-center px-6 py-3 border-2 border-skyline-blue-600 text-skyline-blue-600 rounded-lg hover:bg-skyline-blue-600 hover:text-white transition-all duration-300 font-semibold group"
				>
					Our Story
					<svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
					</svg>
				</a>
			</div>
			<div class="relative">
				<!-- Placeholder for founder photo -->
				<div class="aspect-[4/3] bg-gradient-to-br from-skyline-blue-100 to-aspen-gold-100 rounded-2xl flex items-center justify-center">
					<div class="text-center text-granite-gray-500">
						<svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
						</svg>
						<p class="text-sm">Founder Photo Coming Soon</p>
						<p class="text-xs text-granite-gray-400">Golden Gate Canyon Shoot</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Solo Biz Helper Teaser -->
<section class="py-20 bg-gradient-to-br from-red-rocks-rust to-skyline-blue-700 text-white relative overflow-hidden">
	<!-- Background Elements -->
	<div class="absolute inset-0 opacity-20">
		<div class="absolute top-10 right-10 w-40 h-40 bg-aspen-gold-400/30 rounded-full blur-2xl animate-pulse"></div>
		<div class="absolute bottom-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-xl animate-pulse delay-1000"></div>
		<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-rocks-rust/20 rounded-full blur-3xl"></div>
	</div>
	
	<div class="max-w-7xl mx-auto px-6 text-center relative z-10">
		<div class="inline-flex items-center bg-red-rocks-rust/30 backdrop-blur-sm border border-red-rocks-rust/40 rounded-full px-6 py-2 mb-6">
			<span class="text-aspen-gold-400 font-mono text-sm font-semibold tracking-wider">PARTNER PROGRAM</span>
		</div>
		
		<h2 class="font-display text-3xl md:text-5xl font-bold mb-6">
			Solo Biz Helper
		</h2>
		<p class="text-xl md:text-2xl text-white/95 mb-8 max-w-4xl mx-auto">
			Dedicated founders with viable business models deserve strategic marketing partners. 
			<br class="hidden md:block">
			Let's explore partnership structures that align our success with yours.
		</p>
		
		<!-- Partnership Values -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-10">
			<div class="backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/20">
				<div class="text-2xl font-bold text-aspen-gold-400">Selective</div>
				<div class="text-white/80 text-sm">Partnership approach</div>
			</div>
			<div class="backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/20">
				<div class="text-2xl font-bold text-aspen-gold-400">Strategic</div>
				<div class="text-white/80 text-sm">Investment decisions</div>
			</div>
			<div class="backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/20">
				<div class="text-2xl font-bold text-aspen-gold-400">Collaborative</div>
				<div class="text-white/80 text-sm">Growth methodology</div>
			</div>
		</div>
		
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a 
				href="/solo-biz-helper" 
				class="group inline-flex items-center justify-center px-8 py-4 bg-aspen-gold-400 text-granite-gray-800 rounded-lg hover:bg-aspen-gold-500 transition-all duration-300 font-bold shadow-xl hover:shadow-aspen-gold-400/50 transform hover:scale-105"
			>
				Learn More About Partnerships
				<svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
				</svg>
			</a>
			<a 
				href="/contact?interest=solo-biz" 
				class="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-skyline-blue-600 transition-all duration-300 font-bold backdrop-blur-sm bg-white/10"
			>
				Apply Now
			</a>
		</div>
	</div>
</section>

<!-- Final CTA -->
<section class="py-20 bg-gradient-to-r from-skyline-blue-600 to-skyline-blue-700 text-white relative overflow-hidden">
	<!-- Background Elements -->
	<div class="absolute inset-0 opacity-20">
		<div class="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
		<div class="absolute bottom-10 right-10 w-40 h-40 bg-aspen-gold-400/20 rounded-full blur-2xl"></div>
		<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-skyline-blue-400/10 rounded-full blur-3xl"></div>
	</div>
	
	<div class="max-w-4xl mx-auto px-6 text-center relative z-10">
		<h2 class="font-display text-3xl md:text-4xl font-bold mb-6">
			Ready to Start Your Climb?
		</h2>
		<p class="text-xl mb-8 text-white/90">
			$5,280. 30 days. Zero fluff. Let's turn your Colorado dream into a mile-high brand.
		</p>
		<a 
			href="/contact" 
			class="group inline-flex items-center justify-center px-10 py-5 bg-aspen-gold-400 text-granite-gray-800 rounded-xl hover:bg-aspen-gold-500 transition-all duration-300 font-bold text-lg shadow-2xl hover:shadow-aspen-gold-400/50 transform hover:scale-105"
		>
			Start Your Project
			<svg class="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
			</svg>
		</a>
	</div>
</section>

<style>
	@keyframes float {
		0%, 100% { transform: translateY(0px); }
		50% { transform: translateY(-10px); }
	}
	
	.animate-float {
		animation: float 4s ease-in-out infinite;
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