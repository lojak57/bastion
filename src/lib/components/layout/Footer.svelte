<script lang="ts">
	import { SITE_CONFIG } from '$lib/config/site.config';
	import CTAButton from '$lib/components/ui/CTAButton.svelte';
	const currentYear = new Date().getFullYear();
	
	const footerLinks = {
		services: [
			{ label: 'MVP Build', href: '/pricing' },
			{ label: 'CTO-as-a-Service', href: '/pricing' },
			{ label: 'Client Portal', href: '/portal' }
		],
		company: [
			{ label: 'About', href: '/about' },
			{ label: 'Contact', href: '/contact' },
			{ label: 'Build Wizard', href: '/build' }
		],
		legal: [
			{ label: 'Privacy Policy', href: '/privacy' },
			{ label: 'Terms of Service', href: '/terms' }
		]
	};
</script>

<footer class="bg-bastion-black text-off-white border-t-4 border-off-white">
	<!-- Background Pattern -->
	<div class="absolute inset-0 opacity-5">
		<div class="absolute top-0 left-0 w-96 h-96 bg-fortress-gray-900"></div>
		<div class="absolute bottom-0 right-0 w-64 h-64 bg-fortress-gray-900"></div>
	</div>
	
	<div class="relative max-w-7xl mx-auto px-6 py-16">
		<div class="grid grid-cols-1 md:grid-cols-4 gap-12">
			<!-- Brand Column -->
			<div class="md:col-span-1">
				<div class="mb-6">
					<h2 class="text-3xl font-bold font-display">BASTION</h2>
				</div>
				<p class="text-stone-gray-400 mb-6">
					{SITE_CONFIG.pricingHook}
				</p>
				<div class="text-steel-blue-400">
					<p class="font-mono text-sm">Fast. Real. Yours.</p>
				</div>
			</div>
			
			<!-- Services -->
			<div>
				<h3 class="font-semibold text-lg mb-4 text-steel-blue-400">Services</h3>
				<ul class="space-y-3">
					{#each footerLinks.services as link}
						<li>
							<a 
								href={link.href}
								class="text-white/80 hover:text-white transition-colors flex items-center group"
							>
								<span class="w-1 h-1 bg-steel-blue-400 rounded-full mr-2 group-hover:w-2 transition-all"></span>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
			
			<!-- Company -->
			<div>
				<h3 class="font-semibold text-lg mb-4 text-steel-blue-400">Company</h3>
				<ul class="space-y-3">
					{#each footerLinks.company as link}
						<li>
							<a 
								href={link.href}
								class="text-white/80 hover:text-white transition-colors flex items-center group"
							>
								<span class="w-1 h-1 bg-steel-blue-400 rounded-full mr-2 group-hover:w-2 transition-all"></span>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
			
			<!-- CTA -->
			<div class="bg-fortress-gray-900 p-6 border-2 border-off-white shadow-brutalist-sm">
				<h3 class="font-bold text-lg mb-2">Ready to Build?</h3>
				<p class="text-stone-gray-400 text-sm mb-4">
					Stop talking. Start shipping.
				</p>
				<CTAButton 
					href="/build"
					size="md"
					variant="yellow"
					fullWidth={true}
				>
					Scope My Build →
				</CTAButton>
			</div>
		</div>
		
		<!-- Bottom Bar -->
		<div class="border-t border-white/20 mt-12 pt-8">
			<div class="flex flex-col md:flex-row justify-between items-center gap-4">
				<div class="flex items-center space-x-2 text-stone-gray-500 text-sm">
					<span>&copy; {currentYear} {SITE_CONFIG.name}.</span>
					<span>•</span>
					<span>Built different.</span>
				</div>
				<div class="flex items-center space-x-6">
					{#each footerLinks.legal as link}
						<a 
							href={link.href}
							class="text-stone-gray-500 hover:text-off-white text-sm transition-colors"
						>
							{link.label}
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</footer>