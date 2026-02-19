import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VeinIllustration } from '../common/MedicalIllustrations';
import { DOC } from '../../config/data';

/* ─── Q&A per treatment ─── */
const TREATMENT_QA = {
    "varicose-veins": [
        { q: "Will my varicose veins come back after treatment?", a: "Treated veins are permanently sealed and do not return. However, new veins can develop over time. Wearing compression stockings and staying active significantly reduces recurrence." },
        { q: "Is the procedure painful?", a: "Most patients experience minimal discomfort. Local anaesthesia is applied before the laser fibre insertion. You may feel a slight pressure, but no sharp pain." },
        { q: "Can I walk immediately after the procedure?", a: "Yes — walking is actively encouraged right after the procedure. This helps circulation and reduces clot risk. You can resume your daily routine the next day." },
        { q: "How long do I need to wear compression stockings?", a: "Typically 1-2 weeks post-procedure. Stockings help the treated area heal faster and reduce swelling." },
    ],
    "thyroid-nodule": [
        { q: "Will my thyroid function be affected?", a: "No. Unlike surgery, RFA precisely targets the nodule while preserving healthy thyroid tissue. Most patients retain full thyroid function after the procedure." },
        { q: "How much will the nodule shrink?", a: "On average, thyroid nodules shrink by 60-90% within 6-12 months after radiofrequency ablation. Results are gradual and progressive." },
        { q: "Is this safe for benign nodules causing no symptoms?", a: "Yes, especially when the nodule is growing or causing cosmetic concern. A biopsy is performed first to confirm benign nature before proceeding." },
        { q: "Will I need repeat procedures?", a: "Most nodules respond well to a single session. In rare cases of large nodules, a second treatment may be recommended." },
    ],
    "uterine-fibroid": [
        { q: "Can I still get pregnant after UFE?", a: "UFE is generally not recommended for women who wish to conceive in the future, as it may affect the uterine lining. Discuss your family planning goals with Dr. Harsha before deciding." },
        { q: "How soon will my heavy bleeding stop?", a: "Most patients notice significant improvement within 1-3 menstrual cycles. Complete resolution typically occurs within 3-6 months as the fibroid shrinks." },
        { q: "Is the procedure covered by insurance?", a: "Yes, UFE is recognised by most insurance providers in India as a standard treatment for uterine fibroids. Our team can assist with your documentation." },
        { q: "What is the recovery like at home?", a: "Expect mild to moderate cramping for the first 1-3 days, similar to a heavy period. Most women return to normal activities within 1-2 weeks." },
    ],
    "varicocele": [
        { q: "How long before I see improvement in sperm count?", a: "Sperm parameters typically improve 3-6 months after the procedure, as it takes one spermatogenesis cycle (approximately 72-90 days) to see changes." },
        { q: "Is embolisation better than surgery for varicocele?", a: "Studies show similar success rates, but embolisation has a faster recovery (3-5 days vs 2-3 weeks), no groin incision, and lower recurrence risk." },
        { q: "Can varicocele cause infertility in all men?", a: "Not all varicoceles cause infertility. Treatment is recommended when semen analysis shows abnormalities or when the varicocele causes significant pain." },
        { q: "Will I feel the coils or materials used inside?", a: "No. The tiny coils or glue used to block the abnormal vein are not felt. They permanently seal the vessel and are safe long-term." },
    ],
    "prostate-embolisation": [
        { q: "How is PAE different from TURP surgery?", a: "TURP requires anaesthesia, hospital stay and carries a risk of retrograde ejaculation. PAE is done through a pinhole in the wrist, with same-day discharge and no effect on sexual function." },
        { q: "When will I notice improvement in urination?", a: "Some improvement occurs within the first month. Significant improvement is typically seen 3-6 months after the procedure as the prostate gradually shrinks." },
        { q: "Is PAE suitable for all men with BPH?", a: "PAE works best for moderate to severe BPH. A prostate MRI and urine flow study are done beforehand. Very small prostates may be better suited to other treatments." },
        { q: "Will this affect my sexual function?", a: "PAE does not cause retrograde ejaculation (a common side effect of TURP surgery). Most studies show no negative impact on sexual function." },
    ],
    "peripheral-vascular": [
        { q: "What happens if I don't treat peripheral vascular disease?", a: "Untreated PVD can progress to critical limb ischaemia, non-healing wounds, and in severe cases, may lead to amputation. Early treatment is strongly advised." },
        { q: "Will I need stents, and are they permanent?", a: "Stents are placed only when necessary to keep the artery open. They are permanent, biocompatible devices that become part of the vessel wall." },
        { q: "Can PVD come back after angioplasty?", a: "Arteries can re-narrow over time (restenosis). Lifestyle changes, medication, and follow-up imaging help monitor and manage this risk." },
        { q: "Is this safe for diabetic patients?", a: "Yes. Diabetics with PVD benefit greatly from angioplasty. Restoring blood flow helps heal diabetic foot wounds and prevents amputation." },
    ],
    "musculoskeletal-pain": [
        { q: "What conditions does transarterial microembolisation treat?", a: "It is used for chronic knee pain (osteoarthritis), shoulder pain, tennis elbow, plantar fasciitis, and other conditions where abnormal neovascularisation causes pain." },
        { q: "How does embolisation relieve joint pain?", a: "Chronic pain is fed by abnormal blood vessels (neovascularisation). Microembolisation blocks these vessels, cutting off the pain signal source without harming healthy tissue." },
        { q: "How many sessions are required?", a: "Most patients require just one session. Effects are gradual, with significant improvement seen over 4-12 weeks as inflammation reduces." },
        { q: "Is this an alternative to knee replacement?", a: "For early to moderate osteoarthritis, yes. It delays or avoids the need for joint replacement. For severe end-stage arthritis, it may still provide pain relief." },
    ],
    "deep-vein-thrombosis": [
        { q: "What are the signs of DVT?", a: "Leg swelling, redness, warmth, and pain — especially in the calf — after prolonged rest or travel. DVT can be dangerous if the clot travels to the lungs." },
        { q: "Can DVT resolve on its own with blood thinners?", a: "Mild DVT can. However, large or extensive clots benefit from catheter-directed thrombolysis to dissolve the clot faster and prevent long-term vein damage." },
        { q: "What is post-thrombotic syndrome?", a: "A long-term complication of untreated DVT causing chronic leg pain, swelling, and skin changes. Early clot removal significantly reduces this risk." },
        { q: "How soon after diagnosis should I seek treatment?", a: "As soon as possible. Clots are easier to dissolve when fresh. Delayed treatment increases risk of permanent vein damage and pulmonary embolism." },
    ],
    "liver-cancer": [
        { q: "Is TACE a cure for liver cancer?", a: "TACE is primarily a treatment to control tumour growth and extend survival, particularly for patients not suitable for surgery. In some cases, it bridges patients to transplant." },
        { q: "What is the difference between TACE and TARE?", a: "TACE uses chemotherapy-loaded particles. TARE (radioembolisation) uses radioactive microspheres. The choice depends on tumour size, location, and liver function." },
        { q: "How many TACE sessions will I need?", a: "Typically 2-4 sessions at 4-8 week intervals, depending on tumour response on follow-up imaging." },
        { q: "Are there side effects after TACE?", a: "Post-embolisation syndrome — fever, fatigue, and mild abdominal discomfort — is common for 3-5 days. Serious complications are uncommon in experienced hands." },
    ],
    "dialysis-access": [
        { q: "My fistula is not working — what are the options?", a: "Fistuloplasty (balloon dilation) can reopen a narrowed fistula. If a clot is present, thrombolysis or thrombectomy may be needed — all done minimally invasively." },
        { q: "What is a permacath and when is it needed?", a: "A permacath is a tunnelled catheter placed in the neck vein for dialysis when a fistula is not yet ready or has failed. It provides immediate vascular access." },
        { q: "How long does fistuloplasty last?", a: "Results vary. Many patients have patency for 6-12 months, sometimes longer. Regular monitoring and timely intervention extend fistula life significantly." },
        { q: "Is this procedure done under general anaesthesia?", a: "No. Dialysis access procedures are done under local anaesthesia with mild sedation. They typically take 30-60 minutes with immediate post-procedure access use." },
    ],
    "gi-intervention": [
        { q: "What GI conditions can be treated without surgery?", a: "Gastrointestinal bleeding, bowel ischaemia, portal hypertension, biliary obstruction, and enteral feeding access can all be managed with IR procedures." },
        { q: "What is a TIPS procedure?", a: "Transjugular Intrahepatic Portosystemic Shunt — a procedure to reduce pressure in liver veins, treating complications of cirrhosis like bleeding varices and ascites." },
        { q: "Can GI bleeding be stopped without surgery?", a: "Yes. Embolisation of the bleeding vessel through a catheter can stop acute GI bleeding effectively, avoiding emergency surgery in most cases." },
        { q: "How is a feeding tube placed interventionally?", a: "Under ultrasound and fluoroscopic guidance, a feeding tube (gastrostomy or jejunostomy) is placed through a small puncture in the abdomen — no surgical incision needed." },
    ],
    "emergency-intervention": [
        { q: "What kind of emergencies does IR handle?", a: "Trauma haemorrhage, post-surgical bleeding, ruptured aneurysms, pelvic trauma, liver/splenic injuries, and acute limb ischaemia are common emergency IR cases." },
        { q: "How fast can an IR procedure be performed in an emergency?", a: "IR teams are available round the clock. Once imaging confirms the bleeding source, embolisation can be performed within minutes, often faster than reaching the operating theatre." },
        { q: "Is IR used alongside surgery in emergencies?", a: "Yes. Often IR is the first line — stopping the bleeding — after which surgical repair follows if needed. This staged approach saves lives in complex trauma." },
        { q: "What is endovascular aneurysm repair (EVAR)?", a: "EVAR is a minimally invasive procedure where a stent-graft is placed inside a ruptured or at-risk aortic aneurysm through a small groin puncture, avoiding open abdominal surgery." },
    ],
};

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

function QASection({ questions }) {
    const [open, setOpen] = useState(null);
    return (
        <div style={{ marginBottom: 36 }}>
            <h2 style={{
                fontFamily: "'Playfair Display', serif",
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
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: 14, fontWeight: 600,
                                color: "#071426", lineHeight: 1.4, flex: 1
                            }}>{item.q}</span>
                            <span style={{
                                fontSize: 18, color: "#0D9488", flexShrink: 0,
                                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                                transition: "transform 0.2s ease", display: "block"
                            }}>+</span>
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
                                        fontFamily: "'DM Sans', sans-serif",
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
