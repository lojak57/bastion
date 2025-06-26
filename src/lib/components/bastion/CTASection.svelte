<script lang="ts">
  import CTAButton from '$lib/components/ui/CTAButton.svelte';
  
  const taglines = [
    "Launch before the pitch.",
    "Founders launch here.",
    "Build your stronghold."
  ];
  
  const randomTagline = taglines[Math.floor(Math.random() * taglines.length)];
</script>

<section class="py-24 bg-steel-blue-600 text-off-white relative overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-steel-blue-600 via-steel-blue-700 to-steel-blue-800"></div>
  
  <div class="relative container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-5xl md:text-6xl font-bold font-display mb-8">
        Ready to Build?
      </h2>
      
      <p class="text-2xl mb-12 text-steel-blue-100">
        Stop talking. Start shipping.
      </p>
      
      <div class="space-y-6">
        <CTAButton 
          href="/build" 
          size="xl" 
          variant="green"
        >
          Scope My Build →
        </CTAButton>
        
        <p class="text-3xl font-display font-bold">
          {randomTagline}
        </p>
      </div>
    </div>
  </div>
</section>