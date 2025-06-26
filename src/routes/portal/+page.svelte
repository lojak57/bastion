<script lang="ts">
  import { SITE_CONFIG } from '$lib/config/site.config';
  import CTAButton from '$lib/components/ui/CTAButton.svelte';
  
  const screenshots = [
    {
      title: "Project Thread",
      desc: "All your project communication in one place",
      features: ["Real-time updates", "File attachments", "Team mentions"]
    },
    {
      title: "Shared Files",
      desc: "Access all your assets and deliverables",
      features: ["Version control", "Download anytime", "Organized folders"]
    },
    {
      title: "Live Links",
      desc: "Test your product as we build",
      features: ["Dev environment", "Staging links", "Production deploy"]
    },
    {
      title: "Notes + Roadmap",
      desc: "Track progress and plan ahead",
      features: ["Sprint planning", "Feature requests", "Bug tracking"]
    },
    {
      title: "Billing/Receipts",
      desc: "Transparent pricing, always",
      features: ["Invoice history", "Payment tracking", "Export for taxes"]
    }
  ];
</script>

<svelte:head>
  <title>Client Portal | {SITE_CONFIG.name}</title>
  <meta name="description" content="Even MVP clients get full transparency and control. See how our client portal keeps your project on track." />
</svelte:head>

<section class="min-h-screen bg-off-white text-bastion-black py-24">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-5xl md:text-6xl font-bold font-display text-center mb-4">
        Client Portal
      </h1>
      <p class="text-xl text-center text-stone-gray-700 mb-16">
        Even MVP clients get full transparency and control
      </p>
      
      <!-- Portal Demo -->
      <div class="bg-bastion-black p-4 border-4 border-bastion-black shadow-brutalist mb-16">
        <div class="bg-fortress-gray-900 p-6">
          <!-- Browser Chrome -->
          <div class="flex items-center space-x-2 mb-6 pb-4 border-b border-fortress-gray-700">
            <div class="flex space-x-2">
              <div class="w-3 h-3 bg-red-500 rounded-full"></div>
              <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div class="flex-1 text-center">
              <span class="text-sm font-mono text-stone-gray-400">portal.bastion.build/your-project</span>
            </div>
          </div>
          
          <!-- Portal Content -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {#each screenshots as screen}
              <div class="bg-fortress-gray-800 border border-fortress-gray-700 p-6 text-off-white">
                <h3 class="text-xl font-bold mb-2">{screen.title}</h3>
                <p class="text-stone-gray-400 mb-4">{screen.desc}</p>
                <ul class="space-y-1">
                  {#each screen.features as feature}
                    <li class="text-sm text-stone-gray-500">• {feature}</li>
                  {/each}
                </ul>
              </div>
            {/each}
            
            <!-- AI Assistant -->
            <div class="bg-steel-blue-900 border border-steel-blue-700 p-6 text-off-white md:col-span-2">
              <h3 class="text-xl font-bold mb-2 flex items-center">
                <span class="text-2xl mr-2">🤖</span>
                Portal AI Assistant
              </h3>
              <p class="text-steel-blue-200 mb-4">
                "Ask your Portal" - AI trained on your project docs
              </p>
              <div class="bg-steel-blue-800 p-4 rounded font-mono text-sm">
                <p class="text-steel-blue-300 mb-2">> How do I deploy to production?</p>
                <p class="text-steel-blue-100">Based on your project setup, you can deploy using...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Benefits Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div class="bg-stone-gray-100 p-8 border-2 border-bastion-black">
          <h2 class="text-2xl font-bold mb-4">For Founders</h2>
          <ul class="space-y-3">
            <li class="flex items-start">
              <span class="text-steel-blue-600 mr-2 text-xl">✓</span>
              <span>24/7 access to everything about your project</span>
            </li>
            <li class="flex items-start">
              <span class="text-steel-blue-600 mr-2 text-xl">✓</span>
              <span>No more email chains or lost attachments</span>
            </li>
            <li class="flex items-start">
              <span class="text-steel-blue-600 mr-2 text-xl">✓</span>
              <span>See exactly what we're working on</span>
            </li>
            <li class="flex items-start">
              <span class="text-steel-blue-600 mr-2 text-xl">✓</span>
              <span>Direct line to your development team</span>
            </li>
            <li class="flex items-start">
              <span class="text-steel-blue-600 mr-2 text-xl">✓</span>
              <span>Export everything when the project ends</span>
            </li>
          </ul>
        </div>
        
        <div class="bg-stone-gray-100 p-8 border-2 border-bastion-black">
          <h2 class="text-2xl font-bold mb-4">Why We Built This</h2>
          <p class="text-stone-gray-700 mb-4">
            We got tired of scattered Slack channels, endless email threads, 
            and clients asking "what's the status?" every other day.
          </p>
          <p class="text-stone-gray-700 mb-4">
            The portal isn't just for you — it makes us faster and more organized. 
            When we work better, you get better results.
          </p>
          <p class="font-bold">
            Transparency builds trust. Trust builds great products.
          </p>
        </div>
      </div>
      
      <!-- CTA -->
      <div class="bg-bastion-black text-off-white p-12 text-center border-4 border-bastion-black shadow-brutalist">
        <h2 class="text-3xl font-bold mb-4">
          See It In Action
        </h2>
        <p class="text-xl text-stone-gray-300 mb-8">
          Every Bastion client gets portal access from day one.
        </p>
        <CTAButton 
          href="/build" 
          size="xl" 
          variant="yellow"
        >
          Start Your Project →
        </CTAButton>
      </div>
    </div>
  </div>
</section>