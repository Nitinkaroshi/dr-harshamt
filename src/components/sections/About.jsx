import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../common/FadeIn';
import { DOC, IMG, AWARDS } from '../../config/data';

const GALLERY = [
    { img: IMG.gallery1, label: "Procedure in Progress" },
    { img: IMG.gallery2, label: "Post-procedure Consultation" },
    { img: IMG.gallery3, label: "Conference Presentation" },
    { img: IMG.gallery4, label: "Cath Lab" },
    { img: IMG.varicose, label: "Varicose Vein Procedure" },
    { img: IMG.thyroid, label: "Thyroid Ablation" },
];

const PATIENT_QUOTES = [
    { name: "Ramesh K., 58", text: "Dr. Harsha explained everything so clearly. The varicose vein procedure took 30 minutes and I walked out. Truly life-changing.", condition: "Varicose Veins" },
    { name: "Priya S., 42", text: "I was told I'd need a hysterectomy. Dr. Harsha saved my uterus with UFE. My quality of life is completely restored.", condition: "Uterine Fibroids" },
    { name: "Lakshmi R., 48", text: "The thyroid nodule in my neck disappeared without any surgery or scar. Dr. Harsha is a rare expert with a compassionate approach.", condition: "Thyroid Nodule" },
];

export default function About() {
    const [galleryIdx, setGalleryIdx] = useState(null);
    const [quoteIdx, setQuoteIdx] = useState(0);

    return (
        <section id="about" style={{ background: "#FAFBFC", padding: "90px 0" }}>
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
                        fontFamily: "'DM Sans', sans-serif"
                    }}>Know Your Doctor</span>
                    <h2 style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "clamp(26px, 3.5vw, 38px)",
                        fontWeight: 800, color: "#071426",
                        lineHeight: 1.15, marginBottom: 12, letterSpacing: "-0.02em"
                    }}>Dr. Harsha M T</h2>
                    <p style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 16, color: "#6B7280",
                        maxWidth: 580, margin: "0 auto", lineHeight: 1.7
                    }}>{DOC.titleFull}</p>
                    <p style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 13, color: "#0D9488",
                        marginTop: 6, fontWeight: 600
                    }}>{DOC.cofounder}</p>
                </div>

                {/* ── Main bio + timeline ── */}
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
                                alt={DOC.name}
                                style={{ width: "100%", height: 340, objectFit: "cover", objectPosition: "top" }}
                            />
                            <div style={{
                                position: "absolute", bottom: 0, left: 0, right: 0,
                                background: "linear-gradient(180deg, transparent 30%, rgba(7,20,38,0.92) 100%)",
                                padding: "30px 20px 20px"
                            }}>
                                <div style={{ color: "#fff", fontSize: 16, fontWeight: 700, fontFamily: "'DM Sans', sans-serif" }}>{DOC.name}</div>
                                <div style={{ color: "#5EEAD4", fontSize: 12, fontFamily: "'DM Sans', sans-serif", marginTop: 2 }}>{DOC.qualsBadge}</div>
                            </div>
                        </div>

                        {/* Bio */}
                        {[
                            "Dr. Harsha M T is a highly trained Vascular and Interventional Radiologist specialising in replacing complex surgeries with minimally invasive, image-guided pinhole procedures. His approach means less pain, faster recovery, and no scars.",
                            "After completing his MBBS, he pursued MD in Radiodiagnosis at PGI Chandigarh — one of India's most prestigious institutions — where he topped the national entrance exam. He then earned his Fellowship in VIR from AIIMS and subsequently trained at Seoul National University Hospital (SNUH), South Korea.",
                            "He holds the EBIR (European Board of Interventional Radiology), EDiR, and DICRI certifications. He was additionally trained in thyroid thermal ablation at the European Institute of Oncology (IEO), Milan, Italy — one of the world's premier cancer centres.",
                            `As Co-founder of Venuva Vascular Center, Dr. Harsha is committed to making advanced IR accessible — bringing world-class treatments to patients in Bengaluru.`,
                        ].map((p, i) => (
                            <p key={i} style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: 15, color: "rgba(7,20,38,0.65)",
                                lineHeight: 1.85, marginBottom: 14
                            }}>{p}</p>
                        ))}
                    </FadeIn>

                    {/* Education Timeline + Stats */}
                    <FadeIn delay={0.2} style={{ flex: "1 1 320px", minWidth: 280 }}>
                        {/* Stats row */}
                        <div style={{
                            display: "grid", gridTemplateColumns: "repeat(2, 1fr)",
                            gap: 12, marginBottom: 20
                        }}>
                            {[
                                { v: DOC.exp, l: "Years Experience" },
                                { v: DOC.procs, l: "Procedures Done" },
                                { v: DOC.certs, l: "Certifications" },
                                { v: DOC.countries, l: "Countries Trained" },
                            ].map((s, i) => (
                                <div key={i} style={{
                                    background: "#fff", border: "1px solid #E5E7EB",
                                    borderRadius: 12, padding: "16px 18px", textAlign: "center"
                                }}>
                                    <div style={{ fontSize: 28, fontWeight: 800, color: "#2563EB", fontFamily: "'Inter', sans-serif", lineHeight: 1 }}>{s.v}</div>
                                    <div style={{ fontSize: 12, color: "#6B7280", fontFamily: "'DM Sans', sans-serif", marginTop: 4 }}>{s.l}</div>
                                </div>
                            ))}
                        </div>

                        {/* Education Timeline */}
                        <div style={{
                            background: "#fff", borderRadius: 16, padding: 24,
                            boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 28px rgba(0,0,0,0.04)",
                            border: "1px solid rgba(0,0,0,0.04)", marginBottom: 14
                        }}>
                            <div style={{
                                fontSize: 11, fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
                                letterSpacing: "0.1em", textTransform: "uppercase",
                                color: "#0D9488", marginBottom: 20
                            }}>Education & International Training</div>

                            {[
                                { y: "2018", t: "MBBS", p: "RGUHS, Bengaluru" },
                                { y: "2022", t: "MD Radiodiagnosis", p: "PGI Chandigarh" },
                                { y: "2023", t: "Fellowship VIR", p: "AIIMS Rishikesh" },
                                { y: "2023", t: "Fellowship VIR", p: "SNUH, South Korea" },
                                { y: "2024", t: "Thyroid Thermal Ablation", p: "IEO Milan, Italy" },
                                { y: "—", t: "EBIR • EDiR • DICRI", p: "European Board Certified" },
                            ].map((it, i, arr) => (
                                <div key={i} style={{
                                    display: "flex", gap: 14,
                                    marginBottom: i < arr.length - 1 ? 14 : 0,
                                    paddingBottom: i < arr.length - 1 ? 14 : 0,
                                    borderBottom: i < arr.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none"
                                }}>
                                    <div style={{ width: 44, flexShrink: 0, fontSize: 11, fontWeight: 700, color: "#0D9488", fontFamily: "'DM Sans', sans-serif", paddingTop: 1 }}>{it.y}</div>
                                    <div>
                                        <div style={{ fontSize: 13, fontWeight: 600, color: "#071426", fontFamily: "'DM Sans', sans-serif", marginBottom: 1 }}>{it.t}</div>
                                        <div style={{ fontSize: 11, color: "rgba(7,20,38,0.45)", fontFamily: "'DM Sans', sans-serif" }}>{it.p}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Achievement badge */}
                        <div style={{
                            background: "linear-gradient(135deg, #071426, #0A1E3D)",
                            borderRadius: 14, padding: "18px 22px",
                            display: "flex", alignItems: "center", gap: 14
                        }}>
                            <span style={{ fontSize: 28 }}>🏆</span>
                            <div>
                                <div style={{ color: "#5EEAD4", fontSize: 13, fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>National Rank #1</div>
                                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 11, fontFamily: "'DM Sans', sans-serif" }}>AIIMS VIR Fellowship Entrance Exam</div>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* ── Certifications / Achievements ── */}
                <FadeIn>
                    <div style={{ marginBottom: 56 }}>
                        <h3 style={{
                            fontFamily: "'Inter', sans-serif", fontSize: 22,
                            fontWeight: 700, color: "#071426", marginBottom: 24,
                            textAlign: "center"
                        }}>Certifications & Achievements</h3>
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                            gap: 14
                        }}>
                            {AWARDS.map((a, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -4, boxShadow: "0 10px 28px rgba(37,99,235,0.10)" }}
                                    style={{
                                        background: "#fff", border: "1px solid #E5E7EB",
                                        borderRadius: 14, padding: "22px 20px",
                                        transition: "all 0.3s ease"
                                    }}
                                >
                                    <div style={{ fontSize: 30, marginBottom: 10 }}>{a.icon}</div>
                                    <div style={{ fontSize: 14, fontWeight: 700, color: "#071426", fontFamily: "'DM Sans', sans-serif", marginBottom: 6 }}>{a.title}</div>
                                    <div style={{ fontSize: 12, color: "#6B7280", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6 }}>{a.desc}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </FadeIn>

                {/* ── What Patients Say ── */}
                <FadeIn>
                    <div style={{ marginBottom: 56 }}>
                        <h3 style={{
                            fontFamily: "'Inter', sans-serif", fontSize: 22,
                            fontWeight: 700, color: "#071426", marginBottom: 24,
                            textAlign: "center"
                        }}>What Patients Say About Dr. Harsha</h3>
                        <div style={{
                            background: "linear-gradient(135deg, #071426, #0A1E3D)",
                            borderRadius: 20, padding: "36px 40px", position: "relative"
                        }}>
                            <div style={{ fontSize: 60, color: "rgba(20,184,166,0.3)", fontFamily: "Georgia, serif", lineHeight: 0.8, marginBottom: 20 }}>"</div>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={quoteIdx}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <p style={{
                                        fontFamily: "'DM Sans', sans-serif", fontSize: 17,
                                        color: "rgba(255,255,255,0.85)", lineHeight: 1.8,
                                        marginBottom: 20, fontStyle: "italic"
                                    }}>{PATIENT_QUOTES[quoteIdx].text}</p>
                                    <div style={{ fontSize: 13, fontWeight: 600, color: "#5EEAD4", fontFamily: "'DM Sans', sans-serif" }}>
                                        {PATIENT_QUOTES[quoteIdx].name}
                                    </div>
                                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif", marginTop: 2 }}>
                                        {PATIENT_QUOTES[quoteIdx].condition}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                            <div style={{ display: "flex", gap: 8, marginTop: 24 }}>
                                {PATIENT_QUOTES.map((_, i) => (
                                    <button key={i} onClick={() => setQuoteIdx(i)} style={{
                                        width: i === quoteIdx ? 24 : 8, height: 8, borderRadius: 4,
                                        background: i === quoteIdx ? "#14B8A6" : "rgba(255,255,255,0.25)",
                                        border: "none", cursor: "pointer",
                                        transition: "all 0.3s ease", padding: 0
                                    }} />
                                ))}
                            </div>
                        </div>
                    </div>
                </FadeIn>

                {/* ── Gallery ── */}
                <FadeIn>
                    <div>
                        <h3 style={{
                            fontFamily: "'Inter', sans-serif", fontSize: 22,
                            fontWeight: 700, color: "#071426", marginBottom: 24,
                            textAlign: "center"
                        }}>Gallery</h3>
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                            gap: 10
                        }}>
                            {GALLERY.map((g, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.03 }}
                                    onClick={() => setGalleryIdx(i)}
                                    style={{
                                        borderRadius: 12, overflow: "hidden",
                                        aspectRatio: "4/3", cursor: "pointer",
                                        position: "relative"
                                    }}
                                >
                                    <img
                                        src={g.img}
                                        alt={g.label}
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    />
                                    <div style={{
                                        position: "absolute", inset: 0,
                                        background: "linear-gradient(180deg, transparent 50%, rgba(7,20,38,0.75) 100%)"
                                    }} />
                                    <div style={{
                                        position: "absolute", bottom: 8, left: 10, right: 10,
                                        fontSize: 11, fontWeight: 600, color: "#fff",
                                        fontFamily: "'DM Sans', sans-serif"
                                    }}>{g.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </FadeIn>

                {/* Lightbox */}
                <AnimatePresence>
                    {galleryIdx !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setGalleryIdx(null)}
                            style={{
                                position: "fixed", inset: 0, zIndex: 1000,
                                background: "rgba(7,20,38,0.95)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                padding: 24, cursor: "pointer"
                            }}
                        >
                            <motion.img
                                initial={{ scale: 0.85, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.85, opacity: 0 }}
                                src={GALLERY[galleryIdx].img}
                                alt={GALLERY[galleryIdx].label}
                                style={{
                                    maxWidth: "90vw", maxHeight: "80vh",
                                    objectFit: "contain", borderRadius: 12,
                                    boxShadow: "0 30px 80px rgba(0,0,0,0.6)"
                                }}
                                onClick={e => e.stopPropagation()}
                            />
                            <button
                                onClick={() => setGalleryIdx(null)}
                                style={{
                                    position: "absolute", top: 20, right: 24,
                                    background: "rgba(255,255,255,0.1)", border: "none",
                                    color: "#fff", fontSize: 24, cursor: "pointer",
                                    width: 44, height: 44, borderRadius: "50%",
                                    display: "flex", alignItems: "center", justifyContent: "center"
                                }}
                            >✕</button>
                            <div style={{
                                position: "absolute", bottom: 24, left: 0, right: 0,
                                textAlign: "center", fontSize: 13, color: "rgba(255,255,255,0.6)",
                                fontFamily: "'DM Sans', sans-serif"
                            }}>{GALLERY[galleryIdx].label}</div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
