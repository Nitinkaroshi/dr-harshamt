import { useEffect } from 'react';
import { IMG } from '../../config/data';

// Placeholder blog content - move to config/blog.js later
const BLOG_CONTENT = {
    "varicose-veins-guide": {
        title: "Complete Guide to Varicose Veins Treatment",
        cat: "Vascular Health",
        read: "5 min read",
        date: "January 15, 2026",
        hero: IMG.blog1,
        content: [
            {
                type: "intro",
                text: "Varicose veins affect millions of people worldwide, causing not just cosmetic concerns but also significant discomfort and health issues. In this comprehensive guide, we'll explore modern, minimally invasive treatments that can help you get back to living your life without the burden of painful, bulging veins."
            },
            {
                type: "heading",
                text: "What Are Varicose Veins?"
            },
            {
                type: "paragraph",
                text: "Varicose veins are enlarged, twisted veins that appear just under the surface of the skin, most commonly in the legs. They occur when the valves in your veins malfunction, causing blood to pool instead of flowing efficiently back to the heart."
            },
            {
                type: "heading",
                text: "Common Symptoms"
            },
            {
                type: "list",
                items: [
                    "Visible, bulging veins that appear blue or purple",
                    "Aching, heavy feeling in the legs",
                    "Burning, throbbing, or cramping in the lower legs",
                    "Swelling in the ankles and feet",
                    "Skin discoloration around the affected veins"
                ]
            },
            {
                type: "heading",
                text: "Modern Treatment Options"
            },
            {
                type: "paragraph",
                text: "Gone are the days when surgery was the only option. Today, minimally invasive procedures like Endovenous Laser Ablation (EVLA) and Venaseal offer effective treatment with minimal downtime."
            },
            {
                type: "heading",
                text: "EVLA: The Gold Standard"
            },
            {
                type: "paragraph",
                text: "Endovenous Laser Ablation is performed through a tiny needle puncture under local anaesthesia. A laser fiber is inserted into the diseased vein, and laser energy seals it shut. The entire procedure takes 30-45 minutes, and most patients walk out and return to normal activities the next day."
            },
            {
                type: "heading",
                text: "Recovery and Results"
            },
            {
                type: "paragraph",
                text: "Unlike traditional surgery that requires weeks of recovery, EVLA patients typically experience minimal discomfort and can resume normal activities within 1-2 days. Compression stockings are worn for 1-2 weeks to optimize results. The success rate is over 98%, with most patients experiencing significant improvement in symptoms and appearance."
            }
        ]
    },
    "uterine-fibroids-ufe": {
        title: "UFE: A Surgery-Free Solution for Fibroids",
        cat: "Women's Health",
        read: "6 min read",
        date: "January 10, 2026",
        hero: IMG.blog2,
        content: [
            {
                type: "intro",
                text: "Uterine fibroids affect up to 70% of women by age 50, causing symptoms ranging from heavy bleeding to severe pelvic pain. For years, hysterectomy was considered the definitive treatment. Today, Uterine Fibroid Embolisation (UFE) offers a minimally invasive alternative that preserves the uterus."
            },
            {
                type: "heading",
                text: "Understanding Uterine Fibroids"
            },
            {
                type: "paragraph",
                text: "Fibroids are non-cancerous growths in the uterus that can vary in size from tiny seedlings to large masses. While many women have fibroids without symptoms, others experience significant disruption to their daily lives."
            },
            {
                type: "heading",
                text: "How UFE Works"
            },
            {
                type: "paragraph",
                text: "UFE is performed through a tiny puncture in the wrist. A catheter is guided to the uterine arteries, and tiny particles are injected to block blood flow to the fibroids. Without blood supply, the fibroids shrink over the following months."
            },
            {
                type: "heading",
                text: "Benefits Over Surgery"
            },
            {
                type: "list",
                items: [
                    "Uterus is preserved - important for women who wish to maintain fertility options",
                    "No surgical incisions or scars",
                    "Faster recovery - most patients return to work within 1-2 weeks",
                    "Treats all fibroids simultaneously",
                    "Lower complication rates compared to surgery"
                ]
            },
            {
                type: "heading",
                text: "What to Expect"
            },
            {
                type: "paragraph",
                text: "The procedure takes 45-60 minutes and is performed under conscious sedation. Most patients stay overnight and go home the next day. Mild cramping is common for the first few days. Fibroids shrink by 40-75% over 3-6 months, with corresponding improvement in symptoms."
            }
        ]
    },
    "thyroid-nodule-ablation": {
        title: "Thyroid Nodule Ablation: No Surgery, No Scars",
        cat: "Endocrine",
        read: "4 min read",
        date: "January 5, 2026",
        hero: IMG.blog3,
        content: [
            {
                type: "intro",
                text: "Thyroid nodules are incredibly common, affecting up to 50% of people by age 60. While most are benign, they can cause cosmetic concerns, difficulty swallowing, or neck discomfort. Radiofrequency Ablation (RFA) offers a needle-based solution that avoids surgery and preserves thyroid function."
            },
            {
                type: "heading",
                text: "What is Thyroid RFA?"
            },
            {
                type: "paragraph",
                text: "RFA uses heat generated by radiofrequency energy to destroy thyroid nodule tissue. The procedure is performed through a thin needle inserted into the nodule under ultrasound guidance, all under local anaesthesia."
            },
            {
                type: "heading",
                text: "Why Choose RFA Over Surgery?"
            },
            {
                type: "list",
                items: [
                    "No visible scar on the neck",
                    "Thyroid function is preserved - no lifelong hormone replacement",
                    "Done under local anaesthesia - no general anaesthesia risks",
                    "Same-day procedure - go home immediately",
                    "Minimal discomfort and downtime"
                ]
            },
            {
                type: "heading",
                text: "The Procedure"
            },
            {
                type: "paragraph",
                text: "After applying local anaesthesia, a thin RFA needle is inserted into the nodule under real-time ultrasound guidance. The nodule is systematically ablated over 15-30 minutes. Patients feel minimal discomfort and can return to normal activities the next day."
            },
            {
                type: "heading",
                text: "Results"
            },
            {
                type: "paragraph",
                text: "Nodules typically shrink by 50-90% over 6-12 months. Symptoms like neck fullness, difficulty swallowing, and cosmetic concerns improve correspondingly. The success rate is over 95% for appropriately selected nodules."
            }
        ]
    }
};

export default function BlogPage({ id, onBack }) {
    const blog = BLOG_CONTENT[id];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!blog) {
        return (
            <div style={{
                padding: 100,
                textAlign: "center",
                color: "#fff",
                background: "#071426",
                minHeight: "100vh"
            }}>
                Blog not found.
            </div>
        );
    }

    return (
        <div style={{ background: "#FAFBFC", minHeight: "100vh" }}>
            <div style={{ height: 60 }} />

            {/* Hero */}
            <div style={{ position: "relative", height: 380, overflow: "hidden" }}>
                <img src={blog.hero} alt={blog.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, rgba(7,20,38,0.3) 0%, rgba(7,20,38,0.85) 100%)"
                }} />
                <div style={{
                    position: "absolute",
                    bottom: 40,
                    left: 0,
                    right: 0,
                    maxWidth: 760,
                    margin: "0 auto",
                    padding: "0 24px"
                }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                        <span style={{
                            fontSize: 10,
                            fontWeight: 600,
                            color: "#5EEAD4",
                            fontFamily: "'DM Sans', sans-serif",
                            background: "rgba(13,148,136,0.2)",
                            padding: "4px 12px",
                            borderRadius: 100,
                            letterSpacing: "0.03em",
                            textTransform: "uppercase"
                        }}>{blog.cat}</span>
                        <span style={{
                            fontSize: 12,
                            color: "rgba(255,255,255,0.5)",
                            fontFamily: "'DM Sans', sans-serif"
                        }}>{blog.read}</span>
                        <span style={{
                            fontSize: 12,
                            color: "rgba(255,255,255,0.4)",
                            fontFamily: "'DM Sans', sans-serif"
                        }}>•</span>
                        <span style={{
                            fontSize: 12,
                            color: "rgba(255,255,255,0.5)",
                            fontFamily: "'DM Sans', sans-serif"
                        }}>{blog.date}</span>
                    </div>
                    <h1 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(24px, 4vw, 38px)",
                        fontWeight: 700,
                        color: "#fff",
                        lineHeight: 1.2
                    }}>{blog.title}</h1>
                </div>
            </div>

            {/* Content */}
            <div style={{ maxWidth: 760, margin: "0 auto", padding: "50px 24px 80px" }}>
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
                >← Back to Blog</button>

                <article>
                    {blog.content.map((section, i) => {
                        if (section.type === "intro") {
                            return (
                                <p
                                    key={i}
                                    style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: 17,
                                        color: "rgba(7,20,38,0.75)",
                                        lineHeight: 1.8,
                                        marginBottom: 32,
                                        fontStyle: "italic"
                                    }}
                                >{section.text}</p>
                            );
                        }

                        if (section.type === "heading") {
                            return (
                                <h2
                                    key={i}
                                    style={{
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: 24,
                                        fontWeight: 700,
                                        color: "#071426",
                                        marginTop: 36,
                                        marginBottom: 16
                                    }}
                                >{section.text}</h2>
                            );
                        }

                        if (section.type === "paragraph") {
                            return (
                                <p
                                    key={i}
                                    style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: 15,
                                        color: "rgba(7,20,38,0.7)",
                                        lineHeight: 1.8,
                                        marginBottom: 20
                                    }}
                                >{section.text}</p>
                            );
                        }

                        if (section.type === "list") {
                            return (
                                <ul
                                    key={i}
                                    style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: 15,
                                        color: "rgba(7,20,38,0.7)",
                                        lineHeight: 1.8,
                                        marginBottom: 20,
                                        paddingLeft: 24
                                    }}
                                >
                                    {section.items.map((item, j) => (
                                        <li key={j} style={{ marginBottom: 8 }}>{item}</li>
                                    ))}
                                </ul>
                            );
                        }

                        return null;
                    })}
                </article>

                {/* Author */}
                <div style={{
                    marginTop: 48,
                    padding: 24,
                    background: "#fff",
                    border: "1px solid rgba(0,0,0,0.06)",
                    borderRadius: 14,
                    display: "flex",
                    gap: 16,
                    alignItems: "center"
                }}>
                    <div style={{
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #0D9488, #14B8A6)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 24,
                        fontWeight: 700,
                        color: "#fff",
                        fontFamily: "'Playfair Display', serif",
                        flexShrink: 0
                    }}>H</div>
                    <div>
                        <div style={{
                            fontSize: 16,
                            fontWeight: 700,
                            color: "#071426",
                            fontFamily: "'DM Sans', sans-serif",
                            marginBottom: 4
                        }}>Dr. Harsha M T</div>
                        <div style={{
                            fontSize: 13,
                            color: "rgba(7,20,38,0.5)",
                            fontFamily: "'DM Sans', sans-serif",
                            lineHeight: 1.5
                        }}>Consultant Vascular & Interventional Radiologist<br />MBBS • MD (PGIMER) • FVIR (AIIMS) • EBIR</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
