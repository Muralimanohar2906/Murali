'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  Code2, 
  BrainCircuit, 
  MessageSquareCode, 
  Workflow, 
  Cloud,
  Layers,
  Terminal,
  Cpu,
  Globe,
  Lock,
  Zap
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages & Core',
    skills: [
      { name: 'Python', slug: 'python' },
      { name: 'TypeScript', slug: 'typescript' },
      { name: 'JavaScript', slug: 'javascript' },
      { name: 'SQL', slug: 'postgresql' },
    ],
  },
  {
    title: 'AI & Machine Learning',
    skills: [
      { name: 'PyTorch', slug: 'pytorch' },
      { name: 'TensorFlow', slug: 'tensorflow' },
      { name: 'Scikit-Learn', slug: 'scikitlearn' },
      { name: 'XGBoost', slug: 'xgboost' },
    ],
  },
  {
    title: 'GenAI & RAG',
    skills: [
      { name: 'OpenAI', slug: 'openai', forceWhite: true },
      { name: 'LangChain', slug: 'langchain', forceWhite: true },
      { name: 'Hugging Face', slug: 'huggingface' },
    ],
  },
  {
    title: 'Data & Databases',
    skills: [
      { name: 'PostgreSQL', slug: 'postgresql' },
      { name: 'MongoDB', slug: 'mongodb' },
      { name: 'Pandas', slug: 'pandas', forceWhite: true },
      { name: 'NumPy', slug: 'numpy', forceWhite: true },
    ],
  },
  {
    title: 'Backend & APIs',
    skills: [
      { name: 'FastAPI', slug: 'fastapi' },
      { name: 'Node.js', slug: 'nodedotjs' },
      { name: 'Postman', slug: 'postman' },
      { name: 'Streamlit', slug: 'streamlit' },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Docker', slug: 'docker' },
      { name: 'Git', slug: 'git' },
      { name: 'n8n', slug: 'n8n' },
      { name: 'AWS', slug: 'amazonwebservices', forceWhite: true },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="mesh-bg opacity-10" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
          >
            Technical <span className="gradient-text italic">Armory</span>
          </motion.h2>
          <p className="text-white/40 max-w-2xl mx-auto text-sm">
            Powered by the latest industry-standard tools and frameworks for high-performance AI development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="glass-card group p-5 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] bg-black/40"
            >
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white/30 mb-8 flex items-center gap-3">
                <div className="w-8 h-px bg-white/10" />
                {category.title}
              </h3>
              
              <div className="grid grid-cols-3 gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-3 group/skill cursor-default"
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center p-3 transition-all duration-500 bg-white/[0.03] border border-white/[0.08] group-hover/skill:bg-white/[0.08] group-hover/skill:border-white/20 group-hover/skill:-translate-y-1 shadow-2xl group-hover/skill:shadow-purple-500/10`}>
                      <img 
                        src={skill.slug === 'openai' ? 'https://api.iconify.design/simple-icons:openai.svg?color=white' : 
                             skill.slug === 'amazonwebservices' ? 'https://api.iconify.design/logos:aws.svg' :
                             skill.slug === 'xgboost' ? 'https://raw.githubusercontent.com/dmlc/dmlc.github.io/master/img/logo-m/xgboost.png' :
                             `https://cdn.simpleicons.org/${skill.slug}${skill.forceWhite ? '/ffffff' : ''}`}
                        alt={skill.name}
                        className={`w-full h-full object-contain brightness-110 group-hover/skill:brightness-125 transition-all ${skill.slug === 'openai' ? 'invert brightness-200' : ''}`}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://api.iconify.design/simple-icons:${skill.slug === 'amazonwebservices' ? 'amazonaws' : skill.slug}.svg?color=white`;
                        }}
                      />
                    </div>
                    <span className="text-[10px] font-bold text-white/40 group-hover/skill:text-white transition-colors text-center leading-tight uppercase tracking-tighter">
                      {skill.name}
                    </span>
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
