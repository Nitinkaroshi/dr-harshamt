/**
 * Advanced Animation Utilities with Framer Motion
 * Reusable animation variants and configurations
 */

// Fade in from bottom
export const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

// Fade in from top
export const fadeInDown = {
    initial: { opacity: 0, y: -40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

// Fade in from left
export const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

// Fade in from right
export const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

// Scale up
export const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};

// Stagger children animation
export const staggerContainer = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

// Stagger with faster timing
export const staggerFast = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0
        }
    }
};

// Stagger with slower timing
export const staggerSlow = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

// Slide in from bottom (for modals/drawers)
export const slideUp = {
    initial: { y: '100%' },
    animate: { y: 0 },
    exit: { y: '100%' },
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
};

// Rotate and scale (for icons)
export const rotateScale = {
    initial: { opacity: 0, scale: 0, rotate: -180 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
    exit: { opacity: 0, scale: 0, rotate: 180 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

// Bounce in
export const bounceIn = {
    initial: { opacity: 0, scale: 0.3 },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20
        }
    }
};

// Hover animations
export const hoverScale = {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeOut" }
};

export const hoverLift = {
    y: -8,
    transition: { duration: 0.3, ease: "easeOut" }
};

export const hoverGlow = {
    boxShadow: "0 8px 30px rgba(13, 148, 136, 0.3)",
    transition: { duration: 0.3 }
};

// Tap animations
export const tapScale = {
    scale: 0.95,
    transition: { duration: 0.1 }
};

// Button ripple effect
export const buttonVariants = {
    rest: { scale: 1 },
    hover: {
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeOut" }
    },
    tap: {
        scale: 0.95,
        transition: { duration: 0.1 }
    }
};

// Card hover effect
export const cardHover = {
    rest: {
        y: 0,
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
    },
    hover: {
        y: -8,
        boxShadow: "0 12px 40px rgba(13, 148, 136, 0.15)",
        transition: { duration: 0.3, ease: "easeOut" }
    }
};

// Parallax scroll effect
export const parallaxVariants = (offset = 50) => ({
    initial: { y: 0 },
    animate: (scrollY) => ({
        y: scrollY * offset,
        transition: { duration: 0 }
    })
});

// Page transition
export const pageTransition = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
};

// Drawer/Modal backdrop
export const backdropVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
};

// Number counter animation
export const counterVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    }
};

// Reveal text by character
export const textReveal = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

// Scroll-triggered reveal
export const scrollReveal = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

// Scroll reveal with scale
export const scrollRevealScale = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

// Loading spinner
export const spinnerVariants = {
    animate: {
        rotate: 360,
        transition: {
            duration: 1,
            repeat: Infinity,
            ease: "linear"
        }
    }
};

// Pulse animation
export const pulseVariants = {
    animate: {
        scale: [1, 1.05, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

// Floating animation
export const floatVariants = {
    animate: {
        y: [0, -10, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

// Shimmer effect
export const shimmerVariants = {
    animate: {
        backgroundPosition: ["200% 0", "-200% 0"],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "linear"
        }
    }
};

// Easing functions
export const easings = {
    easeOutExpo: [0.19, 1, 0.22, 1],
    easeOutCubic: [0.33, 1, 0.68, 1],
    easeInOutCubic: [0.65, 0, 0.35, 1],
    easeOutQuart: [0.25, 1, 0.5, 1],
    spring: { type: "spring", stiffness: 300, damping: 30 }
};

// Viewport settings
export const viewportSettings = {
    once: true,
    margin: "-100px",
    amount: 0.3
};

export const viewportSettingsEarly = {
    once: true,
    margin: "0px",
    amount: 0.1
};

// Utility function to create stagger delay
export const getStaggerDelay = (index, baseDelay = 0.1) => ({
    delay: index * baseDelay
});

// Utility function for scroll-based animations
export const useScrollAnimation = (threshold = 0.1) => {
    return {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: threshold },
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    };
};
