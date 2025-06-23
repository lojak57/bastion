<script lang="ts">
	// Hero section with main intro
</script>

<!-- About Hero Section -->
<section class="py-32 bg-gradient-to-br from-skyline-blue-600 via-skyline-blue-700 to-granite-gray-800 text-white relative overflow-hidden">
	<!-- Background decorative elements -->
	<div class="absolute inset-0 overflow-hidden">
		<div class="absolute top-20 right-20 w-96 h-96 bg-aspen-gold-400/10 rounded-full blur-3xl animate-pulse"></div>
		<div class="absolute bottom-20 left-20 w-80 h-80 bg-red-rocks-rust/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
		<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-snowfield-white/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
	</div>
	
	<div class="max-w-7xl mx-auto px-6 relative z-10">
		<div class="grid lg:grid-cols-2 gap-16 items-center">
			<!-- Left: Story -->
			<div class="space-y-8">
				<div class="space-y-6">
					<h1 class="font-display text-4xl md:text-6xl font-bold leading-tight">
						About Us: <span class="text-aspen-gold-400">weKnowCO</span>
					</h1>
					<div class="text-xl md:text-2xl text-white/90 space-y-4">
						<p class="font-medium">We've been in business together since before we had bank accounts.</p>
						<p class="text-lg">Literally.</p>
					</div>
				</div>
				
				<div class="flex items-center space-x-4">
					<div class="w-px h-16 bg-gradient-to-b from-aspen-gold-400 to-transparent"></div>
					<p class="text-white/80 italic">From high school hustlers to Colorado's marketing leaders</p>
				</div>
			</div>
			
			<!-- Right: Hero Visual -->
			<div class="relative">
				<!-- Hero Image with Brand Elements -->
				<div class="aspect-[4/5] relative rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-500">
					<img 
						src="/images/hero-mountains.png" 
						alt="Colorado Mountains - weKnowCO Territory" 
						class="w-full h-full object-cover"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-skyline-blue-600/80 via-transparent to-transparent"></div>
					
					<!-- Brand overlay -->
					<div class="absolute bottom-8 left-8 right-8 text-center">
						<img 
							src="/images/logo/weknowco-full-logo.png" 
							alt="weKnowCO" 
							class="h-12 mx-auto mb-4 filter brightness-0 invert"
						/>
						<p class="text-white/90 text-sm font-medium">Colorado Natives Since Day One</p>
					</div>
				</div>
				
				<!-- Floating brand elements -->
				<div class="absolute -top-8 -right-8 w-16 h-16 bg-aspen-gold-400/20 rounded-full animate-bounce delay-500 flex items-center justify-center">
					<img src="/favicon.svg" alt="" class="w-8 h-8" />
				</div>
				<div class="absolute -bottom-4 -left-4 w-12 h-12 bg-red-rocks-rust/20 rounded-full animate-bounce delay-1000 flex items-center justify-center">
					<img src="/images/logo/weknowco-icon.svg" alt="" class="w-6 h-6" />
				</div>
			</div>
		</div>
	</div>
</section>