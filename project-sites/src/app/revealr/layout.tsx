import { RevealrNav, RevealrFooter } from '@/components/revealr/RevealrNav';

export default function RevealrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-mono flex flex-col selection:bg-green-950 selection:text-green-300">
      <RevealrNav />
      <main className="flex-1">
        {children}
      </main>
      <RevealrFooter />
    </div>
  );
}
