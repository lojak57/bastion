<script lang="ts">
	import { BaseCard } from '$lib/components/ui';
	
	// FAQs
	const faqs = [
		{
			question: 'Why exactly $5,280?',
			answer: 'It\'s Colorado\'s elevation in feet—a price that reflects our commitment to local businesses and our mile-high standards.'
		},
		{
			question: 'What if I need more than 7 pages?',
			answer: 'Additional pages are $420 each. Most small businesses find 7 pages more than sufficient for their needs.'
		},
		{
			question: 'Can I make changes after launch?',
			answer: 'You get 30 days of bug fixes and minor adjustments. After that, we offer maintenance plans or can train you to make updates yourself.'
		},
		{
			question: 'Do you work with businesses outside Colorado?',
			answer: 'We focus on Colorado businesses but occasionally make exceptions. The $5,280 price is exclusive to Colorado companies.'
		},
		{
			question: 'What platform do you build on?',
			answer: 'We use modern, fast, secure platforms like SvelteKit or Next.js, deployed on reliable hosting. No WordPress unless specifically requested.'
		},
		{
			question: 'How do I know this is right for me?',
			answer: 'If you need a professional website quickly, have a clear budget, and want a partner who understands Colorado business, this is for you.'
		}
	];
</script>

<!-- FAQs -->
<section class="py-20 bg-granite-gray-50">
	<div class="max-w-4xl mx-auto px-6">
		<div class="text-center mb-12">
			<h2 class="font-display text-3xl md:text-4xl font-bold text-skyline-blue-600 mb-4">
				Frequently Asked Questions
			</h2>
		</div>
		
		<div class="space-y-6">
			{#each faqs as faq}
				<BaseCard class="p-6">
					<h3 class="font-semibold text-lg text-skyline-blue-600 mb-3">
						{faq.question}
					</h3>
					<p class="text-granite-gray-600 leading-relaxed">
						{faq.answer}
					</p>
				</BaseCard>
			{/each}
		</div>
	</div>
</section>