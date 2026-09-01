'use client';

import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: 'Mechanical Engineering',
    institution: 'Aditya College of Engineering & Tech',
    date: 'B.Tech Graduate',
  },
  {
    degree: 'Diploma in Mechanical',
    institution: 'Aditya Engineering College',
    date: 'Associate Degree',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="eyebrow mb-4">Education</div>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-ink">Foundation</h2>
          </motion.div>
        </div>

        <div className="card divide-y" style={{ borderColor: 'color-mix(in srgb, var(--color-ink) 10%, transparent)' }}>
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="flex flex-wrap items-center justify-between gap-3 p-6"
            >
              <div>
                <h3 className="text-ink font-semibold text-base mb-1">{item.degree}</h3>
                <p className="text-ink-soft text-sm">{item.institution}</p>
              </div>
              <span className="eyebrow">{item.date}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
