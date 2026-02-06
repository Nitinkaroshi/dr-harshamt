import { useEffect } from 'react';
import { VeinIllustration } from '../common/MedicalIllustrations';
import { DOC } from '../../config/data';

// Placeholder treatment data - move to config/treatments.js later
const TREATMENTS = {
    "varicose-veins": {
        icon: "🦵",
        title: "Varicose Veins Treatment",
        sub: "EVLA / Venaseal",
        hero: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1200&h=600&fit=crop",
        stats: [
            { v: "98%", l: "Success Rate" },
            { v: "30min", l: "Procedure Time" },
            { v: "Same Day", l: "Discharge" }
        ],
        overview: "Varicose veins are enlarged, twisted veins that commonly appear in the legs. They occur when valves in the veins malfunction, causing blood to pool. This leads to visible, bulging veins, leg pain, heaviness, and skin changes.",
        why: "Traditional surgery requires general anaesthesia, large incisions, and weeks of recovery. Our pinhole laser treatment (EVLA) is done under local anaesthesia through a needle puncture. You walk in, walk out, and resume normal activities the next day.",
        how: [
            "Local anaesthesia is applied to the treatment area",
            "A thin laser fiber is inserted through a tiny needle puncture",
            "Laser energy seals the diseased vein from inside",
            "Blood automatically reroutes to healthy veins",
            "The procedure takes 30-45 minutes"
        ],
        recovery: "Most patients walk immediately after the procedure and return to work within 1-2 days. Compression stockings are worn for 1-2 weeks. Normal exercise can resume within a week.",
        suitable: "This treatment is ideal for patients with symptomatic varicose veins causing pain, swelling, or cosmetic concerns. A Doppler ultrasound is performed to assess suitability."
    },
    "uterine-fibroid": {
        icon: "🩺",
        title: "Uterine Fibroid Embolisation",
        sub: "UFE - Non-surgical Solution",
        hero: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&h=600&fit=crop",
        stats: [
            { v: "90%", l: "Success Rate" },
            { v: "45min", l: "Procedure Time" },
            { v: "Next Day", l: "Discharge" }
        ],
        overview: "Uterine fibroids are non-cancerous growths in the uterus that can cause heavy bleeding, pelvic pain, and pressure symptoms. They affect up to 70% of women by age 50.",
        why: "Unlike hysterectomy or myomectomy which require surgery, UFE is a minimally invasive procedure done through a tiny wrist puncture. The uterus is preserved, recovery is faster, and there are no surgical scars.",
        how: [
            "A small catheter is inserted through the wrist artery",
            "Using X-ray guidance, the catheter reaches the uterine arteries",
            "Tiny particles are injected to block blood flow to the fibroid",
            "The fibroid shrinks over 3-6 months due to lack of blood supply",
            "The procedure takes 45-60 minutes"
        ],
        recovery: "Most patients stay overnight and go home the next day. Mild cramping may occur for a few days. Normal activities resume within 1-2 weeks.",
        suitable: "UFE is suitable for women with symptomatic fibroids who wish to avoid surgery and preserve their uterus. Not recommended for women actively trying to conceive."
    },
    "thyroid-nodule": {
        icon: "🦋",
        title: "Thyroid Nodule Ablation",
        sub: "Radiofrequency Ablation",
        hero: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&h=600&fit=crop",
        stats: [
            { v: "70%", l: "Volume Reduction" },
            { v: "20min", l: "Procedure Time" },
            { v: "Same Day", l: "Discharge" }
        ],
        overview: "Thyroid nodules are lumps in the thyroid gland. While most are benign, they can cause neck swelling, difficulty swallowing, or cosmetic concerns.",
        why: "Traditional thyroid surgery requires general anaesthesia, a neck incision, and lifelong thyroid hormone replacement. RFA shrinks the nodule through a needle, preserving thyroid function with no visible scar.",
        how: [
            "Local anaesthesia is applied to the neck",
            "A thin RFA needle is inserted into the nodule under ultrasound guidance",
            "Radiofrequency energy heats and destroys nodule tissue",
            "The nodule shrinks by 50-90% over 6-12 months",
            "The procedure takes 15-30 minutes"
        ],
        recovery: "Patients go home immediately. Mild neck discomfort may occur for 1-2 days. Normal activities resume the next day.",
        suitable: "RFA is ideal for benign thyroid nodules causing symptoms or cosmetic concerns. A biopsy is required beforehand to confirm the nodule is non-cancerous."
    },
    "varicocele": {
        icon: "👶",
        title: "Varicocele Embolisation",
        sub: "Fertility-Preserving Treatment",
        hero: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1200&h=600&fit=crop",
        stats: [
            { v: "95%", l: "Success Rate" },
            { v: "30min", l: "Procedure Time" },
            { v: "Same Day", l: "Discharge" }
        ],
        overview: "Varicocele is an enlargement of veins in the scrotum, similar to varicose veins. It can cause pain, testicular shrinkage, and male infertility.",
        why: "Traditional surgery requires a groin incision and carries a risk of complications. Embolisation is done through a tiny wrist puncture with faster recovery and no groin incision.",
        how: [
            "A small catheter is inserted through the wrist vein",
            "Using X-ray guidance, the catheter reaches the testicular vein",
            "Tiny coils or glue are used to block the abnormal veins",
            "Blood reroutes to healthy veins",
            "The procedure takes 30-45 minutes"
        ],
        recovery: "Patients go home the same day. Mild discomfort may occur for 1-2 days. Normal activities resume within 3-5 days.",
        suitable: "This treatment is ideal for men with symptomatic varicocele or infertility issues. A semen analysis and ultrasound are performed beforehand."
    },
    "peripheral-vascular": {
        icon: "🫀",
        title: "Peripheral Vascular Disease Treatment",
        sub: "Angioplasty & Stenting",
        hero: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=1200&h=600&fit=crop",
        stats: [
            { v: "92%", l: "Success Rate" },
            { v: "60min", l: "Procedure Time" },
            { v: "Next Day", l: "Discharge" }
        ],
        overview: "Peripheral vascular disease (PVD) occurs when arteries in the legs become narrowed or blocked, reducing blood flow. This causes leg pain, cramping, and difficulty walking.",
        why: "Traditional bypass surgery requires large incisions and long recovery. Angioplasty opens blocked arteries through a pinhole puncture, restoring blood flow without surgery.",
        how: [
            "A catheter is inserted through a small puncture in the groin or wrist",
            "Using X-ray guidance, the catheter reaches the blocked artery",
            "A balloon is inflated to open the blockage",
            "A stent (metal mesh tube) may be placed to keep the artery open",
            "The procedure takes 45-90 minutes"
        ],
        recovery: "Most patients stay overnight and go home the next day. Walking is encouraged immediately. Normal activities resume within a week.",
        suitable: "Angioplasty is suitable for patients with symptomatic PVD causing leg pain or non-healing wounds. An angiogram is performed to assess the blockage."
    },
    "prostate-embolisation": {
        icon: "🔬",
        title: "Prostate Artery Embolisation",
        sub: "PAE - Non-surgical BPH Treatment",
        hero: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=1200&h=600&fit=crop",
        stats: [
            { v: "85%", l: "Success Rate" },
            { v: "60min", l: "Procedure Time" },
            { v: "Same Day", l: "Discharge" }
        ],
        overview: "Benign Prostatic Hyperplasia (BPH) is an enlarged prostate that causes urinary symptoms like frequent urination, weak stream, and nighttime bathroom trips.",
        why: "Traditional TURP surgery requires anaesthesia, catheterization, and hospital stay. PAE shrinks the prostate through a pinhole puncture with no catheter and same-day discharge.",
        how: [
            "A catheter is inserted through a small wrist puncture",
            "Using X-ray guidance, the catheter reaches the prostate arteries",
            "Tiny particles are injected to block blood flow to the prostate",
            "The prostate shrinks over 3-6 months",
            "The procedure takes 60-90 minutes"
        ],
        recovery: "Patients go home the same day. Mild urinary symptoms may persist for a few weeks. Improvement is gradual over 3-6 months.",
        suitable: "PAE is ideal for men with moderate to severe BPH symptoms who wish to avoid surgery. A prostate MRI and flow study are performed beforehand."
    }
};

export default function TreatmentPage({ id, onBack, onContact }) {
    const t = TREATMENTS[id];

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
            <div style={{ position: "relative", height: 340, overflow: "hidden" }}>
                <img src={t.hero} alt={t.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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
                    <span style={{ fontSize: 36, marginBottom: 8, display: "block" }}>{t.icon}</span>
                    <h1 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(26px, 4vw, 36px)",
                        fontWeight: 700,
                        color: "#fff",
                        lineHeight: 1.2,
                        marginBottom: 6
                    }}>{t.title}</h1>
                    <p style={{
                        fontFamily: "'DM Sans', sans-serif",
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
                        fontFamily: "'DM Sans', sans-serif",
                        cursor: "pointer",
                        marginBottom: 36,
                        fontWeight: 500
                    }}
                >← Back to Home</button>

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
                                fontFamily: "'Playfair Display', serif",
                                fontSize: 28,
                                fontWeight: 700,
                                color: "#14B8A6",
                                lineHeight: 1
                            }}>{s.v}</div>
                            <div style={{
                                fontFamily: "'DM Sans', sans-serif",
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
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 22,
                        fontWeight: 700,
                        color: "#071426",
                        marginBottom: 14
                    }}>The Condition</h2>
                    <p style={{
                        fontFamily: "'DM Sans', sans-serif",
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
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 22,
                        fontWeight: 700,
                        color: "#071426",
                        marginBottom: 14
                    }}>Why Pinhole Treatment?</h2>
                    <p style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 15,
                        color: "rgba(7,20,38,0.65)",
                        lineHeight: 1.8
                    }}>{t.why}</p>
                </div>

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
                        fontFamily: "'Playfair Display', serif",
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
                                    fontFamily: "'DM Sans', sans-serif",
                                    flexShrink: 0
                                }}>{i + 1}</div>
                                <p style={{
                                    fontFamily: "'DM Sans', sans-serif",
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
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 22,
                        fontWeight: 700,
                        color: "#071426",
                        marginBottom: 14
                    }}>Recovery & Aftercare</h2>
                    <p style={{
                        fontFamily: "'DM Sans', sans-serif",
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
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 22,
                        fontWeight: 700,
                        color: "#071426",
                        marginBottom: 14
                    }}>Who Is This For?</h2>
                    <p style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 15,
                        color: "rgba(7,20,38,0.65)",
                        lineHeight: 1.8
                    }}>{t.suitable}</p>
                </div>

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
                        fontFamily: "'DM Sans', sans-serif",
                        marginBottom: 8
                    }}>Ready to Explore This Treatment?</div>
                    <div style={{
                        fontSize: 14,
                        color: "rgba(255,255,255,0.5)",
                        fontFamily: "'DM Sans', sans-serif",
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
                                fontFamily: "'DM Sans', sans-serif"
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
                                fontFamily: "'DM Sans', sans-serif",
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
