<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import LuxuryInput from '../../ui/LuxuryInput.svelte';
	
	export let formData: any;
	export let errors: Record<string, string> = {};
	
	const dispatch = createEventDispatcher();
	
	function handleChange() {
		dispatch('change', formData);
	}
</script>

<div class="space-y-6">
	<div class="text-center mb-8">
		<h2 class="text-2xl font-bold text-skyline-blue-600 mb-2">Your Vision</h2>
		<p class="text-granite-gray-600">Help us understand your goals and how we can support your success</p>
	</div>
	
	<div class="space-y-2">
		<label class="block text-sm font-semibold text-granite-gray-700">Business Description</label>
		<textarea
			bind:value={formData.businessDescription}
			on:input={handleChange}
			placeholder="Describe your business, what you do, and who you serve..."
			rows="4"
			class="w-full px-4 py-3 border-2 border-granite-gray-200 rounded-lg focus:border-skyline-blue-500 focus:ring-0 bg-white text-granite-gray-900 resize-none transition-colors duration-200"
			class:border-red-500={errors.businessDescription}
		></textarea>
		{#if errors.businessDescription}
			<p class="text-red-500 text-sm mt-1">{errors.businessDescription}</p>
		{/if}
	</div>
	
	<div class="space-y-2">
		<label class="block text-sm font-semibold text-granite-gray-700">Unique Value Proposition</label>
		<textarea
			bind:value={formData.uniqueValue}
			on:input={handleChange}
			placeholder="What makes your business unique? How do you stand out from competitors?"
			rows="3"
			class="w-full px-4 py-3 border-2 border-granite-gray-200 rounded-lg focus:border-skyline-blue-500 focus:ring-0 bg-white text-granite-gray-900 resize-none transition-colors duration-200"
			class:border-red-500={errors.uniqueValue}
		></textarea>
		{#if errors.uniqueValue}
			<p class="text-red-500 text-sm mt-1">{errors.uniqueValue}</p>
		{/if}
	</div>
	
	<div class="space-y-2">
		<label class="block text-sm font-semibold text-granite-gray-700">Growth Goals</label>
		<textarea
			bind:value={formData.goals}
			on:input={handleChange}
			placeholder="What are your key goals for the next 12-18 months? Where do you want to be?"
			rows="3"
			class="w-full px-4 py-3 border-2 border-granite-gray-200 rounded-lg focus:border-skyline-blue-500 focus:ring-0 bg-white text-granite-gray-900 resize-none transition-colors duration-200"
			class:border-red-500={errors.goals}
		></textarea>
		{#if errors.goals}
			<p class="text-red-500 text-sm mt-1">{errors.goals}</p>
		{/if}
	</div>
	
	<div class="space-y-2">
		<label class="block text-sm font-semibold text-granite-gray-700">Why Partnership?</label>
		<textarea
			bind:value={formData.whyPartnership}
			on:input={handleChange}
			placeholder="Why are you interested in a marketing partnership versus traditional agency services?"
			rows="3"
			class="w-full px-4 py-3 border-2 border-granite-gray-200 rounded-lg focus:border-skyline-blue-500 focus:ring-0 bg-white text-granite-gray-900 resize-none transition-colors duration-200"
			class:border-red-500={errors.whyPartnership}
		></textarea>
		{#if errors.whyPartnership}
			<p class="text-red-500 text-sm mt-1">{errors.whyPartnership}</p>
		{/if}
	</div>
</div>