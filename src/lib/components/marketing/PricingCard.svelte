<script lang="ts">
	import { BaseButton, BaseCard } from '../ui';
	
	export let title: string;
	export let price: string;
	export let period: string = 'month';
	export let description: string;
	export let features: string[] = [];
	export let ctaText: string = 'Get Started';
	export let ctaHref: string = '/contact';
	export let popular: boolean = false;
	export let annual: boolean = false;
	
	$: priceDisplay = annual && period === 'month' ? 
		`$${(parseInt(price.replace('$', '').replace(',', '')) * 10).toLocaleString()}` : 
		price;
	$: periodDisplay = annual ? 'year' : period;
</script>

<div class="relative">
	{#if popular}
		<div class="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
			<span class="bg-aspen-gold-400 text-granite-gray-700 px-4 py-1 rounded-full text-sm font-semibold">
				Most Popular
			</span>
		</div>
	{/if}
	
	<BaseCard class={`h-full transition-all duration-300 hover:scale-105 ${popular ? 'ring-2 ring-aspen-gold-400 shadow-xl' : 'hover:shadow-lg'}`}>
		<div class="p-6">
			<!-- Header -->
			<div class="text-center mb-6">
				<h3 class="wkc-heading text-2xl font-bold text-skyline-blue-600 mb-2">
					{title}
				</h3>
				<div class="flex items-baseline justify-center mb-2">
					<span class="text-4xl font-bold text-granite-gray-700">
						{priceDisplay}
					</span>
					<span class="text-granite-gray-500 ml-1">
						/{periodDisplay}
					</span>
				</div>
				{#if annual && period === 'month'}
					<div class="text-sm text-aspen-gold-600 font-medium">
						Save 2 months annually
					</div>
				{/if}
				<p class="text-granite-gray-600 mt-2">
					{description}
				</p>
			</div>
			
			<!-- Features -->
			{#if features.length > 0}
				<ul class="space-y-3 mb-6">
					{#each features as feature}
						<li class="flex items-start">
							<svg class="w-5 h-5 text-aspen-gold-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
							</svg>
							<span class="text-granite-gray-600">
								{feature}
							</span>
						</li>
					{/each}
				</ul>
			{/if}
			
			<!-- CTA -->
			<BaseButton 
				variant={popular ? 'primary' : 'outline'} 
				size="lg" 
				href={ctaHref}
				class={`w-full ${popular ? 'btn-primary' : 'btn-outline'} transition-all duration-300`}
			>
				{ctaText}
			</BaseButton>
		</div>
	</BaseCard>
</div>