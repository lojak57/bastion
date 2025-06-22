<script lang="ts">
	export let number: string = '';
	export let label: string = '';
	export let description: string = '';
</script>

<div class="value-prop">
	<div class="value-number">{number}</div>
	<div class="value-content">
		<div class="value-label">{label}</div>
		{#if description}
			<div class="value-description">{description}</div>
		{/if}
	</div>
</div>

<style>
	.value-prop {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 16px;
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(10px);
		border-radius: 12px;
		border: 1px solid rgba(255, 255, 255, 0.2);
		transition: all 0.3s ease;
	}
	
	.value-prop:hover {
		background: rgba(255, 255, 255, 0.15);
		transform: translateX(4px);
	}
	
	.value-number {
		font-size: 28px;
		font-weight: 700;
		color: #FDBA31;
		font-family: 'Space Grotesk', sans-serif;
		min-width: 48px;
		text-align: center;
	}
	
	.value-content {
		flex-grow: 1;
	}
	
	.value-label {
		font-size: 16px;
		font-weight: 600;
		color: white;
		margin-bottom: 2px;
	}
	
	.value-description {
		font-size: 12px;
		color: rgba(255, 255, 255, 0.8);
		line-height: 1.4;
	}
	
	/* Mobile optimizations */
	@media (max-width: 640px) {
		.value-prop {
			gap: 8px;
			padding: 12px;
		}
		
		.value-number {
			font-size: 24px;
			min-width: 40px;
		}
		
		.value-label {
			font-size: 14px;
		}
		
		.value-description {
			font-size: 11px;
		}
	}
</style>