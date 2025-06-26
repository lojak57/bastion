<script lang="ts">
  import { SITE_CONFIG } from '$lib/config/site.config';
  import BastionBuildWizard from '$lib/components/wizard/BastionBuildWizard.svelte';
</script>

<svelte:head>
  <title>Build Wizard | {SITE_CONFIG.name}</title>
  <meta name="description" content="Pre-qualify your project and get a custom quote. Tell us what you're building and we'll scope it out." />
</svelte:head>

<section class="min-h-screen bg-bastion-black text-off-white py-12">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold font-display mb-4">
          Let's Build Something
        </h1>
        <p class="text-xl text-stone-gray-300">
          Pre-qualify your project, eliminate tire-kickers, make founders feel seen.
        </p>
      </div>
      
      <BastionBuildWizard />
      
      <div class="mt-12 text-center text-sm text-stone-gray-500">
        <p>Your information is secure and will never be shared.</p>
        <p class="mt-2">Expect a response within 24 hours with scoped pricing and a custom walkthrough.</p>
      </div>
    </div>
  </div>
</section>