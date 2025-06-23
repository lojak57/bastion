<script lang="ts">
	// Supporting stats component - ad copy style
	const stats = [
		{ number: "30+", label: "Years of friendship", detail: "Since we were 12" },
		{ number: "25+", label: "Years hustling", detail: "Started at 14" },
		{ number: "100%", label: "Colorado born", detail: "Raised in the grit" },
		{ number: "20+", label: "Years building", detail: "Every industry" }
	];
</script>

<!-- About Stats -->
<section class="py-12 bg-gradient-to-r from-skyline-blue-600 to-skyline-blue-700">
	<div class="max-w-7xl mx-auto px-6">
		<div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
			{#each stats as stat}
				<div class="text-center text-white">
					<div class="text-3xl md:text-4xl font-bold text-aspen-gold-400 mb-2">
						{stat.number}
					</div>
					<div class="font-semibold mb-1">
						{stat.label}
					</div>
					<div class="text-white/80 text-sm">
						{stat.detail}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>