import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../common/FadeIn';

const ADVANTAGES = [
    { icon: "🎯", title: "Minimally Invasive,\nMaximally Effective", desc: "Treats the condition at its source using imaging precision — no exploratory cuts." },
    { icon: "📍", title: "Just a Needle\nPuncture", desc: "Entry point is 2-3mm — smaller than a pen tip. No stitches required." },
    { icon: "🚫", title: "No Scar /\nLarge Incision", desc: "Walk out with no visible marks. The skin heals on its own." },
    { icon: "💉", title: "Done Under Local\nAnaesthesia", desc: "No risks of general anaesthesia. You stay awake, comfortable and aware." },
    { icon: "⚡", title: "Rapid Recovery", desc: "Return to daily life within 1-3 days. Not weeks like after open surgery." },
    { icon: "🔍", title: "Extreme Accuracy", desc: "Real-time CT, Ultrasound and X-ray guidance ensures pinpoint precision." },
    { icon: "🩹", title: "Less Pain", desc: "Minimal post-procedure discomfort. Most patients need only mild pain relief." },
    { icon: "🏠", title: "Same Day\nDischarge", desc: "Most procedures are daycare — home within hours of the procedure." },
];

const TABLE_ROWS = [
    { param: "Incision Size", surgery: "5–15 cm cut", ir: "2–3 mm needle", better: "ir" },
    { param: "Anaesthesia", surgery: "General (full sedation)", ir: "Local only", better: "ir" },
    { param: "Hospital Stay", surgery: "3–7 days", ir: "Same day / overnight", better: "ir" },
    { param: "Recovery Time", surgery: "4–8 weeks", ir: "1–3 days", better: "ir" },
    { param: "Visible Scars", surgery: "Yes — permanent", ir: "None", better: "ir" },
    { param: "Pain Level", surgery: "Moderate to severe", ir: "Minimal", better: "ir" },
    { param: "Risk of Infection", surgery: "Higher (open wound)", ir: "Very low", better: "ir" },
    { param: "Blood Loss", surgery: "Significant", ir: "Near zero", better: "ir" },
    { param: "Return to Work", surgery: "Weeks", ir: "Days", better: "ir" },
];

export default function IRAdvantages() {
    const [showTable, setShowTable] = useState(false);

    return (
        <section style={{ background: "#F8FAFC", padding: "80px 0" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

                {/* Heading */}
                <FadeIn>
                    <div style={{ textAlign: "center", marginBottom: 52 }}>
                        <span style={{
                            display: "inline-block",
                            fontSize: 11, fontWeight: 700,
                            letterSpacing: "0.12em", textTransform: "uppercase",
                            color: "#2563EB",
                            background: "rgba(37,99,235,0.08)",
                            padding: "6px 16px", borderRadius: 100, marginBottom: 14,
                            fontFamily: "'DM Sans', sans-serif"
                        }}>Why Interventional Radiology</span>
                        <h2 style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(26px, 3.5vw, 40px)",
                            fontWeight: 800, color: "#071426",
                            lineHeight: 1.15, marginBottom: 14,
                            letterSpacing: "-0.02em"
                        }}>
                            <span style={{ color: "#2563EB" }}>PINHOLE</span> Procedure (IR){" "}
                            <span style={{ color: "#9CA3AF", fontWeight: 400 }}>Vs</span>{" "}
                            Traditional Surgery
                        </h2>
                        <p style={{
                            fontFamily: "'DM Sans', sans-serif", fontSize: 16,
                            color: "#6B7280", maxWidth: 540, margin: "0 auto 28px", lineHeight: 1.7
                        }}>
                            The same result. A fraction of the trauma. Interventional radiology changes what surgery means for patients.
                        </p>

                        {/* Toggle table button */}
                        <motion.button
                            onClick={() => setShowTable(v => !v)}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            style={{
                                background: showTable ? "#2563EB" : "#fff",
                                color: showTable ? "#fff" : "#2563EB",
                                border: "2px solid #2563EB",
                                padding: "12px 28px",
                                borderRadius: 10,
                                fontSize: 14, fontWeight: 600,
                                cursor: "pointer",
                                fontFamily: "'DM Sans', sans-serif",
                                transition: "all 0.2s ease",
                                display: "inline-flex", alignItems: "center", gap: 8
                            }}
                        >
                            <span>{showTable ? "▲" : "▼"}</span>
                            {showTable ? "Hide" : "Click to view"} Differences Table
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
                            style={{ overflow: "hidden", marginBottom: 48 }}
                        >
                            <div style={{
                                borderRadius: 16, overflow: "hidden",
                                border: "1px solid #E5E7EB",
                                boxShadow: "0 4px 24px rgba(0,0,0,0.06)"
                            }}>
                                {/* Table header */}
                                <div style={{
                                    display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
                                    background: "#071426"
                                }}>
                                    {["", "Traditional Surgery ✕", "Pinhole IR ✓"].map((h, i) => (
                                        <div key={i} style={{
                                            padding: "16px 20px",
                                            fontSize: 12, fontWeight: 700,
                                            color: i === 2 ? "#5EEAD4" : i === 1 ? "#FCA5A5" : "rgba(255,255,255,0.5)",
                                            fontFamily: "'DM Sans', sans-serif",
                                            letterSpacing: "0.04em",
                                            textTransform: "uppercase",
                                            borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none"
                                        }}>{h}</div>
                                    ))}
                                </div>
                                {/* Table rows */}
                                {TABLE_ROWS.map((row, i) => (
                                    <div key={i} style={{
                                        display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
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
                                            <span style={{ fontSize: 11, fontWeight: 700 }}>✕</span> {row.surgery}
                                        </div>
                                        <div style={{
                                            padding: "14px 20px", fontSize: 13,
                                            color: "#0D9488", fontFamily: "'DM Sans', sans-serif",
                                            fontWeight: 600,
                                            display: "flex", alignItems: "center", gap: 8
                                        }}>
                                            <span style={{ fontSize: 11, fontWeight: 700 }}>✓</span> {row.ir}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Advantages Grid */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                    gap: 16
                }}>
                    {ADVANTAGES.map((a, i) => (
                        <FadeIn key={i} delay={i * 0.05}>
                            <motion.div
                                whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(37,99,235,0.10)" }}
                                style={{
                                    background: "#fff",
                                    border: "1px solid #E5E7EB",
                                    borderRadius: 16, padding: "26px 24px",
                                    height: "100%",
                                    transition: "all 0.3s ease"
                                }}
                            >
                                <div style={{ fontSize: 36, marginBottom: 14 }}>{a.icon}</div>
                                <div style={{
                                    fontSize: 15, fontWeight: 700,
                                    color: "#071426", fontFamily: "'DM Sans', sans-serif",
                                    lineHeight: 1.35, marginBottom: 10,
                                    whiteSpace: "pre-line"
                                }}>{a.title}</div>
                                <div style={{
                                    fontSize: 13, color: "#6B7280",
                                    fontFamily: "'DM Sans', sans-serif",
                                    lineHeight: 1.7
                                }}>{a.desc}</div>
                                <div style={{
                                    marginTop: 14, height: 3, width: 40, borderRadius: 2,
                                    background: "linear-gradient(90deg, #2563EB, #0D9488)"
                                }} />
                            </motion.div>
                        </FadeIn>
                    ))}
                </div>

                {/* Bottom banner */}
                <FadeIn delay={0.2}>
                    <div style={{
                        marginTop: 40,
                        background: "linear-gradient(135deg, #071426, #0A1E3D)",
                        borderRadius: 20, padding: "36px 40px",
                        display: "flex", flexWrap: "wrap",
                        alignItems: "center", justifyContent: "space-between",
                        gap: 20
                    }}>
                        <div>
                            <div style={{
                                fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 700,
                                color: "#fff", fontFamily: "'Inter', sans-serif", marginBottom: 6
                            }}>
                                You don't have to choose between effectiveness and comfort.
                            </div>
                            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif" }}>
                                IR gives you both — expert treatment, minimal disruption to your life.
                            </div>
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
