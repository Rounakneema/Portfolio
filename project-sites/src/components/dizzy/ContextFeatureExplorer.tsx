'use client';

import React, { useState } from 'react';

interface FeatureItem {
  id: string;
  title: string;
  tagline: string;
  howItWorks: string;
  useCase: string;
  spec: {
    label: string;
    code: string;
  };
}

const features: FeatureItem[] = [
  {
    id: 'memory',
    title: 'Project context memory',
    tagline: 'Maintains an in-memory document tree across prompts and sessions',
    howItWorks: 'Dizzy keeps an abstract syntax tree (AST) of every frame, layer ID, and token mapping on the active canvas. When you issue a command, the engine diffs the requested change against the current AST rather than re-evaluating the whole canvas from scratch.',
    useCase: 'You ask Dizzy to "make the pricing card taller," and then five minutes later say "now add a badge to it." Dizzy remembers the exact target node without requiring you to re-select the layer.',
    spec: {
      label: 'AST Mutation Diff',
      code: `patch_node({
  target: "node_pricing_card_82f",
  mutation: "APPEND_CHILD",
  child: { type: "BADGE", label: "POPULAR", fillToken: "brand.primary" }
})`
    }
  },
  {
    id: 'brand',
    title: 'Brand and design system awareness',
    tagline: 'Consumes your exact Figma variables, color tokens, and typography styles',
    howItWorks: 'During initialization, the Figma plugin reads your file-level PaintStyles, TextStyleSets, and VariableCollections. The prompt parser forces generated styles to bind strictly to these existing token IDs rather than inventing arbitrary hex codes.',
    useCase: 'When you say "make the header feel warmer," Dizzy queries your defined brand palette, picks your designated warm accent token (e.g. amber-500), and applies it as a native Figma variable bind.',
    spec: {
      label: 'Token Resolution',
      code: `resolve_token("color.accent.warm")
-> MATCH: VariableID: "VariableID:382:941" (Brand/Amber/500)
-> BINDING: frame.fills = [{ type: 'VARIABLE_ALIAS', id: '382:941' }]`
    }
  },
  {
    id: 'reuse',
    title: 'Component reuse',
    tagline: 'Instantiates library components instead of drawing raw shapes',
    howItWorks: 'Instead of creating loose rectangles and raw text layers, Dizzy inspects your published component set. It instantiates ComponentInstance nodes with matching Variant properties, keeping your design system intact.',
    useCase: 'You dictate "add a secondary button below the form." Dizzy clones your existing Button component with variant="secondary" and size="md", preserving all master component auto-layout rules.',
    spec: {
      label: 'Component Instantiation',
      code: `instantiate_component({
  componentKey: "button_core_v2",
  properties: { Variant: "Secondary", State: "Default", HasIcon: false }
})`
    }
  },
  {
    id: 'responsive',
    title: 'Multi-screen and responsive layouts',
    tagline: 'Generates fluid Auto-Layout structures ready for multi-device viewports',
    howItWorks: 'Every generated frame applies Figma Auto-Layout with strict horizontal and vertical resizing constraints (FILL_CONTAINER, HUG_CONTENTS). One spoken prompt can generate desktop (1440px), tablet (834px), and mobile (390px) responsive viewports side by side.',
    useCase: 'You say "generate the checkout flow for mobile and desktop." Dizzy creates both frames simultaneously, refactoring the desktop 2-column grid into a single-column stacked mobile sheet.',
    spec: {
      label: 'Auto-Layout Constraints',
      code: `layout_engine.apply_constraints({
  desktop: { width: 1440, layoutMode: "HORIZONTAL", primaryAxisSizing: "FIXED" },
  mobile:  { width: 390,  layoutMode: "VERTICAL",   primaryAxisSizing: "FIXED" }
})`
    }
  },
  {
    id: 'figma-native',
    title: 'Figma native workflow',
    tagline: 'Two-way local WebSocket bridge to the Figma Desktop Plugin API via MCP',
    howItWorks: 'Dizzy runs a local WebSocket daemon that communicates directly with an active Figma desktop session. Spoken inputs convert to JSON patches that execute via the native Figma Plugin API in under 180ms without leaving your design canvas.',
    useCase: 'You can work side by side with Dizzy: speak adjustments while manually nudging vectors or reordering layers. Changes sync bidirectionally without overwriting manual edits.',
    spec: {
      label: 'WebSocket Protocol Payload',
      code: `WS localhost:4040/figma/mcp
-> SEND: { op: "EXECUTE_TRANSACTION", batchSize: 4, txId: "tx_91a0f" }
<- RECV: { status: "COMMITTED", elapsedMs: 142, nodesModified: 3 }`
    }
  }
];

export function ContextFeatureExplorer() {
  const [activeId, setActiveId] = useState<string>('memory');

  const activeFeature = features.find((f) => f.id === activeId) || features[0];

  return (
    <div className="space-y-4">
      {/* List of 5 items with interactive expand / click */}
      <div className="divide-y divide-neutral-200/80 border-y border-neutral-200/80">
        {features.map((feature) => {
          const isActive = feature.id === activeId;
          return (
            <div key={feature.id} className="transition-colors">
              <button
                type="button"
                onClick={() => setActiveId(feature.id)}
                className={`w-full py-4 text-left flex items-center justify-between group transition-all ${
                  isActive ? 'text-blue-600 font-bold pl-2' : 'text-neutral-900 hover:text-black hover:pl-1'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-2 h-2 rounded-full transition-all ${
                      isActive ? 'bg-blue-600 scale-125' : 'bg-neutral-300 group-hover:bg-neutral-500'
                    }`}
                  />
                  <span className="text-sm sm:text-base">{feature.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-neutral-400 hidden sm:inline">
                    {isActive ? 'Active' : 'Inspect'}
                  </span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isActive ? 'rotate-90 text-blue-600' : 'text-neutral-400 group-hover:text-black group-hover:translate-x-1'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>

              {/* Mobile inline expansion */}
              {isActive && (
                <div className="pb-4 pl-5 sm:hidden space-y-3 animate-in fade-in duration-200">
                  <p className="text-xs text-neutral-600 font-medium">{feature.tagline}</p>
                  <div className="p-3.5 bg-neutral-100 rounded-xl space-y-2 text-xs">
                    <div>
                      <span className="text-[10px] font-mono uppercase font-bold text-neutral-500 block">How It Works</span>
                      <p className="text-neutral-700 leading-relaxed">{feature.howItWorks}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase font-bold text-neutral-500 block">Use Case</span>
                      <p className="text-neutral-700 leading-relaxed">{feature.useCase}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Desktop Detailed Inspector Card */}
      <div className="hidden sm:block p-6 rounded-2xl bg-neutral-100/70 border border-neutral-200/80 space-y-4 animate-in fade-in duration-200">
        <div className="flex items-center justify-between border-b border-neutral-200/70 pb-3">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-600 block">
              Feature Deep Dive
            </span>
            <h4 className="text-base font-bold text-neutral-900">{activeFeature.title}</h4>
          </div>
          <span className="text-[11px] font-mono text-neutral-500">Live Context Inspection</span>
        </div>

        <p className="text-xs text-neutral-600 font-medium leading-relaxed">
          {activeFeature.tagline}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-3.5 bg-white rounded-xl border border-neutral-200/60 space-y-1.5 shadow-sm">
            <span className="text-[10px] font-mono uppercase font-bold text-neutral-500 block">
              Under The Hood
            </span>
            <p className="text-neutral-700 leading-relaxed">{activeFeature.howItWorks}</p>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-neutral-200/60 space-y-1.5 shadow-sm">
            <span className="text-[10px] font-mono uppercase font-bold text-neutral-500 block">
              Practical Scenario
            </span>
            <p className="text-neutral-700 leading-relaxed">{activeFeature.useCase}</p>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 mb-1.5">
            <span>{activeFeature.spec.label}</span>
            <span>JSON Patch / MCP Protocol</span>
          </div>
          <pre className="font-mono text-[11px] bg-neutral-950 text-neutral-200 p-3.5 rounded-xl overflow-x-auto leading-relaxed border border-neutral-800 shadow-inner">
            {activeFeature.spec.code}
          </pre>
        </div>
      </div>
    </div>
  );
}
