import { IconBrandWhatsapp } from '@tabler/icons-react';
import { DOC, NAV, LOCATIONS } from '../../config/data';
import { Phone, MessageCircle, Building2 } from 'lucide-react';
import LogoImg from '../../assets/dr-harsha-hospital logo.png';
export default function Footer() {
    return (
        <footer style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 50%, #0284C7 100%)", padding: "48px 0 24px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: "40px 32px", marginBottom: 48 }}>
                    {/* About */}
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <img src={LogoImg} alt="Dr. Harsha Logo" style={{ height: 64, objectFit: "contain", }} />
                            <div style={{ color: "#fff", fontSize: 20, fontWeight: 800, fontFamily: "'Roboto Slab', serif", letterSpacing: "-0.01em", textTransform: "uppercase",marginTop:18}}>
                                Dr. Harsha M T         
                        <p style={{ 
                            fontSize: 12, 
                            color: "rgba(255,255,255,0.7)", 
                            lineHeight: 1.6, 
                            fontFamily: "'Roboto', sans-serif",
                            maxWidth: 260,
                            // fontStyle: "italic"
                        }}>
                            {/* {DOC.tagline} */}
                            Interventional Radiologist
                        </p>
                                </div>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ 
                            fontSize: 15, 
                            fontWeight: 700, 
                            color: "#fff", 
                            marginBottom: 20, 
                            fontFamily: "'Roboto', sans-serif",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em"
                        }}>Quick Links</h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                            {NAV.map(n => (
                                <a
                                    key={n.href}
                                    href={n.href}
                                    style={{
                                        fontSize: 14,
                                        color: "rgba(255,255,255,0.8)",
                                        textDecoration: "none",
                                        fontFamily: "'Roboto', sans-serif",
                                        transition: "0.2s ease"
                                    }}
                                    onMouseEnter={e => e.target.style.color = "#5EEAD4"}
                                    onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.85)"}
                                >{n.label}</a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 style={{ 
                            fontSize: 15, 
                            fontWeight: 700, 
                            color: "#fff", 
                            marginBottom: 20, 
                            fontFamily: "'Roboto', sans-serif",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em"
                        }}>Contact</h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                            <a href={`tel:${DOC.phone.replace(/\s/g, '')}`} style={{
                                fontSize: 14, color: "rgba(255,255,255,0.8)", fontFamily: "'Roboto', sans-serif",
                                textDecoration: "none",
                                display: "flex",
                                alignItems: "center",
                                gap: 10,
                                transition: "0.2s ease"
                            }}>
                                <Phone size={15} color="#5EEAD4" /> {DOC.phone}
                            </a>
                            <a href={`https://wa.me/${DOC.wa}`} target="_blank" rel="noopener noreferrer" style={{
                                fontSize: 14, color: "rgba(255,255,255,0.8)", fontFamily: "'Roboto', sans-serif",
                                textDecoration: "none",
                                display: "flex",
                                alignItems: "center",
                                gap: 10,
                                transition: "0.2s ease"
                            }}>
                                <IconBrandWhatsapp size={18} color="#5EEAD4" /> Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ 
                            fontSize: 15, 
                            fontWeight: 700, 
                            color: "#fff", 
                            marginBottom: 20, 
                            fontFamily: "'Roboto', sans-serif",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em"
                        }}>Locations</h4>
                        {LOCATIONS.map((loc, i) => (
                            <div key={i} style={{ marginBottom: i < LOCATIONS.length - 1 ? 14 : 0 }}>
                                <div style={{
                                    fontSize: 14, fontWeight: 600, color: "#fff",
                                    fontFamily: "'Roboto', sans-serif", marginBottom: 3,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 10
                                }}><Building2 size={15} color="#5EEAD4" /> {loc.name}</div>
                                <div style={{
                                    fontSize: 13, color: "rgba(255,255,255,0.7)",
                                    fontFamily: "'Roboto', sans-serif", paddingLeft: 25
                                }}>{loc.address}</div>
                                {loc.time && (
                                    <div style={{
                                        fontSize: 12, color: "#2DD4BF",
                                        fontWeight: 700, fontFamily: "'Roboto', sans-serif",
                                        paddingLeft: 25, marginTop: 4,
                                        letterSpacing: "0.02em"
                                    }}>{loc.time}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    paddingTop: 30,
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 16
                }}>
                    <div style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", fontFamily: "'Roboto', sans-serif" }}>
                        © {new Date().getFullYear()} Dr. Harsha M T. All rights reserved. | <a target="blank" href="https://wenvia.global" style={{ color: "#f6f100ff", textDecoration: "none" }}>Designed and Developed by Wenvia Global Solutions Pvt Ltd</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
