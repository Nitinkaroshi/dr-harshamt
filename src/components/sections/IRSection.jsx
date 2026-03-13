import FadeIn from '../common/FadeIn';

export default function IRSection() {
    return (
        <section style={{
            background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)",
            padding: "clamp(28px, 5vw, 56px) 0",
            position: "relative",
            overflow: "hidden"
        }}>
            {/* Decorative orb */}
            <div style={{
                position: "absolute", top: "-20%", right: "-10%",
                width: "50vw", height: "50vw", borderRadius: "50%",
                background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)",
                pointerEvents: "none"
            }} />

            <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
                {/* ── Revolution Quote ── */}
                <FadeIn>
                    <div style={{ textAlign: "center" }}>

                        <h2 style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "clamp(22px, 3.5vw, 36px)",
                            fontWeight: 800, color: "#1F2937",
                            lineHeight: 1.25, marginBottom: 24,
                            maxWidth: 850, margin: "0 auto 24px",
                            letterSpacing: "-0.02em"
                        }}>
                            Advanced Interventional Radiology Treatments in Bengaluru
                        </h2>
                        <div style={{
                            fontFamily: "'Roboto', sans-serif",
                            fontSize: "clamp(15px, 1.8vw, 18px)",
                            color: "#6B7280", lineHeight: 1.8,
                            maxWidth: 750, margin: "0 auto 36px"
                        }}>
                            <p style={{ marginBottom: 16 }}>Dr. Harsha M T performs advanced image-guided procedures that replace complex open surgeries with minimally invasive techniques.</p>
                            <p>Using technologies such as CT, Ultrasound, and Fluoroscopy, treatments are performed through a tiny pinhole puncture rather than large surgical incisions.</p>
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
                            {["No large surgical cuts", "Local anesthesia procedures", "Same-day discharge", "Faster recovery", "Minimal pain and scarring"].map((tag, i) => (
                                <span key={i} style={{
                                    background: "rgba(37,99,235,0.08)",
                                    border: "1px solid rgba(37,99,235,0.15)",
                                    color: "#2563EB", padding: "6px 16px",
                                    borderRadius: 100, fontSize: 13, fontWeight: 600,
                                    fontFamily: "'Roboto', sans-serif"
                                }}>✔ {tag}</span>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
