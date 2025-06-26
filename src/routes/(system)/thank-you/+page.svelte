<script lang="ts">
	import { SITE_CONFIG } from '$lib/config/site.config';
	import BaseButton from '$lib/components/ui/BaseButton.svelte';
</script>

<svelte:head>
	<title>Thank You | {SITE_CONFIG.name}</title>
	<meta name="description" content="We're reviewing your submission now. Expect a response within 24 hours." />
	<meta name="robots" content="noindex" />
</svelte:head>

<div class="min-h-screen bg-bastion-black text-off-white flex items-center justify-center py-12">
	<div class="max-w-2xl mx-auto px-6 text-center">
		<div class="bg-fortress-gray-900 border-4 border-off-white p-12 shadow-brutalist">
			<!-- Success Icon -->
			<div class="w-20 h-20 bg-steel-blue-600 flex items-center justify-center mx-auto mb-6 shadow-brutalist-sm">
				<svg class="w-10 h-10 text-off-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
				</svg>
			</div>
			
			<!-- Main Message -->
			<h1 class="text-3xl md:text-4xl font-bold font-display mb-4">
				Submission Received
			</h1>
			
			<p class="text-lg text-stone-gray-300 mb-8">
				We're reviewing your submission now.
			</p>
			
			<!-- What's Next */
			<div class="bg-fortress-gray-800 border border-fortress-gray-700 p-6 mb-8 text-left">
				<h2 class="text-lg font-semibold mb-4">
					What happens next?
				</h2>
				<ul class="space-y-3 text-stone-gray-300">
					<li class="flex items-start">
						<span class="text-steel-blue-400 mr-3 text-xl">1.</span>
						We'll review your project details and prepare a custom scope & pricing
					</li>
					<li class="flex items-start">
						<span class="text-steel-blue-400 mr-3 text-xl">2.</span>
						Expect a response within 24 hours with a detailed project breakdown
					</li>
					<li class="flex items-start">
						<span class="text-steel-blue-400 mr-3 text-xl">3.</span>
						You'll get access to a read-only client portal preview
					</li>
					<li class="flex items-start">
						<span class="text-steel-blue-400 mr-3 text-xl">4.</span>
						If you requested a call, we'll include scheduling options
					</li>
				</ul>
			</div>
			
			<!-- Quick Contact Info -->
			<div class="text-sm text-stone-gray-500 mb-8">
				<p>Questions in the meantime? Email us at:</p>
				<p>
					<a href="mailto:{SITE_CONFIG.email}" class="text-steel-blue-400 hover:text-steel-blue-300">
						{SITE_CONFIG.email}
					</a>
				</p>
			</div>
			
			<!-- Navigation Links -->
			<div class="space-y-4">
				<BaseButton 
					href="/"
					size="lg"
					class="bg-off-white text-bastion-black hover:bg-stone-gray-200 font-bold shadow-brutalist-sm w-full"
				>
					Back to Home
				</BaseButton>
			</div>
		</div>
	</div>
</div>

