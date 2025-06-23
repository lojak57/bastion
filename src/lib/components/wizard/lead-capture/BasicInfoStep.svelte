<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { LuxuryInput } from '../../ui';

	const dispatch = createEventDispatcher();

	export let formData: {
		firstName: string;
		lastName: string;
		email: string;
	};
	export let errors: Record<string, string> = {};

	function handleChange() {
		dispatch('change');
	}
</script>

<div class="step-content">
	<div class="step-header">
		<h3 class="step-title">Let's get to know you</h3>
		<p class="step-description">
			Start with your basic contact information
		</p>
	</div>

	<div class="form-grid">
		<div class="form-row">
			<LuxuryInput
				label="First Name"
				bind:value={formData.firstName}
				error={errors.firstName}
				placeholder="Your first name"
				required
				on:input={handleChange}
			/>
			<LuxuryInput
				label="Last Name"
				bind:value={formData.lastName}
				error={errors.lastName}
				placeholder="Your last name"
				required
				on:input={handleChange}
			/>
		</div>
		<LuxuryInput
			type="email"
			label="Email Address"
			bind:value={formData.email}
			error={errors.email}
			placeholder="your@email.com"
			required
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

	.form-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	@media (max-width: 640px) {
		.form-row {
			grid-template-columns: 1fr;
		}
	}
</style>