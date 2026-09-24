'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Github } from 'lucide-react';

export function RevealrNav() {
  const pathname = usePathname() || '';
  const isSubfolder = pathname.startsWith('/revealr');
  const base = isSubfolder ? '/revealr' : '';

  const nav = [
    { href: `${base || '/'}`, label: 'Overview', exact: true },
    { href: `${base}/architecture`, label: 'Architecture' },
    { href: `${base}/benchmarks`, label: 'Benchmarks' },
    { href: `${base}/security`, label: 'Security' },
    { href: `${base}/docs`, label: 'Docs' },
    { href: `${base}/changelog`, label: 'Changelog' },
  ];

  return (
    <nav className="border-b border-zinc-800 sticky top-0 bg-[#0a0a0a]/95 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href={`${base || '/'}`} className="flex items-center gap-3 group">
          <span className="text-green-400 text-xl font-black tracking-tight group-hover:text-green-300 transition-colors">
            REVEALR
          </span>
          <span className="text-zinc-600 text-xs border border-zinc-800 px-1.5 py-0.5 rounded font-mono">
            v1.0-beta
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {nav.map(n => {
            const isActive = n.exact
              ? pathname === n.href || pathname === base || pathname === `${base}/`
              : pathname.startsWith(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`text-xs tracking-wider transition-colors font-mono ${
                  isActive ? 'text-green-400 font-bold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {n.label.toUpperCase()}
              </Link>
            );
          })}
        </div>
        <a
          href="https://github.com/rounakneema/Revealr"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs border border-zinc-700 px-3 py-1.5 rounded hover:border-green-500 hover:text-green-400 transition-all font-mono"
        >
          <Github className="w-3.5 h-3.5" /> Source
        </a>
      </div>
    </nav>
  );
}

export function RevealrFooter() {
  const pathname = usePathname() || '';
  const isSubfolder = pathname.startsWith('/revealr');
  const base = isSubfolder ? '/revealr' : '';

  return (
    <footer className="border-t border-zinc-800 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-zinc-500 font-mono">
          Built by <a href="https://rounakneema.in" className="text-white hover:text-green-400 transition-colors">Rounak Neema</a>
        </div>
        <div className="flex items-center gap-6 font-mono text-xs text-zinc-500">
          <Link href={`${base}/llms.txt`} className="hover:text-green-400 transition-colors">llms.txt</Link>
          <a href="https://rounakneema.in/projects" className="hover:text-white transition-colors">All Projects</a>
          <a href="https://github.com/rounakneema/Revealr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://rounakneema.in" className="hover:text-white transition-colors">Portfolio</a>
        </div>
      </div>
    </footer>
  );
}
