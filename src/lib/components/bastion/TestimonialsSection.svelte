<script lang="ts">
  const testimonials = [
    {
      quote: "Bastion built our MVP in 4 weeks. We closed our seed round 2 weeks later.",
      author: "Sarah Chen",
      role: "Founder, TechStartup",
      highlight: "Closed seed round"
    },
    {
      quote: "Finally, developers who understand business. Worth every penny.",
      author: "Marcus Rodriguez",
      role: "CEO, ServiceCo",
      highlight: "Understands business"
    },
    {
      quote: "The client portal alone is worth the price. Total transparency.",
      author: "Emily Watson",
      role: "Product Manager",
      highlight: "Total transparency"
    }
  ];
</script>

<section class="py-24 bg-bastion-black text-off-white">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-bold font-display text-center mb-16">
        Founders Launch Here
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {#each testimonials as testimonial}
          <div class="bg-fortress-gray-900 border-2 border-off-white p-6 shadow-brutalist-sm">
            <div class="mb-4">
              <p class="text-lg mb-4">"{testimonial.quote}"</p>
              <div class="text-sm font-mono text-steel-blue-400 mb-2">
                {testimonial.highlight}
              </div>
            </div>
            <div class="border-t border-fortress-gray-700 pt-4">
              <p class="font-bold">{testimonial.author}</p>
              <p class="text-sm text-stone-gray-400">{testimonial.role}</p>
            </div>
          </div>
        {/each}
      </div>
      
      <div class="text-center">
        <p class="text-2xl font-display text-stone-gray-300 mb-8">
          Join 50+ founders who shipped with Bastion
        </p>
      </div>
    </div>
  </div>
</section>