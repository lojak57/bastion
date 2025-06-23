<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { LuxuryInput } from '../../ui';

	const dispatch = createEventDispatcher();

	export let formData: {
		serviceInterest: string;
		monthlyBudget: string;
		timeframe: string;
	};
	export let errors: Record<string, string> = {};

	const budgetOptions = [
		{ value: 'under-1k', label: 'Under $1,000/month' },
		{ value: '1k-5k', label: '$1,000 - $5,000/month' },
		{ value: '5k-10k', label: '$5,000 - $10,000/month' },
		{ value: '10k-25k', label: '$10,000 - $25,000/month' },
		{ value: 'over-25k', label: 'Over $25,000/month' }
	];

	const timeframeOptions = [
		{ value: 'asap', label: 'Ready to start immediately' },
		{ value: '30-days', label: 'Within 30 days' },
		{ value: '90-days', label: 'Within 90 days' },
		{ value: 'exploring', label: 'Just exploring options' }
	];

	function handleChange() {
		dispatch('change');
	}
</script>

<div class="step-content">
	<div class="step-header">
		<h3 class="step-title">Project details</h3>
		<p class="step-description">
			Let's understand your budget and timeline
		</p>
	</div>

	<div class="form-grid">
		<LuxuryInput
			label="Service Interest"
			bind:value={formData.serviceInterest}
			placeholder="What service are you interested in?"
			on:input={handleChange}
		/>

		<div class="select-group">
			<label class="select-label">Monthly Budget Range *</label>
			<div class="radio-group">
				{#each budgetOptions as option}
					<label class="radio-option">
						<input
							type="radio"
							bind:group={formData.monthlyBudget}
							value={option.value}
							on:change={handleChange}
						/>
						<span class="radio-label">{option.label}</span>
					</label>
				{/each}
			</div>
			{#if errors.monthlyBudget}
				<div class="error-text">{errors.monthlyBudget}</div>
			{/if}
		</div>

		<div class="select-group">
			<label class="select-label">Timeframe *</label>
			<div class="radio-group">
				{#each timeframeOptions as option}
					<label class="radio-option">
						<input
							type="radio"
							bind:group={formData.timeframe}
							value={option.value}
							on:change={handleChange}
						/>
						<span class="radio-label">{option.label}</span>
					</label>
				{/each}
			</div>
			{#if errors.timeframe}
				<div class="error-text">{errors.timeframe}</div>
			{/if}
		</div>
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
		gap: 2rem;
	}

	.select-group {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.select-label {
		font-size: 1rem;
		font-weight: 600;
		color: var(--skyline-blue-600);
	}

	.radio-group {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.radio-option {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 1rem;
		border: 2px solid var(--granite-gray-200);
		border-radius: 0.75rem;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.radio-option:hover {
		border-color: var(--skyline-blue-300);
		background-color: var(--skyline-blue-50);
	}

	.radio-option:has(input:checked) {
		border-color: var(--skyline-blue-500);
		background-color: var(--skyline-blue-100);
	}

	.radio-option input {
		width: 1.25rem;
		height: 1.25rem;
		accent-color: var(--skyline-blue-500);
	}

	.radio-label {
		font-size: 1rem;
		color: var(--granite-gray-700);
	}

	.error-text {
		color: var(--color-error);
		font-size: 0.875rem;
	}

	@media (max-width: 640px) {
		.radio-group {
			gap: 0.5rem;
		}

		.radio-option {
			padding: 0.75rem;
		}
	}
</style>