<script lang="ts">
	import { BaseCard, ChecklistItem } from '$lib/components/ui';
	
	// What's included
	const included = [
		'Custom design aligned with your brand',
		'Up to 7 professionally written pages',
		'Mobile-responsive development',
		'Contact forms with email integration',
		'Google Analytics setup',
		'Basic SEO optimization',
		'Social media integration',
		'SSL security certificate',
		'Website hosting setup guidance',
		'Content management training',
		'30 days of post-launch support',
		'Bug fixes and minor adjustments'
	];
	
	// What's not included
	const notIncluded = [
		'Domain registration (we\'ll guide you)',
		'Hosting fees (typically $10-20/month)',
		'Stock photos (we\'ll help source)',
		'E-commerce functionality',
		'Custom web applications',
		'Ongoing maintenance (available separately)'
	];
</script>

<!-- What's Included -->
<section class="py-20 bg-gradient-to-br from-granite-gray-50 to-snowfield-white relative overflow-hidden">
	<!-- Background decoration -->
	<div class="absolute top-20 right-20 w-32 h-32 bg-skyline-blue-100 rounded-full blur-2xl opacity-40"></div>
	<div class="absolute bottom-20 left-20 w-40 h-40 bg-aspen-gold-100 rounded-full blur-3xl opacity-30"></div>
	<div class="max-w-7xl mx-auto px-6">
		<div class="grid lg:grid-cols-2 gap-12">
			<!-- Included -->
			<div class="fade-in-up stagger-0">
				<BaseCard class="h-full p-8 shadow-glow">
					<h3 class="font-display text-2xl font-bold text-skyline-blue-600 mb-6 flex items-center">
						<svg class="w-8 h-8 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
						</svg>
						What's Included
					</h3>
					<ul class="space-y-3">
						{#each included as item}
							<ChecklistItem text={item} included={true} />
						{/each}
					</ul>
				</BaseCard>
			</div>
			
			<!-- Not Included -->
			<div class="fade-in-up stagger-1">
				<BaseCard class="h-full p-8 shadow-glow">
					<h3 class="font-display text-2xl font-bold text-granite-gray-600 mb-6 flex items-center">
						<svg class="w-8 h-8 mr-3 text-granite-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
						</svg>
						What's Not Included
					</h3>
					<ul class="space-y-3">
						{#each notIncluded as item}
							<ChecklistItem text={item} included={false} />
						{/each}
					</ul>
					<div class="mt-6 p-4 bg-skyline-blue-50 rounded-lg">
						<p class="text-sm text-skyline-blue-700">
							<strong>Need more?</strong> Check out our monthly retainer plans for ongoing support, marketing, and growth.
						</p>
					</div>
				</BaseCard>
			</div>
		</div>
	</div>
</section>

<style>
	:global(.fade-in-up) {
		animation: fadeInUp 0.8s ease-out both;
	}
	
	:global(.stagger-0) { animation-delay: 0ms; }
	:global(.stagger-1) { animation-delay: 150ms; }
	
	@keyframes fadeInUp {
		from { 
			opacity: 0; 
			transform: translateY(30px) scale(0.95); 
		}
		to { 
			opacity: 1; 
			transform: translateY(0) scale(1); 
		}
	}
	
	:global(.shadow-glow) {
		box-shadow: 0 10px 40px rgba(28, 77, 114, 0.2);
	}
	
	:global(.shadow-glow:hover) {
		box-shadow: 0 20px 60px rgba(28, 77, 114, 0.3);
	}
</style>