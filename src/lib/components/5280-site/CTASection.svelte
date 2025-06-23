<script lang="ts">
	import { Button } from '$lib/components/ui';
</script>

<!-- Final CTA -->
<section class="py-20 bg-gradient-to-br from-skyline-blue-600 via-skyline-blue-700 to-skyline-blue-800 text-white relative overflow-hidden">
	<!-- Background decoration -->
	<div class="absolute top-0 left-0 w-full h-full opacity-10">
		<div class="absolute top-10 left-10 w-20 h-20 bg-aspen-gold-400 rounded-full blur-lg"></div>
		<div class="absolute top-32 right-20 w-16 h-16 bg-white rounded-full blur-md"></div>
		<div class="absolute bottom-20 left-1/3 w-24 h-24 bg-aspen-gold-400 rounded-full blur-xl"></div>
		<div class="absolute bottom-10 right-10 w-12 h-12 bg-white rounded-full blur-sm"></div>
	</div>
	
	<div class="max-w-4xl mx-auto px-6 text-center relative z-10">
		<h2 class="font-display text-3xl md:text-5xl font-bold mb-6">
			Ready to Elevate Your Business?
		</h2>
		<p class="text-xl md:text-2xl mb-8 text-white/90">
			Join the Colorado businesses already growing with professional websites
		</p>
		<p class="text-lg mb-10 text-white/80 max-w-2xl mx-auto">
			One flat rate. One month timeline. Zero surprises. Your website investment that pays for itself.
		</p>
		
		<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
			<Button 
				size="lg" 
				variant="secondary"
				class="bg-aspen-gold-400 hover:bg-aspen-gold-500 text-skyline-blue-800 font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
			>
				Start Your $5,280 Website
			</Button>
			<Button 
				size="lg" 
				variant="outline"
				class="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
			>
				Schedule Discovery Call
			</Button>
		</div>
		
		<div class="mt-8 pt-8 border-t border-white/20">
			<p class="text-sm text-white/70">
				Questions? Call <strong class="text-white">(720) 555-0123</strong> or email <strong class="text-white">hello@weknowco.com</strong>
			</p>
		</div>
	</div>
</section>