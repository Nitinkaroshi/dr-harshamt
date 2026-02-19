import { useEffect, useRef, useState } from 'react';

// Intersection Observer hook for scroll animations
export function useInView(threshold = 0.12) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [threshold]);

    return [ref, isVisible];
}

// Counter animation hook
export function useCounter(end, duration = 2000, start = false) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!start) return;

        const numericValue = parseInt(end) || 0;
        if (numericValue === 0) {
            setValue(end);
            return;
        }

        let startTime;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // Ease out cubic
            setValue(Math.floor(eased * numericValue));
            if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    }, [start, end, duration]);

    return value;
}

// Animated stat component
export function AnimatedStat({ value, label }) {
    const [ref, visible] = useInView(0.3);
    const numericPart = parseInt(value) || 0;
    const suffix = value.toString().replace(/[0-9]/g, "");
    const count = useCounter(numericPart, 2000, visible);

    return (
        <div ref={ref}>
            <div style={{
                fontFamily: "'Roboto Slab', serif",
                fontSize: 30,
                fontWeight: 700,
                color: "#14B8A6",
                lineHeight: 1
            }}>
                {numericPart > 0 ? count : value}{suffix}
            </div>
            <div style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: 11,
                color: "rgba(255,255,255,0.35)",
                marginTop: 4,
                letterSpacing: "0.05em",
                textTransform: "uppercase"
            }}>{label}</div>
        </div>
    );
}
