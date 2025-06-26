<script lang="ts">
  import { SITE_CONFIG } from '$lib/config/site.config';
  import CTAButton from '$lib/components/ui/CTAButton.svelte';
</script>

<svelte:head>
  <title>About | {SITE_CONFIG.name}</title>
  <meta name="description" content="From child prodigy to founder. A story about making dreams come true without the bullshit." />
</svelte:head>

<section class="min-h-screen bg-bastion-black text-off-white py-24">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <!-- Hero -->
      <div class="text-center mb-16">
        <h1 class="text-5xl md:text-6xl font-bold font-display mb-4">
          The Real Story
        </h1>
        <p class="text-xl text-stone-gray-300">
          No corporate fluff. Just truth.
        </p>
      </div>
      
      <!-- The Letter -->
      <div class="bg-fortress-gray-900 border-2 border-off-white p-8 md:p-12 shadow-brutalist mb-16">
        <div class="prose prose-invert max-w-none">
          <p class="text-lg mb-6">
            I'm Mitch. Early 30s. Founder of Bastion.
          </p>
          
          <p class="mb-6">
            As a kid, I was the one everyone believed in. Perfect grades. Great test scores. Sports accolades. 
            The "gifted" kid who was going places. You know the type — maybe you were one too.
          </p>
          
          <p class="mb-6">
            Then college hit, and everything fell apart. Like it does for so many late-diagnosed "child prodigies." 
            The structure disappeared. The praise stopped. Reality set in. I crashed hard.
          </p>
          
          <p class="mb-6">
            My 20s were hell. Personal life imploded. Career scattered across industries — tech, industrial automation, 
            retail, construction management. Jack of all trades, master of none. Classic millennial story, right?
          </p>
          
          <p class="mb-6 text-steel-blue-400 font-semibold">
            But here's the thing about going through hell: you learn how the world actually works.
          </p>
          
          <p class="mb-6">
            All those industries? They taught me how different businesses think. How founders dream. How ideas die. 
            How consultants and agencies extract value. How the game is played.
          </p>
          
          <p class="mb-6">
            I watched so many companies take advantage of founders. Charge insane prices because they smell either 
            success (and future money) or desperation (and easy money). Either way, the founder loses.
          </p>
          
          <p class="mb-6">
            I started Bastion because I'm tired of that shit.
          </p>
          
          <p class="mb-6 text-xl font-semibold">
            I just want to make dreams come true.
          </p>
          
          <p class="mb-6">
            No equity grabs. No feature creep. No "enterprise pricing." Just honest work at honest prices. 
            Build your MVP. Get your product in users' hands. Iterate based on reality, not committee meetings.
          </p>
          
          <p class="text-lg font-semibold">
            That self-awareness that comes from failing? That broad market knowledge from bouncing between industries? 
            That's what I bring to your project. I've been the struggling founder. Now I help founders stop struggling.
          </p>
        </div>
      </div>
      
      <!-- Stats/Proof -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div class="bg-fortress-gray-900 border-2 border-off-white p-6 text-center shadow-brutalist-sm">
          <p class="text-4xl font-mono font-bold text-steel-blue-400 mb-2">50+</p>
          <p class="text-stone-gray-300">MVPs Shipped</p>
        </div>
        <div class="bg-fortress-gray-900 border-2 border-off-white p-6 text-center shadow-brutalist-sm">
          <p class="text-4xl font-mono font-bold text-steel-blue-400 mb-2">4 weeks</p>
          <p class="text-stone-gray-300">Average Build Time</p>
        </div>
        <div class="bg-fortress-gray-900 border-2 border-off-white p-6 text-center shadow-brutalist-sm">
          <p class="text-4xl font-mono font-bold text-steel-blue-400 mb-2">0%</p>
          <p class="text-stone-gray-300">Equity Taken</p>
        </div>
      </div>
      
      <!-- Industries -->
      <div class="bg-fortress-gray-900 border-2 border-off-white p-8 mb-16 shadow-brutalist-sm">
        <h2 class="text-2xl font-bold mb-6">Industries I've Been In (And Learned From)</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="text-stone-gray-400">
            <span class="text-steel-blue-400 mr-2">▪</span>Tech Startups
          </div>
          <div class="text-stone-gray-400">
            <span class="text-steel-blue-400 mr-2">▪</span>Industrial Automation
          </div>
          <div class="text-stone-gray-400">
            <span class="text-steel-blue-400 mr-2">▪</span>Retail Operations
          </div>
          <div class="text-stone-gray-400">
            <span class="text-steel-blue-400 mr-2">▪</span>Construction Management
          </div>
          <div class="text-stone-gray-400">
            <span class="text-steel-blue-400 mr-2">▪</span>Oil & Gas
          </div>
          <div class="text-stone-gray-400">
            <span class="text-steel-blue-400 mr-2">▪</span>Beauty/Wellness
          </div>
          <div class="text-stone-gray-400">
            <span class="text-steel-blue-400 mr-2">▪</span>Field Services
          </div>
          <div class="text-stone-gray-400">
            <span class="text-steel-blue-400 mr-2">▪</span>B2B SaaS
          </div>
        </div>
        <p class="mt-6 text-stone-gray-300">
          Each industry taught me something. Now I use it all to build better products faster.
        </p>
      </div>
      
      <!-- Philosophy -->
      <div class="mb-16 space-y-8">
        <h2 class="text-3xl font-bold text-center">The Bastion Way</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-steel-blue-900 border-2 border-off-white p-6 shadow-brutalist-sm">
            <h3 class="text-xl font-bold mb-3">What I Believe</h3>
            <ul class="space-y-2 text-steel-blue-100">
              <li>• Founders should own their code</li>
              <li>• MVPs should be minimal AND viable</li>
              <li>• Good enough today beats perfect never</li>
              <li>• Transparency builds trust</li>
              <li>• Fair pricing is good business</li>
            </ul>
          </div>
          
          <div class="bg-steel-blue-900 border-2 border-off-white p-6 shadow-brutalist-sm">
            <h3 class="text-xl font-bold mb-3">What I Don't Do</h3>
            <ul class="space-y-2 text-steel-blue-100">
              <li>• Take equity in your company</li>
              <li>• Lock you into retainers</li>
              <li>• Overcomplicate your MVP</li>
              <li>• Disappear after launch</li>
              <li>• Charge "because I can"</li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- CTA -->
      <div class="bg-off-white text-bastion-black p-12 text-center border-4 border-off-white shadow-brutalist">
        <h2 class="text-3xl font-bold mb-4">
          Ready to Build Something Real?
        </h2>
        <p class="text-xl text-stone-gray-700 mb-8">
          Let's skip the dance and build your product.
        </p>
        <CTAButton 
          href="/build" 
          size="xl" 
          variant="yellow"
        >
          Start Your Build →
        </CTAButton>
      </div>
    </div>
  </div>
</section>