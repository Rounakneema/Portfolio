'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';

const links = [
  { href: '#demo', label: 'Interactive Demo' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#teams', label: 'Stakeholders' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '/metromind/architecture', label: 'Architecture' },
  { href: '#faq', label: 'FAQ' },
];

export function MetroMindNav() {
  const pathname = usePathname() || '/';

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/60 bg-[#faf8f5]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        
        {/* Brand with Connected Dots Logo */}
        <div className="flex items-center gap-3">
          <Link href="/metromind" className="group flex items-center gap-2.5">
            <svg
              className="w-6 h-6 text-teal-600 transition-transform group-hover:scale-105"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="6" cy="15" r="3" />
              <circle cx="18" cy="9" r="3" />
              <line x1="8.5" y1="13.5" x2="15.5" y2="10.5" />
            </svg>
            <span className="font-bold tracking-[0.2em] uppercase text-sm text-slate-900">
              METROMIND
            </span>
          </Link>
          <span className="hidden rounded-full border border-teal-200 bg-teal-50 px-2 py-0.5 text-[9px] font-mono text-teal-800 font-bold sm:block">
            SIH 2025
          </span>
        </div>

        {/* Center Nav Links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const isInternalAnchor = link.href.startsWith('#');
            const targetHref = isInternalAnchor ? `/metromind${link.href}` : link.href;
            const active = !isInternalAnchor && pathname.endsWith(link.href);
            return (
              <Link
                key={link.label}
                href={targetHref}
                className={`text-xs font-medium transition-colors ${
                  active ? 'text-teal-700 font-semibold' : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right CTA Button */}
        <div className="flex items-center gap-3">
          <a
            href="#demo"
            className="inline-flex items-center gap-2 bg-[#0f172a] hover:bg-slate-800 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm"
          >
            <span>Explore the platform</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export function MetroMindFooter() {
  return (
    <footer className="border-t border-slate-200/90 bg-[#fcfbf9] text-slate-600 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-10">
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="6" cy="15" r="3" />
            <circle cx="18" cy="9" r="3" />
            <line x1="8.5" y1="13.5" x2="15.5" y2="10.5" />
          </svg>
          <span className="text-xs font-semibold text-slate-900 tracking-wider uppercase">
            MetroMind &middot; Document Intelligence for Transit
          </span>
        </div>
        <p className="text-xs text-slate-500 text-center md:text-left">
          Created by Rounak Neema for Smart India Hackathon 2025. Engineering showcase.
        </p>
        <div className="flex items-center gap-6 text-xs font-medium text-slate-600">
          <a href="https://rounakneema.in/projects" className="hover:text-slate-900 transition-colors">
            All Projects
          </a>
          <a href="https://rounakneema.in/contact" className="hover:text-slate-900 transition-colors">
            Contact
          </a>
          <a
            href="https://github.com/rounakneema/MetroMind"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 transition-colors inline-flex items-center gap-1"
          >
            <span>Source</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
