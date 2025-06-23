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
	
	// Step validation
	function validateStep(step: number): boolean {
		errors = {};
		
		switch (step) {
			case 0: // Founder Info
				if (!formData.firstName.trim()) errors.firstName = 'First name is required';
				if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
				if (!formData.email.trim()) errors.email = 'Email is required';
				if (!formData.phone.trim()) errors.phone = 'Phone is required';
				break;
				
			case 1: // Business Basics
				if (!formData.companyName.trim()) errors.companyName = 'Company name is required';
				if (!formData.industry) errors.industry = 'Industry is required';
				if (!formData.foundedYear) errors.foundedYear = 'Founded year is required';
				break;
				
			case 2: // Business Details
				if (!formData.currentRevenue) errors.currentRevenue = 'Current revenue is required';
				if (!formData.teamSize) errors.teamSize = 'Team size is required';
				if (!formData.fundingStatus) errors.fundingStatus = 'Funding status is required';
				break;
				
			case 3: // Partnership Preferences
				if (!formData.partnershipType) errors.partnershipType = 'Partnership type is required';
				if (!formData.marketingBudget) errors.marketingBudget = 'Budget range is required';
				if (!formData.timeframe) errors.timeframe = 'Timeframe is required';
				break;
				
			case 4: // Vision & Details
				if (!formData.businessDescription.trim()) errors.businessDescription = 'Business description is required';
				if (!formData.uniqueValue.trim()) errors.uniqueValue = 'Unique value proposition is required';
				if (!formData.goals.trim()) errors.goals = 'Growth goals are required';
				if (!formData.whyPartnership.trim()) errors.whyPartnership = 'Please explain why you want a partnership';
				break;
		}
		
		return Object.keys(errors).length === 0;
	}
	
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
		}
	}
	
	function prevStep() {
		if (currentStep > 0) {
			currentStep--;
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
			console.error('Form submission error:', error);
			errors.submit = 'There was an error submitting your application. Please try again.';
		} finally {
			loading = false;
		}
	}
	
	function handleStepChange(formData: any) {
		// Update form data when step changes
	}
	
	$: canGoNext = validateStep(currentStep);
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