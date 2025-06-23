<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { LuxuryInput } from '../../ui';

	const dispatch = createEventDispatcher();

	export let formData: {
		companyName: string;
		phone: string;
		companyWebsite: string;
	};
	export let errors: Record<string, string> = {};

	function handleChange() {
		dispatch('change');
	}
</script>

<div class="step-content">
	<div class="step-header">
		<h3 class="step-title">Tell us about your business</h3>
		<p class="step-description">
			Help us understand your company and how to reach you
		</p>
	</div>

	<div class="form-grid">
		<LuxuryInput
			label="Company Name"
			bind:value={formData.companyName}
			error={errors.companyName}
			placeholder="Your company name"
			required
			on:input={handleChange}
		/>
		<LuxuryInput
			type="tel"
			label="Phone Number"
			bind:value={formData.phone}
			error={errors.phone}
			placeholder="(555) 123-4567"
			on:input={handleChange}
		/>
		<LuxuryInput
			type="url"
			label="Website (optional)"
			bind:value={formData.companyWebsite}
			placeholder="https://yourwebsite.com"
			on:input={handleChange}
		/>
	</div>
</div>

<style>
	.step-content {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.step-header {
		text-align: center;
	}

	.step-title {
		font-size: 1.875rem;
		font-weight: 700;
		color: var(--skyline-blue-600);
		margin-bottom: 0.5rem;
	}

	.step-description {
		font-size: 1.125rem;
		color: var(--granite-gray-600);
	}

	.form-grid {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
</style>