<script lang="ts">
	export let week: string = '';
	export let title: string = '';
	export let tasks: string[] = [];
</script>

<div class="timeline-item">
	<div class="timeline-marker">
		<div class="timeline-week">{week}</div>
	</div>
	<div class="timeline-content">
		<h4 class="timeline-title">{title}</h4>
		{#if tasks.length > 0}
			<ul class="timeline-tasks">
				{#each tasks as task}
					<li>{task}</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>

<style>
	.timeline-item {
		display: flex;
		gap: 24px;
		position: relative;
		padding-bottom: 32px;
	}
	
	.timeline-item:not(:last-child)::before {
		content: '';
		position: absolute;
		left: 24px;
		top: 48px;
		bottom: 0;
		width: 2px;
		background: #e5e7eb;
	}
	
	.timeline-marker {
		flex-shrink: 0;
		width: 48px;
		height: 48px;
		background: linear-gradient(135deg, #1C4D72, #2563eb);
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 4px 14px 0 rgba(28, 77, 114, 0.25);
		position: relative;
		z-index: 1;
	}
	
	.timeline-week {
		color: white;
		font-weight: 700;
		font-size: 14px;
		font-family: 'IBM Plex Mono', monospace;
	}
	
	.timeline-content {
		flex-grow: 1;
		background: white;
		border-radius: 12px;
		padding: 20px;
		border: 2px solid #f1f5f9;
		transition: all 0.3s ease;
	}
	
	.timeline-content:hover {
		border-color: #1C4D72;
		box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.1);
	}
	
	.timeline-title {
		font-size: 18px;
		font-weight: 700;
		color: #1e293b;
		margin: 0 0 12px 0;
		font-family: 'Space Grotesk', sans-serif;
	}
	
	.timeline-tasks {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	
	.timeline-tasks li {
		color: #64748b;
		font-size: 14px;
		padding-left: 20px;
		position: relative;
	}
	
	.timeline-tasks li::before {
		content: '→';
		position: absolute;
		left: 0;
		color: #FDBA31;
		font-weight: 700;
	}
</style>