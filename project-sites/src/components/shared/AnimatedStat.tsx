'use client';
import { useEffect, useRef, useState } from 'react';

interface AnimatedStatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number; // ms
  className?: string;
}

export function AnimatedStat({ value, suffix = '', prefix = '', label, duration = 1200, className = '' }: AnimatedStatProps) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = Date.now();
        const tick = () => {
          const elapsed = Date.now() - start;
          const progress = Math.min(elapsed / duration, 1);
          // ease out
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(eased * value));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <div ref={ref} className={`flex flex-col ${className}`}>
      <span className="font-mono font-black text-4xl leading-none">
        {prefix}{display.toLocaleString()}{suffix}
      </span>
      <span className="font-mono text-xs text-gray-500 uppercase tracking-widest mt-1">{label}</span>
    </div>
  );
}
