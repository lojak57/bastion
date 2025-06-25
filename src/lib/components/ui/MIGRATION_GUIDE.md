# Component Consolidation Migration Guide

This guide shows how to migrate from the old component system to the new consolidated components.

## Overview

We've consolidated multiple similar components into flexible, unified components:
- **Button**: Already consolidated (no changes needed)
- **Card**: Replaces BaseCard, BrandedCard, FeatureCard, PricingCard, ContentBox
- **Input**: Replaces BaseInput, InputCore, LuxuryInput

## Button Component (No Changes Needed) ✅

The Button component remains the same. No migration needed.

```svelte
<!-- Existing usage - still works -->
<Button variant="primary" size="lg" href="/contact">
  Get Started
</Button>
```

## Card Component Migration 🔄

### BaseCard → Card

```svelte
<!-- OLD -->
<BaseCard 
  variant="hero" 
  clickable={true} 
  accent="var(--color-primary)"
  padding="lg"
>
  <h3>Card Title</h3>
  <p>Card content</p>
</BaseCard>

<!-- NEW -->
<Card 
  variant="default"
  size="hero" 
  interactive={true} 
  accent="var(--color-primary)"
  padding="lg"
>
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

### BrandedCard → Card

```svelte
<!-- OLD -->
<BrandedCard 
  variant="compact" 
  watermark={true} 
  glowOnHover={true}
>
  <h3>Premium Feature</h3>
  <p>Exclusive content</p>
</BrandedCard>

<!-- NEW -->
<Card 
  variant="branded"
  size="compact"
  interactive={true}
>
  <h3>Premium Feature</h3>
  <p>Exclusive content</p>
</Card>
```

### FeatureCard → Card

```svelte
<!-- OLD -->
<FeatureCard 
  icon="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
  title="Feature Title"
  description="Feature description"
  highlight={true}
/>

<!-- NEW -->
<Card 
  variant="feature"
  icon="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
  highlight={true}
>
  <h3>Feature Title</h3>
  <p>Feature description</p>
</Card>
```

### PricingCard → Card

```svelte
<!-- OLD -->
<PricingCard 
  title="Pro Plan"
  price="$99"
  period="month"
  description="Perfect for growing businesses"
  features={['Feature 1', 'Feature 2']}
  popular={true}
  ctaText="Get Started"
  ctaHref="/signup"
/>

<!-- NEW -->
<Card variant="pricing" popular={true}>
  <svelte:fragment slot="badge">
    {#if popular}
      <span class="bg-aspen-gold-400 text-granite-gray-700 px-4 py-1 rounded-full text-sm font-semibold">
        Most Popular
      </span>
    {/if}
  </svelte:fragment>
  
  <svelte:fragment slot="header">
    <h3 class="text-2xl font-bold text-skyline-blue-600 mb-2">Pro Plan</h3>
    <div class="flex items-baseline justify-center mb-2">
      <span class="text-4xl font-bold text-granite-gray-700">$99</span>
      <span class="text-granite-gray-500 ml-1">/month</span>
    </div>
    <p class="text-granite-gray-600 mt-2">Perfect for growing businesses</p>
  </svelte:fragment>
  
  <ul class="space-y-3 mb-6">
    <li class="flex items-start">
      <svg class="w-5 h-5 text-aspen-gold-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
      </svg>
      <span class="text-granite-gray-600">Feature 1</span>
    </li>
    <li class="flex items-start">
      <svg class="w-5 h-5 text-aspen-gold-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
      </svg>
      <span class="text-granite-gray-600">Feature 2</span>
    </li>
  </ul>
  
  <svelte:fragment slot="footer">
    <Button variant="primary" size="lg" href="/signup" fullWidth>
      Get Started
    </Button>
  </svelte:fragment>
</Card>
```

### ContentBox → Card

```svelte
<!-- OLD -->
<ContentBox>
  <h2>Section Title</h2>
  <p>Some content goes here</p>
</ContentBox>

<!-- NEW -->
<Card variant="content">
  <h2>Section Title</h2>
  <p>Some content goes here</p>
</Card>
```

## Input Component Migration 🔄

### BaseInput → Input

```svelte
<!-- OLD -->
<BaseInput 
  type="email"
  label="Email Address"
  placeholder="you@example.com"
  required={true}
  error={errors.email}
  bind:value={email}
/>

<!-- NEW -->
<Input 
  type="email"
  variant="default"
  label="Email Address"
  placeholder="you@example.com"
  required={true}
  error={errors.email}
  bind:value={email}
/>
```

### LuxuryInput → Input

```svelte
<!-- OLD -->
<LuxuryInput 
  type="text"
  label="Full Name"
  placeholder="John Doe"
  required={true}
  error={errors.name}
  bind:value={name}
/>

<!-- NEW -->
<Input 
  type="text"
  variant="luxury"
  label="Full Name"
  placeholder="John Doe"
  required={true}
  error={errors.name}
  bind:value={name}
/>
```

### Adding Icons to Inputs (New Feature)

```svelte
<!-- NEW - with left icon -->
<Input 
  type="email"
  variant="default"
  label="Email"
  icon="left"
  bind:value={email}
>
  <svelte:fragment slot="icon">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
    </svg>
  </svelte:fragment>
</Input>
```

### Minimal Style Input (New Variant)

```svelte
<!-- NEW - minimal variant -->
<Input 
  type="text"
  variant="minimal"
  label="Username"
  placeholder="@johndoe"
  bind:value={username}
/>
```

## Import Changes

Update your imports:

```svelte
<!-- OLD -->
<script>
  import { BaseButton, BaseCard, BrandedCard, FeatureCard, BaseInput, LuxuryInput } from '$lib/components/ui';
</script>

<!-- NEW -->
<script>
  import { Button, Card, Input } from '$lib/components/ui';
</script>
```

## Backward Compatibility

The old components are still exported for backward compatibility but will be deprecated in a future version. We recommend migrating to the new consolidated components as soon as possible.

## Benefits of Migration

1. **Consistency**: All cards and inputs behave the same way
2. **Flexibility**: More options and variants available
3. **Performance**: Less JavaScript to parse and execute
4. **Maintainability**: Single source of truth for each component type
5. **Future-proof**: New features will only be added to consolidated components

## Need Help?

If you encounter any issues during migration, please:
1. Check the component props in the source files
2. Look at the TypeScript types exported from `$lib/components/ui`
3. Reference the design system configuration at `$lib/config/design-system.ts`