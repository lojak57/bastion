<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import WizardContainer from './WizardContainer.svelte';
	import WizardStep from './WizardStep.svelte';
	import LuxuryInput from '../ui/LuxuryInput.svelte';
	
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
	
	// Budget and timeframe options
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
	
	// Reactive validation for navigation
	$: canGoNext = currentStep === 0 ? validateStep(0) : 
	              currentStep === 1 ? validateStep(1) :
	              currentStep === 2 ? validateStep(2) : 
	              validateStep(3);
	
	$: canGoBack = currentStep > 0;
	$: isLastStep = currentStep === totalSteps - 1;
	
	// Step configurations
	$: stepConfig = [
		{
			title: 'Let\'s get started',
			subtitle: 'First, tell us a bit about yourself'
		},
		{
			title: 'About your business',
			subtitle: 'Help us understand your company'
		},
		{
			title: 'Project details',
			subtitle: 'What type of help are you looking for?'
		},
		{
			title: 'Your goals',
			subtitle: 'Finally, tell us about your vision'
		}
	];
</script>

<WizardContainer 
	{currentStep} 
	{totalSteps} 
	title={stepConfig[currentStep].title}
	subtitle={stepConfig[currentStep].subtitle}
	{canGoBack}
	{canGoNext}
	{isLastStep}
	{loading}
	on:next={handleNext}
	on:back={handleBack}
	on:submit={handleSubmit}
>
	{#if currentStep === 0}
		<WizardStep 
			title="Nice to meet you!"
			description="Let's start with the basics so we can personalize your experience."
			icon="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
		>
			<div class="form-grid">
				<LuxuryInput
					type="text"
					bind:value={formData.firstName}
					label="First Name"
					placeholder="John"
					required
					error={errors.firstName}
				/>
				<LuxuryInput
					type="text"
					bind:value={formData.lastName}
					label="Last Name"
					placeholder="Smith"
					required
					error={errors.lastName}
				/>
			</div>
			<LuxuryInput
				type="email"
				bind:value={formData.email}
				label="Email Address"
				placeholder="john@company.com"
				required
				error={errors.email}
				hint="We'll use this to send you updates and schedule your discovery call"
			/>
		</WizardStep>
	{:else if currentStep === 1}
		<WizardStep 
			title="Tell us about your business"
			description="This helps us understand your industry and tailor our approach."
			icon="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
		>
			<LuxuryInput
				type="text"
				bind:value={formData.companyName}
				label="Company Name"
				placeholder="Your Company LLC"
				required
				error={errors.companyName}
			/>
			<div class="form-grid">
				<LuxuryInput
					type="tel"
					bind:value={formData.phone}
					label="Phone Number"
					placeholder="(555) 123-4567"
					error={errors.phone}
					hint="Optional, but helpful for quick questions"
				/>
				<LuxuryInput
					type="url"
					bind:value={formData.companyWebsite}
					label="Current Website"
					placeholder="https://yourcompany.com"
					hint="If you have one"
				/>
			</div>
		</WizardStep>
	{:else if currentStep === 2}
		<WizardStep 
			title="Project scope"
			description="Help us understand your budget and timeline so we can recommend the best approach."
			icon="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
		>
			<div class="select-container">
				<label class="luxury-label">
					Monthly Marketing Budget *
				</label>
				<select 
					bind:value={formData.monthlyBudget}
					class="luxury-select"
					class:error={errors.monthlyBudget}
				>
					<option value="">Select your budget range...</option>
					{#each budgetOptions as option}
						<option value={option.value}>{option.label}</option>
					{/each}
				</select>
				{#if errors.monthlyBudget}
					<div class="luxury-error">
						<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
						</svg>
						{errors.monthlyBudget}
					</div>
				{/if}
			</div>
			
			<div class="select-container">
				<label class="luxury-label">
					Project Timeframe *
				</label>
				<select 
					bind:value={formData.timeframe}
					class="luxury-select"
					class:error={errors.timeframe}
				>
					<option value="">When would you like to start?</option>
					{#each timeframeOptions as option}
						<option value={option.value}>{option.label}</option>
					{/each}
				</select>
				{#if errors.timeframe}
					<div class="luxury-error">
						<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
						</svg>
						{errors.timeframe}
					</div>
				{/if}
			</div>
		</WizardStep>
	{:else if currentStep === 3}
		<WizardStep 
			title="Your vision"
			description="Tell us about your goals so we can create the perfect strategy for your business."
			icon="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
		>
			<div class="textarea-container">
				<label class="luxury-label">
					What are your main goals? *
				</label>
				<textarea
					bind:value={formData.goals}
					placeholder="Tell us what success looks like for your business. Are you looking to increase sales, improve brand awareness, generate more leads, or something else?"
					class="luxury-textarea"
					class:error={errors.goals}
					rows="4"
				></textarea>
				{#if errors.goals}
					<div class="luxury-error">
						<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
						</svg>
						{errors.goals}
					</div>
				{/if}
			</div>
			
			<div class="textarea-container">
				<label class="luxury-label">
					Current marketing situation
				</label>
				<textarea
					bind:value={formData.currentMarketing}
					placeholder="What are you doing for marketing right now? What's working? What isn't? (Optional)"
					class="luxury-textarea"
					rows="3"
				></textarea>
			</div>
			
			{#if errors.submit}
				<div class="luxury-error">
					<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
					</svg>
					{errors.submit}
				</div>
			{/if}
		</WizardStep>
	{/if}
</WizardContainer>

<style>
	.form-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 16px;
	}
	
	.select-container,
	.textarea-container {
		display: flex;
		flex-direction: column;
		gap: 8px;
		width: 100%;
	}
	
	.luxury-label {
		font-size: 14px;
		font-weight: 600;
		color: #374151;
		display: flex;
		align-items: center;
		gap: 4px;
	}
	
	.luxury-select {
		width: 100%;
		padding: 16px 20px;
		font-size: 16px;
		color: #111827;
		background: #ffffff;
		border: 2px solid #e5e7eb;
		border-radius: 12px;
		transition: all 0.2s ease;
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
		appearance: none;
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
		background-position: right 16px center;
		background-repeat: no-repeat;
		background-size: 1.5em 1.5em;
		padding-right: 48px;
	}
	
	.luxury-select:focus {
		border-color: #1C4D72;
		box-shadow: 0 0 0 3px rgba(28, 77, 114, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
		outline: none;
	}
	
	.luxury-select.error {
		border-color: #dc2626;
		box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
	}
	
	.luxury-textarea {
		width: 100%;
		padding: 16px 20px;
		font-size: 16px;
		color: #111827;
		background: #ffffff;
		border: 2px solid #e5e7eb;
		border-radius: 12px;
		transition: all 0.2s ease;
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
		resize: vertical;
		font-family: inherit;
		line-height: 1.5;
	}
	
	.luxury-textarea:focus {
		border-color: #1C4D72;
		box-shadow: 0 0 0 3px rgba(28, 77, 114, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
		outline: none;
	}
	
	.luxury-textarea.error {
		border-color: #dc2626;
		box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
	}
	
	.luxury-textarea::placeholder {
		color: #9ca3af;
		font-weight: 400;
	}
	
	.luxury-error {
		display: flex;
		align-items: center;
		gap: 6px;
		color: #dc2626;
		font-size: 14px;
		font-weight: 500;
	}
	
	/* Mobile responsiveness */
	@media (max-width: 640px) {
		.form-grid {
			grid-template-columns: 1fr;
		}
	}
</style>