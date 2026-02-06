/**
 * Skeleton Loading Components
 * Provide visual feedback while content loads
 */

// Base skeleton component
export function Skeleton({ width = '100%', height = '20px', borderRadius = '4px', style = {} }) {
    return (
        <div
            className="skeleton"
            style={{
                width,
                height,
                borderRadius,
                background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 1.5s infinite',
                ...style
            }}
        />
    );
}

// Card skeleton
export function CardSkeleton() {
    return (
        <div style={{
            background: '#fff',
            borderRadius: 14,
            padding: 24,
            border: '1px solid rgba(0,0,0,0.04)'
        }}>
            <Skeleton height="140px" borderRadius="12px" style={{ marginBottom: 16 }} />
            <Skeleton width="60%" height="16px" style={{ marginBottom: 8 }} />
            <Skeleton width="40%" height="12px" style={{ marginBottom: 12 }} />
            <Skeleton width="100%" height="14px" style={{ marginBottom: 6 }} />
            <Skeleton width="100%" height="14px" style={{ marginBottom: 6 }} />
            <Skeleton width="80%" height="14px" />
        </div>
    );
}

// Hero skeleton
export function HeroSkeleton() {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            background: 'linear-gradient(165deg, #071426 0%, #0A1E3D 40%, #0C2440 70%, #071426 100%)',
            padding: '120px 24px 80px'
        }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48 }}>
                    <div style={{ flex: '1 1 480px' }}>
                        <Skeleton width="200px" height="32px" style={{ marginBottom: 24 }} />
                        <Skeleton width="90%" height="48px" style={{ marginBottom: 12 }} />
                        <Skeleton width="70%" height="16px" style={{ marginBottom: 24 }} />
                        <Skeleton width="85%" height="24px" style={{ marginBottom: 36 }} />
                        <div style={{ display: 'flex', gap: 12 }}>
                            <Skeleton width="150px" height="48px" borderRadius="10px" />
                            <Skeleton width="150px" height="48px" borderRadius="10px" />
                        </div>
                    </div>
                    <div style={{ flex: '0 1 360px' }}>
                        <Skeleton height="480px" borderRadius="20px" />
                    </div>
                </div>
            </div>
        </div>
    );
}

// Services grid skeleton
export function ServicesGridSkeleton({ count = 8 }) {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
            gap: 14
        }}>
            {[...Array(count)].map((_, i) => (
                <CardSkeleton key={i} />
            ))}
        </div>
    );
}

// Testimonial skeleton
export function TestimonialSkeleton() {
    return (
        <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 18,
            padding: '36px 32px',
            minHeight: 200
        }}>
            <div style={{ display: 'flex', marginBottom: 16, gap: 4 }}>
                {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} width="18px" height="18px" borderRadius="2px" />
                ))}
            </div>
            <Skeleton width="100%" height="16px" style={{ marginBottom: 8 }} />
            <Skeleton width="100%" height="16px" style={{ marginBottom: 8 }} />
            <Skeleton width="80%" height="16px" style={{ marginBottom: 24 }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <Skeleton width="44px" height="44px" borderRadius="50%" />
                <div style={{ flex: 1 }}>
                    <Skeleton width="120px" height="14px" style={{ marginBottom: 4 }} />
                    <Skeleton width="180px" height="12px" />
                </div>
            </div>
        </div>
    );
}

// Blog card skeleton
export function BlogCardSkeleton() {
    return (
        <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 14,
            overflow: 'hidden'
        }}>
            <Skeleton height="180px" borderRadius="0" />
            <div style={{ padding: '18px 20px 22px' }}>
                <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
                    <Skeleton width="80px" height="20px" borderRadius="100px" />
                    <Skeleton width="60px" height="20px" borderRadius="100px" />
                </div>
                <Skeleton width="90%" height="18px" style={{ marginBottom: 8 }} />
                <Skeleton width="100%" height="14px" style={{ marginBottom: 6 }} />
                <Skeleton width="100%" height="14px" style={{ marginBottom: 6 }} />
                <Skeleton width="70%" height="14px" />
            </div>
        </div>
    );
}

// FAQ skeleton
export function FAQSkeleton({ count = 6 }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[...Array(count)].map((_, i) => (
                <div
                    key={i}
                    style={{
                        background: '#fff',
                        border: '1px solid rgba(0,0,0,0.05)',
                        borderRadius: 12,
                        padding: '18px 22px'
                    }}
                >
                    <Skeleton width="80%" height="16px" />
                </div>
            ))}
        </div>
    );
}

// Add global shimmer animation
if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.textContent = `
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    .skeleton {
      animation: shimmer 1.5s infinite;
    }
  `;
    document.head.appendChild(style);
}

export default Skeleton;
