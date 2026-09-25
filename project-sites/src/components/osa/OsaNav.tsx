'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export function OsaNav() {
  const pathname = usePathname();
  
  const links = [
    { label: 'Overview', href: '/' },
    { label: 'Detection', href: '/#detection' },
    { label: 'Architecture', href: '/architecture' },
    { label: 'Forensics', href: '/forensics' },
    { label: 'Benchmarks', href: '/benchmarks' },
    { label: 'Docs', href: '/docs' },
  ];

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur border-b border-[#333]">
      <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
        <div className="flex items-center gap-6 whitespace-nowrap h-14">
          {links.map(l => (
            <Link 
              key={l.label} 
              href={l.href}
              className={`text-sm font-mono uppercase tracking-widest transition-colors h-full flex items-center border-b-2 ${pathname === l.href ? 'text-[#ffb800] border-[#ffb800]' : 'text-gray-400 border-transparent hover:text-[#ffb800]'}`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
