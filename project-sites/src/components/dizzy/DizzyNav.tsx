'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export function DizzyNav() {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Concept', href: '/#concept' },
    { name: 'Voice -> Design', href: '/#voice-to-design' },
    { name: 'Semantic State', href: '/#semantic-state' },
    { name: 'Architecture', href: '/architecture' },
    { name: 'Decisions', href: '/decisions' },
    { name: 'Docs', href: '/docs' }
  ];

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#333] font-mono">
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-16 overflow-x-auto hide-scrollbar">
          <div className="flex space-x-6 text-xs md:text-sm uppercase font-bold whitespace-nowrap">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (pathname === '/' && item.href.startsWith('/#'));
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
