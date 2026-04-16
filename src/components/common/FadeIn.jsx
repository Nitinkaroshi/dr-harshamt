import { useEffect, useRef, useState } from 'react';

export default function FadeIn({ children, delay = 0, immediate = false, style: extraStyle }) {
    const [isVisible, setIsVisible] = useState(immediate);
    const ref = useRef(null);

    useEffect(() => {
        if (immediate) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay * 1000);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [delay]);

    return (
        <div
            ref={ref}
            style={{
                ...extraStyle,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            }}
        >
            {children}
        </div>
    );
}
