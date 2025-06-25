<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import WizardContainer from './WizardContainer.svelte';
	import {
		FounderInfoStep,
		BusinessBasicsStep,
		BusinessDetailsStep,
		PartnershipPreferencesStep,
		VisionDetailsStep
	} from './partnership';
	import { validators, validateForm } from '$lib/utils/formHelpers';
	
	const dispatch = createEventDispatcher();
	
	// Wizard state
	let currentStep = 0;
	const totalSteps = 5;
	let loading = false;
	
	// Form data
	let formData = {
		// Step 1: Founder Info
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		
		// Step 2: Business Basics
		companyName: '',
		companyWebsite: '',
		industry: '',
		foundedYear: '',
		
		// Step 3: Business Details
		currentRevenue: '',
		revenueProjection: '',
		teamSize: '',
		fundingStatus: '',
		
		// Step 4: Partnership Preferences
		partnershipType: '',
		marketingBudget: '',
		timeframe: '',
		
		// Step 5: Vision & Details
		businessDescription: '',
		uniqueValue: '',
		goals: '',
		whyPartnership: ''
	};
	
	// Validation state
	let errors: Record<string, string> = {};
	
	// Validation rules per step
	const stepValidation = [
		// Step 0: Founder Info
		{
			firstName: [validators.required],
			lastName: [validators.required],
			email: [validators.required, validators.email],
			phone: [validators.required]
		},
		// Step 1: Business Basics
		{
			companyName: [validators.required],
			industry: [validators.required],
			foundedYear: [validators.required]
		},
		// Step 2: Business Details
		{
			currentRevenue: [validators.required],
			teamSize: [validators.required],
			fundingStatus: [validators.required]
		},
		// Step 3: Partnership Preferences
		{
			partnershipType: [validators.required],
			marketingBudget: [validators.required],
			timeframe: [validators.required]
		},
		// Step 4: Vision & Details
		{
			businessDescription: [validators.required],
			uniqueValue: [validators.required],
			goals: [validators.required],
			whyPartnership: [validators.required]
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
	
	// Step configurations
	const stepConfigs = [
		{
			title: 'Founder Information',
			subtitle: 'Let\'s start with the basics about you'
		},
		{
			title: 'Business Overview',
			subtitle: 'Tell us about your company'
		},
		{
			title: 'Business Performance',
			subtitle: 'Share your current traction and growth'
		},
		{
			title: 'Partnership Preferences',
			subtitle: 'How would you like to work together?'
		},
		{
			title: 'Vision & Goals',
			subtitle: 'Help us understand your bigger picture'
		}
	];
	
	// Navigation
	function nextStep() {
		if (validateStep(currentStep)) {
			currentStep++;
			errors = {}; // Clear errors when moving forward
		}
	}
	
	function prevStep() {
		if (currentStep > 0) {
			currentStep--;
			errors = {}; // Clear errors when going back
		}
	}
	
	// Form submission
	async function handleSubmit() {
		if (!validateStep(currentStep)) return;
		
		loading = true;
		
		try {
			const response = await fetch('/api/leads', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					...formData,
					formType: 'partnership',
					source: 'Solo Biz Helper Application'
				})
			});
			
			if (response.ok) {
				dispatch('success', formData);
				window.location.href = '/thank-you?type=partnership';
			} else {
				throw new Error('Submission failed');
			}
		} catch (error) {
			if (import.meta.env.DEV) {
				console.error('Form submission error:', error);
			}
			errors.submit = 'There was an error submitting your application. Please try again.';
		} finally {
			loading = false;
		}
	}
	
	function handleStepChange() {
		// Clear errors when user makes changes
		errors = {};
	}
	
	$: canGoNext = currentStepValid;
	$: isLastStep = currentStep === totalSteps - 1;
	$: currentConfig = stepConfigs[currentStep];
</script>

<WizardContainer
	{currentStep}
	{totalSteps}
	title={currentConfig.title}
	subtitle={currentConfig.subtitle}
	canGoBack={currentStep > 0}
	{canGoNext}
	{isLastStep}
	{loading}
	on:next={nextStep}
	on:back={prevStep}
	on:submit={handleSubmit}
>
	{#if currentStep === 0}
		<FounderInfoStep 
			bind:formData 
			{errors} 
			on:change={handleStepChange}
		/>
	{:else if currentStep === 1}
		<BusinessBasicsStep 
			bind:formData 
			{errors} 
			on:change={handleStepChange}
		/>
	{:else if currentStep === 2}
		<BusinessDetailsStep 
			bind:formData 
			{errors} 
			on:change={handleStepChange}
		/>
	{:else if currentStep === 3}
		<PartnershipPreferencesStep 
			bind:formData 
			{errors} 
			on:change={handleStepChange}
		/>
	{:else if currentStep === 4}
		<VisionDetailsStep 
			bind:formData 
			{errors} 
			on:change={handleStepChange}
		/>
	{/if}
	
	{#if errors.submit}
		<div class="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
			<p class="text-red-600 text-sm">{errors.submit}</p>
		</div>
	{/if}
</WizardContainer>