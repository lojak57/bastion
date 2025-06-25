/**
 * weKnowCO UI Components - Barrel Export
 *
 * Centralized export for all UI components.
 * Consolidated component system with single source of truth.
 */

// ============================================================================
// CORE COMPONENTS (Consolidated)
// ============================================================================
export { default as Button } from "./BaseButton.svelte";
export { default as BaseButton } from "./BaseButton.svelte"; // Legacy alias
export { default as Card } from "./Card.svelte";
export { default as Input } from "./Input.svelte";

// ============================================================================
// LEGACY EXPORTS (For backward compatibility - will be deprecated)
// ============================================================================
export { default as BaseCard } from "./BaseCard.svelte";
export { default as BrandedCard } from "./BrandedCard.svelte";
export { default as ContentBox } from "./ContentBox.svelte";
export { default as FeatureCard } from "./FeatureCard.svelte";
export { BaseInput } from "./inputs";
export { default as LuxuryInput } from "./LuxuryInput.svelte";

// ============================================================================
// SPECIALIZED COMPONENTS
// ============================================================================
export { default as ChecklistItem } from "./ChecklistItem.svelte";
export { default as ValueProp } from "./ValueProp.svelte";
export { default as TimelineItem } from "./TimelineItem.svelte";
export { default as LogoLoader } from "./LogoLoader.svelte";

// ============================================================================
// COMPONENT TYPES (Updated for new consolidated system)
// ============================================================================
// Button types
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger";
export type ButtonSize = "sm" | "md" | "lg";

// Card types
export type CardVariant = 
  | "default" 
  | "branded" 
  | "feature" 
  | "pricing" 
  | "content";
export type CardSize = "mini" | "compact" | "default" | "hero";
export type CardElevation = "none" | "sm" | "md" | "lg";
export type CardPadding = "none" | "sm" | "md" | "lg";

// Input types
export type InputVariant = "default" | "luxury" | "minimal";
export type InputType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "tel"
  | "url"
  | "search"
  | "date"
  | "textarea";
export type InputSize = "sm" | "md" | "lg";

// Re-export design system types
export type { 
  DesignSystem,
  ColorBrand,
  ColorSemantic,
  Spacing,
  FontSize,
  FontWeight,
  Shadow,
  Radius,
  Breakpoint
} from "../../config/design-system";
