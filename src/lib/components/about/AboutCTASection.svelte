<script lang="ts">
	import { LeadCaptureWizard } from '$lib/components/wizard';
</script>

<!-- About CTA Section -->
<section class="py-32 bg-gradient-to-br from-aspen-gold-400 via-aspen-gold-500 to-red-rocks-rust relative overflow-hidden">
	<!-- Background elements -->
	<div class="absolute inset-0 overflow-hidden">
		<div class="absolute top-20 right-20 w-96 h-96 bg-skyline-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
		<div class="absolute bottom-20 left-20 w-80 h-80 bg-granite-gray-800/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
		<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-snowfield-white/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
		
		<!-- Floating action elements -->
		<div class="absolute top-1/4 left-1/6 animate-float">
			<svg class="w-12 h-12 text-granite-gray-800/20" fill="currentColor" viewBox="0 0 24 24">
				<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
			</svg>
		</div>
		<div class="absolute bottom-1/4 right-1/5 animate-float delay-1000">
			<svg class="w-10 h-10 text-skyline-blue-600/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
			</svg>
		</div>
	</div>
	
	<div class="max-w-7xl mx-auto px-6 relative z-10">
		<div class="grid lg:grid-cols-2 gap-16 items-center">
			<!-- Left: Final Message -->
			<div class="space-y-8 text-granite-gray-800">
				<div class="space-y-6">
					<h2 class="font-display text-4xl md:text-6xl font-bold leading-tight">
						Let's build something they'll actually <span class="text-skyline-blue-600">care about</span>
					</h2>
					
					<div class="space-y-4 text-lg">
						<p class="font-medium">
							Ready to work with people who actually understand your market?
						</p>
						<p>
							We're not just another marketing agency. We're Colorado natives who've walked in your shoes, served your customers, and built businesses in this state.
						</p>
					</div>
				</div>
				
				<!-- Photo Placeholder -->
				<div class="relative">
					<!-- PHOTO PLACEHOLDER: Confident, forward-looking shot -->
					<div class="aspect-[16/10] bg-gradient-to-br from-skyline-blue-100 to-granite-gray-100 rounded-2xl border-2 border-skyline-blue-200/50 flex items-center justify-center group hover:scale-105 transition-transform duration-500 shadow-xl">
						<div class="text-center text-granite-gray-500">
							<svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z"></path>
							</svg>
							<p class="text-sm font-medium">Forward-looking Shot</p>
							<p class="text-xs">Confident pose with Colorado backdrop</p>
						</div>
					</div>
					
					<!-- Action badge -->
					<div class="absolute -bottom-4 -right-4 bg-skyline-blue-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
						Let's Go!
					</div>
				</div>
			</div>
			
			<!-- Right: Lead Capture -->
			<div class="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 p-8">
				<div class="mb-6">
					<h3 class="font-display text-2xl font-bold text-skyline-blue-600 mb-2">
						Start Your Colorado Story
					</h3>
					<p class="text-granite-gray-600">
						Tell us about your business and let's see how we can help you grow.
					</p>
				</div>
				
				<LeadCaptureWizard 
					variant="about"
					className="about-wizard"
				/>
			</div>
		</div>
	</div>
</section>