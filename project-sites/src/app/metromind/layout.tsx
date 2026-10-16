import { MetroMindNav } from '@/components/metromind/MetroMindNav';

export default function MetroMindLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-slate-900 font-sans selection:bg-teal-500/20 selection:text-teal-900 flex flex-col relative overflow-x-hidden">
      <MetroMindNav />
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
