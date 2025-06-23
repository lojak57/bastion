<script lang="ts">
  export let type: string = "text";
  export let value: string | number = "";
  export let label: string = "";
  export let placeholder: string = "";
  export let required: boolean = false;
  export let disabled: boolean = false;
  export let readonly: boolean = false;
  export let error: string = "";
  export let success: string = "";
  export let hint: string = "";
  export let size: "sm" | "md" | "lg" = "md";
  export let fullWidth: boolean = true;
  export let floating: boolean = true;
  export let id: string = "";

  $: inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  $: hasValue = value !== "" && value !== null && value !== undefined;
  $: shouldFloat = floating && (hasValue || placeholder);

  $: inputClasses = [
    "base-input",
    `size-${size}`,
    error && "error",
    success && "success", 
    disabled && "disabled",
    readonly && "readonly",
    fullWidth && "full-width",
    floating && "floating",
    shouldFloat && "has-value",
  ]
    .filter(Boolean)
    .join(" ");

  $: containerClasses = [
    "input-container",
    floating && "floating-container",
    fullWidth && "full-width",
  ]
    .filter(Boolean)
    .join(" ");
</script>

<div class={containerClasses}>
  {#if label && !floating}
    <label for={inputId} class="input-label">
      {label}
      {#if required}
        <span class="required-indicator" aria-label="required">*</span>
      {/if}
    </label>
  {/if}

  <div class="input-wrapper">
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
      on:input
      on:change
      on:focus
      on:blur
      on:keydown
      on:keyup
    />

    {#if label && floating}
      <label for={inputId} class="floating-label">
        {label}
        {#if required}
          <span class="required-indicator" aria-label="required">*</span>
        {/if}
      </label>
    {/if}

    {#if error}
      <div class="status-icon error-icon" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path
            d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zM7 3h2v6H7V3zm0 8h2v2H7v-2z"
          />
        </svg>
      </div>
    {:else if success}
      <div class="status-icon success-icon" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path
            d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.5 6L7 10.5 4.5 8 5.91 6.59 7 7.68l3.59-3.59L12 5.5z"
          />
        </svg>
      </div>
    {/if}
  </div>

  {#if error}
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
  .input-container {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
  }

  .full-width {
    width: 100%;
  }

  .input-label {
    font-size: var(--text-sm);
    font-weight: var(--font-medium); 
    color: var(--color-text);
    margin-bottom: var(--space-1);
  }

  .required-indicator {
    color: var(--color-error);
    margin-left: var(--space-1);
  }

  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  .base-input {
    width: 100%;
    font-family: var(--font-sans);
    font-size: var(--text-base);
    color: var(--color-text);
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    transition: var(--transition-colors);
    outline: none;
  }

  .size-sm {
    padding: var(--space-2) var(--space-3);
    font-size: var(--text-sm);
  }

  .size-md {
    padding: var(--space-3) var(--space-4);
    font-size: var(--text-base);
  }

  .size-lg {
    padding: var(--space-4) var(--space-5);
    font-size: var(--text-lg);
  }

  .floating.size-sm {
    padding-top: var(--space-5);
    padding-bottom: var(--space-1);
  }

  .floating.size-md {
    padding-top: var(--space-6);
    padding-bottom: var(--space-2);
  }

  .floating.size-lg {
    padding-top: var(--space-7);
    padding-bottom: var(--space-3);
  }

  .base-input:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  .error {
    border-color: var(--color-error);
  }

  .error:focus {
    border-color: var(--color-error);
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
  }

  .success {
    border-color: var(--color-success);
  }

  .success:focus {
    border-color: var(--color-success);
    box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
  }

  .disabled {
    background-color: var(--color-neutral-100);
    color: var(--color-text-muted);
    cursor: not-allowed;
  }

  .readonly {
    background-color: var(--color-neutral-50);
    cursor: default;
  }

  .base-input::placeholder {
    color: var(--color-text-subtle);
  }

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

  .floating-container .size-sm + .floating-label {
    left: var(--space-3);
    font-size: var(--text-sm);
  }

  .floating-container .size-lg + .floating-label {
    left: var(--space-5);
    font-size: var(--text-lg);
  }

  .base-input:focus + .floating-label,
  .has-value + .floating-label {
    top: 0;
    transform: translateY(-50%);
    font-size: var(--text-sm);
    color: var(--color-primary);
  }

  .error:focus + .floating-label,
  .error.has-value + .floating-label {
    color: var(--color-error);
  }

  .success:focus + .floating-label,
  .success.has-value + .floating-label {
    color: var(--color-success);
  }

  .status-icon {
    position: absolute;
    right: var(--space-3);
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .error-icon {
    color: var(--color-error);
  }

  .success-icon {
    color: var(--color-success);
  }

  .help-text {
    font-size: var(--text-sm);
    margin-top: var(--space-1);
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

  :global(.dark) .disabled {
    background-color: var(--color-neutral-800);
    color: var(--color-text-muted);
  }

  :global(.dark) .readonly {
    background-color: var(--color-neutral-900);
  }

  :global(.dark) .floating-label {
    background-color: var(--color-surface);
  }

  @media (prefers-reduced-motion: reduce) {
    .base-input,
    .floating-label {
      transition: none;
    }
  }

  @media (max-width: 640px) {
    .size-sm {
      padding: var(--space-2_5) var(--space-3);
      font-size: var(--text-base);
    }

    .floating.size-sm {
      padding-top: var(--space-6);
      padding-bottom: var(--space-2);
    }
  }
</style>