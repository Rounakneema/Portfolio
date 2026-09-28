'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  id?: string;
  scale?: boolean;
}

export function FadeIn({ children, delay = 0, className = '', id, scale = false }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: scale ? 0 : 40, scale: scale ? 0.95 : 1 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      id={id}
    >
      {children}
    </motion.div>
  );
}
