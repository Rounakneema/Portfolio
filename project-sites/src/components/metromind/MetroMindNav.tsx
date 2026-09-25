'use client';

import Link from 'next/link';
import { Github, Grid2X2, Layers3 } from 'lucide-react';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Overview' },
  { href: '/architecture', label: 'Architecture' },
];

export function MetroMindNav() {
  const pathname = usePathname() || '/';

  return (
    <nav className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#050507]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        <div className="flex items-center gap-3">
          <Link href="/" className="group flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-md border border-purple-400/25 bg-purple-400/10"><Layers3 className="h-3.5 w-3.5 text-purple-300" /></span>
            <span className="font-mono text-xs font-bold tracking-[0.19em] text-zinc-100">METROMIND</span>
          </Link>
          <span className="hidden rounded border border-purple-300/15 bg-purple-300/[0.06] px-1.5 py-0.5 text-[9px] font-mono text-purple-200 sm:block">SIH BUILD</span>
        </div>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => {
            const active = link.href === '/' ? pathname === '/' || pathname === '/metromind' : pathname.endsWith(link.href);
            return <Link key={link.href} href={link.href} className={`text-[10px] font-bold uppercase tracking-[0.15em] transition-colors ${active ? 'text-purple-300' : 'text-zinc-500 hover:text-white'}`}>{link.label}</Link>;
          })}
        </div>
        <a href="https://github.com/rounakneema/MetroMind" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-md border border-white/[0.09] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-zinc-300 transition hover:border-purple-300/40 hover:text-white"><Github className="h-3.5 w-3.5" /><span className="hidden sm:inline">Source</span></a>
      </div>
    </nav>
  );
}

export function MetroMindFooter() {
  return <footer className="border-t border-white/[0.07] bg-[#050507]"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-9 text-xs text-zinc-600 md:flex-row md:px-10"><span>MetroMind · AI document intelligence</span><div className="flex items-center gap-5"><a href="https://rounakneema.in/projects" className="transition hover:text-white">All projects</a><a href="https://rounakneema.in" className="transition hover:text-white">Rounak Neema</a></div></div></footer>;
}
