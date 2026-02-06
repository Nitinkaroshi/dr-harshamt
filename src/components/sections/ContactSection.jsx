import FadeIn from '../common/FadeIn';
import SectionHead from '../common/SectionHead';
import { DOC, SERVICES } from '../../config/data';

export default function ContactSection() {
    return (
        <section id="contact" style={{
            background: "linear-gradient(180deg, #071426, #0A1E3D)",
            padding: "90px 0"
        }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
                <SectionHead
                    label="Get in Touch"
                    title="Book a Consultation"
                    sub="Take the first step towards a minimally invasive solution"
                />
                <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
                    {/* Contact Info */}
                    <FadeIn delay={0.1} style={{ flex: "1 1 320px", minWidth: 260 }}>
                        <div style={{
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(255,255,255,0.06)",
                            borderRadius: 18,
                            padding: 32,
                            height: "100%"
                        }}>
                            <div style={{
                                fontSize: 11,
                                fontFamily: "'DM Sans', sans-serif",
                                fontWeight: 600,
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                color: "#5EEAD4",
                                marginBottom: 24
                            }}>Contact Information</div>

                            {[
                                { i: "📍", l: "Location", v: DOC.loc },
                                { i: "🕐", l: "Timings", v: DOC.time },
                                { i: "📞", l: "Phone", v: DOC.phone },
                                { i: "✉️", l: "Email", v: DOC.email },
                                { i: "🏥", l: "Registration", v: `KMC — ${DOC.reg}` },
                            ].map((c, i) => (
                                <div key={i} style={{ display: "flex", gap: 12, marginBottom: 20 }}>
                                    <div style={{
                                        width: 38,
                                        height: 38,
                                        borderRadius: 10,
                                        flexShrink: 0,
                                        background: "rgba(13,148,136,0.1)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: 16
                                    }}>{c.i}</div>
                                    <div>
                                        <div style={{
                                            fontSize: 10,
                                            color: "rgba(255,255,255,0.3)",
                                            fontFamily: "'DM Sans', sans-serif",
                                            letterSpacing: "0.06em",
                                            textTransform: "uppercase",
                                            marginBottom: 3
                                        }}>{c.l}</div>
                                        <div style={{
                                            fontSize: 13,
                                            color: "rgba(255,255,255,0.75)",
                                            fontFamily: "'DM Sans', sans-serif",
                                            lineHeight: 1.5
                                        }}>{c.v}</div>
                                    </div>
                                </div>
                            ))}

                            {/* WhatsApp Button */}
                            <a
                                href={`https://wa.me/${DOC.wa}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: 8,
                                    background: "#25D366",
                                    color: "#fff",
                                    padding: "13px 20px",
                                    borderRadius: 10,
                                    textDecoration: "none",
                                    fontSize: 14,
                                    fontWeight: 600,
                                    fontFamily: "'DM Sans', sans-serif",
                                    marginTop: 8
                                }}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Chat on WhatsApp
                            </a>

                            {/* Social Links */}
                            <div style={{ marginTop: 16, display: "flex", gap: 10 }}>
                                <a
                                    href="https://www.linkedin.com/in/dr-harsha-m-t-35a225241/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        width: 38,
                                        height: 38,
                                        borderRadius: 10,
                                        background: "rgba(255,255,255,0.06)",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        textDecoration: "none",
                                        transition: "background 0.2s"
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.background = "rgba(13,148,136,0.15)"}
                                    onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.06)"}
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,0.6)">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.sparshhospital.com/doctors/dr-harsha-m-t/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        width: 38,
                                        height: 38,
                                        borderRadius: 10,
                                        background: "rgba(255,255,255,0.06)",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        textDecoration: "none",
                                        transition: "background 0.2s"
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.background = "rgba(13,148,136,0.15)"}
                                    onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.06)"}
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,0.6)">
                                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
                                    </svg>
                                </a>
                            </div>

                            {/* Google Maps */}
                            <div style={{
                                marginTop: 16,
                                borderRadius: 12,
                                overflow: "hidden",
                                border: "1px solid rgba(255,255,255,0.06)"
                            }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9!2d77.59!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sSPARSH%20Hospital%20-%20Infantry%20Road!5e0!3m2!1sen!2sin!4v1706000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="160"
                                    style={{
                                        border: 0,
                                        filter: "brightness(0.7) contrast(1.1) saturate(0.3)",
                                        borderRadius: 12
                                    }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="SPARSH Hospital Location"
                                />
                            </div>
                        </div>
                    </FadeIn>

                    {/* Contact Form */}
                    <FadeIn delay={0.2} style={{ flex: "1 1 380px", minWidth: 280 }}>
                        <div style={{
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(255,255,255,0.06)",
                            borderRadius: 18,
                            padding: 32
                        }}>
                            <div style={{
                                fontSize: 18,
                                fontWeight: 700,
                                color: "#fff",
                                fontFamily: "'DM Sans', sans-serif",
                                marginBottom: 4
                            }}>Request an Appointment</div>
                            <div style={{
                                fontSize: 13,
                                color: "rgba(255,255,255,0.4)",
                                fontFamily: "'DM Sans', sans-serif",
                                marginBottom: 24
                            }}>We'll get back to you shortly</div>

                            <form onSubmit={e => { e.preventDefault(); alert("Thank you! We will contact you shortly."); }}>
                                {[
                                    { l: "Full Name", t: "text", p: "Enter your full name" },
                                    { l: "Phone Number", t: "tel", p: "+91 XXXXX XXXXX" },
                                    { l: "Email (optional)", t: "email", p: "your@email.com" }
                                ].map((f, i) => (
                                    <div key={i} style={{ marginBottom: 16 }}>
                                        <label style={{
                                            display: "block",
                                            fontSize: 11,
                                            fontWeight: 600,
                                            color: "rgba(255,255,255,0.5)",
                                            fontFamily: "'DM Sans', sans-serif",
                                            marginBottom: 5,
                                            letterSpacing: "0.03em"
                                        }}>{f.l}</label>
                                        <input
                                            type={f.t}
                                            placeholder={f.p}
                                            required={i < 2}
                                            style={{
                                                width: "100%",
                                                padding: "11px 14px",
                                                borderRadius: 10,
                                                border: "1px solid rgba(255,255,255,0.1)",
                                                fontSize: 13,
                                                fontFamily: "'DM Sans', sans-serif",
                                                background: "rgba(255,255,255,0.04)",
                                                color: "#fff",
                                                boxSizing: "border-box",
                                                outline: "none"
                                            }}
                                            onFocus={e => e.target.style.borderColor = "#0D9488"}
                                            onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                                        />
                                    </div>
                                ))}

                                <div style={{ marginBottom: 16 }}>
                                    <label style={{
                                        display: "block",
                                        fontSize: 11,
                                        fontWeight: 600,
                                        color: "rgba(255,255,255,0.5)",
                                        fontFamily: "'DM Sans', sans-serif",
                                        marginBottom: 5
                                    }}>Condition</label>
                                    <select style={{
                                        width: "100%",
                                        padding: "11px 14px",
                                        borderRadius: 10,
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        fontSize: 13,
                                        fontFamily: "'DM Sans', sans-serif",
                                        background: "rgba(255,255,255,0.04)",
                                        color: "rgba(255,255,255,0.7)",
                                        boxSizing: "border-box"
                                    }}>
                                        <option>Select a condition</option>
                                        {SERVICES.map(s => <option key={s.t}>{s.t}</option>)}
                                        <option>Other</option>
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    style={{
                                        width: "100%",
                                        padding: "14px",
                                        borderRadius: 10,
                                        border: "none",
                                        background: "linear-gradient(135deg, #0D9488, #0F766E)",
                                        color: "#fff",
                                        fontSize: 14,
                                        fontWeight: 600,
                                        cursor: "pointer",
                                        fontFamily: "'DM Sans', sans-serif",
                                        boxShadow: "0 4px 16px rgba(13,148,136,0.3)"
                                    }}
                                >Request Appointment</button>
                            </form>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
