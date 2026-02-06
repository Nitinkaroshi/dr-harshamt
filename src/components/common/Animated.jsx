import { motion } from 'framer-motion';
import { scrollReveal, scrollRevealScale, staggerContainer } from '../../utils/animations';

/**
 * AnimatedSection - Wrapper for sections with scroll-triggered animations
 */
export function AnimatedSection({
    children,
    className = '',
    style = {},
    variant = 'fadeUp',
    delay = 0,
    stagger = false
}) {
    const variants = {
        fadeUp: scrollReveal,
        scale: scrollRevealScale,
        stagger: staggerContainer
    };

    return (
        <motion.section
            className={className}
            style={style}
            {...(stagger ? variants.stagger : variants[variant])}
            transition={{ delay }}
        >
            {children}
        </motion.section>
    );
}

/**
 * AnimatedCard - Card with hover and tap animations
 */
export function AnimatedCard({
    children,
    onClick,
    className = '',
    style = {},
    enableHover = true,
    enableTap = true
}) {
    return (
        <motion.div
            className={className}
            style={style}
            onClick={onClick}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={enableHover ? {
                y: -8,
                boxShadow: "0 12px 40px rgba(13, 148, 136, 0.15)",
                transition: { duration: 0.3 }
            } : {}}
            whileTap={enableTap ? { scale: 0.98 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}

/**
 * AnimatedButton - Button with ripple and scale effects
 */
export function AnimatedButton({
    children,
    onClick,
    className = '',
    style = {},
    variant = 'primary',
    disabled = false
}) {
    return (
        <motion.button
            className={className}
            style={style}
            onClick={onClick}
            disabled={disabled}
            whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 24px rgba(13, 148, 136, 0.3)",
                transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.button>
    );
}

/**
 * AnimatedText - Text with character-by-character reveal
 */
export function AnimatedText({
    text,
    className = '',
    style = {},
    delay = 0,
    stagger = 0.03
}) {
    const words = text.split(' ');

    return (
        <motion.div
            className={className}
            style={style}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    style={{ display: 'inline-block', marginRight: '0.3em' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: delay + (i * stagger),
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
}

/**
 * AnimatedCounter - Animated number counter
 */
export function AnimatedCounter({
    from = 0,
    to,
    duration = 2,
    suffix = '',
    className = '',
    style = {}
}) {
    return (
        <motion.span
            className={className}
            style={style}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <motion.span
                initial={{ value: from }}
                whileInView={{ value: to }}
                viewport={{ once: true }}
                transition={{ duration, ease: "easeOut" }}
                onUpdate={(latest) => {
                    const element = document.getElementById(`counter-${to}`);
                    if (element) {
                        element.textContent = Math.round(latest.value) + suffix;
                    }
                }}
            >
                <span id={`counter-${to}`}>{from}{suffix}</span>
            </motion.span>
        </motion.span>
    );
}

/**
 * AnimatedList - Staggered list animation
 */
export function AnimatedList({
    children,
    className = '',
    style = {},
    staggerDelay = 0.1
}) {
    return (
        <motion.div
            className={className}
            style={style}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                initial: {},
                animate: {
                    transition: {
                        staggerChildren: staggerDelay
                    }
                }
            }}
        >
            {children}
        </motion.div>
    );
}

/**
 * AnimatedListItem - Individual list item
 */
export function AnimatedListItem({
    children,
    className = '',
    style = {}
}) {
    return (
        <motion.div
            className={className}
            style={style}
            variants={{
                initial: { opacity: 0, x: -20 },
                animate: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                }
            }}
        >
            {children}
        </motion.div>
    );
}

/**
 * AnimatedIcon - Icon with rotation and scale
 */
export function AnimatedIcon({
    children,
    className = '',
    style = {},
    animate = true
}) {
    return (
        <motion.div
            className={className}
            style={style}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            whileHover={animate ? {
                scale: 1.2,
                rotate: 15,
                transition: { duration: 0.3 }
            } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}

/**
 * AnimatedProgress - Progress bar animation
 */
export function AnimatedProgress({
    value = 0,
    max = 100,
    className = '',
    style = {},
    color = '#0D9488'
}) {
    return (
        <div
            className={className}
            style={{
                width: '100%',
                height: 8,
                background: 'rgba(0,0,0,0.1)',
                borderRadius: 4,
                overflow: 'hidden',
                ...style
            }}
        >
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(value / max) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{
                    height: '100%',
                    background: color,
                    borderRadius: 4
                }}
            />
        </div>
    );
}

/**
 * AnimatedModal - Modal with backdrop and slide-up animation
 */
export function AnimatedModal({
    isOpen,
    onClose,
    children,
    className = ''
}) {
    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                style={{
                    position: 'fixed',
                    inset: 0,
                    background: 'rgba(0,0,0,0.5)',
                    zIndex: 9998,
                    backdropFilter: 'blur(4px)'
                }}
            />

            {/* Modal */}
            <motion.div
                className={className}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '100%', opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 9999,
                    maxHeight: '90vh',
                    overflowY: 'auto'
                }}
            >
                {children}
            </motion.div>
        </>
    );
}

/**
 * ParallaxImage - Image with parallax scroll effect
 */
export function ParallaxImage({
    src,
    alt,
    offset = 50,
    className = '',
    style = {}
}) {
    return (
        <motion.div
            className={className}
            style={{ overflow: 'hidden', ...style }}
        >
            <motion.img
                src={src}
                alt={alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            />
        </motion.div>
    );
}

export default AnimatedSection;
