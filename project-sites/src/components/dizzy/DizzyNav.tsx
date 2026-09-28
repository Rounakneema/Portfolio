'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export function DizzyNav() {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'System', href: '/' },
    { name: 'Architecture', href: '/architecture' },
    { name: 'Decisions', href: '/decisions' },
    { name: 'Docs', href: '/docs' }
  ];

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="sticky top-0 z-50 bg-black border-b border-zinc-900 font-mono">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 overflow-x-auto hide-scrollbar">
          <div className="flex items-center gap-4 border-r border-zinc-900 pr-6 mr-2">
            <span className="font-black text-white uppercase tracking-widest text-lg">DIZZY</span>
            <span className="w-2 h-2 bg-[#ff3366] rounded-full animate-pulse"></span>
          </div>
          <div className="flex space-x-6 text-xs uppercase font-bold whitespace-nowrap w-full">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors ${isActive ? 'text-[#ff3366]' : 'text-[#e0e0e0] hover:text-[#ff3366]'}`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </motion.nav>
  );
}
