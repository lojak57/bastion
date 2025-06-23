<script lang="ts">
  import { InputCore } from './';

  export let type:
    | "text"
    | "email"
    | "password"
    | "number"
    | "tel"
    | "url"
    | "search" = "text";
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
</script>

<InputCore
  {type}
  bind:value
  {label}
  {placeholder}
  {required}
  {disabled}
  {readonly}
  {error}
  {success}
  {hint}
  {size}
  {fullWidth}
  {floating}
  {id}
  on:input
  on:change
  on:focus
  on:blur
  on:keydown
  on:keyup
/>