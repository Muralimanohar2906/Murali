'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'Associate AI/ML Engineer',
    company: 'Artech Solutions',
    date: '01/2026 – Present',
    location: 'Hyderabad',
    details: [
      'Developing and deploying Large Language Models (LLMs) and RAG pipelines for enterprise applications.',
      'Fine-tuning vision transformers and convolutional neural networks for automated quality inspection.',
      'Optimizing model inference and latency using Quantization and ONNX acceleration.',
    ],
  },
  {
    role: 'IT Support Engineer',
    company: 'Artech Solutions',
    date: '06/2025 – 12/2025',
    location: 'Hyderabad',
    details: [
      'Provided L1/L2 IT support for enterprise systems and end users.',
      'Managed system setup, user access, and onboarding/offboarding workflows.',
      'Integrated AI tools into internal support processes to improve response times.',
    ],
  },
  {
    role: 'Team Lead – Delivery Hub',
    company: 'Amazon Delivery Hub',
    date: '06/2022 – 12/2023',
    location: 'Rajahmundry',
    details: [
      'Led first-mile and last-mile delivery operations for a regional hub.',
      'Coordinated route planning and load balancing for 50+ delivery associates.',
      'Optimized operational workflows using data-driven scheduling.',
    ],
  },
  {
    role: 'Supervisor – Delivery Hub',
    company: 'Amazon Delivery Hub',
    date: '01/2021 – 06/2022',
    location: 'Rajahmundry',
    details: [
      'Managed daily inbound and outbound operations ensuring 100% SLA compliance.',
      'Oversaw inventory control and package handling accuracy.',
      'Mentored new associates on safety standards and productivity metrics.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Professional <span className="gradient-text">Journey</span>
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-black -translate-x-1/2 hidden md:block" />
                
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="glass-card p-8 hover:border-purple-500/50 transition-all">
                    <div className="flex flex-col gap-2 mb-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400 px-2 py-1 bg-purple-500/10 rounded-md">
                          {exp.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-white/40">
                        <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {exp.company}</span>
                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {exp.location}</span>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {exp.details.map((detail, i) => (
                        <li key={i} className="text-sm text-white/50 flex gap-3 italic">
                          <span className="text-purple-500 mt-1 flex-shrink-0">▹</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
