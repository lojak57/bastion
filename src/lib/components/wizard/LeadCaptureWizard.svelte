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
	
	// Validation state
	let errors: Record<string, string> = {};
	
	// Step validation
	function validateStep(step: number): boolean {
		errors = {};
		
		switch (step) {
			case 0:
				if (!formData.firstName.trim()) errors.firstName = 'First name is required';
				if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
				if (!formData.email.trim()) errors.email = 'Email is required';
				else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
					errors.email = 'Please enter a valid email address';
				}
				break;
			case 1:
				if (!formData.companyName.trim()) errors.companyName = 'Company name is required';
				if (formData.phone && !/^[\+]?[\d\s\-\(\)]+$/.test(formData.phone)) {
					errors.phone = 'Please enter a valid phone number';
				}
				break;
			case 2:
				if (!formData.monthlyBudget) errors.monthlyBudget = 'Please select a budget range';
				if (!formData.timeframe) errors.timeframe = 'Please select a timeframe';
				break;
			case 3:
				if (!formData.goals.trim()) errors.goals = 'Please tell us about your goals';
				break;
		}
		
		return Object.keys(errors).length === 0;
	}
	
	// Navigation handlers
	function handleNext() {
		if (validateStep(currentStep)) {
			currentStep++;
		}
	}
	
	function handleBack() {
		if (currentStep > 0) {
			currentStep--;
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

<WizardContainer>
	<WizardStep
		title="{currentStep + 1} of {totalSteps}"
		current={currentStep}
		total={totalSteps}
		onNext={handleNext}
		onBack={handleBack}
		onSubmit={handleSubmit}
		{loading}
		nextDisabled={false}
		backDisabled={currentStep === 0}
		submitDisabled={false}
		isLastStep={currentStep === totalSteps - 1}
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
	</WizardStep>
</WizardContainer>