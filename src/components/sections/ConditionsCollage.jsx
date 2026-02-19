import { useState } from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../../config/data';

export default function ConditionsCollage({ onTreatment }) {
    const [hovered, setHovered] = useState(null);

    const colors = [
        "#1E40AF", "#0F766E", "#7C3AED", "#B45309",
        "#0E7490", "#059669", "#BE123C", "#1D4ED8",
        "#0F766E", "#9333EA", "#C2410C", "#0369A1"
    ];

    return (
        <section style={{ background: "#F8FAFC", padding: "80px 0" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
                {/* Heading */}
                <div style={{ textAlign: "center", marginBottom: 48 }}>
                    <span style={{
                        display: "inline-block",
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#2563EB",
                        background: "rgba(37,99,235,0.08)",
                        padding: "6px 16px",
                        borderRadius: 100,
                        marginBottom: 14,
                        fontFamily: "'DM Sans', sans-serif"
                    }}>Conditions We Treat</span>
                    <h2 style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "clamp(26px, 3.5vw, 38px)",
                        fontWeight: 800,
                        color: "#071426",
                        marginBottom: 12,
                        lineHeight: 1.15
                    }}>12 Conditions.<br />One Pinhole Solution.</h2>
                    <p style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 16,
                        color: "#6B7280",
                        maxWidth: 520,
                        margin: "0 auto",
                        lineHeight: 1.7
                    }}>
                        Advanced image-guided procedures replacing complex surgeries — no large incisions, no long hospital stays.
                    </p>
                </div>

                {/* Collage Grid */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                    gap: 12
                }}>
                    {SERVICES.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 0.4, ease: "easeOut" }}
                            onMouseEnter={() => setHovered(i)}
                            onMouseLeave={() => setHovered(null)}
                            onClick={() => s.id && onTreatment?.(s.id)}
                            style={{
                                position: "relative",
                                borderRadius: 14,
                                overflow: "hidden",
                                aspectRatio: "4/3",
                                cursor: s.id ? "pointer" : "default",
                                background: colors[i % colors.length]
                            }}
                        >
                            {/* Background image */}
                            <img
                                src={s.img}
                                alt={s.t}
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    transition: "transform 0.45s ease",
                                    transform: hovered === i ? "scale(1.08)" : "scale(1)"
                                }}
                            />

                            {/* Dark overlay */}
                            <div style={{
                                position: "absolute",
                                inset: 0,
                                background: hovered === i
                                    ? "linear-gradient(180deg, rgba(7,20,38,0.15) 0%, rgba(7,20,38,0.85) 100%)"
                                    : "linear-gradient(180deg, rgba(7,20,38,0.1) 0%, rgba(7,20,38,0.7) 100%)",
                                transition: "background 0.3s ease"
                            }} />

                            {/* Number badge */}
                            <div style={{
                                position: "absolute",
                                top: 10,
                                left: 10,
                                width: 26,
                                height: 26,
                                borderRadius: "50%",
                                background: "rgba(255,255,255,0.15)",
                                border: "1px solid rgba(255,255,255,0.3)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 10,
                                fontWeight: 700,
                                color: "#fff",
                                fontFamily: "'DM Sans', sans-serif",
                                backdropFilter: "blur(4px)"
                            }}>{String(i + 1).padStart(2, "0")}</div>

                            {/* Icon */}
                            <div style={{
                                position: "absolute",
                                top: 10,
                                right: 10,
                                fontSize: 20
                            }}>{s.icon}</div>

                            {/* Text */}
                            <div style={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: "12px 14px"
                            }}>
                                <div style={{
                                    fontSize: 13,
                                    fontWeight: 700,
                                    color: "#fff",
                                    fontFamily: "'DM Sans', sans-serif",
                                    lineHeight: 1.3,
                                    marginBottom: 3
                                }}>{s.t}</div>
                                <div style={{
                                    fontSize: 10,
                                    color: "rgba(255,255,255,0.65)",
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontWeight: 500
                                }}>{s.sub}</div>
                                {s.id && hovered === i && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 4 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        style={{
                                            marginTop: 6,
                                            fontSize: 11,
                                            fontWeight: 600,
                                            color: "#5EEAD4",
                                            fontFamily: "'DM Sans', sans-serif"
                                        }}
                                    >Learn More →</motion.div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom note */}
                <div style={{
                    textAlign: "center",
                    marginTop: 32,
                    fontSize: 14,
                    color: "#9CA3AF",
                    fontFamily: "'DM Sans', sans-serif"
                }}>
                    All procedures performed under image guidance — CT, Ultrasound & Fluoroscopy
                </div>
            </div>
        </section>
    );
}
