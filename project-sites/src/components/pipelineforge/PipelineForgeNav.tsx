'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export function PipelineForgeNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: 'Architecture', href: '/architecture' },
    { name: 'Decisions & Metrics', href: '/decisions' },
    { name: 'Docs', href: '/docs' },
    { name: 'Source Code', href: 'https://github.com/Rounakneema' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200/80 font-sans transition-all">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center text-lg font-bold tracking-tight text-neutral-900 group">
              <span className="text-[#f97316] font-mono mr-1.5 font-black text-xl transition-transform group-hover:scale-110">
                //
              </span>
              <span>pipelineForge</span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-7 text-sm font-medium text-neutral-600">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-neutral-950 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-5 text-sm font-medium">
            <a
              href="https://github.com/Rounakneema"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-neutral-700 hover:text-black transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
              <span className="text-xs">↗</span>
            </a>
            <Link
              href="/docs"
              className="bg-neutral-950 hover:bg-neutral-800 text-white font-medium px-4 py-2 rounded-lg text-sm transition-all shadow-sm active:scale-95 flex items-center gap-1.5"
            >
              <span>View Docs</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <Link
              href="/docs"
              className="bg-neutral-950 text-white text-xs font-medium px-3 py-1.5 rounded-lg"
            >
              Docs
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-1.5 text-neutral-600 hover:text-neutral-900 rounded-md"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-neutral-100 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm text-neutral-600 hover:text-neutral-950 py-1"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-neutral-100 flex items-center justify-between">
              <a
                href="https://github.com/Rounakneema"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-neutral-600 hover:text-neutral-950 flex items-center gap-1"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
