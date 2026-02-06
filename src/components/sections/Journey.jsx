import FadeIn from '../common/FadeIn';
import SectionHead from '../common/SectionHead';
import { STEPS } from '../../config/data';

export default function Journey() {
    return (
        <section style={{ background: "#FAFBFC", padding: "90px 0" }}>
            <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px" }}>
                <SectionHead
                    light
                    sup="Your Visit"
                    title="What to Expect"
                    desc="A simple, patient-first process"
                />
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
                    gap: 14
                }}>
                    {STEPS.map((s, i) => (
                        <FadeIn key={i} delay={i * 0.08}>
                            <div style={{
                                textAlign: "center",
                                padding: "28px 16px",
                                background: "#fff",
                                borderRadius: 14,
                                border: "1px solid rgba(0,0,0,0.04)"
                            }}>
                                <div style={{ fontSize: 32, marginBottom: 10 }}>{s.i}</div>
                                <div style={{
                                    fontSize: 11,
                                    fontWeight: 700,
                                    color: "#0D9488",
                                    fontFamily: "'DM Sans', sans-serif",
                                    letterSpacing: "0.1em",
                                    marginBottom: 6
                                }}>STEP {s.s}</div>
                                <div style={{
                                    fontSize: 16,
                                    fontWeight: 700,
                                    color: "#071426",
                                    fontFamily: "'DM Sans', sans-serif",
                                    marginBottom: 6
                                }}>{s.t}</div>
                                <div style={{
                                    fontSize: 12,
                                    color: "rgba(7,20,38,0.5)",
                                    fontFamily: "'DM Sans', sans-serif",
                                    lineHeight: 1.5
                                }}>{s.d}</div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
