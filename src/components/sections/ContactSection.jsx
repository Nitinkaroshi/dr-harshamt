import { useState } from 'react';
import { motion } from 'framer-motion';
import FadeIn from '../common/FadeIn';
import { DOC, SERVICES, LOCATIONS } from '../../config/data';

const TIME_SLOTS = [
    { label: "Morning (10 AM – 12 PM)", loc: "SPARSH Hospital" },
    { label: "Afternoon (12 PM – 2 PM)", loc: "SPARSH Hospital" },
    { label: "Afternoon (2 PM – 4 PM)", loc: "SPARSH Hospital" },
    { label: "Evening (5 PM – 6:30 PM)", loc: "Venuva Vascular Center" },
    { label: "Evening (6:30 PM – 8 PM)", loc: "Venuva Vascular Center" },
];

const inputStyle = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 10,
    border: "1px solid #D1D5DB",
    fontSize: 14,
    fontFamily: "'Roboto', sans-serif",
    background: "#F9FAFB",
    color: "#1F2937",
    boxSizing: "border-box",
    outline: "none",
    transition: "border-color 0.2s ease"
};

const labelStyle = {
    display: "block",
    fontSize: 11,
    fontWeight: 600,
    color: "#6B7280",
    fontFamily: "'Roboto', sans-serif",
    marginBottom: 6,
    letterSpacing: "0.04em",
    textTransform: "uppercase"
};

export default function ContactSection() {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        condition: "",
        location: "",
        date: "",
        timeSlot: "",
        message: ""
    });
    const [sent, setSent] = useState(false);

    const handleChange = (field, value) => {
        setForm(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Format the date nicely
        let dateStr = "Not specified";
        if (form.date) {
            const d = new Date(form.date);
            dateStr = d.toLocaleDateString("en-IN", {
                weekday: "long", day: "numeric", month: "long", year: "numeric"
            });
        }

        // Build WhatsApp message
        const lines = [
            "*New Appointment Request*",
            "",
            `*Name:* ${form.name}`,
            `*Phone:* ${form.phone}`,
            `*Condition:* ${form.condition || "Not specified"}`,
            `*Preferred Location:* ${form.location || "Not specified"}`,
            `*Preferred Date:* ${dateStr}`,
            `*Time Slot:* ${form.timeSlot || "Not specified"}`,
        ];

        if (form.message.trim()) {
            lines.push(`*Message:* ${form.message.trim()}`);
        }

        lines.push("", "— Sent from Dr. Harsha M T website");

        const text = encodeURIComponent(lines.join("\n"));
        const waUrl = `https://wa.me/${DOC.wa}?text=${text}`;

        window.open(waUrl, "_blank");
        setSent(true);

        // Reset after 5 seconds
        setTimeout(() => {
            setSent(false);
            setForm({ name: "", phone: "", condition: "", location: "", date: "", timeSlot: "", message: "" });
        }, 5000);
    };

    // Get tomorrow's date as minimum for date picker
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDate = tomorrow.toISOString().split("T")[0];

    return (
        <section id="contact" style={{
            background: "linear-gradient(180deg, #EFF6FF, #DBEAFE)",
            padding: "clamp(40px, 8vw, 80px) 0"
        }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
                {/* Section heading */}
                <FadeIn>
                    <div style={{ textAlign: "center", marginBottom: 48 }}>
                        <span style={{
                            display: "inline-block", fontSize: 11, fontWeight: 700,
                            letterSpacing: "0.12em", textTransform: "uppercase",
                            color: "#2563EB", background: "rgba(37,99,235,0.08)",
                            padding: "6px 16px", borderRadius: 100, marginBottom: 14,
                            fontFamily: "'Roboto', sans-serif",
                            border: "1px solid rgba(37,99,235,0.15)"
                        }}>Book Appointment</span>
                        <h2 style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "clamp(24px, 3.5vw, 38px)",
                            fontWeight: 800, color: "#1F2937",
                            lineHeight: 1.15, letterSpacing: "-0.02em",
                            marginBottom: 10
                        }}>Schedule Your Consultation</h2>
                        <p style={{
                            fontFamily: "'Roboto', sans-serif",
                            fontSize: 15, color: "#6B7280",
                            maxWidth: 500, margin: "0 auto"
                        }}>Fill in your details and we'll connect with you on WhatsApp</p>
                    </div>
                </FadeIn>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
                    {/* ── LEFT: Contact Info ── */}
                    <FadeIn delay={0.1} style={{ flex: "1 1 320px", minWidth: 260 }}>
                        <div style={{
                            background: "#FFFFFF",
                            border: "1px solid #E5E7EB",
                            borderRadius: 18, padding: 32, height: "100%"
                        }}>
                            <div style={{
                                fontSize: 11, fontFamily: "'Roboto', sans-serif",
                                fontWeight: 600, letterSpacing: "0.1em",
                                textTransform: "uppercase", color: "#2563EB", marginBottom: 24
                            }}>Contact Information</div>

                            {/* Location Cards */}
                            {LOCATIONS.map((loc, i) => (
                                <div key={i} style={{
                                    background: "#F9FAFB",
                                    border: "1px solid #E5E7EB",
                                    borderRadius: 12,
                                    padding: "14px 16px",
                                    marginBottom: 12
                                }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                                        <div style={{
                                            width: 34, height: 34, borderRadius: 8, flexShrink: 0,
                                            background: loc.primary ? "rgba(37,99,235,0.1)" : "rgba(13,148,136,0.1)",
                                            display: "flex", alignItems: "center",
                                            justifyContent: "center", fontSize: 15
                                        }}>{loc.primary ? "🏥" : "💉"}</div>
                                        <div>
                                            <div style={{
                                                fontSize: 14, fontWeight: 700, color: "#1F2937",
                                                fontFamily: "'Roboto', sans-serif"
                                            }}>{loc.name}</div>
                                            <div style={{
                                                fontSize: 12, color: "#6B7280",
                                                fontFamily: "'Roboto', sans-serif"
                                            }}>{loc.address}</div>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", gap: 16, paddingLeft: 44 }}>
                                        <div style={{
                                            fontSize: 12, color: loc.primary ? "#2563EB" : "#0D9488",
                                            fontWeight: 600, fontFamily: "'Roboto', sans-serif"
                                        }}>{loc.time}</div>
                                        <div style={{
                                            fontSize: 11, color: "#9CA3AF",
                                            fontFamily: "'Roboto', sans-serif"
                                        }}>{loc.days}</div>
                                    </div>
                                </div>
                            ))}

                            {/* Other Contact Details */}
                            {[
                                { i: "📞", l: "Phone", v: DOC.phone },
                                { i: "✉️", l: "Email", v: DOC.email },
                                { i: "🏥", l: "Registration", v: `KMC — ${DOC.reg}` },
                            ].map((c, i) => (
                                <div key={i} style={{ display: "flex", gap: 12, marginBottom: 20 }}>
                                    <div style={{
                                        width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                                        background: "rgba(37,99,235,0.08)",
                                        display: "flex", alignItems: "center",
                                        justifyContent: "center", fontSize: 16
                                    }}>{c.i}</div>
                                    <div>
                                        <div style={{
                                            fontSize: 10, color: "#9CA3AF",
                                            fontFamily: "'Roboto', sans-serif",
                                            letterSpacing: "0.06em", textTransform: "uppercase",
                                            marginBottom: 3
                                        }}>{c.l}</div>
                                        <div style={{
                                            fontSize: 13, color: "#374151",
                                            fontFamily: "'Roboto', sans-serif", lineHeight: 1.5
                                        }}>{c.v}</div>
                                    </div>
                                </div>
                            ))}

                            {/* Direct WhatsApp */}
                            <a
                                href={`https://wa.me/${DOC.wa}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "flex", alignItems: "center",
                                    justifyContent: "center", gap: 8,
                                    background: "#25D366", color: "#fff",
                                    padding: "13px 20px", borderRadius: 10,
                                    textDecoration: "none", fontSize: 14,
                                    fontWeight: 600, fontFamily: "'Roboto', sans-serif",
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
                                        width: 38, height: 38, borderRadius: 10,
                                        background: "#F3F4F6",
                                        border: "1px solid #E5E7EB",
                                        display: "flex", alignItems: "center",
                                        justifyContent: "center", textDecoration: "none",
                                        transition: "background 0.2s"
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.background = "rgba(37,99,235,0.1)"}
                                    onMouseLeave={e => e.currentTarget.style.background = "#F3F4F6"}
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#6B7280">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.sparshhospital.com/doctors/dr-harsha-m-t/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        width: 38, height: 38, borderRadius: 10,
                                        background: "#F3F4F6",
                                        border: "1px solid #E5E7EB",
                                        display: "flex", alignItems: "center",
                                        justifyContent: "center", textDecoration: "none",
                                        transition: "background 0.2s"
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.background = "rgba(37,99,235,0.1)"}
                                    onMouseLeave={e => e.currentTarget.style.background = "#F3F4F6"}
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#6B7280">
                                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
                                    </svg>
                                </a>
                            </div>

                            {/* Google Maps */}
                            <div style={{
                                marginTop: 16, borderRadius: 12, overflow: "hidden",
                                border: "1px solid #E5E7EB"
                            }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9!2d77.59!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sSPARSH%20Hospital%20-%20Infantry%20Road!5e0!3m2!1sen!2sin!4v1706000000000!5m2!1sen!2sin"
                                    width="100%" height="160"
                                    style={{
                                        border: 0,
                                        filter: "brightness(1) contrast(1) saturate(1)",
                                        borderRadius: 12
                                    }}
                                    allowFullScreen="" loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="SPARSH Hospital Location"
                                />
                            </div>
                        </div>
                    </FadeIn>

                    {/* ── RIGHT: Booking Form ── */}
                    <FadeIn delay={0.2} style={{ flex: "1 1 420px", minWidth: 280 }}>
                        <div style={{
                            background: "#FFFFFF",
                            border: "1px solid #E5E7EB",
                            borderRadius: 18, padding: 32
                        }}>
                            <div style={{
                                fontSize: 18, fontWeight: 700, color: "#1F2937",
                                fontFamily: "'Poppins', sans-serif", marginBottom: 4
                            }}>Request an Appointment</div>
                            <div style={{
                                fontSize: 13, color: "#6B7280",
                                fontFamily: "'Roboto', sans-serif", marginBottom: 28
                            }}>Your details will be sent directly to Dr. Harsha via WhatsApp</div>

                            {sent ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    style={{
                                        textAlign: "center", padding: "48px 24px",
                                        background: "rgba(13,148,136,0.06)",
                                        border: "1px solid rgba(13,148,136,0.15)",
                                        borderRadius: 14
                                    }}
                                >
                                    <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                                    <div style={{
                                        fontSize: 18, fontWeight: 700, color: "#0D9488",
                                        fontFamily: "'Poppins', sans-serif", marginBottom: 8
                                    }}>Appointment Request Sent!</div>
                                    <div style={{
                                        fontSize: 14, color: "#6B7280",
                                        fontFamily: "'Roboto', sans-serif", lineHeight: 1.6
                                    }}>
                                        Please complete sending the message on WhatsApp.<br />
                                        Dr. Harsha's team will confirm your appointment shortly.
                                    </div>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    {/* Name & Phone row */}
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
                                        <div style={{ flex: "1 1 180px" }}>
                                            <label style={labelStyle}>Full Name *</label>
                                            <input
                                                type="text"
                                                placeholder="Enter your name"
                                                required
                                                value={form.name}
                                                onChange={e => handleChange("name", e.target.value)}
                                                style={inputStyle}
                                                onFocus={e => e.target.style.borderColor = "#2563EB"}
                                                onBlur={e => e.target.style.borderColor = "#D1D5DB"}
                                            />
                                        </div>
                                        <div style={{ flex: "1 1 180px" }}>
                                            <label style={labelStyle}>Phone Number *</label>
                                            <input
                                                type="tel"
                                                placeholder="+91 XXXXX XXXXX"
                                                required
                                                value={form.phone}
                                                onChange={e => handleChange("phone", e.target.value)}
                                                style={inputStyle}
                                                onFocus={e => e.target.style.borderColor = "#2563EB"}
                                                onBlur={e => e.target.style.borderColor = "#D1D5DB"}
                                            />
                                        </div>
                                    </div>

                                    {/* Condition */}
                                    <div style={{ marginBottom: 16 }}>
                                        <label style={labelStyle}>Condition / Treatment</label>
                                        <select
                                            value={form.condition}
                                            onChange={e => handleChange("condition", e.target.value)}
                                            style={{
                                                ...inputStyle,
                                                color: form.condition ? "#1F2937" : "#9CA3AF",
                                                cursor: "pointer"
                                            }}
                                        >
                                            <option value="">Select a condition</option>
                                            {SERVICES.map(s => (
                                                <option key={s.t} value={s.t}>{s.t}</option>
                                            ))}
                                            <option value="Other / Not Sure">Other / Not Sure</option>
                                        </select>
                                    </div>

                                    {/* Preferred Location */}
                                    <div style={{ marginBottom: 16 }}>
                                        <label style={labelStyle}>Preferred Location</label>
                                        <select
                                            value={form.location}
                                            onChange={e => {
                                                handleChange("location", e.target.value);
                                                handleChange("timeSlot", "");
                                            }}
                                            style={{
                                                ...inputStyle,
                                                color: form.location ? "#1F2937" : "#9CA3AF",
                                                cursor: "pointer"
                                            }}
                                        >
                                            <option value="">Select location</option>
                                            {LOCATIONS.map(loc => (
                                                <option key={loc.name} value={loc.name}>
                                                    {loc.name} ({loc.time})
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Date & Time row */}
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
                                        <div style={{ flex: "1 1 180px" }}>
                                            <label style={labelStyle}>Preferred Date</label>
                                            <input
                                                type="date"
                                                min={minDate}
                                                value={form.date}
                                                onChange={e => handleChange("date", e.target.value)}
                                                style={{
                                                    ...inputStyle,
                                                    color: form.date ? "#1F2937" : "#9CA3AF",
                                                    cursor: "pointer"
                                                }}
                                            />
                                        </div>
                                        <div style={{ flex: "1 1 180px" }}>
                                            <label style={labelStyle}>Time Slot</label>
                                            <select
                                                value={form.timeSlot}
                                                onChange={e => handleChange("timeSlot", e.target.value)}
                                                style={{
                                                    ...inputStyle,
                                                    color: form.timeSlot ? "#1F2937" : "#9CA3AF",
                                                    cursor: "pointer"
                                                }}
                                            >
                                                <option value="">Select time</option>
                                                {TIME_SLOTS
                                                    .filter(t => !form.location || t.loc === form.location)
                                                    .map(t => (
                                                        <option key={t.label} value={t.label}>{t.label}</option>
                                                    ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div style={{ marginBottom: 24 }}>
                                        <label style={labelStyle}>Message (Optional)</label>
                                        <textarea
                                            placeholder="Briefly describe your condition or any questions..."
                                            rows={3}
                                            value={form.message}
                                            onChange={e => handleChange("message", e.target.value)}
                                            style={{
                                                ...inputStyle,
                                                resize: "vertical",
                                                minHeight: 70
                                            }}
                                            onFocus={e => e.target.style.borderColor = "#2563EB"}
                                            onBlur={e => e.target.style.borderColor = "#D1D5DB"}
                                        />
                                    </div>

                                    {/* Submit button */}
                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        style={{
                                            width: "100%", padding: "15px",
                                            borderRadius: 12, border: "none",
                                            background: "linear-gradient(135deg, #0D9488, #0F766E)",
                                            color: "#fff", fontSize: 15, fontWeight: 700,
                                            cursor: "pointer", fontFamily: "'Poppins', sans-serif",
                                            boxShadow: "0 4px 20px rgba(13,148,136,0.3)",
                                            display: "flex", alignItems: "center",
                                            justifyContent: "center", gap: 10
                                        }}
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                        Send Appointment Request via WhatsApp
                                    </motion.button>

                                    <div style={{
                                        marginTop: 14, textAlign: "center",
                                        fontSize: 12, color: "#9CA3AF",
                                        fontFamily: "'Roboto', sans-serif", lineHeight: 1.5
                                    }}>
                                        Clicking will open WhatsApp with your details pre-filled.
                                        <br />Just tap Send to complete your booking request.
                                    </div>
                                </form>
                            )}
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
