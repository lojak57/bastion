<script lang="ts">
	export let title: string = '';
	export let description: string = '';
	export let icon: string = '';
</script>

<div class="wizard-step">
	{#if icon}
		<div class="step-icon">
			<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={icon}></path>
			</svg>
		</div>
	{/if}
	
	{#if title}
		<h2 class="step-title">{title}</h2>
	{/if}
	
	{#if description}
		<p class="step-description">{description}</p>
	{/if}
	
	<div class="step-content">
		<slot />
	</div>
</div>

<style>
	.wizard-step {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 16px;
	}
	
	.step-icon {
		width: 64px;
		height: 64px;
		background: linear-gradient(135deg, #1C4D72, #FDBA31);
		color: white;
		border-radius: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 8px;
	}
	
	.step-title {
		font-size: 24px;
		font-weight: 700;
		color: #1e293b;
		margin: 0;
		font-family: 'Space Grotesk', sans-serif;
	}
	
	.step-description {
		font-size: 16px;
		color: #64748b;
		line-height: 1.6;
		max-width: 400px;
		margin: 0;
	}
	
	.step-content {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 20px;
		margin-top: 8px;
	}
	
	/* Mobile responsiveness */
	@media (max-width: 640px) {
		.step-title {
			font-size: 20px;
		}
		
		.step-description {
			font-size: 15px;
		}
		
		.step-icon {
			width: 56px;
			height: 56px;
		}
	}
</style>