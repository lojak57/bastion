<script lang="ts">
	import BaseCard from './BaseCard.svelte';
	
	export let variant: "hero" | "compact" | "mini" = "hero";
	export let clickable: boolean = false;
	export let href: string | undefined = undefined;
	export let padding: "none" | "sm" | "md" | "lg" = "md";
	export let watermark: boolean = true;
	export let glowOnHover: boolean = true;
	
	let className: string = "";
	export { className as class };
</script>

<BaseCard 
	{variant} 
	{clickable} 
	{href} 
	{padding}
	elevated={true}
	class="branded-card {glowOnHover ? 'glow-hover' : ''} {className}"
	on:click
	on:keydown
>
	{#if watermark}
		<div class="logo-watermark">
			<img src="/favicon.svg" alt="" />
		</div>
	{/if}
	
	<div class="relative z-10">
		<slot />
	</div>
</BaseCard>

<style>
	:global(.branded-card) {
		position: relative;
		overflow: hidden;
		background: linear-gradient(135deg, 
			var(--snowfield-white) 0%, 
			var(--granite-gray-50) 100%
		);
		border: 2px solid var(--skyline-blue-100);
	}
	
	:global(.branded-card.glow-hover):hover {
		border-color: var(--skyline-blue-300);
		box-shadow: 
			0 10px 40px -10px rgba(28, 77, 114, 0.3),
			0 0 40px -20px rgba(247, 196, 54, 0.2);
	}
	
	.logo-watermark {
		position: absolute;
		bottom: -20px;
		right: -20px;
		width: 120px;
		height: 120px;
		opacity: 0.05;
		pointer-events: none;
		transition: all 0.3s ease;
	}
	
	:global(.branded-card:hover) .logo-watermark {
		opacity: 0.08;
		transform: rotate(5deg) scale(1.1);
	}
	
	.logo-watermark img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
	
	/* Dark mode adjustments */
	:global(.dark .branded-card) {
		background: linear-gradient(135deg, 
			var(--granite-gray-800) 0%, 
			var(--skyline-blue-900) 100%
		);
		border-color: var(--skyline-blue-700);
	}
</style>