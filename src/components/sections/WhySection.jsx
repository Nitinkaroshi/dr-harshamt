import FadeIn from '../common/FadeIn';
import SectionHead from '../common/SectionHead';
import { WHY, IMG } from '../../config/data';

export default function WhySection() {
    return (
        <>
            {/* Procedure Visual Gallery Strip */}
            <section style={{ background: "#F8FAFC", padding: "clamp(32px, 6vw, 48px) 0", overflow: "hidden" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
                    <FadeIn>
                        <div style={{ textAlign: "center", marginBottom: 24 }}>
                            <span style={{
                                fontSize: 11,
                                fontFamily: "'Roboto', sans-serif",
                                fontWeight: 600,
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: "#2563EB"
                            }}>Our Procedures</span>
                        </div>
                        <div style={{
                            display: "flex",
                            gap: 12,
                            overflow: "hidden",
                            justifyContent: "center",
                            flexWrap: "wrap"
                        }}>
                            {[
                                { img: IMG.varicose, label: "Varicose Veins" },
                                { img: IMG.fibroid, label: "Fibroid Treatment" },
                                { img: IMG.thyroid, label: "Thyroid Ablation" },
                                { img: IMG.vascular, label: "Vascular Care" },
                                { img: IMG.liver, label: "Liver Interventions" },
                            ].map((p, i) => (
                                <div
                                    key={i}
                                    style={{
                                        position: "relative",
                                        borderRadius: 12,
                                        overflow: "hidden",
                                        flex: "1 1 160px",
                                        maxWidth: 220,
                                        height: 130
                                    }}
                                >
                                    <img
                                        src={p.img}
                                        alt={`${p.label} — Interventional Radiology procedure by Dr. Harsha M T`}
                                        loading="lazy"
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    />
                                    <div style={{
                                        position: "absolute",
                                        inset: 0,
                                        background: "linear-gradient(180deg, transparent 40%, rgba(7,20,38,0.85) 100%)"
                                    }} />
                                    <div style={{
                                        position: "absolute",
                                        bottom: 10,
                                        left: 12,
                                        right: 12,
                                        color: "#fff",
                                        fontSize: 11,
                                        fontWeight: 600,
                                        fontFamily: "'Roboto', sans-serif"
                                    }}>{p.label}</div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Why Choose Section */}
            <section id="why" style={{
                background: "#FFFFFF",
                padding: "clamp(40px, 8vw, 90px) 0"
            }}>
                <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
                    <SectionHead sup="Differentiators" title="Why Choose Dr. Harsha?" />
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(min(250px, 100%), 1fr))",
                        gap: 14
                    }}>
                        {WHY.map((w, i) => (
                            <FadeIn key={i} delay={i * 0.06}>
                                <div style={{
                                    background: "#F9FAFB",
                                    border: "1px solid #E5E7EB",
                                    borderRadius: 14,
                                    padding: 28,
                                    height: "100%"
                                }}>
                                    <div style={{
                                        fontSize: 32,
                                        fontFamily: "'Roboto Slab', serif",
                                        fontWeight: 700,
                                        color: "rgba(37,99,235,0.15)",
                                        marginBottom: 14,
                                        lineHeight: 1
                                    }}>{w.n}</div>
                                    <div style={{
                                        fontSize: 17,
                                        fontWeight: 700,
                                        color: "#1F2937",
                                        fontFamily: "'Roboto', sans-serif",
                                        marginBottom: 8
                                    }}>{w.t}</div>
                                    <div style={{
                                        fontSize: 15,
                                        color: "#6B7280",
                                        fontFamily: "'Roboto', sans-serif",
                                        lineHeight: 1.7
                                    }}>{w.d}</div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
