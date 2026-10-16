import { ProjectFooter } from '@/components/ProjectFooter';
import React from 'react';
import { AxiomNav } from '@/components/axiom/AxiomNav';

export default function AxiomOsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen bg-[#fcfbf7] text-[#1c1917] selection:bg-[#2d5a3f] selection:text-white">
      <AxiomNav />
      {children}
      <ProjectFooter slug="axiomos" />
    </div>
  );
}
