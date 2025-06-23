<script lang="ts">
	// Colorado journey and deep roots
	import { BaseCard } from '$lib/components/ui';
	
	const coloradoExperiences = [
		{
			location: 'Mountains',
			experience: 'Worked in resort towns, learned hospitality',
			icon: 'M5 3l3.057-3 11.943 12-4 9-7-8z'
		},
		{
			location: 'Plains',
			experience: 'Warehouse logistics, supply chain mastery',
			icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z'
		},
		{
			location: 'Boardrooms',
			experience: 'Fortune 500 meetings, enterprise negotiations',
			icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1'
		},
		{
			location: 'Oil Fields',
			experience: 'Energy sector, blue-collar backbone',
			icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'
		}
	];
</script>

<!-- Colorado Journey Section -->
<section class="py-20 bg-gradient-to-br from-granite-gray-800 via-skyline-blue-700 to-skyline-blue-600 text-white relative overflow-hidden">
	<!-- Background Colorado silhouette -->
	<div class="absolute inset-0 overflow-hidden">
		<div class="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-granite-gray-900/30 to-transparent"></div>
		<div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-skyline-blue-800/30 to-transparent"></div>
		
		<!-- Floating Colorado elements -->
		<div class="absolute top-20 right-20 w-72 h-72 bg-aspen-gold-400/10 rounded-full blur-3xl animate-pulse"></div>
		<div class="absolute bottom-20 left-20 w-64 h-64 bg-red-rocks-rust/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
		
		<!-- State outline suggestion -->
		<div class="absolute top-1/4 left-1/6 animate-float">
			<svg class="w-12 h-12 text-aspen-gold-400/20" fill="currentColor" viewBox="0 0 24 24">
				<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
			</svg>
		</div>
	</div>
	
	<div class="max-w-7xl mx-auto px-6 relative z-10">
		<div class="text-center mb-16">
			<h2 class="font-display text-3xl md:text-5xl font-bold mb-6">
				We were <span class="text-aspen-gold-400">raised here</span>
			</h2>
			<p class="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
				Not just in geography—but in grit. In the rhythm of this state. We've worked in the mountains and on the plains, inside warehouses, executive boardrooms, oilfields, and sales floors.
			</p>
		</div>
		
		<div class="grid lg:grid-cols-2 gap-16 items-center mb-20">
			<!-- Left: Colorado Visual -->
			<div class="relative">
				<!-- Colorado Mountain Visual -->
				<div class="aspect-[4/3] relative rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-500">
					<img 
						src="/images/hero-mountains.png" 
						alt="Colorado Mountains - Our Home" 
						class="w-full h-full object-cover"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-skyline-blue-800/70 via-transparent to-transparent"></div>
					
					<!-- Logo overlay -->
					<div class="absolute bottom-6 left-6 right-6 text-center">
						<div class="flex items-center justify-center space-x-3 mb-3">
							<img src="/images/logo/weknowco-icon.svg" alt="" class="w-8 h-8 filter brightness-0 invert" />
							<p class="text-white font-bold text-lg">Our Territory</p>
							<img src="/favicon.svg" alt="" class="w-8 h-8 filter brightness-0 invert" />
						</div>
						<p class="text-white/90 text-sm">From plains to peaks, we know it all</p>
					</div>
				</div>
				
				<!-- Colorado badge -->
				<div class="absolute -top-6 -right-6 bg-aspen-gold-400 text-granite-gray-800 px-4 py-2 rounded-full font-bold text-sm shadow-lg">
					Born & Raised
				</div>
			</div>
			
			<!-- Right: Experience Grid -->
			<div class="grid grid-cols-2 gap-6">
				{#each coloradoExperiences as exp}
					<BaseCard class="p-6 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:-translate-y-2">
						<div class="text-center space-y-4">
							<div class="w-12 h-12 bg-aspen-gold-400/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
								<svg class="w-6 h-6 text-aspen-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={exp.icon}></path>
								</svg>
							</div>
							<h3 class="font-semibold text-white">{exp.location}</h3>
							<p class="text-white/80 text-sm">{exp.experience}</p>
						</div>
					</BaseCard>
				{/each}
			</div>
		</div>
		
		<!-- Quote Section -->
		<div class="text-center">
			<blockquote class="text-2xl md:text-3xl font-light text-white/90 max-w-4xl mx-auto leading-relaxed">
				"We've served the people who built this state and we are the generation raised by them. We know the old-school locals, the millennial natives, and the new wave of fresh transplants."
			</blockquote>
			<div class="mt-8">
				<div class="w-24 h-px bg-gradient-to-r from-transparent via-aspen-gold-400 to-transparent mx-auto"></div>
				<p class="text-aspen-gold-400 font-medium mt-4">Not because we studied them—we are them.</p>
			</div>
		</div>
	</div>
</section>