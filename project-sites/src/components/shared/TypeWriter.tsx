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
  const textRef = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delayMs);
    return () => clearTimeout(timeout);
  }, [delayMs]);

  useEffect(() => {
    if (!started || !textRef.current) return;
    
    let i = 0;
    // Clear initial text just in case
    textRef.current.textContent = '';
    
    const interval = setInterval(() => {
      if (textRef.current) {
        textRef.current.textContent = text.slice(0, ++i);
      }
      if (i >= text.length) {
        clearInterval(interval);
        onDone?.();
      }
    }, speedMs);
    
    return () => clearInterval(interval);
  }, [started, text, speedMs, onDone]);

  return (
    <span className={className}>
      <span ref={textRef}></span>
      {cursor && <span className="animate-pulse ml-1">-^</span>}
    </span>
  );
}
