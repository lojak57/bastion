<script lang="ts">
	// Timeline of 20 years of experience
	import { BaseCard } from '$lib/components/ui';
	
	const timelineEvents = [
		{
			era: 'Early Days',
			title: 'Sold furniture. Managed logistics.',
			description: 'Learning the fundamentals of business operations',
			icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
		},
		{
			era: 'Growth Phase',
			title: 'Built tech. Advised startups.',
			description: 'Diving deep into innovation and emerging markets',
			icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
		},
		{
			era: 'Corporate Era',
			title: 'Sat in Fortune 500 meetings.',
			description: 'Enterprise-level strategy and execution',
			icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-1 4h1m4-4h1m0-4h1'
		},
		{
			era: 'Life Lessons',
			title: 'Raised kids too early. Burned out.',
			description: 'Learning balance and what really matters',
			icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
		},
		{
			era: 'Reinvention',
			title: 'Reinvented ourselves.',
			description: 'Finding our true calling in Colorado marketing',
			icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
		}
	];
</script>

<!-- Experience Timeline Section -->
<section class="py-20 bg-gradient-to-br from-snowfield-white via-skyline-blue-25 to-aspen-gold-25 relative overflow-hidden">
	<!-- Background elements -->
	<div class="absolute inset-0 overflow-hidden">
		<div class="absolute top-20 left-20 w-64 h-64 bg-skyline-blue-100/30 rounded-full blur-3xl animate-pulse"></div>
		<div class="absolute bottom-20 right-20 w-48 h-48 bg-aspen-gold-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
		
		<!-- Timeline visual elements -->
		<div class="absolute top-1/4 right-1/3 animate-float">
			<svg class="w-8 h-8 text-skyline-blue-200" fill="currentColor" viewBox="0 0 24 24">
				<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
			</svg>
		</div>
		<div class="absolute bottom-1/3 left-1/4 animate-float delay-1000">
			<div class="w-6 h-6 bg-aspen-gold-200 rounded-full"></div>
		</div>
	</div>
	
	<div class="max-w-7xl mx-auto px-6 relative z-10">
		<div class="text-center mb-16">
			<h2 class="font-display text-3xl md:text-5xl font-bold text-skyline-blue-600 mb-6">
				20 Years of <span class="text-aspen-gold-500">Conversations</span>
			</h2>
			<p class="text-xl text-granite-gray-600 max-w-4xl mx-auto">
				This company isn't theory. It's not vibe-based branding from a New York loft or algorithmic "strategy" pulled from a dashboard. weKnowCO is the result of two decades of real experience.
			</p>
		</div>
		
		<div class="grid lg:grid-cols-2 gap-16 items-start mb-20">
			<!-- Left: Photo Placeholder -->
			<div class="relative lg:sticky lg:top-20">
				<!-- PHOTO PLACEHOLDER: Candid work moments/behind-the-scenes -->
				<div class="aspect-[4/3] bg-gradient-to-br from-skyline-blue-50 to-aspen-gold-50 rounded-2xl border-2 border-skyline-blue-200/50 flex items-center justify-center group hover:scale-105 transition-transform duration-500 shadow-xl">
					<div class="text-center text-granite-gray-500">
						<svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
						</svg>
						<p class="text-sm font-medium">Experience Montage</p>
						<p class="text-xs">Candid work moments across industries</p>
					</div>
				</div>
				
				<!-- Experience badges -->
				<div class="absolute -top-4 -right-4 bg-skyline-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
					20+ Years
				</div>
				<div class="absolute -bottom-4 -left-4 bg-aspen-gold-400 text-granite-gray-800 px-3 py-1 rounded-full text-sm font-bold">
					Every Industry
				</div>
			</div>
			
			<!-- Right: Timeline -->
			<div class="space-y-12">
				{#each timelineEvents as event, index}
					<div class="relative">
						<!-- Timeline line -->
						{#if index < timelineEvents.length - 1}
							<div class="absolute left-8 top-16 w-px h-20 bg-gradient-to-b from-skyline-blue-300 to-aspen-gold-300"></div>
						{/if}
						
						<div class="flex items-start space-x-6">
							<!-- Icon -->
							<div class="w-16 h-16 bg-gradient-to-br from-skyline-blue-600 to-aspen-gold-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
								<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={event.icon}></path>
								</svg>
							</div>
							
							<!-- Content -->
							<BaseCard class="flex-1 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-skyline-blue-200/50">
								<div class="space-y-3">
									<div class="text-sm font-semibold text-aspen-gold-600 uppercase tracking-wide">
										{event.era}
									</div>
									<h3 class="text-xl font-bold text-skyline-blue-600">
										{event.title}
									</h3>
									<p class="text-granite-gray-600">
										{event.description}
									</p>
								</div>
							</BaseCard>
						</div>
					</div>
				{/each}
			</div>
		</div>
		
		<!-- Campfire Quote -->
		<div class="text-center bg-gradient-to-r from-granite-gray-800 to-skyline-blue-800 text-white p-12 rounded-2xl relative overflow-hidden">
			<div class="absolute inset-0 bg-gradient-to-br from-aspen-gold-400/10 to-red-rocks-rust/10"></div>
			<div class="relative z-10">
				<blockquote class="text-2xl md:text-3xl font-light leading-relaxed mb-6">
					"Stood by a campfire in the foothills with the same crew we met in middle school, wondering what kind of world we'd help build next."
				</blockquote>
				<div class="w-24 h-px bg-gradient-to-r from-transparent via-aspen-gold-400 to-transparent mx-auto"></div>
				<p class="text-aspen-gold-400 font-medium mt-4">And that's why we started this.</p>
			</div>
		</div>
	</div>
</section>