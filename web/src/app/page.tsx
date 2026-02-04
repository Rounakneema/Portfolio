import Link from 'next/link';

export const metadata = {
  title: 'Rounak Neema // DevOps & Security-Focused Platform Engineer',
  description: 'The central hub for Rounak Neema\'s engineering portfolio, archive of technical logs, and project case studies. Building secure cloud-native systems.',
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 text-zinc-900 font-mono p-6">

      {/* Hero Section */}
      <header className="mb-16 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter leading-tight">
          ROUNAK NEEMA <span className="block text-zinc-400 text-2xl md:text-3xl mt-2 font-bold">— DevOps & Security-Focused Platform Engineer</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          Building secure cloud infrastructure, automating defense systems, and breaking things in controlled environments.
        </p>
      </header>

      {/* Main Navigation - The "Magnet" */}
      <nav className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full max-w-5xl mb-24">

        {/* Primary Action: Portfolio (Dominant) */}
        <Link href="/portfolio" className="md:col-span-8 group relative overflow-hidden bg-black text-white p-10 md:p-14 rounded-xl flex flex-col justify-between hover:shadow-2xl transition-all hover:-translate-y-1">
          <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-white/10"></div>

          <div className="relative z-10">
            <span className="inline-block px-3 py-1 rounded-full border border-white/30 text-xs font-bold tracking-widest mb-6 bg-white/10 backdrop-blur-sm">
              RECRUITER SNAPSHOT
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">PORTFOLIO</h2>
            <p className="text-zinc-400 max-w-md text-sm md:text-base">
              Resume, technical skills, and professional experience.
            </p>
          </div>

          <div className="relative z-10 mt-12 flex items-center gap-3 font-bold group-hover:gap-5 transition-all">
            OPEN DOSSIER <span className="text-2xl">→</span>
          </div>
        </Link>

        <div className="md:col-span-4 flex flex-col gap-6">
          {/* Secondary Action: Archive */}
          <Link href="/blog" className="flex-1 group p-8 bg-white border border-zinc-200 hover:border-blue-600 hover:shadow-lg rounded-xl flex flex-col justify-center transition-all hover:-translate-y-0.5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative z-10">
              <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">ARCHIVE</h2>
              <p className="text-xs text-zinc-500 font-sans">Engineering logs, security research & CTF writeups.</p>
            </div>
          </Link>

          {/* Secondary Action: Projects */}
          <Link href="/projects" className="flex-1 group p-8 bg-white border border-zinc-200 hover:border-emerald-600 hover:shadow-lg rounded-xl flex flex-col justify-center transition-all hover:-translate-y-0.5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative z-10">
              <h2 className="text-xl font-bold mb-2 group-hover:text-emerald-600 transition-colors">PROJECTS HUB</h2>
              <p className="text-xs text-zinc-500 font-sans">Case studies, architecture diagrams & deep dives.</p>
            </div>
          </Link>
        </div>

      </nav>

      {/* SEO Content Section */}
      <section className="max-w-3xl mx-auto text-center border-t border-zinc-200 pt-16">
        <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-6">About This Site</h3>
        <p className="text-zinc-600 leading-relaxed mb-8">
          This site documents my work as an early-career DevOps and security-focused engineer. It includes hands-on projects, engineering write-ups, and a portfolio focused on cloud-native systems, automation, and security research.
        </p>

        {/* Semantic Text Navigation for Crawlers */}
        <div className="text-left bg-zinc-100 p-8 rounded-lg max-w-sm mx-auto text-sm">
          <p className="font-bold text-zinc-900 mb-4 uppercase tracking-wider">Explore:</p>
          <ul className="space-y-3">
            <li>
              <Link href="/portfolio" className="text-zinc-600 hover:text-black flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-black rounded-full"></span> Portfolio (Resume & Skills)
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-zinc-600 hover:text-black flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Archive (Engineering Logs)
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-zinc-600 hover:text-black flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Projects Hub (Case Studies)
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <footer className="mt-24 text-sm text-zinc-400">
        &copy; {new Date().getFullYear()} Rounak Neema
      </footer>
    </div>
  );
}
