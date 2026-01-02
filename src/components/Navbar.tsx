'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 lg:px-20 bg-white"
    >
      <nav className="flex items-center justify-start max-w-full mx-auto">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          Amren
        </Link>
      </nav>
    </motion.header>
  );
}
