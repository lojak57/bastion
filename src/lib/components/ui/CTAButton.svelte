<script lang="ts">
  import { goto } from '$app/navigation';
  
  export let href: string = '';
  export let variant: 'yellow' | 'green' = 'yellow';
  export let size: 'sm' | 'md' | 'lg' | 'xl' = 'lg';
  export let fullWidth: boolean = false;
  export let onClick: (() => void) | undefined = undefined;
  
  const handleClick = (e: MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    } else if (href) {
      e.preventDefault();
      goto(href);
    }
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm md:px-4 md:py-2',
    md: 'px-4 py-2 text-sm md:px-6 md:py-3 md:text-base',
    lg: 'px-6 py-3 text-base md:px-8 md:py-4 md:text-lg',
    xl: 'px-8 py-4 text-lg md:px-12 md:py-6 md:text-xl'
  };
  
  $: variantClasses = variant === 'yellow' 
    ? 'bg-retro-yellow hover:bg-retro-yellow-dark text-bastion-black' 
    : 'bg-retro-green hover:bg-retro-green-dark text-bastion-black';
  
  $: classes = `
    ${variantClasses}
    ${sizeClasses[size]}
    ${fullWidth ? 'w-full' : 'inline-block'}
    font-black uppercase tracking-wider
    border-4 border-bastion-black
    shadow-cta hover:shadow-cta-hover
    transform hover:-translate-y-1
    transition-all duration-150
    cursor-pointer
    retro-cta
  `;
</script>

{#if href}
  <a 
    {href}
    on:click={handleClick}
    class={classes}
  >
    <slot />
  </a>
{:else}
  <button
    on:click={handleClick}
    class={classes}
  >
    <slot />
  </button>
{/if}

<style>
  .retro-cta {
    position: relative;
    font-family: var(--bastion-font-display);
  }
  
  .retro-cta:active {
    transform: translateY(2px);
    box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 1);
  }
</style>