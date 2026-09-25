'use client';
import { useEffect, useRef, useState } from 'react';

export interface LogEntry {
  time?: string;
  source: string;
  message: string;
  level?: 'info' | 'warn' | 'error' | 'ok' | 'anomaly';
}

interface TerminalStreamProps {
  entries: LogEntry[];
  intervalMs?: number;
  className?: string;
  accentColor?: string; // tailwind class for anomaly highlight e.g. 'text-amber-400'
}

function levelClass(level?: LogEntry['level'], accent?: string) {
  switch (level) {
    case 'warn':    return 'text-yellow-400';
    case 'error':   return 'text-red-500';
    case 'ok':      return 'text-green-400';
    case 'anomaly': return accent ?? 'text-amber-400';
    default:        return 'text-gray-400';
  }
}

export function TerminalStream({ entries, intervalMs = 600, className = '', accentColor }: TerminalStreamProps) {
  const [visible, setVisible] = useState<LogEntry[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  const idx = useRef(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Reset and replay loop
    idx.current = 0;
    setVisible([]);
    timer.current = setInterval(() => {
      setVisible(prev => {
        const next = entries[idx.current % entries.length];
        idx.current++;
        return [...prev.slice(-18), next]; // keep last 18 lines
      });
    }, intervalMs);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [entries, intervalMs]);

  useEffect(() => {
    if (ref.current) ref.current.scrollTop = ref.current.scrollHeight;
  }, [visible]);

  return (
    <div ref={ref} className={`overflow-hidden font-mono text-xs leading-relaxed ${className}`}>
      {visible.map((e, i) => (
        <div key={i} className="flex gap-3 items-start">
          {e.time && <span className="text-gray-600 shrink-0">{e.time}</span>}
          <span className="text-gray-500 shrink-0 min-w-[80px]">{e.source}</span>
          <span className={levelClass(e.level, accentColor)}>{e.message}</span>
        </div>
      ))}
      <span className="inline-block w-2 h-3 bg-current animate-pulse ml-1" />
    </div>
  );
}
