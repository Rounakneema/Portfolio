import { MetroMindFooter, MetroMindNav } from '@/components/metromind/MetroMindNav';

export default function MetroMindLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-[#050507] text-white font-sans selection:bg-purple-500/30 selection:text-purple-200"><MetroMindNav /><main>{children}</main><MetroMindFooter /></div>;
}
