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
  );
}
