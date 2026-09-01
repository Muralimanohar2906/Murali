'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Search } from 'lucide-react';

const education = [
  {
    degree: 'Mechanical Engineering',
    institution: 'Aditya College of Engineering & Tech',
    date: 'B.Tech Graduate',
    icon: <GraduationCap className="w-5 h-5 text-purple-400" />,
    color: 'from-purple-500/10 to-transparent',
    description: '',
  },
  {
    degree: 'Diploma in Mechanical',
    institution: 'Aditya Engineering College',
    date: 'Associate Degree',
    icon: <Award className="w-5 h-5 text-blue-400" />,
    color: 'from-blue-500/10 to-transparent',
    description: '',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-32 px-6 relative bg-white/[0.01]">
      <div className="mesh-bg opacity-5" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
          >
            Academic <span className="gradient-text italic">Foundation</span>
          </motion.h2>
          <div className="flex items-center justify-center gap-4 text-white/30 font-bold uppercase tracking-[0.4em] text-[10px]">
             <div className="w-12 h-px bg-white/10" />
             Learning Logic
             <div className="w-12 h-px bg-white/10" />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="glass-card group relative p-1 rounded-[2.5rem] w-full md:w-[380px]"
            >
              <div className="bg-black/40 rounded-[2.3rem] p-10 h-full flex flex-col items-center text-center">
                <div className={`absolute inset-0 bg-gradient-to-b ${item.color} rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                <div className="mb-8 w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:scale-110 group-hover:rotate-[10deg] transition-all duration-500 shadow-xl group-hover:shadow-purple-500/10">
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-white transition-colors">{item.degree}</h3>
                <p className="text-white/40 text-sm font-medium mb-6 line-clamp-1">{item.institution}</p>
                
                <div className="mt-auto pt-6 border-t border-white/[0.05] w-full flex flex-col items-center gap-4">
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">{item.date}</div>
                  {item.description && (
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.02] border border-white/[0.05]">
                       <div className="w-1 h-1 rounded-full bg-emerald-500" />
                       <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest leading-none">Focus Area Active</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
