import { motion } from 'framer-motion';
import { AnimatedText, AnimatedButton, AnimatedCounter, ParallaxImage } from '../common/Animated';
import { DOC } from '../../config/data';

export default function HeroEnhanced() {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            background: 'linear-gradient(165deg, #071426 0%, #0A1E3D 40%, #0C2440 70%, #071426 100%)',
            position: 'relative',
            overflow: 'hidden',
            padding: '120px 24px 80px'
        }}>
            {/* Animated background elements */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '10%',
                    right: '5%',
                    width: 400,
                    height: 400,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(13,148,136,0.08) 0%, transparent 70%)',
                    filter: 'blur(60px)'
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.div
                style={{
                    position: 'absolute',
                    bottom: '20%',
                    left: '10%',
                    width: 300,
                    height: 300,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(20,184,166,0.06) 0%, transparent 70%)',
                    filter: 'blur(50px)'
                }}
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />

            <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'center' }}>
                    {/* Left content */}
                    <div style={{ flex: '1 1 480px' }}>
                        {/* Animated badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 8,
                                background: 'rgba(13,148,136,0.1)',
                                border: '1px solid rgba(13,148,136,0.2)',
                                padding: '8px 16px',
                                borderRadius: 100,
                                marginBottom: 24
                            }}
                        >
                            <motion.span
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                style={{ fontSize: 12 }}
                            >
                                ✨
                            </motion.span>
                            <span style={{
                                fontSize: 11,
                                fontWeight: 600,
                                color: '#5EEAD4',
                                fontFamily: "'Roboto', sans-serif",
                                letterSpacing: '0.05em',
                                textTransform: 'uppercase'
                            }}>
                                EBIR Certified Specialist
                            </span>
                        </motion.div>

                        {/* Animated name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            style={{
                                fontFamily: "'Roboto Slab', serif",
                                fontSize: 'clamp(36px, 6vw, 56px)',
                                fontWeight: 700,
                                color: '#fff',
                                lineHeight: 1.1,
                                marginBottom: 16
                            }}
                        >
                            {DOC.name}
                        </motion.h1>

                        {/* Animated title with gradient */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            style={{
                                fontSize: 'clamp(16px, 2vw, 20px)',
                                fontWeight: 500,
                                background: 'linear-gradient(135deg, #5EEAD4, #14B8A6)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontFamily: "'Roboto', sans-serif",
                                marginBottom: 20
                            }}
                        >
                            {DOC.title}
                        </motion.div>

                        {/* Animated tagline */}
                        <AnimatedText
                            text={DOC.tagline}
                            delay={0.7}
                            style={{
                                fontSize: 'clamp(24px, 3vw, 32px)',
                                fontWeight: 700,
                                color: '#fff',
                                fontFamily: "'Roboto', sans-serif",
                                lineHeight: 1.3,
                                marginBottom: 16
                            }}
                        />

                        {/* Animated subtitle */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            style={{
                                fontSize: 'clamp(14px, 1.5vw, 16px)',
                                color: 'rgba(255,255,255,0.7)',
                                fontFamily: "'Roboto', sans-serif",
                                lineHeight: 1.7,
                                marginBottom: 36,
                                maxWidth: 540
                            }}
                        >
                            {DOC.sub}
                        </motion.p>

                        {/* Animated buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 44 }}
                        >
                            <AnimatedButton
                                onClick={() => scrollToSection('contact')}
                                style={{
                                    background: 'linear-gradient(135deg, #0D9488, #0F766E)',
                                    border: 'none',
                                    color: '#fff',
                                    padding: '16px 32px',
                                    borderRadius: 12,
                                    fontSize: 15,
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    fontFamily: "'Roboto', sans-serif",
                                    boxShadow: '0 4px 20px rgba(13,148,136,0.3)'
                                }}
                            >
                                📅 Book Appointment
                            </AnimatedButton>

                            <AnimatedButton
                                onClick={() => scrollToSection('services')}
                                style={{
                                    background: 'rgba(255,255,255,0.08)',
                                    border: '1px solid rgba(255,255,255,0.15)',
                                    color: '#fff',
                                    padding: '16px 32px',
                                    borderRadius: 12,
                                    fontSize: 15,
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    fontFamily: "'Roboto', sans-serif",
                                    backdropFilter: 'blur(10px)'
                                }}
                            >
                                🔍 View Treatments
                            </AnimatedButton>
                        </motion.div>

                        {/* Animated stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.4 }}
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: 32
                            }}
                        >
                            {[
                                { value: DOC.exp, label: 'Years Experience', suffix: '+' },
                                { value: DOC.procs, label: 'Procedures Done', suffix: '+' },
                                { value: DOC.certs, label: 'Certifications', suffix: '' }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 1.6 + (i * 0.1) }}
                                    whileHover={{ scale: 1.05 }}
                                    style={{
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: 12,
                                        padding: '16px 20px',
                                        backdropFilter: 'blur(10px)',
                                        minWidth: 120
                                    }}
                                >
                                    <div style={{
                                        fontFamily: "'Roboto Slab', serif",
                                        fontSize: 32,
                                        fontWeight: 700,
                                        color: '#14B8A6',
                                        lineHeight: 1
                                    }}>
                                        <AnimatedCounter
                                            to={parseInt(stat.value)}
                                            suffix={stat.suffix}
                                            duration={2}
                                        />
                                    </div>
                                    <div style={{
                                        fontSize: 12,
                                        color: 'rgba(255,255,255,0.5)',
                                        fontFamily: "'Roboto', sans-serif",
                                        marginTop: 6,
                                        letterSpacing: '0.03em'
                                    }}>
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right image with parallax */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        style={{ flex: '0 1 360px', position: 'relative' }}
                    >
                        {/* Decorative elements */}
                        <motion.div
                            animate={{
                                rotate: 360
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{
                                position: 'absolute',
                                top: -20,
                                right: -20,
                                width: 100,
                                height: 100,
                                border: '2px solid rgba(13,148,136,0.2)',
                                borderRadius: '50%',
                                zIndex: 0
                            }}
                        />

                        <motion.div
                            animate={{
                                rotate: -360
                            }}
                            transition={{
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{
                                position: 'absolute',
                                bottom: -30,
                                left: -30,
                                width: 120,
                                height: 120,
                                border: '2px solid rgba(20,184,166,0.15)',
                                borderRadius: '50%',
                                zIndex: 0
                            }}
                        />

                        {/* Main image */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                position: 'relative',
                                borderRadius: 20,
                                overflow: 'hidden',
                                boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}
                        >
                            <img
                                src={DOC.photo}
                                alt={DOC.name}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'block'
                                }}
                            />

                            {/* Gradient overlay */}
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: 20,
                                background: 'linear-gradient(180deg, transparent 0%, rgba(7,20,38,0.9) 100%)'
                            }}>
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.5 }}
                                    style={{
                                        fontSize: 11,
                                        color: 'rgba(255,255,255,0.6)',
                                        fontFamily: "'Roboto', sans-serif",
                                        lineHeight: 1.5
                                    }}
                                >
                                    {DOC.quals}
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                style={{
                    position: 'absolute',
                    bottom: 40,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 8
                }}
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{
                        width: 24,
                        height: 36,
                        border: '2px solid rgba(255,255,255,0.3)',
                        borderRadius: 12,
                        position: 'relative'
                    }}
                >
                    <motion.div
                        animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        style={{
                            width: 4,
                            height: 8,
                            background: '#14B8A6',
                            borderRadius: 2,
                            position: 'absolute',
                            top: 6,
                            left: '50%',
                            transform: 'translateX(-50%)'
                        }}
                    />
                </motion.div>
                <span style={{
                    fontSize: 11,
                    color: 'rgba(255,255,255,0.4)',
                    fontFamily: "'Roboto', sans-serif",
                    letterSpacing: '0.05em'
                }}>
                    Scroll
                </span>
            </motion.div>
        </section>
    );
}
