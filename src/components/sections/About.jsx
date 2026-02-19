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

                    {/* Stats row */}
                    <FadeIn delay={0.2} style={{ flex: "1 1 320px", minWidth: 280 }}>
                        <div style={{
                            display: "grid", gridTemplateColumns: "repeat(2, 1fr)",
                            gap: 12
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
                    </FadeIn>
                </div>


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
