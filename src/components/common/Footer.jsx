import { DOC, NAV, LOCATIONS } from '../../config/data';

export default function Footer() {
    return (
        <footer style={{ background: "#050E1C", padding: "60px 0 30px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 40, marginBottom: 50 }}>
                    {/* About */}
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                            <div style={{
                                width: 40,
                                height: 40,
                                borderRadius: "50%",
                                background: "linear-gradient(135deg, #0D9488, #14B8A6)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 18,
                                fontWeight: 700,
                                color: "#fff",
                                fontFamily: "'Playfair Display', serif"
                            }}>H</div>
                            <div>
                                <div style={{ color: "#fff", fontSize: 15, fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>Dr. Harsha M T</div>
                                <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, fontFamily: "'DM Sans', sans-serif" }}>Interventional Radiologist</div>
                            </div>
                        </div>
                        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif" }}>
                            {DOC.tagline}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 16, fontFamily: "'DM Sans', sans-serif" }}>Quick Links</h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                            {NAV.map(n => (
                                <a
                                    key={n.href}
                                    href={n.href}
                                    style={{
                                        fontSize: 13,
                                        color: "rgba(255,255,255,0.5)",
                                        textDecoration: "none",
                                        fontFamily: "'DM Sans', sans-serif"
                                    }}
                                    onMouseEnter={e => e.target.style.color = "#14B8A6"}
                                    onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.5)"}
                                >{n.label}</a>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 16, fontFamily: "'DM Sans', sans-serif" }}>Contact</h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif" }}>
                                📞 {DOC.phone}
                            </div>
                            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif" }}>
                                ✉️ {DOC.email}
                            </div>
                            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6 }}>
                                📍 {LOCATIONS[0].name}
                            </div>
                        </div>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 16, fontFamily: "'DM Sans', sans-serif" }}>Clinic Hours</h4>
                        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.8 }}>
                            <div>Monday - Saturday</div>
                            <div style={{ color: "#14B8A6", fontWeight: 600 }}>10:00 AM - 7:00 PM</div>
                            <div style={{ marginTop: 8 }}>Sunday: Closed</div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    paddingTop: 30,
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 16
                }}>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif" }}>
                        © {new Date().getFullYear()} Dr. Harsha M T. All rights reserved.
                    </div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif" }}>
                        Reg. No: {DOC.reg}
                    </div>
                </div>
            </div>
        </footer>
    );
}
