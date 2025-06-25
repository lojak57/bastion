<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import WizardContainer from './WizardContainer.svelte';
	import WizardStep from './WizardStep.svelte';
	import {
		BasicInfoStep,
		BusinessInfoStep,
		ProjectDetailsStep,
		GoalsStep
	} from './lead-capture';
	
	const dispatch = createEventDispatcher();
	
	export let serviceInterest: string = '';
	export let formName: string = 'Lead Capture';
	
	// Wizard state
	let currentStep = 0;
	const totalSteps = 4;
	let loading = false;
	
	// Form data
	let formData = {
		// Step 1: Basic Info
		firstName: '',
		lastName: '',
		email: '',
		
		// Step 2: Business Info
		companyName: '',
		phone: '',
		companyWebsite: '',
		
		// Step 3: Project Details
		serviceInterest: serviceInterest,
		monthlyBudget: '',
		timeframe: '',
		
		// Step 4: Goals & Context
		currentMarketing: '',
		painPoints: '',
		goals: '',
		decisionMaker: false
	};
	
	import { validators, validateForm } from '$lib/utils/formHelpers';
	
	// Validation state
	let errors: Record<string, string> = {};
	
	// Validation rules per step
	const stepValidation = [
		// Step 0: Basic Info
		{
			firstName: [validators.required],
			lastName: [validators.required],
			email: [validators.required, validators.email]
		},
		// Step 1: Business Info
		{
			companyName: [validators.required],
			phone: [validators.phone]
		},
		// Step 2: Project Details
		{
			monthlyBudget: [validators.required],
			timeframe: [validators.required]
		},
		// Step 3: Goals
		{
			goals: [validators.required]
		}
	];
	
	// Step validation
	function validateStep(step: number): boolean {
		errors = validateForm(formData, stepValidation[step]);
		return Object.keys(errors).length === 0;
	}
	
	// Check if current step is valid without setting errors
	$: currentStepValid = (() => {
		const tempErrors = validateForm(formData, stepValidation[currentStep]);
		return Object.keys(tempErrors).length === 0;
	})();
	
	// Navigation handlers
	function handleNext() {
		if (validateStep(currentStep)) {
			currentStep++;
			errors = {}; // Clear errors when moving forward
		}
	}
	
	function handleBack() {
		if (currentStep > 0) {
			currentStep--;
			errors = {}; // Clear errors when going back
		}
	}
	
	function handleStepChange() {
		// Clear errors when user makes changes
		errors = {};
	}
	
	// Submit handler
	async function handleSubmit() {
		if (!validateStep(currentStep)) return;
		
		loading = true;
		
		try {
			// Prepare submission data
			const submissionData = {
				...formData,
				pageUrl: window.location.href,
				formName: formName,
				formType: 'lead-capture',
				submittedAt: new Date().toISOString()
			};
			
			// Submit to API
			const response = await fetch('/api/leads', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(submissionData)
			});
			
			const result = await response.json();
			
			if (result.success) {
				dispatch('success', { leadId: result.leadId });
				// Redirect to thank you page after short delay
				setTimeout(() => {
					window.location.href = '/thank-you';
				}, 1500);
			} else {
				throw new Error(result.message || 'Something went wrong');
			}
		} catch (err) {
			console.error('Form submission error:', err);
			errors.submit = 'Network error. Please check your connection and try again.';
		} finally {
			loading = false;
		}
	}
</script>

<WizardContainer
	currentStep={currentStep}
	totalSteps={totalSteps}
	title="Start Your Climb"
	subtitle="{formName}"
	canGoBack={currentStep > 0}
	canGoNext={currentStepValid}
	isLastStep={currentStep === totalSteps - 1}
	{loading}
	on:next={handleNext}
	on:back={handleBack}
	on:submit={handleSubmit}
>
		{#if currentStep === 0}
			<BasicInfoStep
				bind:formData
				{errors}
				on:change={handleStepChange}
			/>
		{:else if currentStep === 1}
			<BusinessInfoStep
				bind:formData
				{errors}
				on:change={handleStepChange}
			/>
		{:else if currentStep === 2}
			<ProjectDetailsStep
				bind:formData
				{errors}
				on:change={handleStepChange}
			/>
		{:else if currentStep === 3}
			<GoalsStep
				bind:formData
				{errors}
				on:change={handleStepChange}
			/>
		{/if}
</WizardContainer>