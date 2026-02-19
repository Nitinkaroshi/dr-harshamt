import FadeIn from '../common/FadeIn';
import SectionHead from '../common/SectionHead';
import { AWARDS } from '../../config/data';

export default function Publications() {
    return (
        <section style={{
            background: "#FFFFFF",
            padding: "clamp(40px, 8vw, 80px) 0"
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
                                background: "#F9FAFB",
                                border: "1px solid #E5E7EB",
                                borderRadius: 14,
                                padding: "22px 24px",
                                display: "flex",
                                gap: 14
                            }}>
                                <span style={{ fontSize: 24, flexShrink: 0 }}>{a.icon}</span>
                                <div>
                                    <div style={{
                                        fontSize: 16,
                                        fontWeight: 700,
                                        color: "#1F2937",
                                        fontFamily: "'Roboto', sans-serif",
                                        marginBottom: 4
                                    }}>{a.title}</div>
                                    <div style={{
                                        fontSize: 14,
                                        color: "#6B7280",
                                        fontFamily: "'Roboto', sans-serif",
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
