import FadeIn from '../common/FadeIn';
import SectionHead from '../common/SectionHead';
import { DOC, IMG } from '../../config/data';

export default function About() {
    return (
        <section id="about" style={{ background: "#FAFBFC", padding: "90px 0" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
                <SectionHead
                    light
                    sup="About"
                    title="A Journey of Excellence"
                    desc="From India's premier institutions to European board certification"
                />

                <div style={{ display: "flex", flexWrap: "wrap", gap: 40 }}>
                    {/* Content Column */}
                    <FadeIn delay={0.1} style={{ flex: "1 1 480px", minWidth: 280 }}>
                        <div style={{
                            borderRadius: 16,
                            overflow: "hidden",
                            marginBottom: 20,
                            maxHeight: 300,
                            position: "relative"
                        }}>
                            <img
                                src={IMG.about}
                                alt="Medical facility"
                                style={{
                                    width: "100%",
                                    height: 300,
                                    objectFit: "cover",
                                    borderRadius: 16
                                }}
                            />
                            <div style={{
                                position: "absolute",
                                bottom: 12,
                                left: 12,
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                background: "rgba(7,20,38,0.85)",
                                backdropFilter: "blur(8px)",
                                borderRadius: 10,
                                padding: "8px 14px"
                            }}>
                                <img
                                    src={DOC.photo}
                                    alt={DOC.name}
                                    style={{
                                        width: 36,
                                        height: 36,
                                        borderRadius: "50%",
                                        objectFit: "cover",
                                        border: "2px solid rgba(13,148,136,0.4)"
                                    }}
                                />
                                <div>
                                    <div style={{
                                        color: "#fff",
                                        fontSize: 12,
                                        fontWeight: 600,
                                        fontFamily: "'DM Sans', sans-serif"
                                    }}>{DOC.name}</div>
                                    <div style={{
                                        color: "#5EEAD4",
                                        fontSize: 10,
                                        fontFamily: "'DM Sans', sans-serif"
                                    }}>SPARSH Hospital, Bengaluru</div>
                                </div>
                            </div>
                        </div>

                        {[
                            "Dr. Harsha M T is a highly trained Vascular and Interventional Radiologist who specialises in replacing complex surgeries with minimally invasive, image-guided pinhole procedures. His approach means less pain, faster recovery, and no scars for patients.",
                            "After completing his MBBS, Dr. Harsha pursued his MD in Radiodiagnosis at PGIMER Chandigarh — one of India's most prestigious medical institutions — where he secured a top rank in the national entrance exam. He then earned his Fellowship in Vascular and Interventional Radiology from AIIMS, topping the fellowship examination nationally.",
                            "What sets Dr. Harsha apart is his international certification — the EBIR (European Board of Interventional Radiology) — making him one of the select few Indian interventional radiologists recognised at a European board level.",
                        ].map((p, i) => (
                            <p
                                key={i}
                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: 15,
                                    color: "rgba(7,20,38,0.65)",
                                    lineHeight: 1.8,
                                    marginBottom: 16
                                }}
                            >{p}</p>
                        ))}
                    </FadeIn>

                    {/* Education Timeline */}
                    <FadeIn delay={0.2} style={{ flex: "1 1 320px", minWidth: 280 }}>
                        <div style={{
                            background: "#fff",
                            borderRadius: 16,
                            padding: 28,
                            boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 28px rgba(0,0,0,0.04)",
                            border: "1px solid rgba(0,0,0,0.04)"
                        }}>
                            <div style={{
                                fontSize: 12,
                                fontFamily: "'DM Sans', sans-serif",
                                fontWeight: 600,
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                color: "#0D9488",
                                marginBottom: 22
                            }}>Education & Training</div>

                            {[
                                { y: "2018", t: "MBBS", p: "RGUHS" },
                                { y: "2022", t: "MD Radiodiagnosis", p: "PGIMER, Chandigarh" },
                                { y: "2023", t: "Fellowship VIR", p: "AIIMS, Rishikesh" },
                                { y: "2024", t: "EBIR Certified", p: "European Board IR" },
                                { y: "—", t: "EDiR", p: "European Diploma" },
                                { y: "—", t: "DICRI", p: "Diplomate of ICRI" },
                            ].map((it, i) => (
                                <div
                                    key={i}
                                    style={{
                                        display: "flex",
                                        gap: 14,
                                        marginBottom: i < 5 ? 16 : 0,
                                        paddingBottom: i < 5 ? 16 : 0,
                                        borderBottom: i < 5 ? "1px solid rgba(0,0,0,0.05)" : "none"
                                    }}
                                >
                                    <div style={{
                                        width: 44,
                                        flexShrink: 0,
                                        fontSize: 12,
                                        fontWeight: 600,
                                        color: "#0D9488",
                                        fontFamily: "'DM Sans', sans-serif"
                                    }}>{it.y}</div>
                                    <div>
                                        <div style={{
                                            fontSize: 13,
                                            fontWeight: 600,
                                            color: "#071426",
                                            fontFamily: "'DM Sans', sans-serif",
                                            marginBottom: 2
                                        }}>{it.t}</div>
                                        <div style={{
                                            fontSize: 12,
                                            color: "rgba(7,20,38,0.45)",
                                            fontFamily: "'DM Sans', sans-serif"
                                        }}>{it.p}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Achievement Badge */}
                        <div style={{
                            marginTop: 14,
                            background: "linear-gradient(135deg, #071426, #0A1E3D)",
                            borderRadius: 14,
                            padding: "20px 24px",
                            display: "flex",
                            alignItems: "center",
                            gap: 14
                        }}>
                            <span style={{ fontSize: 28 }}>🏆</span>
                            <div>
                                <div style={{
                                    color: "#5EEAD4",
                                    fontSize: 13,
                                    fontWeight: 600,
                                    fontFamily: "'DM Sans', sans-serif"
                                }}>National Rank #1</div>
                                <div style={{
                                    color: "rgba(255,255,255,0.45)",
                                    fontSize: 12,
                                    fontFamily: "'DM Sans', sans-serif"
                                }}>AIIMS VIR Fellowship Exam</div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
