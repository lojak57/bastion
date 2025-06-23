<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import LuxuryInput from '../../ui/LuxuryInput.svelte';
	
	export let formData: any;
	export let errors: Record<string, string> = {};
	
	const dispatch = createEventDispatcher();
	
	const industries = [
		'Technology/SaaS',
		'E-commerce',
		'Healthcare',
		'Professional Services',
		'Real Estate',
		'Manufacturing',
		'Retail',
		'Food & Beverage',
		'Education',
		'Financial Services',
		'Non-profit',
		'Other'
	];
	
	function handleChange() {
		dispatch('change', formData);
	}
</script>

<div class="space-y-6">
	<div class="text-center mb-8">
		<h2 class="text-2xl font-bold text-skyline-blue-600 mb-2">About Your Business</h2>
		<p class="text-granite-gray-600">Help us understand your company and market</p>
	</div>
	
	<LuxuryInput
		type="text"
		placeholder="Company Name"
		bind:value={formData.companyName}
		error={errors.companyName}
		on:input={handleChange}
		required
	/>
	
	<LuxuryInput
		type="url"
		placeholder="Company Website (if available)"
		bind:value={formData.companyWebsite}
		error={errors.companyWebsite}
		on:input={handleChange}
	/>
	
	<div class="space-y-2">
		<label class="block text-sm font-semibold text-granite-gray-700">Industry</label>
		<select
			bind:value={formData.industry}
			on:change={handleChange}
			class="w-full px-4 py-3 border-2 border-granite-gray-200 rounded-lg focus:border-skyline-blue-500 focus:ring-0 bg-white text-granite-gray-900 font-medium transition-colors duration-200"
			class:border-red-500={errors.industry}
		>
			<option value="">Select your industry</option>
			{#each industries as industry}
				<option value={industry}>{industry}</option>
			{/each}
		</select>
		{#if errors.industry}
			<p class="text-red-500 text-sm mt-1">{errors.industry}</p>
		{/if}
	</div>
	
	<LuxuryInput
		type="number"
		placeholder="Year Founded"
		bind:value={formData.foundedYear}
		error={errors.foundedYear}
		on:input={handleChange}
		min="1900"
		max="2024"
		required
	/>
</div>