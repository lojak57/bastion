<script lang="ts">
	// Process steps
	const processSteps = [
		{ step: '1', title: 'Discovery Call', description: 'Understand your business and goals' },
		{ step: '2', title: 'Strategic Planning', description: 'Map out your site structure and content' },
		{ step: '3', title: 'Design & Writing', description: 'Create your unique brand presence' },
		{ step: '4', title: 'Build & Optimize', description: 'Develop and optimize for performance' },
		{ step: '5', title: 'Launch & Support', description: 'Go live with confidence and support' }
	];
</script>

<!-- Process -->
<section class="py-20 bg-gradient-to-r from-skyline-blue-600 to-skyline-blue-700 text-white">
	<div class="max-w-7xl mx-auto px-6">
		<div class="text-center mb-12">
			<h2 class="font-display text-3xl md:text-4xl font-bold mb-4">
				Simple, Transparent Process
			</h2>
			<p class="text-xl text-white/90">
				No surprises, no confusion—just clear steps to your new website
			</p>
		</div>
		
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
			{#each processSteps as process}
				<div class="text-center">
					<div class="w-14 h-14 sm:w-16 sm:h-16 bg-aspen-gold-400 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-skyline-blue-700 font-bold text-lg sm:text-xl">
						{process.step}
					</div>
					<h4 class="font-semibold mb-2 text-sm sm:text-base">{process.title}</h4>
					<p class="text-xs sm:text-sm text-white/80">{process.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>