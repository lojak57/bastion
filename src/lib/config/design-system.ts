/**
 * Bastion Design System Configuration
 * 
 * Single source of truth for all design tokens and component configurations.
 * This ensures consistency across the entire application.
 */

export const designSystem = {
  // ==========================================================================
  // COMPONENT CONFIGURATIONS
  // ==========================================================================
  components: {
    button: {
      variants: {
        primary: {
          background: 'var(--color-primary)',
          color: 'white',
          borderColor: 'var(--color-primary)',
          hover: {
            background: 'var(--color-primary-700)',
            borderColor: 'var(--color-primary-700)',
            transform: 'translateY(-1px)',
            boxShadow: 'var(--shadow-primary)'
          }
        },
        secondary: {
          background: 'var(--color-accent)',
          color: 'white',
          borderColor: 'var(--color-accent)',
          hover: {
            background: 'var(--color-accent-700)',
            borderColor: 'var(--color-accent-700)',
            transform: 'translateY(-1px)',
            boxShadow: 'var(--shadow-accent)'
          }
        },
        outline: {
          background: 'transparent',
          color: 'var(--color-primary)',
          borderColor: 'var(--color-primary)',
          hover: {
            background: 'var(--color-primary)',
            color: 'white',
            transform: 'translateY(-1px)',
            boxShadow: 'var(--shadow-primary)'
          }
        },
        ghost: {
          background: 'transparent',
          color: 'var(--color-text)',
          borderColor: 'transparent',
          hover: {
            background: 'var(--color-neutral-100)',
            color: 'var(--color-text)'
          }
        },
        danger: {
          background: 'var(--color-error)',
          color: 'white',
          borderColor: 'var(--color-error)',
          hover: {
            background: 'var(--color-error-700)',
            borderColor: 'var(--color-error-700)',
            transform: 'translateY(-1px)',
            boxShadow: 'var(--shadow-error)'
          }
        }
      },
      sizes: {
        sm: {
          padding: 'var(--space-1_5) var(--space-3)',
          fontSize: 'var(--text-sm)',
          lineHeight: 'var(--leading-tight)',
          iconSize: '32px'
        },
        md: {
          padding: 'var(--space-2_5) var(--space-4)',
          fontSize: 'var(--text-base)',
          lineHeight: 'var(--leading-normal)',
          iconSize: '40px'
        },
        lg: {
          padding: 'var(--space-3) var(--space-6)',
          fontSize: 'var(--text-lg)',
          lineHeight: 'var(--leading-normal)',
          iconSize: '48px'
        }
      }
    },
    card: {
      variants: {
        default: {
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border-muted)',
          accentBar: true
        },
        branded: {
          background: 'linear-gradient(135deg, var(--snowfield-white) 0%, var(--granite-gray-50) 100%)',
          border: '2px solid var(--skyline-blue-100)',
          watermark: true
        },
        feature: {
          background: 'white',
          border: '2px solid #e5e7eb',
          iconStyle: 'gradient'
        },
        pricing: {
          background: 'white',
          border: '1px solid var(--color-border-muted)',
          popularBorder: '2px solid var(--aspen-gold-400)'
        },
        content: {
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border-muted)'
        }
      },
      sizes: {
        mini: { minHeight: '80px' },
        compact: { minHeight: '120px' },
        default: { minHeight: '160px' },
        hero: { minHeight: '200px' }
      },
      elevation: {
        none: 'none',
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)'
      },
      padding: {
        none: '0',
        sm: 'var(--space-3)',
        md: 'var(--space-4)',
        lg: 'var(--space-6)'
      }
    },
    input: {
      variants: {
        default: {
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          focusBorder: 'var(--color-primary)',
          focusShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
        },
        luxury: {
          border: '2px solid #e5e7eb',
          borderRadius: '12px',
          background: '#ffffff',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
          focusBorder: '#1C4D72',
          focusShadow: '0 0 0 3px rgba(28, 77, 114, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.1)',
          underlineGradient: true
        },
        minimal: {
          border: 'none',
          borderBottom: '1px solid var(--color-border)',
          borderRadius: '0',
          background: 'transparent',
          focusBorder: 'var(--color-primary)'
        }
      },
      sizes: {
        sm: {
          padding: 'var(--space-2) var(--space-3)',
          fontSize: 'var(--text-sm)',
          floatingPadding: 'var(--space-5) var(--space-3) var(--space-1)'
        },
        md: {
          padding: 'var(--space-3) var(--space-4)',
          fontSize: 'var(--text-base)',
          floatingPadding: 'var(--space-6) var(--space-4) var(--space-2)'
        },
        lg: {
          padding: 'var(--space-4) var(--space-5)',
          fontSize: 'var(--text-lg)',
          floatingPadding: 'var(--space-7) var(--space-5) var(--space-3)'
        }
      }
    }
  },

  // ==========================================================================
  // COLOR PALETTE
  // ==========================================================================
  colors: {
    // Brand Colors
    brand: {
      skylineBlue: {
        50: '#e6f0f7',
        100: '#cce1ef',
        200: '#99c3df',
        300: '#66a5cf',
        400: '#3387bf',
        500: '#1C4D72', // Primary
        600: '#16405e',
        700: '#11324a',
        800: '#0b2536',
        900: '#061722'
      },
      aspenGold: {
        50: '#fffbeb',
        100: '#fef7d7',
        200: '#fdeeb0',
        300: '#fce588',
        400: '#FDBA31', // Secondary
        500: '#fdb931',
        600: '#e4a62b',
        700: '#ca9326',
        800: '#b18020',
        900: '#976d1b'
      },
      graniteGray: {
        50: '#f8f9fa',
        100: '#f1f3f5',
        200: '#e9ecef',
        300: '#dee2e6',
        400: '#ced4da',
        500: '#adb5bd',
        600: '#6c757d',
        700: '#495057',
        800: '#343a40',
        900: '#212529'
      },
      snowfieldWhite: '#ffffff',
      midnightSky: '#0a0e1a'
    },
    
    // Semantic Colors
    semantic: {
      primary: 'var(--skyline-blue-500)',
      secondary: 'var(--aspen-gold-400)',
      accent: 'var(--aspen-gold-400)',
      success: '#22c55e',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6'
    },
    
    // Neutral Colors
    neutral: {
      text: 'var(--granite-gray-900)',
      textMuted: 'var(--granite-gray-600)',
      textSubtle: 'var(--granite-gray-500)',
      surface: 'var(--snowfield-white)',
      background: 'var(--granite-gray-50)',
      border: 'var(--granite-gray-300)',
      borderMuted: 'var(--granite-gray-200)'
    }
  },

  // ==========================================================================
  // SPACING SCALE
  // ==========================================================================
  spacing: {
    0: '0px',
    1: '0.25rem',    // 4px
    1.5: '0.375rem',  // 6px
    2: '0.5rem',      // 8px
    2.5: '0.625rem',  // 10px
    3: '0.75rem',     // 12px
    4: '1rem',        // 16px
    5: '1.25rem',     // 20px
    6: '1.5rem',      // 24px
    7: '1.75rem',     // 28px
    8: '2rem',        // 32px
    10: '2.5rem',     // 40px
    12: '3rem',       // 48px
    16: '4rem',       // 64px
    20: '5rem',       // 80px
    24: '6rem',       // 96px
  },

  // ==========================================================================
  // TYPOGRAPHY
  // ==========================================================================
  typography: {
    fonts: {
      sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      display: "'Space Grotesk', 'Inter', sans-serif",
      mono: "'JetBrains Mono', 'Courier New', monospace"
    },
    sizes: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
      '6xl': '3.75rem', // 60px
      '7xl': '4.5rem',  // 72px
    },
    weights: {
      thin: 100,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    },
    lineHeights: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2
    }
  },

  // ==========================================================================
  // EFFECTS
  // ==========================================================================
  effects: {
    shadows: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
      '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      primary: '0 4px 14px 0 rgba(28, 77, 114, 0.25)',
      accent: '0 4px 14px 0 rgba(253, 186, 49, 0.25)',
      error: '0 4px 14px 0 rgba(239, 68, 68, 0.25)'
    },
    radius: {
      none: '0px',
      sm: '0.125rem',   // 2px
      md: '0.375rem',   // 6px
      lg: '0.5rem',     // 8px
      xl: '0.75rem',    // 12px
      '2xl': '1rem',    // 16px
      '3xl': '1.5rem',  // 24px
      full: '9999px'
    },
    transitions: {
      durations: {
        150: '150ms',
        200: '200ms',
        300: '300ms',
        500: '500ms',
        700: '700ms',
        1000: '1000ms'
      },
      easings: {
        in: 'cubic-bezier(0.4, 0, 1, 1)',
        out: 'cubic-bezier(0, 0, 0.2, 1)',
        inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
      }
    }
  },

  // ==========================================================================
  // BREAKPOINTS
  // ==========================================================================
  breakpoints: {
    xs: '475px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },

  // ==========================================================================
  // Z-INDEX SCALE
  // ==========================================================================
  zIndex: {
    auto: 'auto',
    0: 0,
    10: 10,
    20: 20,
    30: 30,
    40: 40,
    50: 50,
    dropdown: 100,
    modal: 200,
    tooltip: 300,
    notification: 400,
    max: 999
  }
}

// Type exports for TypeScript
export type DesignSystem = typeof designSystem
export type ButtonVariant = keyof typeof designSystem.components.button.variants
export type ButtonSize = keyof typeof designSystem.components.button.sizes
export type CardVariant = keyof typeof designSystem.components.card.variants
export type CardSize = keyof typeof designSystem.components.card.sizes
export type CardElevation = keyof typeof designSystem.components.card.elevation
export type CardPadding = keyof typeof designSystem.components.card.padding
export type InputVariant = keyof typeof designSystem.components.input.variants
export type InputSize = keyof typeof designSystem.components.input.sizes
export type ColorBrand = keyof typeof designSystem.colors.brand
export type ColorSemantic = keyof typeof designSystem.colors.semantic
export type Spacing = keyof typeof designSystem.spacing
export type FontSize = keyof typeof designSystem.typography.sizes
export type FontWeight = keyof typeof designSystem.typography.weights
export type Shadow = keyof typeof designSystem.effects.shadows
export type Radius = keyof typeof designSystem.effects.radius
export type Breakpoint = keyof typeof designSystem.breakpoints