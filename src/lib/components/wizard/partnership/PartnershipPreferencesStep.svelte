<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import LuxuryInput from '../../ui/LuxuryInput.svelte';
	
	export let formData: any;
	export let errors: Record<string, string> = {};
	
	const dispatch = createEventDispatcher();
	
	const partnershipTypes = [
		'Revenue Share',
		'Equity Offer Program',
		'Micro-Retainer + Performance',
		'Hybrid Partnership',
		'Let\'s Discuss Options'
	];
	
	const budgetRanges = [
		'Under $500/month',
		'$500-1,500/month',
		'$1,500-3,000/month',
		'$3,000+/month',
		'Flexible based on results'
	];
	
	const timeframes = [
		'Start immediately',
		'Within 30 days',
		'Within 60 days',
		'Within 90 days',
		'Just exploring options'
	];
	
	function handleChange() {
		dispatch('change', formData);
	}
</script>

<div class="space-y-6">
	<div class="text-center mb-8">
		<h2 class="text-2xl font-bold text-skyline-blue-600 mb-2">Partnership Structure</h2>
		<p class="text-granite-gray-600">Let's find the partnership model that works for both of us</p>
	</div>
	
	<div class="space-y-2">
		<label class="block text-sm font-semibold text-granite-gray-700">Preferred Partnership Type</label>
		<select
			bind:value={formData.partnershipType}
			on:change={handleChange}
			class="w-full px-4 py-3 border-2 border-granite-gray-200 rounded-lg focus:border-skyline-blue-500 focus:ring-0 bg-white text-granite-gray-900 font-medium transition-colors duration-200"
			class:border-red-500={errors.partnershipType}
		>
			<option value="">Select partnership type</option>
			{#each partnershipTypes as type}
				<option value={type}>{type}</option>
			{/each}
		</select>
		{#if errors.partnershipType}
			<p class="text-red-500 text-sm mt-1">{errors.partnershipType}</p>
		{/if}
	</div>
	
	<div class="space-y-2">
		<label class="block text-sm font-semibold text-granite-gray-700">Marketing Budget Range</label>
		<select
			bind:value={formData.marketingBudget}
			on:change={handleChange}
			class="w-full px-4 py-3 border-2 border-granite-gray-200 rounded-lg focus:border-skyline-blue-500 focus:ring-0 bg-white text-granite-gray-900 font-medium transition-colors duration-200"
			class:border-red-500={errors.marketingBudget}
		>
			<option value="">Select budget range</option>
			{#each budgetRanges as range}
				<option value={range}>{range}</option>
			{/each}
		</select>
		{#if errors.marketingBudget}
			<p class="text-red-500 text-sm mt-1">{errors.marketingBudget}</p>
		{/if}
	</div>
	
	<div class="space-y-2">
		<label class="block text-sm font-semibold text-granite-gray-700">Timeline to Start</label>
		<select
			bind:value={formData.timeframe}
			on:change={handleChange}
			class="w-full px-4 py-3 border-2 border-granite-gray-200 rounded-lg focus:border-skyline-blue-500 focus:ring-0 bg-white text-granite-gray-900 font-medium transition-colors duration-200"
			class:border-red-500={errors.timeframe}
		>
			<option value="">Select timeframe</option>
			{#each timeframes as time}
				<option value={time}>{time}</option>
			{/each}
		</select>
		{#if errors.timeframe}
			<p class="text-red-500 text-sm mt-1">{errors.timeframe}</p>
		{/if}
	</div>
</div>