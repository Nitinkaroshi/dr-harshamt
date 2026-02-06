/* ═══════════════════════════════════════════════════════════
   PROFESSIONAL MEDICAL COLOR SYSTEM
   Blue + White Theme - Trust, Cleanliness, Professionalism
   ═══════════════════════════════════════════════════════════ */

export const COLORS = {
    // Primary Medical Blue
    primary: {
        50: '#EFF6FF',   // Lightest blue background
        100: '#DBEAFE',  // Light blue background
        200: '#BFDBFE',  // Soft blue
        300: '#93C5FD',  // Medium light blue
        400: '#60A5FA',  // Bright blue
        500: '#3B82F6',  // Standard blue
        600: '#2563EB',  // Deep blue (main brand)
        700: '#1D4ED8',  // Darker blue
        800: '#1E40AF',  // Very dark blue
        900: '#1E3A8A',  // Navy blue
    },

    // Neutral Grays
    neutral: {
        50: '#F9FAFB',   // Almost white
        100: '#F3F4F6',  // Light gray background
        200: '#E5E7EB',  // Border gray
        300: '#D1D5DB',  // Divider gray
        400: '#9CA3AF',  // Placeholder gray
        500: '#6B7280',  // Secondary text
        600: '#4B5563',  // Body text
        700: '#374151',  // Dark text
        800: '#1F2937',  // Heading text
        900: '#111827',  // Black text
    },

    // Medical Accent Colors
    accent: {
        success: '#10B981',  // Medical green (healthy)
        warning: '#F59E0B',  // Caution yellow
        error: '#EF4444',    // Alert red
        info: '#3B82F6',     // Info blue
    },

    // Semantic Colors
    background: {
        primary: '#FFFFFF',     // Pure white
        secondary: '#F8FAFC',   // Off-white
        tertiary: '#EFF6FF',    // Light blue tint
    },

    text: {
        primary: '#1F2937',     // Main text (dark gray)
        secondary: '#4B5563',   // Secondary text
        tertiary: '#6B7280',    // Muted text
        inverse: '#FFFFFF',     // White text on dark
    },

    border: {
        light: '#E5E7EB',       // Light borders
        medium: '#D1D5DB',      // Medium borders
        dark: '#9CA3AF',        // Dark borders
    }
};

/* ═══════════════════════════════════════════════════════════
   TYPOGRAPHY SYSTEM
   Professional medical font sizing and weights
   ═══════════════════════════════════════════════════════════ */

export const TYPOGRAPHY = {
    // Font Families
    fonts: {
        heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        mono: "'JetBrains Mono', 'Courier New', monospace",
    },

    // Font Sizes (rem-based for accessibility)
    size: {
        xs: '0.75rem',    // 12px - Small labels
        sm: '0.875rem',   // 14px - Secondary text
        base: '1rem',     // 16px - Body text
        lg: '1.125rem',   // 18px - Large body
        xl: '1.25rem',    // 20px - Small headings
        '2xl': '1.5rem',  // 24px - H4
        '3xl': '1.875rem',// 30px - H3
        '4xl': '2.25rem', // 36px - H2
        '5xl': '3rem',    // 48px - H1
        '6xl': '3.75rem', // 60px - Hero
    },

    // Font Weights
    weight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
    },

    // Line Heights
    lineHeight: {
        tight: 1.25,
        normal: 1.5,
        relaxed: 1.75,
        loose: 2,
    },

    // Letter Spacing
    letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
    }
};

/* ═══════════════════════════════════════════════════════════
   SPACING SYSTEM
   Consistent spacing scale
   ═══════════════════════════════════════════════════════════ */

export const SPACING = {
    0: '0',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem',     // 96px
    32: '8rem',     // 128px
};

/* ═══════════════════════════════════════════════════════════
   SHADOW SYSTEM
   Professional depth and elevation
   ═══════════════════════════════════════════════════════════ */

export const SHADOWS = {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    none: 'none',
};

/* ═══════════════════════════════════════════════════════════
   BORDER RADIUS
   Consistent rounded corners
   ═══════════════════════════════════════════════════════════ */

export const RADIUS = {
    none: '0',
    sm: '0.25rem',   // 4px
    base: '0.5rem',  // 8px
    md: '0.75rem',   // 12px
    lg: '1rem',      // 16px
    xl: '1.5rem',    // 24px
    '2xl': '2rem',   // 32px
    full: '9999px',  // Fully rounded
};

/* ═══════════════════════════════════════════════════════════
   COMPONENT STYLES
   Pre-configured component styles
   ═══════════════════════════════════════════════════════════ */

export const COMPONENTS = {
    button: {
        primary: {
            background: COLORS.primary[600],
            color: COLORS.text.inverse,
            hover: COLORS.primary[700],
            active: COLORS.primary[800],
        },
        secondary: {
            background: COLORS.neutral[100],
            color: COLORS.primary[600],
            hover: COLORS.neutral[200],
            active: COLORS.neutral[300],
        },
        outline: {
            background: 'transparent',
            color: COLORS.primary[600],
            border: COLORS.primary[600],
            hover: COLORS.primary[50],
        }
    },

    card: {
        background: COLORS.background.primary,
        border: COLORS.border.light,
        shadow: SHADOWS.md,
        radius: RADIUS.lg,
    },

    input: {
        background: COLORS.background.primary,
        border: COLORS.border.medium,
        focus: COLORS.primary[500],
        text: COLORS.text.primary,
        placeholder: COLORS.neutral[400],
    }
};

export default {
    COLORS,
    TYPOGRAPHY,
    SPACING,
    SHADOWS,
    RADIUS,
    COMPONENTS
};
