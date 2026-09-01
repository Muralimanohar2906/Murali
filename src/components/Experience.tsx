'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'Associate AI/ML Engineer',
    company: 'Artech Solutions',
    date: '01/2026 – Present',
    location: 'Hyderabad',
    details: [
      'Developing and deploying Large Language Models (LLMs) and RAG pipelines for enterprise applications.',
      'Fine-tuning vision transformers and convolutional neural networks for automated quality inspection.',
      'Optimizing model inference and latency using quantization and ONNX acceleration.',
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
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="eyebrow mb-4">Experience</div>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-ink">
              The <span className="accent">journey so far.</span>
            </h2>
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-ink/10" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative pl-11"
              >
                <div
                  className={`absolute left-0 top-1.5 w-[31px] h-[31px] rounded-full flex items-center justify-center border ${
                    idx === 0 ? 'border-clay bg-clay/10' : 'border-ink/20 bg-cream'
                  }`}
                >
                  <span className={`text-[10px] font-bold ${idx === 0 ? 'text-clay' : 'text-ink-soft'}`}>
                    {String(experiences.length - idx).padStart(2, '0')}
                  </span>
                </div>

                <div className="card p-6 hover:border-ink/25 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <h3 className="text-lg font-semibold text-ink">{exp.role}</h3>
                    <span className="eyebrow eyebrow-clay">{exp.date}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-ink-soft mb-4">
                    <span>{exp.company}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {exp.location}
                    </span>
                  </div>
                  <ul className="space-y-2.5">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="text-sm text-ink-soft flex gap-3">
                        <span className="text-clay mt-1 shrink-0">&rarr;</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
