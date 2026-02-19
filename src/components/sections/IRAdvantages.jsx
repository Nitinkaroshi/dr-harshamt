import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../common/FadeIn';

const HEXAGONS = [
    { label: "Just a Needle\nPuncture", icon: "📍", color: "#2563EB" },
    { label: "No Scar /\nLarge Incision", icon: "🚫", color: "#1E40AF" },
    { label: "Done Under\nLocal Anaesthesia", icon: "💉", color: "#1D4ED8" },
    { label: "Same Day\nDischarge", icon: "🏠", color: "#2563EB" },
    { label: "MINIMALLY\nINVASIVE\nMAXIMALLY\nEFFECTIVE", icon: "", color: "#1E3A5F", isCenter: true },
    { label: "Less Pain", icon: "🩹", color: "#1E40AF" },
    { label: "Rapid\nRecovery", icon: "⚡", color: "#1D4ED8" },
    { label: "Extreme\nAccuracy", icon: "🔍", color: "#2563EB" },
];

const TABLE_ROWS = [
    { param: "Incision Size", surgery: "5–15 cm cut", ir: "2–3 mm needle" },
    { param: "Anaesthesia", surgery: "General (full sedation)", ir: "Local only" },
    { param: "Hospital Stay", surgery: "3–7 days", ir: "Same day / overnight" },
    { param: "Recovery Time", surgery: "4–8 weeks", ir: "1–3 days" },
    { param: "Visible Scars", surgery: "Yes — permanent", ir: "None" },
    { param: "Pain Level", surgery: "Moderate to severe", ir: "Minimal" },
    { param: "Risk of Infection", surgery: "Higher (open wound)", ir: "Very low" },
    { param: "Blood Loss", surgery: "Significant", ir: "Near zero" },
    { param: "Return to Work", surgery: "Weeks", ir: "Days" },
];

function Hexagon({ item, size = 140, delay = 0 }) {
    const w = size;
    const h = size * 1.1547; // hex ratio
    const clipPath = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.08, zIndex: 5 }}
            style={{
                width: w, height: h,
                clipPath,
                background: item.isCenter
                    ? "linear-gradient(135deg, #0B1D33, #1E3A5F)"
                    : `linear-gradient(135deg, ${item.color}, ${item.color}dd)`,
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                cursor: "default", transition: "transform 0.3s ease",
                boxShadow: "0 4px 20px rgba(0,0,0,0.15)"
            }}
        >
            {item.icon && <span style={{ fontSize: item.isCenter ? 0 : 28, marginBottom: 6 }}>{item.icon}</span>}
            <span style={{
                fontSize: item.isCenter ? 11 : 11,
                fontWeight: 800, color: "#fff",
                textAlign: "center", lineHeight: 1.3,
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: item.isCenter ? "0.08em" : "0.02em",
                textTransform: "uppercase",
                whiteSpace: "pre-line",
                padding: "0 8px"
            }}>{item.label}</span>
        </motion.div>
    );
}

export default function IRAdvantages() {
    const [showTable, setShowTable] = useState(false);
    const hexSize = 130;

    return (
        <section style={{ background: "#F8FAFC", padding: "80px 0" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

                {/* Section heading */}
                <FadeIn>
                    <div style={{ textAlign: "center", marginBottom: 20 }}>
                        <span style={{
                            display: "inline-block", fontSize: 11, fontWeight: 700,
                            letterSpacing: "0.12em", textTransform: "uppercase",
                            color: "#2563EB", background: "rgba(37,99,235,0.08)",
                            padding: "6px 16px", borderRadius: 100, marginBottom: 14,
                            fontFamily: "'DM Sans', sans-serif"
                        }}>Why Interventional Radiology</span>
                        <h2 style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(24px, 3.5vw, 38px)",
                            fontWeight: 800, color: "#071426",
                            lineHeight: 1.15, letterSpacing: "-0.02em"
                        }}>The IR Advantage</h2>
                    </div>
                </FadeIn>

                {/* ── Hexagonal Honeycomb ── */}
                <div style={{
                    display: "flex", flexDirection: "column",
                    alignItems: "center", gap: 0,
                    marginBottom: 56, padding: "20px 0"
                }}>
                    {/* Row 1: 3 hexagons */}
                    <div style={{ display: "flex", gap: 6, justifyContent: "center" }}>
                        <Hexagon item={HEXAGONS[0]} size={hexSize} delay={0} />
                        <Hexagon item={HEXAGONS[1]} size={hexSize} delay={0.08} />
                        <Hexagon item={HEXAGONS[2]} size={hexSize} delay={0.16} />
                    </div>
                    {/* Row 2: 2 hexagons offset + center */}
                    <div style={{ display: "flex", gap: 6, justifyContent: "center", marginTop: -20 }}>
                        <Hexagon item={HEXAGONS[3]} size={hexSize} delay={0.24} />
                        <Hexagon item={HEXAGONS[4]} size={hexSize} delay={0.32} />
                        <Hexagon item={HEXAGONS[5]} size={hexSize} delay={0.40} />
                    </div>
                    {/* Row 3: 2 hexagons */}
                    <div style={{ display: "flex", gap: 6, justifyContent: "center", marginTop: -20 }}>
                        <Hexagon item={HEXAGONS[6]} size={hexSize} delay={0.48} />
                        <Hexagon item={HEXAGONS[7]} size={hexSize} delay={0.56} />
                    </div>
                </div>

                {/* ── Pinhole vs Surgery heading ── */}
                <FadeIn>
                    <div style={{ textAlign: "center", marginBottom: 36 }}>
                        <h2 style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(22px, 3vw, 34px)",
                            fontWeight: 800, color: "#071426",
                            lineHeight: 1.2, marginBottom: 20,
                            letterSpacing: "-0.02em"
                        }}>
                            <span style={{ color: "#2563EB" }}>PINHOLE</span> Procedure (IR){" "}
                            <span style={{ color: "#9CA3AF", fontWeight: 400 }}>Vs</span>{" "}
                            Traditional Surgery
                        </h2>

                        {/* Toggle table button */}
                        <motion.button
                            onClick={() => setShowTable(v => !v)}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            style={{
                                background: showTable ? "#2563EB" : "#fff",
                                color: showTable ? "#fff" : "#2563EB",
                                border: "2px solid #2563EB",
                                padding: "14px 32px", borderRadius: 12,
                                fontSize: 15, fontWeight: 700,
                                cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
                                transition: "all 0.2s ease",
                                display: "inline-flex", alignItems: "center", gap: 10,
                                boxShadow: showTable ? "0 4px 14px rgba(37,99,235,0.3)" : "none"
                            }}
                        >
                            <span style={{ fontSize: 14 }}>{showTable ? "▲" : "▼"}</span>
                            Click to view Differences table
                        </motion.button>
                    </div>
                </FadeIn>

                {/* Comparison Table */}
                <AnimatePresence>
                    {showTable && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            style={{ overflow: "hidden", marginBottom: 40 }}
                        >
                            <div style={{
                                borderRadius: 16, overflow: "hidden",
                                border: "1px solid #E5E7EB",
                                boxShadow: "0 4px 24px rgba(0,0,0,0.06)"
                            }}>
                                {/* Header */}
                                <div style={{
                                    display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr",
                                    background: "#071426"
                                }}>
                                    {["Parameter", "Traditional Surgery", "Pinhole IR"].map((h, i) => (
                                        <div key={i} style={{
                                            padding: "16px 20px", fontSize: 12, fontWeight: 700,
                                            color: i === 2 ? "#5EEAD4" : i === 1 ? "#FCA5A5" : "rgba(255,255,255,0.6)",
                                            fontFamily: "'DM Sans', sans-serif",
                                            letterSpacing: "0.04em", textTransform: "uppercase",
                                            borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none"
                                        }}>{h}</div>
                                    ))}
                                </div>
                                {/* Rows */}
                                {TABLE_ROWS.map((row, i) => (
                                    <div key={i} style={{
                                        display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr",
                                        background: i % 2 === 0 ? "#fff" : "#F9FAFB",
                                        borderBottom: i < TABLE_ROWS.length - 1 ? "1px solid #F3F4F6" : "none"
                                    }}>
                                        <div style={{
                                            padding: "14px 20px", fontSize: 13, fontWeight: 600,
                                            color: "#071426", fontFamily: "'DM Sans', sans-serif",
                                            borderRight: "1px solid #F3F4F6"
                                        }}>{row.param}</div>
                                        <div style={{
                                            padding: "14px 20px", fontSize: 13,
                                            color: "#EF4444", fontFamily: "'DM Sans', sans-serif",
                                            borderRight: "1px solid #F3F4F6",
                                            display: "flex", alignItems: "center", gap: 8
                                        }}>
                                            <span style={{ fontWeight: 700 }}>✕</span> {row.surgery}
                                        </div>
                                        <div style={{
                                            padding: "14px 20px", fontSize: 13,
                                            color: "#0D9488", fontFamily: "'DM Sans', sans-serif",
                                            fontWeight: 600, display: "flex", alignItems: "center", gap: 8
                                        }}>
                                            <span style={{ fontWeight: 700 }}>✓</span> {row.ir}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Bottom CTA */}
                <FadeIn delay={0.1}>
                    <div style={{
                        background: "linear-gradient(135deg, #071426, #0A1E3D)",
                        borderRadius: 20, padding: "36px 40px",
                        display: "flex", flexWrap: "wrap",
                        alignItems: "center", justifyContent: "space-between", gap: 20
                    }}>
                        <div>
                            <div style={{
                                fontSize: "clamp(17px, 2.2vw, 22px)", fontWeight: 700,
                                color: "#fff", fontFamily: "'Inter', sans-serif", marginBottom: 6
                            }}>You don't have to choose between effectiveness and comfort.</div>
                            <div style={{
                                fontSize: 14, color: "rgba(255,255,255,0.5)",
                                fontFamily: "'DM Sans', sans-serif"
                            }}>IR gives you both — expert treatment, minimal disruption to your life.</div>
                        </div>
                        <button
                            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                            style={{
                                background: "linear-gradient(135deg, #0D9488, #0F766E)",
                                border: "none", color: "#fff",
                                padding: "14px 32px", borderRadius: 10,
                                fontSize: 15, fontWeight: 600,
                                cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
                                whiteSpace: "nowrap"
                            }}
                        >Book a Free Consultation</button>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
