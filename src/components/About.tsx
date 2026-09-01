'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, Users, Zap, Brain, Code, Cpu } from 'lucide-react';

const stats = [
  { label: 'AI Projects', value: '15+', icon: <Rocket className="w-5 h-5 text-purple-400" /> },
  { label: 'Work Exp', value: '3+ Yrs', icon: <Users className="w-5 h-5 text-blue-400" /> },
];

const About = () => {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      <div className="mesh-bg opacity-5" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start min-h-[70vh]">
        
        {/* Visual Storytelling */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group w-full"
        >
          <div className="relative aspect-square md:aspect-[4/4.8] rounded-[3rem] bg-white/[0.02] border border-white/[0.08] overflow-hidden group-hover:border-white/20 transition-all duration-700 shadow-2xl">
             <div className="absolute inset-0">
                <img 
                  src="/portfolio-main.png" 
                  alt="Murali Portfolio" 
                  className="w-full h-full object-cover object-top transition-transform duration-[3s] group-hover:scale-105" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072';
                  }}
                />
             </div>
          </div>
        </motion.div>

        <div className="lg:pt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-sm font-bold uppercase tracking-[0.4em] text-purple-500 mb-6 flex items-center gap-4">
               <div className="w-12 h-px bg-purple-500/30" />
               About Me
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-10 tracking-tighter leading-[0.9]">
              Solving Problems <br />
              <span className="gradient-text italic">with Intelligence.</span>
            </h2>
          </motion.div>
          
          <div className="space-y-6 mb-12">
            <p className="text-white/60 text-lg md:text-xl leading-relaxed font-medium italic">
              &quot;I bridge the gap between complex mathematical research and scalable, production-ready software systems.&quot;
            </p>
            <p className="text-white/55 text-base leading-relaxed">
              Based in Hyderabad, I&#39;ve transitioned from managing large-scale operations at Amazon Hubs to engineering
              next-generation AI systems. I specialize in Natural Language Processing, Computer Vision, and the growing
              landscape of Generative AI.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-all group overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   {stat.icon}
                </div>
                <div className="text-3xl font-black mb-1">{stat.value}</div>
                <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
