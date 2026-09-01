'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkle } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-32 pb-20 px-6 relative overflow-hidden">
      <span className="vertical-label hidden lg:block absolute left-6 top-1/2 -translate-y-1/2">
        NLP &middot; Vision &middot; GenAI
      </span>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center w-full lg:pl-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="badge mb-7">
            <Sparkle className="w-3.5 h-3.5" />
            Open to AI/ML roles
          </div>

          <h1 className="font-display font-extrabold text-[13vw] sm:text-6xl md:text-7xl text-ink mb-7 leading-[0.98] tracking-tight">
            I build AI<br />that just <span className="accent">works.</span>
          </h1>

          <p className="text-ink-soft text-base md:text-lg max-w-lg mb-9 leading-relaxed">
            I&apos;m Murali Manohar G, an AI/ML engineer working across NLP, GenAI, and
            automation. Before this, I ran delivery operations for an Amazon hub &mdash;
            same standard for reliability, different tools.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="#projects" className="btn-dark">
              Let&apos;s work together <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link href="/MuraliManohar-Resume.pdf" className="btn-outline">
              Resume
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[40px] bg-clay/10 -z-10" />
          <div className="card overflow-hidden aspect-[4/5] relative">
            <img
              src="/profile.jpg"
              alt="Murali Manohar G"
              className="w-full h-full object-cover"
              style={{ filter: 'grayscale(1) contrast(1.05)' }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000';
              }}
            />
          </div>

          <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-pine text-cream flex flex-col items-center justify-center text-center p-4 shadow-xl">
            <span className="text-[10px] font-bold uppercase tracking-widest leading-tight">
              Precision<br />Scale<br />Trust
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
