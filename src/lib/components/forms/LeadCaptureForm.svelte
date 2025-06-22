<script lang="ts">
	import { BaseButton, BaseInput } from '../ui';
	import { createEventDispatcher } from 'svelte';
	
	const dispatch = createEventDispatcher();
	
	// Form props
	export let formName: string = 'General Contact';
	export let serviceInterest: string = '';
	export let buttonText: string = 'Start Your Climb';
	export let compact: boolean = false;
	
	// Form state
	let loading = false;
	let submitted = false;
	let error = '';
	
	// Form data
	let formData = {
		firstName: '',
		lastName: '',
		email: '',
		companyName: '',
		phone: '',
		companyWebsite: '',
		serviceInterest: serviceInterest,
		monthlyBudget: '',
		timeframe: '',
		currentMarketing: '',
		painPoints: '',
		goals: '',
		decisionMaker: false
	};
	
	// Budget options
	const budgetOptions = [
		{ value: '', label: 'Select budget range...' },
		{ value: 'under-1k', label: 'Under $1,000/month' },
		{ value: '1k-5k', label: '$1,000 - $5,000/month' },
		{ value: '5k-10k', label: '$5,000 - $10,000/month' },
		{ value: '10k-25k', label: '$10,000 - $25,000/month' },
		{ value: 'over-25k', label: 'Over $25,000/month' }
	];
	
	// Timeframe options
	const timeframeOptions = [
		{ value: '', label: 'Select timeframe...' },
		{ value: 'asap', label: 'Ready to start immediately' },
		{ value: '30-days', label: 'Within 30 days' },
		{ value: '90-days', label: 'Within 90 days' },
		{ value: 'exploring', label: 'Just exploring options' }
	];
	
	async function handleSubmit() {
		if (loading) return;
		
		loading = true;
		error = '';
		
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
				submitted = true;
				dispatch('success', { leadId: result.leadId });
				
				// Redirect to thank you page after short delay
				setTimeout(() => {
					window.location.href = '/thank-you';
				}, 1500);
			} else {
				error = result.message || 'Something went wrong. Please try again.';
			}
		} catch (err) {
			console.error('Form submission error:', err);
			error = 'Network error. Please check your connection and try again.';
		} finally {
			loading = false;
		}
	}
	
	// Form validation
	$: isValid = formData.firstName.trim() && 
	             formData.lastName.trim() && 
	             formData.email.trim() && 
	             formData.email.includes('@');
</script>

<form on:submit|preventDefault={handleSubmit} class="space-y-6">
	{#if error}
		<div class="bg-red-50 border border-red-200 rounded-lg p-4">
			<div class="flex">
				<svg class="w-5 h-5 text-red-400 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
					<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
				</svg>
				<p class="text-red-700 text-sm">{error}</p>
			</div>
		</div>
	{/if}
	
	{#if submitted}
		<div class="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
			<svg class="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
			</svg>
			<h3 class="text-green-800 font-semibold mb-2">Thanks for reaching out!</h3>
			<p class="text-green-700 text-sm">We'll be in touch within 24 hours to start planning your climb.</p>
		</div>
	{:else}
		<!-- Name Fields -->
		<div class="grid {compact ? 'grid-cols-1' : 'md:grid-cols-2'} gap-4">
			<div>
				<label for="firstName" class="block text-sm font-medium text-granite-gray-700 mb-2">
					First Name *
				</label>
				<BaseInput
					id="firstName"
					bind:value={formData.firstName}
					placeholder="Your first name"
					required
					class="w-full"
				/>
			</div>
			<div>
				<label for="lastName" class="block text-sm font-medium text-granite-gray-700 mb-2">
					Last Name *
				</label>
				<BaseInput
					id="lastName"
					bind:value={formData.lastName}
					placeholder="Your last name"
					required
					class="w-full"
				/>
			</div>
		</div>
		
		<!-- Email -->
		<div>
			<label for="email" class="block text-sm font-medium text-granite-gray-700 mb-2">
				Email Address *
			</label>
			<BaseInput
				id="email"
				type="email"
				bind:value={formData.email}
				placeholder="your@email.com"
				required
				class="w-full"
			/>
		</div>
		
		{#if !compact}
			<!-- Company Info -->
			<div class="grid md:grid-cols-2 gap-4">
				<div>
					<label for="companyName" class="block text-sm font-medium text-granite-gray-700 mb-2">
						Company Name
					</label>
					<BaseInput
						id="companyName"
						bind:value={formData.companyName}
						placeholder="Your company"
						class="w-full"
					/>
				</div>
				<div>
					<label for="phone" class="block text-sm font-medium text-granite-gray-700 mb-2">
						Phone Number
					</label>
					<BaseInput
						id="phone"
						type="tel"
						bind:value={formData.phone}
						placeholder="(555) 123-4567"
						class="w-full"
					/>
				</div>
			</div>
			
			<!-- Budget & Timeframe -->
			<div class="grid md:grid-cols-2 gap-4">
				<div>
					<label for="monthlyBudget" class="block text-sm font-medium text-granite-gray-700 mb-2">
						Monthly Marketing Budget
					</label>
					<select
						id="monthlyBudget"
						bind:value={formData.monthlyBudget}
						class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-skyline-blue-500 focus:border-skyline-blue-500"
					>
						{#each budgetOptions as option}
							<option value={option.value}>{option.label}</option>
						{/each}
					</select>
				</div>
				<div>
					<label for="timeframe" class="block text-sm font-medium text-granite-gray-700 mb-2">
						Project Timeframe
					</label>
					<select
						id="timeframe"
						bind:value={formData.timeframe}
						class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-skyline-blue-500 focus:border-skyline-blue-500"
					>
						{#each timeframeOptions as option}
							<option value={option.value}>{option.label}</option>
						{/each}
					</select>
				</div>
			</div>
			
			<!-- Goals -->
			<div>
				<label for="goals" class="block text-sm font-medium text-granite-gray-700 mb-2">
					What are your main goals?
				</label>
				<textarea
					id="goals"
					bind:value={formData.goals}
					placeholder="Tell us what success looks like for your business..."
					rows="3"
					class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-skyline-blue-500 focus:border-skyline-blue-500 resize-vertical"
				></textarea>
			</div>
		{/if}
		
		<!-- Submit Button -->
		<BaseButton
			type="submit"
			variant="primary"
			size="lg"
			disabled={!isValid || loading}
			class="w-full btn-primary flex items-center justify-center"
		>
			{#if loading}
				<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
					<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
					<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
				</svg>
				Submitting...
			{:else}
				{buttonText}
				<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
				</svg>
			{/if}
		</BaseButton>
		
		<!-- Privacy Note -->
		<p class="text-xs text-granite-gray-500 text-center">
			We respect your privacy. Your information will only be used to contact you about your project.
		</p>
	{/if}
</form>