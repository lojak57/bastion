<script lang="ts">
	export let icon: string = '';
	export let title: string = '';
	export let description: string = '';
	export let highlight: boolean = false;
</script>

<div class="feature-card" class:highlight>
	{#if icon}
		<div class="icon-wrapper">
			<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={icon}></path>
			</svg>
		</div>
	{/if}
	
	<h3 class="feature-title">{title}</h3>
	
	{#if description}
		<p class="feature-description">{description}</p>
	{/if}
	
	<slot />
</div>

<style>
	.feature-card {
		background: white;
		border-radius: 16px;
		padding: 24px;
		height: 100%;
		transition: all 0.3s ease;
		border: 2px solid #e5e7eb;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	
	.feature-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
		border-color: #1C4D72;
	}
	
	.feature-card.highlight {
		background: linear-gradient(135deg, #f0f9ff 0%, #fef3c7 100%);
		border-color: #FDBA31;
	}
	
	.icon-wrapper {
		width: 48px;
		height: 48px;
		background: linear-gradient(135deg, #1C4D72, #2563eb);
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		margin-bottom: 4px;
	}
	
	.highlight .icon-wrapper {
		background: linear-gradient(135deg, #FDBA31, #f59e0b);
	}
	
	.feature-title {
		font-size: 18px;
		font-weight: 700;
		color: #1e293b;
		margin: 0;
		font-family: 'Space Grotesk', sans-serif;
	}
	
	.feature-description {
		font-size: 14px;
		color: #64748b;
		line-height: 1.6;
		margin: 0;
		flex-grow: 1;
	}
	
	/* Mobile optimizations */
	@media (max-width: 640px) {
		.feature-card {
			padding: 20px;
		}
		
		.icon-wrapper {
			width: 40px;
			height: 40px;
		}
		
		.feature-title {
			font-size: 16px;
		}
		
		.feature-description {
			font-size: 13px;
		}
	}
</style>