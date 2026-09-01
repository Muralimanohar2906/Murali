'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Shipped Projects', value: '8' },
  { label: 'Years, Ops & AI', value: '3+' },
];

const stops = [
  { role: 'Supervisor', place: 'Delivery Hub', date: '2021' },
  { role: 'Team Lead', place: 'Delivery Hub', date: '2022' },
  { role: 'IT Support', place: 'Artech Solutions', date: '2025' },
  { role: 'AI/ML Engineer', place: 'Artech Solutions', date: '2026', current: true },
];

const About = () => {
  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card overflow-hidden order-2 lg:order-1"
        >
          <div className="px-7 pt-7">
            <div className="eyebrow mb-2">Career path</div>
            <p className="text-ink-soft text-sm">Four stops, one habit: get the right thing to the right place.</p>
          </div>

          <div className="relative px-7 py-8">
            <div className="absolute left-[33px] top-8 bottom-8 w-px bg-ink/10" />
            <div className="space-y-6">
              {stops.map((stop) => (
                <div key={stop.role} className="relative pl-9 flex items-center justify-between gap-3">
                  <span
                    className={`absolute left-0 w-4 h-4 rounded-full border-2 ${
                      stop.current ? 'border-clay bg-clay' : 'border-ink-soft/40 bg-cream'
                    }`}
                  />
                  <div>
                    <div className={`text-sm font-semibold ${stop.current ? 'text-clay' : 'text-ink'}`}>{stop.role}</div>
                    <div className="text-xs text-ink-soft">{stop.place}</div>
                  </div>
                  <span className="eyebrow whitespace-nowrap">{stop.date}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 border-t border-ink/10">
            {stats.map((stat) => (
              <div key={stat.label} className="p-7 first:border-r border-ink/10 first:border-dashed">
                <div className="font-display font-extrabold text-4xl text-ink">{stat.value}</div>
                <div className="eyebrow mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="order-1 lg:order-2 lg:pt-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="eyebrow mb-5">About</div>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-ink mb-7 leading-tight">
              Same discipline.<br /><span className="accent">Different tools.</span>
            </h2>
          </motion.div>

          <div className="space-y-5 text-ink-soft text-base leading-relaxed mb-9">
            <p>
              For two years I ran first- and last-mile delivery for an Amazon hub in
              Rajahmundry &mdash; routing 50+ associates, balancing load, keeping SLAs
              at 100%. The job came down to one thing: getting the right thing to the
              right place, on time, without babysitting every step.
            </p>
            <p>
              That&apos;s what I build now, just with models instead of vans. I design
              NLP pipelines, RAG systems, and automation that move information where
              it&apos;s needed &mdash; reliably, without a human in the loop for every
              request. Based in Hyderabad, working across NLP, computer vision, and
              applied GenAI.
            </p>
          </div>

          <div className="card p-5 flex items-center gap-4 flex-wrap">
            <div className="eyebrow whitespace-nowrap">Path</div>
            <div className="flex items-center gap-3 text-sm font-medium text-ink flex-wrap">
              <span>Delivery Ops</span>
              <span className="text-clay">&rarr;</span>
              <span>IT Support</span>
              <span className="text-clay">&rarr;</span>
              <span className="text-pine font-semibold">AI/ML Engineering</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
