import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaPython, 
  FaJava, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaDocker, 
  FaGitAlt, 
  FaAws, 
  FaDatabase 
} from 'react-icons/fa';
import { 
  SiFastapi, 
  SiTensorflow, 
  SiPostgresql, 
  SiMongodb, 
  SiRedis, 
  SiSocketdotio, 
  SiJenkins, 
  SiJira, 
  SiC 
} from 'react-icons/si';
import { 
  CpuChipIcon, 
  SparklesIcon, 
  ServerStackIcon, 
  CloudIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Technologies', count: 18 },
    { id: 'full-stack', name: 'Languages & Full-Stack', count: 7 },
    { id: 'ai-ml', name: 'AI/ML & RAG', count: 3 },
    { id: 'databases', name: 'Databases & Telemetry', count: 4 },
    { id: 'devops', name: 'DevOps & Cloud', count: 4 },
  ];

  const techStack = [
    // Languages & Full-Stack
    {
      name: 'JavaScript (ES6+)',
      category: 'full-stack',
      icon: FaJs,
      color: '#f7df1e',
      role: 'Core Language',
      badge: 'Advanced',
      usedIn: 'Full-Stack Apps & APIs'
    },
    {
      name: 'Python',
      category: 'ai-ml',
      icon: FaPython,
      color: '#38bdf8',
      role: 'AI & Backend',
      badge: 'Specialized',
      usedIn: 'ML Models, RAG & FastAPI'
    },
    {
      name: 'React 18',
      category: 'full-stack',
      icon: FaReact,
      color: '#61dafb',
      role: 'Frontend Architecture',
      badge: 'Advanced',
      usedIn: 'ArcForge & Debugger'
    },
    {
      name: 'Node.js & Express',
      category: 'full-stack',
      icon: FaNodeJs,
      color: '#22c55e',
      role: 'Backend Systems',
      badge: 'Advanced',
      usedIn: 'REST APIs & WebSockets'
    },
    {
      name: 'FastAPI',
      category: 'ai-ml',
      icon: SiFastapi,
      color: '#009688',
      role: 'High-Perf API',
      badge: 'Proficient',
      usedIn: 'AI Microservices & RAG'
    },
    {
      name: 'C Language',
      category: 'full-stack',
      icon: SiC,
      color: '#60a5fa',
      role: 'System Foundations',
      badge: 'Core',
      usedIn: 'Data Structures'
    },
    {
      name: 'Java',
      category: 'full-stack',
      icon: FaJava,
      color: '#f97316',
      role: 'OOP & Architecture',
      badge: 'Proficient',
      usedIn: 'Enterprise Concepts'
    },

    // AI & ML
    {
      name: 'TensorFlow & TFLite',
      category: 'ai-ml',
      icon: SiTensorflow,
      color: '#f97316',
      role: 'Deep Learning',
      badge: 'Specialized',
      usedIn: 'Sweach AI & Mobile Detect'
    },
    {
      name: 'LLM & RAG Pipelines',
      category: 'ai-ml',
      icon: CpuChipIcon,
      color: '#a855f7',
      role: 'Generative AI',
      badge: 'Production',
      usedIn: 'AI Python Debugger & Tutor'
    },

    // Databases & Real-time
    {
      name: 'PostgreSQL',
      category: 'databases',
      icon: SiPostgresql,
      color: '#3b82f6',
      role: 'Relational Database',
      badge: 'Advanced',
      usedIn: 'ArcForge Modular Suite'
    },
    {
      name: 'MongoDB',
      category: 'databases',
      icon: SiMongodb,
      color: '#10b981',
      role: 'Document Store',
      badge: 'Proficient',
      usedIn: 'Dynamic Schema'
    },
    {
      name: 'Redis',
      category: 'databases',
      icon: SiRedis,
      color: '#ef4444',
      role: 'Cache & Queue',
      badge: 'Proficient',
      usedIn: 'Telemetry Caching'
    },
    {
      name: 'Socket.IO & MQTT',
      category: 'databases',
      icon: SiSocketdotio,
      color: '#06b6d4',
      role: 'Real-Time Telemetry',
      badge: 'Specialized',
      usedIn: 'ArcForge 32-Node Stream'
    },

    // DevOps & Cloud
    {
      name: 'AWS Cloud',
      category: 'devops',
      icon: FaAws,
      color: '#ff9900',
      role: 'Cloud Infrastructure',
      badge: 'Practitioner',
      usedIn: 'Deployments & S3'
    },
    {
      name: 'Docker',
      category: 'devops',
      icon: FaDocker,
      color: '#0284c7',
      role: 'Containerization',
      badge: 'Proficient',
      usedIn: 'Sandbox Containers'
    },
    {
      name: 'Git & GitHub',
      category: 'devops',
      icon: FaGitAlt,
      color: '#f43f5e',
      role: 'Version Control',
      badge: 'Advanced',
      usedIn: 'CI/CD & Workflows'
    },
    {
      name: 'Jira & Agile Workflows',
      category: 'devops',
      icon: SiJira,
      color: '#2563eb',
      role: 'Sprint Delivery',
      badge: 'Proficient',
      usedIn: 'Agile Ceremonies'
    },
    {
      name: 'Jenkins (CI/CD Basics)',
      category: 'devops',
      icon: SiJenkins,
      color: '#e11d48',
      role: 'Build Automation',
      badge: 'Familiar',
      usedIn: 'Build Pipelines'
    },
  ];

  const filteredStack = activeCategory === 'all'
    ? techStack
    : techStack.filter(item => item.category === activeCategory);

  return (
    <section id="skills" className="py-16 sm:py-20 relative bg-obsidian-900 border-t border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs mb-2.5">
            <CpuChipIcon className="w-3.5 h-3.5" />
            <span>COMPACT TECH ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-space-grotesk font-bold text-white tracking-tight">
            Technical <span className="gradient-text">Competencies</span>
          </h2>
          <p className="mt-2 text-slate-400 text-xs sm:text-sm">
            Core full-stack frameworks, deep learning engines, and distributed telemetry protocols.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto justify-start sm:justify-center gap-2 pb-3 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-xl font-mono text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md shadow-indigo-500/20'
                  : 'bg-slate-950/60 border border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Compact Tech Matrix Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          <AnimatePresence mode="popLayout">
            {filteredStack.map((tech) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="glass-panel p-3.5 flex items-center justify-between border border-white/5 hover:border-indigo-500/40 transition-colors group"
                >
                  <div className="flex items-center gap-3 truncate">
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center bg-slate-950 border border-white/10 shrink-0"
                      style={{ color: tech.color }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-xs font-space-grotesk font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                        {tech.name}
                      </div>
                      <div className="text-[10px] font-mono text-slate-400 truncate">
                        {tech.usedIn}
                      </div>
                    </div>
                  </div>

                  <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-white/[0.05] border border-white/10 text-indigo-300 shrink-0 ml-2 hidden sm:inline-block">
                    {tech.badge}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Skills;