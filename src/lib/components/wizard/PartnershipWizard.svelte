<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import WizardContainer from './WizardContainer.svelte';
	import WizardStep from './WizardStep.svelte';
	import LuxuryInput from '../ui/LuxuryInput.svelte';
	
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
	
	// Options
	const industries = [
		'Technology', 'Healthcare', 'Finance', 'E-commerce', 'Food & Beverage',
		'Professional Services', 'Real Estate', 'Manufacturing', 'Education',
		'Non-profit', 'Retail', 'Hospitality', 'Other'
	];
	
	const revenueRanges = [
		{ value: 'pre-revenue', label: 'Pre-revenue' },
		{ value: 'under-10k', label: 'Under $10k/month' },
		{ value: '10k-25k', label: '$10k - $25k/month' },
		{ value: '25k-50k', label: '$25k - $50k/month' },
		{ value: '50k-100k', label: '$50k - $100k/month' },
		{ value: 'over-100k', label: 'Over $100k/month' }
	];
	
	const teamSizes = [
		'Just me', '2-3 people', '4-10 people', '11-25 people', 'Over 25 people'
	];
	
	const fundingStatuses = [
		'Bootstrapped', 'Friends & Family', 'Angel Investment', 'Seed Round',
		'Series A+', 'Government Grant', 'Revenue-based Financing'
	];
	
	const partnershipTypes = [
		{ value: 'revenue-share', label: 'Revenue Share Partnership' },
		{ value: 'micro-retainer', label: 'Micro Retainer Model' },
		{ value: 'equity', label: 'Equity Partnership' },
		{ value: 'flexible', label: 'Open to discussion' }
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
				if (!formData.industry) errors.industry = 'Please select an industry';
				if (!formData.foundedYear) errors.foundedYear = 'Founded year is required';
				else if (isNaN(Number(formData.foundedYear)) || Number(formData.foundedYear) < 1900 || Number(formData.foundedYear) > new Date().getFullYear()) {
					errors.foundedYear = 'Please enter a valid year';
				}
				break;
			case 2:
				if (!formData.currentRevenue) errors.currentRevenue = 'Please select current revenue range';
				if (!formData.teamSize) errors.teamSize = 'Please select team size';
				break;
			case 3:
				if (!formData.partnershipType) errors.partnershipType = 'Please select partnership preference';
				if (!formData.timeframe) errors.timeframe = 'Please select timeframe';
				break;
			case 4:
				if (!formData.businessDescription.trim()) errors.businessDescription = 'Business description is required';
				if (!formData.uniqueValue.trim()) errors.uniqueValue = 'Please describe your unique value proposition';
				if (!formData.goals.trim()) errors.goals = 'Please describe your goals';
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
				serviceInterest: 'solo-biz-helper',
				pageUrl: window.location.href,
				formName: 'Solo Biz Helper Partnership Application',
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
					window.location.href = '/thank-you?type=partnership';
				}, 1500);
			} else {
				throw new Error(result.message || 'Something went wrong');
			}
		} catch (err) {
			console.error('Partnership application error:', err);
			errors.submit = 'Network error. Please check your connection and try again.';
		} finally {
			loading = false;
		}
	}
	
	// Reactive validation for navigation
	$: canGoNext = validateStep(currentStep);
	$: canGoBack = currentStep > 0;
	$: isLastStep = currentStep === totalSteps - 1;
	
	// Step configurations
	$: stepConfig = [
		{
			title: 'Tell us about yourself',
			subtitle: 'Let\'s start with the founder details'
		},
		{
			title: 'Your business basics',
			subtitle: 'Help us understand your company'
		},
		{
			title: 'Business metrics',
			subtitle: 'Share some key numbers with us'
		},
		{
			title: 'Partnership preferences',
			subtitle: 'What type of partnership interests you?'
		},
		{
			title: 'Your vision',
			subtitle: 'Tell us about your business and goals'
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
			title="Welcome to Solo Biz Helper"
			description="We're excited to learn about you and potentially partner together."
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
				hint="We'll use this for all partnership communications"
			/>
			<LuxuryInput
				type="tel"
				bind:value={formData.phone}
				label="Phone Number"
				placeholder="(555) 123-4567"
				hint="For discovery calls and quick questions"
			/>
		</WizardStep>
	{:else if currentStep === 1}
		<WizardStep 
			title="About your business"
			description="Tell us the basics about your company and when you started."
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
			
			<LuxuryInput
				type="url"
				bind:value={formData.companyWebsite}
				label="Company Website"
				placeholder="https://yourcompany.com"
				hint="If you have one"
			/>
			
			<div class="form-grid">
				<div class="select-container">
					<label class="luxury-label">Industry *</label>
					<select 
						bind:value={formData.industry}
						class="luxury-select"
						class:error={errors.industry}
					>
						<option value="">Select your industry...</option>
						{#each industries as industry}
							<option value={industry}>{industry}</option>
						{/each}
					</select>
					{#if errors.industry}
						<div class="luxury-error">
							<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
							</svg>
							{errors.industry}
						</div>
					{/if}
				</div>
				
				<LuxuryInput
					type="number"
					bind:value={formData.foundedYear}
					label="Founded Year"
					placeholder="2023"
					required
					error={errors.foundedYear}
				/>
			</div>
		</WizardStep>
	{:else if currentStep === 2}
		<WizardStep 
			title="Business metrics"
			description="Help us understand your current business performance and projections."
			icon="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
		>
			<div class="select-container">
				<label class="luxury-label">Current Monthly Revenue *</label>
				<select 
					bind:value={formData.currentRevenue}
					class="luxury-select"
					class:error={errors.currentRevenue}
				>
					<option value="">Select revenue range...</option>
					{#each revenueRanges as range}
						<option value={range.value}>{range.label}</option>
					{/each}
				</select>
				{#if errors.currentRevenue}
					<div class="luxury-error">
						<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
						</svg>
						{errors.currentRevenue}
					</div>
				{/if}
			</div>
			
			<div class="select-container">
				<label class="luxury-label">Revenue in 12 months</label>
				<select 
					bind:value={formData.revenueProjection}
					class="luxury-select"
				>
					<option value="">Projected revenue...</option>
					{#each revenueRanges as range}
						<option value={range.value}>{range.label}</option>
					{/each}
				</select>
			</div>
			
			<div class="form-grid">
				<div class="select-container">
					<label class="luxury-label">Team Size *</label>
					<select 
						bind:value={formData.teamSize}
						class="luxury-select"
						class:error={errors.teamSize}
					>
						<option value="">Select team size...</option>
						{#each teamSizes as size}
							<option value={size}>{size}</option>
						{/each}
					</select>
					{#if errors.teamSize}
						<div class="luxury-error">
							<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
							</svg>
							{errors.teamSize}
						</div>
					{/if}
				</div>
				
				<div class="select-container">
					<label class="luxury-label">Funding Status</label>
					<select 
						bind:value={formData.fundingStatus}
						class="luxury-select"
					>
						<option value="">Select funding status...</option>
						{#each fundingStatuses as status}
							<option value={status}>{status}</option>
						{/each}
					</select>
				</div>
			</div>
		</WizardStep>
	{:else if currentStep === 3}
		<WizardStep 
			title="Partnership structure"
			description="What type of partnership arrangement are you most interested in?"
			icon="M13 10V3L4 14h7v7l9-11h-7z"
		>
			<div class="partnership-options">
				{#each partnershipTypes as type}
					<label class="partnership-option" class:selected={formData.partnershipType === type.value}>
						<input 
							type="radio" 
							bind:group={formData.partnershipType} 
							value={type.value}
							class="partnership-radio"
						/>
						<div class="partnership-content">
							<div class="partnership-title">{type.label}</div>
							<div class="partnership-description">
								{#if type.value === 'revenue-share'}
									Performance-based partnership where compensation aligns with your business growth.
								{:else if type.value === 'micro-retainer'}
									Accessible entry point with modest monthly commitment for emerging businesses.
								{:else if type.value === 'equity'}
									Long-term partnership with shared ownership and aligned incentives.
								{:else}
									We'll explore the partnership structure that best fits your business model.
								{/if}
							</div>
						</div>
					</label>
				{/each}
			</div>
			
			{#if errors.partnershipType}
				<div class="luxury-error">
					<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
					</svg>
					{errors.partnershipType}
				</div>
			{/if}
			
			<LuxuryInput
				type="text"
				bind:value={formData.marketingBudget}
				label="Available Marketing Budget"
				placeholder="Please describe your budget considerations"
				hint="Help us understand your investment capacity and preferences"
			/>
			
			<LuxuryInput
				type="text"
				bind:value={formData.timeframe}
				label="When would you like to start?"
				placeholder="Immediately, within 30 days, etc."
				required
				error={errors.timeframe}
			/>
		</WizardStep>
	{:else if currentStep === 4}
		<WizardStep 
			title="Tell us your story"
			description="Help us understand your vision and why you'd be a great partner."
			icon="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
		>
			<div class="textarea-container">
				<label class="luxury-label">Business Description *</label>
				<textarea
					bind:value={formData.businessDescription}
					placeholder="Describe your business, what you do, and who you serve. What problem are you solving?"
					class="luxury-textarea"
					class:error={errors.businessDescription}
					rows="4"
				></textarea>
				{#if errors.businessDescription}
					<div class="luxury-error">
						<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
						</svg>
						{errors.businessDescription}
					</div>
				{/if}
			</div>
			
			<div class="textarea-container">
				<label class="luxury-label">Unique Value Proposition *</label>
				<textarea
					bind:value={formData.uniqueValue}
					placeholder="What makes your business different? What's your competitive advantage?"
					class="luxury-textarea"
					class:error={errors.uniqueValue}
					rows="3"
				></textarea>
				{#if errors.uniqueValue}
					<div class="luxury-error">
						<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
						</svg>
						{errors.uniqueValue}
					</div>
				{/if}
			</div>
			
			<div class="textarea-container">
				<label class="luxury-label">Goals & Vision *</label>
				<textarea
					bind:value={formData.goals}
					placeholder="Where do you see your business in 2-3 years? What are your main goals?"
					class="luxury-textarea"
					class:error={errors.goals}
					rows="3"
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
				<label class="luxury-label">Why Partnership?</label>
				<textarea
					bind:value={formData.whyPartnership}
					placeholder="Why are you interested in partnering with us instead of traditional marketing services?"
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
	
	.partnership-options {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	
	.partnership-option {
		position: relative;
		background: white;
		border: 2px solid #e5e7eb;
		border-radius: 12px;
		padding: 20px;
		cursor: pointer;
		transition: all 0.2s ease;
		display: block;
	}
	
	.partnership-option:hover {
		border-color: #cbd5e1;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
	}
	
	.partnership-option.selected {
		border-color: #1C4D72;
		background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
		box-shadow: 0 0 0 3px rgba(28, 77, 114, 0.1);
	}
	
	.partnership-radio {
		position: absolute;
		opacity: 0;
		pointer-events: none;
	}
	
	.partnership-content {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
	
	.partnership-title {
		font-size: 16px;
		font-weight: 600;
		color: #1e293b;
	}
	
	.partnership-description {
		font-size: 14px;
		color: #64748b;
		line-height: 1.5;
	}
	
	/* Mobile responsiveness */
	@media (max-width: 640px) {
		.form-grid {
			grid-template-columns: 1fr;
		}
		
		.partnership-option {
			padding: 16px;
		}
	}
</style>