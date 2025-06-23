<script lang="ts">
	import { FeatureCard } from '$lib/components/ui';
	
	// Core features
	const coreFeatures = [
		{
			icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z',
			title: 'Complete Website Package',
			description: 'Up to 7 pages of professionally designed, mobile-responsive content'
		},
		{
			icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
			title: 'Professional Copywriting',
			description: 'Compelling content that speaks to Colorado audiences'
		},
		{
			icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
			title: 'SEO Foundation',
			description: 'Local SEO optimization to help customers find you'
		},
		{
			icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
			title: 'Mobile-First Design',
			description: 'Looks perfect on every device, guaranteed'
		}
	];
</script>

<!-- Core Features -->
<section class="py-20 bg-snowfield-white">
	<div class="max-w-7xl mx-auto px-6">
		<div class="text-center mb-12 fade-in">
			<h2 class="font-display text-3xl md:text-4xl font-bold text-skyline-blue-600 mb-4">
				Everything You Need to Succeed Online
			</h2>
			<p class="text-xl text-granite-gray-600 max-w-2xl mx-auto">
				A complete website package designed for Colorado small businesses
			</p>
		</div>
		
		<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each coreFeatures as feature, i}
				<div class="fade-in-up stagger-{i}">
					<FeatureCard {...feature} />
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	:global(.fade-in) {
		animation: fadeIn 1s ease-out;
	}
	
	:global(.fade-in-up) {
		animation: fadeInUp 0.8s ease-out both;
	}
	
	:global(.stagger-0) { animation-delay: 0ms; }
	:global(.stagger-1) { animation-delay: 150ms; }
	:global(.stagger-2) { animation-delay: 300ms; }
	:global(.stagger-3) { animation-delay: 450ms; }
	
	@keyframes fadeIn {
		from { opacity: 0; transform: translateY(30px); }
		to { opacity: 1; transform: translateY(0); }
	}
	
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
</style>