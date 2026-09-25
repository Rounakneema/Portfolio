'use client';

import { useEffect, useRef, useState } from 'react';

// Node positions on a 400x200 viewBox — deliberate asymmetric layout for realism
const NODES = [
  { id: 0, x: 60,  y: 40,  label: '10.10.11.1'  },
  { id: 1, x: 200, y: 20,  label: '10.10.11.24' },
  { id: 2, x: 340, y: 45,  label: '10.10.11.37' },
  { id: 3, x: 110, y: 110, label: '10.10.11.5'  },
  { id: 4, x: 200, y: 105, label: '10.10.11.12' },
  { id: 5, x: 300, y: 120, label: '10.10.11.98' },
  { id: 6, x: 70,  y: 175, label: '10.10.11.71' },
  { id: 7, x: 330, y: 180, label: '10.10.11.99' },
];

// Mesh edges connecting the network
const EDGES: [number, number][] = [
  [0, 1], [1, 2], [1, 4], [0, 3],
  [3, 4], [4, 5], [2, 5], [3, 6],
  [5, 7], [4, 7], [6, 4],
];

// Node index that periodically flashes amber ("new host detected")
const ALERT_NODE = 7;

export function NetworkTopology() {
  const [alertActive, setAlertActive] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Cycle the amber alert: on for 2.5s, off for 4.5s
  useEffect(() => {
    function cycle() {
      setAlertActive(true);
      timerRef.current = setTimeout(() => {
        setAlertActive(false);
        timerRef.current = setTimeout(cycle, 4500);
      }, 2500);
    }
    timerRef.current = setTimeout(cycle, 2000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes nodeGlow {
          0%, 100% { opacity: 1; filter: drop-shadow(0 0 3px #a3e635) drop-shadow(0 0 6px #a3e635); }
          50%       { opacity: 0.55; filter: drop-shadow(0 0 1px #a3e635); }
        }
        @keyframes nodeGlowAmber {
          0%, 100% { opacity: 1; filter: drop-shadow(0 0 4px #f59e0b) drop-shadow(0 0 10px #f59e0b); }
          50%       { opacity: 0.6; filter: drop-shadow(0 0 2px #f59e0b); }
        }
        @keyframes edgeDash {
          to { stroke-dashoffset: -40; }
        }
        @keyframes newHostBadge {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.45; }
        }
        .nt-node-normal { animation: nodeGlow 2.4s ease-in-out infinite; }
        .nt-node-alert  { animation: nodeGlowAmber 1.1s ease-in-out infinite; }
        .nt-edge        { animation: edgeDash 6s linear infinite; }
        .nt-edge-alert  { animation: edgeDash 2s linear infinite; }
        .nt-new-badge   { animation: newHostBadge 1s ease-in-out infinite; }
      `}</style>

      <svg
        viewBox="0 0 400 200"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Network topology diagram"
      >
        {/* Edges */}
        {EDGES.map(([a, b]) => {
          const na = NODES[a];
          const nb = NODES[b];
          const isAlertEdge = alertActive && (a === ALERT_NODE || b === ALERT_NODE);
          return (
            <line
              key={`${a}-${b}`}
              x1={na.x} y1={na.y}
              x2={nb.x} y2={nb.y}
              stroke={isAlertEdge ? '#f59e0b' : '#a3e635'}
              strokeWidth={isAlertEdge ? 1.5 : 1}
              strokeOpacity={isAlertEdge ? 0.6 : 0.22}
              strokeDasharray="6 4"
              className={isAlertEdge ? 'nt-edge-alert' : 'nt-edge'}
            />
          );
        })}

        {/* Nodes */}
        {NODES.map((node) => {
          const isAlert = alertActive && node.id === ALERT_NODE;
          return (
            <g key={node.id}>
              {/* Outer ring */}
              <circle
                cx={node.x} cy={node.y} r={isAlert ? 10 : 8}
                fill="none"
                stroke={isAlert ? '#f59e0b' : '#a3e635'}
                strokeWidth="1"
                strokeOpacity={isAlert ? 0.5 : 0.25}
              />
              {/* Core dot */}
              <circle
                cx={node.x} cy={node.y} r={isAlert ? 5 : 4}
                fill={isAlert ? '#f59e0b' : '#a3e635'}
                className={isAlert ? 'nt-node-alert' : 'nt-node-normal'}
                style={{ animationDelay: `${node.id * 0.31}s` }}
              />
              {/* IP label for select nodes */}
              {(node.id === 1 || node.id === 4 || node.id === ALERT_NODE) && (
                <text
                  x={node.x}
                  y={node.id === ALERT_NODE ? node.y - 16 : node.y + 18}
                  textAnchor="middle"
                  fontSize="7"
                  fill={isAlert ? '#fcd34d' : '#a3e635'}
                  fillOpacity={isAlert ? 1 : 0.65}
                  fontFamily="monospace"
                >
                  {node.label}
                </text>
              )}
              {/* NEW badge for alert node */}
              {isAlert && (
                <text
                  x={node.x + 13}
                  y={node.y - 8}
                  fontSize="6.5"
                  fill="#fbbf24"
                  fontFamily="monospace"
                  fontWeight="bold"
                  className="nt-new-badge"
                >
                  NEW
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </>
  );
}
