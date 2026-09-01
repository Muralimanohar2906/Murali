'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const NavLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 left-4 right-4 z-50">
      <nav className="max-w-6xl mx-auto card pill bg-cream/90 backdrop-blur-md flex items-center justify-between px-5 py-3">
        <Link href="#" className="flex items-center gap-2 font-display font-extrabold text-ink text-sm">
          <span className="w-8 h-8 rounded-full bg-ink text-cream flex items-center justify-center text-xs">MG</span>
          <span className="hidden sm:inline">Murali Manohar</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {NavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-ink-soft hover:text-ink transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link href="#contact" className="hidden lg:inline-flex btn-dark">
          Let&apos;s talk <ArrowUpRight className="w-4 h-4" />
        </Link>

        <button
          className="lg:hidden p-2.5 rounded-full border border-ink/15 text-ink cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden max-w-6xl mx-auto card mt-2 p-6"
          >
            <div className="flex flex-col gap-5">
              {NavLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-semibold text-ink"
                >
                  {link.name}
                </Link>
              ))}
              <Link href="#contact" onClick={() => setIsOpen(false)} className="btn-dark w-fit">
                Let&apos;s talk <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
