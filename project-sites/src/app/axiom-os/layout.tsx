import React from 'react';
import { AxiomNav } from '@/components/axiom/AxiomNav';

export default function AxiomOsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <AxiomNav />
      {children}
    </div>
  );
}
