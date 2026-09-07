'use client';

import { useEffect, useRef } from 'react';

export default function CursorAura() {
  const auraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || reducedMotion) return;

    const aura = auraRef.current;
    if (!aura) return;

    let raf = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let scale = 1;
    let targetScale = 1;
    let opacity = 0;
    let targetOpacity = 0;

    const handleMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      targetOpacity = 0.5;

      const interactive = e.target as HTMLElement;
      const isInteractive =
        interactive.closest('a, button, [role="button"], .product-card, .category-card, .cursor-target') !== null;
      targetScale = isInteractive ? 1.8 : 1;
    };

    const handleLeave = () => {
      targetOpacity = 0;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;
      scale += (targetScale - scale) * 0.1;
      opacity += (targetOpacity - opacity) * 0.08;

      aura.style.transform = `translate(${currentX - 40}px, ${currentY - 40}px) scale(${scale})`;
      aura.style.opacity = String(opacity);
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseleave', handleLeave);
    document.body.addEventListener('mouseleave', handleLeave);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseleave', handleLeave);
      document.body.removeEventListener('mouseleave', handleLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={auraRef}
      className="hidden md:block"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 80,
        height: 80,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(91,45,245,0.18) 0%, rgba(37,99,235,0.08) 40%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'multiply',
        opacity: 0,
        willChange: 'transform, opacity',
      }}
    />
  );
}
