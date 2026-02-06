import FadeIn from '../common/FadeIn';
import SectionHead from '../common/SectionHead';
import { VeinIllustration } from '../common/MedicalIllustrations';
import { IMG } from '../../config/data';

export default function IRSection() {
    return (
        <section style={{
            background: "linear-gradient(180deg, #071426, #0A1E3D)",
            padding: "90px 0",
            overflow: "hidden",
            position: "relative"
        }}>
            <div style={{
                maxWidth: 900,
                margin: "0 auto",
                padding: "0 24px",
                position: "relative",
                zIndex: 1
            }}>
                <SectionHead
                    label="Understanding"
                    title="What is Interventional Radiology?"
                    sub="Treating diseases through pinhole-sized openings instead of surgery"
                />

                <FadeIn delay={0.1}>
                    <div style={{ borderRadius: 16, overflow: "hidden", marginBottom: 24 }}>
                        <img
                            src={IMG.ir}
                            alt="Interventional radiology procedure"
                            style={{ width: "100%", height: 280, objectFit: "cover" }}
                        />
                    </div>
                </FadeIn>

                <FadeIn delay={0.12}>
                    <div style={{ marginBottom: 28, padding: "24px 0" }}>
                        <VeinIllustration type="pinhole" />
                    </div>
                </FadeIn>

                <FadeIn delay={0.13}>
                    <div style={{ marginBottom: 28, padding: "20px 0" }}>
                        <VeinIllustration type="varicose-comparison" />
                    </div>
                </FadeIn>

                <FadeIn delay={0.15}>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                        gap: 16
                    }}>
                        {/* Traditional Surgery */}
                        <div style={{
                            background: "rgba(239,68,68,0.06)",
                            border: "1px solid rgba(239,68,68,0.12)",
                            borderRadius: 14,
                            padding: 24
                        }}>
                            <div style={{
                                fontSize: 12,
                                fontWeight: 600,
                                color: "#EF4444",
                                fontFamily: "'DM Sans', sans-serif",
                                marginBottom: 14,
                                letterSpacing: "0.04em",
                                textTransform: "uppercase"
                            }}>Traditional Surgery</div>
                            {[
                                "Large incisions (5-15 cm)",
                                "General anaesthesia",
                                "3-7 days hospital stay",
                                "Weeks of recovery",
                                "Visible scars"
                            ].map((t, i) => (
                                <div
                                    key={i}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 8,
                                        marginBottom: 8,
                                        color: "rgba(255,255,255,0.55)",
                                        fontSize: 13,
                                        fontFamily: "'DM Sans', sans-serif"
                                    }}
                                >
                                    <span style={{ color: "#EF4444", fontSize: 13 }}>✕</span> {t}
                                </div>
                            ))}
                        </div>

                        {/* Pinhole Procedure */}
                        <div style={{
                            background: "rgba(13,148,136,0.08)",
                            border: "1px solid rgba(13,148,136,0.2)",
                            borderRadius: 14,
                            padding: 24
                        }}>
                            <div style={{
                                fontSize: 12,
                                fontWeight: 600,
                                color: "#14B8A6",
                                fontFamily: "'DM Sans', sans-serif",
                                marginBottom: 14,
                                letterSpacing: "0.04em",
                                textTransform: "uppercase"
                            }}>Pinhole Procedure (IR)</div>
                            {[
                                "Needle puncture (2-3 mm)",
                                "Local anaesthesia",
                                "Same-day discharge",
                                "Days — not weeks",
                                "No visible marks"
                            ].map((t, i) => (
                                <div
                                    key={i}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 8,
                                        marginBottom: 8,
                                        color: "rgba(255,255,255,0.7)",
                                        fontSize: 13,
                                        fontFamily: "'DM Sans', sans-serif"
                                    }}
                                >
                                    <span style={{ color: "#14B8A6", fontSize: 13 }}>✓</span> {t}
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
