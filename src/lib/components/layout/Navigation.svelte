<script lang="ts">
	import { page } from '$app/stores';
	
	let mobileMenuOpen = false;
	
	const navItems = [
		{ label: 'Home', href: '/' },
		{ label: '$5,280 Site', href: '/5280-site' },
		{ label: 'Plans & Growth', href: '/plans-growth' },
		{ label: 'Solo Biz Helper', href: '/solo-biz-helper', special: true },
		{ label: 'Case Stories', href: '/case-stories' },
		{ label: 'About', href: '/about' }
	];
	
	$: currentPath = $page.url.pathname;
</script>

<nav class="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
	<div class="max-w-7xl mx-auto px-6">
		<div class="flex justify-between items-center h-16">
			<!-- Logo -->
			<a href="/" class="flex items-center group">
				<img 
					src="/images/logo/weknowco-full-logo.png" 
					alt="weKnowCO - Colorado Digital Marketing"
					class="h-10 w-auto hover:scale-105 transition-transform duration-200"
				/>
			</a>
			
			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center space-x-8">
				{#each navItems as item}
					<a 
						href={item.href}
						class="text-granite-gray-600 hover:text-skyline-blue-600 transition-colors font-medium {currentPath === item.href ? 'text-skyline-blue-600 font-semibold' : ''} {item.special ? 'text-red-rocks-rust hover:text-red-rocks-rust/80' : ''}"
					>
						{item.label}
					</a>
				{/each}
			</div>
			
			<!-- CTA Button -->
			<div class="hidden md:block">
				<a 
					href="/contact"
					class="bg-skyline-blue-600 text-white px-6 py-2 rounded-lg hover:bg-skyline-blue-700 transition-colors font-semibold"
				>
					Start Your Climb
				</a>
			</div>
			
			<!-- Mobile Menu Button -->
			<button 
				class="md:hidden p-2"
				on:click={() => mobileMenuOpen = !mobileMenuOpen}
				aria-label="Toggle menu"
			>
				<svg class="w-6 h-6 text-granite-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
			<div class="md:hidden border-t border-gray-200 py-4">
				<!-- Logo in mobile menu -->
				<div class="flex justify-center mb-6">
					<img src="/images/logo/weknowco-icon.svg" alt="" class="w-16 h-16 opacity-20" />
				</div>
				<div class="flex flex-col space-y-4">
					{#each navItems as item}
						<a 
							href={item.href}
							class="text-granite-gray-600 hover:text-skyline-blue-600 transition-colors font-medium flex items-center {currentPath === item.href ? 'text-skyline-blue-600 font-semibold' : ''} {item.special ? 'text-red-rocks-rust hover:text-red-rocks-rust/80' : ''}"
							on:click={() => mobileMenuOpen = false}
						>
							<span class="w-1 h-1 bg-aspen-gold-400 rounded-full mr-3"></span>
							{item.label}
						</a>
					{/each}
					<a 
						href="/contact"
						class="bg-skyline-blue-600 text-white px-6 py-2 rounded-lg hover:bg-skyline-blue-700 transition-colors font-semibold text-center mt-4"
						on:click={() => mobileMenuOpen = false}
					>
						Start Your Climb
					</a>
				</div>
			</div>
		{/if}
	</div>
</nav>