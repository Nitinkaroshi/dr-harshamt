import FadeIn from '../common/FadeIn';
import SectionHead from '../common/SectionHead';
import { AWARDS } from '../../config/data';

export default function Publications() {
    return (
        <section style={{
            background: "linear-gradient(180deg, #071426, #0A1E3D)",
            padding: "80px 0"
        }}>
            <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
                <SectionHead
                    sup="Research"
                    title="Achievements & Recognition"
                />
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: 14
                }}>
                    {AWARDS.map((a, i) => (
                        <FadeIn key={i} delay={i * 0.06}>
                            <div style={{
                                background: "rgba(255,255,255,0.02)",
                                border: "1px solid rgba(255,255,255,0.06)",
                                borderRadius: 14,
                                padding: "22px 24px",
                                display: "flex",
                                gap: 14
                            }}>
                                <span style={{ fontSize: 24, flexShrink: 0 }}>{a.icon}</span>
                                <div>
                                    <div style={{
                                        fontSize: 14,
                                        fontWeight: 700,
                                        color: "#fff",
                                        fontFamily: "'DM Sans', sans-serif",
                                        marginBottom: 4
                                    }}>{a.title}</div>
                                    <div style={{
                                        fontSize: 12,
                                        color: "rgba(255,255,255,0.45)",
                                        fontFamily: "'DM Sans', sans-serif",
                                        lineHeight: 1.6
                                    }}>{a.desc}</div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
