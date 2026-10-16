'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Menu, X, Terminal, ExternalLink } from 'lucide-react';

export function DevContextNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#f7f5ee]/95 backdrop-blur-md border-b border-[#e5ded2] font-sans transition-all">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/devcontext" className="flex items-center gap-2.5 group">
          <span className="w-8 h-8 rounded-lg bg-[#18181b] text-white flex items-center justify-center font-mono font-bold text-xs tracking-tighter shadow-xs group-hover:bg-[#1d4ed8] transition-colors">
            &gt;_
          </span>
          <span className="text-xl font-extrabold tracking-tight text-[#18181b]">
            DevContext
          </span>
        </Link>

        {/* Center Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-[#52525b]">
          <Link
            href="/devcontext"
            className="text-[#18181b] font-semibold relative after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-4 after:h-0.5 after:bg-[#1d4ed8] after:rounded-full"
          >
            Home
          </Link>
          <a
            href="#features"
            className="hover:text-[#18181b] transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="hover:text-[#18181b] transition-colors"
          >
            How it works
          </a>
          <Link
            href="/devcontext/architecture"
            className="hover:text-[#18181b] transition-colors"
          >
            Architecture
          </Link>
          <Link
            href="/devcontext/decisions"
            className="hover:text-[#18181b] transition-colors"
          >
            Decisions
          </Link>
          <Link
            href="/devcontext/docs"
            className="hover:text-[#18181b] transition-colors"
          >
            Docs
          </Link>
          <a
            href="#faq"
            className="hover:text-[#18181b] transition-colors"
          >
            FAQ
          </a>
        </div>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://rounakneema.in/contact"
            className="px-5 py-2.5 bg-[#18181b] hover:bg-black text-white text-xs font-bold rounded-full transition-all shadow-sm flex items-center gap-2 active:scale-95"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg text-[#18181b] hover:bg-[#ede6d8] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-b border-[#e5ded2] bg-[#f7f5ee] px-6 py-5 space-y-4 font-sans text-sm font-medium animate-in fade-in duration-200">
          <div className="flex flex-col gap-3">
            <Link
              href="/devcontext"
              onClick={() => setMobileOpen(false)}
              className="text-[#18181b] font-bold"
            >
              Home
            </Link>
            <a
              href="#features"
              onClick={() => setMobileOpen(false)}
              className="text-[#52525b] hover:text-[#18181b]"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileOpen(false)}
              className="text-[#52525b] hover:text-[#18181b]"
            >
              How it works
            </a>
            <Link
              href="/devcontext/architecture"
              onClick={() => setMobileOpen(false)}
              className="text-[#52525b] hover:text-[#18181b]"
            >
              Architecture Spec
            </Link>
            <Link
              href="/devcontext/decisions"
              onClick={() => setMobileOpen(false)}
              className="text-[#52525b] hover:text-[#18181b]"
            >
              Engineering Decisions
            </Link>
            <Link
              href="/devcontext/docs"
              onClick={() => setMobileOpen(false)}
              className="text-[#52525b] hover:text-[#18181b]"
            >
              Docs &amp; Schemas
            </Link>
            <a
              href="#faq"
              onClick={() => setMobileOpen(false)}
              className="text-[#52525b] hover:text-[#18181b]"
            >
              FAQ
            </a>
          </div>

          <div className="pt-3 border-t border-[#e5ded2]">
            <a
              href="https://rounakneema.in/contact"
              className="w-full py-2.5 bg-[#18181b] hover:bg-black text-white text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
