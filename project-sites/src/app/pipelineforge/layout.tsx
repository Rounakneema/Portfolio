import { ProjectFooter } from '@/components/ProjectFooter';
import { PipelineForgeNav } from '@/components/pipelineforge/PipelineForgeNav';
import { ReactNode } from 'react';

export default function PipelineForgeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white antialiased flex flex-col">
      <PipelineForgeNav />
      <div className="flex-grow">
        {children}
      </div>
      <ProjectFooter slug="pipelineforge" />
    </div>
  );
}
