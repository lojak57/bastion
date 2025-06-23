<script lang="ts">
	import LeadCaptureWizard from '../wizard/LeadCaptureWizard.svelte';
</script>

<!-- CTA Section -->
<section class="py-20 bg-gradient-to-br from-skyline-blue-600 to-red-rocks-rust text-white">
	<div class="max-w-4xl mx-auto px-6">
		<div class="text-center mb-12">
			<h2 class="font-display text-3xl md:text-4xl font-bold mb-4">
				Ready to Start Your Growth Journey?
			</h2>
			<p class="text-xl text-white/90">
				Let's map out your path from where you are to where you want to be
			</p>
		</div>
		
		<LeadCaptureWizard 
			serviceInterest="growth-plans"
			formName="Growth Journey Interest"
		/>
	</div>
</section>