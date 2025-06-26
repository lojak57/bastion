<script lang="ts">
  import { SITE_CONFIG } from '$lib/config/site.config';
</script>

<section class="py-24 bg-off-white text-bastion-black">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-bold font-display text-center mb-16">
        Two Ways to Build
      </h2>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div class="relative">
          <div class="bg-bastion-black text-off-white p-8 border-4 border-bastion-black shadow-brutalist">
            <div class="text-sm font-mono text-steel-blue-400 mb-2">OPTION 1</div>
            <h3 class="text-3xl font-bold mb-4">Scoped MVP</h3>
            <p class="text-5xl font-mono mb-6">{SITE_CONFIG.mvpPrice}</p>
            
            <div class="space-y-4 mb-8">
              <p class="text-lg">Perfect when you need a working product fast. No fluff, no bloat, just clean code that works.</p>
              
              <div class="border-t border-fortress-gray-700 pt-4">
                <h4 class="font-bold mb-2">What you get:</h4>
                <ul class="space-y-1 text-stone-gray-300">
                  <li>• Discovery session to scope your MVP</li>
                  <li>• Professional UI/UX design</li>
                  <li>• Full-stack development</li>
                  <li>• Deployment & handoff</li>
                  <li>• 30-day support window</li>
                </ul>
              </div>
              
              <div class="border-t border-fortress-gray-700 pt-4">
                <h4 class="font-bold mb-2">Timeline:</h4>
                <p class="text-stone-gray-300">3-6 weeks from kickoff to launch</p>
              </div>
            </div>
            
            <p class="text-sm text-stone-gray-400 italic">
              "Launch before the pitch."
            </p>
          </div>
        </div>
        
        <div class="relative">
          <div class="bg-steel-blue-600 text-off-white p-8 border-4 border-bastion-black shadow-brutalist">
            <div class="text-sm font-mono text-steel-blue-200 mb-2">OPTION 2</div>
            <h3 class="text-3xl font-bold mb-4">CTO-as-a-Service</h3>
            <div class="flex items-baseline gap-4 mb-6">
              <div>
                <p class="text-3xl font-mono">{SITE_CONFIG.ctoAdvisoryPrice}</p>
                <p class="text-sm text-steel-blue-200">Advisory</p>
              </div>
              <span class="text-steel-blue-300">or</span>
              <div>
                <p class="text-3xl font-mono">{SITE_CONFIG.ctoFullPrice}</p>
                <p class="text-sm text-steel-blue-200">Full Service</p>
              </div>
            </div>
            
            <div class="space-y-4 mb-8">
              <p class="text-lg">Two ways to get CTO-level support without giving up equity.</p>
              
              <div class="border-t border-steel-blue-700 pt-4">
                <h4 class="font-bold mb-2">Advisory ($1.5K):</h4>
                <ul class="space-y-1 text-steel-blue-100 text-sm">
                  <li>• Bi-weekly strategy calls</li>
                  <li>• Architecture reviews</li>
                  <li>• Vendor vetting</li>
                  <li>• "Hey, is this vendor bullshitting me?"</li>
                </ul>
              </div>
              
              <div class="border-t border-steel-blue-700 pt-4">
                <h4 class="font-bold mb-2">Full Service ($3K):</h4>
                <ul class="space-y-1 text-steel-blue-100 text-sm">
                  <li>• Everything in Advisory</li>
                  <li>• Active development</li>
                  <li>• Team management</li>
                  <li>• "Build this feature by Friday"</li>
                </ul>
              </div>
            </div>
            
            <p class="text-sm text-steel-blue-200 italic">
              "Scale your tech leadership."
            </p>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-12">
        <p class="text-xl text-stone-gray-700">
          Start with MVP. Upgrade when ready. Or walk away with a weapon-grade prototype.
        </p>
        <p class="text-lg text-stone-gray-600 mt-2">
          We win either way.
        </p>
      </div>
    </div>
  </div>
</section>