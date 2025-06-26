<script lang="ts">
  import { SITE_CONFIG } from '$lib/config/site.config';
  import CTAButton from '$lib/components/ui/CTAButton.svelte';
  
  const mvpProcess = [
    {
      week: "Week 0",
      title: "Discovery & Scoping",
      activities: [
        "30-min kickoff call",
        "Define MVP boundaries",
        "Technical architecture plan",
        "Fixed price quote"
      ]
    },
    {
      week: "Week 1",
      title: "Design Sprint",
      activities: [
        "UI/UX mockups",
        "User flow mapping",
        "Brand implementation",
        "Your feedback & iterations"
      ]
    },
    {
      week: "Week 2-3",
      title: "Build Phase",
      activities: [
        "Frontend development",
        "Backend/API setup",
        "Database architecture",
        "Daily progress in portal"
      ]
    },
    {
      week: "Week 4",
      title: "Polish & Deploy",
      activities: [
        "Testing & QA",
        "Performance optimization",
        "Production deployment",
        "Handoff documentation"
      ]
    }
  ];
  
  const ctoTiers = {
    advisory: {
      price: "$1.5K/mo",
      title: "CTO Advisory",
      tagline: "Strategic guidance, light touch",
      includes: [
        "Bi-weekly 1-hour strategy calls",
        "Architecture reviews",
        "Vendor/contractor vetting",
        "Code quality audits",
        "Emergency Slack access",
        "Hiring/team building advice"
      ],
      perfect: "Founders who have devs but need strategic oversight",
      commitment: "Month-to-month, 3-hour minimum"
    },
    fullService: {
      price: "$3K/mo",
      title: "CTO Full Service",
      tagline: "Hands-on technical leadership",
      includes: [
        "Weekly strategy & planning calls",
        "Active feature development",
        "Team management & code reviews",
        "Infrastructure scaling",
        "24/7 critical support",
        "Board/investor tech presentations",
        "Full access to our dev team"
      ],
      perfect: "Growing startups ready to scale",
      commitment: "Month-to-month, 10-hour minimum"
    }
  };
</script>

<svelte:head>
  <title>How It Works | {SITE_CONFIG.name}</title>
  <meta name="description" content="From idea to launch in 4 weeks. See exactly how we build your MVP and support your growth." />
</svelte:head>

<section class="min-h-screen bg-bastion-black text-off-white py-24">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <!-- Hero -->
      <div class="text-center mb-16">
        <h1 class="text-5xl md:text-6xl font-bold font-display mb-4">
          How It Works
        </h1>
        <p class="text-xl text-stone-gray-300">
          From "I have an idea" to "We just launched" in 4 weeks
        </p>
      </div>
      
      <!-- MVP Journey -->
      <div class="mb-24">
        <h2 class="text-3xl font-bold text-center mb-12">The MVP Journey</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {#each mvpProcess as phase, i}
            <div class="bg-fortress-gray-900 border-2 border-off-white p-6 shadow-brutalist-sm">
              <div class="text-steel-blue-400 font-mono text-sm mb-2">{phase.week}</div>
              <h3 class="text-xl font-bold mb-4">{phase.title}</h3>
              <ul class="space-y-2">
                {#each phase.activities as activity}
                  <li class="text-stone-gray-300 text-sm flex items-start">
                    <span class="text-steel-blue-400 mr-2">→</span>
                    {activity}
                  </li>
                {/each}
              </ul>
            </div>
          {/each}
        </div>
        
        <div class="bg-steel-blue-900 border-2 border-off-white p-8 text-center shadow-brutalist">
          <p class="text-2xl font-bold mb-2">Total Timeline: 3-6 weeks</p>
          <p class="text-steel-blue-100">Most MVPs ship in 4 weeks. Complex projects may take 6.</p>
        </div>
      </div>
      
      <!-- What You Get -->
      <div class="mb-24">
        <h2 class="text-3xl font-bold text-center mb-12">What You Actually Get</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-fortress-gray-900 border-2 border-off-white p-6">
            <h3 class="text-xl font-bold mb-4 text-steel-blue-400">The Code</h3>
            <ul class="space-y-2 text-stone-gray-300">
              <li>• Full source code ownership</li>
              <li>• Modern tech stack</li>
              <li>• Clean, documented code</li>
              <li>• No vendor lock-in</li>
              <li>• Git repository access</li>
            </ul>
          </div>
          
          <div class="bg-fortress-gray-900 border-2 border-off-white p-6">
            <h3 class="text-xl font-bold mb-4 text-steel-blue-400">The Support</h3>
            <ul class="space-y-2 text-stone-gray-300">
              <li>• 30-day bug fix guarantee</li>
              <li>• Deployment assistance</li>
              <li>• Knowledge transfer</li>
              <li>• Portal access forever</li>
              <li>• Future upgrade path</li>
            </ul>
          </div>
          
          <div class="bg-fortress-gray-900 border-2 border-off-white p-6">
            <h3 class="text-xl font-bold mb-4 text-steel-blue-400">The Business Value</h3>
            <ul class="space-y-2 text-stone-gray-300">
              <li>• Investor-ready demo</li>
              <li>• Real user feedback</li>
              <li>• Technical validation</li>
              <li>• Go-to-market asset</li>
              <li>• Foundation to scale</li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- CTO Service Tiers -->
      <div class="mb-24">
        <h2 class="text-3xl font-bold text-center mb-4">When You're Ready for More</h2>
        <p class="text-xl text-center text-stone-gray-300 mb-12">
          Two ways to keep the momentum going
        </p>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Advisory Tier -->
          <div class="bg-fortress-gray-900 border-4 border-off-white p-8 shadow-brutalist">
            <div class="mb-6">
              <p class="text-sm font-mono text-stone-gray-400 mb-2">LIGHT TOUCH</p>
              <h3 class="text-2xl font-bold mb-2">{ctoTiers.advisory.title}</h3>
              <p class="text-4xl font-mono text-steel-blue-400 mb-2">{ctoTiers.advisory.price}</p>
              <p class="text-stone-gray-400">{ctoTiers.advisory.tagline}</p>
            </div>
            
            <div class="mb-6">
              <h4 class="font-bold mb-3">What's included:</h4>
              <ul class="space-y-2">
                {#each ctoTiers.advisory.includes as item}
                  <li class="text-stone-gray-300 flex items-start">
                    <span class="text-steel-blue-400 mr-2">✓</span>
                    {item}
                  </li>
                {/each}
              </ul>
            </div>
            
            <div class="border-t border-fortress-gray-700 pt-4">
              <p class="text-sm text-stone-gray-400 mb-2">Perfect for:</p>
              <p class="text-sm">{ctoTiers.advisory.perfect}</p>
            </div>
          </div>
          
          <!-- Full Service Tier -->
          <div class="bg-steel-blue-900 border-4 border-off-white p-8 shadow-brutalist">
            <div class="mb-6">
              <p class="text-sm font-mono text-steel-blue-200 mb-2">FULL INVOLVEMENT</p>
              <h3 class="text-2xl font-bold mb-2">{ctoTiers.fullService.title}</h3>
              <p class="text-4xl font-mono text-off-white mb-2">{ctoTiers.fullService.price}</p>
              <p class="text-steel-blue-200">{ctoTiers.fullService.tagline}</p>
            </div>
            
            <div class="mb-6">
              <h4 class="font-bold mb-3">What's included:</h4>
              <ul class="space-y-2">
                {#each ctoTiers.fullService.includes as item}
                  <li class="text-steel-blue-100 flex items-start">
                    <span class="text-off-white mr-2">✓</span>
                    {item}
                  </li>
                {/each}
              </ul>
            </div>
            
            <div class="border-t border-steel-blue-700 pt-4">
              <p class="text-sm text-steel-blue-200 mb-2">Perfect for:</p>
              <p class="text-sm">{ctoTiers.fullService.perfect}</p>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-8">
          <p class="text-lg text-stone-gray-400">
            Start with MVP. Upgrade to CTO when you need it. No equity required.
          </p>
        </div>
      </div>
      
      <!-- Honest Expectations -->
      <div class="mb-24">
        <h2 class="text-3xl font-bold text-center mb-12">Honest Expectations</h2>
        <p class="text-xl text-center text-stone-gray-300 mb-12">
          We use cutting-edge tools to deliver fast. But we're selective about what we take on.
        </p>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <!-- What We Do -->
          <div class="bg-fortress-gray-900 border-4 border-steel-blue-400 p-8">
            <h3 class="text-2xl font-bold mb-6 text-steel-blue-400">What We Do</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-steel-blue-400 mr-3 text-xl">✓</span>
                <span>Build your MVP in 3-6 weeks with modern tools</span>
              </li>
              <li class="flex items-start">
                <span class="text-steel-blue-400 mr-3 text-xl">✓</span>
                <span>One weekly check-in call (30 min max)</span>
              </li>
              <li class="flex items-start">
                <span class="text-steel-blue-400 mr-3 text-xl">✓</span>
                <span>Async updates through the client portal</span>
              </li>
              <li class="flex items-start">
                <span class="text-steel-blue-400 mr-3 text-xl">✓</span>
                <span>Professional UI/UX that doesn't look like trash</span>
              </li>
              <li class="flex items-start">
                <span class="text-steel-blue-400 mr-3 text-xl">✓</span>
                <span>Deploy to production and hand over the keys</span>
              </li>
              <li class="flex items-start">
                <span class="text-steel-blue-400 mr-3 text-xl">✓</span>
                <span>Fix bugs for 30 days after launch</span>
              </li>
              <li class="flex items-start">
                <span class="text-steel-blue-400 mr-3 text-xl">✓</span>
                <span>Build features that make sense for an MVP</span>
              </li>
            </ul>
          </div>
          
          <!-- What We Don't Do -->
          <div class="bg-fortress-gray-900 border-4 border-red-600 p-8">
            <h3 class="text-2xl font-bold mb-6 text-red-600">What We Don't Do</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-red-600 mr-3 text-xl">✗</span>
                <span>Daily standups or endless status meetings</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-600 mr-3 text-xl">✗</span>
                <span>"Quick calls" that turn into 2-hour strategy sessions</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-600 mr-3 text-xl">✗</span>
                <span>Build your entire 5-year product roadmap</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-600 mr-3 text-xl">✗</span>
                <span>Scope creep disguised as "small tweaks"</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-600 mr-3 text-xl">✗</span>
                <span>Be your on-call tech support</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-600 mr-3 text-xl">✗</span>
                <span>Teach you how to code</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-600 mr-3 text-xl">✗</span>
                <span>Build the next Facebook for $5K</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="bg-steel-blue-900 border-2 border-off-white p-8 text-center mt-12 shadow-brutalist">
          <p class="text-xl font-bold mb-2">The Bottom Line:</p>
          <p class="text-lg text-steel-blue-100">
            We compress months of work into weeks using modern tools. 
            But we protect our time (and yours) by keeping communication async and meetings minimal.
          </p>
        </div>
      </div>
      
      <!-- Common Questions -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-center mb-12">Common Questions</h2>
        
        <div class="space-y-6 max-w-3xl mx-auto">
          <div class="bg-fortress-gray-900 border-2 border-off-white p-6">
            <h3 class="font-bold mb-2">What if my MVP takes longer than 4 weeks?</h3>
            <p class="text-stone-gray-300">We quote fixed prices based on scope. If it takes us 6 weeks instead of 4, that's on us. You pay the same price.</p>
          </div>
          
          <div class="bg-fortress-gray-900 border-2 border-off-white p-6">
            <h3 class="font-bold mb-2">Can I switch between CTO tiers?</h3>
            <p class="text-stone-gray-300">Yes. Upgrade or downgrade anytime with 30 days notice. Start light, scale up when needed.</p>
          </div>
          
          <div class="bg-fortress-gray-900 border-2 border-off-white p-6">
            <h3 class="font-bold mb-2">What tech stack do you use?</h3>
            <p class="text-stone-gray-300">We're stack-agnostic but have opinions. Usually React/Next.js or SvelteKit, Node.js or Python, PostgreSQL or MongoDB. We pick what's best for your use case.</p>
          </div>
          
          <div class="bg-fortress-gray-900 border-2 border-off-white p-6">
            <h3 class="font-bold mb-2">Do you do mobile apps?</h3>
            <p class="text-stone-gray-300">Yes. React Native or Flutter for cross-platform. Swift/Kotlin for native. Most MVPs start with a responsive web app though.</p>
          </div>
        </div>
      </div>
      
      <!-- CTA -->
      <div class="bg-off-white text-bastion-black p-12 text-center border-4 border-off-white shadow-brutalist">
        <h2 class="text-3xl font-bold mb-4">
          See It In Action
        </h2>
        <p class="text-xl text-stone-gray-700 mb-8">
          Watch us turn your idea into reality
        </p>
        <CTAButton 
          href="/build" 
          size="xl" 
          variant="yellow"
        >
          Start Your Journey →
        </CTAButton>
      </div>
    </div>
  </div>
</section>