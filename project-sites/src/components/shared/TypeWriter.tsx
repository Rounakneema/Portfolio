'use client';
import { useEffect, useRef, useState } from 'react';

interface TypeWriterProps {
  text: string;
  speedMs?: number;
  delayMs?: number;
  className?: string;
  cursor?: boolean;
  onDone?: () => void;
}

export function TypeWriter({ text, speedMs = 40, delayMs = 0, className = '', cursor = true, onDone }: TypeWriterProps) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delayMs);
    return () => clearTimeout(timeout);
  }, [delayMs]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, ++i));
      if (i >= text.length) {
        clearInterval(interval);
        onDone?.();
      }
    }, speedMs);
    return () => clearInterval(interval);
  }, [started, text, speedMs, onDone]);

  return (
    <span ref={ref} className={className}>
      {displayed}
      {cursor && <span className="animate-pulse">█</span>}
    </span>
  );
}
