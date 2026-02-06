import { DOC } from '../../config/data';

export default function WAB() {
    return (
        <a
            href={`https://wa.me/${DOC.wa}?text=Hi%20Dr.%20Harsha,%20I%20would%20like%20to%20book%20a%20consultation`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                position: "fixed",
                bottom: 24,
                right: 24,
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
                color: "#fff",
                boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
                zIndex: 999,
                transition: "all 0.3s",
                textDecoration: "none",
                cursor: "pointer",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.boxShadow = "0 6px 30px rgba(37,211,102,0.6)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,211,102,0.4)";
            }}
        >
            💬
        </a>
    );
}
