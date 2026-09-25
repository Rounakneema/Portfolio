import { ProjectFooter } from '@/components/ProjectFooter';
import { DizzyNav } from '@/components/dizzy/DizzyNav';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <DizzyNav />
      {children}
            <ProjectFooter slug="dizzy" />
    </>
  );
}



