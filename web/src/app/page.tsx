import Link from 'next/link';
import { ArrowUpRight, Terminal, Shield, Cpu } from 'lucide-react';

export const metadata = {
  title: 'Rounak Neema | DevOps & Security-Focused Platform Engineer',
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 text-zinc-900 font-mono p-6 relative">

      {/* Sticky CTA - Quiet but present */}
      <Link href="/portfolio" className="fixed top-6 right-6 z-50 bg-black text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-widest hover:bg-zinc-800 transition-all shadow-lg flex items-center gap-2 group">
        VIEW PORTFOLIO <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </Link>

      {/* Hero Section */}
      <header className="mb-16 text-center max-w-4xl mx-auto mt-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter leading-none">
          ROUNAK NEEMA
        </h1>
        <h2 className="text-xl md:text-2xl text-zinc-800 font-bold mb-6 tracking-tight">
          DevOps & Security-Focused Platform Engineer
        </h2>
        <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed mb-10">
          I build cloud-native systems, security tooling, and automation.
          <br className="hidden md:block" /> This site documents my projects, engineering write-ups, and portfolio.
        </p>

        {/* Proof Strip */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm font-bold text-zinc-500 uppercase tracking-wider mb-8">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-600" /> 100+ CTF Challenges Solved
          </div>
          <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full my-auto hidden md:block"></div>
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-blue-600" /> Go-Based Security Tooling
          </div>
          <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full my-auto hidden md:block"></div>
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-purple-600" /> Cloud + DevSecOps Focus
          </div>
          <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full my-auto hidden md:block"></div>
          <div className="flex items-center gap-2 text-zinc-800">
            Open to Internships
          </div>
        </div>
      </header>

      {/* Main Navigation - The "Funnel" */}
      <nav className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full max-w-5xl mb-24">

        {/* Primary Action: Portfolio (Dominant) */}
        <Link href="/portfolio" className="md:col-span-8 group relative overflow-hidden bg-zinc-900 text-white p-10 md:p-14 rounded-xl flex flex-col justify-between hover:shadow-2xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-black">
          <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-white/10"></div>

          <div className="relative z-10">
            <span className="inline-block px-3 py-1 rounded-full border border-white/30 text-[10px] font-bold tracking-widest mb-6 bg-white/10 backdrop-blur-sm uppercase">
              Primary Destination
            </span>
            <h3 className="text-4xl md:text-5xl font-bold mb-4">PORTFOLIO</h3>
            <p className="text-zinc-400 max-w-md text-sm md:text-base leading-relaxed">
              Resume, technical skills, detailed experience & hiring context.
              <br />Everything you need to evaluate me as a candidate.
            </p>
          </div>

          <div className="relative z-10 mt-12 flex items-center gap-3 font-bold group-hover:gap-5 transition-all text-emerald-400">
            VIEW PORTFOLIO <ArrowUpRight className="w-6 h-6" />
          </div>
        </Link>

        <div className="md:col-span-4 flex flex-col gap-6">
          {/* Secondary Action: Projects */}
          <Link href="/projects" className="flex-1 group p-8 bg-white border-2 border-zinc-100 hover:border-emerald-600 hover:shadow-lg rounded-xl flex flex-col justify-center transition-all hover:-translate-y-0.5 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-2 group-hover:text-emerald-600 transition-colors flex items-center gap-2">
                PROJECTS HUB <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-xs text-zinc-500 font-sans">Case studies & deep dives.</p>
            </div>
          </Link>

          {/* Secondary Action: Archive */}
          <Link href="/blog" className="flex-1 group p-8 bg-white border-2 border-zinc-100 hover:border-blue-600 hover:shadow-lg rounded-xl flex flex-col justify-center transition-all hover:-translate-y-0.5 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                ARCHIVE <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-xs text-zinc-500 font-sans">Engineering logs & research.</p>
            </div>
          </Link>
        </div>

      </nav>

      {/* SEO Content Section - Semantic Footer */}
      <section className="max-w-3xl mx-auto text-center border-t border-zinc-200 pt-16 pb-12">
        <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6">About This Hub</h4>
        <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
          This website serves as a central hub for my portfolio, projects, and engineering write-ups focused on DevOps, cloud infrastructure, and security engineering.
        </p>

        {/* Semantic Text Navigation for Crawlers */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-zinc-600">
          <Link href="/portfolio" className="hover:text-black hover:underline decoration-zinc-400 underline-offset-4">Portfolio</Link>
          <Link href="/projects" className="hover:text-black hover:underline decoration-zinc-400 underline-offset-4">Projects Hub</Link>
          <Link href="/blog" className="hover:text-black hover:underline decoration-zinc-400 underline-offset-4">Engineering Archive</Link>
        </nav>
      </section>

      <footer className="text-xs text-zinc-300 py-6">
        &copy; {new Date().getFullYear()} Rounak Neema
      </footer>
    </div>
  );
}
