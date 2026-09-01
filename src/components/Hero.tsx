'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Download, Cpu, Sparkles } from 'lucide-react';
import Link from 'next/link';

const roles = ['AI Engineer', 'ML Engineer', 'GenAI Engineer', 'Automation Expert'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const fullText = "Murali Manohar G";

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex <= fullText.length) {
        setText(fullText.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => {
      clearInterval(roleInterval);
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Mesh Glows */}
      <div className="mesh-bg" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 leading-[1.1] pb-2">
            Hi, I&#39;m <br />
            <span className="gradient-text italic pr-4 sm:pr-6 md:pr-8">{text}</span>
            <span className="animate-pulse">|</span>
          </h1>

          <div className="h-10 mb-10 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={roles[roleIndex]}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="text-2xl md:text-3xl font-mono text-white/40 tracking-tight"
              >
                &lt; {roles[roleIndex]} /&gt;
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="text-lg md:text-xl text-white/50 max-w-xl mb-12 leading-relaxed font-medium">
            Building the next generation of AI-native applications through Large Language Models, 
            Neural Networks, and Intelligent Automation.
          </p>

          <div className="flex flex-wrap gap-6">
            <Link
              href="#projects"
              className="px-10 py-5 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-xs flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Discover Projects <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/MuraliManohar-Resume.pdf"
              className="px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-white/10 transition-all backdrop-blur-md"
            >
              Resume <Download className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* Right Side: Visual Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative group"
        >
          <div className="relative z-10 p-4 glass-card bg-white/[0.01] border-white/[0.05] shadow-2xl">
             <div className="aspect-square rounded-2xl bg-neutral-900 overflow-hidden relative border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-transparent to-blue-500/20 mix-blend-overlay" />
                <div className="w-full h-full flex items-center justify-center">
                   <img 
                      src="/profile.jpg" 
                      alt="Murali Manohar G" 
                      className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000';
                      }}
                   />
                </div>
             </div>
          </div>
          
          {/* Backdrop Glow */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-1000 -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
