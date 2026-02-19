import { IMG } from './data';

/*
 * =============================================
 *   HOW TO ADD A NEW BLOG POST
 * =============================================
 *
 * 1. Add a new object to the BLOGS array below.
 * 2. Each blog needs:
 *      - id:      URL-friendly slug (lowercase, hyphens, no spaces)
 *      - title:   Blog title
 *      - excerpt: 1-2 sentence summary (shown on home page card)
 *      - cat:     Category label (e.g. "Vascular Health", "Women's Health")
 *      - read:    Estimated read time (e.g. "3 min read")
 *      - date:    Published date string (e.g. "February 20, 2026")
 *      - img:     Card thumbnail — use IMG.blog1, IMG.blog2 etc from data.js
 *      - hero:    Full-page hero image — can be same as img
 *      - content: Array of content blocks (see types below)
 *
 * 3. Content block types:
 *      { type: "intro",     text: "..." }          — Italic intro paragraph
 *      { type: "heading",   text: "..." }          — Section heading (h2)
 *      { type: "paragraph", text: "..." }          — Normal paragraph
 *      { type: "list",      items: ["...", "..."] } — Bulleted list
 *
 * 4. Save the file, redeploy, and the blog appears automatically
 *    on the home page AND has its own full article page.
 *
 * =============================================
 */

const BLOGS = [
    {
        id: "varicose-veins-guide",
        title: "Complete Guide to Varicose Veins Treatment",
        excerpt: "Everything you need to know about modern, non-surgical varicose vein treatments and what to expect.",
        cat: "Vascular Health",
        read: "2 min read",
        date: "January 15, 2026",
        img: IMG.blog1,
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
    {
        id: "uterine-fibroids-ufe",
        title: "UFE: A Surgery-Free Solution for Fibroids",
        excerpt: "How Uterine Fibroid Embolisation offers an effective alternative to hysterectomy with faster recovery.",
        cat: "Women's Health",
        read: "2 min read",
        date: "January 10, 2026",
        img: IMG.blog2,
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
    {
        id: "thyroid-nodule-ablation",
        title: "Thyroid Nodule Ablation: No Surgery, No Scars",
        excerpt: "Learn about radiofrequency ablation for thyroid nodules and how it preserves your thyroid function.",
        cat: "Endocrine",
        read: "2 min read",
        date: "January 5, 2026",
        img: IMG.blog3,
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
    },
];

export default BLOGS;
