<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import LuxuryInput from '../../ui/LuxuryInput.svelte';
	
	export let formData: any;
	export let errors: Record<string, string> = {};
	
	const dispatch = createEventDispatcher();
	
	function handleChange() {
		dispatch('change', formData);
	}
</script>

<div class="space-y-6">
	<div class="text-center mb-8">
		<h2 class="text-2xl font-bold text-skyline-blue-600 mb-2">Tell Us About Yourself</h2>
		<p class="text-granite-gray-600">Let's start with the basics about you as a founder</p>
	</div>
	
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		<LuxuryInput
			type="text"
			placeholder="First Name"
			bind:value={formData.firstName}
			error={errors.firstName}
			on:input={handleChange}
			required
		/>
		
		<LuxuryInput
			type="text"
			placeholder="Last Name"
			bind:value={formData.lastName}
			error={errors.lastName}
			on:input={handleChange}
			required
		/>
	</div>
	
	<LuxuryInput
		type="email"
		placeholder="Email Address"
		bind:value={formData.email}
		error={errors.email}
		on:input={handleChange}
		required
	/>
	
	<LuxuryInput
		type="tel"
		placeholder="Phone Number"
		bind:value={formData.phone}
		error={errors.phone}
		on:input={handleChange}
		required
	/>
</div>