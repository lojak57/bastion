import { browser } from "$app/environment";
import { SITE_CONFIG } from "$lib/config/site.config";

// Environment configuration for weKnowCO marketing site
export const ENV = {
  // TrueForm API Integration
  TRUEFORM_API_URL: import.meta.env.VITE_TRUEFORM_API_URL || "https://api.trueform.app",
  TRUEFORM_API_KEY: import.meta.env.VITE_TRUEFORM_API_KEY || "",
  
  // Marketing Site Configuration
  SITE_URL: import.meta.env.VITE_SITE_URL || `https://${SITE_CONFIG.domain}`,
  SITE_NAME: SITE_CONFIG.name,
  WHITE_LABEL_ID: SITE_CONFIG.api.whiteLabelId,
  
  // Analytics (optional)
  GA_MEASUREMENT_ID: import.meta.env.VITE_GA_MEASUREMENT_ID || "",
  PLAUSIBLE_DOMAIN: import.meta.env.VITE_PLAUSIBLE_DOMAIN || "",
  
  // Feature Flags
  ENABLE_ANALYTICS: import.meta.env.VITE_ENABLE_ANALYTICS === "true",
  ENABLE_RATE_LIMITING: import.meta.env.VITE_ENABLE_RATE_LIMITING !== "false", // Default true
} as const;

// Validation function - only validates critical settings
export function validateEnv() {
  const errors: string[] = [];
  
  // Only validate in server context
  if (!browser) {
    if (!ENV.TRUEFORM_API_KEY) {
      errors.push("VITE_TRUEFORM_API_KEY is required for lead submission");
    }
    
    if (!ENV.TRUEFORM_API_URL) {
      errors.push("VITE_TRUEFORM_API_URL is required");
    }
  }
  
  if (errors.length > 0) {
    const message = `Environment configuration errors:\n${errors.join("\n")}`;
    console.error("🚨 Configuration Error:", message);
    
    // Only throw in development
    if (import.meta.env.DEV) {
      throw new Error(message);
    }
  }
  
  return errors.length === 0;
}

// Helper to get white label configuration for TrueForm
export function getWhiteLabelConfig() {
  return {
    siteId: SITE_CONFIG.api.whiteLabelId,
    siteName: SITE_CONFIG.name,
    siteUrl: ENV.SITE_URL,
    leadSource: SITE_CONFIG.api.whiteLabelId,
  };
}