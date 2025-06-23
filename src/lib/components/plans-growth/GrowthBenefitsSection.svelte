<script lang="ts">
	// What happens when you grow
	const growthBenefits = [
		{
			icon: 'M13 10V3L4 14h7v7l9-11h-7z',
			title: 'Predictable Revenue',
			description: 'Move from feast-or-famine to steady, growing income streams that you can count on.'
		},
		{
			icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1',
			title: 'Premium Positioning',
			description: 'Stop competing on price. Become the obvious choice for quality-conscious customers.'
		},
		{
			icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
			title: 'Time Freedom',
			description: 'Automated systems handle routine tasks while you focus on what you do best.'
		},
		{
			icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
			title: 'Market Authority',
			description: 'Become the recognized expert in your field with content and positioning that proves it.'
		}
	];
</script>

<!-- Growth Benefits -->
<section class="py-20 bg-gradient-to-br from-skyline-blue-600 via-skyline-blue-700 to-red-rocks-rust text-white relative overflow-hidden">
	<!-- Background decorative elements -->
	<div class="absolute inset-0 overflow-hidden">
		<div class="absolute top-10 left-10 w-72 h-72 bg-aspen-gold-400/10 rounded-full blur-3xl animate-pulse"></div>
		<div class="absolute bottom-10 right-10 w-64 h-64 bg-snowfield-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
		<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-rocks-rust/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
		
		<!-- Floating benefit icons -->
		<div class="absolute top-1/4 right-1/3 animate-float">
			<svg class="w-10 h-10 text-aspen-gold-400/20" fill="currentColor" viewBox="0 0 24 24">
				<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
			</svg>
		</div>
		<div class="absolute bottom-1/4 left-1/4 animate-float delay-1000">
			<svg class="w-8 h-8 text-snowfield-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
			</svg>
		</div>
		<div class="absolute top-1/3 left-1/5 animate-float delay-1500">
			<svg class="w-6 h-6 text-aspen-gold-400/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
			</svg>
		</div>
	</div>
	
	<div class="max-w-7xl mx-auto px-6 relative z-10">
		<div class="text-center mb-16">
			<h2 class="font-display text-3xl md:text-4xl font-bold mb-4">
				What Happens When You Grow
			</h2>
			<p class="text-xl text-white/90">
				The compound effects of consistent, strategic marketing
			</p>
		</div>
		
		<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
			{#each growthBenefits as benefit}
				<div class="text-center group transform hover:-translate-y-2 transition-all duration-500">
					<div class="w-16 h-16 bg-gradient-to-br from-aspen-gold-400/30 to-aspen-gold-400/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-aspen-gold-400/30">
						<svg class="w-8 h-8 text-aspen-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={benefit.icon}></path>
						</svg>
					</div>
					<h3 class="font-semibold text-lg mb-3 group-hover:text-aspen-gold-100 transition-colors">{benefit.title}</h3>
					<p class="text-white/80 text-sm group-hover:text-white/90 transition-colors">{benefit.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>