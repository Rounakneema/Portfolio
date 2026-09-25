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
    <nav className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#080b0a]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        <Link href={`${base || '/'}`} className="flex items-center gap-3 group">
          <span className="text-green-400 text-xl font-black tracking-tight group-hover:text-green-300 transition-colors">
            REVEALR
          </span>
          <span className="rounded border border-lime-300/15 bg-lime-300/[0.06] px-1.5 py-0.5 text-[9px] text-lime-200/80 font-mono">
            v1.0-beta
          </span>
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {nav.map(n => {
            const isActive = n.exact
              ? pathname === n.href || pathname === base || pathname === `${base}/`
              : pathname.startsWith(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`text-xs tracking-wider transition-colors font-mono ${
                  isActive ? 'text-lime-300 font-bold' : 'text-zinc-500 hover:text-white'
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
          className="flex items-center gap-2 rounded-md border border-white/[0.09] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-zinc-300 transition hover:border-lime-300/40 hover:text-lime-200 font-mono"
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
    <footer className="mt-0 border-t border-white/[0.07] bg-[#080b0a]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row md:px-10">
        <div className="text-sm text-zinc-500 font-mono">
          Built by <a href="https://rounakneema.in" className="text-white hover:text-green-400 transition-colors">Rounak Neema</a>
        </div>
        <div className="flex items-center gap-6 font-mono text-xs text-zinc-500">
          <a href="https://rounakneema.in/projects" className="hover:text-white transition-colors">All Projects</a>
          <a href="https://github.com/rounakneema/Revealr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://rounakneema.in" className="hover:text-white transition-colors">Portfolio</a>
        </div>
      </div>
    </footer>
  );
}
