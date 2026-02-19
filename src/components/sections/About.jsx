import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../common/FadeIn';
import { DOC, IMG } from '../../config/data';

const GALLERY = [
    { img: IMG.gallery1, label: "Procedure in Progress" },
    { img: IMG.gallery2, label: "Post-procedure Consultation" },
    { img: IMG.gallery3, label: "Conference Presentation" },
    { img: IMG.gallery4, label: "Cath Lab" },
    { img: IMG.varicose, label: "Varicose Vein Procedure" },
    { img: IMG.thyroid, label: "Thyroid Ablation" },
];

export default function About() {
    const [galleryIdx, setGalleryIdx] = useState(null);

    return (
        <section id="about" style={{ background: "#FAFBFC", padding: "clamp(40px, 8vw, 90px) 0" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

                {/* ── Section title ── */}
                <div style={{ textAlign: "center", marginBottom: 52 }}>
                    <span style={{
                        display: "inline-block",
                        fontSize: 11, fontWeight: 700,
                        letterSpacing: "0.12em", textTransform: "uppercase",
                        color: "#2563EB",
                        background: "rgba(37,99,235,0.08)",
                        padding: "6px 16px", borderRadius: 100, marginBottom: 14,
                        fontFamily: "'Roboto', sans-serif"
                    }}>Know Your Doctor</span>
                    <h2 style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "clamp(26px, 3.5vw, 38px)",
                        fontWeight: 800, color: "#071426",
                        lineHeight: 1.15, marginBottom: 12, letterSpacing: "-0.02em"
                    }}>Dr. Harsha M T</h2>
                    <p style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontSize: 16, color: "#6B7280",
                        maxWidth: 580, margin: "0 auto", lineHeight: 1.7
                    }}>{DOC.titleFull}</p>
                    <p style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontSize: 13, color: "#0D9488",
                        marginTop: 6, fontWeight: 600
                    }}>{DOC.cofounder}</p>
                </div>

                {/* ── Main bio ── */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 40, marginBottom: 56 }}>
                    {/* Bio + Photo */}
                    <FadeIn delay={0.1} style={{ flex: "1 1 480px", minWidth: 280 }}>
                        {/* Doctor photo */}
                        <div style={{
                            borderRadius: 20, overflow: "hidden",
                            marginBottom: 24, maxHeight: 340, position: "relative",
                            border: "3px solid #2563EB",
                            boxShadow: "0 12px 40px rgba(37,99,235,0.12)"
                        }}>
                            <img
                                src={DOC.photo}
                                alt={`${DOC.name} — Interventional Radiologist in Bengaluru`}
                                loading="lazy"
                                style={{ width: "100%", height: 340, objectFit: "cover", objectPosition: "top" }}
                            />
                            <div style={{
                                position: "absolute", bottom: 0, left: 0, right: 0,
                                background: "linear-gradient(180deg, transparent 30%, rgba(7,20,38,0.92) 100%)",
                                padding: "30px 20px 20px"
                            }}>
                                <div style={{ color: "#fff", fontSize: 16, fontWeight: 700, fontFamily: "'Roboto', sans-serif" }}>{DOC.name}</div>
                                <div style={{ color: "#5EEAD4", fontSize: 12, fontFamily: "'Roboto', sans-serif", marginTop: 2 }}>{DOC.qualsBadge}</div>
                            </div>
                        </div>

                        {/* Bio intro */}
                        <p style={{
                            fontFamily: "'Roboto', sans-serif",
                            fontSize: 15, color: "rgba(7,20,38,0.65)",
                            lineHeight: 1.85, marginBottom: 14
                        }}>
                            Dr. Harsha M T is a highly credentialed Consultant Vascular & Interventional Radiologist and Endovascular Specialist. With a career built on training from the absolute best medical institutions in India and the world, Dr. Harsha brings cutting-edge, minimally invasive solutions to complex vascular problems.
                        </p>
                        <p style={{
                            fontFamily: "'Roboto', sans-serif",
                            fontSize: 15, color: "rgba(7,20,38,0.65)",
                            lineHeight: 1.85, marginBottom: 24
                        }}>
                            He combines the precision of radiology with the clinical expertise of a surgeon to treat conditions like Varicose Veins, Uterine Fibroids, and Thyroid Nodules without the need for open surgery.
                        </p>

                        {/* Training heading */}
                        <h3 style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 18, fontWeight: 700, color: "#1F2937",
                            marginBottom: 16
                        }}>World-Class Qualifications & Training</h3>

                        {/* Training cards */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                            {[
                                {
                                    inst: "PGIMER, Chandigarh",
                                    degree: "MD in Radio-diagnosis & Interventional Radiology",
                                    detail: "Completed residency at the Postgraduate Institute of Medical Education and Research (PGIMER), consistently ranked among the top medical research institutes in India. He also served as Senior Resident at this institute."
                                },
                                {
                                    inst: "AIIMS, Rishikesh",
                                    degree: "Fellowship in Vascular & Interventional Radiology",
                                    detail: "Trained at All India Institute of Medical Sciences (AIIMS), the apex medical institute of the country, mastering complex vascular interventions."
                                },
                                {
                                    inst: "SNUH, South Korea",
                                    degree: "Fellowship in Vascular & Interventional Radiology",
                                    detail: "Advanced training at Seoul National University Hospital (SNUH) — a world-renowned centre for medical innovation and advanced vascular care."
                                },
                            ].map((t, i) => (
                                <div key={i} style={{
                                    background: "#fff", border: "1px solid #E5E7EB",
                                    borderRadius: 12, padding: "16px 18px",
                                    borderLeft: "3px solid #2563EB"
                                }}>
                                    <div style={{ fontSize: 14, fontWeight: 700, color: "#2563EB", fontFamily: "'Poppins', sans-serif", marginBottom: 2 }}>{t.inst}</div>
                                    <div style={{ fontSize: 13, fontWeight: 600, color: "#1F2937", fontFamily: "'Roboto', sans-serif", marginBottom: 6 }}>{t.degree}</div>
                                    <div style={{ fontSize: 13, color: "#6B7280", fontFamily: "'Roboto', sans-serif", lineHeight: 1.7 }}>{t.detail}</div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>

                    {/* Right column: Certifications + Co-founder */}
                    <FadeIn delay={0.2} style={{ flex: "1 1 320px", minWidth: 280 }}>
                        <h3 style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 18, fontWeight: 700, color: "#1F2937",
                            marginBottom: 16
                        }}>Global Board Certifications</h3>

                        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
                            {[
                                { abbr: "EBIR", full: "European Board of Interventional Radiology", note: "A gold-standard qualification in the field" },
                                { abbr: "EDiR", full: "European Diploma in Radiology", note: "Demonstrating comprehensive diagnostic expertise" },
                                { abbr: "Dip. ICRI", full: "Diploma of the Indian College of Radiology and Imaging", note: "National-level certification in radiology" },
                            ].map((c, i) => (
                                <div key={i} style={{
                                    background: "#fff", border: "1px solid #E5E7EB",
                                    borderRadius: 12, padding: "14px 16px",
                                    display: "flex", gap: 12, alignItems: "flex-start"
                                }}>
                                    <div style={{
                                        background: "rgba(37,99,235,0.08)", borderRadius: 8,
                                        padding: "6px 10px", flexShrink: 0,
                                        fontSize: 12, fontWeight: 700, color: "#2563EB",
                                        fontFamily: "'Poppins', sans-serif"
                                    }}>{c.abbr}</div>
                                    <div>
                                        <div style={{ fontSize: 14, fontWeight: 600, color: "#1F2937", fontFamily: "'Roboto', sans-serif", marginBottom: 2 }}>{c.full}</div>
                                        <div style={{ fontSize: 12, color: "#6B7280", fontFamily: "'Roboto', sans-serif" }}>{c.note}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* IEO Milan */}
                        <div style={{
                            background: "linear-gradient(135deg, rgba(37,99,235,0.04), rgba(37,99,235,0.02))",
                            border: "1px solid rgba(37,99,235,0.12)",
                            borderRadius: 12, padding: "16px 18px", marginBottom: 20
                        }}>
                            <div style={{ fontSize: 13, fontWeight: 700, color: "#2563EB", fontFamily: "'Poppins', sans-serif", marginBottom: 4 }}>Thyroid Ablation Training</div>
                            <div style={{ fontSize: 13, color: "#4B5563", fontFamily: "'Roboto', sans-serif", lineHeight: 1.7 }}>
                                Exclusively trained in thyroid thermal ablation at the European Institute of Oncology (IEO), Milan, Italy — one of the world's premier cancer centres.
                            </div>
                        </div>

                        {/* Co-founder card */}
                        <div style={{
                            background: "#2563EB", borderRadius: 12,
                            padding: "18px 20px", color: "#fff"
                        }}>
                            <div style={{ fontSize: 15, fontWeight: 700, fontFamily: "'Poppins', sans-serif", marginBottom: 4 }}>Co-founder, VENUVA VASCULAR CENTER</div>
                            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", fontFamily: "'Roboto', sans-serif", lineHeight: 1.6 }}>
                                Bringing advanced Interventional Radiology accessible to patients in Bengaluru who previously had no alternative to surgery.
                            </div>
                        </div>
                    </FadeIn>

                </div>

                {/* Stats row - centered */}
                <FadeIn delay={0.2}>
                    <div className="about-stats-row" style={{
                        display: "flex", gap: 14, flexWrap: "wrap",
                        justifyContent: "center", maxWidth: 720, margin: "0 auto 56px"
                    }}>
                        {[
                            { v: DOC.exp, l: "Years Experience" },
                            { v: DOC.procs, l: "Procedures Done" },
                            { v: DOC.certs, l: "Certifications" },
                            { v: DOC.countries, l: "Countries Trained" },
                        ].map((s, i) => (
                            <div key={i} style={{
                                flex: "1 1 140px", minWidth: 140,
                                background: "#fff", border: "1px solid #E5E7EB",
                                borderRadius: 12, padding: "20px 18px", textAlign: "center"
                            }}>
                                <div style={{ fontSize: 30, fontWeight: 800, color: "#2563EB", fontFamily: "'Poppins', sans-serif", lineHeight: 1 }}>{s.v}</div>
                                <div style={{ fontSize: 13, color: "#6B7280", fontFamily: "'Roboto', sans-serif", marginTop: 6 }}>{s.l}</div>
                            </div>
                        ))}
                    </div>
                </FadeIn>


                {/* ── Gallery Carousel ── */}
                <FadeIn>
                    <div>
                        <h3 style={{
                            fontFamily: "'Poppins', sans-serif", fontSize: 22,
                            fontWeight: 700, color: "#071426", marginBottom: 24,
                            textAlign: "center"
                        }}>Gallery</h3>

                        {/* Main large image */}
                        <div style={{ position: "relative", maxWidth: 800, margin: "0 auto" }}>
                            <div style={{
                                borderRadius: 16, overflow: "hidden",
                                aspectRatio: "16/10", position: "relative",
                                boxShadow: "0 8px 30px rgba(0,0,0,0.12)"
                            }}>
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={galleryIdx ?? 0}
                                        src={GALLERY[galleryIdx ?? 0].img}
                                        alt={`${GALLERY[galleryIdx ?? 0].label} — Dr. Harsha M T, Interventional Radiologist Bengaluru`}
                                        loading="lazy"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    />
                                </AnimatePresence>
                                {/* Label overlay */}
                                <div style={{
                                    position: "absolute", bottom: 0, left: 0, right: 0,
                                    background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.6) 100%)",
                                    padding: "30px 20px 16px"
                                }}>
                                    <div style={{
                                        fontSize: 15, fontWeight: 600, color: "#fff",
                                        fontFamily: "'Poppins', sans-serif"
                                    }}>{GALLERY[galleryIdx ?? 0].label}</div>
                                </div>
                            </div>

                            {/* Prev / Next buttons */}
                            <button
                                onClick={() => setGalleryIdx(p => {
                                    const cur = p ?? 0;
                                    return cur === 0 ? GALLERY.length - 1 : cur - 1;
                                })}
                                style={{
                                    position: "absolute", top: "50%", left: 10,
                                    transform: "translateY(-50%)",
                                    width: 44, height: 44, borderRadius: "50%",
                                    background: "rgba(255,255,255,0.9)", border: "1px solid #E5E7EB",
                                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    cursor: "pointer", fontSize: 20, color: "#1F2937",
                                    zIndex: 2
                                }}
                            >&lsaquo;</button>
                            <button
                                onClick={() => setGalleryIdx(p => {
                                    const cur = p ?? 0;
                                    return (cur + 1) % GALLERY.length;
                                })}
                                style={{
                                    position: "absolute", top: "50%", right: 10,
                                    transform: "translateY(-50%)",
                                    width: 44, height: 44, borderRadius: "50%",
                                    background: "rgba(255,255,255,0.9)", border: "1px solid #E5E7EB",
                                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    cursor: "pointer", fontSize: 20, color: "#1F2937",
                                    zIndex: 2
                                }}
                            >&rsaquo;</button>
                        </div>

                        {/* Dot indicators */}
                        <div style={{
                            display: "flex", justifyContent: "center",
                            gap: 8, marginTop: 20
                        }}>
                            {GALLERY.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setGalleryIdx(i)}
                                    style={{
                                        width: (galleryIdx ?? 0) === i ? 24 : 10,
                                        height: 10, borderRadius: 5, border: "none",
                                        background: (galleryIdx ?? 0) === i ? "#2563EB" : "#D1D5DB",
                                        cursor: "pointer", transition: "all 0.3s ease", padding: 0
                                    }}
                                />
                            ))}
                        </div>

                        {/* Thumbnail strip */}
                        <div style={{
                            display: "flex", justifyContent: "center",
                            gap: 8, marginTop: 16, flexWrap: "wrap"
                        }}>
                            {GALLERY.map((g, i) => (
                                <div
                                    key={i}
                                    onClick={() => setGalleryIdx(i)}
                                    style={{
                                        width: 80, height: 56, borderRadius: 8,
                                        overflow: "hidden", cursor: "pointer",
                                        border: (galleryIdx ?? 0) === i ? "2px solid #2563EB" : "2px solid transparent",
                                        opacity: (galleryIdx ?? 0) === i ? 1 : 0.6,
                                        transition: "all 0.2s ease"
                                    }}
                                >
                                    <img src={g.img} alt={`${g.label} — Dr. Harsha M T gallery`}
                                        loading="lazy"
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn>

            </div>
        </section>
    );
}
