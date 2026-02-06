import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHead from '../common/SectionHead';
import { TESTIMONIALS } from '../../config/data';

export default function Testimonials() {
    const [active, setActive] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setActive(prev => (prev + 1) % TESTIMONIALS.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const handleDotClick = (index) => {
        setDirection(index > active ? 1 : -1);
        setActive(index);
    };

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            x: direction > 0 ? -300 : 300,
            opacity: 0
        })
    };

    return (
        <section style={{
            background: "linear-gradient(180deg, #0C2440, #071426)",
            padding: "90px 0"
        }}>
            <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
                <SectionHead
                    label="Patient Stories"
                    title="What Our Patients Say"
                    sub="Real experiences from patients treated by Dr. Harsha"
                />

                <div style={{ position: "relative", minHeight: 240 }}>
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={active}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.3 }
                            }}
                            style={{
                                background: "rgba(255,255,255,0.03)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                borderRadius: 18,
                                padding: "36px 32px",
                                minHeight: 200
                            }}
                        >
                            {/* Stars */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                style={{ display: "flex", marginBottom: 16, gap: 4 }}
                            >
                                {[...Array(TESTIMONIALS[active].rating)].map((_, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.3 + (i * 0.05), type: "spring" }}
                                        style={{ color: "#F59E0B", fontSize: 18 }}
                                    >★</motion.span>
                                ))}
                            </motion.div>

                            {/* Testimonial text */}
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: 16,
                                    color: "rgba(255,255,255,0.75)",
                                    lineHeight: 1.8,
                                    marginBottom: 24,
                                    fontStyle: "italic"
                                }}
                            >
                                "{TESTIMONIALS[active].text}"
                            </motion.p>

                            {/* Author */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                style={{ display: "flex", alignItems: "center", gap: 14 }}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    style={{
                                        width: 44,
                                        height: 44,
                                        borderRadius: "50%",
                                        background: "linear-gradient(135deg, rgba(13,148,136,0.3), rgba(13,148,136,0.1))",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: 18,
                                        fontWeight: 700,
                                        color: "#5EEAD4",
                                        fontFamily: "'DM Sans', sans-serif"
                                    }}
                                >
                                    {TESTIMONIALS[active].name.charAt(0)}
                                </motion.div>
                                <div>
                                    <div style={{
                                        fontSize: 15,
                                        fontWeight: 600,
                                        color: "#fff",
                                        fontFamily: "'DM Sans', sans-serif"
                                    }}>{TESTIMONIALS[active].name}</div>
                                    <div style={{
                                        fontSize: 12,
                                        color: "rgba(255,255,255,0.4)",
                                        fontFamily: "'DM Sans', sans-serif"
                                    }}>Age {TESTIMONIALS[active].age} • {TESTIMONIALS[active].condition}</div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation dots */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 24 }}
                    >
                        {TESTIMONIALS.map((_, i) => (
                            <motion.button
                                key={i}
                                onClick={() => handleDotClick(i)}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                animate={{
                                    width: active === i ? 24 : 8,
                                    backgroundColor: active === i ? "#14B8A6" : "rgba(255,255,255,0.15)"
                                }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    height: 8,
                                    borderRadius: 4,
                                    border: "none",
                                    cursor: "pointer"
                                }}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
