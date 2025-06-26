<script lang="ts">
  import { SITE_CONFIG } from '$lib/config/site.config';
  import CTAButton from '$lib/components/ui/CTAButton.svelte';
</script>

<svelte:head>
  <title>Pricing | {SITE_CONFIG.name}</title>
  <meta name="description" content="Side-by-side, brutalist, no-bullshit pricing. MVP Build: {SITE_CONFIG.mvpPrice} one-time. CTO-as-a-Service: {SITE_CONFIG.ctoPrice}." />
</svelte:head>

<section class="min-h-screen bg-bastion-black text-off-white py-24">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-5xl md:text-6xl font-bold font-display text-center mb-4">
        Pricing
      </h1>
      <p class="text-xl text-center text-stone-gray-300 mb-16">
        Side-by-side, brutalist, no-bullshit.
      </p>
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <!-- MVP Build Card -->
        <div class="bg-fortress-gray-900 border-4 border-off-white p-8 shadow-brutalist">
          <div class="mb-8">
            <h2 class="text-3xl font-bold mb-2">MVP Build</h2>
            <p class="text-5xl font-mono text-steel-blue-400">{SITE_CONFIG.mvpPrice}</p>
            <p class="text-stone-gray-400">one-time</p>
          </div>
          
          <div class="space-y-6 mb-8">
            <div>
              <h3 class="font-bold text-lg mb-2">What's included:</h3>
              <ul class="space-y-2 text-stone-gray-300">
                <li class="flex items-start">
                  <span class="text-steel-blue-400 mr-2">✓</span>
                  <span>Discovery call to scope your product</span>
                </li>
                <li class="flex items-start">
                  <span class="text-steel-blue-400 mr-2">✓</span>
                  <span>Professional UI/UX design</span>
                </li>
                <li class="flex items-start">
                  <span class="text-steel-blue-400 mr-2">✓</span>
                  <span>Full-stack development</span>
                </li>
                <li class="flex items-start">
                  <span class="text-steel-blue-400 mr-2">✓</span>
                  <span>3–6 week timeline</span>
                </li>
                <li class="flex items-start">
                  <span class="text-steel-blue-400 mr-2">✓</span>
                  <span>Complete code ownership</span>
                </li>
                <li class="flex items-start">
                  <span class="text-steel-blue-400 mr-2">✓</span>
                  <span>Deployment & handoff</span>
                </li>
                <li class="flex items-start">
                  <span class="text-steel-blue-400 mr-2">✓</span>
                  <span>30-day support window</span>
                </li>
                <li class="flex items-start">
                  <span class="text-steel-blue-400 mr-2">✓</span>
                  <span>Client portal access</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 class="font-bold text-lg mb-2">Best for:</h3>
              <p class="text-stone-gray-300">
                Founders who need a working product fast. Perfect for testing ideas, 
                closing funding rounds, or launching before competitors.
              </p>
            </div>
          </div>
          
          <CTAButton 
            href="/build" 
            size="md" 
            variant="yellow"
            fullWidth={true}
          >
            Start MVP Build →
          </CTAButton>
        </div>
        
        <!-- CTO Advisory Card -->
        <div class="bg-fortress-gray-900 border-4 border-off-white p-8 shadow-brutalist">
          <div class="mb-8">
            <p class="text-sm font-mono text-stone-gray-400 mb-2">LIGHT TOUCH</p>
            <h2 class="text-2xl font-bold mb-2">CTO Advisory</h2>
            <p class="text-5xl font-mono text-steel-blue-400">$1.5K</p>
            <p class="text-stone-gray-400">per month</p>
          </div>
          
          <div class="space-y-6 mb-8">
            <div>
              <h3 class="font-bold text-lg mb-2">What's included:</h3>
              <ul class="space-y-2 text-stone-gray-300">
                <li class="flex items-start">
                  <span class="text-steel-blue-400 mr-2">✓</span>
                  <span>Bi-weekly 1-hour calls</span>
                </li>
                <li class="flex items-start">
                  <span class="text-steel-blue-400 mr-2">✓</span>
                  <span>Architecture reviews</span>
                </li>
                <li class="flex items-start">
                  <span class="text-steel-blue-400 mr-2">✓</span>
                  <span>Vendor/contractor vetting</span>
                </li>
                <li class="flex items-start">
                  <span class="text-steel-blue-400 mr-2">✓</span>
                  <span>Code quality audits</span>
                </li>
                <li class="flex items-start">
                  <span class="text-steel-blue-400 mr-2">✓</span>
                  <span>Emergency Slack access</span>
                </li>
                <li class="flex items-start">
                  <span class="text-steel-blue-400 mr-2">✓</span>
                  <span>Hiring advice</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 class="font-bold text-lg mb-2">Best for:</h3>
              <p class="text-stone-gray-300">
                "I have devs but need someone to make sure they're not building garbage."
              </p>
            </div>
          </div>
          
          <CTAButton 
            href="/build" 
            size="md" 
            variant="green"
            fullWidth={true}
          >
            Get Advisory →
          </CTAButton>
        </div>
        
        <!-- CTO Full Service Card -->
        <div class="bg-steel-blue-900 border-4 border-off-white p-8 shadow-brutalist">
          <div class="mb-8">
            <p class="text-sm font-mono text-steel-blue-200 mb-2">FULL INVOLVEMENT</p>
            <h2 class="text-2xl font-bold mb-2">CTO Full Service</h2>
            <p class="text-5xl font-mono text-off-white">$3K</p>
            <p class="text-steel-blue-300">per month</p>
          </div>
          
          <div class="space-y-6 mb-8">
            <div>
              <h3 class="font-bold text-lg mb-2">What's included:</h3>
              <ul class="space-y-2 text-steel-blue-100">
                <li class="flex items-start">
                  <span class="text-off-white mr-2">✓</span>
                  <span>Weekly planning calls</span>
                </li>
                <li class="flex items-start">
                  <span class="text-off-white mr-2">✓</span>
                  <span>Active feature development</span>
                </li>
                <li class="flex items-start">
                  <span class="text-off-white mr-2">✓</span>
                  <span>Team management</span>
                </li>
                <li class="flex items-start">
                  <span class="text-off-white mr-2">✓</span>
                  <span>Infrastructure scaling</span>
                </li>
                <li class="flex items-start">
                  <span class="text-off-white mr-2">✓</span>
                  <span>24/7 critical support</span>
                </li>
                <li class="flex items-start">
                  <span class="text-off-white mr-2">✓</span>
                  <span>Board/investor presentations</span>
                </li>
                <li class="flex items-start">
                  <span class="text-off-white mr-2">✓</span>
                  <span>Access to our dev team</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 class="font-bold text-lg mb-2">Best for:</h3>
              <p class="text-steel-blue-100">
                "I need a real CTO but don't want to give up 20% equity."
              </p>
            </div>
          </div>
          
          <CTAButton 
            href="/build" 
            size="md" 
            variant="green"
            fullWidth={true}
          >
            Get Full Service →
          </CTAButton>
        </div>
      </div>
      
      <div class="bg-fortress-gray-900 border-2 border-off-white p-8 text-center">
        <p class="text-2xl font-display mb-4">
          Start with MVP. Add CTO services when you need them. Scale up or down anytime.
        </p>
        <p class="text-xl text-stone-gray-400">
          No equity. No bullshit. Just results.
        </p>
      </div>
    </div>
  </div>
</section>