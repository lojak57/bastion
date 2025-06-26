<script lang="ts">
  const portalFeatures = [
    { icon: "💬", title: "Threaded Messaging", desc: "Async communication that doesn't suck" },
    { icon: "📁", title: "Shared Files", desc: "All your assets in one place" },
    { icon: "🔗", title: "Live Links", desc: "Dev & staging environments" },
    { icon: "📋", title: "Build Timeline", desc: "Know exactly where we are" },
    { icon: "💳", title: "Transparent Billing", desc: "Invoices, receipts, all clear" },
    { icon: "🤖", title: "Portal AI", desc: "Ask questions about your build" }
  ];
</script>

<section class="py-24 bg-off-white text-bastion-black">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold font-display mb-4">
          Your Command Center
        </h2>
        <p class="text-xl text-stone-gray-700">
          Even MVP clients get full transparency and control
        </p>
      </div>
      
      <div class="bg-bastion-black text-off-white p-2 border-4 border-bastion-black shadow-brutalist mb-12">
        <div class="bg-fortress-gray-900 p-4 mb-2">
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-3 h-3 bg-red-500 rounded-full"></div>
            <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div class="w-3 h-3 bg-green-500 rounded-full"></div>
            <span class="ml-4 text-sm font-mono text-stone-gray-400">portal.bastion.build</span>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            {#each portalFeatures as feature}
              <div class="bg-fortress-gray-800 border border-fortress-gray-700 p-4">
                <div class="text-3xl mb-2">{feature.icon}</div>
                <h3 class="font-bold mb-1">{feature.title}</h3>
                <p class="text-sm text-stone-gray-400">{feature.desc}</p>
              </div>
            {/each}
          </div>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-stone-gray-100 p-6 border-2 border-bastion-black">
          <h3 class="text-2xl font-bold mb-4">For You</h3>
          <ul class="space-y-2">
            <li>✓ 24/7 access to everything</li>
            <li>✓ Real-time progress updates</li>
            <li>✓ Direct line to your team</li>
            <li>✓ No email chains or Slack invites</li>
          </ul>
        </div>
        
        <div class="bg-stone-gray-100 p-6 border-2 border-bastion-black">
          <h3 class="text-2xl font-bold mb-4">For Us</h3>
          <ul class="space-y-2">
            <li>✓ Centralized communication</li>
            <li>✓ Clear project history</li>
            <li>✓ Automated workflows</li>
            <li>✓ Happy clients = better work</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>