'use client';
import { useEffect, useRef, useState } from 'react';

export interface PipelineStep {
  label: string;
  sublabel?: string;
  icon?: string;
}

interface PipelineStepsProps {
  steps: PipelineStep[];
  autoPlay?: boolean;
  stepDurationMs?: number;
  successColor?: string;
  pendingColor?: string;
  className?: string;
  onComplete?: () => void;
  direction?: 'horizontal' | 'vertical';
}

export function PipelineSteps({
  steps,
  autoPlay = false,
  stepDurationMs = 800,
  successColor = '#3fb950',
  pendingColor = '#30363d',
  className = '',
  onComplete,
  direction = 'horizontal',
}: PipelineStepsProps) {
  const [active, setActive] = useState(-1);
  const [done, setDone] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function run() {
    setActive(-1);
    setDone(false);
    let step = 0;
    function advance() {
      if (step >= steps.length) {
        setDone(true);
        onComplete?.();
        return;
      }
      setActive(step);
      step++;
      timer.current = setTimeout(advance, stepDurationMs);
    }
    timer.current = setTimeout(advance, 200);
  }

  useEffect(() => {
    if (autoPlay) run();
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [autoPlay]);

  const isH = direction === 'horizontal';

  return (
    <div className={className}>
      <div className={`flex ${isH ? 'flex-row flex-wrap gap-0' : 'flex-col gap-0'} items-center`}>
        {steps.map((step, i) => (
          <div key={i} className={`flex ${isH ? 'flex-row' : 'flex-col'} items-center`}>
            {/* Step box */}
            <div
              className="relative flex flex-col items-center justify-center px-4 py-3 border font-mono text-xs transition-all duration-500 min-w-[90px] text-center"
              style={{
                borderColor: i <= active ? successColor : pendingColor,
                color: i <= active ? successColor : '#666',
                background: i <= active ? `${successColor}10` : 'transparent',
              }}
            >
              {i <= active && i < active && (
                <span className="absolute top-1 right-1 text-[10px]" style={{ color: successColor }}>✓</span>
              )}
              {i === active && !done && (
                <span className="absolute top-1 right-1 text-[10px] animate-pulse" style={{ color: successColor }}>●</span>
              )}
              <span className="font-bold text-sm">{step.label}</span>
              {step.sublabel && <span className="text-[10px] opacity-60 mt-0.5">{step.sublabel}</span>}
            </div>
            {/* Connector */}
            {i < steps.length - 1 && (
              <div
                className={`transition-all duration-500 ${isH ? 'w-6 h-px' : 'w-px h-4'}`}
                style={{ background: i < active ? successColor : pendingColor }}
              />
            )}
          </div>
        ))}
      </div>
      {!autoPlay && (
        <button
          onClick={run}
          disabled={active >= 0 && !done}
          className="mt-4 px-6 py-2 font-mono text-xs font-bold uppercase tracking-widest border transition-all disabled:opacity-40"
          style={{ borderColor: successColor, color: successColor }}
        >
          {done ? '[ RE-DEPLOY ]' : active >= 0 ? '[ DEPLOYING... ]' : '[ DEPLOY ]'}
        </button>
      )}
      {done && (
        <p className="mt-3 font-mono text-xs font-bold tracking-widest" style={{ color: successColor }}>
          ✓ DEPLOYMENT SUCCESSFUL
        </p>
      )}
    </div>
  );
}
