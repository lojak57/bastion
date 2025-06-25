<script lang="ts">
	import { lazyImport } from '$lib/utils/lazyLoad';
	
	export let wizardType: 'lead-capture' | 'partnership' = 'lead-capture';
	export let isOpen = false;
	export let onClose: (() => void) | undefined = undefined;
	
	let WizardComponent: any = null;
	let isLoading = false;
	
	const wizardLoaders = {
		'lead-capture': () => lazyImport(() => import('./wizard/LeadCaptureWizard.svelte')),
		'partnership': () => lazyImport(() => import('./wizard/PartnershipWizard.svelte'))
	};
	
	async function loadWizard() {
		if (WizardComponent || isLoading) return;
		
		isLoading = true;
		try {
			WizardComponent = await wizardLoaders[wizardType]();
		} finally {
			isLoading = false;
		}
	}
	
	$: if (isOpen && !WizardComponent) {
		loadWizard();
	}
	
	function handleClose() {
		isOpen = false;
		if (onClose) onClose();
	}
</script>

{#if isOpen}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
		{#if isLoading}
			<div class="bg-white rounded-lg p-8 animate-pulse">
				<div class="flex items-center justify-center space-x-2">
					<div class="w-4 h-4 bg-skyline-blue-500 rounded-full animate-bounce"></div>
					<div class="w-4 h-4 bg-skyline-blue-500 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
					<div class="w-4 h-4 bg-skyline-blue-500 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
				</div>
				<p class="mt-4 text-granite-gray-600 text-center">Loading...</p>
			</div>
		{:else if WizardComponent}
			<div class="animate-slide-up">
				<svelte:component this={WizardComponent} {isOpen} onClose={handleClose} />
			</div>
		{/if}
	</div>
{/if}

<style>
	@keyframes fade-in {
		from { opacity: 0; }
		to { opacity: 1; }
	}
	
	@keyframes slide-up {
		from { 
			opacity: 0; 
			transform: translateY(20px) scale(0.95); 
		}
		to { 
			opacity: 1; 
			transform: translateY(0) scale(1); 
		}
	}
	
	.animate-fade-in {
		animation: fade-in 0.2s ease-out;
	}
	
	.animate-slide-up {
		animation: slide-up 0.3s ease-out;
	}
</style>