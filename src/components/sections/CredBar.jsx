import FadeIn from '../common/FadeIn';
import { CREDS } from '../../config/data';

export default function CredBar() {
    return (
        <section style={{
            background: "#060F1F",
            borderTop: "1px solid rgba(255,255,255,0.04)",
            borderBottom: "1px solid rgba(255,255,255,0.04)"
        }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "36px 24px" }}>
                <FadeIn>
                    <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: 10
                    }}>
                        {CREDS.map((c, i) => (
                            <div
                                key={i}
                                style={{
                                    flex: "1 1 200px",
                                    maxWidth: 270,
                                    padding: "16px 20px",
                                    borderRadius: 12,
                                    background: "rgba(255,255,255,0.02)",
                                    border: "1px solid rgba(255,255,255,0.05)",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 14
                                }}
                            >
                                <div style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 10,
                                    flexShrink: 0,
                                    background: "linear-gradient(135deg, rgba(13,148,136,0.15), rgba(13,148,136,0.05))",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: 13,
                                    fontWeight: 700,
                                    color: "#14B8A6",
                                    fontFamily: "'DM Sans', sans-serif"
                                }}>{c.inst.slice(0, 2)}</div>
                                <div>
                                    <div style={{
                                        color: "#fff",
                                        fontSize: 13,
                                        fontWeight: 600,
                                        fontFamily: "'DM Sans', sans-serif"
                                    }}>{c.inst}</div>
                                    <div style={{
                                        color: "rgba(255,255,255,0.4)",
                                        fontSize: 11,
                                        fontFamily: "'DM Sans', sans-serif"
                                    }}>{c.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
