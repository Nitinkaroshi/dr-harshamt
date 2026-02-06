import FadeIn from '../common/FadeIn';
import { AnimatedStat } from '../common/hooks';
import { DOC, IMG } from '../../config/data';

export default function Hero() {
    return (
        <section style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
            background: "linear-gradient(135deg, #FFFFFF 0%, #EFF6FF 50%, #DBEAFE 100%)"
        }}>
            {/* Background pattern */}
            <div style={{
                position: "absolute",
                inset: 0,
                background: `url(${IMG.hero}) center/cover`,
                opacity: 0.03,
                pointerEvents: "none"
            }} />

            {/* Subtle blue gradient orb */}
            <div style={{
                position: "absolute",
                top: "-15%",
                right: "-8%",
                width: "50vw",
                height: "50vw",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)",
                pointerEvents: "none"
            }} />

            <div style={{
                maxWidth: 1200,
                margin: "0 auto",
                padding: "120px 24px 80px",
                width: "100%",
                position: "relative",
                zIndex: 1
            }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 48 }}>
                    {/* Content */}
                    <div style={{ flex: "1 1 480px", minWidth: 280 }}>
                        <FadeIn>
                            <div style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 8,
                                background: "rgba(37,99,235,0.08)",
                                border: "1px solid rgba(37,99,235,0.15)",
                                borderRadius: 100,
                                padding: "8px 18px",
                                marginBottom: 24
                            }}>
                                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10B981" }} />
                                <span style={{
                                    color: "#2563EB",
                                    fontSize: 14,
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 600,
                                    letterSpacing: "0.02em"
                                }}>Available for Appointments in Bengaluru</span>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.08}>
                            <h1 style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: "clamp(48px, 6.5vw, 80px)",
                                fontWeight: 800,
                                color: "#1F2937",
                                lineHeight: 1.1,
                                marginBottom: 16,
                                letterSpacing: "-0.03em"
                            }}>{DOC.name}</h1>
                        </FadeIn>

                        <FadeIn delay={0.12}>
                            <p style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: "clamp(18px, 2vw, 22px)",
                                color: "#2563EB",
                                marginBottom: 20,
                                fontWeight: 600,
                                letterSpacing: "0.01em"
                            }}>{DOC.title}</p>
                        </FadeIn>

                        <FadeIn delay={0.16}>
                            <p style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: "clamp(24px, 2.8vw, 34px)",
                                color: "#374151",
                                lineHeight: 1.4,
                                marginBottom: 18,
                                fontWeight: 600
                            }}>{DOC.tagline}</p>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <p style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: "clamp(17px, 1.7vw, 19px)",
                                color: "#6B7280",
                                lineHeight: 1.75,
                                marginBottom: 40,
                                maxWidth: 560
                            }}>{DOC.sub}</p>
                        </FadeIn>

                        <FadeIn delay={0.24}>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
                                <button
                                    onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                                    style={{
                                        background: "#2563EB",
                                        border: "none",
                                        color: "#FFFFFF",
                                        padding: "18px 40px",
                                        borderRadius: 12,
                                        fontSize: 17,
                                        fontWeight: 600,
                                        cursor: "pointer",
                                        fontFamily: "'Inter', sans-serif",
                                        boxShadow: "0 4px 14px rgba(37,99,235,0.25)",
                                        transition: "all 0.2s ease"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = "#1D4ED8";
                                        e.target.style.transform = "translateY(-2px)";
                                        e.target.style.boxShadow = "0 6px 20px rgba(37,99,235,0.35)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = "#2563EB";
                                        e.target.style.transform = "translateY(0)";
                                        e.target.style.boxShadow = "0 4px 14px rgba(37,99,235,0.25)";
                                    }}
                                >Book Appointment</button>
                                <button
                                    onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
                                    style={{
                                        background: "#FFFFFF",
                                        border: "2px solid #2563EB",
                                        color: "#2563EB",
                                        padding: "14px 34px",
                                        borderRadius: 12,
                                        fontSize: 16,
                                        fontWeight: 600,
                                        cursor: "pointer",
                                        fontFamily: "'Inter', sans-serif",
                                        transition: "all 0.2s ease"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = "#EFF6FF";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = "#FFFFFF";
                                    }}
                                >View Treatments</button>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.32}>
                            <div style={{ marginTop: 48, display: "flex", flexWrap: "wrap", gap: 36 }}>
                                {[
                                    { v: DOC.exp, l: "Years Experience" },
                                    { v: DOC.procs, l: "Procedures" },
                                    { v: DOC.certs, l: "Certifications" }
                                ].map((s, i) => (
                                    <div key={i} style={{ textAlign: "left" }}>
                                        <div style={{
                                            fontFamily: "'Inter', sans-serif",
                                            fontSize: 36,
                                            fontWeight: 800,
                                            color: "#2563EB",
                                            lineHeight: 1,
                                            marginBottom: 6
                                        }}>{s.v}</div>
                                        <div style={{
                                            fontFamily: "'Inter', sans-serif",
                                            fontSize: 14,
                                            fontWeight: 500,
                                            color: "#6B7280",
                                            letterSpacing: "0.01em"
                                        }}>{s.l}</div>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>

                    {/* Doctor Image */}
                    <FadeIn delay={0.15} className="hero-img-wrap">
                        <div style={{ flex: "0 1 380px", position: "relative" }}>
                            <div style={{
                                width: "100%",
                                aspectRatio: "3/4",
                                borderRadius: 24,
                                overflow: "hidden",
                                border: "3px solid #2563EB",
                                boxShadow: "0 20px 40px rgba(37,99,235,0.15)"
                            }}>
                                <img
                                    src={DOC.photo}
                                    alt="Dr. Harsha M T"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </div>
                            <div style={{
                                position: "absolute",
                                bottom: -16,
                                left: -16,
                                right: -16,
                                background: "#FFFFFF",
                                border: "2px solid #E5E7EB",
                                borderRadius: 16,
                                padding: "16px 20px",
                                boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
                            }}>
                                <div style={{
                                    color: "#2563EB",
                                    fontSize: 11,
                                    fontFamily: "'Inter', sans-serif",
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    marginBottom: 6,
                                    fontWeight: 700
                                }}>Qualifications</div>
                                <div style={{
                                    color: "#374151",
                                    fontSize: 13,
                                    fontFamily: "'Inter', sans-serif",
                                    lineHeight: 1.6,
                                    fontWeight: 500
                                }}>{DOC.quals}</div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
