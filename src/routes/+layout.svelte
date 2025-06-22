<script lang="ts">
	import '../app.css';
	import { Navigation } from '$lib/components/layout';
</script>

<div class="min-h-screen bg-snowfield-white">
	<Navigation />
	<slot />
</div>