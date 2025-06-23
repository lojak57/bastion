<script lang="ts">
	export let type: 'text' | 'email' | 'tel' | 'number' | 'password' | 'url' = 'text';
	export let value: string | number = '';
	export let label: string = '';
	export let placeholder: string = '';
	export let required: boolean = false;
	export let disabled: boolean = false;
	export let error: string = '';
	export let hint: string = '';
	export let id: string = '';
	
	// Generate unique ID if not provided
	$: inputId = id || `luxury-input-${Math.random().toString(36).substr(2, 9)}`;
	
	// Focus state
	let focused = false;
	let touched = false;
	
	// Has value check
	$: hasValue = value !== '' && value !== null && value !== undefined;
	
	function handleFocus() {
		focused = true;
	}
	
	function handleBlur() {
		focused = false;
		touched = true;
	}
</script>

<div class="luxury-input-container">
	{#if label}
		<label for={inputId} class="luxury-label">
			{label}
			{#if required}
				<span class="required">*</span>
			{/if}
		</label>
	{/if}
	
	<div class="luxury-input-wrapper" class:focused class:error={error && touched} class:hasValue>
		<input
			{type}
			bind:value
			{placeholder}
			{required}
			{disabled}
			id={inputId}
			class="luxury-input"
			on:focus={handleFocus}
			on:blur={handleBlur}
			on:input
			on:change
		/>
		
		<!-- Focus border indicator -->
		<div class="luxury-border"></div>
	</div>
	
	{#if error && touched}
		<div class="luxury-error" role="alert">
			<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
				<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
			</svg>
			{error}
		</div>
	{:else if hint}
		<div class="luxury-hint">
			{hint}
		</div>
	{/if}
</div>

<style>
	.luxury-input-container {
		display: flex;
		flex-direction: column;
		gap: 8px;
		width: 100%;
	}
	
	.luxury-label {
		font-size: 14px;
		font-weight: 600;
		color: #374151;
		display: flex;
		align-items: center;
		gap: 4px;
	}
	
	.required {
		color: #dc2626;
		font-weight: 500;
	}
	
	.luxury-input-wrapper {
		position: relative;
		background: #ffffff;
		border: 2px solid #e5e7eb;
		border-radius: 12px;
		transition: all 0.2s ease;
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
	}
	
	.luxury-input-wrapper.focused {
		border-color: #1C4D72;
		box-shadow: 0 0 0 3px rgba(28, 77, 114, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
	}
	
	.luxury-input-wrapper.error {
		border-color: #dc2626;
		box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
	}
	
	.luxury-input {
		width: 100%;
		padding: 16px 20px;
		font-size: 16px;
		color: #111827;
		background: transparent;
		border: none;
		outline: none;
		border-radius: 10px;
	}
	
	.luxury-input::placeholder {
		color: #9ca3af;
		font-weight: 400;
	}
	
	.luxury-input:disabled {
		background: #f9fafb;
		color: #6b7280;
		cursor: not-allowed;
	}
	
	.luxury-border {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 2px;
		background: linear-gradient(90deg, #1C4D72, #FDBA31);
		border-radius: 0 0 10px 10px;
		transform: scaleX(0);
		transition: transform 0.2s ease;
	}
	
	.luxury-input-wrapper.focused .luxury-border {
		transform: scaleX(1);
	}
	
	.luxury-error {
		display: flex;
		align-items: center;
		gap: 6px;
		color: #dc2626;
		font-size: 14px;
		font-weight: 500;
	}
	
	.luxury-hint {
		color: #6b7280;
		font-size: 14px;
		font-weight: 400;
	}
	
	/* Hover effects */
	.luxury-input-wrapper:hover:not(.focused):not(.error) {
		border-color: #d1d5db;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
	}
	
	/* Dark mode support */
	@media (prefers-color-scheme: dark) {
		.luxury-input-wrapper {
			background: #1f2937;
			border-color: #374151;
		}
		
		.luxury-label {
			color: #f9fafb;
		}
		
		.luxury-input {
			color: #f9fafb;
		}
		
		.luxury-input::placeholder {
			color: #6b7280;
		}
		
		.luxury-input:disabled {
			background: #111827;
			color: #6b7280;
		}
	}
</style>