<script lang="ts">
  import { SITE_CONFIG } from '$lib/config/site.config';
  import CTAButton from '$lib/components/ui/CTAButton.svelte';
</script>

<svelte:head>
  <title>Contact | {SITE_CONFIG.name}</title>
  <meta name="description" content="Get in touch with Bastion. Let's build your stronghold together." />
</svelte:head>

<section class="min-h-screen bg-bastion-black text-off-white py-24">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-16">
        <h1 class="text-5xl md:text-6xl font-bold font-display mb-4">
          Let's Talk
        </h1>
        <p class="text-xl text-stone-gray-300">
          Skip the small talk. Tell us what you're building.
        </p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Methods -->
        <div class="space-y-8">
          <div class="bg-fortress-gray-900 border-2 border-off-white p-8 shadow-brutalist">
            <h2 class="text-2xl font-bold mb-4 text-steel-blue-400">Quick Connect</h2>
            
            <div class="space-y-6">
              <div>
                <h3 class="font-bold mb-2">Email</h3>
                <a 
                  href="mailto:hello@bastion.build" 
                  class="text-lg text-steel-blue-400 hover:text-steel-blue-300 underline"
                >
                  hello@bastion.build
                </a>
              </div>
              
              <div>
                <h3 class="font-bold mb-2">Response Time</h3>
                <p class="text-stone-gray-300">
                  Usually within 24 hours. We're builders, not bureaucrats.
                </p>
              </div>
            </div>
          </div>
          
          <div class="bg-fortress-gray-900 border-2 border-off-white p-8 shadow-brutalist">
            <h2 class="text-2xl font-bold mb-4 text-steel-blue-400">Best For</h2>
            <ul class="space-y-3 text-stone-gray-300">
              <li class="flex items-start">
                <span class="text-steel-blue-400 mr-2">→</span>
                Founders ready to build their MVP
              </li>
              <li class="flex items-start">
                <span class="text-steel-blue-400 mr-2">→</span>
                Teams needing CTO-level support
              </li>
              <li class="flex items-start">
                <span class="text-steel-blue-400 mr-2">→</span>
                Anyone tired of agencies and their BS
              </li>
            </ul>
          </div>
        </div>
        
        <!-- CTA Section -->
        <div>
          <div class="bg-steel-blue-900 border-4 border-off-white p-8 shadow-brutalist text-center">
            <h2 class="text-3xl font-bold mb-4">Ready to Build?</h2>
            <p class="text-xl text-steel-blue-100 mb-8">
              Skip the emails. Fill out our wizard and get a custom quote in 24 hours.
            </p>
            <CTAButton 
              href="/build" 
              size="xl" 
              variant="yellow"
            >
              Start Build Wizard →
            </CTAButton>
          </div>
          
          <div class="mt-8 bg-fortress-gray-900 border-2 border-off-white p-8 shadow-brutalist">
            <h3 class="text-xl font-bold mb-4">What Happens Next?</h3>
            <ol class="space-y-3 text-stone-gray-300">
              <li class="flex items-start">
                <span class="text-steel-blue-400 mr-3 font-mono">1.</span>
                You fill out the wizard (7 quick steps)
              </li>
              <li class="flex items-start">
                <span class="text-steel-blue-400 mr-3 font-mono">2.</span>
                We review and scope your project
              </li>
              <li class="flex items-start">
                <span class="text-steel-blue-400 mr-3 font-mono">3.</span>
                You get a fixed-price quote
              </li>
              <li class="flex items-start">
                <span class="text-steel-blue-400 mr-3 font-mono">4.</span>
                We start building (if you're ready)
              </li>
            </ol>
          </div>
        </div>
      </div>
      
      <!-- FAQ Section -->
      <div class="mt-16">
        <h2 class="text-3xl font-bold text-center mb-12">Quick Questions</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-fortress-gray-900 border-2 border-off-white p-6">
            <h3 class="font-bold mb-2">Do you work with international clients?</h3>
            <p class="text-stone-gray-300">Yes. Good ideas don't have borders.</p>
          </div>
          
          <div class="bg-fortress-gray-900 border-2 border-off-white p-6">
            <h3 class="font-bold mb-2">Do you sign NDAs?</h3>
            <p class="text-stone-gray-300">Of course. Your ideas are safe with us.</p>
          </div>
          
          <div class="bg-fortress-gray-900 border-2 border-off-white p-6">
            <h3 class="font-bold mb-2">What if I don't know what I need?</h3>
            <p class="text-stone-gray-300">That's what discovery calls are for. We'll figure it out together.</p>
          </div>
          
          <div class="bg-fortress-gray-900 border-2 border-off-white p-6">
            <h3 class="font-bold mb-2">Can you work with my existing team?</h3>
            <p class="text-stone-gray-300">Yes. CTO-as-a-Service is perfect for this.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>