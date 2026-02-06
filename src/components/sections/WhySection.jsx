import FadeIn from '../common/FadeIn';
import SectionHead from '../common/SectionHead';
import { VeinIllustration } from '../common/MedicalIllustrations';
import { WHY, IMG } from '../../config/data';

export default function WhySection() {
    return (
        <>
            {/* Procedure Visual Gallery Strip */}
            <section style={{ background: "#071426", padding: "48px 0", overflow: "hidden" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
                    <FadeIn>
                        <div style={{ textAlign: "center", marginBottom: 24 }}>
                            <span style={{
                                fontSize: 11,
                                fontFamily: "'DM Sans', sans-serif",
                                fontWeight: 600,
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: "#5EEAD4"
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
                                        flex: "0 0 200px",
                                        height: 130
                                    }}
                                >
                                    <img
                                        src={p.img}
                                        alt={p.label}
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
                                        fontFamily: "'DM Sans', sans-serif"
                                    }}>{p.label}</div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <div style={{ marginTop: 32, padding: "20px 0" }}>
                            <VeinIllustration type="embolisation" />
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Why Choose Section */}
            <section id="why" style={{
                background: "linear-gradient(180deg, #071426, #0C2440)",
                padding: "90px 0"
            }}>
                <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
                    <SectionHead label="Differentiators" title="Why Choose Dr. Harsha?" />
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                        gap: 14
                    }}>
                        {WHY.map((w, i) => (
                            <FadeIn key={i} delay={i * 0.06}>
                                <div style={{
                                    background: "rgba(255,255,255,0.03)",
                                    border: "1px solid rgba(255,255,255,0.06)",
                                    borderRadius: 14,
                                    padding: 28,
                                    height: "100%"
                                }}>
                                    <div style={{
                                        fontSize: 32,
                                        fontFamily: "'Playfair Display', serif",
                                        fontWeight: 700,
                                        color: "rgba(13,148,136,0.2)",
                                        marginBottom: 14,
                                        lineHeight: 1
                                    }}>{w.n}</div>
                                    <div style={{
                                        fontSize: 17,
                                        fontWeight: 700,
                                        color: "#fff",
                                        fontFamily: "'DM Sans', sans-serif",
                                        marginBottom: 8
                                    }}>{w.t}</div>
                                    <div style={{
                                        fontSize: 13,
                                        color: "rgba(255,255,255,0.45)",
                                        fontFamily: "'DM Sans', sans-serif",
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
