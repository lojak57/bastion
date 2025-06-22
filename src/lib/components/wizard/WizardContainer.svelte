<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	
	export let currentStep: number = 0;
	export let totalSteps: number;
	export let title: string = '';
	export let subtitle: string = '';
	export let canGoBack: boolean = true;
	export let canGoNext: boolean = false;
	export let isLastStep: boolean = false;
	export let loading: boolean = false;
	
	const dispatch = createEventDispatcher();
	
	function handleNext() {
		if (canGoNext) {
			dispatch('next');
		}
	}
	
	function handleBack() {
		if (canGoBack && currentStep > 0) {
			dispatch('back');
		}
	}
	
	function handleSubmit() {
		dispatch('submit');
	}
	
	$: progress = ((currentStep + 1) / totalSteps) * 100;
</script>

<div class="wizard-container">
	<!-- Progress Bar -->
	<div class="wizard-progress">
		<div class="progress-track">
			<div class="progress-fill" style="width: {progress}%"></div>
		</div>
		<div class="progress-text">
			Step {currentStep + 1} of {totalSteps}
		</div>
	</div>
	
	<!-- Header -->
	<div class="wizard-header">
		{#if title}
			<h1 class="wizard-title">{title}</h1>
		{/if}
		{#if subtitle}
			<p class="wizard-subtitle">{subtitle}</p>
		{/if}
	</div>
	
	<!-- Content -->
	<div class="wizard-content">
		<slot />
	</div>
	
	<!-- Navigation -->
	<div class="wizard-navigation">
		<button
			type="button"
			class="wizard-btn wizard-btn-secondary"
			class:disabled={!canGoBack || currentStep === 0}
			on:click={handleBack}
			disabled={!canGoBack || currentStep === 0}
		>
			<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
			</svg>
			Back
		</button>
		
		{#if isLastStep}
			<button
				type="submit"
				class="wizard-btn wizard-btn-primary"
				class:loading
				disabled={!canGoNext || loading}
				on:click={handleSubmit}
			>
				{#if loading}
					<svg class="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">
						<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
						<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
					</svg>
					Submitting...
				{:else}
					Submit Application
					<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l7-7m0 0l-7-7m7 7H5"></path>
					</svg>
				{/if}
			</button>
		{:else}
			<button
				type="button"
				class="wizard-btn wizard-btn-primary"
				class:disabled={!canGoNext}
				on:click={handleNext}
				disabled={!canGoNext}
			>
				Continue
				<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
				</svg>
			</button>
		{/if}
	</div>
</div>

<style>
	.wizard-container {
		max-width: 600px;
		margin: 0 auto;
		background: white;
		border-radius: 20px;
		box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
		overflow: hidden;
	}
	
	.wizard-progress {
		padding: 24px 32px 16px;
		background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
		border-bottom: 1px solid #e2e8f0;
	}
	
	.progress-track {
		width: 100%;
		height: 8px;
		background: #e2e8f0;
		border-radius: 4px;
		overflow: hidden;
		margin-bottom: 8px;
	}
	
	.progress-fill {
		height: 100%;
		background: linear-gradient(90deg, #1C4D72, #FDBA31);
		border-radius: 4px;
		transition: width 0.3s ease;
	}
	
	.progress-text {
		text-align: center;
		font-size: 14px;
		font-weight: 600;
		color: #64748b;
	}
	
	.wizard-header {
		padding: 32px 32px 24px;
		text-align: center;
		border-bottom: 1px solid #f1f5f9;
	}
	
	.wizard-title {
		font-size: 28px;
		font-weight: 700;
		color: #1e293b;
		margin-bottom: 8px;
		font-family: 'Space Grotesk', sans-serif;
	}
	
	.wizard-subtitle {
		font-size: 16px;
		color: #64748b;
		line-height: 1.5;
		max-width: 400px;
		margin: 0 auto;
	}
	
	.wizard-content {
		padding: 32px;
		min-height: 300px;
	}
	
	.wizard-navigation {
		padding: 24px 32px 32px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 16px;
		background: #f8fafc;
		border-top: 1px solid #e2e8f0;
	}
	
	.wizard-btn {
		display: inline-flex;
		align-items: center;
		padding: 12px 24px;
		border-radius: 10px;
		font-weight: 600;
		font-size: 16px;
		transition: all 0.2s ease;
		cursor: pointer;
		border: 2px solid transparent;
		min-width: 120px;
		justify-content: center;
	}
	
	.wizard-btn-primary {
		background: linear-gradient(135deg, #1C4D72, #2563eb);
		color: white;
		box-shadow: 0 4px 14px 0 rgba(28, 77, 114, 0.15);
	}
	
	.wizard-btn-primary:hover:not(.disabled):not(:disabled) {
		transform: translateY(-1px);
		box-shadow: 0 8px 25px 0 rgba(28, 77, 114, 0.25);
	}
	
	.wizard-btn-secondary {
		background: white;
		color: #64748b;
		border-color: #e2e8f0;
	}
	
	.wizard-btn-secondary:hover:not(.disabled):not(:disabled) {
		background: #f8fafc;
		border-color: #cbd5e1;
	}
	
	.wizard-btn.disabled,
	.wizard-btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
		transform: none !important;
	}
	
	.wizard-btn.loading {
		cursor: wait;
	}
	
	/* Mobile responsiveness */
	@media (max-width: 640px) {
		.wizard-container {
			margin: 16px;
			border-radius: 16px;
		}
		
		.wizard-progress,
		.wizard-header,
		.wizard-content,
		.wizard-navigation {
			padding-left: 20px;
			padding-right: 20px;
		}
		
		.wizard-title {
			font-size: 24px;
		}
		
		.wizard-navigation {
			flex-direction: column;
			gap: 12px;
		}
		
		.wizard-btn {
			width: 100%;
		}
	}
</style>