<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { LuxuryInput } from '../../ui';

	const dispatch = createEventDispatcher();

	export let formData: {
		currentMarketing: string;
		painPoints: string;
		goals: string;
		decisionMaker: boolean;
	};
	export let errors: Record<string, string> = {};

	function handleChange() {
		dispatch('change');
	}
</script>

<div class="step-content">
	<div class="step-header">
		<h3 class="step-title">Your goals & context</h3>
		<p class="step-description">
			Help us understand how we can best serve your needs
		</p>
	</div>

	<div class="form-grid">
		<div class="textarea-group">
			<label for="current-marketing" class="textarea-label">Current Marketing Efforts</label>
			<textarea
				id="current-marketing"
				bind:value={formData.currentMarketing}
				placeholder="Tell us about your current marketing efforts and what's working or not working..."
				rows="3"
				class="luxury-textarea"
				on:input={handleChange}
			></textarea>
		</div>

		<div class="textarea-group">
			<label for="pain-points" class="textarea-label">Main Challenges</label>
			<textarea
				id="pain-points"
				bind:value={formData.painPoints}
				placeholder="What are your biggest marketing challenges or pain points?"
				rows="3"
				class="luxury-textarea"
				on:input={handleChange}
			></textarea>
		</div>

		<div class="textarea-group">
			<label for="goals" class="textarea-label">Goals & Objectives *</label>
			<textarea
				id="goals"
				bind:value={formData.goals}
				placeholder="What are you hoping to achieve? What does success look like for your business?"
				rows="4"
				class="luxury-textarea"
				class:error={errors.goals}
				on:input={handleChange}
			></textarea>
			{#if errors.goals}
				<div class="error-text">{errors.goals}</div>
			{/if}
		</div>

		<div class="checkbox-group">
			<label class="checkbox-option">
				<input
					type="checkbox"
					bind:checked={formData.decisionMaker}
					on:change={handleChange}
				/>
				<span class="checkbox-label">
					I am the primary decision maker for this project
				</span>
			</label>
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
		gap: 1.5rem;
	}

	.textarea-group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.textarea-label {
		font-size: 1rem;
		font-weight: 600;
		color: var(--skyline-blue-600);
	}

	.luxury-textarea {
		width: 100%;
		padding: 1rem;
		border: 2px solid var(--granite-gray-200);
		border-radius: 0.75rem;
		font-family: inherit;
		font-size: 1rem;
		color: var(--granite-gray-700);
		background-color: white;
		resize: vertical;
		min-height: 3rem;
		transition: all 0.2s ease;
	}

	.luxury-textarea:focus {
		outline: none;
		border-color: var(--skyline-blue-500);
		box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
	}

	.luxury-textarea.error {
		border-color: var(--color-error);
	}

	.luxury-textarea::placeholder {
		color: var(--granite-gray-400);
	}

	.checkbox-group {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.checkbox-option {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 1rem;
		border: 2px solid var(--granite-gray-200);
		border-radius: 0.75rem;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.checkbox-option:hover {
		border-color: var(--skyline-blue-300);
		background-color: var(--skyline-blue-50);
	}

	.checkbox-option:has(input:checked) {
		border-color: var(--skyline-blue-500);
		background-color: var(--skyline-blue-100);
	}

	.checkbox-option input {
		width: 1.25rem;
		height: 1.25rem;
		accent-color: var(--skyline-blue-500);
	}

	.checkbox-label {
		font-size: 1rem;
		color: var(--granite-gray-700);
	}

	.error-text {
		color: var(--color-error);
		font-size: 0.875rem;
	}

	@media (max-width: 640px) {
		.luxury-textarea {
			padding: 0.75rem;
		}

		.checkbox-option {
			padding: 0.75rem;
		}
	}
</style>