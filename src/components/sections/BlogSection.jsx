import FadeIn from '../common/FadeIn';
import SectionHead from '../common/SectionHead';
import { IMG } from '../../config/data';

// Placeholder blog data - can be moved to config/blog.js later
const BLOGS = [
    {
        id: "varicose-veins-guide",
        title: "Complete Guide to Varicose Veins Treatment",
        excerpt: "Everything you need to know about modern, non-surgical varicose vein treatments and what to expect.",
        cat: "Vascular Health",
        read: "2 min read",
        img: IMG.blog1
    },
    {
        id: "uterine-fibroids-ufe",
        title: "UFE: A Surgery-Free Solution for Fibroids",
        excerpt: "How Uterine Fibroid Embolisation offers an effective alternative to hysterectomy with faster recovery.",
        cat: "Women's Health",
        read: "2 min read",
        img: IMG.blog2
    },
    {
        id: "thyroid-nodule-ablation",
        title: "Thyroid Nodule Ablation: No Surgery, No Scars",
        excerpt: "Learn about radiofrequency ablation for thyroid nodules and how it preserves your thyroid function.",
        cat: "Endocrine",
        read: "2 min read",
        img: IMG.blog3
    },
];

export default function BlogSection({ onBlog }) {
    return (
        <section id="blog" style={{
            background: "linear-gradient(180deg, #071426, #0A1E3D)",
            padding: "90px 0"
        }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
                <SectionHead
                    label="Health Blog"
                    title="Learn About Your Condition"
                    sub="Expert articles on vascular health, treatments, and patient education"
                />
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                    gap: 18
                }}>
                    {BLOGS.map((b, i) => (
                        <FadeIn key={i} delay={i * 0.05}>
                            <div
                                onClick={() => onBlog?.(b.id)}
                                style={{
                                    background: "rgba(255,255,255,0.03)",
                                    border: "1px solid rgba(255,255,255,0.06)",
                                    borderRadius: 14,
                                    overflow: "hidden",
                                    cursor: "pointer",
                                    transition: "border-color 0.3s, transform 0.3s",
                                    height: "100%"
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.borderColor = "rgba(13,148,136,0.3)";
                                    e.currentTarget.style.transform = "translateY(-3px)";
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                                    e.currentTarget.style.transform = "translateY(0)";
                                }}
                            >
                                <div style={{ height: 180, overflow: "hidden" }}>
                                    <img
                                        src={b.img}
                                        alt={b.title}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            transition: "transform 0.4s"
                                        }}
                                    />
                                </div>
                                <div style={{ padding: "18px 20px 22px" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                                        <span style={{
                                            fontSize: 10,
                                            fontWeight: 600,
                                            color: "#5EEAD4",
                                            fontFamily: "'DM Sans', sans-serif",
                                            background: "rgba(13,148,136,0.12)",
                                            padding: "3px 10px",
                                            borderRadius: 100,
                                            letterSpacing: "0.03em",
                                            textTransform: "uppercase"
                                        }}>{b.cat}</span>
                                        <span style={{
                                            fontSize: 11,
                                            color: "rgba(255,255,255,0.3)",
                                            fontFamily: "'DM Sans', sans-serif"
                                        }}>{b.read}</span>
                                    </div>
                                    <div style={{
                                        fontSize: 16,
                                        fontWeight: 700,
                                        color: "#fff",
                                        fontFamily: "'DM Sans', sans-serif",
                                        lineHeight: 1.35,
                                        marginBottom: 8
                                    }}>{b.title}</div>
                                    <div style={{
                                        fontSize: 13,
                                        color: "rgba(255,255,255,0.45)",
                                        fontFamily: "'DM Sans', sans-serif",
                                        lineHeight: 1.6
                                    }}>{b.excerpt}</div>
                                    <div style={{
                                        marginTop: 14,
                                        fontSize: 13,
                                        fontWeight: 600,
                                        color: "#14B8A6",
                                        fontFamily: "'DM Sans', sans-serif"
                                    }}>Read Article →</div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
