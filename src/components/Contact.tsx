'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Cpu } from 'lucide-react';
import Link from 'next/link';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[800px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12 md:p-20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 text-white/5 rotate-12">
            <Send className="w-32 h-32" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Let&#39;s build <br />
            <span className="gradient-text">Intelligent Systems</span> <br />
            together.
          </h2>
          
          <p className="text-white/50 text-lg mb-12 max-w-xl mx-auto">
            Currently open to full-time roles and high-impact AI/ML projects. Let&#39;s connect and discuss how I can help your team.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              href="mailto:muralimanohargedda@gmail.com"
              className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-black font-bold hover:scale-105 active:scale-95 transition-all w-full md:w-auto justify-center"
            >
              <Mail className="w-5 h-5" />
              muralimanohargedda@gmail.com
            </Link>
            <div className="flex items-center gap-4">
              <Link 
                href="https://github.com/Muralimanohar2906" 
                target="_blank"
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all text-white"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link 
                href="https://linkedin.com/in/murali-manohar-gedda-246067377" 
                target="_blank"
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all text-white"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <Cpu className="w-6 h-6 text-purple-500" />
          <span className="font-bold tracking-tighter opacity-80">MURALI MANOHAR G</span>
        </div>
        
        <p className="text-sm text-white/30">
          &copy; {new Date().getFullYear()} Murali Manohar G. Designed for high performance and AI visual impact.
        </p>
        
        <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-white/30">
          <Link href="#" className="hover:text-purple-400 transition-colors">Twitter</Link>
          <Link href="#" className="hover:text-purple-400 transition-colors">Instagram</Link>
          <Link href="#" className="hover:text-purple-400 transition-colors">GitHub</Link>
        </div>
      </div>
    </footer>
  );
};

export { Contact, Footer };
