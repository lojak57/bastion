<script lang="ts">
	export let loading: boolean = false;
	export let size: "sm" | "md" | "lg" = "md";
	
	$: sizeClasses = {
		sm: 'w-12 h-12',
		md: 'w-20 h-20',
		lg: 'w-32 h-32'
	}[size];
</script>

{#if loading}
	<div class="logo-loader-overlay">
		<div class="logo-loader {sizeClasses}">
			<img 
				src="/images/logo/bastion-icon.svg" 
				alt="Loading..."
				class="logo-spinner"
			/>
			<div class="progress-ring">
				<svg viewBox="0 0 100 100">
					<circle
						cx="50"
						cy="50"
						r="45"
						fill="none"
						stroke="var(--aspen-gold-400)"
						stroke-width="3"
						stroke-dasharray="283"
						stroke-dashoffset="283"
						class="progress-circle"
					/>
				</svg>
			</div>
		</div>
	</div>
{/if}

<style>
	.logo-loader-overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(10px);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 9999;
		animation: fadeIn 0.3s ease-out;
	}
	
	.logo-loader {
		position: relative;
		animation: pulse 2s ease-in-out infinite;
	}
	
	.logo-spinner {
		width: 100%;
		height: 100%;
		animation: spin 3s linear infinite;
	}
	
	.progress-ring {
		position: absolute;
		top: -10%;
		left: -10%;
		width: 120%;
		height: 120%;
		transform: rotate(-90deg);
	}
	
	.progress-circle {
		animation: progressFill 2s ease-out forwards;
	}
	
	@keyframes fadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}
	
	@keyframes spin {
		from { transform: rotate(0deg); }
		to { transform: rotate(360deg); }
	}
	
	@keyframes pulse {
		0%, 100% { transform: scale(1); }
		50% { transform: scale(1.05); }
	}
	
	@keyframes progressFill {
		to { stroke-dashoffset: 0; }
	}
	
	/* Dark mode */
	:global(.dark) .logo-loader-overlay {
		background: rgba(23, 23, 23, 0.95);
	}
</style>