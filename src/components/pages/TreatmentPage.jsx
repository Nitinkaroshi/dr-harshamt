import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VeinIllustration } from '../common/MedicalIllustrations';
import { DOC, TREATMENTS, TREATMENT_QA } from '../../config/data';
import usePageSEO from '../../hooks/usePageSEO';
import { Plus, Minus, ArrowLeft } from 'lucide-react';

function QASection({ questions }) {
    const [open, setOpen] = useState(null);
    return (
        <div style={{ marginBottom: 36 }}>
            <h2 style={{
                fontFamily: "'Roboto Slab', serif",
                fontSize: 22, fontWeight: 700,
                color: "#071426", marginBottom: 18
            }}>Patient Questions & Expert Answers</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {questions.map((item, i) => (
                    <div key={i} style={{
                        border: "1px solid",
                        borderColor: open === i ? "rgba(13,148,136,0.3)" : "rgba(0,0,0,0.07)",
                        borderRadius: 12,
                        overflow: "hidden",
                        background: open === i ? "rgba(13,148,136,0.02)" : "#fff",
                        transition: "all 0.2s ease"
                    }}>
                        <button
                            onClick={() => setOpen(open === i ? null : i)}
                            style={{
                                width: "100%", textAlign: "left",
                                display: "flex", justifyContent: "space-between", alignItems: "center",
                                padding: "16px 20px", background: "none", border: "none",
                                cursor: "pointer", gap: 12
                            }}
                        >
                            <span style={{
                                fontFamily: "'Roboto', sans-serif",
                                fontSize: 14, fontWeight: 600,
                                color: "#071426", lineHeight: 1.4, flex: 1
                            }}>{item.q}</span>
                            <span style={{
                                color: "#0D9488", flexShrink: 0,
                                transform: open === i ? "rotate(90deg)" : "rotate(0deg)",
                                transition: "transform 0.2s ease", display: "flex"
                            }}>{open === i ? <Minus size={18} /> : <Plus size={18} />}</span>
                        </button>
                        <AnimatePresence>
                            {open === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    style={{ overflow: "hidden" }}
                                >
                                    <p style={{
                                        fontFamily: "'Roboto', sans-serif",
                                        fontSize: 14, color: "rgba(7,20,38,0.65)",
                                        lineHeight: 1.8, padding: "0 20px 18px",
                                        margin: 0
                                    }}>{item.a}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function TreatmentPage({ id, onBack, onContact }) {
    const t = TREATMENTS[id];

    /* ── Dynamic SEO per treatment ── */
    usePageSEO(t ? {
        title: t.seoTitle || `${t.title} | Dr. Harsha M T | Interventional Radiologist Bengaluru`,
        description: t.seoDescription || `${t.title} (${t.sub}) — ${t.overview.slice(0, 155)}...`,
        path: `/treatment/${id}`,
        image: t.hero,
        type: 'article',
    } : undefined);

    /* ── JSON-LD: MedicalWebPage schema ── */
    useEffect(() => {
        if (!t) return;
        const schema = {
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": t.title,
            "description": t.overview,
            "url": `https://drharshamt.com/treatment/${id}`,
            "mainEntity": {
                "@type": "MedicalProcedure",
                "name": t.title,
                "procedureType": "Minimally Invasive",
                "description": t.why,
                "howPerformed": t.how.join('. '),
                "followup": t.recovery
            },
            "author": {
                "@type": "Physician",
                "name": "Dr. Harsha M T",
                "medicalSpecialty": "Interventional Radiology"
            }
        };
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = 'treatment-schema';
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
        return () => document.getElementById('treatment-schema')?.remove();
    }, [id, t]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!t) {
        return (
            <div style={{
                padding: 100,
                textAlign: "center",
                color: "#fff",
                background: "#071426",
                minHeight: "100vh"
            }}>
                Treatment not found.
            </div>
        );
    }

    return (
        <div style={{ background: "#FAFBFC", minHeight: "100vh" }}>
            <div style={{ height: 60 }} />

            {/* Hero */}
            <div style={{ position: "relative", height: "clamp(350px, 45vw, 450px)", overflow: "hidden" }}>
                <img
                    src={t.hero}
                    alt={`${t.title} — treatment in Bengaluru by Dr. Harsha M T`}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                />
                <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, rgba(7,20,38,0.2) 0%, rgba(7,20,38,0.88) 100%)"
                }} />
                <div style={{
                    position: "absolute",
                    bottom: 36,
                    left: 0,
                    right: 0,
                    maxWidth: 800,
                    margin: "0 auto",
                    padding: "0 24px"
                }}>
                    <h1 style={{
                        fontFamily: "'Roboto Slab', serif",
                        fontSize: "clamp(26px, 4vw, 36px)",
                        fontWeight: 700,
                        color: "#fff",
                        lineHeight: 1.2,
                        marginBottom: 6
                    }}>{t.title}</h1>
                    <p style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontSize: 15,
                        color: "#5EEAD4",
                        fontWeight: 500
                    }}>{t.sub}</p>
                </div>
            </div>

            <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px 80px" }}>
                <button
                    onClick={onBack}
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        background: "none",
                        border: "1px solid rgba(0,0,0,0.1)",
                        color: "rgba(7,20,38,0.6)",
                        padding: "8px 16px",
                        borderRadius: 8,
                        fontSize: 13,
                        fontFamily: "'Roboto', sans-serif",
                        cursor: "pointer",
                        marginBottom: 36,
                        fontWeight: 500
                    }}
                > <ArrowLeft size={14} /> Back to Home</button>

                {/* Stats */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 40 }}>
                    {t.stats.map((s, i) => (
                        <div
                            key={i}
                            style={{
                                flex: "1 1 140px",
                                background: "linear-gradient(135deg, #071426, #0A1E3D)",
                                borderRadius: 14,
                                padding: "20px 24px",
                                textAlign: "center"
                            }}
                        >
                            <div style={{
                                fontFamily: "'Roboto Slab', serif",
                                fontSize: 28,
                                fontWeight: 700,
                                color: "#14B8A6",
                                lineHeight: 1
                            }}>{s.v}</div>
                            <div style={{
                                fontFamily: "'Roboto', sans-serif",
                                fontSize: 11,
                                color: "rgba(255,255,255,0.45)",
                                marginTop: 6,
                                letterSpacing: "0.04em",
                                textTransform: "uppercase"
                            }}>{s.l}</div>
                        </div>
                    ))}
                </div>

                {/* Overview */}
                <div style={{ marginBottom: 36 }}>
                    <h2 style={{
                        fontFamily: "'Roboto Slab', serif",
                        fontSize: 22,
                        fontWeight: 700,
                        color: "#071426",
                        marginBottom: 14
                    }}>The Condition</h2>
                    <p style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontSize: 15,
                        color: "rgba(7,20,38,0.65)",
                        lineHeight: 1.8
                    }}>{t.overview}</p>
                </div>

                {/* Why IR */}
                <div style={{
                    marginBottom: 36,
                    background: "rgba(13,148,136,0.04)",
                    border: "1px solid rgba(13,148,136,0.1)",
                    borderRadius: 14,
                    padding: 28
                }}>
                    <h2 style={{
                        fontFamily: "'Roboto Slab', serif",
                        fontSize: 22,
                        fontWeight: 700,
                        color: "#071426",
                        marginBottom: 14
                    }}>Why Pinhole Treatment?</h2>
                    <p style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontSize: 15,
                        color: "rgba(7,20,38,0.65)",
                        lineHeight: 1.8
                    }}>{t.why}</p>
                </div>

                {/* Comparison Table */}
                {t.comparison && (
                    <div style={{ marginBottom: 36 }}>
                        <h2 style={{
                            fontFamily: "'Roboto Slab', serif",
                            fontSize: 22,
                            fontWeight: 700,
                            color: "#071426",
                            marginBottom: 18
                        }}>{t.comparison.title}</h2>
                        <div style={{ 
                            overflowX: "auto", 
                            borderRadius: 12, 
                            border: "1px solid rgba(0,0,0,0.06)",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.02)"
                        }}>
                            <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff" }}>
                                <thead>
                                    <tr style={{ background: "rgba(13,148,136,0.05)" }}>
                                        {t.comparison.headers.map((h, i) => (
                                            <th key={i} style={{ 
                                                padding: "16px", 
                                                textAlign: "left", 
                                                fontFamily: "'Roboto Slab', serif",
                                                fontSize: 14,
                                                color: "#0D9488",
                                                borderBottom: "2px solid rgba(13,148,136,0.1)"
                                            }}>{h}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {t.comparison.rows.map((row, i) => (
                                        <tr key={i} style={{ borderBottom: i < t.comparison.rows.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none" }}>
                                            {row.map((cell, j) => (
                                                <td key={j} style={{ 
                                                    padding: "14px 16px", 
                                                    fontFamily: "'Roboto', sans-serif",
                                                    fontSize: 14,
                                                    color: "rgba(7,20,38,0.7)"
                                                }}>{cell}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* SVG illustration for specific treatments */}
                {id === "varicose-veins" && (
                    <div style={{
                        background: "linear-gradient(135deg, #071426, #0A1E3D)",
                        borderRadius: 14,
                        padding: "28px 20px",
                        marginBottom: 36
                    }}>
                        <VeinIllustration type="varicose-comparison" />
                    </div>
                )}
                {(id === "uterine-fibroid" || id === "prostate-embolisation") && (
                    <div style={{
                        background: "linear-gradient(135deg, #071426, #0A1E3D)",
                        borderRadius: 14,
                        padding: "28px 20px",
                        marginBottom: 36
                    }}>
                        <VeinIllustration type="embolisation" />
                    </div>
                )}

                {/* How it works */}
                <div style={{ marginBottom: 36 }}>
                    <h2 style={{
                        fontFamily: "'Roboto Slab', serif",
                        fontSize: 22,
                        fontWeight: 700,
                        color: "#071426",
                        marginBottom: 18
                    }}>How The Procedure Works</h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                        {t.how.map((step, i) => (
                            <div
                                key={i}
                                style={{
                                    display: "flex",
                                    gap: 16,
                                    padding: "16px 0",
                                    borderBottom: i < t.how.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none"
                                }}
                            >
                                <div style={{
                                    width: 32,
                                    height: 32,
                                    borderRadius: "50%",
                                    background: "linear-gradient(135deg, #0D9488, #0F766E)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#fff",
                                    fontSize: 13,
                                    fontWeight: 700,
                                    fontFamily: "'Roboto', sans-serif",
                                    flexShrink: 0
                                }}>{i + 1}</div>
                                <p style={{
                                    fontFamily: "'Roboto', sans-serif",
                                    fontSize: 14,
                                    color: "rgba(7,20,38,0.65)",
                                    lineHeight: 1.7,
                                    paddingTop: 5
                                }}>{step}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pinhole illustration */}
                <div style={{
                    background: "linear-gradient(135deg, #071426, #0A1E3D)",
                    borderRadius: 14,
                    padding: "28px 20px",
                    marginBottom: 36
                }}>
                    <VeinIllustration type="pinhole" />
                </div>

                {/* Recovery */}
                <div style={{ marginBottom: 36 }}>
                    <h2 style={{
                        fontFamily: "'Roboto Slab', serif",
                        fontSize: 22,
                        fontWeight: 700,
                        color: "#071426",
                        marginBottom: 14
                    }}>Recovery & Aftercare</h2>
                    <p style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontSize: 15,
                        color: "rgba(7,20,38,0.65)",
                        lineHeight: 1.8
                    }}>{t.recovery}</p>
                </div>

                {/* Who is suitable */}
                <div style={{
                    marginBottom: 36,
                    background: "#fff",
                    border: "1px solid rgba(0,0,0,0.06)",
                    borderRadius: 14,
                    padding: 28,
                    boxShadow: "0 2px 12px rgba(0,0,0,0.03)"
                }}>
                    <h2 style={{
                        fontFamily: "'Roboto Slab', serif",
                        fontSize: 22,
                        fontWeight: 700,
                        color: "#071426",
                        marginBottom: 14
                    }}>Who Is This For?</h2>
                    <p style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontSize: 15,
                        color: "rgba(7,20,38,0.65)",
                        lineHeight: 1.8
                    }}>{t.suitable}</p>
                </div>

                {/* Q&A Section */}
                {TREATMENT_QA[id] && <QASection questions={TREATMENT_QA[id]} />}

                {/* CTA */}
                <div style={{
                    background: "linear-gradient(135deg, #071426, #0A1E3D)",
                    borderRadius: 16,
                    padding: 32,
                    textAlign: "center"
                }}>
                    <div style={{
                        fontSize: 20,
                        fontWeight: 700,
                        color: "#fff",
                        fontFamily: "'Roboto', sans-serif",
                        marginBottom: 8
                    }}>Ready to Explore This Treatment?</div>
                    <div style={{
                        fontSize: 14,
                        color: "rgba(255,255,255,0.5)",
                        fontFamily: "'Roboto', sans-serif",
                        marginBottom: 20
                    }}>Book a consultation to find out if this procedure is right for you.</div>
                    <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
                        <button
                            onClick={onContact}
                            style={{
                                background: "linear-gradient(135deg, #0D9488, #0F766E)",
                                border: "none",
                                color: "#fff",
                                padding: "13px 28px",
                                borderRadius: 10,
                                fontSize: 14,
                                fontWeight: 600,
                                cursor: "pointer",
                                fontFamily: "'Roboto', sans-serif"
                            }}
                        >Book Appointment</button>
                        <a
                            href={`https://wa.me/${DOC.wa}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                background: "#25D366",
                                color: "#fff",
                                padding: "13px 28px",
                                borderRadius: 10,
                                fontSize: 14,
                                fontWeight: 600,
                                fontFamily: "'Roboto', sans-serif",
                                textDecoration: "none",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 6
                            }}
                        >WhatsApp</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
