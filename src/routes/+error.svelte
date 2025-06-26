<script lang="ts">
  import { page } from '$app/stores';
  import { SITE_CONFIG } from '$lib/config/site.config';
  import CTAButton from '$lib/components/ui/CTAButton.svelte';
  
  $: statusCode = $page.status;
  $: errorMessage = $page.error?.message || 'Something went wrong';
  
  const errorMessages: Record<number, { title: string; subtitle: string }> = {
    404: {
      title: "Lost in the Fortress",
      subtitle: "This page must be in another stronghold."
    },
    403: {
      title: "Access Denied", 
      subtitle: "You need higher clearance to enter this area."
    },
    500: {
      title: "System Malfunction",
      subtitle: "Our builders are fixing this. Stand by."
    },
    503: {
      title: "Under Construction",
      subtitle: "We're upgrading the fortress. Check back soon."
    }
  };
  
  $: errorContent = errorMessages[statusCode] || {
    title: "Unexpected Error",
    subtitle: errorMessage
  };
</script>

<svelte:head>
  <title>{statusCode} - {errorContent.title} | {SITE_CONFIG.name}</title>
  <meta name="description" content="{errorContent.title} - {errorContent.subtitle}" />
</svelte:head>

<section class="min-h-screen bg-bastion-black text-off-white flex items-center justify-center">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-2xl mx-auto text-center">
      <!-- Error Code Display -->
      <div class="mb-8">
        <h1 class="text-9xl md:text-[12rem] font-black font-display text-fortress-gray-900 select-none">
          {statusCode}
        </h1>
      </div>
      
      <!-- Error Message -->
      <div class="bg-fortress-gray-900 border-4 border-off-white p-8 shadow-brutalist mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          {errorContent.title}
        </h2>
        <p class="text-xl text-stone-gray-300">
          {errorContent.subtitle}
        </p>
      </div>
      
      <!-- Actions -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <CTAButton 
          href="/" 
          size="lg" 
          variant="yellow"
        >
          Return to Base →
        </CTAButton>
        
        {#if statusCode === 404}
          <CTAButton 
            href="/build" 
            size="lg" 
            variant="green"
          >
            Start Building →
          </CTAButton>
        {/if}
      </div>
      
      <!-- Additional Help Text -->
      <div class="mt-12 text-stone-gray-400">
        <p class="mb-2">Need help? Reach out:</p>
        <a 
          href="mailto:hello@bastion.build" 
          class="text-steel-blue-400 hover:text-steel-blue-300 underline"
        >
          hello@bastion.build
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  /* Glitch effect for error code */
  @keyframes glitch {
    0%, 100% {
      text-shadow: 
        2px 2px 0 var(--steel-blue),
        -2px -2px 0 var(--off-white);
    }
    25% {
      text-shadow: 
        -2px 2px 0 var(--steel-blue),
        2px -2px 0 var(--off-white);
    }
    50% {
      text-shadow: 
        2px -2px 0 var(--steel-blue),
        -2px 2px 0 var(--off-white);
    }
    75% {
      text-shadow: 
        -2px -2px 0 var(--steel-blue),
        2px 2px 0 var(--off-white);
    }
  }
  
  h1 {
    animation: glitch 2s infinite;
  }
</style>