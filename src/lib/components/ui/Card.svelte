<script lang="ts">
  export let variant: "default" | "branded" | "feature" | "pricing" | "content" = "default";
  export let size: "mini" | "compact" | "default" | "hero" = "default";
  export let elevation: "none" | "sm" | "md" | "lg" = "sm";
  export let interactive: boolean = false;
  export let href: string | undefined = undefined;
  export let accent: string = "var(--color-primary)";
  export let padding: "none" | "sm" | "md" | "lg" = "md";
  export let loading: boolean = false;
  export let disabled: boolean = false;
  
  // Feature variant specific props
  export let icon: string | undefined = undefined;
  export let highlight: boolean = false;
  
  // Pricing variant specific props
  export let popular: boolean = false;
  
  // Allow custom CSS classes
  let className: string = "";
  export { className as class };
  
  // Determine if this should be interactive
  $: isLink = href !== undefined;
  $: isInteractive = interactive || isLink;
  
  // Build classes
  $: cardClasses = [
    "wkc-card",
    `variant-${variant}`,
    `size-${size}`,
    `elevation-${elevation}`,
    `padding-${padding}`,
    isInteractive && "interactive",
    loading && "loading",
    disabled && "disabled",
    highlight && "highlight",
    popular && "popular",
    className
  ]
    .filter(Boolean)
    .join(" ");
</script>

{#if isLink}
  <a
    {href}
    class={cardClasses}
    style="--accent-color: {accent}"
    role="button"
    tabindex={disabled ? -1 : 0}
    aria-disabled={disabled}
    on:click
    on:keydown
  >
    <div class="card-inner">
      {#if loading}
        <div class="loading-overlay">
          <div class="skeleton skeleton-card"></div>
        </div>
      {:else}
        {#if $$slots.badge}
          <div class="card-badge">
            <slot name="badge" />
          </div>
        {/if}
        
        {#if icon || $$slots.icon}
          <div class="card-icon">
            {#if $$slots.icon}
              <slot name="icon" />
            {:else if icon}
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={icon}></path>
              </svg>
            {/if}
          </div>
        {/if}
        
        {#if $$slots.header}
          <div class="card-header">
            <slot name="header" />
          </div>
        {/if}
        
        <div class="card-content">
          <slot />
        </div>
        
        {#if $$slots.footer}
          <div class="card-footer">
            <slot name="footer" />
          </div>
        {/if}
      {/if}
    </div>
  </a>
{:else if isInteractive}
  <button
    class={cardClasses}
    style="--accent-color: {accent}"
    {disabled}
    aria-disabled={disabled}
    on:click
    on:keydown
  >
    <div class="card-inner">
      {#if loading}
        <div class="loading-overlay">
          <div class="skeleton skeleton-card"></div>
        </div>
      {:else}
        {#if $$slots.badge}
          <div class="card-badge">
            <slot name="badge" />
          </div>
        {/if}
        
        {#if icon || $$slots.icon}
          <div class="card-icon">
            {#if $$slots.icon}
              <slot name="icon" />
            {:else if icon}
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={icon}></path>
              </svg>
            {/if}
          </div>
        {/if}
        
        {#if $$slots.header}
          <div class="card-header">
            <slot name="header" />
          </div>
        {/if}
        
        <div class="card-content">
          <slot />
        </div>
        
        {#if $$slots.footer}
          <div class="card-footer">
            <slot name="footer" />
          </div>
        {/if}
      {/if}
    </div>
  </button>
{:else}
  <div
    class={cardClasses}
    style="--accent-color: {accent}"
  >
    <div class="card-inner">
      {#if loading}
        <div class="loading-overlay">
          <div class="skeleton skeleton-card"></div>
        </div>
      {:else}
        {#if $$slots.badge}
          <div class="card-badge">
            <slot name="badge" />
          </div>
        {/if}
        
        {#if icon || $$slots.icon}
          <div class="card-icon">
            {#if $$slots.icon}
              <slot name="icon" />
            {:else if icon}
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={icon}></path>
              </svg>
            {/if}
          </div>
        {/if}
        
        {#if $$slots.header}
          <div class="card-header">
            <slot name="header" />
          </div>
        {/if}
        
        <div class="card-content">
          <slot />
        </div>
        
        {#if $$slots.footer}
          <div class="card-footer">
            <slot name="footer" />
          </div>
        {/if}
      {/if}
    </div>
  </div>
{/if}

<style>
  /* Base card styles */
  .wkc-card {
    position: relative;
    background-color: var(--color-surface);
    border-radius: var(--radius-lg);
    overflow: hidden;
    width: 100%;
    text-align: left;
    font-family: inherit;
    color: inherit;
    text-decoration: none;
    transition: var(--transition-all);
    border: 1px solid transparent;
  }
  
  .card-inner {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  /* Size variants */
  .size-mini {
    min-height: 80px;
  }
  
  .size-compact {
    min-height: 120px;
  }
  
  .size-default {
    min-height: 160px;
  }
  
  .size-hero {
    min-height: 200px;
  }
  
  /* Padding variants */
  .padding-none .card-inner {
    padding: 0;
  }
  
  .padding-sm .card-inner {
    padding: var(--space-3);
  }
  
  .padding-md .card-inner {
    padding: var(--space-4);
  }
  
  .padding-lg .card-inner {
    padding: var(--space-6);
  }
  
  /* Elevation variants */
  .elevation-none {
    box-shadow: none;
  }
  
  .elevation-sm {
    box-shadow: var(--shadow-sm);
  }
  
  .elevation-md {
    box-shadow: var(--shadow-md);
  }
  
  .elevation-lg {
    box-shadow: var(--shadow-lg);
  }
  
  /* Interactive states */
  .interactive {
    cursor: pointer;
  }
  
  .interactive:hover:not(.disabled) {
    transform: translateY(-2px);
  }
  
  .elevation-sm.interactive:hover:not(.disabled) {
    box-shadow: var(--shadow-md);
  }
  
  .elevation-md.interactive:hover:not(.disabled) {
    box-shadow: var(--shadow-lg);
  }
  
  .elevation-lg.interactive:hover:not(.disabled) {
    box-shadow: var(--shadow-xl);
  }
  
  .interactive:focus {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
  
  .interactive:active:not(.disabled) {
    transform: translateY(-1px);
  }
  
  /* Default variant */
  .variant-default {
    border-color: var(--color-border-muted);
  }
  
  /* Accent bar for default variant */
  .variant-default::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--accent-color);
    transition: width var(--duration-300) var(--ease-out);
    z-index: 1;
  }
  
  .variant-default.interactive:hover::before {
    width: 100%;
  }
  
  /* Branded variant */
  .variant-branded {
    background: linear-gradient(135deg, 
      var(--snowfield-white) 0%, 
      var(--granite-gray-50) 100%
    );
    border: 2px solid var(--skyline-blue-100);
  }
  
  .variant-branded::after {
    content: "";
    position: absolute;
    bottom: -20px;
    right: -20px;
    width: 120px;
    height: 120px;
    background-image: url('/favicon.svg');
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.05;
    pointer-events: none;
    transition: all 0.3s ease;
  }
  
  .variant-branded:hover::after {
    opacity: 0.08;
    transform: rotate(5deg) scale(1.1);
  }
  
  .variant-branded.interactive:hover:not(.disabled) {
    border-color: var(--skyline-blue-300);
    box-shadow: 
      0 10px 40px -10px rgba(28, 77, 114, 0.3),
      0 0 40px -20px rgba(247, 196, 54, 0.2);
  }
  
  /* Feature variant */
  .variant-feature {
    background: white;
    border: 2px solid #e5e7eb;
  }
  
  .variant-feature.interactive:hover:not(.disabled) {
    border-color: #1C4D72;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
  
  .variant-feature.highlight {
    background: linear-gradient(135deg, #f0f9ff 0%, #fef3c7 100%);
    border-color: #FDBA31;
  }
  
  /* Pricing variant */
  .variant-pricing {
    background: white;
    border: 1px solid var(--color-border-muted);
  }
  
  .variant-pricing.popular {
    border: 2px solid var(--aspen-gold-400);
    box-shadow: var(--shadow-xl);
  }
  
  .variant-pricing.interactive:hover:not(.disabled) {
    transform: scale(1.05);
  }
  
  /* Content variant (minimal styling) */
  .variant-content {
    background: var(--color-surface);
    border: 1px solid var(--color-border-muted);
  }
  
  /* Card sections */
  .card-badge {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
  }
  
  .card-icon {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: var(--space-3);
  }
  
  .variant-feature .card-icon {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, #1C4D72, #2563eb);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin-bottom: var(--space-4);
  }
  
  .variant-feature.highlight .card-icon {
    background: linear-gradient(135deg, #FDBA31, #f59e0b);
  }
  
  .card-header {
    margin-bottom: var(--space-3);
  }
  
  .card-content {
    flex: 1;
  }
  
  .card-footer {
    margin-top: var(--space-4);
  }
  
  /* Loading state */
  .loading {
    pointer-events: none;
  }
  
  .loading-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-surface);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }
  
  .loading-overlay .skeleton-card {
    width: 100%;
    height: 100%;
    margin: 0;
  }
  
  /* Disabled state */
  .disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  /* Remove button styles when used as button */
  button.wkc-card {
    border: 1px solid var(--color-border-muted);
    background-color: var(--color-surface);
  }
  
  /* Remove link styles when used as link */
  a.wkc-card {
    color: inherit;
    text-decoration: none;
  }
  
  a.wkc-card:hover {
    color: inherit;
    text-decoration: none;
  }
  
  /* Mobile adjustments */
  @media (max-width: 640px) {
    .size-hero {
      min-height: 150px;
    }
    
    .size-default {
      min-height: 120px;
    }
    
    .size-compact {
      min-height: 100px;
    }
    
    .size-mini {
      min-height: 60px;
    }
    
    .padding-lg .card-inner {
      padding: var(--space-4);
    }
    
    .variant-feature .card-icon {
      width: 40px;
      height: 40px;
    }
  }
  
  /* Dark mode adjustments */
  :global(.dark) .wkc-card {
    background-color: var(--color-surface);
    border-color: var(--color-border);
  }
  
  :global(.dark) .variant-branded {
    background: linear-gradient(135deg, 
      var(--granite-gray-800) 0%, 
      var(--skyline-blue-900) 100%
    );
    border-color: var(--skyline-blue-700);
  }
  
  :global(.dark) .variant-feature {
    background-color: var(--color-surface);
    border-color: var(--color-border);
  }
  
  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    .wkc-card {
      transition: none;
    }
    
    .wkc-card::before {
      transition: none;
    }
    
    .interactive:hover {
      transform: none;
    }
  }
</style>