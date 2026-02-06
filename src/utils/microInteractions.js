/**
 * Micro-Interactions Library
 * Reusable CSS and JS for subtle UI enhancements
 */

// Add to global styles or component styles
export const microInteractionStyles = `
  /* Smooth transitions for all interactive elements */
  button, a, input, select, textarea {
    transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  }

  /* Button ripple effect */
  .btn-ripple {
    position: relative;
    overflow: hidden;
  }

  .btn-ripple::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  .btn-ripple:active::after {
    width: 300px;
    height: 300px;
  }

  /* Card lift on hover */
  .card-lift {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card-lift:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(13, 148, 136, 0.15);
  }

  /* Glow effect */
  .glow-on-hover {
    transition: box-shadow 0.3s ease;
  }

  .glow-on-hover:hover {
    box-shadow: 0 0 20px rgba(13, 148, 136, 0.4),
                0 0 40px rgba(13, 148, 136, 0.2);
  }

  /* Scale on hover */
  .scale-hover {
    transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .scale-hover:hover {
    transform: scale(1.05);
  }

  /* Rotate on hover */
  .rotate-hover {
    transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .rotate-hover:hover {
    transform: rotate(5deg);
  }

  /* Underline animation */
  .underline-animate {
    position: relative;
  }

  .underline-animate::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: #0D9488;
    transition: width 0.3s ease;
  }

  .underline-animate:hover::after {
    width: 100%;
  }

  /* Pulse animation */
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }

  .pulse {
    animation: pulse 2s ease-in-out infinite;
  }

  /* Shake animation */
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
  }

  .shake {
    animation: shake 0.5s ease-in-out;
  }

  /* Bounce animation */
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .bounce {
    animation: bounce 1s ease-in-out infinite;
  }

  /* Fade in animation */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .fade-in {
    animation: fadeIn 0.6s ease-out;
  }

  /* Slide in from left */
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-30px); }
    to { opacity: 1; transform: translateX(0); }
  }

  .slide-in-left {
    animation: slideInLeft 0.6s ease-out;
  }

  /* Slide in from right */
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(30px); }
    to { opacity: 1; transform: translateX(0); }
  }

  .slide-in-right {
    animation: slideInRight 0.6s ease-out;
  }

  /* Input focus glow */
  input:focus, textarea:focus, select:focus {
    outline: none;
    border-color: #0D9488;
    box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.1);
  }

  /* Smooth scroll */
  html {
    scroll-behavior: smooth;
  }

  /* Selection color */
  ::selection {
    background: rgba(13, 148, 136, 0.2);
    color: #071426;
  }

  /* Loading spinner */
  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .spinner {
    animation: spin 1s linear infinite;
  }

  /* Gradient animation */
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .gradient-animate {
    background-size: 200% 200%;
    animation: gradientShift 3s ease infinite;
  }

  /* Tooltip */
  .tooltip {
    position: relative;
  }

  .tooltip::before {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(-8px);
    padding: 6px 12px;
    background: #071426;
    color: #fff;
    font-size: 12px;
    border-radius: 6px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s, transform 0.3s;
  }

  .tooltip::after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: #071426;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
  }

  .tooltip:hover::before,
  .tooltip:hover::after {
    opacity: 1;
    transform: translateX(-50%) translateY(-4px);
  }

  /* Skeleton shimmer */
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  .skeleton {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
  }

  /* Progress bar animation */
  @keyframes progressFill {
    from { width: 0; }
  }

  .progress-animate {
    animation: progressFill 1.5s ease-out;
  }

  /* Floating animation */
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .float {
    animation: float 3s ease-in-out infinite;
  }

  /* Typewriter effect */
  @keyframes typewriter {
    from { width: 0; }
    to { width: 100%; }
  }

  .typewriter {
    overflow: hidden;
    border-right: 2px solid #0D9488;
    white-space: nowrap;
    animation: typewriter 3s steps(40) 1s 1 normal both;
  }

  /* Blink cursor */
  @keyframes blink {
    50% { border-color: transparent; }
  }

  .blink-cursor {
    border-right: 2px solid #0D9488;
    animation: blink 1s step-end infinite;
  }
`;

// JavaScript micro-interactions
export class MicroInteractions {
    // Add ripple effect to button
    static addRipple(button) {
        button.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple-effect');

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    }

    // Add shake animation on error
    static shake(element) {
        element.classList.add('shake');
        setTimeout(() => element.classList.remove('shake'), 500);
    }

    // Add pulse animation
    static pulse(element, duration = 2000) {
        element.classList.add('pulse');
        setTimeout(() => element.classList.remove('pulse'), duration);
    }

    // Smooth scroll to element
    static smoothScrollTo(elementId, offset = 0) {
        const element = document.getElementById(elementId);
        if (element) {
            const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    }

    // Copy to clipboard with feedback
    static async copyToClipboard(text, feedbackElement) {
        try {
            await navigator.clipboard.writeText(text);
            if (feedbackElement) {
                feedbackElement.textContent = 'Copied!';
                feedbackElement.classList.add('fade-in');
                setTimeout(() => {
                    feedbackElement.textContent = '';
                    feedbackElement.classList.remove('fade-in');
                }, 2000);
            }
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    }

    // Animate number counter
    static animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }

    // Parallax scroll effect
    static parallax(element, speed = 0.5) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const coords = scrolled * speed;
            element.style.transform = `translateY(${coords}px)`;
        });
    }

    // Lazy load images
    static lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // Add hover sound effect
    static addHoverSound(element, soundUrl) {
        const audio = new Audio(soundUrl);
        element.addEventListener('mouseenter', () => {
            audio.currentTime = 0;
            audio.play().catch(() => { }); // Ignore autoplay errors
        });
    }

    // Confetti effect
    static confetti(duration = 3000) {
        const colors = ['#0D9488', '#14B8A6', '#5EEAD4', '#2DD4BF'];
        const confettiCount = 50;

        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-10px';
            confetti.style.opacity = '1';
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            confetti.style.transition = `all ${duration}ms ease-out`;
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';

            document.body.appendChild(confetti);

            setTimeout(() => {
                confetti.style.top = window.innerHeight + 'px';
                confetti.style.opacity = '0';
                confetti.style.transform = `rotate(${Math.random() * 720}deg)`;
            }, 10);

            setTimeout(() => confetti.remove(), duration);
        }
    }
}

export default MicroInteractions;
