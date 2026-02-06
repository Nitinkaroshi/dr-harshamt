export default function SocialProof() {
    return (
        <section style={{
            background: "#FAFBFC",
            padding: "40px 0",
            borderBottom: "1px solid rgba(0,0,0,0.04)"
        }}>
            <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 32
                }}>
                    {[
                        { icon: "⭐", val: "4.9/5", label: "Patient Rating" },
                        { icon: "👥", val: "97%", label: "Recommended" },
                        { icon: "🏥", val: "SPARSH", label: "Hospital Affiliation" },
                        { icon: "🌍", val: "EBIR", label: "European Certified" },
                    ].map((s, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <span style={{ fontSize: 22 }}>{s.icon}</span>
                            <div>
                                <div style={{
                                    fontSize: 18,
                                    fontWeight: 700,
                                    color: "#071426",
                                    fontFamily: "'Playfair Display', serif"
                                }}>{s.val}</div>
                                <div style={{
                                    fontSize: 11,
                                    color: "rgba(7,20,38,0.45)",
                                    fontFamily: "'DM Sans', sans-serif"
                                }}>{s.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
