<script lang="ts">
	import { BaseCard } from '$lib/components/ui';
</script>

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