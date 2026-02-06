// Medical SVG Illustrations for procedures

export function VeinIllustration({ type = "normal" }) {
    if (type === "varicose-comparison") {
        return (
            <svg viewBox="0 0 400 200" style={{ width: "100%", maxWidth: 400, margin: "0 auto", display: "block" }}>
                <defs>
                    <linearGradient id="healthyVein" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.9" />
                    </linearGradient>
                    <linearGradient id="varicoseVein" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.7" />
                        <stop offset="100%" stopColor="#581C87" stopOpacity="0.9" />
                    </linearGradient>
                </defs>
                {/* Healthy side */}
                <text x="100" y="20" textAnchor="middle" fill="#0D9488" fontSize="11" fontFamily="DM Sans" fontWeight="600">HEALTHY VEIN</text>
                <rect x="85" y="30" width="30" height="140" rx="15" fill="url(#healthyVein)" opacity="0.3" />
                <rect x="92" y="30" width="16" height="140" rx="8" fill="url(#healthyVein)" />
                <path d="M92 70 L100 60 L108 70" fill="none" stroke="#fff" strokeWidth="2" />
                <path d="M92 110 L100 100 L108 110" fill="none" stroke="#fff" strokeWidth="2" />
                <path d="M100 150 L100 40" fill="none" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4 3" />
                <text x="100" y="185" textAnchor="middle" fill="#10B981" fontSize="9" fontFamily="DM Sans">Normal Flow ↑</text>

                {/* Varicose side */}
                <text x="300" y="20" textAnchor="middle" fill="#EF4444" fontSize="11" fontFamily="DM Sans" fontWeight="600">VARICOSE VEIN</text>
                <path d="M300 30 Q290 55 305 80 Q315 105 295 130 Q285 155 300 170" fill="none" stroke="url(#varicoseVein)" strokeWidth="22" strokeLinecap="round" opacity="0.3" />
                <path d="M300 30 Q293 55 303 80 Q313 105 297 130 Q288 155 300 170" fill="none" stroke="url(#varicoseVein)" strokeWidth="10" strokeLinecap="round" />
                <line x1="293" y1="68" x2="307" y2="78" stroke="#EF4444" strokeWidth="2" />
                <line x1="293" y1="78" x2="307" y2="68" stroke="#EF4444" strokeWidth="2" />
                <text x="300" y="185" textAnchor="middle" fill="#EF4444" fontSize="9" fontFamily="DM Sans">Blood Pools ↓</text>

                <line x1="200" y1="15" x2="200" y2="190" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />
                <text x="200" y="198" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="DM Sans">VS</text>
            </svg>
        );
    }

    if (type === "pinhole") {
        return (
            <svg viewBox="0 0 400 120" style={{ width: "100%", maxWidth: 400, margin: "0 auto", display: "block" }}>
                <text x="100" y="16" textAnchor="middle" fill="#EF4444" fontSize="10" fontFamily="DM Sans" fontWeight="600">SURGERY: 5-15cm CUT</text>
                <rect x="40" y="30" width="120" height="50" rx="8" fill="rgba(239,68,68,0.08)" stroke="rgba(239,68,68,0.2)" />
                <line x1="55" y1="55" x2="145" y2="55" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
                <text x="100" y="100" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="DM Sans">Stitches Required</text>

                <text x="200" y="58" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="11" fontFamily="DM Sans" fontWeight="700">VS</text>

                <text x="300" y="16" textAnchor="middle" fill="#14B8A6" fontSize="10" fontFamily="DM Sans" fontWeight="600">PINHOLE: 2-3mm</text>
                <rect x="240" y="30" width="120" height="50" rx="8" fill="rgba(13,148,136,0.08)" stroke="rgba(13,148,136,0.2)" />
                <circle cx="300" cy="55" r="3" fill="#14B8A6" />
                <text x="300" y="100" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="DM Sans">No Stitches Needed</text>
            </svg>
        );
    }

    if (type === "embolisation") {
        return (
            <svg viewBox="0 0 300 160" style={{ width: "100%", maxWidth: 300, margin: "0 auto", display: "block" }}>
                <defs>
                    <linearGradient id="artery" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#EF4444" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#DC2626" stopOpacity="0.8" />
                    </linearGradient>
                </defs>
                <text x="150" y="16" textAnchor="middle" fill="#5EEAD4" fontSize="10" fontFamily="DM Sans" fontWeight="600">EMBOLISATION PROCEDURE</text>
                <path d="M30 80 L270 80" fill="none" stroke="url(#artery)" strokeWidth="16" strokeLinecap="round" />
                <path d="M150 80 L150 40" fill="none" stroke="#EF4444" strokeWidth="8" strokeLinecap="round" opacity="0.5" />
                <circle cx="150" cy="30" r="18" fill="rgba(239,68,68,0.15)" stroke="#EF4444" strokeWidth="1" />
                <text x="150" y="34" textAnchor="middle" fill="#EF4444" fontSize="8" fontFamily="DM Sans">Fibroid</text>
                <path d="M30 80 L130 80" fill="none" stroke="#14B8A6" strokeWidth="2" strokeDasharray="5 3" />
                <circle cx="130" cy="80" r="4" fill="#14B8A6" />
                <circle cx="150" cy="70" r="3" fill="#F59E0B" opacity="0.8" />
                <circle cx="145" cy="65" r="2.5" fill="#F59E0B" opacity="0.7" />
                <circle cx="155" cy="67" r="2" fill="#F59E0B" opacity="0.6" />
                <text x="60" y="105" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="DM Sans">← Catheter</text>
                <text x="150" y="120" textAnchor="middle" fill="#F59E0B" fontSize="8" fontFamily="DM Sans">Blocking particles</text>
                <text x="150" y="135" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="8" fontFamily="DM Sans">Blood supply cut off → fibroid shrinks</text>
            </svg>
        );
    }

    return null;
}

export function AngioplastyIllustration() {
    return (
        <svg viewBox="0 0 400 140" style={{ width: "100%", maxWidth: 400, margin: "0 auto", display: "block" }}>
            <text x="200" y="16" textAnchor="middle" fill="#5EEAD4" fontSize="10" fontFamily="DM Sans" fontWeight="600">BALLOON ANGIOPLASTY & STENTING</text>
            <rect x="10" y="40" width="110" height="70" rx="8" fill="rgba(239,68,68,0.06)" stroke="rgba(239,68,68,0.15)" />
            <text x="65" y="55" textAnchor="middle" fill="#EF4444" fontSize="8" fontFamily="DM Sans" fontWeight="600">BLOCKED</text>
            <rect x="25" y="62" width="80" height="16" rx="8" fill="rgba(239,68,68,0.15)" />
            <rect x="50" y="62" width="30" height="16" rx="3" fill="rgba(239,68,68,0.4)" />
            <text x="65" y="95" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="DM Sans">Plaque buildup</text>

            <text x="145" y="78" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="16">→</text>

            <rect x="155" y="40" width="110" height="70" rx="8" fill="rgba(245,158,11,0.06)" stroke="rgba(245,158,11,0.15)" />
            <text x="210" y="55" textAnchor="middle" fill="#F59E0B" fontSize="8" fontFamily="DM Sans" fontWeight="600">BALLOON</text>
            <rect x="170" y="62" width="80" height="16" rx="8" fill="rgba(245,158,11,0.1)" />
            <ellipse cx="210" cy="70" rx="18" ry="10" fill="rgba(245,158,11,0.25)" stroke="#F59E0B" strokeWidth="1" />
            <text x="210" y="95" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="DM Sans">Inflating balloon</text>

            <text x="290" y="78" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="16">→</text>

            <rect x="300" y="40" width="95" height="70" rx="8" fill="rgba(13,148,136,0.06)" stroke="rgba(13,148,136,0.15)" />
            <text x="348" y="55" textAnchor="middle" fill="#14B8A6" fontSize="8" fontFamily="DM Sans" fontWeight="600">STENTED</text>
            <rect x="315" y="62" width="65" height="16" rx="8" fill="rgba(13,148,136,0.1)" />
            <rect x="315" y="62" width="65" height="16" rx="8" fill="none" stroke="#14B8A6" strokeWidth="1" strokeDasharray="3 2" />
            <text x="348" y="95" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="DM Sans">Open & supported</text>

            <text x="200" y="132" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="8" fontFamily="DM Sans">Blood flow fully restored through the stented artery</text>
        </svg>
    );
}

export function DVTIllustration() {
    return (
        <svg viewBox="0 0 360 150" style={{ width: "100%", maxWidth: 360, margin: "0 auto", display: "block" }}>
            <text x="180" y="16" textAnchor="middle" fill="#5EEAD4" fontSize="10" fontFamily="DM Sans" fontWeight="600">DVT — CATHETER-DIRECTED TREATMENT</text>
            <path d="M80 35 L80 130" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="40" strokeLinecap="round" />
            <text x="80" y="140" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="8" fontFamily="DM Sans">LEG</text>
            <path d="M80 40 L80 125" fill="none" stroke="rgba(99,102,241,0.3)" strokeWidth="10" strokeLinecap="round" />
            <rect x="72" y="65" width="16" height="22" rx="4" fill="rgba(239,68,68,0.5)" stroke="#EF4444" strokeWidth="1" />
            <text x="80" y="60" textAnchor="middle" fill="#EF4444" fontSize="8" fontFamily="DM Sans" fontWeight="600">CLOT</text>

            <text x="140" y="80" fill="rgba(255,255,255,0.2)" fontSize="20" fontFamily="DM Sans">→</text>

            <path d="M220 40 L220 125" fill="none" stroke="rgba(99,102,241,0.3)" strokeWidth="10" strokeLinecap="round" />
            <path d="M220 40 L220 125" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="40" strokeLinecap="round" />
            <line x1="220" y1="120" x2="220" y2="70" stroke="#14B8A6" strokeWidth="2" strokeDasharray="4 3" />
            <circle cx="220" cy="70" r="3" fill="#14B8A6" />
            <rect x="214" y="65" width="12" height="18" rx="3" fill="rgba(239,68,68,0.2)" stroke="rgba(239,68,68,0.3)" strokeWidth="1" strokeDasharray="2 2" />
            <text x="220" y="57" textAnchor="middle" fill="#14B8A6" fontSize="7" fontFamily="DM Sans" fontWeight="600">DISSOLVING</text>

            <text x="275" y="80" fill="rgba(255,255,255,0.2)" fontSize="20" fontFamily="DM Sans">→</text>

            <path d="M330 40 L330 125" fill="none" stroke="rgba(13,148,136,0.3)" strokeWidth="10" strokeLinecap="round" />
            <path d="M330 40 L330 125" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="40" strokeLinecap="round" />
            <path d="M330 115 L330 50" fill="none" stroke="#14B8A6" strokeWidth="1.5" strokeDasharray="5 3" />
            <polygon points="326,55 330,45 334,55" fill="#14B8A6" />
            <text x="330" y="135" textAnchor="middle" fill="#14B8A6" fontSize="8" fontFamily="DM Sans" fontWeight="600">CLEAR</text>
        </svg>
    );
}
