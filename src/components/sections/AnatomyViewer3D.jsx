import React from 'react';

function AnatomyViewer3D() {
    return (
        <section style={{
            background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)",
            padding: "clamp(40px, 8vw, 90px) 0",
            textAlign: "center"
        }}>
            <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
                <h2 style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "clamp(28px, 4vw, 42px)",
                    fontWeight: 700,
                    color: "#1F2937",
                    marginBottom: 16
                }}>
                    Interactive 3D Anatomy Viewer
                </h2>
                <p style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 16,
                    color: "#6B7280",
                    lineHeight: 1.6
                }}>
                    Coming soon: Explore the human body and discover how minimally invasive procedures treat each condition.
                </p>
            </div>
        </section>
    );
}

export default AnatomyViewer3D;
