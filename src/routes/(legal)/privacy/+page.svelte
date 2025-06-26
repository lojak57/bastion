<script lang="ts">
  import { SITE_CONFIG } from '$lib/config/site.config';
</script>

<svelte:head>
  <title>Privacy Policy | {SITE_CONFIG.name}</title>
  <meta name="description" content="Privacy Policy for Bastion - How we handle your data with respect and security." />
</svelte:head>

<section class="min-h-screen bg-bastion-black text-off-white py-24">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-bold font-display mb-4">
        Privacy Policy
      </h1>
      <p class="text-stone-gray-400 mb-12">Effective Date: December 26, 2024</p>
      
      <div class="bg-fortress-gray-900 border-2 border-off-white p-8 shadow-brutalist mb-8">
        <h2 class="text-2xl font-bold mb-4 text-steel-blue-400">The Short Version</h2>
        <p class="text-stone-gray-300 mb-4">
          We respect your privacy. We don't sell your data. We only collect what we need to build your product and provide our services. Your code and business ideas are yours.
        </p>
      </div>

      <div class="bg-fortress-gray-900 border-2 border-off-white p-8 shadow-brutalist mb-8">
        <h2 class="text-2xl font-bold mb-4 text-steel-blue-400">Information We Collect</h2>
        <h3 class="text-lg font-bold mb-2 text-steel-blue-300">When You Contact Us:</h3>
        <ul class="space-y-2 text-stone-gray-300 mb-4">
          <li class="flex items-start">
            <span class="text-steel-blue-400 mr-2">•</span>
            Name and email address
          </li>
          <li class="flex items-start">
            <span class="text-steel-blue-400 mr-2">•</span>
            Company information (if provided)
          </li>
          <li class="flex items-start">
            <span class="text-steel-blue-400 mr-2">•</span>
            Project details you share with us
          </li>
        </ul>
        
        <h3 class="text-lg font-bold mb-2 text-steel-blue-300">Automatically Collected:</h3>
        <ul class="space-y-2 text-stone-gray-300">
          <li class="flex items-start">
            <span class="text-steel-blue-400 mr-2">•</span>
            Basic analytics (page views, referrer)
          </li>
          <li class="flex items-start">
            <span class="text-steel-blue-400 mr-2">•</span>
            No cookies, no tracking pixels, no BS
          </li>
        </ul>
      </div>

      <div class="bg-fortress-gray-900 border-2 border-off-white p-8 shadow-brutalist mb-8">
        <h2 class="text-2xl font-bold mb-4 text-steel-blue-400">How We Use Your Information</h2>
        <ul class="space-y-2 text-stone-gray-300">
          <li class="flex items-start">
            <span class="text-steel-blue-400 mr-2">•</span>
            To scope and deliver your project
          </li>
          <li class="flex items-start">
            <span class="text-steel-blue-400 mr-2">•</span>
            To send project updates and invoices
          </li>
          <li class="flex items-start">
            <span class="text-steel-blue-400 mr-2">•</span>
            To provide ongoing support
          </li>
          <li class="flex items-start">
            <span class="text-steel-blue-400 mr-2">•</span>
            To improve our services
          </li>
        </ul>
      </div>

      <div class="bg-fortress-gray-900 border-2 border-off-white p-8 shadow-brutalist mb-8">
        <h2 class="text-2xl font-bold mb-4 text-steel-blue-400">Your Project Data</h2>
        <p class="text-stone-gray-300 mb-4">
          <strong>Your ideas and code are yours.</strong> We sign NDAs when requested. We don't share your project details with anyone. We don't compete with our clients.
        </p>
        <p class="text-stone-gray-300">
          We may showcase completed work in our portfolio, but only with your permission and never including sensitive business information.
        </p>
      </div>

      <div class="bg-fortress-gray-900 border-2 border-off-white p-8 shadow-brutalist mb-8">
        <h2 class="text-2xl font-bold mb-4 text-steel-blue-400">Data Security</h2>
        <p class="text-stone-gray-300 mb-4">
          We use industry-standard security measures to protect your information:
        </p>
        <ul class="space-y-2 text-stone-gray-300">
          <li class="flex items-start">
            <span class="text-steel-blue-400 mr-2">•</span>
            Encrypted connections (HTTPS)
          </li>
          <li class="flex items-start">
            <span class="text-steel-blue-400 mr-2">•</span>
            Secure cloud infrastructure
          </li>
          <li class="flex items-start">
            <span class="text-steel-blue-400 mr-2">•</span>
            Regular security updates
          </li>
          <li class="flex items-start">
            <span class="text-steel-blue-400 mr-2">•</span>
            Limited access on need-to-know basis
          </li>
        </ul>
      </div>

      <div class="bg-fortress-gray-900 border-2 border-off-white p-8 shadow-brutalist mb-8">
        <h2 class="text-2xl font-bold mb-4 text-steel-blue-400">Third-Party Services</h2>
        <p class="text-stone-gray-300 mb-4">
          We use a few trusted services to run our business:
        </p>
        <ul class="space-y-2 text-stone-gray-300">
          <li class="flex items-start">
            <span class="text-steel-blue-400 mr-2">•</span>
            Payment processing (Stripe)
          </li>
          <li class="flex items-start">
            <span class="text-steel-blue-400 mr-2">•</span>
            Email delivery (for project updates)
          </li>
          <li class="flex items-start">
            <span class="text-steel-blue-400 mr-2">•</span>
            Cloud hosting (for your deployed projects)
          </li>
        </ul>
        <p class="text-stone-gray-300 mt-4">
          Each service has their own privacy policy. We only share the minimum required information.
        </p>
      </div>

      <div class="bg-fortress-gray-900 border-2 border-off-white p-8 shadow-brutalist mb-8">
        <h2 class="text-2xl font-bold mb-4 text-steel-blue-400">Your Rights</h2>
        <p class="text-stone-gray-300 mb-4">
          You have the right to:
        </p>
        <ul class="space-y-2 text-stone-gray-300">
          <li class="flex items-start">
            <span class="text-steel-blue-400 mr-2">•</span>
            Access your personal data
          </li>
          <li class="flex items-start">
            <span class="text-steel-blue-400 mr-2">•</span>
            Correct inaccurate data
          </li>
          <li class="flex items-start">
            <span class="text-steel-blue-400 mr-2">•</span>
            Request deletion of your data
          </li>
          <li class="flex items-start">
            <span class="text-steel-blue-400 mr-2">•</span>
            Opt out of marketing communications
          </li>
        </ul>
        <p class="text-stone-gray-300 mt-4">
          Just email us. We're humans, we'll help.
        </p>
      </div>

      <div class="bg-fortress-gray-900 border-2 border-off-white p-8 shadow-brutalist mb-8">
        <h2 class="text-2xl font-bold mb-4 text-steel-blue-400">Updates to This Policy</h2>
        <p class="text-stone-gray-300">
          We may update this policy from time to time. We'll notify you of any significant changes via email if you're an active client.
        </p>
      </div>

      <div class="bg-steel-blue-900 border-2 border-off-white p-8 shadow-brutalist">
        <h2 class="text-2xl font-bold mb-4">Questions?</h2>
        <p class="text-steel-blue-100">
          <strong>{SITE_CONFIG.name}</strong><br>
          Email: hello@bastion.build<br>
          We're here to help.
        </p>
      </div>
    </div>
  </div>
</section>