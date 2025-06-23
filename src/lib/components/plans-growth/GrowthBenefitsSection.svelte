<script lang="ts">
	// What happens when you grow
	const growthBenefits = [
		{
			icon: 'M13 10V3L4 14h7v7l9-11h-7z',
			title: 'Predictable Revenue',
			description: 'Move from feast-or-famine to steady, growing income streams that you can count on.',
			chartType: 'line',
			progression: [20, 35, 55, 75, 90]
		},
		{
			icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1',
			title: 'Premium Positioning',
			description: 'Stop competing on price. Become the obvious choice for quality-conscious customers.',
			chartType: 'bar',
			progression: [30, 50, 70, 85]
		},
		{
			icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
			title: 'Time Freedom',
			description: 'Automated systems handle routine tasks while you focus on what you do best.',
			chartType: 'circle',
			percentage: 75
		},
		{
			icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
			title: 'Market Authority',
			description: 'Become the recognized expert in your field with content and positioning that proves it.',
			chartType: 'stepped',
			steps: ['Invisible', 'Visible', 'Credible', 'Authority']
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
	
	<div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
		<div class="text-center mb-8 sm:mb-12 md:mb-16">
			<h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
				What Happens When You Grow
			</h2>
			<p class="text-lg sm:text-xl text-white/90">
				The compound effects of consistent, strategic marketing
			</p>
		</div>
		
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
			{#each growthBenefits as benefit}
				<div class="text-center group transform hover:-translate-y-2 transition-all duration-500 bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20">
					<div class="w-16 h-16 bg-gradient-to-br from-aspen-gold-400/30 to-aspen-gold-400/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-aspen-gold-400/30">
						<svg class="w-8 h-8 text-aspen-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={benefit.icon}></path>
						</svg>
					</div>
					
					<!-- Visual Chart/Graph for each benefit -->
					<div class="mb-4 h-24 flex items-end justify-center">
						{#if benefit.chartType === 'line'}
							<!-- Line Chart for Revenue -->
							<svg class="w-full h-full" viewBox="0 0 100 40">
								<polyline 
									points="10,35 25,25 40,18 60,12 80,8" 
									fill="none" 
									stroke="#F59E0B" 
									stroke-width="2"
									class="drop-shadow-lg"
								/>
								{#each benefit.progression as point, i}
									<circle cx={10 + i * 17.5} cy={40 - point * 0.8} r="2" fill="#F59E0B" class="animate-pulse"/>
								{/each}
							</svg>
						{:else if benefit.chartType === 'bar'}
							<!-- Bar Chart for Positioning -->
							<div class="flex items-end space-x-2 h-full w-full justify-center">
								{#each benefit.progression as height, i}
									<div 
										class="bg-gradient-to-t from-aspen-gold-600 to-aspen-gold-400 rounded-t-lg transition-all duration-1000 delay-{i * 200}"
										style="height: {height}%; width: 16px;"
									></div>
								{/each}
							</div>
						{:else if benefit.chartType === 'circle'}
							<!-- Circular Progress for Time -->
							<svg class="w-20 h-20" viewBox="0 0 100 100">
								<circle cx="50" cy="50" r="40" fill="none" stroke="#374151" stroke-width="8"/>
								<circle 
									cx="50" cy="50" r="40" 
									fill="none" 
									stroke="#F59E0B" 
									stroke-width="8" 
									stroke-dasharray="251.2" 
									stroke-dashoffset={251.2 - (benefit.percentage * 251.2) / 100}
									transform="rotate(-90 50 50)"
									class="transition-all duration-2000"
								/>
								<text x="50" y="55" text-anchor="middle" class="text-xs fill-current text-aspen-gold-400 font-bold">{benefit.percentage}%</text>
							</svg>
						{:else if benefit.chartType === 'stepped'}
							<!-- Step Chart for Authority -->
							<div class="flex items-end space-x-1 h-full w-full justify-center">
								{#each benefit.steps as step, i}
									<div class="flex flex-col items-center">
										<div 
											class="bg-gradient-to-t from-aspen-gold-600 to-aspen-gold-400 rounded-t-lg transition-all duration-1000 delay-{i * 300}"
											style="height: {(i + 1) * 25}%; width: 12px;"
										></div>
										<span class="text-xs mt-1 text-aspen-gold-200 font-medium">{step.slice(0, 3)}</span>
									</div>
								{/each}
							</div>
						{/if}
					</div>
					
					<h3 class="font-semibold text-base sm:text-lg mb-3 group-hover:text-aspen-gold-100 transition-colors">{benefit.title}</h3>
					<p class="text-white/80 text-xs sm:text-sm group-hover:text-white/90 transition-colors leading-relaxed">{benefit.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>