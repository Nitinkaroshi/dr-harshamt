import React from 'react';
import {
    Activity,
    HeartPulse,
    Droplet,
    Crosshair,
    Thermometer,
    Baby,
    ActivitySquare,
    AlertCircle,
    Syringe,
    Stethoscope,
    Microscope,
    ShieldAlert,
    ClipboardList,
    Search,
    Sparkles,
    Home,
    Trophy,
    FileText,
    GraduationCap,
    Medal,
    Building2,
    Globe,
    MapPin,
    BookOpen
} from 'lucide-react';

/* ─── DOCTOR INFORMATION ─── */
export const DOC = {
    name: "Dr. Harsha M T – Interventional Radiologist in Bengaluru",
    title: "Vascular & Interventional Radiologist | Vein Specialist | Endovascular Surgeon",
    tagline: "Minimally Invasive. Maximally Effective.",
    miniSub:"",
    sub: "Dr Harsha M T is a highly experienced Vascular and Interventional Radiologist in Bengaluru, known for performing advanced minimally invasive image-guided procedures that replace traditional open surgeries. With extensive international training and experience, Dr Harsha specializes in treating complex vascular and non-vascular conditions using advanced imaging technologies such as CT, Ultrasound, and Fluoroscopy.",
    quals: "MBBS, MD – Radio-Diagnosis (PGIMER Chandigarh), FVIR (AIIMS Rishikesh), FVIR (SNUH, South Korea), EBIR, EDiR, Dip. ICRI",
    qualsBadge: "MBBS, MD, FVIR (AIIMS), FVIR (SNUH), EBIR, EDiR, Dip. ICRI",
    director: "Dr Harsha M T is the Director of Venuva Vascular Center, a specialized center focused on minimally invasive vascular and interventional radiology treatments. The center offers advanced procedures designed to treat conditions through pinhole-sized access instead of large surgical incisions, allowing patients to return to normal life quickly.",
    shortBio: "His patient-focused approach combines the precision of radiology with the expertise of a surgeon to deliver effective treatments with minimal pain, faster recovery, and no large surgical scars. Dr Harsha has helped thousands of patients avoid major surgery by offering safe, minimally invasive alternatives.",
    h2: "Advanced Interventional Radiology Treatments in Bengaluru",
    exp: "8+",
    procs: "8500+",
    certs: "6",
    countries: "3",
    phone: "+91 7483749378",
    wa: "917483749378",
    loc: "SPARSH Hospital & Venuva Vascular Center, Bengaluru",
    time: "Mon – Sat",
    photo: "https://www.sparshhospital.com/wp-content/uploads/2024/05/Dr.-Harsha-M-T.jpg",
    photoApron: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=800&fit=crop",
    photoScrubs: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&h=800&fit=crop",
    photoSuit: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=600&h=800&fit=crop",
};

/* ─── IMAGES ─── */
export const IMG = {
    hero: "https://images.unsplash.com/photo-1551190822-a9ce113ac100?w=1400&h=900&fit=crop",
    varicose: "/services/VARICOSE VEINS.webp",
    fibroid: "/services/UTERINE FIBROID EMBOLISATION.webp",
    thyroid: "/services/THYROID NODULE ABLATION.webp",
    vascular: "/services/PERIPHERAL VASCULAR DISEASE 1.webp",
    vascular2: "/services/PERIPHERAL VASCULAR DISEASE 2.webp",
    liver: "/services/LIVER CANCER INTERVENTION.webp",
    dialysis: "/services/DIALYSIS ACCESS CARE.webp",
    prostate: "/services/PROSTATE ARTERY EMBOLISATION.webp",
    varicocele: "/services/Varicocele Embolisation.webp",
    musculoskeletal: "/services/CHRONIC MUSCULOSKELETAL PAIN.webp",
    microembolisation: "/services/TRANSARTERIAL MICROEMBOLISATION.webp",
    dvt: "/services/DEEP VEIN THROMBOSIS.webp",
    gi: "/services/GI INTERVENTION.webp",
    emergency: "/services/EMERGENCY INTERVENTION.webp",
    about: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&h=600&fit=crop",
    ir: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&h=500&fit=crop",
    sparsh: "https://www.sparshhospital.com/wp-content/uploads/2025/06/new-logo.svg",
    gallery1: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
    gallery2: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=400&h=300&fit=crop",
    gallery3: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop",
    gallery4: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&h=300&fit=crop",
    blog1: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=800&h=500&fit=crop",
    blog2: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&h=500&fit=crop",
    blog3: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop",
    blog4: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=500&fit=crop",
    blog5: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&h=500&fit=crop",
    blog6: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=500&fit=crop",
};

/* ─── NAVIGATION ─── */
export const NAV = [
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "#blog" },
    { label: "FAQ", href: "#faq" },
];

/* ─── CREDENTIALS ─── */
export const CREDS = [
    { inst: "PGIMER Chandigarh", desc: "MD Radio-Diagnosis" },
    { inst: "AIIMS Rishikesh", desc: "Fellowship in Vascular & IR" },
    { inst: "SNUH, South Korea", desc: "Advanced Vascular Interventions" },
    { inst: "IEO Milan, Italy", desc: "Thyroid Thermal Ablation" },
    { inst: "EBIR", desc: "European Board of IR" },
    { inst: "EDiR", desc: "European Diploma in Radiology" },
    { inst: "Dip. ICRI", desc: "Indian College of Radiology" },
];

/* ─── SERVICES ─── */
export const SERVICES = [
    {
        icon: Activity,
        t: "Varicose Veins Treatment",
        sub: "EVLA / Venaseal",
        img: IMG.varicose,
        hl: true,
        id: "varicose-veins",
        d: "A minimally invasive laser treatment for varicose veins in Bengaluru that eliminates painful, bulging veins in the legs. This walk-in, walk-out procedure requires no surgery or bed rest, and most patients resume normal activities the next day.",
    },
    {
        icon: Thermometer,
        t: "Thyroid Nodule Ablation",
        sub: "Radiofrequency / Thermal Ablation",
        img: IMG.thyroid,
        hl: false,
        id: "thyroid-nodule",
        d: "A scar-free treatment that shrinks thyroid nodules without removing the thyroid gland. The procedure uses heat energy delivered through a thin needle and is performed under local anaesthesia.",
    },
    {
        icon: Stethoscope,
        t: "Uterine Fibroid Embolisation",
        sub: "UFE — Uterus Preserved",
        img: IMG.fibroid,
        hl: false,
        id: "uterine-fibroid",
        d: "A highly effective uterine fibroid treatment in Bengaluru that blocks the blood supply to fibroids through a tiny catheter, causing them to shrink naturally while preserving the uterus.",
    },
    {
        icon: Baby,
        t: "Varicocele Embolisation",
        sub: "Male Infertility Treatment",
        img: IMG.varicocele,
        hl: false,
        id: "varicocele",
        d: "A minimally invasive procedure that treats varicocele through a small pinhole in the wrist or groin. This treatment improves blood circulation in the veins and may improve sperm count and fertility.",
    },
    {
        icon: HeartPulse,
        t: "Peripheral Vascular Disease",
        sub: "Angioplasty & Stenting",
        img: IMG.vascular,
        hl: false,
        id: "peripheral-vascular",
        d: "A modern treatment used to restore blood flow in blocked arteries of the legs using balloons and stents, avoiding major bypass surgery.",
    },
    {
        icon: Droplet,
        t: "Deep Vein Thrombosis (DVT)",
        sub: "DVT — Clot Treatment",
        img: IMG.dvt,
        hl: false,
        id: "deep-vein-thrombosis",
        d: "Minimally invasive techniques are used to remove dangerous blood clots from deep veins, helping prevent life-threatening complications such as pulmonary embolism.",
    },
    {
        icon: ActivitySquare,
        t: "Chronic Musculoskeletal Pain",
        sub: "Transarterial Microembolisation",
        img: IMG.musculoskeletal,
        hl: false,
        id: "musculoskeletal-pain",
        d: "A breakthrough treatment that reduces abnormal blood vessels responsible for chronic joint pain, offering long-lasting relief without surgery.",
    },
    {
        icon: Microscope,
        t: "Liver Cancer Interventions",
        sub: "TACE / TARE / Ablation",
        img: IMG.liver,
        hl: false,
        id: "liver-cancer",
        d: "Targeted therapies deliver medication or radiation directly to cancer cells through blood vessels, minimizing damage to surrounding healthy tissue.",
    },
    {
        icon: Crosshair,
        t: "Enlarged Prostate (BPH)",
        sub: "Prostate Artery Embolisation",
        img: IMG.prostate,
        hl: false,
        id: "prostate-embolisation",
        d: "A non-surgical treatment that shrinks the prostate gland through a tiny catheter, helping patients avoid traditional prostate surgery and catheter use.",
    },
    {
        icon: Syringe,
        t: "Dialysis Access Care",
        sub: "Fistuloplasty & Permacath",
        img: IMG.dialysis,
        hl: false,
        id: "dialysis-access",
        d: "These minimally invasive procedures help maintain and restore dialysis access for patients with kidney failure.",
    },
    {
        icon: AlertCircle,
        t: "Gastrointestinal (GI) Interventions",
        sub: "Gastrointestinal Procedures",
        img: IMG.gi,
        hl: false,
        id: "gi-intervention",
        d: "Advanced treatments for gastrointestinal bleeding, drainage, and feeding tube placement without complex abdominal surgery.",
    },
    {
        icon: ShieldAlert,
        t: "Emergency Vascular Procedures",
        sub: "Trauma & Haemorrhage Control",
        img: IMG.emergency,
        hl: false,
        id: "emergency-intervention",
        d: "Life-saving procedures performed to control internal bleeding and vascular emergencies quickly and effectively.",
    },
];

/* ─── LOCATIONS ─── */
export const LOCATIONS = [
    {
        name: "Venuva Vascular Centre",
        address: "Malleshwaram, Bengaluru",
        time: "5:00 PM – 8:00 PM",
        link: "https://maps.app.goo.gl/9c1a1a1a1a1a1a1a1"
    },
    {
        name: "Sparsh Hospital",
        address: "Infantry Road, Bengaluru",
        time: "10:00 AM – 4:00 PM",
        link: "https://maps.app.goo.gl/9c1a1a1a1a1a1a1a1"
    },
    {
        name: "Sparsh Hospital",
        address: "Yelahanka, Bengaluru",
        time: "By Appointment",
        link: "https://maps.app.goo.gl/9c1a1a1a1a1a1a1a1"
    }
];

/* ─── WHY CHOOSE DR. HARSHA ─── */
export const WHY_DR_HARSHA = [
    { t: "No large incisions", d: "Procedures performed through a tiny pinhole puncture." },
    { t: "Minimal pain and bleeding", d: "Reduced trauma to surrounding tissues compared to surgery." },
    { t: "No visible scars", d: "Leaves no stitches or permanent surgical marks." },
    { t: "Short hospital stay", d: "Often go home the same day or next morning." },
    { t: "Rapid recovery", d: "Return to normal activity within 24-48 hours." },
    { t: "Highly precise treatment", d: "Guided by real-time high-resolution imaging." },
];

/* ─── JOURNEY STEPS ─── */
export const STEPS = [
    { s: "01", t: "Consultation", d: "Discuss your condition and explore options", i: ClipboardList },
    { s: "02", t: "Diagnosis", d: "Advanced imaging for precise planning", i: Search },
    { s: "03", t: "Pinhole Procedure", d: "No cuts, no stitches, no general anaesthesia", i: Sparkles },
    { s: "04", t: "Go Home", d: "Same-day or next-morning discharge", i: Home },
];

/* ─── BEFORE/AFTER OUTCOMES ─── */
export const BEFORE_AFTER = [
    {
        condition: "Varicose Veins Treatment",
        desc: "Painful leg veins",
        before: "Visible bulging veins, heaviness, and difficulty standing for long periods.",
        after: "Patients with painful leg veins experience relief after laser EVLA procedures, allowing them to return to normal activity within a day."
    },
    {
        condition: "Uterine Fibroid Embolisation",
        desc: "Heavy bleeding and fibroids",
        before: "Severe bleeding and pain, facing potential hysterectomy surgery.",
        after: "Women suffering from heavy bleeding and fibroids can preserve their uterus and avoid hysterectomy through UFE treatment."
    },
    {
        condition: "Thyroid Nodule Ablation",
        desc: "Thyroid nodules",
        before: "Growing lump in the neck, fear of neck surgery and permanent scars.",
        after: "Patients with thyroid nodules can undergo scar-free treatment using radiofrequency ablation without thyroid surgery."
    },
    {
        condition: "Varicocele Embolisation",
        desc: "Varicocele treatment",
        before: "Low sperm count and scrotal pain, considering invasive surgery.",
        after: "Men facing infertility due to varicocele can improve sperm count through minimally invasive embolisation procedures."
    }
];

/* ─── TESTIMONIALS ─── */
export const TESTIMONIALS = [
    {
        q: "⭐ “The laser treatment for my varicose veins was quick and painless. I walked out of the hospital the same day.”",
        a: "Verified Patient",
        p: "",
        r: 5
    },
    {
        q: "⭐ “UFE helped me avoid hysterectomy and solved my fibroid problem without surgery.”",
        a: "Verified Patient",
        p: "",
        r: 5
    },
    {
        q: "⭐ “Thyroid nodule ablation reduced my swelling with no scar and no surgery.”",
        a: "Verified Patient",
        p: "",
        r: 5
    }
];

/* ─── FAQS ─── */
export const FAQS = [
    {
        q: "What is Interventional Radiology?",
        a: "Interventional radiology is a medical specialty that uses advanced imaging guidance to perform minimally invasive procedures through tiny needle punctures."
    },
    {
        q: "Is the procedure painful?",
        a: "Most procedures are performed under local anesthesia and involve minimal discomfort."
    },
    {
        q: "How long is recovery?",
        a: "Many patients can return home the same day and resume daily activities quickly."
    },
    {
        q: "Will there be scars?",
        a: "No. Most procedures require only a tiny pinhole puncture, leaving no visible scars."
    }
];

/* ─── TREATMENTS ─── */
export const TREATMENTS = {
    "varicose-veins": {
        icon: Activity,
        title: "Varicose Veins Treatment",
        sub: "Laser Treatment (EVLA)",
        hero: "/services/VARICOSE VEINS.webp",
        stats: [
            { v: "98%", l: "Success Rate" },
            { v: "30min", l: "Procedure Time" },
            { v: "Same Day", l: "Discharge" }
        ],
        overview: "Varicose veins are enlarged, twisted veins that usually appear on the legs due to poor blood circulation. They occur when the valves inside the veins stop functioning properly, causing blood to pool inside the vein instead of flowing back to the heart. This condition may cause symptoms such as leg pain, swelling, heaviness, itching, skin discoloration, and visible bulging veins.",
        why: "Traditional varicose vein surgery often requires large incisions, general anaesthesia, and longer recovery periods. Modern EVLA laser treatment is performed through a tiny needle puncture under local anaesthesia. Benefits include no large surgical cuts, no stitches, minimal pain, and faster recovery. Most patients return to normal activities within 24 hours.",
        how: [
            "Local anaesthesia is applied to the affected vein.",
            "A thin laser fiber is inserted through a small needle puncture in the skin.",
            "Laser energy is delivered inside the vein, sealing the diseased vein from within.",
            "Blood automatically reroutes through healthy veins.",
            "The procedure usually takes 30–45 minutes, and patients can walk immediately after treatment."
        ],
        comparison: {
            title: "Surgery vs Pinhole Treatment",
            headers: ["Traditional Surgery", "Pinhole EVLA Treatment"],
            rows: [
                ["Large incision (5–15 cm)", "Tiny puncture (2–3 mm)"],
                ["Requires stitches", "No stitches"],
                ["Hospital stay required", "Same day discharge"],
                ["Longer recovery", "Faster recovery"]
            ]
        },
        recovery: "Recovery after EVLA treatment is quick and comfortable. Patients can walk immediately after the procedure. Most return to work within 1–2 days. Compression stockings are worn for 1–2 weeks, and regular exercise can resume within one week.",
        suitable: "Varicose vein treatment is recommended for patients who experience leg pain, swelling, visible bulging veins, or skin discoloration. A Doppler ultrasound scan is usually performed to evaluate the veins and determine the best treatment option.",
        seoTitle: "Varicose Veins Treatment in Bengaluru | EVLA Laser Treatment | Dr Harsha M T",
        seoDescription: "Get advanced varicose veins treatment in Bengaluru with EVLA laser therapy by Dr Harsha M T. Walk-in walk-out procedure with minimal pain, no surgery, and faster recovery."
    },
    "uterine-fibroid": {
        icon: Stethoscope,
        title: "Uterine Fibroid Embolisation",
        sub: "Non-Surgical Fibroid Treatment",
        hero: "/services/UTERINE FIBROID EMBOLISATION.webp",
        stats: [
            { v: "90%", l: "Success Rate" },
            { v: "45min", l: "Procedure Time" },
            { v: "Next Day", l: "Discharge" }
        ],
        overview: "Uterine fibroids are non-cancerous growths that develop in the uterus, affecting up to 70% of women by age 50. Common symptoms include heavy or prolonged menstrual bleeding, pelvic pain, frequent urination, and abdominal swelling.",
        why: "Traditional treatments like hysterectomy or myomectomy require surgery and longer recovery. UFE is a minimally invasive pinhole procedure that treats fibroids by blocking their blood supply. Benefits include no major surgery, uterus preserved, faster recovery, and no visible surgical scars.",
        how: [
            "A small catheter is inserted through an artery in the wrist or groin.",
            "Using X-ray imaging, the catheter is guided to the uterine arteries supplying the fibroids.",
            "Tiny embolisation particles are injected into the artery.",
            "These particles block the blood supply to the fibroid.",
            "Without blood supply, the fibroid gradually shrinks over 3–6 months."
        ],
        comparison: {
            title: "Surgery vs Pinhole UFE Treatment",
            headers: ["Traditional Fibroid Surgery", "UFE Pinhole Treatment"],
            rows: [
                ["Large abdominal incision", "Tiny 2–3 mm puncture"],
                ["General anaesthesia", "Local anaesthesia"],
                ["Hospital stay", "Short stay"],
                ["Longer recovery", "Faster recovery"],
                ["Possible uterus removal", "Uterus preserved"]
            ]
        },
        recovery: "Recovery after UFE is generally smooth. Most patients stay in the hospital overnight. Mild cramping may occur for a few days, and normal activities usually resume within 1–2 weeks. Fibroids continue shrinking gradually over several months.",
        suitable: "UFE is recommended for women with heavy bleeding, pelvic pain, or those who want to avoid hysterectomy. It may not be recommended for women actively trying to conceive.",
        seoTitle: "Uterine Fibroid Embolisation in Bengaluru | UFE Treatment | Dr Harsha M T",
        seoDescription: "Get advanced uterine fibroid treatment in Bengaluru with Uterine Fibroid Embolisation (UFE) by Dr Harsha M T. Minimally invasive procedure with no surgery and faster recovery."
    },
    "thyroid-nodule": {
        icon: Thermometer,
        title: "Thyroid Nodule Ablation",
        sub: "Radiofrequency Ablation (RFA)",
        hero: "/services/THYROID NODULE ABLATION.webp",
        stats: [
            { v: "70%", l: "Volume Reduction" },
            { v: "20min", l: "Procedure Time" },
            { v: "Same Day", l: "Discharge" }
        ],
        overview: "Thyroid nodules are abnormal lumps in the thyroid gland. While most are benign, they can cause neck swelling, difficulty swallowing, voice changes, or cosmetic concerns. Traditional treatment often involves thyroid surgery with general anaesthesia and permanent neck incisions.",
        why: "Radiofrequency Ablation is a modern image-guided treatment performed using a thin needle instead of surgery. Benefits include no surgical incision on the neck, no stitches or visible scar, preservation of the thyroid gland, and same-day discharge.",
        how: [
            "Local anaesthesia is applied to numb the treatment area.",
            "A thin RFA needle is inserted into the thyroid nodule using ultrasound guidance.",
            "Radiofrequency energy generates controlled heat that destroys the nodule tissue.",
            "The treated nodule gradually shrinks as the body naturally absorbs the tissue.",
            "The procedure usually takes 15–30 minutes, and patients can go home the same day."
        ],
        comparison: {
            title: "Surgery vs Pinhole RFA Treatment",
            headers: ["Traditional Thyroid Surgery", "RFA Pinhole Treatment"],
            rows: [
                ["Neck incision (5–10 cm)", "Needle puncture (2–3 mm)"],
                ["General anaesthesia", "Local anaesthesia"],
                ["Visible scar", "No visible scar"],
                ["Possible thyroid removal", "Thyroid preserved"],
                ["Hospital stay required", "Same day discharge"]
            ]
        },
        recovery: "Recovery after RFA treatment is typically quick and comfortable. Patients can go home immediately, with mild neck discomfort for 1–2 days and a return to normal activities the next day. Follow-up ultrasound monitors nodule shrinkage.",
        suitable: "RFA is recommended for benign thyroid nodules confirmed by biopsy that cause neck swelling, discomfort, or cosmetic concerns.",
        seoTitle: "Thyroid Nodule Ablation in Bengaluru | Radiofrequency Ablation (RFA) | Dr Harsha M T",
        seoDescription: "Get scar-free thyroid nodule treatment in Bengaluru with Radiofrequency Ablation (RFA) by Dr Harsha M T. Minimally invasive procedure with no surgery, no thyroid removal, and faster recovery."
    },
    "varicocele": {
        icon: Baby,
        title: "Varicocele Embolisation",
        sub: "Minimally Invasive Treatment",
        hero: "/services/Varicocele Embolisation.webp",
        stats: [
            { v: "95%", l: "Success Rate" },
            { v: "30min", l: "Procedure Time" },
            { v: "Same Day", l: "Discharge" }
        ],
        overview: "Varicocele is an enlargement of veins in the scrotum, which can lead to pain, discomfort, testicular shrinkage, or fertility problems. It occurs when valves inside the veins do not function properly, causing blood to pool.",
        why: "Traditional varicocele surgery requires an incision in the groin or abdomen and a longer recovery period. Varicocele embolisation is a modern pinhole procedure performed through a small puncture in the wrist or groin vein. Benefits include no surgical incision, no stitches, faster recovery, and same-day discharge.",
        how: [
            "A thin catheter is inserted through a vein in the wrist or groin.",
            "Using X-ray imaging, the catheter is guided to the testicular vein responsible for the varicocele.",
            "Tiny coils or medical glue are placed inside the abnormal vein.",
            "These materials block the vein, preventing abnormal blood flow.",
            "Blood flow naturally reroutes through healthy veins, relieving pressure in the scrotal veins."
        ],
        comparison: {
            title: "Surgery vs Pinhole Varicocele Embolisation",
            headers: ["Traditional Surgery", "Varicocele Embolisation"],
            rows: [
                ["Groin incision", "Tiny puncture (2–3 mm)"],
                ["Requires stitches", "No stitches"],
                ["Longer recovery", "Faster recovery"],
                ["Hospital stay", "Same-day discharge"]
            ]
        },
        recovery: "Recovery after embolisation is generally quick and comfortable. Patients usually go home the same day. Mild discomfort may occur for 1–2 days, and light activities can resume within 3–5 days.",
        suitable: "Varicocele embolisation is recommended for men who experience testicular pain, infertility linked to varicocele, or abnormal semen analysis results.",
        seoTitle: "Varicocele Treatment in Bengaluru | Varicocele Embolisation | Dr Harsha M T",
        seoDescription: "Advanced varicocele treatment in Bengaluru with minimally invasive varicocele embolisation by Dr Harsha M T. No surgery, faster recovery, and improved fertility outcomes."
    },
    "peripheral-vascular": {
        icon: Activity,
        title: "Peripheral Vascular Disease Treatment",
        sub: "Angioplasty & Stenting",
        hero: "/services/PERIPHERAL VASCULAR DISEASE.webp",
        stats: [
            { v: "90%", l: "Success Rate" },
            { v: "45-90m", l: "Procedure Time" },
            { v: "Fast", l: "Recovery" }
        ],
        overview: "Peripheral Vascular Disease (PVD) occurs when arteries supplying blood to the legs become narrowed or blocked due to plaque buildup. This condition reduces blood flow and can cause symptoms such as leg pain, cramping, numbness, or non-healing wounds.",
        why: "Traditional bypass surgery for blocked arteries requires large incisions and longer recovery times. Angioplasty is a minimally invasive procedure performed through a small puncture in the wrist or groin. Benefits include no large surgical incision, minimal pain, faster recovery, and improved blood circulation.",
        how: [
            "A thin catheter is inserted through a small puncture in the wrist or groin artery.",
            "Using X-ray imaging, the catheter is guided to the blocked artery in the leg.",
            "A small balloon attached to the catheter is inflated to open the blocked artery.",
            "In some cases, a stent (metal mesh tube) is placed to keep the artery open.",
            "The procedure usually takes 45–90 minutes."
        ],
        comparison: {
            title: "Surgery vs Pinhole Angioplasty",
            headers: ["Traditional Bypass Surgery", "Angioplasty Pinhole Treatment"],
            rows: [
                ["Large incision", "Tiny 2–3 mm puncture"],
                ["Requires stitches", "No stitches"],
                ["Longer hospital stay", "Short stay"],
                ["Longer recovery", "Faster recovery"]
            ]
        },
        recovery: "Recovery after angioplasty is usually quick. Most patients stay in the hospital overnight. Walking is encouraged soon after the procedure, and normal daily activities can resume within one week.",
        suitable: "Angioplasty is recommended for patients with leg pain while walking (claudication), non-healing wounds or ulcers, or reduced blood flow due to arterial blockage.",
        seoTitle: "Peripheral Vascular Disease Treatment in Bengaluru | Angioplasty & Stenting | Dr Harsha M T",
        seoDescription: "Get advanced Peripheral Vascular Disease (PVD) treatment in Bengaluru with angioplasty and stenting by Dr Harsha M T. Minimally invasive procedure that restores blood flow without open surgery."
    },
    "deep-vein-thrombosis": {
        icon: Droplet,
        title: "Deep Vein Thrombosis Treatment",
        sub: "Catheter Directed Thrombolysis",
        hero: "/services/DEEP VEIN THROMBOSIS.webp",
        stats: [
            { v: "95%", l: "Clot Resolution" },
            { v: "Low", l: "PTS Risk" },
            { v: "2-4h", l: "Procedure Time" }
        ],
        overview: "Deep Vein Thrombosis (DVT) occurs when a blood clot forms in the deep veins of the leg, blocking normal blood flow. If untreated, the clot can travel to the lungs and cause a pulmonary embolism, which is a potentially life-threatening condition.",
        why: "Traditional treatment with blood thinners prevents clots from growing but does not actively remove existing clots. Catheter-directed thrombolysis delivers clot-dissolving medication directly into the clot. Benefits include faster clot removal, reduced swelling, and lower risk of long-term complications like post-thrombotic syndrome.",
        how: [
            "A small catheter is inserted into the affected vein through a tiny puncture behind the knee or groin.",
            "Using ultrasound and X-ray guidance, the catheter is positioned directly inside the blood clot.",
            "Clot-dissolving medication (thrombolytic drug) is slowly infused into the clot.",
            "In some cases, mechanical thrombectomy devices are used to break up and remove the clot.",
            "A temporary IVC filter may be placed to prevent clot fragments from reaching the lungs."
        ],
        comparison: {
            title: "Surgery vs Pinhole DVT Treatment",
            headers: ["Traditional Surgery", "Catheter Treatment"],
            rows: [
                ["Large surgical incision", "Tiny 2–3 mm puncture"],
                ["Stitches required", "No stitches"],
                ["Longer recovery", "Faster recovery"],
                ["Higher surgical risk", "Minimally invasive"]
            ]
        },
        recovery: "Patients are monitored in the hospital for 2–3 days after the procedure. Recovery includes blood-thinning medications for 3–6 months, wearing compression stockings, and a gradual return to normal activity within 1–2 weeks.",
        suitable: "Catheter-directed thrombolysis is recommended for patients with extensive DVT of the thigh or pelvis, severe swelling, or high risk of post-thrombotic syndrome.",
        seoTitle: "Deep Vein Thrombosis Treatment in Bengaluru | DVT Specialist | Dr Harsha M T",
        seoDescription: "Get advanced Deep Vein Thrombosis (DVT) treatment in Bengaluru with catheter-directed thrombolysis by Dr Harsha M T. Minimally invasive clot removal to prevent pulmonary embolism."
    },
    "musculoskeletal-pain": {
        icon: ActivitySquare,
        title: "Chronic Musculoskeletal Pain Treatment",
        sub: "Transarterial Microembolisation",
        hero: "/services/CHRONIC PAIN.webp",
        stats: [
            { v: "Same Day", l: "Discharge" },
            { v: "30-60m", l: "Procedure Time" },
            { v: "Long", l: "Pain Relief" }
        ],
        overview: "Chronic musculoskeletal pain affects millions of people and commonly involves conditions such as knee osteoarthritis, frozen shoulder, tennis elbow, and plantar fasciitis. Recent research shows that this pain is often caused by abnormal blood vessel growth (neovascularisation) that triggers persistent inflammation.",
        why: "Unlike traditional treatments like pain medications or steroid injections that offer temporary relief, transarterial microembolisation targets the underlying cause of inflammation by blocking abnormal blood vessels. Benefits include no surgery, no long-term steroids, same-day discharge, and long-lasting relief.",
        how: [
            "A microcatheter is inserted through a small puncture in the wrist under local anaesthesia.",
            "Using real-time imaging guidance, the catheter is navigated to abnormal blood vessels near the painful joint.",
            "Tiny particles called microspheres are injected into these abnormal vessels.",
            "These particles block the abnormal blood supply responsible for inflammation.",
            "The procedure usually takes 30–60 minutes."
        ],
        comparison: {
            title: "Surgery vs Pinhole Microembolisation",
            headers: ["Traditional Surgery", "Microembolisation"],
            rows: [
                ["Large incision", "Tiny 2–3 mm puncture"],
                ["Stitches required", "No stitches"],
                ["Longer hospital stay", "Same-day discharge"],
                ["Longer recovery", "Faster recovery"]
            ]
        },
        recovery: "Patients usually go home the same day. Pain relief develops gradually over 4–12 weeks. Most patients return to daily activities within a few days, with follow-up evaluations to ensure effectiveness.",
        suitable: "Microembolisation is recommended for patients with chronic joint or tendon pain that has not improved with conservative treatments like physiotherapy.",
        seoTitle: "Chronic joint pain Treatment in Bengaluru | TAME Procedure | Dr Harsha M T",
        seoDescription: "Get advanced treatment for chronic knee, shoulder, and tendon pain in Bengaluru with transarterial microembolisation (TAME) by Dr Harsha M T."
    },
    "liver-cancer": {
        icon: Microscope,
        title: "Liver Cancer Intervention",
        sub: "TACE, TARE & Ablation",
        hero: "/services/LIVER CANCER.webp",
        stats: [
            { v: "Targeted", l: "Therapy" },
            { v: "60min", l: "Procedure Time" },
            { v: "Min", l: "Stay" }
        ],
        overview: "Liver cancer interventions are suitable for patients where traditional surgery may not always be possible. These minimally invasive procedures target the tumour while sparing healthy liver tissue.",
        why: "Traditional liver surgery involves large incisions and long hospital stays. Interventional radiology (IR) offers a needle-puncture solution with same-day or next-day discharge, preserving healthy liver tissue.",
        how: [
            "A catheter is inserted through a small groin or wrist puncture under local anaesthesia.",
            "Using X-ray guidance, the catheter reaches the artery feeding the liver tumour.",
            "Choice of TACE (chemotherapy beads), TARE (radioactive microspheres), or Ablation (heat/microwave energy).",
            "The procedure typically takes 60 minutes."
        ],
        comparison: {
            title: "Surgery vs Pinhole IR Treatment",
            headers: ["Traditional Surgery", "Pinhole IR Treatment"],
            rows: [
                ["Large incision", "Tiny 2–3 mm puncture"],
                ["Stitches required", "No stitches"],
                ["Long hospital stay", "1 night or same-day discharge"],
                ["Long recovery", "Faster recovery"]
            ]
        },
        recovery: "Most patients stay overnight for observation. Mild post-embolisation syndrome (fever, fatigue) may last 3–5 days. Follow-up imaging is performed at 4–6 weeks to assess tumour response.",
        suitable: "These interventions are suitable for patients not eligible for surgery, those awaiting liver transplant, or those with liver metastases.",
        seoTitle: "Liver Cancer Treatment in Bengaluru | TACE & TARE Specialist | Dr Harsha M T",
        seoDescription: "Get advanced minimally invasive liver cancer treatment in Bengaluru including TACE, TARE, and RFA ablation by Dr Harsha M T."
    },
    "prostate-embolisation": {
        icon: Crosshair,
        title: "Prostate Artery Embolisation (PAE)",
        sub: "Non-surgical BPH Treatment",
        hero: "/services/PROSTATE EMBOLISATION.webp",
        stats: [
            { v: "Same Day", l: "Discharge" },
            { v: "No", l: "Catheter" },
            { v: "Min", l: "Invasive" }
        ],
        overview: "Benign Prostatic Hyperplasia (BPH) is an enlargement of the prostate gland that causes urinary symptoms. Traditional TURP surgery is invasive and requires general anaesthesia and catheterization.",
        why: "PAE is a non-surgical alternative that shrinks the prostate through a tiny wrist puncture. Benefits include local anaesthesia, no catheter, same-day discharge, and gradual relief of urinary symptoms.",
        how: [
            "A catheter is inserted through a small wrist puncture.",
            "Using X-ray guidance, the catheter reaches the prostate arteries.",
            "Tiny particles are injected to block blood flow to the prostate.",
            "The prostate gradually shrinks over 3–6 months.",
            "Procedure duration: 60–90 minutes."
        ],
        comparison: {
            title: "Surgery vs Pinhole IR Procedure",
            headers: ["Traditional Surgery (TURP)", "Pinhole PAE"],
            rows: [
                ["Large incision / catheter", "Tiny 2–3 mm wrist puncture"],
                ["Requires anaesthesia", "Local anaesthesia"],
                ["Hospital stay required", "Same-day discharge"],
                ["Longer recovery", "Gradual improvement, faster return"]
            ]
        },
        recovery: "Patients go home the same day. Improvement in urination is gradual over 3–6 months, and normal daily activities can be resumed immediately.",
        suitable: "PAE is suitable for men with moderate to severe BPH symptoms who wish to avoid surgical procedures.",
        seoTitle: "Prostate Artery Embolisation in Bengaluru | BPH Treatment | Dr Harsha M T",
        seoDescription: "Get advanced non-surgical BPH treatment in Bengaluru with Prostate Artery Embolisation (PAE) by Dr Harsha M T. Shrink the prostate without surgery."
    },
    "dialysis-access": {
        icon: Syringe,
        title: "Dialysis Access Care",
        sub: "Fistuloplasty & Permacath",
        hero: "/services/DIALYSIS ACCESS.webp",
        stats: [
            { v: "Same Day", l: "Discharge" },
            { v: "30-60m", l: "Duration" },
            { v: "Pinhole", l: "Access" }
        ],
        overview: "For dialysis patients, vascular access is a critical lifeline. AV fistulas and grafts may narrow or clot over time, leading to inadequate dialysis. Dr Harsha MT provides minimally invasive solutions to restore and maintain access.",
        why: "Traditional surgery for fistula revision can be complex and may compromise existing access. IR procedures offer the advantage of a tiny 2-3 mm puncture, local anaesthesia, and same-day discharge while preserving existing access.",
        how: [
            "Access site is punctured under ultrasound guidance with local anaesthesia.",
            "A fistulogram maps the access circuit to identify stenosis or clots.",
            "Fistuloplasty: Balloon catheter dilates the narrowed segment.",
            "Thrombectomy: Clot is removed using drugs or mechanical devices.",
            "Permacath Placement: Tunnelled catheter is inserted if immediate dialysis is needed."
        ],
        comparison: {
            title: "Surgery vs Pinhole IR Procedure",
            headers: ["Traditional Surgery", "Pinhole IR Procedure"],
            rows: [
                ["Large incision", "Tiny 2–3 mm puncture"],
                ["General anaesthesia", "Local anaesthesia"],
                ["Hospital stay required", "Same-day discharge"],
                ["Longer recovery", "Minimal downtime"],
                ["Risk of losing access", "Preserves existing access"]
            ]
        },
        recovery: "Immediate or next-day dialysis using the treated access. Minimal downtime, with regular Doppler ultrasound follows-up to detect future problems.",
        suitable: "Suitable for all dialysis patients with malfunctioning fistula, graft, or catheter issues like poor flow or swelling.",
        seoTitle: "Dialysis Access Care in Bengaluru | Fistuloplasty Specialist | Dr Harsha M T",
        seoDescription: "Maintain and restore your dialysis access with minimally invasive fistuloplasty and permacath placement by Dr Harsha M T in Bengaluru."
    },
    "gi-intervention": {
        icon: AlertCircle,
        title: "Gastrointestinal (GI) Intervention",
        sub: "Image-Guided Procedures",
        hero: "/services/GI INTERVENTION.webp",
        stats: [
            { v: "Min", l: "Trauma" },
            { v: "30-60m", l: "Duration" },
            { v: "Fast", l: "Recovery" }
        ],
        overview: "GI conditions such as bleeding, biliary obstruction, and portal hypertension can often be managed without open surgery through precise image-guided treatments.",
        why: "Pinhole GI intervention offers minimal trauma, faster recovery, and is safe even for high-risk patients. Short hospital stays and local anaesthesia are major advantages.",
        how: [
            "A catheter is inserted through a small puncture under imaging guidance.",
            "GI Bleeding: Vessel is located and embolised with coils or particles.",
            "Biliary Obstruction: Stent or drainage catheter is placed to relieve jaundice.",
            "Portal Hypertension: TIPS shunt reduces pressure in liver veins.",
            "Feeding Access: Gastrostomy tubes are placed under fluoroscopic guidance."
        ],
        comparison: {
            title: "Surgery vs Pinhole IR Procedure",
            headers: ["Traditional Surgery", "Pinhole IR Procedure"],
            rows: [
                ["Large incision", "Tiny 2–3 mm puncture"],
                ["General anaesthesia", "Local anaesthesia / mild sedation"],
                ["Long recovery", "Short hospital stay"],
                ["High risk for unstable", "Safe and minimally invasive"]
            ]
        },
        recovery: "Short hospital stay (1–5 days depending on procedure). Normal diet and activities resume as advised, with follow-up imaging for effectiveness.",
        suitable: "Recommended for patients with acute GI bleeding, obstructive jaundice, or those needing feeding access who are not suitable for surgery.",
        seoTitle: "Gastrointestinal Interventions in Bengaluru | TIPS & Biliary Stenting | Dr Harsha M T",
        seoDescription: "Get advanced minimally invasive GI treatments in Bengaluru for bleeding, jaundice, and more, performed by Dr Harsha M T."
    }
};

export const TREATMENT_QA = {
    "varicose-veins": [
        { q: "Will varicose veins come back after treatment?", a: "Treated veins are permanently sealed. However, new veins may develop in the future due to genetics or lifestyle factors." },
        { q: "Is the EVLA procedure painful?", a: "The procedure is performed under local anaesthesia, so most patients feel minimal discomfort." },
        { q: "Can I walk immediately after treatment?", a: "Yes. Patients are encouraged to walk immediately after the procedure to improve blood circulation." },
        { q: "How long should compression stockings be worn?", a: "Most patients are advised to wear compression stockings for 1–2 weeks after treatment." },
    ],
    "thyroid-nodule": [
        { q: "Will my thyroid function be affected?", a: "No. RFA targets only the nodule and preserves the healthy thyroid gland, so thyroid function usually remains normal." },
        { q: "How much will the nodule shrink?", a: "Most nodules shrink by 50–90% within 6–12 months after treatment." },
        { q: "Is this safe for benign nodules without symptoms?", a: "Yes. Some patients choose RFA for cosmetic reasons even if the nodule is not causing symptoms." },
        { q: "Will I need repeat treatment?", a: "In most cases, a single treatment is sufficient. Larger nodules may occasionally require an additional session." },
    ],
    "uterine-fibroid": [
        { q: "Can I still get pregnant after UFE?", a: "Some women can conceive after UFE, but the procedure is usually recommended for women who are not planning immediate pregnancy. Your doctor will discuss the best treatment option based on your fertility plans." },
        { q: "How soon will heavy bleeding improve?", a: "Many patients notice improvement in bleeding symptoms within one to three months as the fibroids begin to shrink." },
        { q: "Is UFE covered by insurance?", a: "In many cases, UFE is covered by health insurance when fibroids cause medical symptoms. Coverage depends on the insurance provider." },
        { q: "What is recovery like at home?", a: "Patients may experience mild cramps and fatigue for a few days, but most return to normal activities within 1–2 weeks." },
    ],
    "varicocele": [
        { q: "How long before I see improvement in sperm count?", a: "Improvement in sperm quality may be seen within 3–6 months after treatment." },
        { q: "Is embolisation better than surgery for varicocele?", a: "Both treatments are effective, but embolisation offers the advantage of no surgical incision and faster recovery." },
        { q: "Can varicocele cause infertility in all men?", a: "Not all men with varicocele experience infertility, but it is one of the most common treatable causes of male infertility." },
        { q: "Will I feel the coils used during treatment?", a: "No. The coils are placed inside the vein and cannot be felt after the procedure." },
    ],
    "peripheral-vascular": [
        { q: "What happens if I don't treat peripheral vascular disease?", a: "Untreated PVD can worsen over time and may lead to severe pain, ulcers, infections, or even risk of limb loss in advanced cases." },
        { q: "Will I need stents, and are they permanent?", a: "Stents are used when necessary to keep the artery open. They are designed to remain permanently in the artery." },
        { q: "Can PVD return after angioplasty?", a: "While angioplasty restores blood flow, new blockages may develop over time. Lifestyle changes and medications help reduce this risk." },
        { q: "Is this safe for diabetic patients?", a: "Yes. Many diabetic patients undergo angioplasty to improve blood circulation and help heal foot ulcers." },
    ],
    "deep-vein-thrombosis": [
        { q: "What are the signs of Deep Vein Thrombosis?", a: "Common symptoms include leg swelling, pain, warmth, redness, and visible vein enlargement in the affected leg." },
        { q: "Can DVT resolve on its own with blood thinners?", a: "Blood thinners prevent the clot from growing but may not completely remove the clot. Catheter-directed treatment actively dissolves the clot." },
        { q: "What is post-thrombotic syndrome?", a: "It is a long-term complication of DVT causing chronic leg pain, swelling, skin changes, and ulcers due to damage to vein valves." },
        { q: "How soon after diagnosis should I seek treatment?", a: "Early treatment is important to prevent complications such as pulmonary embolism or permanent vein damage." },
    ],
    "musculoskeletal-pain": [
        { q: "What conditions does transarterial microembolisation treat?", a: "It is used to treat chronic pain conditions such as knee osteoarthritis, frozen shoulder, tennis elbow, and plantar fasciitis." },
        { q: "How does embolisation relieve joint pain?", a: "The procedure blocks abnormal blood vessels that carry inflammatory cells, reducing inflammation and pain." },
        { q: "How many sessions are required?", a: "Most patients require a single treatment session, although some may benefit from additional therapy depending on the condition." },
        { q: "Is this an alternative to knee replacement surgery?", a: "For some patients with moderate knee osteoarthritis, microembolisation may reduce pain and delay the need for joint replacement surgery." },
    ],
    "liver-cancer": [
        { q: "Is TACE a cure for liver cancer?", a: "TACE can control the tumour, shrink it, and improve survival. Complete cure depends on tumour size, stage, and liver function." },
        { q: "What is the difference between TACE and TARE?", a: "TACE delivers chemotherapy directly to the tumour, while TARE uses radioactive microspheres for targeted radiation therapy." },
        { q: "How many TACE sessions are usually required?", a: "Typically 1–3 sessions, depending on tumour size and response." },
        { q: "Are there side effects after TACE?", a: "Mild post-embolisation symptoms such as fever, fatigue, and abdominal discomfort may occur and usually resolve in a few days." },
    ],
    "prostate-embolisation": [
        { q: "How is PAE different from TURP surgery?", a: "PAE avoids large incisions, catheterization, and hospital stay. Recovery is faster, and sexual function is usually preserved." },
        { q: "When will I notice improvement in urination?", a: "Gradual improvement typically occurs within 3–6 months as the prostate shrinks." },
        { q: "Is PAE suitable for all men with BPH?", a: "Not all patients are candidates. Pre-procedure assessment including MRI and flow study is required." },
        { q: "Will this affect my sexual function?", a: "PAE preserves sexual function in most patients and has a lower risk of complications compared to TURP." },
    ],
    "dialysis-access": [
        { q: "My fistula is not working — what are my options?", a: "Image-guided procedures like fistuloplasty or thrombectomy can restore the existing access without surgery." },
        { q: "What is a permacath and when is it needed?", a: "A permacath is a tunnelled catheter placed in the neck for immediate dialysis when fistula function fails." },
        { q: "How long does fistuloplasty last?", a: "Durability depends on vessel quality and patient factors, but most patients benefit for months to years with regular monitoring." },
        { q: "Is this procedure done under general anaesthesia?", a: "No. All procedures are done under local anaesthesia through a tiny pinhole puncture." },
    ],
    "gi-intervention": [
        { q: "What GI conditions can be treated without surgery?", a: "Acute bleeding, biliary obstruction, portal hypertension complications, and feeding access needs can often be addressed with image-guided procedures." },
        { q: "What is a TIPS procedure?", a: "Transjugular Intrahepatic Portosystemic Shunt (TIPS) reduces high pressure in liver veins to manage complications of portal hypertension." },
        { q: "Can GI bleeding be stopped without surgery?", a: "Yes. Embolisation of the bleeding vessel using minimally invasive techniques can control bleeding in most cases." },
        { q: "How is a feeding tube placed interventionally?", a: "A catheter is guided under fluoroscopy to place gastrostomy or jejunostomy tubes safely through a small abdominal puncture." },
    ],
};
