'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const NavLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-4 bg-black/80 backdrop-blur-2xl border-b border-white/[0.08]' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-center">
        {/* Desktop Menu - Centered */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8 px-6 py-2.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
            {NavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.2em] font-black text-white/40 hover:text-white transition-all relative group"
              >
                {link.name}
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-500 rounded-full group-hover:w-full transition-all duration-300" 
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-3 rounded-2xl bg-white/5 border border-white/10 text-white ml-auto cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-3xl border-b border-white/[0.08] p-8 lg:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-6">
              {NavLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-black text-white/50 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-white/5 flex gap-6">
                <Link href="mailto:muralimanohargedda@gmail.com" className="flex items-center gap-2 text-sm font-bold text-white/40 hover:text-white">
                  <Mail className="w-4 h-4" /> Email Me
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
