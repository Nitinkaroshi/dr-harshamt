import { useState, useEffect } from 'react';

export default function ScrollTop() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!show) return null;

    return (
        <button
            onClick={scrollToTop}
            style={{
                position: "fixed",
                bottom: 90,
                right: 24,
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "rgba(7,20,38,0.9)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(13,148,136,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                color: "#5EEAD4",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                zIndex: 998,
                transition: "all 0.3s",
                cursor: "pointer",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.background = "rgba(13,148,136,0.2)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.background = "rgba(7,20,38,0.9)";
            }}
        >
            ↑
        </button>
    );
}
