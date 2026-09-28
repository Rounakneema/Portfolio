import { ProjectFooter } from '@/components/ProjectFooter';
import { DizzyNav } from '@/components/dizzy/DizzyNav';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-white">
      <DizzyNav />
      {children}
      <ProjectFooter slug="dizzy" />
    </div>
  );
}
