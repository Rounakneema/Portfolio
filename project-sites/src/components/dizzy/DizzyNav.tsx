'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export function DizzyNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Product', href: '/#features' },
    { name: 'Features', href: '/#workflow' },
    { name: 'Use Cases', href: '/#built-for' },
    { name: 'Services', href: 'https://rounakneema.in/freelance' },
    { name: 'Docs', href: '/docs' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200/80 transition-all font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold tracking-tight text-neutral-900 hover:opacity-80 transition-opacity">
              Dizzy
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-7 text-sm font-normal text-neutral-600">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-neutral-900 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-5 text-sm">
            <Link
              href="https://rounakneema.in/contact"
              className="font-normal text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="https://rounakneema.in/contact"
              className="bg-neutral-950 hover:bg-neutral-800 text-white font-medium px-4 py-2 rounded-lg text-sm transition-all shadow-sm active:scale-95"
            >
              Inquire
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-3">
            <Link
              href="https://rounakneema.in/contact"
              className="bg-neutral-950 text-white text-xs font-medium px-3 py-1.5 rounded-lg"
            >
              Inquire
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-neutral-600 hover:text-neutral-900 rounded-md"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-100 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-neutral-600 hover:text-neutral-900 py-1"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-neutral-100 flex items-center justify-between">
              <Link
                href="https://rounakneema.in/contact"
                className="text-sm font-medium text-neutral-900 hover:text-neutral-600"
              >
                Inquire
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
