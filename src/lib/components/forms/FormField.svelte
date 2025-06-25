<script lang="ts">
	import { Input } from '$lib/components/ui';
	import type { HTMLInputTypeAttribute } from 'svelte/elements';
	
	export let name: string;
	export let type: HTMLInputTypeAttribute = 'text';
	export let value: string | number = '';
	export let error: string | undefined = undefined;
	export let required = false;
	export let placeholder = '';
	export let label = '';
	
	// Auto-generate label from name if not provided
	$: displayLabel = label || name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, ' $1');
</script>

<Input
	{type}
	{name}
	{placeholder}
	{required}
	bind:value
	{error}
	label={displayLabel}
/>