'use client';

import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    code: 'A',
    title: 'Languages & Core',
    skills: [
      { name: 'Python', slug: 'python' },
      { name: 'TypeScript', slug: 'typescript' },
      { name: 'JavaScript', slug: 'javascript' },
      { name: 'SQL', slug: 'postgresql' },
    ],
  },
  {
    code: 'B',
    title: 'AI & Machine Learning',
    skills: [
      { name: 'PyTorch', slug: 'pytorch' },
      { name: 'TensorFlow', slug: 'tensorflow' },
      { name: 'Scikit-Learn', slug: 'scikitlearn' },
      { name: 'XGBoost', slug: 'xgboost' },
    ],
  },
  {
    code: 'C',
    title: 'GenAI & RAG',
    skills: [
      { name: 'OpenAI', slug: 'openai', forceInk: true },
      { name: 'LangChain', slug: 'langchain', forceInk: true },
      { name: 'Hugging Face', slug: 'huggingface' },
    ],
  },
  {
    code: 'D',
    title: 'Data & Databases',
    skills: [
      { name: 'PostgreSQL', slug: 'postgresql' },
      { name: 'MongoDB', slug: 'mongodb' },
      { name: 'Pandas', slug: 'pandas', forceInk: true },
      { name: 'NumPy', slug: 'numpy', forceInk: true },
    ],
  },
  {
    code: 'E',
    title: 'Backend & APIs',
    skills: [
      { name: 'FastAPI', slug: 'fastapi' },
      { name: 'Node.js', slug: 'nodedotjs' },
      { name: 'Postman', slug: 'postman' },
      { name: 'Streamlit', slug: 'streamlit' },
    ],
  },
  {
    code: 'F',
    title: 'DevOps & Tools',
    skills: [
      { name: 'Docker', slug: 'docker' },
      { name: 'Git', slug: 'git' },
      { name: 'n8n', slug: 'n8n' },
      { name: 'AWS', slug: 'amazonwebservices', forceInk: true },
    ],
  },
];

const iconUrl = (slug: string, forceInk?: boolean) => {
  if (slug === 'openai') return 'https://api.iconify.design/simple-icons:openai.svg?color=%231b1912';
  if (slug === 'amazonwebservices') return 'https://api.iconify.design/logos:aws.svg';
  if (slug === 'xgboost') return 'https://raw.githubusercontent.com/dmlc/dmlc.github.io/master/img/logo-m/xgboost.png';
  return `https://cdn.simpleicons.org/${slug}${forceInk ? '/1b1912' : ''}`;
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="eyebrow mb-4">Toolkit</div>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-ink">
              What I <span className="accent">work with.</span>
            </h2>
          </motion.div>
        </div>

        <div className="card divide-y" style={{ borderColor: 'color-mix(in srgb, var(--color-ink) 10%, transparent)' }}>
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.code}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-8 p-6 md:p-7"
            >
              <div className="flex md:flex-col items-baseline md:items-start gap-3 md:gap-1">
                <span className="font-display font-extrabold text-2xl text-clay">{category.code}</span>
                <h3 className="text-ink font-semibold text-sm">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 border border-ink/10 hover:border-ink/25 transition-colors rounded-full bg-cream"
                  >
                    <img
                      src={iconUrl(skill.slug, skill.forceInk)}
                      alt=""
                      aria-hidden="true"
                      className="w-4 h-4 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://api.iconify.design/simple-icons:${skill.slug === 'amazonwebservices' ? 'amazonaws' : skill.slug}.svg?color=%231b1912`;
                      }}
                    />
                    <span className="text-xs font-medium text-ink-soft">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
