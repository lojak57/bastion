/**
 * Site Configuration
 * Change these values when cloning for a new marketing site
 */

export const SITE_CONFIG = {
  // Basic Info
  name: "Bastion",
  tagline: "Build Your Stronghold",
  domain: "bastion.build",
  
  // Contact Info
  email: "build@bastion.build",
  phone: "(555) 123-4567",
  calendlyUrl: "https://calendly.com/bastion/discovery",
  
  // Branding
  logo: {
    full: "/images/logo/bastion-full-logo.png",
    icon: "/images/logo/bastion-icon.svg",
  },
  
  // Pricing
  mvpPrice: "$5K–$7.5K",
  mvpPriceRange: { min: 5000, max: 7500 },
  ctoAdvisoryPrice: "$1.5K/month",
  ctoAdvisoryValue: 1500,
  ctoFullPrice: "$3.5K/month",
  ctoFullValue: 3500,
  pricingHook: "You don't need a cofounder. You need forward motion.",
  
  // Location/Theme
  location: {
    city: "Remote",
    state: "Worldwide",
    region: "Digital",
    timezone: "UTC",
  },
  
  // Brand Colors (brutalist black/white theme)
  colorNames: {
    primary: "bastion-black",
    secondary: "fortress-gray",
    neutral: "stone-gray",
    light: "off-white",
    accent: "steel-blue",
  },
  
  // Social Links
  social: {
    twitter: "https://twitter.com/bastionbuild",
    linkedin: "https://linkedin.com/company/bastion",
    github: "https://github.com/bastion",
  },
  
  // API Configuration
  api: {
    leadEndpoint: "/api/leads", // TrueForm will route based on whiteLabelId
    whiteLabelId: "bastion",
  },
  
  // Feature Flags
  features: {
    showTestimonials: true,
    showBlog: false,
    showCaseStudies: false,
    showPortal: true,
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
    description: `${SITE_CONFIG.pricingHook} Fast. Real. Yours. MVPs that don't suck.`,
    url: getFullUrl(),
    image: getFullUrl(SITE_CONFIG.logo.full),
  };
}