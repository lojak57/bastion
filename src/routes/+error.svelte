<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui';
</script>

<div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-skyline-blue-50 to-aspen-gold-50 relative overflow-hidden">
	<!-- Floating logos background -->
	<div class="absolute inset-0 opacity-10">
		<img 
			src="/images/logo/weknowco-icon.svg" 
			alt=""
			class="absolute top-10 left-10 w-32 h-32 animate-float-slow"
		/>
		<img 
			src="/favicon.svg" 
			alt=""
			class="absolute bottom-20 right-20 w-24 h-24 animate-float-delayed"
		/>
		<img 
			src="/images/logo/weknowco-icon.svg" 
			alt=""
			class="absolute top-1/3 right-1/3 w-20 h-20 animate-float-reverse"
		/>
	</div>
	
	<div class="relative z-10 max-w-2xl mx-auto px-6 text-center">
		<!-- Big 404 with logo integration -->
		<div class="relative mb-8">
			<h1 class="font-display text-9xl md:text-[12rem] font-bold text-skyline-blue-600/20">
				404
			</h1>
			<div class="absolute inset-0 flex items-center justify-center">
				<img 
					src="/images/logo/weknowco-icon.svg" 
					alt="weKnowCO"
					class="w-32 h-32 md:w-48 md:h-48 opacity-80"
				/>
			</div>
		</div>
		
		<h2 class="font-display text-3xl md:text-4xl font-bold text-skyline-blue-600 mb-4">
			Looks like you've wandered off the trail
		</h2>
		
		<p class="text-lg text-granite-gray-600 mb-8 max-w-lg mx-auto">
			{#if $page.status === 404}
				The page you're looking for has gone hiking in the Rockies. Let's get you back on track.
			{:else}
				Something went wrong at elevation {$page.status || '5,280'}ft. Don't worry, we'll help you find your way.
			{/if}
		</p>
		
		<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
			<Button href="/" size="lg" variant="primary">
				Return to Base Camp
			</Button>
			<Button href="/contact" size="lg" variant="outline">
				Get Help
			</Button>
		</div>
		
		<!-- Fun elevation indicator -->
		<div class="mt-12 inline-flex items-center text-granite-gray-500 text-sm">
			<img src="/favicon.svg" alt="" class="w-6 h-6 mr-2 opacity-60" />
			<span>Currently lost at elevation: {$page.status || '404'}ft</span>
		</div>
	</div>
</div>

<style>
	@keyframes float-slow {
		0%, 100% { transform: translateY(0px) rotate(0deg); }
		50% { transform: translateY(-20px) rotate(10deg); }
	}
	
	@keyframes float-delayed {
		0%, 100% { transform: translateY(0px) rotate(0deg); }
		50% { transform: translateY(-15px) rotate(-5deg); }
	}
	
	@keyframes float-reverse {
		0%, 100% { transform: translateY(-10px) rotate(0deg); }
		50% { transform: translateY(10px) rotate(5deg); }
	}
	
	:global(.animate-float-slow) {
		animation: float-slow 8s ease-in-out infinite;
	}
	
	:global(.animate-float-delayed) {
		animation: float-delayed 6s ease-in-out 2s infinite;
	}
	
	:global(.animate-float-reverse) {
		animation: float-reverse 5s ease-in-out 1s infinite;
	}
</style>