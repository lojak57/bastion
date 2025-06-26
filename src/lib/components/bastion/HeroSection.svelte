<script lang="ts">
  import { SITE_CONFIG } from '$lib/config/site.config';
  import CTAButton from '$lib/components/ui/CTAButton.svelte';
</script>

<section class="relative min-h-screen bg-bastion-black text-off-white overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-bastion-black via-fortress-gray-900 to-bastion-black"></div>
  
  <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-5xl md:text-7xl font-bold font-display tracking-tight mb-6">
          Build Your Stronghold
        </h1>
        <p class="text-2xl md:text-3xl font-display text-stone-gray-300 mb-8">
          {SITE_CONFIG.pricingHook}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div class="bg-fortress-gray-900 border-2 border-off-white p-8 shadow-brutalist">
          <h2 class="text-3xl font-bold mb-4">MVP Build</h2>
          <p class="text-4xl font-mono text-steel-blue-400 mb-4">{SITE_CONFIG.mvpPrice}</p>
          <ul class="space-y-2 text-stone-gray-300">
            <li>✓ Discovery call</li>
            <li>✓ UI/UX + full-stack build</li>
            <li>✓ 3–6 week timeline</li>
            <li>✓ Complete ownership</li>
          </ul>
        </div>
        
        <div class="bg-fortress-gray-900 border-2 border-off-white p-8 shadow-brutalist">
          <h2 class="text-3xl font-bold mb-4">CTO-as-a-Service</h2>
          <div class="mb-4">
            <p class="text-2xl font-mono text-steel-blue-400">{SITE_CONFIG.ctoAdvisoryPrice} - {SITE_CONFIG.ctoFullPrice}</p>
            <p class="text-sm text-stone-gray-400">Advisory to Full Service</p>
          </div>
          <ul class="space-y-2 text-stone-gray-300">
            <li>✓ Strategic guidance or hands-on</li>
            <li>✓ Scale up/down anytime</li>
            <li>✓ No equity required</li>
            <li>✓ Month-to-month</li>
          </ul>
        </div>
      </div>

      <div class="text-center space-y-4">
        <CTAButton 
          href="/build" 
          size="xl" 
          variant="yellow"
        >
          Scope My Build →
        </CTAButton>
        
        <div class="text-stone-gray-400 space-y-2">
          <p class="font-mono">Fast. Real. Yours.</p>
          <p class="text-sm">MVPs that don't suck and partners like a CTO when you're ready.</p>
        </div>
      </div>
    </div>
  </div>
</section>