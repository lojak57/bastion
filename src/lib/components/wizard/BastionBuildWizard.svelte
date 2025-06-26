<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import WizardContainer from './WizardContainer.svelte';
  import WizardStep from './WizardStep.svelte';
  import { 
    IdeaStep, 
    ProblemStep, 
    UrgencyStep, 
    BudgetStep, 
    TechStep, 
    SuccessStep, 
    ContactStep 
  } from './bastion';
  
  let currentStep = 0;
  let formData: any = {};
  let isSubmitting = false;
  
  const steps = [
    { component: IdeaStep, title: 'The Idea' },
    { component: ProblemStep, title: 'The Problem' },
    { component: UrgencyStep, title: 'Urgency' },
    { component: BudgetStep, title: 'Budget' },
    { component: TechStep, title: 'Tech Stack' },
    { component: SuccessStep, title: 'Success' },
    { component: ContactStep, title: 'Contact' }
  ];
  
  const updateData = (newData: any) => {
    formData = { ...formData, ...newData };
  };
  
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      currentStep++;
    }
  };
  
  const prevStep = () => {
    if (currentStep > 0) {
      currentStep--;
    }
  };
  
  const isStepValid = () => {
    switch (currentStep) {
      case 0: // Idea
        return formData.idea?.length > 10;
      case 1: // Problem
        return formData.problem?.length > 10;
      case 2: // Urgency
        return !!formData.urgency;
      case 3: // Budget
        return !!formData.budget;
      case 4: // Tech
        return !!formData.techLevel;
      case 5: // Success
        return formData.success?.length > 10;
      case 6: // Contact
        return formData.firstName && formData.lastName && formData.email;
      default:
        return false;
    }
  };
  
  const handleSubmit = async () => {
    if (!isStepValid()) return;
    
    isSubmitting = true;
    
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'bastion-build-wizard',
          formName: 'Bastion Build Wizard',
          submittedAt: new Date().toISOString(),
          pageUrl: window.location.href,
          leadSource: 'Bastion Marketing Site',
          tags: [
            'site:bastion',
            'form:build-wizard',
            `budget:${formData.budget}`,
            `urgency:${formData.urgency}`,
            formData.techLevel === 'specific' ? `tech:${formData.specificStack}` : `tech:${formData.techLevel}`
          ]
        }),
      });
      
      if (response.ok) {
        goto('/thank-you');
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      isSubmitting = false;
    }
  };
</script>

<div class="bg-fortress-gray-900 border-4 border-off-white shadow-brutalist p-8 max-w-3xl mx-auto">
  <h2 class="text-3xl font-bold text-center mb-8">Bastion Build Wizard</h2>
  <div class="mb-8">
    <!-- Progress Bar -->
    <div class="flex items-center justify-between mb-4">
      {#each steps as step, i}
        <div class="flex items-center {i < steps.length - 1 ? 'flex-1' : ''}">
          <div class="flex items-center justify-center w-10 h-10 rounded-full border-2 {i <= currentStep ? 'bg-steel-blue-600 border-steel-blue-600 text-off-white' : 'bg-fortress-gray-800 border-fortress-gray-700 text-stone-gray-500'}">
            {i + 1}
          </div>
          {#if i < steps.length - 1}
            <div class="flex-1 h-1 mx-2 {i < currentStep ? 'bg-steel-blue-600' : 'bg-fortress-gray-700'}"></div>
          {/if}
        </div>
      {/each}
    </div>
    <p class="text-sm text-stone-gray-400 text-center">
      Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
    </p>
  </div>
  
  <WizardStep>
    <svelte:component 
      this={steps[currentStep].component} 
      data={formData} 
      {updateData} 
    />
  </WizardStep>
  
  <div class="flex justify-between mt-8">
    <button
      on:click={prevStep}
      disabled={currentStep === 0}
      class="px-6 py-3 bg-fortress-gray-800 text-off-white font-semibold hover:bg-fortress-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      ← Back
    </button>
    
    {#if currentStep === steps.length - 1}
      <button
        on:click={handleSubmit}
        disabled={!isStepValid() || isSubmitting}
        class="px-8 py-3 bg-steel-blue-600 text-off-white font-semibold hover:bg-steel-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-brutalist-sm"
      >
        {isSubmitting ? 'Submitting...' : 'Submit →'}
      </button>
    {:else}
      <button
        on:click={nextStep}
        disabled={!isStepValid()}
        class="px-6 py-3 bg-steel-blue-600 text-off-white font-semibold hover:bg-steel-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Next →
      </button>
    {/if}
  </div>
</div>