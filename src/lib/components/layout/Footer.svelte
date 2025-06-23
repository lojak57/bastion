<script lang="ts">
	const currentYear = new Date().getFullYear();
	
	const footerLinks = {
		services: [
			{ label: '$5,280 Website', href: '/5280-site' },
			{ label: 'Monthly Plans', href: '/plans-growth' },
			{ label: 'Solo Biz Helper', href: '/solo-biz-helper' }
		],
		company: [
			{ label: 'About', href: '/about' },
			{ label: 'Case Stories', href: '/case-stories' },
			{ label: 'Contact', href: '/contact' }
		],
		legal: [
			{ label: 'Privacy Policy', href: '/privacy' },
			{ label: 'Terms of Service', href: '/terms' }
		]
	};
</script>

<footer class="bg-gradient-to-br from-granite-gray-800 to-skyline-blue-900 text-white relative overflow-hidden">
	<!-- Background Pattern -->
	<div class="absolute inset-0 opacity-5">
		<div class="absolute top-0 left-0 w-96 h-96">
			<img src="/favicon.svg" alt="" class="w-full h-full" />
		</div>
		<div class="absolute bottom-0 right-0 w-64 h-64">
			<img src="/images/logo/weknowco-icon.svg" alt="" class="w-full h-full" />
		</div>
	</div>
	
	<div class="relative max-w-7xl mx-auto px-6 py-16">
		<div class="grid grid-cols-1 md:grid-cols-4 gap-12">
			<!-- Brand Column -->
			<div class="md:col-span-1">
				<div class="flex items-center mb-6">
					<img 
						src="/images/logo/weknowco-full-logo.png" 
						alt="weKnowCO"
						class="h-12 w-auto brightness-0 invert"
					/>
				</div>
				<p class="text-white/80 mb-6">
					Colorado's digital marketing partner. Turning mile-high dreams into thriving brands.
				</p>
				<div class="flex items-center space-x-3 text-aspen-gold-400">
					<img src="/favicon.svg" alt="" class="w-6 h-6" />
					<span class="font-mono text-sm">Elevation: 5,280ft</span>
				</div>
			</div>
			
			<!-- Services -->
			<div>
				<h3 class="font-semibold text-lg mb-4 text-aspen-gold-400">Services</h3>
				<ul class="space-y-3">
					{#each footerLinks.services as link}
						<li>
							<a 
								href={link.href}
								class="text-white/80 hover:text-white transition-colors flex items-center group"
							>
								<span class="w-1 h-1 bg-aspen-gold-400 rounded-full mr-2 group-hover:w-2 transition-all"></span>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
			
			<!-- Company -->
			<div>
				<h3 class="font-semibold text-lg mb-4 text-aspen-gold-400">Company</h3>
				<ul class="space-y-3">
					{#each footerLinks.company as link}
						<li>
							<a 
								href={link.href}
								class="text-white/80 hover:text-white transition-colors flex items-center group"
							>
								<span class="w-1 h-1 bg-aspen-gold-400 rounded-full mr-2 group-hover:w-2 transition-all"></span>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
			
			<!-- CTA -->
			<div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
				<div class="flex justify-center mb-4">
					<img src="/images/logo/weknowco-icon.svg" alt="" class="w-16 h-16" />
				</div>
				<h3 class="font-semibold text-lg mb-2 text-center">Ready to Climb?</h3>
				<p class="text-white/80 text-sm mb-4 text-center">
					Start your journey to mile-high success.
				</p>
				<a 
					href="/contact"
					class="block bg-aspen-gold-400 text-granite-gray-800 px-6 py-3 rounded-lg hover:bg-aspen-gold-500 transition-colors font-semibold text-center"
				>
					Get Started Today
				</a>
			</div>
		</div>
		
		<!-- Bottom Bar -->
		<div class="border-t border-white/20 mt-12 pt-8">
			<div class="flex flex-col md:flex-row justify-between items-center gap-4">
				<div class="flex items-center space-x-2 text-white/60 text-sm">
					<span>&copy; {currentYear} weKnowCO.</span>
					<span>•</span>
					<span>Made with</span>
					<img src="/favicon.svg" alt="love" class="w-4 h-4 inline" />
					<span>in Colorado</span>
				</div>
				<div class="flex items-center space-x-6">
					{#each footerLinks.legal as link}
						<a 
							href={link.href}
							class="text-white/60 hover:text-white text-sm transition-colors"
						>
							{link.label}
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</footer>