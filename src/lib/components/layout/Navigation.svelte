<script lang="ts">
	import { page } from '$app/stores';
	import CTAButton from '$lib/components/ui/CTAButton.svelte';
	
	let mobileMenuOpen = false;
	
	const navItems = [
		{ label: 'Home', href: '/' },
		{ label: 'How It Works', href: '/how-it-works' },
		{ label: 'Pricing', href: '/pricing' },
		{ label: 'Portal', href: '/portal' },
		{ label: 'About', href: '/about' }
	];
	
	$: currentPath = $page.url.pathname;
</script>

<nav class="bg-bastion-black border-b-2 border-off-white sticky top-0 z-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6">
		<div class="flex justify-between items-center h-14 sm:h-16">
			<!-- Logo -->
			<div class="flex items-center">
				<a href="/" class="text-2xl font-bold font-display text-off-white">
					BASTION
				</a>
			</div>
			
			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center space-x-8">
				{#each navItems as item}
					<a 
						href={item.href}
						class="text-stone-gray-300 hover:text-off-white transition-colors font-medium font-display {currentPath === item.href ? 'text-off-white' : ''}"
					>
						{item.label}
					</a>
				{/each}
			</div>
			
			<!-- CTA Button -->
			<div class="hidden md:flex items-center">
				<CTAButton 
					href="/build"
					size="md"
					variant="yellow"
				>
					Scope My Build →
				</CTAButton>
			</div>
			
			<!-- Mobile Menu Button -->
			<button 
				class="md:hidden p-1.5 sm:p-2"
				on:click={() => mobileMenuOpen = !mobileMenuOpen}
				aria-label="Toggle menu"
			>
				<svg class="w-5 h-5 sm:w-6 sm:h-6 text-off-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					{#if mobileMenuOpen}
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
					{:else}
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
					{/if}
				</svg>
			</button>
		</div>
		
		<!-- Mobile Navigation -->
		{#if mobileMenuOpen}
			<div class="md:hidden border-t-2 border-off-white py-3 sm:py-4">
				<div class="flex flex-col space-y-3 sm:space-y-4">
					{#each navItems as item}
						<a 
							href={item.href}
							class="text-stone-gray-300 hover:text-off-white transition-colors font-medium flex items-center {currentPath === item.href ? 'text-off-white font-bold' : ''}"
							on:click={() => mobileMenuOpen = false}
						>
							<span class="w-2 h-2 bg-steel-blue-400 mr-3"></span>
							{item.label}
						</a>
					{/each}
					<CTAButton 
						href="/build"
						size="lg"
						variant="yellow"
						fullWidth={true}
						onClick={() => mobileMenuOpen = false}
					>
						Scope My Build →
					</CTAButton>
				</div>
			</div>
		{/if}
	</div>
</nav>