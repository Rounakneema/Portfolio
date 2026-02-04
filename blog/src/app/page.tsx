import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to Portfolio as the main landing page for now, 
  // or build the specific "Hub" landing page here.
  // The user wanted: Root = Hub. 
  // For now I will make Root = Hub (simple version).

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 text-zinc-900 font-mono p-6">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">ROUNAK NEEMA</h1>
        <p className="text-lg md:text-xl text-zinc-500 max-w-lg mx-auto">
          DevOps / Platform Engineer focused on cloud-native systems & security.
        </p>
      </header>

      <nav className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
        <a href="/portfolio" className="group p-8 border-2 border-zinc-200 hover:border-black transition-colors rounded-sm flex flex-col gap-2">
          <span className="text-sm font-bold text-zinc-400 group-hover:text-black">01</span>
          <span className="text-2xl font-bold">PORTFOLIO</span>
          <span className="text-sm text-zinc-500">Recruiter Snapshot & Resume</span>
        </a>

        <a href="/blog" className="group p-8 border-2 border-zinc-200 hover:border-blue-600 transition-colors rounded-sm flex flex-col gap-2">
          <span className="text-sm font-bold text-zinc-400 group-hover:text-blue-600">02</span>
          <span className="text-2xl font-bold group-hover:text-blue-600">ENGINEERING LOGS</span>
          <span className="text-sm text-zinc-500">Deep Dives & Research</span>
        </a>

        <a href="/projects" className="group p-8 border-2 border-zinc-200 hover:border-emerald-600 transition-colors rounded-sm flex flex-col gap-2 md:col-span-2">
          <span className="text-sm font-bold text-zinc-400 group-hover:text-emerald-600">03</span>
          <span className="text-2xl font-bold group-hover:text-emerald-600">PROJECTS HUB</span>
          <span className="text-sm text-zinc-500">Case Studies & Architectures</span>
        </a>
      </nav>

      <footer className="mt-24 text-sm text-zinc-400">
        &copy; {new Date().getFullYear()} Rounak Neema
      </footer>
    </div>
  );
}
