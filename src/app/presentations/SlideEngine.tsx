'use client';

import { useState, useEffect, useCallback, useRef, type ReactNode } from 'react';

type SlideEngineProps = {
  totalSlides: number;
  children: (props: {
    currentSlide: number;
    animatedSlides: Set<number>;
    getSlideStyle: (index: number) => React.CSSProperties;
    a: (slideIndex: number, delay?: number) => string;
    d: (delay: number) => React.CSSProperties;
  }) => ReactNode;
};

export function SlideEngine({ totalSlides, children }: SlideEngineProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animatedSlides, setAnimatedSlides] = useState<Set<number>>(new Set([0]));
  const isAnimating = useRef(false);
  const touchStartX = useRef(0);

  const goTo = useCallback((index: number) => {
    if (isAnimating.current || index === currentSlide || index < 0 || index >= totalSlides) return;
    isAnimating.current = true;
    setCurrentSlide(index);
    setAnimatedSlides(prev => new Set(prev).add(index));
    setTimeout(() => { isAnimating.current = false; }, 600);
  }, [currentSlide, totalSlides]);

  const next = useCallback(() => goTo(currentSlide + 1), [goTo, currentSlide]);
  const prev = useCallback(() => goTo(currentSlide - 1), [goTo, currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); next(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [next, prev]);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
    const handleTouchEnd = (e: TouchEvent) => {
      const diff = touchStartX.current - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) { diff > 0 ? next() : prev(); }
    };
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [next, prev]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('.progress-bar') || target.closest('.pres-tab-bar') || target.closest('.pres-header') || target.closest('a')) return;
    if (e.clientX > window.innerWidth / 2) next(); else prev();
  }, [next, prev]);

  const getSlideStyle = (index: number): React.CSSProperties => {
    if (index === currentSlide) return { opacity: 1, transform: 'translateX(0)', pointerEvents: 'auto' };
    const dir = index < currentSlide ? -1 : 1;
    return { opacity: 0, transform: `translateX(${dir * 100}%)`, pointerEvents: 'none' };
  };

  const a = (slideIndex: number, _delay: number = 0) => {
    const active = animatedSlides.has(slideIndex) && currentSlide === slideIndex;
    return active ? 'animate-in' : '';
  };

  const d = (delay: number): React.CSSProperties => ({ animationDelay: `${delay * 0.15}s` });

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: slideEngineCSS }} />
      <div className="pres-slideshow" onClick={handleClick}>
        {children({ currentSlide, animatedSlides, getSlideStyle, a, d })}

        <p className="pres-nav-hint">Tap right side or press → to advance</p>

        <nav className="progress-bar" onClick={(e) => e.stopPropagation()}>
          {Array.from({ length: totalSlides }).map((_, i) => (
            <span
              key={i}
              className={`progress-dot ${i === currentSlide ? 'active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </nav>
      </div>
    </>
  );
}

const slideEngineCSS = `
.pres-slideshow {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.progress-bar {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.75rem;
  z-index: 100;
  padding: 0.5rem 1rem;
  background: hsla(220, 13%, 10%, 0.8);
  border-radius: 2rem;
  backdrop-filter: blur(8px);
  border: 1px solid var(--border, hsl(220 13% 18%));
}

.progress-dot {
  width: 10px; height: 10px; border-radius: 50%;
  background: var(--border, hsl(220 13% 18%));
  cursor: pointer; transition: all 0.3s ease;
}
.progress-dot:hover { background: var(--fg-muted, hsl(220 10% 55%)); transform: scale(1.3); }
.progress-dot.active {
  background: var(--gold, hsl(38 92% 50%));
  transform: scale(1.3);
  box-shadow: 0 0 12px hsla(38, 92%, 50%, 0.4);
}

.pres-nav-hint {
  position: absolute; bottom: 5rem; left: 50%; transform: translateX(-50%);
  color: var(--fg-muted, hsl(220 10% 55%)); font-size: 0.8rem; opacity: 0.6;
  z-index: 100; pointer-events: none;
  animation: pres-fade-pulse 3s ease-in-out infinite;
  white-space: nowrap;
}
@keyframes pres-fade-pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
`;
