<script lang="ts">
	import { BaseCard } from '$lib/components/ui';
	
	const testimonials = [
		{
			quote: "Working with weKnowCO transformed our business. They didn't just build us a website - they helped us understand our customers and grow revenue by 300% in the first year.",
			author: "Sarah Mitchell",
			title: "Owner, Rocky Mountain Adventures",
			location: "Boulder, CO",
			result: "300% revenue growth"
		},
		{
			quote: "Finally, a marketing team that speaks our language. They understand Colorado businesses because they ARE Colorado business. No fancy jargon, just real results.",
			author: "Mike Torres",
			title: "CEO, Denver Craft Solutions", 
			location: "Denver, CO",
			result: "2x lead generation"
		},
		{
			quote: "The $5,280 website package was exactly what we needed. Fixed price, no surprises, and delivered exactly on time. Our new site converts 5x better than the old one.",
			author: "Jessica Chen",
			title: "Founder, Colorado Wellness Co",
			location: "Fort Collins, CO", 
			result: "5x conversion rate"
		}
	];
</script>

<!-- Testimonials Section -->
<section class="py-16 md:py-20 bg-gradient-to-br from-skyline-blue-50 to-aspen-gold-50 relative overflow-hidden">
	<!-- Background elements -->
	<div class="absolute inset-0 overflow-hidden">
		<div class="absolute top-20 right-20 w-64 h-64 bg-aspen-gold-100/30 rounded-full blur-3xl"></div>
		<div class="absolute bottom-20 left-20 w-48 h-48 bg-skyline-blue-100/30 rounded-full blur-3xl"></div>
	</div>
	
	<div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
		<!-- Header -->
		<div class="text-center mb-12 md:mb-16">
			<div class="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-lg">
				<svg class="w-5 h-5 mr-2 text-aspen-gold-600" fill="currentColor" viewBox="0 0 24 24">
					<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
				</svg>
				<span class="text-granite-gray-700 font-semibold text-sm uppercase tracking-wider">Client Success</span>
			</div>
			<h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-skyline-blue-700 mb-4">
				What Colorado Businesses Say
			</h2>
			<p class="text-granite-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
				Real results from real Colorado businesses. No fake reviews, no inflated numbers - just honest feedback from our clients.
			</p>
		</div>
		
		<!-- Testimonials Grid -->
		<div class="grid md:grid-cols-3 gap-6 lg:gap-8">
			{#each testimonials as testimonial}
				<BaseCard class="p-6 lg:p-8 bg-white/90 backdrop-blur-sm shadow-xl border-2 border-white/50 hover:border-skyline-blue-300 transition-all duration-300 hover:-translate-y-2 group">
					<div class="space-y-6">
						<!-- Quote -->
						<div class="relative">
							<svg class="w-8 h-8 text-aspen-gold-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
								<path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z"/>
							</svg>
							<blockquote class="text-granite-gray-700 font-medium text-lg leading-relaxed">
								"{testimonial.quote}"
							</blockquote>
						</div>
						
						<!-- Result Highlight -->
						<div class="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 p-4 rounded-lg">
							<div class="flex items-center">
								<svg class="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
								</svg>
								<span class="text-green-800 font-bold text-base">{testimonial.result}</span>
							</div>
						</div>
						
						<!-- Author -->
						<div class="border-t border-granite-gray-200 pt-6">
							<div class="flex items-center">
								<div class="w-12 h-12 bg-gradient-to-br from-skyline-blue-500 to-aspen-gold-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
									{testimonial.author.split(' ').map(n => n[0]).join('')}
								</div>
								<div>
									<div class="font-semibold text-granite-gray-700">{testimonial.author}</div>
									<div class="text-granite-gray-600 text-sm">{testimonial.title}</div>
									<div class="text-granite-gray-500 text-sm flex items-center">
										<svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
											<path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"/>
										</svg>
										{testimonial.location}
									</div>
								</div>
							</div>
						</div>
					</div>
				</BaseCard>
			{/each}
		</div>
		
		<!-- Trust Indicators -->
		<div class="mt-12 md:mt-16">
			<BaseCard class="p-8 bg-white/90 backdrop-blur-sm shadow-xl border-2 border-skyline-blue-200">
				<div class="text-center">
					<h3 class="font-display text-2xl font-bold text-skyline-blue-700 mb-6">
						Trusted by Colorado Businesses Since 2018
					</h3>
					<div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
						<div class="text-center">
							<div class="text-3xl font-bold text-aspen-gold-600 mb-2">50+</div>
							<div class="text-granite-gray-600 text-sm">Colorado Businesses Served</div>
						</div>
						<div class="text-center">
							<div class="text-3xl font-bold text-skyline-blue-600 mb-2">$2M+</div>
							<div class="text-granite-gray-600 text-sm">Revenue Generated for Clients</div>
						</div>
						<div class="text-center">
							<div class="text-3xl font-bold text-green-600 mb-2">4.9★</div>
							<div class="text-granite-gray-600 text-sm">Average Client Rating</div>
						</div>
						<div class="text-center">
							<div class="text-3xl font-bold text-red-rocks-rust mb-2">100%</div>
							<div class="text-granite-gray-600 text-sm">Client Retention Rate</div>
						</div>
					</div>
				</div>
			</BaseCard>
		</div>
	</div>
</section>