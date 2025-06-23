<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import LuxuryInput from '../../ui/LuxuryInput.svelte';
	
	export let formData: any;
	export let errors: Record<string, string> = {};
	
	const dispatch = createEventDispatcher();
	
	const revenueRanges = [
		'Pre-revenue',
		'$1-10K/month',
		'$10-50K/month',
		'$50-100K/month',
		'$100K+/month'
	];
	
	const teamSizes = [
		'Just me',
		'2-5 people',
		'6-15 people',
		'16-50 people',
		'50+ people'
	];
	
	const fundingStatuses = [
		'Bootstrapped',
		'Friends & Family',
		'Angel Investment',
		'Seed Round',
		'Series A+',
		'Looking for Funding'
	];
	
	function handleChange() {
		dispatch('change', formData);
	}
</script>

<div class="space-y-6">
	<div class="text-center mb-8">
		<h2 class="text-2xl font-bold text-skyline-blue-600 mb-2">Business Performance</h2>
		<p class="text-granite-gray-600">Give us insight into your current traction and growth</p>
	</div>
	
	<div class="space-y-2">
		<label class="block text-sm font-semibold text-granite-gray-700">Current Monthly Revenue</label>
		<select
			bind:value={formData.currentRevenue}
			on:change={handleChange}
			class="w-full px-4 py-3 border-2 border-granite-gray-200 rounded-lg focus:border-skyline-blue-500 focus:ring-0 bg-white text-granite-gray-900 font-medium transition-colors duration-200"
			class:border-red-500={errors.currentRevenue}
		>
			<option value="">Select revenue range</option>
			{#each revenueRanges as range}
				<option value={range}>{range}</option>
			{/each}
		</select>
		{#if errors.currentRevenue}
			<p class="text-red-500 text-sm mt-1">{errors.currentRevenue}</p>
		{/if}
	</div>
	
	<LuxuryInput
		type="text"
		placeholder="Revenue projection for next 12 months"
		bind:value={formData.revenueProjection}
		error={errors.revenueProjection}
		on:input={handleChange}
	/>
	
	<div class="space-y-2">
		<label class="block text-sm font-semibold text-granite-gray-700">Team Size</label>
		<select
			bind:value={formData.teamSize}
			on:change={handleChange}
			class="w-full px-4 py-3 border-2 border-granite-gray-200 rounded-lg focus:border-skyline-blue-500 focus:ring-0 bg-white text-granite-gray-900 font-medium transition-colors duration-200"
			class:border-red-500={errors.teamSize}
		>
			<option value="">Select team size</option>
			{#each teamSizes as size}
				<option value={size}>{size}</option>
			{/each}
		</select>
		{#if errors.teamSize}
			<p class="text-red-500 text-sm mt-1">{errors.teamSize}</p>
		{/if}
	</div>
	
	<div class="space-y-2">
		<label class="block text-sm font-semibold text-granite-gray-700">Funding Status</label>
		<select
			bind:value={formData.fundingStatus}
			on:change={handleChange}
			class="w-full px-4 py-3 border-2 border-granite-gray-200 rounded-lg focus:border-skyline-blue-500 focus:ring-0 bg-white text-granite-gray-900 font-medium transition-colors duration-200"
			class:border-red-500={errors.fundingStatus}
		>
			<option value="">Select funding status</option>
			{#each fundingStatuses as status}
				<option value={status}>{status}</option>
			{/each}
		</select>
		{#if errors.fundingStatus}
			<p class="text-red-500 text-sm mt-1">{errors.fundingStatus}</p>
		{/if}
	</div>
</div>