import { motion } from 'framer-motion';
import FadeIn from '../common/FadeIn';
import { STEPS } from '../../config/data';

const STEP_VISUALS = [
    {
        icon: "📋",
        color: "#2563EB",
        bg: "rgba(37,99,235,0.08)",
        border: "rgba(37,99,235,0.15)",
        illustration: (
            <svg viewBox="0 0 80 80" fill="none" style={{ width: 80, height: 80 }}>
                <rect x="20" y="10" width="40" height="55" rx="4" stroke="#2563EB" strokeWidth="2" fill="rgba(37,99,235,0.06)" />
                <rect x="30" y="8" width="20" height="8" rx="2" fill="#2563EB" />
                <line x1="28" y1="28" x2="52" y2="28" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                <line x1="28" y1="36" x2="48" y2="36" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
                <line x1="28" y1="44" x2="44" y2="44" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
                <circle cx="54" cy="52" r="10" fill="#2563EB" opacity="0.15" />
                <path d="M50 52 l3 3 l5-6" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        icon: "🔍",
        color: "#0D9488",
        bg: "rgba(13,148,136,0.08)",
        border: "rgba(13,148,136,0.15)",
        illustration: (
            <svg viewBox="0 0 80 80" fill="none" style={{ width: 80, height: 80 }}>
                <rect x="10" y="15" width="45" height="50" rx="6" stroke="#0D9488" strokeWidth="2" fill="rgba(13,148,136,0.06)" />
                <rect x="16" y="22" width="33" height="22" rx="2" fill="rgba(13,148,136,0.1)" />
                <line x1="16" y1="52" x2="49" y2="52" stroke="#0D9488" strokeWidth="1.5" opacity="0.3" />
                <line x1="16" y1="58" x2="38" y2="58" stroke="#0D9488" strokeWidth="1.5" opacity="0.2" />
                <circle cx="58" cy="30" r="14" stroke="#0D9488" strokeWidth="2" fill="rgba(13,148,136,0.05)" />
                <circle cx="58" cy="30" r="6" stroke="#0D9488" strokeWidth="1.5" fill="none" opacity="0.6" />
                <circle cx="58" cy="30" r="2" fill="#0D9488" opacity="0.4" />
            </svg>
        )
    },
    {
        icon: "✨",
        color: "#7C3AED",
        bg: "rgba(124,58,237,0.08)",
        border: "rgba(124,58,237,0.15)",
        illustration: (
            <svg viewBox="0 0 80 80" fill="none" style={{ width: 80, height: 80 }}>
                <circle cx="40" cy="40" r="25" stroke="#7C3AED" strokeWidth="2" fill="rgba(124,58,237,0.06)" />
                <circle cx="40" cy="40" r="16" stroke="#7C3AED" strokeWidth="1.5" fill="none" opacity="0.4" strokeDasharray="4 3" />
                <circle cx="40" cy="40" r="4" fill="#7C3AED" opacity="0.6" />
                <line x1="40" y1="12" x2="40" y2="18" stroke="#7C3AED" strokeWidth="1.5" opacity="0.3" />
                <line x1="40" y1="62" x2="40" y2="68" stroke="#7C3AED" strokeWidth="1.5" opacity="0.3" />
                <line x1="12" y1="40" x2="18" y2="40" stroke="#7C3AED" strokeWidth="1.5" opacity="0.3" />
                <line x1="62" y1="40" x2="68" y2="40" stroke="#7C3AED" strokeWidth="1.5" opacity="0.3" />
                <path d="M32 36 l4 0 l0 -4 l8 0 l0 4 l4 0 l0 8 l-4 0 l0 4 l-8 0 l0 -4 l-4 0 z" fill="#7C3AED" opacity="0.2" />
            </svg>
        )
    },
    {
        icon: "🏠",
        color: "#059669",
        bg: "rgba(5,150,105,0.08)",
        border: "rgba(5,150,105,0.15)",
        illustration: (
            <svg viewBox="0 0 80 80" fill="none" style={{ width: 80, height: 80 }}>
                <path d="M40 15 L65 35 L65 65 L15 65 L15 35 Z" stroke="#059669" strokeWidth="2" fill="rgba(5,150,105,0.06)" />
                <rect x="32" y="45" width="16" height="20" rx="2" stroke="#059669" strokeWidth="1.5" fill="rgba(5,150,105,0.1)" />
                <circle cx="44" cy="55" r="1.5" fill="#059669" />
                <rect x="22" y="38" width="10" height="10" rx="1" stroke="#059669" strokeWidth="1.5" fill="none" opacity="0.4" />
                <rect x="48" y="38" width="10" height="10" rx="1" stroke="#059669" strokeWidth="1.5" fill="none" opacity="0.4" />
                <path d="M20 55 l-8 0 l0 -10 l-4 0 l12 -14 l0 10" stroke="#059669" strokeWidth="1" opacity="0.3" fill="none" />
                <circle cx="55" cy="22" r="6" fill="#F59E0B" opacity="0.2" />
                <circle cx="55" cy="22" r="3" fill="#F59E0B" opacity="0.3" />
            </svg>
        )
    },
];

export default function Journey() {
    return (
        <section style={{ background: "#FAFBFC", padding: "80px 0" }}>
            <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px" }}>
                {/* Section heading */}
                <FadeIn>
                    <div style={{ textAlign: "center", marginBottom: 56 }}>
                        <span style={{
                            display: "inline-block", fontSize: 11, fontWeight: 700,
                            letterSpacing: "0.12em", textTransform: "uppercase",
                            color: "#2563EB", background: "rgba(37,99,235,0.08)",
                            padding: "6px 16px", borderRadius: 100, marginBottom: 14,
                            fontFamily: "'DM Sans', sans-serif"
                        }}>Your Visit</span>
                        <h2 style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(24px, 3.5vw, 38px)",
                            fontWeight: 800, color: "#071426",
                            lineHeight: 1.15, letterSpacing: "-0.02em",
                            marginBottom: 10
                        }}>What to Expect</h2>
                        <p style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: 15, color: "rgba(7,20,38,0.5)",
                            maxWidth: 480, margin: "0 auto"
                        }}>A simple, patient-first process from consultation to recovery</p>
                    </div>
                </FadeIn>

                {/* ── Timeline Steps ── */}
                <div style={{ position: "relative" }}>
                    {/* Connecting line (desktop) */}
                    <div style={{
                        position: "absolute",
                        top: 56, left: "10%", right: "10%",
                        height: 2,
                        background: "linear-gradient(90deg, #2563EB, #0D9488, #7C3AED, #059669)",
                        opacity: 0.15,
                        zIndex: 0
                    }} />

                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: 20,
                        position: "relative",
                        zIndex: 1
                    }}>
                        {STEPS.map((step, i) => {
                            const v = STEP_VISUALS[i] || STEP_VISUALS[0];
                            return (
                                <FadeIn key={i} delay={i * 0.12}>
                                    <motion.div
                                        whileHover={{ y: -8, scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                        style={{
                                            textAlign: "center",
                                            padding: "32px 20px 28px",
                                            background: "#fff",
                                            borderRadius: 18,
                                            border: `1px solid ${v.border}`,
                                            boxShadow: "0 2px 16px rgba(0,0,0,0.03)",
                                            position: "relative"
                                        }}
                                    >
                                        {/* Step number badge */}
                                        <div style={{
                                            position: "absolute", top: -12, left: "50%",
                                            transform: "translateX(-50%)",
                                            background: v.color,
                                            color: "#fff",
                                            width: 28, height: 28,
                                            borderRadius: "50%",
                                            display: "flex", alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: 12, fontWeight: 800,
                                            fontFamily: "'DM Sans', sans-serif",
                                            boxShadow: `0 2px 8px ${v.color}40`
                                        }}>{step.s}</div>

                                        {/* Illustration */}
                                        <div style={{
                                            display: "flex", justifyContent: "center",
                                            marginBottom: 16
                                        }}>
                                            {v.illustration}
                                        </div>

                                        {/* Title */}
                                        <div style={{
                                            fontSize: 17, fontWeight: 700,
                                            color: "#071426",
                                            fontFamily: "'Inter', sans-serif",
                                            marginBottom: 8
                                        }}>{step.t}</div>

                                        {/* Description */}
                                        <div style={{
                                            fontSize: 13,
                                            color: "rgba(7,20,38,0.5)",
                                            fontFamily: "'DM Sans', sans-serif",
                                            lineHeight: 1.6
                                        }}>{step.d}</div>

                                        {/* Arrow connector (except last) */}
                                        {i < STEPS.length - 1 && (
                                            <div style={{
                                                position: "absolute",
                                                right: -14, top: "50%",
                                                transform: "translateY(-50%)",
                                                fontSize: 18, color: v.color,
                                                opacity: 0.3
                                            }}>→</div>
                                        )}
                                    </motion.div>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom info bar */}
                <FadeIn delay={0.4}>
                    <div style={{
                        marginTop: 40,
                        background: "linear-gradient(135deg, #071426, #0A1E3D)",
                        borderRadius: 16, padding: "24px 32px",
                        display: "flex", flexWrap: "wrap",
                        alignItems: "center", justifyContent: "center",
                        gap: 24
                    }}>
                        {[
                            { icon: "⏱️", text: "Total time: Under 1 hour" },
                            { icon: "🏃", text: "Walk in, walk out" },
                            { icon: "🩹", text: "Just a needle puncture" },
                            { icon: "😊", text: "Back to normal in days" },
                        ].map((item, i) => (
                            <div key={i} style={{
                                display: "flex", alignItems: "center", gap: 8
                            }}>
                                <span style={{ fontSize: 18 }}>{item.icon}</span>
                                <span style={{
                                    fontSize: 13, fontWeight: 600,
                                    color: "rgba(255,255,255,0.7)",
                                    fontFamily: "'DM Sans', sans-serif"
                                }}>{item.text}</span>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
