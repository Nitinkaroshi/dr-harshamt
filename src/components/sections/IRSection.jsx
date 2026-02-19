import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../common/FadeIn';
import { VeinIllustration } from '../common/MedicalIllustrations';
import { IMG, DOC } from '../../config/data';

const CAROUSEL_PHOTOS = [
    { img: DOC.photo, label: "In Consultation", desc: "Expert patient counselling before every procedure" },
    { img: DOC.photoScrubs, label: "In the Cath Lab", desc: "Performing image-guided interventional procedures" },
    { img: DOC.photoApron, label: "During Procedure", desc: "Precision and safety at every step" },
];

export default function IRSection() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setActive(p => (p + 1) % CAROUSEL_PHOTOS.length), 4000);
        return () => clearInterval(t);
    }, []);

    return (
        <section style={{
            background: "linear-gradient(135deg, #071426 0%, #0A1E3D 100%)",
            padding: "80px 0 0",
            position: "relative",
            overflow: "hidden"
        }}>
            {/* Decorative orb */}
            <div style={{
                position: "absolute", top: "-20%", right: "-10%",
                width: "50vw", height: "50vw", borderRadius: "50%",
                background: "radial-gradient(circle, rgba(13,148,136,0.06) 0%, transparent 70%)",
                pointerEvents: "none"
            }} />

            <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
                {/* ── Revolution Quote ── */}
                <FadeIn>
                    <div style={{ textAlign: "center", marginBottom: 56 }}>
                        <div style={{
                            fontSize: 80, lineHeight: 0.8,
                            color: "rgba(13,148,136,0.25)",
                            fontFamily: "Georgia, serif", marginBottom: 16
                        }}>"</div>
                        <h2 style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(22px, 3.5vw, 40px)",
                            fontWeight: 800, color: "#FFFFFF",
                            lineHeight: 1.25, marginBottom: 24,
                            maxWidth: 780, margin: "0 auto 24px",
                            letterSpacing: "-0.02em"
                        }}>
                            Interventional radiology is the{" "}
                            <span style={{ color: "#14B8A6" }}>quiet revolution</span>{" "}
                            of the medical world.
                        </h2>
                        <p style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "clamp(15px, 1.8vw, 18px)",
                            color: "rgba(255,255,255,0.6)", lineHeight: 1.8,
                            maxWidth: 680, margin: "0 auto 36px"
                        }}>
                            Often referred to as{" "}
                            <strong style={{ color: "rgba(255,255,255,0.85)" }}>Surgery 2.0</strong>,
                            it is a specialised field that uses advanced medical imaging (CT, Ultrasound)
                            to perform complex procedures that once required open surgery — through just a pinhole.
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
                            {["No Large Incisions", "Local Anaesthesia", "Same Day Home", "No Scars", "Faster Recovery"].map((tag, i) => (
                                <span key={i} style={{
                                    background: "rgba(20,184,166,0.1)",
                                    border: "1px solid rgba(20,184,166,0.25)",
                                    color: "#5EEAD4", padding: "6px 16px",
                                    borderRadius: 100, fontSize: 12, fontWeight: 600,
                                    fontFamily: "'DM Sans', sans-serif"
                                }}>{tag}</span>
                            ))}
                        </div>
                    </div>
                </FadeIn>

                {/* ── Photo Carousel ── */}
                <FadeIn delay={0.1}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 20, alignItems: "flex-start" }}>
                        {/* Main photo */}
                        <div style={{
                            flex: "1 1 340px", position: "relative",
                            borderRadius: 20, overflow: "hidden",
                            aspectRatio: "3/4", maxHeight: 460,
                            border: "1px solid rgba(13,148,136,0.2)",
                            boxShadow: "0 20px 60px rgba(0,0,0,0.4)"
                        }}>
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={active}
                                    src={CAROUSEL_PHOTOS[active].img}
                                    alt={CAROUSEL_PHOTOS[active].label}
                                    initial={{ opacity: 0, scale: 1.04 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.97 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                                />
                            </AnimatePresence>
                            <div style={{
                                position: "absolute", inset: 0,
                                background: "linear-gradient(180deg, transparent 55%, rgba(7,20,38,0.92) 100%)"
                            }} />
                            <div style={{ position: "absolute", bottom: 24, left: 24, right: 24 }}>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={active}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", fontFamily: "'DM Sans', sans-serif", marginBottom: 4 }}>
                                            {CAROUSEL_PHOTOS[active].label}
                                        </div>
                                        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", fontFamily: "'DM Sans', sans-serif" }}>
                                            {CAROUSEL_PHOTOS[active].desc}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                                <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
                                    {CAROUSEL_PHOTOS.map((_, i) => (
                                        <button key={i} onClick={() => setActive(i)} style={{
                                            width: i === active ? 24 : 8, height: 8, borderRadius: 4,
                                            background: i === active ? "#14B8A6" : "rgba(255,255,255,0.3)",
                                            border: "none", cursor: "pointer",
                                            transition: "all 0.3s ease", padding: 0
                                        }} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right column */}
                        <div style={{ flex: "1 1 260px", display: "flex", flexDirection: "column", gap: 12 }}>
                            {CAROUSEL_PHOTOS.map((p, i) => (
                                <motion.div
                                    key={i}
                                    onClick={() => setActive(i)}
                                    whileHover={{ scale: 1.02 }}
                                    style={{
                                        display: "flex", alignItems: "center", gap: 14,
                                        borderRadius: 12, padding: "10px 14px", cursor: "pointer",
                                        border: i === active ? "1px solid rgba(20,184,166,0.4)" : "1px solid rgba(255,255,255,0.06)",
                                        background: i === active ? "rgba(20,184,166,0.08)" : "rgba(255,255,255,0.02)",
                                        transition: "all 0.3s ease"
                                    }}
                                >
                                    <div style={{
                                        width: 50, height: 50, borderRadius: 10,
                                        overflow: "hidden", flexShrink: 0,
                                        border: i === active ? "2px solid #14B8A6" : "2px solid transparent"
                                    }}>
                                        <img src={p.img} alt={p.label} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: 13, fontWeight: 600, fontFamily: "'DM Sans', sans-serif", marginBottom: 2, color: i === active ? "#5EEAD4" : "rgba(255,255,255,0.7)" }}>
                                            {p.label}
                                        </div>
                                        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", fontFamily: "'DM Sans', sans-serif" }}>{p.desc}</div>
                                    </div>
                                </motion.div>
                            ))}

                            {/* IR image */}
                            <div style={{ borderRadius: 14, overflow: "hidden", flex: 1, minHeight: 160, position: "relative", border: "1px solid rgba(255,255,255,0.06)" }}>
                                <img src={IMG.ir} alt="IR Procedure" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(7,20,38,0.9) 100%)" }} />
                                <div style={{ position: "absolute", bottom: 14, left: 14, right: 14, fontSize: 12, fontWeight: 600, color: "#fff", fontFamily: "'DM Sans', sans-serif" }}>
                                    Advanced Imaging Guidance — CT & Ultrasound
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>

            {/* Pinhole illustration */}
            <div style={{ maxWidth: 900, margin: "48px auto 0", padding: "0 24px" }}>
                <FadeIn delay={0.1}>
                    <div style={{ marginBottom: 0, padding: "20px 0" }}>
                        <VeinIllustration type="pinhole" />
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
