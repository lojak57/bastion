<script lang="ts">
	import { LeadCaptureForm } from '$lib/components/forms';
	import { BaseCard, BaseButton } from '$lib/components/ui';
	import PartnershipWizard from '$lib/components/wizard/PartnershipWizard.svelte';
	
	// Engagement models
	const engagementModels = [
		{
			title: 'Revenue Share',
			percentage: '8-15%',
			description: 'We take a percentage of monthly revenue in exchange for full marketing operations.',
			benefits: [
				'No upfront costs',
				'Aligned incentives',
				'Scale with your growth',
				'Performance-based partnership'
			],
			ideal: 'Businesses with consistent revenue streams'
		},
		{
			title: 'Micro Retainer',
			amount: '$250-500',
			description: 'Small monthly fee plus revenue share for businesses just starting to generate income.',
			benefits: [
				'Low barrier to entry',
				'Hybrid model flexibility',
				'Reduced revenue share rate',
				'Immediate marketing support'
			],
			ideal: 'Early-stage businesses with some revenue'
		},
		{
			title: 'Equity Slice',
			percentage: 'Equity Offer Program',
			description: 'Equity ownership in exchange for comprehensive brand building and marketing strategy.',
			benefits: [
				'Long-term partnership',
				'Full strategic involvement',
				'No ongoing fees',
				'Shared success model'
			],
			ideal: 'High-growth potential startups'
		}
	];
	
	// Eligibility criteria
	const eligibilityCriteria = [
		{
			title: 'Full-Time Commitment',
			description: 'Founder working full-time on the business',
			icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4'
		},
		{
			title: 'Clear Revenue Path',
			description: 'Demonstrable path to revenue within 9 months',
			icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
		},
		{
			title: 'Transparent Operations',
			description: 'Open access to analytics, financials, and business metrics',
			icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
		},
		{
			title: 'Marketing Investment',
			description: 'Minimum $1k marketing budget (can be deferred)',
			icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1'
		}
	];
</script>

<svelte:head>
	<title>Solo Biz Helper | weKnowCO Partner Program</title>
	<meta name="description" content="Revenue-share, equity, and micro-retainer partnerships for Colorado entrepreneurs. We invest in your climb with skin in the game." />
	<meta property="og:title" content="Solo Biz Helper | weKnowCO Partner Program" />
	<meta property="og:description" content="Revenue-share, equity, and micro-retainer partnerships for Colorado entrepreneurs." />
</svelte:head>

<!-- Hero Section -->
<section class="relative min-h-screen flex items-center justify-center overflow-hidden">
	<!-- Mountain Background -->
	<div class="absolute inset-0 z-0">
		<img 
			src="/images/hero-mountains.png" 
			alt="Colorado Mountains" 
			class="w-full h-full object-cover object-center"
		/>
		<!-- Darker overlay for partner theme -->
		<div class="absolute inset-0 bg-gradient-to-b from-red-rocks-rust/80 via-skyline-blue-800/80 to-granite-gray-700/90"></div>
		<div class="absolute inset-0 bg-black/30"></div>
	</div>
	
	<!-- Floating Elements -->
	<div class="absolute inset-0 z-10 overflow-hidden pointer-events-none">
		<div class="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-aspen-gold-400/20 blur-3xl animate-pulse"></div>
		<div class="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-red-rocks-rust/20 blur-3xl animate-pulse delay-1000"></div>
	</div>
	
	<!-- Content -->
	<div class="relative z-20 max-w-6xl mx-auto px-6 text-center">
		<div class="inline-flex items-center bg-red-rocks-rust/20 backdrop-blur-sm border border-red-rocks-rust/30 rounded-full px-6 py-3 mb-6">
			<span class="text-aspen-gold-400 font-mono text-sm font-semibold tracking-wider">PARTNER PROGRAM</span>
		</div>
		
		<h1 class="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 fade-in drop-shadow-2xl">
			Solo Biz Helper
		</h1>
		
		<p class="text-xl md:text-2xl lg:text-3xl text-white/95 mb-8 max-w-4xl mx-auto slide-up drop-shadow-lg font-medium">
			We partner with founders to build sustainable brands.
			<br class="hidden md:block">
			Flexible partnership structures aligned with your business goals.
		</p>
		
		<div class="flex flex-col sm:flex-row gap-6 justify-center items-center slide-up">
			<a 
				href="#apply"
				class="group bg-red-rocks-rust text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-red-rocks-rust/90 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl hover:shadow-red-rocks-rust/50 flex items-center"
			>
				Apply for Partnership
				<svg class="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
				</svg>
			</a>
			
			<a 
				href="#models"
				class="group border-3 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-skyline-blue-700 transition-all duration-300 backdrop-blur-sm bg-white/10 flex items-center"
			>
				See Partnership Models
				<svg class="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
				</svg>
			</a>
		</div>
		
		<!-- Partnership Values -->
		<div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
			<div class="backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/20">
				<div class="text-2xl font-bold text-aspen-gold-400">Selective</div>
				<div class="text-white/80 text-sm">Partnership approach</div>
			</div>
			<div class="backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/20">
				<div class="text-2xl font-bold text-aspen-gold-400">Strategic</div>
				<div class="text-white/80 text-sm">Investment decisions</div>
			</div>
			<div class="backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/20">
				<div class="text-2xl font-bold text-aspen-gold-400">Sustainable</div>
				<div class="text-white/80 text-sm">Revenue-focused growth</div>
			</div>
		</div>
	</div>
</section>

<!-- Partnership Models -->
<section id="models" class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-6">
		<div class="text-center mb-16">
			<h2 class="font-display text-3xl md:text-4xl font-bold text-skyline-blue-600 mb-4">
				Choose Your Partnership Model
			</h2>
			<p class="text-xl text-granite-gray-600 max-w-3xl mx-auto">
				We offer three flexible partnership structures designed to align our success with yours.
				No one-size-fits-all approach—just the right model for your business stage.
			</p>
		</div>
		
		<div class="grid md:grid-cols-3 gap-8">
			{#each engagementModels as model, index}
				<BaseCard class="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 {index === 1 ? 'ring-2 ring-red-rocks-rust shadow-lg scale-105' : ''}">
					<div class="p-8">
						<!-- Header -->
						<div class="text-center mb-6">
							{#if index === 1}
								<div class="inline-block bg-red-rocks-rust text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
									Most Popular
								</div>
							{/if}
							<h3 class="font-display text-2xl font-bold text-skyline-blue-600 mb-2">
								{model.title}
							</h3>
							<div class="text-3xl font-bold text-red-rocks-rust mb-2">
								{model.percentage || model.amount}
							</div>
							<p class="text-granite-gray-600">
								{model.description}
							</p>
						</div>
						
						<!-- Benefits -->
						<div class="mb-6">
							<h4 class="font-semibold text-granite-gray-700 mb-3">Benefits:</h4>
							<ul class="space-y-2">
								{#each model.benefits as benefit}
									<li class="flex items-start">
										<svg class="w-5 h-5 text-aspen-gold-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
											<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
										</svg>
										<span class="text-granite-gray-600 text-sm">{benefit}</span>
									</li>
								{/each}
							</ul>
						</div>
						
						<!-- Ideal For -->
						<div class="bg-gray-50 rounded-lg p-4">
							<h4 class="font-semibold text-granite-gray-700 mb-2">Ideal for:</h4>
							<p class="text-granite-gray-600 text-sm">{model.ideal}</p>
						</div>
					</div>
				</BaseCard>
			{/each}
		</div>
	</div>
</section>

<!-- Eligibility Requirements -->
<section class="py-20 bg-gray-50">
	<div class="max-w-7xl mx-auto px-6">
		<div class="text-center mb-16">
			<h2 class="font-display text-3xl md:text-4xl font-bold text-skyline-blue-600 mb-4">
				Partnership Eligibility
			</h2>
			<p class="text-xl text-granite-gray-600 max-w-3xl mx-auto">
				We're selective about our partnerships. Here's what we look for in potential Solo Biz Helper clients.
			</p>
		</div>
		
		<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
			{#each eligibilityCriteria as criteria}
				<BaseCard class="text-center p-6 hover:shadow-lg transition-all duration-300 group hover:-translate-y-2">
					<div class="w-16 h-16 bg-red-rocks-rust/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
						<svg class="w-8 h-8 text-red-rocks-rust" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={criteria.icon}></path>
						</svg>
					</div>
					<h3 class="font-display text-lg font-semibold text-skyline-blue-600 mb-2">
						{criteria.title}
					</h3>
					<p class="text-granite-gray-600 text-sm">
						{criteria.description}
					</p>
				</BaseCard>
			{/each}
		</div>
		
		<!-- Additional Requirements -->
		<div class="mt-16 bg-white rounded-2xl p-8 shadow-lg">
			<h3 class="font-display text-2xl font-bold text-skyline-blue-600 mb-6 text-center">
				Additional Requirements
			</h3>
			<div class="grid md:grid-cols-2 gap-8">
				<div>
					<h4 class="font-semibold text-granite-gray-700 mb-3">Business Criteria:</h4>
					<ul class="space-y-2 text-granite-gray-600">
						<li class="flex items-start">
							<span class="text-aspen-gold-400 mr-2">•</span>
							Colorado-based or Colorado-focused business
						</li>
						<li class="flex items-start">
							<span class="text-aspen-gold-400 mr-2">•</span>
							Demonstrable market traction or validation
						</li>
						<li class="flex items-start">
							<span class="text-aspen-gold-400 mr-2">•</span>
							Clear competitive advantage or unique value proposition
						</li>
						<li class="flex items-start">
							<span class="text-aspen-gold-400 mr-2">•</span>
							Scalable business model
						</li>
					</ul>
				</div>
				<div>
					<h4 class="font-semibold text-granite-gray-700 mb-3">Partnership Expectations:</h4>
					<ul class="space-y-2 text-granite-gray-600">
						<li class="flex items-start">
							<span class="text-aspen-gold-400 mr-2">•</span>
							Monthly strategy calls and progress reviews
						</li>
						<li class="flex items-start">
							<span class="text-aspen-gold-400 mr-2">•</span>
							Transparent reporting and data sharing
						</li>
						<li class="flex items-start">
							<span class="text-aspen-gold-400 mr-2">•</span>
							Collaborative approach to brand development
						</li>
						<li class="flex items-start">
							<span class="text-aspen-gold-400 mr-2">•</span>
							Minimum 12-month partnership commitment
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Application Process -->
<section class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-6">
		<div class="text-center mb-16">
			<h2 class="font-display text-3xl md:text-4xl font-bold text-skyline-blue-600 mb-4">
				Partnership Process
			</h2>
			<p class="text-xl text-granite-gray-600 max-w-3xl mx-auto">
				From application to partnership—here's how we evaluate and onboard Solo Biz Helper clients.
			</p>
		</div>
		
		<div class="grid md:grid-cols-4 gap-8">
			{#each ['Application', 'Discovery', 'Due Diligence', 'Partnership'] as step, index}
				<div class="text-center">
					<div class="w-16 h-16 bg-gradient-to-br from-skyline-blue-600 to-red-rocks-rust text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
						{index + 1}
					</div>
					<h3 class="font-display text-lg font-semibold text-skyline-blue-600 mb-2">
						{step}
					</h3>
					<p class="text-granite-gray-600 text-sm">
						{#if index === 0}
							Submit detailed business information and partnership interest
						{:else if index === 1}
							90-minute deep-dive call to understand your vision and goals
						{:else if index === 2}
							Financial review, market analysis, and partnership structure design
						{:else}
							Finalize agreements and begin your mile-high journey together
						{/if}
					</p>
				</div>
				{#if index < 3}
					<div class="hidden md:flex items-center justify-center">
						<svg class="w-8 h-8 text-granite-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
						</svg>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</section>

<!-- Application Form -->
<section id="apply" class="py-20 bg-gradient-to-br from-skyline-blue-600 to-red-rocks-rust text-white">
	<div class="max-w-4xl mx-auto px-6">
		<div class="text-center mb-12">
			<h2 class="font-display text-3xl md:text-4xl font-bold mb-4">
				Ready to Partner with weKnowCO?
			</h2>
			<p class="text-xl text-white/90">
				Tell us about your business and let's explore how we can invest in your success.
			</p>
		</div>
		
		<PartnershipWizard />
		
		<!-- Contact Alternative -->
		<div class="text-center mt-8">
			<p class="text-white/80 mb-4">
				Prefer to discuss your partnership opportunity directly?
			</p>
			<a 
				href="mailto:partnerships@weknowco.com" 
				class="inline-flex items-center text-aspen-gold-400 hover:text-aspen-gold-300 font-medium"
			>
				partnerships@weknowco.com
				<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
				</svg>
			</a>
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