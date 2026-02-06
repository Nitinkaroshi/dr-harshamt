import { useEffect, useRef, useState } from 'react';

/**
 * LazyImage Component
 * Progressive image loading with blur-up effect and skeleton
 */
export default function LazyImage({
    src,
    alt,
    className = '',
    style = {},
    aspectRatio = '16/9',
    blurDataUrl = null,
    onLoad = () => { },
    priority = false
}) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(priority);
    const imgRef = useRef(null);

    useEffect(() => {
        if (priority) {
            // Priority images load immediately
            setIsInView(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '50px',
                threshold: 0.01
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, [priority]);

    const handleLoad = () => {
        setIsLoaded(true);
        onLoad();
    };

    return (
        <div
            ref={imgRef}
            className={`lazy-image-wrapper ${className}`}
            style={{
                position: 'relative',
                overflow: 'hidden',
                aspectRatio: aspectRatio,
                backgroundColor: '#f0f0f0',
                ...style
            }}
        >
            {/* Blur placeholder */}
            {blurDataUrl && !isLoaded && (
                <img
                    src={blurDataUrl}
                    alt=""
                    style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'blur(10px)',
                        transform: 'scale(1.1)',
                        transition: 'opacity 0.3s'
                    }}
                    aria-hidden="true"
                />
            )}

            {/* Skeleton loader */}
            {!isLoaded && !blurDataUrl && (
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                        backgroundSize: '200% 100%',
                        animation: 'shimmer 1.5s infinite'
                    }}
                />
            )}

            {/* Actual image */}
            {isInView && (
                <img
                    src={src}
                    alt={alt}
                    onLoad={handleLoad}
                    loading={priority ? 'eager' : 'lazy'}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: isLoaded ? 1 : 0,
                        transition: 'opacity 0.4s ease-in-out'
                    }}
                />
            )}

            <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
        </div>
    );
}

/**
 * LazyBackgroundImage Component
 * For sections with background images
 */
export function LazyBackgroundImage({
    src,
    children,
    className = '',
    style = {},
    overlay = null
}) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const divRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '100px',
                threshold: 0.01
            }
        );

        if (divRef.current) {
            observer.observe(divRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isInView && src) {
            const img = new Image();
            img.onload = () => setIsLoaded(true);
            img.src = src;
        }
    }, [isInView, src]);

    return (
        <div
            ref={divRef}
            className={className}
            style={{
                ...style,
                position: 'relative',
                backgroundImage: isLoaded ? `url(${src})` : 'none',
                backgroundColor: '#f0f0f0',
                transition: 'background-image 0.3s ease-in-out'
            }}
        >
            {overlay && <div style={overlay} />}
            {children}
        </div>
    );
}
