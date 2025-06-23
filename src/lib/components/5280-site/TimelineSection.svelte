<script lang="ts">
	import { TimelineItem } from '$lib/components/ui';
	
	// Timeline
	const timeline = [
		{
			week: 'W1',
			title: 'Discovery & Strategy',
			tasks: [
				'Brand questionnaire & discovery call',
				'Competitive analysis',
				'Site architecture planning',
				'Content outline creation'
			]
		},
		{
			week: 'W2',
			title: 'Design & Content',
			tasks: [
				'Homepage design concepts',
				'Professional copywriting',
				'Design refinement',
				'Mobile layouts'
			]
		},
		{
			week: 'W3',
			title: 'Development',
			tasks: [
				'Full site build-out',
				'Contact form integration',
				'SEO implementation',
				'Mobile optimization'
			]
		},
		{
			week: 'W4',
			title: 'Launch & Training',
			tasks: [
				'Final review & testing',
				'Launch preparation',
				'CMS training session',
				'Post-launch support begins'
			]
		}
	];
</script>

<!-- Timeline -->
<section id="timeline" class="py-20 bg-snowfield-white">
	<div class="max-w-5xl mx-auto px-6">
		<div class="text-center mb-12">
			<h2 class="font-display text-3xl md:text-4xl font-bold text-skyline-blue-600 mb-4">
				Your 30-Day Journey
			</h2>
			<p class="text-xl text-granite-gray-600">
				From concept to launch in four focused weeks
			</p>
		</div>
		
		<div class="space-y-8">
			{#each timeline as item}
				<TimelineItem {...item} />
			{/each}
		</div>
	</div>
</section>