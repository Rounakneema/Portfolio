'use client';

import { useEffect, useState } from 'react';
import mermaid from 'mermaid';

export default function MermaidDiagram({ chart }: { chart: string }) {
  const [svg, setSvg] = useState<string>('');

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'base',
      themeVariables: {
        background: '#0a0a0a',
        primaryColor: '#111',
        primaryBorderColor: '#444',
        primaryTextColor: '#eee',
        lineColor: '#666',
        textColor: '#eee',
        fontFamily: 'monospace',
      },
    });

    const renderDiagram = async () => {
      try {
        const id = 'mermaid-' + Math.random().toString(36).substr(2, 9);
        const { svg: renderedSvg } = await mermaid.render(id, chart);
        setSvg(renderedSvg);
      } catch (error) {
        console.error('Mermaid rendering failed', error);
      }
    };

    renderDiagram();
  }, [chart]);

  return (
    <div 
      className="w-full overflow-x-auto flex justify-center py-12 border-y border-[#222] bg-[#050505] my-12"
      dangerouslySetInnerHTML={{ __html: svg }} 
    />
  );
}