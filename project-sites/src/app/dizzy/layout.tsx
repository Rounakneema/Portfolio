import { ProjectFooter } from '@/components/ProjectFooter';
import { DizzyNav } from '@/components/dizzy/DizzyNav';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-h-screen bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white antialiased">
      <DizzyNav />
      {children}
      <ProjectFooter slug="dizzy" />
    </div>
  );
}
