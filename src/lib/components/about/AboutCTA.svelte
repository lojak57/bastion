<script lang="ts">
	import { LeadCaptureWizard } from '$lib/components/wizard';
</script>

<!-- About CTA -->
<section class="py-20 bg-gradient-to-br from-aspen-gold-400 to-red-rocks-rust">
	<div class="max-w-6xl mx-auto px-6">
		<div class="grid lg:grid-cols-2 gap-12 items-center">
			<!-- Left: Message -->
			<div class="text-granite-gray-800 space-y-6">
				<h2 class="font-display text-3xl md:text-4xl font-bold">
					Ready to work with people who actually get it?
				</h2>
				<p class="text-lg">
					We're not just another marketing agency. We're Colorado natives who've walked in your shoes, served your customers, and built businesses in this state.
				</p>
				<div class="flex items-center space-x-4">
					<img src="/images/logo/weknowco-icon.svg" alt="" class="w-12 h-12" />
					<div>
						<p class="font-semibold">Born and raised in Colorado</p>
						<p class="text-granite-gray-700 text-sm">We know how to speak its language</p>
					</div>
				</div>
			</div>
			
			<!-- Right: Lead Capture -->
			<div class="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-8">
				<div class="mb-6">
					<h3 class="font-display text-xl font-bold text-skyline-blue-600 mb-2">
						Start Your Colorado Story
					</h3>
					<p class="text-granite-gray-600 text-sm">
						Tell us about your business. Let's see how we can help you grow.
					</p>
				</div>
				
				<LeadCaptureWizard 
					variant="about"
					className="about-wizard-simple"
				/>
			</div>
		</div>
	</div>
</section>