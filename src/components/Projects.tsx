'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ArrowUpRight, Bot, GraduationCap, FileText, Activity, Mic, Users, X, BarChart3, Mail } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    id: 'meetingvoz',
    title: 'MeetingVoz',
    category: 'AI / Meeting Intelligence',
    description: 'Multilingual AI meeting intelligence platform built to understand conversations across Indian languages and English.',
    tags: ['Speech AI', 'NLP', 'LLM', 'Multilingual'],
    icon: <Mic className="w-4 h-4" />,
    github: 'https://github.com/artechsolution-arts/meeting_intelligence',
    demo: 'https://www.meetvoz.com/',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070',
    problem: 'Most AI meeting assistants are built around English conversations. Real-world meetings in India are different — participants naturally switch between English, Hindi, Telugu, Tamil, and other regional languages, sometimes within the same sentence.',
    solution: 'MeetingVoz understands multilingual conversations and preserves the language used during the meeting, generating transcripts, summaries, and action items across 13 Indian languages plus English.',
    impact: 'Teams capture and understand multilingual meetings more accurately, while the natural language participants used is preserved.',
    architecture: 'Meeting Audio → Multilingual Speech-to-Text → LLM Summarization → Transcripts, Decisions & Action Items'
  },
  {
    id: 'documindai',
    title: 'DocumindAI',
    category: 'AI / Document Intelligence',
    description: 'AI-powered document intelligence platform for understanding, analyzing, and interacting with documents.',
    tags: ['AI', 'NLP', 'RAG', 'LLM'],
    icon: <FileText className="w-4 h-4" />,
    github: 'https://github.com/Artechsolutions-arts/Documind_ai',
    demo: 'https://www.documindai.in/',
    image: 'https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=2069',
    problem: 'Working with large and complex documents often requires manually searching through pages of information, and traditional keyword search struggles to capture the context users actually need.',
    solution: 'DocumindAI lets users interact with content using natural language — asking questions and retrieving relevant information instead of manually searching.',
    impact: 'Cuts the effort required to search and understand large documents by giving users a direct interface for retrieving relevant information and insights.',
    architecture: 'Document Upload → Text Extraction → Vector Embeddings → RAG Retrieval → LLM Answer'
  },
  {
    id: 'ar-peopliz-hrms',
    title: 'AR Peopliz HRMS',
    category: 'HRMS / Enterprise Application',
    description: 'A comprehensive Human Resource Management System designed to streamline employee management, HR operations, attendance, leave, and organizational workflows.',
    tags: ['HRMS', 'Enterprise', 'Workforce', 'Automation'],
    icon: <Users className="w-4 h-4" />,
    github: '#',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2073',
    problem: 'HR operations often depend on manual processes and disconnected systems for managing employees, attendance, leave, and workforce information — slow to run and hard to see across at scale.',
    solution: 'AR Peopliz HRMS brings core HR operations into a centralized platform, giving organizations a structured way to manage employee information and streamline day-to-day HR workflows through a single system.',
    impact: 'Centralizes core HR operations in one platform, cutting manual effort and giving HR teams clearer visibility into workforce processes.',
    architecture: 'Employee Data → Centralized HRMS Platform → Attendance, Leave & Workflow Automation → HR Reporting'
  },
  {
    id: 'rtgs-assistant',
    title: 'RTGS AI Assistant 2.0',
    category: 'GenAI / Citizen Services',
    description: 'Conversational AI platform for Real Time Governance Society, handling multi-lingual citizen queries.',
    tags: ['GenAI', 'LLMs', 'RAG', 'Vector DB'],
    icon: <Bot className="w-4 h-4" />,
    github: '#',
    demo: '#',
    image: '/ap-logo.png',
    problem: 'Citizen support teams were overwhelmed with repetitive administrative queries.',
    solution: 'Implemented a RAG-based chatbot using localized embeddings to provide instant, accurate responses.',
    impact: 'Handled 50,000+ queries in the first month with a 92% resolution rate.',
    architecture: 'Citizen Query → LangChain → Vector DB → LLM → Multi-lingual Response'
  },
  {
    id: 'public-pulse',
    title: 'Public Pulse 2.0',
    category: 'NLP / Public Sentiment',
    description: 'Advanced sentiment analysis and public feedback monitoring system for government initiatives.',
    tags: ['NLP', 'Transformers', 'FastAPI', 'React'],
    icon: <BarChart3 className="w-4 h-4" />,
    github: '#',
    demo: '#',
    image: '/ap-logo.png',
    problem: 'Processing massive volumes of citizen feedback manually was slow and prone to bias.',
    solution: 'Designed an NLP pipeline using transformer models to categorize and analyze sentiment in real-time.',
    impact: 'Reduced analysis time by 85% and increased accuracy of public trend identification.',
    architecture: 'Input Stream → BERT Classifier → Sentiment Scoring → Analytics Dashboard'
  },
  {
    id: 'smart-teacher',
    title: 'Smart Teacher',
    category: 'Chrome Extension / EdTech',
    description: 'Chrome extension transforming YouTube lectures into interactive study sessions using on-device AI.',
    tags: ['On-Device AI', 'Gemini Nano', 'NLP'],
    icon: <GraduationCap className="w-4 h-4" />,
    github: '#',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=2074',
    problem: 'Students struggled with passive learning from long video lectures.',
    solution: 'Built a local AI agent using Gemini Nano to extract notes and generate quizzes directly in the browser.',
    impact: 'Enhanced learning engagement with sub-second response times and full offline privacy.',
    architecture: 'YouTube Video → Transcript Extraction → On-Device LLM → Structured Notes'
  },
  {
    id: 'ev-market-analysis',
    title: 'EV Market Analysis',
    category: 'Data Analysis',
    description: 'Comprehensive market analysis project focused on understanding EV adoption trends in India.',
    tags: ['Pandas', 'Visualization', 'EDA'],
    icon: <Activity className="w-4 h-4" />,
    github: '#',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072',
    problem: 'Lack of clear data on EV adoption drivers to support expansion decisions.',
    solution: 'Performed deep EDA on multi-year datasets to identify growth clusters and charging infrastructure gaps.',
    impact: 'Provided actionable insights for strategic market entry and infrastructure planning.',
    architecture: 'Raw Data → ETL Pipeline → Exploratory Data Analysis → Strategic Dashboard'
  },
  {
    id: 'mail-watch',
    title: 'MailWatch',
    category: 'ML / Email Security',
    description: 'AI-powered email security system to identify and flag phishing threats using custom ML models.',
    tags: ['ML', 'Security', 'FastAPI'],
    icon: <Mail className="w-4 h-4" />,
    github: '#',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070',
    problem: 'Enterprise emails were vulnerable to sophisticated spear-phishing attacks.',
    solution: 'Trained a custom XGBoost model on behavioral and content features to detect anomalies.',
    impact: '99.4% detection rate on known phishing variants with near-zero false positives.',
    architecture: 'Incoming Mail → Header Parsing → ML Classifier → Risk Assessment'
  },
];

const ProjectImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-full h-full relative group overflow-hidden bg-cream flex items-center justify-center p-6">
    <img
      src={src}
      alt={alt}
      className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
      style={{ filter: 'grayscale(0.4) contrast(1.02)' }}
      onError={(e) => {
        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072';
      }}
    />
  </div>
);

const Projects = () => {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const selectedProject = projects.find((p) => p.id === selectedId);

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="eyebrow mb-4">Selected work &middot; {projects.length} projects</div>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-ink">
              Things I&apos;ve <span className="accent">shipped.</span>
            </h2>
          </motion.div>
        </div>

        {/* Project Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={project.id}
              onClick={() => setSelectedId(project.id)}
              className="group cursor-pointer card overflow-hidden hover:border-ink/25 transition-colors"
            >
              <div className="aspect-video w-full">
                <ProjectImage src={project.image} alt={project.title} />
              </div>

              <div className="p-5 border-t border-ink/10">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-clay">{project.icon}</span>
                    <h3 className="text-base font-semibold text-ink group-hover:text-clay transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  {project.demo !== '#' && (
                    <span className="text-[10px] font-bold uppercase tracking-wide text-pine">Live</span>
                  )}
                </div>
                <p className="text-xs text-ink-soft">{project.category}</p>
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
                className="fixed inset-0 bg-ink/60 backdrop-blur-sm z-[60] cursor-zoom-out"
              />
              <motion.div
                layoutId={selectedId}
                className="fixed inset-3 md:inset-10 lg:inset-16 z-[70] card overflow-hidden flex flex-col lg:grid lg:grid-cols-[0.9fr_1.1fr] pointer-events-none bg-cream"
              >
                <div className="relative h-56 lg:h-full bg-cream-2 pointer-events-auto flex items-center justify-center p-10 lg:p-16 border-b lg:border-b-0 lg:border-r border-ink/10">
                  <img src={selectedProject.image} alt={selectedProject.title} className="max-w-full max-h-full object-contain" style={{ filter: 'grayscale(0.4) contrast(1.02)' }} />
                </div>

                <div className="p-6 md:p-10 flex flex-col h-full pointer-events-auto overflow-y-auto">
                  <div className="flex justify-between items-start mb-6">
                    <div className="pr-10">
                      <div className="eyebrow mb-2">Case study</div>
                      <h3 className="font-display font-extrabold text-3xl md:text-4xl text-ink mb-4">{selectedProject.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag) => (
                          <span key={tag} className="badge">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedId(null)}
                      aria-label="Close project details"
                      className="p-2.5 rounded-full border border-ink/15 hover:border-ink/40 transition-colors cursor-pointer shrink-0"
                    >
                      <X className="w-4 h-4 text-ink" />
                    </button>
                  </div>

                  <p className="text-ink text-base mb-8 leading-relaxed border-l-2 border-clay/50 pl-5">
                    {selectedProject.description}
                  </p>

                  <div className="space-y-6 mb-8">
                    <div>
                      <div className="eyebrow eyebrow-clay mb-2">The Problem</div>
                      <p className="text-ink-soft text-sm leading-relaxed">{selectedProject.problem}</p>
                    </div>
                    <div>
                      <div className="eyebrow eyebrow-pine mb-2">The Approach</div>
                      <p className="text-ink-soft text-sm leading-relaxed">{selectedProject.solution}</p>
                    </div>
                    <div>
                      <div className="eyebrow mb-2">The Impact</div>
                      <p className="text-ink-soft text-sm leading-relaxed">{selectedProject.impact}</p>
                    </div>
                  </div>

                  <div className="card p-4 mb-8">
                    <div className="eyebrow mb-2">How it&apos;s built</div>
                    <p className="text-xs text-ink-soft leading-relaxed break-words">{selectedProject.architecture}</p>
                  </div>

                  <div className="mt-auto flex flex-col sm:flex-row gap-3">
                    <Link
                      href={selectedProject.github}
                      target={selectedProject.github !== '#' ? '_blank' : undefined}
                      rel={selectedProject.github !== '#' ? 'noopener noreferrer' : undefined}
                      className="flex-1 btn-dark justify-center"
                    >
                      <Github className="w-4 h-4" /> Source
                    </Link>
                    <Link
                      href={selectedProject.demo}
                      target={selectedProject.demo !== '#' ? '_blank' : undefined}
                      rel={selectedProject.demo !== '#' ? 'noopener noreferrer' : undefined}
                      className="flex-1 btn-outline justify-center"
                    >
                      <ArrowUpRight className="w-4 h-4" /> Live Demo
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
