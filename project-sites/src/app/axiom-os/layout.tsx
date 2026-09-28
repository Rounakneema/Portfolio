import { ProjectFooter } from '@/components/ProjectFooter';
import React from 'react';
import { AxiomNav } from '@/components/axiom/AxiomNav';

export default function AxiomOsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-white">
      <AxiomNav />
      {children}
      <ProjectFooter slug="axiom-os" />
    </div>
  );
}
