import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../common/FadeIn';
import { DOC, heroImages } from '../../config/data';
import { Phone } from 'lucide-react';
import '../../styles/Hero.css';

const HERO_PHOTOS = heroImages;

/**
 * Modernized Hero Component
 * Uses CSS classes from Hero.css for cleaner JSX and better performance.
 */
export default function Hero() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setActive(p => (p + 1) % HERO_PHOTOS.length), 7000);
        return () => clearInterval(t);
    }, []);

    const handleAppointmentClick = () => {
        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    };

    const handleTreatmentsClick = () => {
        document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="hero-section">
            <div className="hero-orb" aria-hidden="true" />

            <div className="hero-container">
                <div className="hero-flex">

                    {/* Left Content Column */}
                    <div className="hero-content">
                        <FadeIn immediate={true}>
                            <div className="hero-badge">
                                <div className="hero-badge-dot" />
                                <span className="hero-badge-text">Available for Appointments in Bengaluru</span>
                            </div>
                        </FadeIn>

                        <FadeIn immediate={true}>
                            <h1 className="hero-h1">{DOC.name}</h1>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <p className="hero-title-full">{DOC.title}</p>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <p className="hero-quals">{DOC.quals}</p>
                            <div className="hero-training-list">
                                <p className="hero-training-item">{DOC.sub}</p>
                                <p className="hero-training-item">{DOC.director}</p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.6}>
                            <p className="hero-tagline">{DOC.tagline}</p>
                        </FadeIn>

                        <FadeIn delay={0.8}>
                            <div className="hero-btns">
                                <button
                                    onClick={handleAppointmentClick}
                                    className="btn btn-primary"
                                    style={{ padding: "16px 36px", fontSize: 16 }}
                                >
                                    Book Appointment
                                </button>
                                <button
                                    onClick={handleTreatmentsClick}
                                    className="btn btn-outline"
                                    style={{ padding: "14px 30px", fontSize: 15 }}
                                >
                                    View Treatments
                                </button>
                                <a
                                    href={`tel:${DOC.phone.replace(/\s/g, '')}`}
                                    className="btn btn-secondary hero-phone-link"
                                    style={{ padding: "0px", background: "transparent", border: "none" }}
                                >
                                    <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--color-primary-600)", fontWeight: 700 }}>
                                        <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(37,99,235,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <Phone size={18} />
                                        </div>
                                        <span>{DOC.phone}</span>
                                    </div>
                                </a>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Carousel Column - Redesigned */}
                    <div className="hero-image-wrap">
                        <div className="hero-image-container">
                            {/* Interactive Stack Backgrounds */}
                            {[2, 1].map((depth) => (
                                <div 
                                    key={depth}
                                    className={`hero-image-backdrop depth-${depth}`}
                                    style={{
                                        transform: `scale(${1 - depth * 0.05}) translateY(${depth * 15}px)`,
                                        opacity: 0.4 / depth,
                                        zIndex: -depth
                                    }}
                                />
                            ))}

                            <div className="hero-image-card">
                                <AnimatePresence mode="popLayout" initial={false}>
                                    <motion.img
                                        key={active}
                                        src={HERO_PHOTOS[active].img}
                                        alt={HERO_PHOTOS[active].label}
                                        fetchpriority={active === 0 ? "high" : "auto"}
                                        loading={active === 0 ? "eager" : "lazy"}
                                        initial={{ opacity: 0, scale: 0.9, y: 20, rotate: -2 }}
                                        animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                                        exit={{ opacity: 0, scale: 1.1, y: -20, rotate: 2 }}
                                        transition={{ 
                                            type: "spring",
                                            stiffness: 100,
                                            damping: 28,
                                            mass: 1.2
                                        }}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            objectPosition: HERO_PHOTOS[active].pos || "center",
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                        }}
                                    />
                                </AnimatePresence>

                                <div className="hero-image-overlay" />

                                <AnimatePresence mode="wait">
                                    {/* <motion.div
                                        key={active}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -5 }}
                                        transition={{ duration: 0.3 }}
                                        className="hero-image-label"
                                        draggable={false}
                                    >
                                        {HERO_PHOTOS[active].label}
                                    </motion.div> */}
                                </AnimatePresence>

                                <div className="hero-dots">
                                    {HERO_PHOTOS.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setActive(i)}
                                            className={`hero-dot ${i === active ? 'active' : 'inactive'}`}
                                            aria-label={`Show image ${i + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
