<script lang="ts">
  export let type: "text" | "email" | "password" | "number" | "tel" | "url" | "search" | "date" | "textarea" = "text";
  export let variant: "default" | "luxury" | "minimal" = "default";
  export let size: "sm" | "md" | "lg" = "md";
  export let value: string | number = "";
  export let label: string = "";
  export let placeholder: string = "";
  export let required: boolean = false;
  export let disabled: boolean = false;
  export let readonly: boolean = false;
  export let error: string = "";
  export let success: string = "";
  export let hint: string = "";
  export let fullWidth: boolean = true;
  export let floating: boolean = true;
  export let icon: "left" | "right" | undefined = undefined;
  export let id: string = "";
  export let rows: number = 4; // for textarea
  
  // Allow custom CSS classes
  let className: string = "";
  export { className as class };
  
  // Generate unique ID if not provided
  $: inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  // State
  let focused = false;
  let touched = false;
  
  // Computed
  $: hasValue = value !== "" && value !== null && value !== undefined;
  $: shouldFloat = floating && (hasValue || placeholder || focused);
  $: showFloatingLabel = floating && label && variant !== "luxury";
  $: showTopLabel = label && (!floating || variant === "luxury");
  
  // Build classes
  $: containerClasses = [
    "wkc-input-container",
    `variant-${variant}`,
    fullWidth && "full-width",
    className
  ]
    .filter(Boolean)
    .join(" ");
  
  $: wrapperClasses = [
    "input-wrapper",
    `size-${size}`,
    focused && "focused",
    error && touched && "error",
    success && "success",
    disabled && "disabled",
    readonly && "readonly",
    hasValue && "has-value",
    icon && `icon-${icon}`,
    floating && variant === "default" && "floating"
  ]
    .filter(Boolean)
    .join(" ");
  
  $: inputClasses = [
    "wkc-input",
    type === "textarea" && "textarea"
  ]
    .filter(Boolean)
    .join(" ");
  
  // Event handlers
  function handleFocus() {
    focused = true;
  }
  
  function handleBlur() {
    focused = false;
    touched = true;
  }
</script>

<div class={containerClasses}>
  {#if showTopLabel}
    <label for={inputId} class="input-label top-label">
      {label}
      {#if required}
        <span class="required-indicator" aria-label="required">*</span>
      {/if}
    </label>
  {/if}
  
  <div class={wrapperClasses}>
    {#if icon === "left" && $$slots.icon}
      <div class="input-icon icon-left">
        <slot name="icon" />
      </div>
    {/if}
    
    {#if type === "textarea"}
      <textarea
        bind:value
        {placeholder}
        {required}
        {disabled}
        {readonly}
        {rows}
        id={inputId}
        class={inputClasses}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error
          ? `${inputId}-error`
          : success
          ? `${inputId}-success`
          : hint
          ? `${inputId}-hint`
          : undefined}
        on:focus={handleFocus}
        on:blur={handleBlur}
        on:input
        on:change
        on:keydown
        on:keyup
      />
    {:else}
      <input
        {type}
        bind:value
        {placeholder}
        {required}
        {disabled}
        {readonly}
        id={inputId}
        class={inputClasses}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error
          ? `${inputId}-error`
          : success
          ? `${inputId}-success`
          : hint
          ? `${inputId}-hint`
          : undefined}
        on:focus={handleFocus}
        on:blur={handleBlur}
        on:input
        on:change
        on:keydown
        on:keyup
      />
    {/if}
    
    {#if showFloatingLabel}
      <label for={inputId} class="input-label floating-label">
        {label}
        {#if required}
          <span class="required-indicator" aria-label="required">*</span>
        {/if}
      </label>
    {/if}
    
    {#if icon === "right" && $$slots.icon}
      <div class="input-icon icon-right">
        <slot name="icon" />
      </div>
    {/if}
    
    {#if (error && touched) || success}
      <div class="status-icon" aria-hidden="true">
        {#if error && touched}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zM7 3h2v6H7V3zm0 8h2v2H7v-2z" />
          </svg>
        {:else if success}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.5 6L7 10.5 4.5 8 5.91 6.59 7 7.68l3.59-3.59L12 5.5z" />
          </svg>
        {/if}
      </div>
    {/if}
    
    {#if variant === "luxury"}
      <div class="luxury-border"></div>
    {/if}
  </div>
  
  {#if error && touched}
    <div id="{inputId}-error" class="help-text error-text" role="alert">
      {error}
    </div>
  {:else if success}
    <div id="{inputId}-success" class="help-text success-text">
      {success}
    </div>
  {:else if hint}
    <div id="{inputId}-hint" class="help-text hint-text">
      {hint}
    </div>
  {/if}
</div>

<style>
  /* Container */
  .wkc-input-container {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
  }
  
  .full-width {
    width: 100%;
  }
  
  /* Label styles */
  .input-label {
    font-size: var(--text-sm);
    font-weight: var(--font-medium);
    color: var(--color-text);
    display: flex;
    align-items: center;
    gap: var(--space-1);
  }
  
  .top-label {
    margin-bottom: var(--space-1);
  }
  
  .required-indicator {
    color: var(--color-error);
  }
  
  /* Wrapper */
  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    transition: var(--transition-colors);
    overflow: hidden;
  }
  
  /* Input base styles */
  .wkc-input {
    width: 100%;
    font-family: var(--font-sans);
    font-size: var(--text-base);
    color: var(--color-text);
    background-color: transparent;
    border: none;
    outline: none;
    resize: vertical;
  }
  
  .wkc-input::placeholder {
    color: var(--color-text-subtle);
  }
  
  /* Size variants */
  .size-sm .wkc-input {
    padding: var(--space-2) var(--space-3);
    font-size: var(--text-sm);
  }
  
  .size-md .wkc-input {
    padding: var(--space-3) var(--space-4);
    font-size: var(--text-base);
  }
  
  .size-lg .wkc-input {
    padding: var(--space-4) var(--space-5);
    font-size: var(--text-lg);
  }
  
  /* Floating label adjustments */
  .floating.size-sm .wkc-input {
    padding-top: var(--space-5);
    padding-bottom: var(--space-1);
  }
  
  .floating.size-md .wkc-input {
    padding-top: var(--space-6);
    padding-bottom: var(--space-2);
  }
  
  .floating.size-lg .wkc-input {
    padding-top: var(--space-7);
    padding-bottom: var(--space-3);
  }
  
  /* Textarea specific */
  .wkc-input.textarea {
    min-height: 100px;
    padding-top: var(--space-3);
    padding-bottom: var(--space-3);
  }
  
  /* Icons */
  .input-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text-muted);
  }
  
  .icon-left {
    padding-left: var(--space-3);
  }
  
  .icon-right {
    padding-right: var(--space-3);
  }
  
  .icon-left + .wkc-input {
    padding-left: var(--space-2);
  }
  
  .wkc-input:has(+ .icon-right) {
    padding-right: var(--space-2);
  }
  
  /* Status icon */
  .status-icon {
    position: absolute;
    right: var(--space-3);
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }
  
  .error .status-icon {
    color: var(--color-error);
  }
  
  .success .status-icon {
    color: var(--color-success);
  }
  
  /* Default variant styles */
  .variant-default .input-wrapper:focus-within {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
  
  .variant-default .error {
    border-color: var(--color-error);
  }
  
  .variant-default .error:focus-within {
    border-color: var(--color-error);
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
  }
  
  .variant-default .success {
    border-color: var(--color-success);
  }
  
  .variant-default .success:focus-within {
    border-color: var(--color-success);
    box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
  }
  
  /* Floating label for default variant */
  .floating-label {
    position: absolute;
    left: var(--space-4);
    top: 50%;
    transform: translateY(-50%);
    font-size: var(--text-base);
    color: var(--color-text-subtle);
    pointer-events: none;
    transition: var(--transition-all);
    background-color: var(--color-surface);
    padding: 0 var(--space-1);
  }
  
  .size-sm .floating-label {
    left: var(--space-3);
    font-size: var(--text-sm);
  }
  
  .size-lg .floating-label {
    left: var(--space-5);
    font-size: var(--text-lg);
  }
  
  .focused .floating-label,
  .has-value .floating-label {
    top: 0;
    transform: translateY(-50%);
    font-size: var(--text-sm);
    color: var(--color-primary);
  }
  
  .error .floating-label {
    color: var(--color-error);
  }
  
  .success .floating-label {
    color: var(--color-success);
  }
  
  /* Luxury variant styles */
  .variant-luxury .input-wrapper {
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    background: #ffffff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  }
  
  .variant-luxury .input-wrapper:hover:not(.focused):not(.error) {
    border-color: #d1d5db;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
  
  .variant-luxury .focused {
    border-color: #1C4D72;
    box-shadow: 0 0 0 3px rgba(28, 77, 114, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  }
  
  .variant-luxury .error {
    border-color: #dc2626;
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
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
  
  .focused .luxury-border {
    transform: scaleX(1);
  }
  
  /* Minimal variant styles */
  .variant-minimal .input-wrapper {
    border: none;
    border-bottom: 1px solid var(--color-border);
    border-radius: 0;
    background: transparent;
    padding: 0;
  }
  
  .variant-minimal .wkc-input {
    padding-left: 0;
    padding-right: 0;
  }
  
  .variant-minimal .focused {
    border-bottom-color: var(--color-primary);
  }
  
  .variant-minimal .error {
    border-bottom-color: var(--color-error);
  }
  
  .variant-minimal .success {
    border-bottom-color: var(--color-success);
  }
  
  /* States */
  .disabled {
    background-color: var(--color-neutral-100);
    cursor: not-allowed;
  }
  
  .disabled .wkc-input {
    color: var(--color-text-muted);
    cursor: not-allowed;
  }
  
  .readonly {
    background-color: var(--color-neutral-50);
  }
  
  .readonly .wkc-input {
    cursor: default;
  }
  
  /* Help text */
  .help-text {
    font-size: var(--text-sm);
    margin-top: var(--space-1);
    display: flex;
    align-items: center;
    gap: var(--space-1);
  }
  
  .error-text {
    color: var(--color-error);
  }
  
  .success-text {
    color: var(--color-success);
  }
  
  .hint-text {
    color: var(--color-text-muted);
  }
  
  /* Dark mode adjustments */
  :global(.dark) .variant-luxury .input-wrapper {
    background: #1f2937;
    border-color: #374151;
  }
  
  :global(.dark) .disabled {
    background-color: var(--color-neutral-800);
  }
  
  :global(.dark) .readonly {
    background-color: var(--color-neutral-900);
  }
  
  :global(.dark) .floating-label {
    background-color: var(--color-surface);
  }
  
  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    .input-wrapper,
    .floating-label,
    .luxury-border {
      transition: none;
    }
  }
  
  /* Mobile adjustments */
  @media (max-width: 640px) {
    .size-sm .wkc-input {
      padding: var(--space-2_5) var(--space-3);
      font-size: var(--text-base);
      min-height: 44px;
    }
    
    .floating.size-sm .wkc-input {
      padding-top: var(--space-6);
      padding-bottom: var(--space-2);
    }
  }
</style>