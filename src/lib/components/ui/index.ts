/**
 * weKnowCO UI Components - Barrel Export
 *
 * Centralized export for all UI components.
 * Built on TrueForm foundation, customized for marketing site.
 */

// ============================================================================
// BASE COMPONENTS
// ============================================================================
export { default as BaseButton } from "./BaseButton.svelte";
export { default as Button } from "./BaseButton.svelte"; // Alias for convenience
export { default as BaseCard } from "./BaseCard.svelte";
export { default as BrandedCard } from "./BrandedCard.svelte";
export { BaseInput } from "./inputs";
export { default as LuxuryInput } from "./LuxuryInput.svelte";

// ============================================================================
// FEATURE COMPONENTS
// ============================================================================
export { default as FeatureCard } from "./FeatureCard.svelte";
export { default as ChecklistItem } from "./ChecklistItem.svelte";
export { default as ValueProp } from "./ValueProp.svelte";
export { default as TimelineItem } from "./TimelineItem.svelte";

// ============================================================================
// COMPONENT TYPES
// ============================================================================
// Export common component prop types for TypeScript users
export type CardVariant = "hero" | "compact" | "mini";
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger";
export type ButtonSize = "sm" | "md" | "lg";
export type InputType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "tel"
  | "url"
  | "search";
export type InputSize = "sm" | "md" | "lg";
export type PaddingSize = "none" | "sm" | "md" | "lg";
