'use client';
import Link from 'next/link';

export function DizzyNav() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#333] font-mono">
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-16 overflow-x-auto">
          <div className="flex space-x-6 text-xs md:text-sm uppercase font-bold whitespace-nowrap">
            <a href="#concept" className="text-[#e0e0e0] hover:text-[#ff3366] transition-colors">Concept</a>
            <a href="#voice-to-design" className="text-[#e0e0e0] hover:text-[#ff3366] transition-colors">Voice → Design</a>
            <a href="#semantic-state" className="text-[#e0e0e0] hover:text-[#ff3366] transition-colors">Semantic State</a>
            <a href="#figma-mcp" className="text-[#e0e0e0] hover:text-[#ff3366] transition-colors">Figma MCP</a>
            <a href="#architecture" className="text-[#e0e0e0] hover:text-[#ff3366] transition-colors">Architecture</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
