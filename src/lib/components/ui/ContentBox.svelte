<!--
  ContentBox - A small, beautiful fence for any content
  
  Usage:
  <ContentBox variant="primary|secondary|accent|neutral">
    Any content here
  </ContentBox>
-->

<script lang="ts">
	export let variant: 'primary' | 'secondary' | 'accent' | 'neutral' = 'neutral';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let className: string = '';

	$: variantClasses = {
		primary: 'bg-white border-2 border-skyline-blue-300 shadow-lg',
		secondary: 'bg-skyline-blue-50 border-2 border-skyline-blue-200 shadow-md',
		accent: 'bg-aspen-gold-50 border-2 border-aspen-gold-300 shadow-md',
		neutral: 'bg-white border border-granite-gray-200 shadow-sm'
	};

	$: sizeClasses = {
		sm: 'p-3 rounded-lg',
		md: 'p-4 rounded-xl',
		lg: 'p-6 rounded-xl'
	};
</script>

<div class="transition-all duration-300 hover:shadow-xl {variantClasses[variant]} {sizeClasses[size]} {className}">
	<slot />
</div>
</script>