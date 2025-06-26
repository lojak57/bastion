<script lang="ts">
  import { SITE_CONFIG } from '$lib/config/site.config';
</script>

<svelte:head>
  <title>Terms of Service | {SITE_CONFIG.name}</title>
  <meta name="description" content="Terms of Service for Bastion - Fast MVP builds and CTO-as-a-Service for founders." />
</svelte:head>

<section class="min-h-screen bg-bastion-black text-off-white py-24">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-bold font-display mb-4">
        Terms of Service
      </h1>
      <p class="text-stone-gray-400 mb-12">Effective Date: December 26, 2024</p>
      
      <div class="bg-fortress-gray-900 border-2 border-off-white p-8 shadow-brutalist mb-8">
        <h2 class="text-2xl font-bold mb-4 text-steel-blue-400">Acceptance of Terms</h2>
        <p class="text-stone-gray-300 mb-4">
          By accessing and using Bastion's website and services, you accept and agree to be bound by the terms and provision of this agreement.
        </p>
      </div>

      <div class="bg-fortress-gray-900 border-2 border-off-white p-8 shadow-brutalist mb-8">
        <h2 class="text-2xl font-bold mb-4 text-steel-blue-400">Services</h2>
        <p class="text-stone-gray-300 mb-4">
          Bastion provides MVP development and CTO-as-a-Service to help founders build their products without giving up equity. We build fast, we build real, and we build yours.
        </p>
        <ul class="space-y-2 text-stone-gray-300">
          <li class="flex items-start">
            <span class="text-steel-blue-400 mr-2">•</span>
            MVP builds delivered in 3-6 weeks
          </li>
          <li class="flex items-start">
            <span class="text-steel-blue-400 mr-2">•</span>
            CTO advisory and full-service options
          </li>
          <li class="flex items-start">
            <span class="text-steel-blue-400 mr-2">•</span>
            Complete code ownership for clients
          </li>
        </ul>
      </div>

      <div class="bg-fortress-gray-900 border-2 border-off-white p-8 shadow-brutalist mb-8">
        <h2 class="text-2xl font-bold mb-4 text-steel-blue-400">Payment Terms</h2>
        <ul class="space-y-2 text-stone-gray-300">
          <li class="flex items-start">
            <span class="text-steel-blue-400 mr-2">•</span>
            MVP projects require 50% deposit to begin
          </li>
          <li class="flex items-start">
            <span class="text-steel-blue-400 mr-2">•</span>
            Remaining 50% due upon completion
          </li>
          <li class="flex items-start">
            <span class="text-steel-blue-400 mr-2">•</span>
            CTO services billed monthly in advance
          </li>
          <li class="flex items-start">
            <span class="text-steel-blue-400 mr-2">•</span>
            All prices in USD
          </li>
        </ul>
      </div>

      <div class="bg-fortress-gray-900 border-2 border-off-white p-8 shadow-brutalist mb-8">
        <h2 class="text-2xl font-bold mb-4 text-steel-blue-400">Intellectual Property</h2>
        <p class="text-stone-gray-300 mb-4">
          Upon full payment, all code and deliverables created for your project become your property. You own it. No strings attached. No equity required.
        </p>
        <p class="text-stone-gray-300">
          Bastion retains the right to showcase completed work in our portfolio unless otherwise agreed.
        </p>
      </div>

      <div class="bg-fortress-gray-900 border-2 border-off-white p-8 shadow-brutalist mb-8">
        <h2 class="text-2xl font-bold mb-4 text-steel-blue-400">Scope & Limitations</h2>
        <p class="text-stone-gray-300 mb-4">
          We build MVPs, not enterprises. Our services are scoped to deliver functional prototypes and early-stage products. See our "Honest Expectations" for what we do and don't do.
        </p>
        <ul class="space-y-2 text-stone-gray-300">
          <li class="flex items-start">
            <span class="text-steel-blue-400 mr-2">•</span>
            30-day bug fix guarantee post-launch
          </li>
          <li class="flex items-start">
            <span class="text-steel-blue-400 mr-2">•</span>
            No scope creep without additional agreements
          </li>
          <li class="flex items-start">
            <span class="text-steel-blue-400 mr-2">•</span>
            Communication primarily async via portal
          </li>
        </ul>
      </div>

      <div class="bg-fortress-gray-900 border-2 border-off-white p-8 shadow-brutalist mb-8">
        <h2 class="text-2xl font-bold mb-4 text-steel-blue-400">Limitation of Liability</h2>
        <p class="text-stone-gray-300">
          Bastion's liability is limited to the amount paid for services. We're not responsible for lost profits, data loss, or consequential damages. We build good products fast, but we're not wizards.
        </p>
      </div>

      <div class="bg-fortress-gray-900 border-2 border-off-white p-8 shadow-brutalist mb-8">
        <h2 class="text-2xl font-bold mb-4 text-steel-blue-400">Termination</h2>
        <p class="text-stone-gray-300 mb-4">
          Either party may terminate services with 30 days written notice. For MVP projects, termination before completion forfeits the deposit. For CTO services, you can cancel anytime with 30 days notice.
        </p>
      </div>

      <div class="bg-steel-blue-900 border-2 border-off-white p-8 shadow-brutalist">
        <h2 class="text-2xl font-bold mb-4">Contact Information</h2>
        <p class="text-steel-blue-100">
          <strong>{SITE_CONFIG.name}</strong><br>
          Email: hello@bastion.build<br>
          "Build Your Stronghold"
        </p>
      </div>
    </div>
  </div>
</section>