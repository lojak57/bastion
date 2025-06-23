<script lang="ts">
	// Philosophy and approach
	import { BaseCard } from '$lib/components/ui';
	
	const philosophyPoints = [
		{
			title: 'Best marketing doesn\'t feel like marketing',
			description: 'It feels like being seen. Being understood.',
			icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
		},
		{
			title: 'Stories people want to hear',
			description: 'Because it already sounds like theirs.',
			icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
		},
		{
			title: 'We know how to listen',
			description: 'And translate your brand into something that speaks directly to the people who matter.',
			icon: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z'
		}
	];
	
	const coloradoElements = [
		'Brighton to Boulder',
		'Oil rig to boardroom',
		'Adobe decks to dad jokes',
		'Blue collar to venture capital',
		'Viral reels to real relationships'
	];
</script>

<!-- Philosophy Section -->
<section class="py-20 bg-gradient-to-br from-skyline-blue-600 via-skyline-blue-700 to-granite-gray-800 text-white relative overflow-hidden">
	<!-- Background elements -->
	<div class="absolute inset-0 overflow-hidden">
		<div class="absolute top-20 left-20 w-96 h-96 bg-aspen-gold-400/10 rounded-full blur-3xl animate-pulse"></div>
		<div class="absolute bottom-20 right-20 w-80 h-80 bg-red-rocks-rust/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
		<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-snowfield-white/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
		
		<!-- Floating philosophy icons -->
		<div class="absolute top-1/4 right-1/4 animate-float">
			<svg class="w-10 h-10 text-aspen-gold-400/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
			</svg>
		</div>
		<div class="absolute bottom-1/4 left-1/6 animate-float delay-1000">
			<svg class="w-8 h-8 text-snowfield-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
			</svg>
		</div>
	</div>
	
	<div class="max-w-7xl mx-auto px-6 relative z-10">
		<div class="grid lg:grid-cols-2 gap-16 items-center mb-20">
			<!-- Left: Philosophy Content -->
			<div class="space-y-8">
				<h2 class="font-display text-3xl md:text-5xl font-bold leading-tight">
					We believe the best marketing doesn't feel like <span class="text-aspen-gold-400">marketing</span>
				</h2>
				
				<div class="space-y-6">
					{#each philosophyPoints as point}
						<BaseCard class="p-6 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:-translate-y-1">
							<div class="flex items-start space-x-4">
								<div class="w-12 h-12 bg-aspen-gold-400/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
									<svg class="w-6 h-6 text-aspen-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={point.icon}></path>
									</svg>
								</div>
								<div class="space-y-2">
									<h3 class="font-semibold text-white">{point.title}</h3>
									<p class="text-white/80 text-sm">{point.description}</p>
								</div>
							</div>
						</BaseCard>
					{/each}
				</div>
			</div>
			
			<!-- Right: Strategy Visual -->
			<div class="relative">
				<!-- Strategy Brand Visual -->
				<div class="aspect-[4/5] relative rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-500">
					<img 
						src="/images/hero-mountains.png" 
						alt="Colorado Strategy Sessions" 
						class="w-full h-full object-cover"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-skyline-blue-900/80 via-skyline-blue-700/40 to-transparent"></div>
					
					<!-- Brand overlay -->
					<div class="absolute bottom-8 left-8 right-8 text-center">
						<img 
							src="/images/logo/weknowco-full-logo.png" 
							alt="weKnowCO" 
							class="h-10 mx-auto mb-4 filter brightness-0 invert"
						/>
						<p class="text-white/90 text-sm font-medium">Strategic Thinking, Colorado Style</p>
					</div>
				</div>
				
				<!-- Strategy badge -->
				<div class="absolute -top-4 -right-4 bg-aspen-gold-400 text-granite-gray-800 px-4 py-2 rounded-full font-bold text-sm shadow-lg">
					Our Method
				</div>
			</div>
		</div>
		
		<!-- Colorado Expertise Grid -->
		<div class="text-center mb-12">
			<h3 class="font-display text-2xl md:text-3xl font-bold mb-8">
				And we know <span class="text-aspen-gold-400">Colorado</span>
			</h3>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
			{#each coloradoElements as element}
				<div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
					<p class="text-white font-medium text-sm">{element}</p>
				</div>
			{/each}
		</div>
		
		<!-- Final Statement -->
		<div class="text-center">
			<blockquote class="text-2xl md:text-3xl font-light text-white/90 mb-6">
				"This is home. And we know how to speak its language."
			</blockquote>
			<div class="w-24 h-px bg-gradient-to-r from-transparent via-aspen-gold-400 to-transparent mx-auto"></div>
		</div>
	</div>
</section>