import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

export default function Counter({ value, duration = 2 }) {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const isInView = useInView(countRef, { once: true });
    
    // Extract numerical value and any suffix (e.g., "8+" -> 8 and "+")
    const numericValue = parseInt(value.toString().replace(/,/g, ''));
    const suffix = value.toString().replace(/[0-9]/g, '');

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const end = numericValue;
        const totalDuration = duration * 1000;
        const startTime = performance.now();

        const updateCount = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / totalDuration, 1);
            
            // Ease out function for smoother "spinning" finish
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            
            const currentCount = Math.floor(easedProgress * end);
            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(updateCount);
    }, [isInView, numericValue, duration]);

    return (
        <span ref={countRef}>
            {count.toLocaleString()}{suffix}
        </span>
    );
}
