<script lang="ts">
	export let text: string = '';
	export let included: boolean = true;
</script>

<li class="checklist-item" class:excluded={!included}>
	<svg 
		class="checklist-icon" 
		fill="none" 
		stroke="currentColor" 
		viewBox="0 0 24 24"
	>
		{#if included}
			<path 
				stroke-linecap="round" 
				stroke-linejoin="round" 
				stroke-width="2" 
				d="M5 13l4 4L19 7"
			></path>
		{:else}
			<path 
				stroke-linecap="round" 
				stroke-linejoin="round" 
				stroke-width="2" 
				d="M6 18L18 6M6 6l12 12"
			></path>
		{/if}
	</svg>
	<span class="checklist-text">{text}</span>
</li>

<style>
	.checklist-item {
		display: flex;
		align-items: start;
		gap: 12px;
	}
	
	.checklist-icon {
		width: 20px;
		height: 20px;
		flex-shrink: 0;
		margin-top: 2px;
		color: #10b981;
	}
	
	.excluded .checklist-icon {
		color: #ef4444;
	}
	
	.checklist-text {
		color: #374151;
		font-size: 16px;
		line-height: 1.6;
	}
	
	.excluded .checklist-text {
		color: #9ca3af;
		text-decoration: line-through;
	}
</style>