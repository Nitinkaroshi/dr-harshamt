import { useState, useEffect } from 'react';

export default function LoadingScreen() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const t = setTimeout(() => setShow(false), 1800);
        return () => clearTimeout(t);
    }, []);

    if (!show) return null;

    return (
        <div style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "#071426",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transition: "opacity 0.5s",
            opacity: show ? 1 : 0,
            pointerEvents: show ? "all" : "none",
        }}>
            <div style={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #0D9488, #14B8A6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 26,
                fontWeight: 700,
                color: "#fff",
                fontFamily: "'Playfair Display', serif",
                animation: "pulse-load 1.5s ease-in-out infinite",
            }}>H</div>
            <div style={{
                color: "#fff",
                fontSize: 16,
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                marginTop: 16
            }}>Dr. Harsha M T</div>
            <div style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: 12,
                fontFamily: "'DM Sans', sans-serif",
                marginTop: 4
            }}>Interventional Radiologist</div>
            <div style={{
                marginTop: 24,
                width: 120,
                height: 2,
                background: "rgba(255,255,255,0.06)",
                borderRadius: 2,
                overflow: "hidden"
            }}>
                <div style={{
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(90deg, #0D9488, #14B8A6)",
                    animation: "load-bar 1.5s ease-in-out",
                    transformOrigin: "left"
                }} />
            </div>
        </div>
    );
}
