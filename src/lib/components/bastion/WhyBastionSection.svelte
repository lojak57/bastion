<script lang="ts">
  const comparisons = [
    {
      title: "vs. Agencies",
      problems: [
        "6-figure retainers",
        "12-month contracts",
        "Feature creep",
        "Committee hell"
      ],
      bastionWay: "Fixed scope, fixed price, fixed timeline. Done."
    },
    {
      title: "vs. Freelancers",
      problems: [
        "Ghosting mid-project",
        "\"That's not in scope\"",
        "No strategic vision",
        "Duct-tape solutions"
      ],
      bastionWay: "Full-stack team, strategic thinking, professional handoff."
    },
    {
      title: "vs. DIY",
      problems: [
        "6 months on YouTube",
        "Framework paralysis",
        "Security nightmares",
        "No time to sell"
      ],
      bastionWay: "Focus on your business. We handle the tech."
    }
  ];
</script>

<section class="py-24 bg-bastion-black text-off-white">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-bold font-display text-center mb-16">
        Why Bastion?
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {#each comparisons as comparison}
          <div class="bg-fortress-gray-900 border-2 border-off-white p-6 shadow-brutalist-sm">
            <h3 class="text-2xl font-bold mb-4 text-steel-blue-400">{comparison.title}</h3>
            
            <div class="mb-6">
              <p class="text-sm uppercase font-mono text-stone-gray-500 mb-2">Their way:</p>
              <ul class="space-y-1">
                {#each comparison.problems as problem}
                  <li class="text-stone-gray-400">✗ {problem}</li>
                {/each}
              </ul>
            </div>
            
            <div class="border-t border-fortress-gray-700 pt-4">
              <p class="text-sm uppercase font-mono text-steel-blue-400 mb-2">Bastion way:</p>
              <p class="text-off-white">{comparison.bastionWay}</p>
            </div>
          </div>
        {/each}
      </div>
      
      <div class="bg-steel-blue-900 border-4 border-off-white p-8 text-center shadow-brutalist">
        <h3 class="text-3xl font-bold mb-4">The Bottom Line</h3>
        <p class="text-xl text-steel-blue-100 max-w-3xl mx-auto">
          We've built for restoration crews, oil fields, beauty salons, and execs with ideas on bar napkins. 
          We know how to ship fast without shipping garbage.
        </p>
      </div>
    </div>
  </div>
</section>