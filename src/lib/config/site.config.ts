/**
 * Site Configuration
 * Change these values when cloning for a new marketing site
 */

export const SITE_CONFIG = {
  // Basic Info
  name: "weKnowCO",
  tagline: "Turn Colorado Dreams Into Mile-High Brands",
  domain: "weknowco.com",
  
  // Contact Info
  email: "hello@weknowco.com",
  phone: "(720) 555-5280",
  calendlyUrl: "https://calendly.com/weknowco/discovery",
  
  // Branding
  logo: {
    full: "/images/logo/weknowco-full-logo.png",
    icon: "/images/logo/weknowco-icon.svg",
  },
  
  // Pricing (make it memorable!)
  heroPrice: "$5,280", // Denver's elevation
  priceValue: 5280,
  pricingHook: "5,280 feet. 5,280 dollars. Elevated marketing at altitude.",
  
  // Location/Theme
  location: {
    city: "Denver",
    state: "Colorado",
    region: "Mile-High",
    timezone: "America/Denver",
  },
  
  // Brand Colors (update in tailwind.config.js too)
  colorNames: {
    primary: "skyline-blue",
    secondary: "aspen-gold",
    neutral: "granite-gray",
    light: "snowfield-white",
    accent: "red-rocks-rust",
  },
  
  // Social Links
  social: {
    twitter: "https://twitter.com/weknowco",
    linkedin: "https://linkedin.com/company/weknowco",
    instagram: "https://instagram.com/weknowco",
  },
  
  // API Configuration
  api: {
    leadEndpoint: "/api/leads", // TrueForm will route based on whiteLabelId
    whiteLabelId: "weknowco",
  },
  
  // Feature Flags
  features: {
    showTestimonials: true,
    showBlog: false,
    showCaseStudies: false,
  }
};

// Helper function to get full URL
export function getFullUrl(path = ""): string {
  const baseUrl = import.meta.env.VITE_SITE_URL || `https://${SITE_CONFIG.domain}`;
  return `${baseUrl}${path}`;
}

// Helper for meta tags
export function getSiteMetaTags() {
  return {
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description: `${SITE_CONFIG.heroPrice} gets you a complete website that works. 30 days. 7 pages. Zero fluff.`,
    url: getFullUrl(),
    image: getFullUrl(SITE_CONFIG.logo.full),
  };
}