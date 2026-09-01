'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card p-10 md:p-16 text-center"
        >
          <div className="eyebrow mb-6">Get in touch</div>

          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-ink mb-6">
            Let&apos;s build <span className="accent">something.</span>
          </h2>

          <p className="text-ink-soft text-base md:text-lg mb-10 max-w-xl mx-auto">
            Looking for full-time AI/ML roles and hands-on GenAI, NLP, or automation
            work. If you&apos;ve got something worth building, send it over.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link
              href="mailto:muralimanohargedda@gmail.com"
              className="btn-dark w-full md:w-auto justify-center"
            >
              <Mail className="w-5 h-5" />
              muralimanohargedda@gmail.com
            </Link>
            <div className="flex items-center gap-3">
              <Link
                href="https://github.com/Muralimanohar2906"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Murali's GitHub profile"
                className="w-14 h-14 rounded-full border border-ink/15 flex items-center justify-center hover:border-ink/40 transition-colors text-ink"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="https://linkedin.com/in/murali-manohar-gedda-246067377"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Murali's LinkedIn profile"
                className="w-14 h-14 rounded-full border border-ink/15 flex items-center justify-center hover:border-ink/40 transition-colors text-ink"
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
    <footer className="py-8 px-6 border-t border-ink/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 eyebrow">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-clay" />
          Murali Manohar G
        </div>
        <p>&copy; {new Date().getFullYear()} Murali Manohar G</p>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-pine" />
          Available for work
        </div>
      </div>
    </footer>
  );
};

export { Contact, Footer };
