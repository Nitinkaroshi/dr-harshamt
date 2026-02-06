/**
 * Advanced Lazy Loading Utilities
 * Implements intersection observer-based lazy loading for images and components
 */

// Lazy load images with blur-up effect
export function lazyLoadImage(imageElement) {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.dataset.src;

                if (src) {
                    // Create a temporary image to preload
                    const tempImg = new Image();
                    tempImg.onload = () => {
                        img.src = src;
                        img.classList.add('loaded');
                        img.removeAttribute('data-src');
                    };
                    tempImg.src = src;
                }

                obs.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px', // Start loading 50px before entering viewport
        threshold: 0.01
    });

    observer.observe(imageElement);
    return observer;
}

// Lazy load background images
export function lazyLoadBackgroundImage(element) {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const bgImage = el.dataset.bgImage;

                if (bgImage) {
                    el.style.backgroundImage = `url(${bgImage})`;
                    el.classList.add('bg-loaded');
                    el.removeAttribute('data-bg-image');
                }

                obs.unobserve(el);
            }
        });
    }, {
        rootMargin: '100px',
        threshold: 0.01
    });

    observer.observe(element);
    return observer;
}

// Preload critical images
export function preloadCriticalImages(imageUrls) {
    imageUrls.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = url;
        document.head.appendChild(link);
    });
}

// Lazy load component with code splitting
export function lazyLoadComponent(importFn, fallback = null) {
    return {
        component: null,
        loading: true,
        error: null,

        async load() {
            try {
                this.loading = true;
                const module = await importFn();
                this.component = module.default || module;
                this.loading = false;
                return this.component;
            } catch (error) {
                this.error = error;
                this.loading = false;
                console.error('Component lazy load failed:', error);
                return fallback;
            }
        }
    };
}

// Debounce scroll events for performance
export function debounce(func, wait = 100) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle for high-frequency events
export function throttle(func, limit = 100) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Request idle callback polyfill
export const requestIdleCallback = window.requestIdleCallback ||
    function (cb) {
        const start = Date.now();
        return setTimeout(() => {
            cb({
                didTimeout: false,
                timeRemaining: () => Math.max(0, 50 - (Date.now() - start))
            });
        }, 1);
    };

// Prefetch on hover for better UX
export function prefetchOnHover(element, url) {
    let prefetched = false;

    const prefetch = () => {
        if (!prefetched) {
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = url;
            document.head.appendChild(link);
            prefetched = true;
        }
    };

    element.addEventListener('mouseenter', prefetch, { once: true });
    element.addEventListener('touchstart', prefetch, { once: true });
}
