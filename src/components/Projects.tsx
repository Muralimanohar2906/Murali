'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Cpu, BarChart3, Mail, Bot, Search, GraduationCap, FileText, Activity, X } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    id: 'public-pulse',
    title: 'PUBLIC PULSE 2.0',
    description: 'Advanced sentiment analysis and public feedback monitoring system for government initiatives.',
    tags: ['NLP', 'Transformers', 'FastAPI', 'React'],
    icon: <BarChart3 className="w-6 h-6" />,
    color: 'from-purple-500 to-indigo-500',
    image: '/ap-logo.png',
    problem: 'Processing massive volumes of citizen feedback manually was slow and prone to bias.',
    solution: 'Designed an NLP pipeline using transformer models to categorize and analyze sentiment in real-time.',
    impact: 'Reduced analysis time by 85% and increased accuracy of public trend identification.',
    architecture: 'Input Stream → BERT Classifier → Sentiment Scoring → Analytics Dashboard'
  },
  {
    id: 'rtgs-assistant',
    title: 'RTGS AI ASSISTANT 2.0',
    description: 'Conversational AI platform for Real Time Governance Society, handling multi-lingual citizen queries.',
    tags: ['GenAI', 'LLMs', 'RAG', 'Vector DB'],
    icon: <Bot className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
    image: '/ap-logo.png',
    problem: 'Citizen support teams were overwhelmed with repetitive administrative queries.',
    solution: 'Implemented a RAG-based chatbot using localized embeddings to provide instant, accurate responses.',
    impact: 'Handled 50,000+ queries in the first month with a 92% resolution rate.',
    architecture: 'User Query → LangChain → Vector DB (Pinecone) → LLM → Multi-lingual Response'
  },
  {
    id: 'smart-teacher',
    title: 'Smart Teacher',
    description: 'Chrome extension transforming YouTube lectures into interactive study sessions using on-device AI.',
    tags: ['Chrome Extension', 'On-Device AI', 'Gemini Nano', 'NLP'],
    icon: <GraduationCap className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=2074',
    problem: 'Students struggled with passive learning from long video lectures.',
    solution: 'Built a local AI agent using Gemini Nano to extract notes and generate quizzes directly in the browser.',
    impact: 'Enhanced learning engagement with sub-second response times and full offline privacy.',
    architecture: 'YouTube Video → Transcript Extraction → On-Device LLM → Structured Notes'
  },
  {
    id: 'ev-market-analysis',
    title: 'Electric Vehicle Market Analysis',
    description: 'Comprehensive market analysis project focused on understanding EV adoption trends in India.',
    tags: ['Data Analysis', 'Pandas', 'Visualization', 'EDA'],
    icon: <Activity className="w-6 h-6" />,
    color: 'from-blue-600 to-indigo-600',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072',
    problem: 'Lack of clear data on EV adoption drivers to support expansion decisions.',
    solution: 'Performed deep EDA on multi-year datasets to identify growth clusters and charging infrastructure gaps.',
    impact: 'Provided actionable insights for strategic market entry and infrastructure planning.',
    architecture: 'Raw Data → ETL Pipeline → Exploratory Data Analysis → Strategic Dashboard'
  },
  {
    id: 'mail-watch',
    title: 'MailWatch',
    description: 'AI-powered email security system to identify and flag phishing threats using custom ML models.',
    tags: ['ML', 'Security', 'FastAPI', 'Python'],
    icon: <Mail className="w-6 h-6" />,
    color: 'from-red-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070',
    problem: 'Enterprise emails were vulnerable to sophisticated spear-phishing attacks.',
    solution: 'Trained a custom XGBoost model on behavioral and content features to detect anomalies.',
    impact: '99.4% detection rate on known phishing variants with near-zero false positives.',
    architecture: 'Incoming Mail → Header Parsing → ML Classifier → Risk Assessment'
  },
];

const ProjectImage = ({ src, alt }: { src: string, alt: string }) => (
  <div className="w-full h-full relative group overflow-hidden bg-white/[0.02] flex items-center justify-center p-8">
    <img 
      src={src} 
      alt={alt} 
      className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-110" 
      onError={(e) => {
        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072';
      }}
    />
    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
  </div>
);

const Projects = () => {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Latest <span className="gradient-text">Projects</span>
          </motion.h2>
          <p className="text-white/40 max-w-xl mx-auto text-sm">
            Interactive showcase of my recent engineering work and technical solutions.
          </p>
        </div>

        {/* Project Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={project.id}
              className="group cursor-pointer rounded-3xl overflow-hidden glass-card border-white/5 relative bg-white/[0.01]"
            >
              <div 
                onClick={() => setSelectedId(project.id)}
                className="aspect-video w-full"
              >
                <ProjectImage src={project.image} alt={project.title} />
              </div>
              
              {/* Quick Actions & Info Bottom Bar */}
              <div className="p-5 flex items-center justify-between border-t border-white/5">
                <div onClick={() => setSelectedId(project.id)}>
                   <h3 className="text-sm font-bold text-white/80 group-hover:text-white transition-colors">{project.title}</h3>
                   <p className="text-[9px] text-white/30 uppercase tracking-widest">{project.tags[0]}</p>
                </div>
                <div className="flex gap-2">
                   <Link href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:text-purple-400">
                      <Github className="w-3.5 h-3.5" />
                   </Link>
                   <Link href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:text-blue-400">
                      <ExternalLink className="w-3.5 h-3.5" />
                   </Link>
                </div>
              </div>

              {/* Hover Detailed Overlay (Center Icon) */}
              <div 
                onClick={() => setSelectedId(project.id)}
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 pointer-events-none"
              >
                <div className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                   <Search className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detail Modal/Overlay */}
        <AnimatePresence>
          {selectedId && selectedProject && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[60] cursor-zoom-out"
              />
              <motion.div
                layoutId={selectedId}
                className="fixed inset-4 md:inset-20 z-[70] glass-card overflow-hidden flex flex-col lg:grid lg:grid-cols-2 pointer-events-none bg-neutral-950"
              >
                <div className="relative h-64 lg:h-full bg-white/[0.02] pointer-events-auto flex items-center justify-center p-12 lg:p-24 border-b lg:border-b-0 lg:border-r border-white/5">
                   <img src={selectedProject.image} alt={selectedProject.title} className="max-w-full max-h-full object-contain" />
                </div>
                
                <div className="p-6 md:p-12 flex flex-col h-full pointer-events-auto overflow-y-auto">
                  <div className="flex justify-between items-start mb-8">
                    <div className="pr-12">
                        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-500 mb-2">Project Case Study</div>
                        <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-4">{selectedProject.title}</h3>
                        <div className="flex flex-wrap gap-2">
                           {selectedProject.tags.map(tag => (
                             <span key={tag} className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[8px] font-bold text-white/40 uppercase tracking-widest">{tag}</span>
                           ))}
                        </div>
                    </div>
                    <button 
                      onClick={() => setSelectedId(null)}
                      className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                    >
                      <X className="w-5 h-5 text-white/60" />
                    </button>
                  </div>

                  <p className="text-white/60 text-lg mb-10 leading-relaxed italic border-l-2 border-purple-500/30 pl-6">
                    &quot;{selectedProject.description}&quot;
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-purple-400 font-bold mb-3 flex items-center gap-2">
                        <div className="w-4 h-px bg-purple-400/30" />
                        The Problem
                      </div>
                      <p className="text-white/40 text-xs leading-relaxed">{selectedProject.problem}</p>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold mb-3 flex items-center gap-2">
                        <div className="w-4 h-px bg-emerald-400/30" />
                        Key Impact
                      </div>
                      <p className="text-white/40 text-xs leading-relaxed">{selectedProject.impact}</p>
                    </div>
                  </div>

                  <div className="mt-auto flex flex-col sm:flex-row gap-4">
                    <Link href="#" className="flex-1 py-4 bg-white text-black text-center font-bold text-[10px] uppercase tracking-widest rounded-2xl hover:bg-purple-50 transition-colors flex items-center justify-center gap-2">
                       <Github className="w-4 h-4" /> View GitHub Repository
                    </Link>
                    <Link href="#" className="flex-1 py-4 bg-white/5 border border-white/10 text-white text-center font-bold text-[10px] uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                       <ExternalLink className="w-4 h-4" /> Live Demonstration
                    </Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
