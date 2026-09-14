import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  EyeIcon, 
  CloudIcon,
  CodeBracketIcon,
  CommandLineIcon,
  DocumentMagnifyingGlassIcon,
  Square3Stack3DIcon,
  SignalIcon,
  ArrowTopRightOnSquareIcon,
  CpuChipIcon,
  CheckCircleIcon,
  PlayIcon,
  PauseIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import { FaGithub } from 'react-icons/fa';
import ola from '../images/ola.jpg';
import weather from '../images/weather.jpg';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Interactive IoT Simulator State for ArcForge
  const [isSimulating, setIsSimulating] = useState(true);
  const [sensorValues, setSensorValues] = useState({
    vibration: 2.4,
    temp: 42.1,
    rpm: 1420,
    packets: 12480
  });

  useEffect(() => {
    if (!isSimulating) return;
    const interval = setInterval(() => {
      setSensorValues(prev => ({
        vibration: +(2.1 + Math.random() * 0.8).toFixed(2),
        temp: +(41.5 + Math.random() * 1.5).toFixed(1),
        rpm: Math.floor(1400 + Math.random() * 50),
        packets: prev.packets + Math.floor(1 + Math.random() * 3)
      }));
    }, 1500);
    return () => clearInterval(interval);
  }, [isSimulating]);

  const projects = [
    {
      id: 'arcforge',
      shortTitle: 'ArcForge IoT Suite',
      title: 'ArcForge - Full-Stack Modular Product Suite',
      period: 'July 2026',
      badge: 'Flagship IoT & Full-Stack',
      description: 'Architected a multi-role, full-stack suite (React, Node.js/Express, PostgreSQL, JWT) with a real-time IoT telemetry pipeline using Aedes MQTT and Socket.IO, streaming live sensor data for 32 simulated machine nodes. Includes a multi-format student evaluation engine (ArcEval) & hands-free voice-controlled HUD via Web Speech API.',
      category: 'Full-Stack & IoT Systems',
      tags: ['React', 'Node.js/Express', 'PostgreSQL', 'Socket.IO', 'MQTT', 'JWT', 'Web Speech API'],
      github: 'https://github.com/Seshu003',
      demo: 'https://seshu.vercel.app',
      isInteractiveTelemetry: true,
      features: [
        'Real-time IoT telemetry pipeline using Aedes MQTT & Socket.IO',
        'Streaming live sensor data for 32 simulated machine nodes',
        'Multi-format student evaluation engine (ArcEval)',
        'Hands-free voice-controlled presentation HUD via Web Speech API'
      ]
    },
    {
      id: 'ai-debugger',
      shortTitle: 'AI Python Debugger',
      title: 'AI-Powered Python Debugger & Tutor',
      period: 'April 2026',
      badge: 'Flagship AI & RAG',
      description: 'Built a React-based platform for automated Python debugging and tutoring, integrating an LLM with a RAG pipeline using contextual retrieval to generate targeted debugging guidance and feedback. Containerized with Docker and automated code-analysis workflows.',
      category: 'Generative AI & LLMs',
      tags: ['React', 'Python', 'LLM Integration', 'RAG Pipeline', 'Docker', 'FastAPI'],
      github: 'https://github.com/Seshu003',
      demo: 'https://seshu.vercel.app',
      isInteractiveRAG: true,
      features: [
        'RAG pipeline with contextual retrieval for targeted debugging hints',
        'Automated code-analysis workflows achieving 80% test bug-detection',
        'Containerized multi-tenant execution sandbox with Docker',
        'FastAPI microservice backend for high-throughput inference'
      ]
    },
    {
      id: 'lint-ai',
      shortTitle: 'Lint AI Scanner',
      title: 'Lint AI - Technical Debt Analysis Tool',
      period: 'October 2025',
      badge: 'Full-Stack AST Systems',
      description: 'Built a full-stack tool that analyzes codebases for technical debt and auto-generates structured PDF audit reports, supporting multi-folder scans across user-selected codebases of any scale. Implemented scoring logic to flag code smells and complexity issues.',
      category: 'Code Intelligence',
      tags: ['Full-Stack', 'Python', 'AST Analysis', 'PDF Reporting', 'Code Smells'],
      github: 'https://github.com/Seshu003',
      demo: 'https://seshu.vercel.app',
      features: [
        'Multi-folder AST scans supporting codebases of any size',
        'Scoring engine flagging maintenance risk across 10 issue categories',
        'Automated executive PDF report generator',
        'Interactive complexity breakdown dashboard'
      ]
    },
    {
      id: 'assistive-detect',
      shortTitle: 'AI Assistive Detect',
      title: 'AI Assistive Object & Sound Detection',
      period: 'Ongoing',
      badge: 'Computer Vision & Mobile',
      description: 'Android application with custom TensorFlow Lite model to detect physical obstacles and acoustic events in real-time; dispatches multi-modal alerts via speech, text, and vibration for accessibility.',
      category: 'Edge AI & Mobile',
      tags: ['Android', 'TensorFlow Lite', 'Computer Vision', 'Audio Event Detect', 'Accessibility'],
      github: 'https://github.com/Seshu003',
      demo: null,
      features: [
        'Real-time object classification using optimized TFLite',
        'Acoustic signal processing for ambient alarm and sound detection',
        'Haptic and auditory feedback loop for visually impaired users',
        'Low-power mobile edge inference optimization'
      ]
    },
    {
      id: 'weather-aqi',
      shortTitle: 'Weather & AQI ML',
      title: 'Weather & AQI Forecasting System',
      period: 'Completed',
      badge: 'Machine Learning',
      description: 'ML-based forecasting system utilizing real-time sensor and API pipelines to predict localized atmospheric conditions and Air Quality Index metrics with high precision.',
      category: 'Predictive Modeling',
      image: weather,
      tags: ['Machine Learning', 'API Integration', 'Time Series', 'Python'],
      github: 'https://github.com/Seshu003/Weather-Forecasting-and-AQI',
      demo: 'https://seshu.vercel.app',
      features: [
        'Real-time atmospheric API integration and data ETL',
        'Air Quality Index (AQI) particulate prediction model',
        'Visual interactive analytics dashboard',
        'Historical trend correlation analysis'
      ]
    },
    {
      id: 'ola-bike',
      shortTitle: 'Ola Ride Forecast',
      title: 'Ola Bike Ride Demand Forecast',
      period: 'Completed',
      badge: 'Predictive Analytics',
      description: 'Machine learning predictive model leveraging historical trip records, meteorological trends, and traffic congestion patterns to forecast ride-hailing demand and optimize fleet deployment.',
      category: 'Time Series Analytics',
      image: ola,
      tags: ['Machine Learning', 'Predictive Modeling', 'Python', 'Pandas'],
      github: 'https://github.com/Seshu003',
      demo: 'https://seshu.vercel.app',
      features: [
        'Time series demand forecasting across high-density metro zones',
        'Multi-variable feature engineering for traffic & rain impacts',
        'Business optimization recommendations for fleet balancing',
        'Visualized model evaluation metrics'
      ]
    }
  ];

  const currentProject = projects[currentIndex];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleSelect = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (dir) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      transition: { duration: 0.25, ease: 'easeIn' }
    })
  };

  return (
    <section id="projects" className="py-16 sm:py-20 relative bg-obsidian-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header & Carousel Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs mb-2.5">
              <CodeBracketIcon className="w-3.5 h-3.5" />
              <span>INTERACTIVE PROJECT CAROUSEL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-space-grotesk font-bold text-white tracking-tight">
              Featured <span className="gradient-text">Architectures</span>
            </h2>
          </div>

          {/* Carousel Arrows & Counter */}
          <div className="flex items-center gap-4">
            <div className="font-mono text-xs text-slate-400 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-lg">
              <span className="text-cyan-400 font-bold">0{currentIndex + 1}</span>
              <span className="mx-1 text-slate-600">/</span>
              <span>0{projects.length}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                className="p-2 rounded-xl bg-slate-900/90 border border-white/10 hover:border-indigo-500/40 text-slate-300 hover:text-white transition-all"
                title="Previous Project"
              >
                <ChevronLeftIcon className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-xl bg-slate-900/90 border border-white/10 hover:border-indigo-500/40 text-slate-300 hover:text-white transition-all"
                title="Next Project"
              >
                <ChevronRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Project Selector Tab Bar (Single Click Jump) */}
        <div className="flex overflow-x-auto gap-2 pb-3 mb-6 scrollbar-none">
          {projects.map((proj, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <button
                key={proj.id}
                onClick={() => handleSelect(idx)}
                className={`px-3.5 py-1.5 rounded-xl font-mono text-xs whitespace-nowrap transition-all flex items-center gap-2 shrink-0 ${
                  isSelected
                    ? 'bg-indigo-600/30 border border-indigo-500/60 text-white shadow-md shadow-indigo-500/20'
                    : 'bg-slate-900/50 border border-white/5 text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-cyan-400 animate-pulse' : 'bg-slate-600'}`}></span>
                <span>{proj.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Carousel Showcase Card */}
        <div className="relative min-h-[420px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentProject.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="glass-panel p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-stretch">
                
                {/* Left Col: Details & Deliverables (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 font-mono text-xs text-indigo-300 font-semibold">
                        {currentProject.badge}
                      </span>
                      <span className="font-mono text-xs text-slate-400">
                        {currentProject.period} • {currentProject.category}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-space-grotesk font-bold text-white mb-2">
                      {currentProject.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {currentProject.description}
                    </p>

                    {/* Deliverables List */}
                    <div className="space-y-2">
                      {currentProject.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircleIcon className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                      {currentProject.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08] font-mono text-[11px] text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-3 pt-4">
                      {currentProject.github && (
                        <a
                          href={currentProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/[0.06] hover:bg-white/10 text-white font-mono text-xs transition-colors"
                        >
                          <FaGithub className="w-4 h-4" />
                          <span>View Repository</span>
                        </a>
                      )}
                      {currentProject.demo && (
                        <a
                          href={currentProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-semibold shadow-lg shadow-indigo-600/30 transition-all"
                        >
                          <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                          <span>Live System</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Col: Full-Height Interactive Widget & Visual HUD (5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-3">
                  {currentProject.id === 'arcforge' ? (
                    <div className="p-4 rounded-xl bg-slate-950/90 border border-indigo-500/30 font-mono text-xs flex flex-col justify-between h-full space-y-3">
                      <div>
                        <div className="flex items-center justify-between border-b border-white/[0.08] pb-2 mb-3">
                          <div className="flex items-center gap-2 text-indigo-300 font-bold">
                            <SignalIcon className={`w-4 h-4 ${isSimulating ? 'text-emerald-400 animate-pulse' : 'text-slate-500'}`} />
                            <span>Aedes MQTT Broker</span>
                          </div>
                          <button
                            onClick={() => setIsSimulating(!isSimulating)}
                            className="flex items-center gap-1 px-2.5 py-1 rounded bg-white/[0.06] hover:bg-white/10 text-slate-300 text-[11px]"
                          >
                            {isSimulating ? <PauseIcon className="w-3 h-3 text-amber-400" /> : <PlayIcon className="w-3 h-3 text-emerald-400" />}
                            <span>{isSimulating ? 'Pause' : 'Resume'}</span>
                          </button>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div className="p-2.5 rounded bg-slate-900 border border-white/5 text-center">
                            <div className="text-[10px] text-slate-400">Vibration (mm/s)</div>
                            <div className="text-base font-bold text-cyan-400">{sensorValues.vibration}</div>
                          </div>
                          <div className="p-2.5 rounded bg-slate-900 border border-white/5 text-center">
                            <div className="text-[10px] text-slate-400">Core Temp (°C)</div>
                            <div className="text-base font-bold text-amber-400">{sensorValues.temp}</div>
                          </div>
                          <div className="p-2.5 rounded bg-slate-900 border border-white/5 text-center">
                            <div className="text-[10px] text-slate-400">Motor RPM</div>
                            <div className="text-base font-bold text-indigo-400">{sensorValues.rpm}</div>
                          </div>
                          <div className="p-2.5 rounded bg-slate-900 border border-white/5 text-center">
                            <div className="text-[10px] text-slate-400">MQTT Packets</div>
                            <div className="text-base font-bold text-emerald-400">{sensorValues.packets}</div>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 rounded bg-slate-900/90 border border-white/5 space-y-1 text-[11px]">
                        <div className="text-slate-400 flex items-center justify-between">
                          <span>Live Telemetry Streams</span>
                          <span className="text-emerald-400">● 32 Active Nodes</span>
                        </div>
                        <div className="text-slate-500 font-mono text-[10px]">
                          Node #04: ACK • Node #12: STREAM OK • Node #28: SYNC
                        </div>
                      </div>

                      <div className="p-2.5 rounded bg-indigo-950/40 text-[11px] text-indigo-200 border border-indigo-500/20">
                        Socket.IO cluster streaming 32 simulated machine nodes to student evaluation HUD.
                      </div>
                    </div>
                  ) : currentProject.id === 'ai-debugger' ? (
                    <div className="p-4 rounded-xl bg-slate-950/90 border border-purple-500/30 font-mono text-xs flex flex-col justify-between h-full space-y-3">
                      <div>
                        <div className="flex items-center justify-between text-purple-300 font-bold border-b border-white/[0.08] pb-2 mb-3">
                          <div className="flex items-center gap-1.5">
                            <CpuChipIcon className="w-4 h-4 text-purple-400" />
                            <span>RAG Pipeline Simulator</span>
                          </div>
                          <span className="text-emerald-400 text-[10px]">80% Bug Detection</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div className="p-2.5 rounded bg-slate-900 border border-white/5 text-center">
                            <div className="text-[10px] text-slate-400">Inference Engine</div>
                            <div className="text-sm font-bold text-purple-400">FastAPI LLM</div>
                          </div>
                          <div className="p-2.5 rounded bg-slate-900 border border-white/5 text-center">
                            <div className="text-[10px] text-slate-400">Sandbox Env</div>
                            <div className="text-sm font-bold text-cyan-400">Docker Isolated</div>
                          </div>
                        </div>

                        <div className="text-[11px] text-slate-300 bg-slate-900 p-3 rounded border border-white/5 space-y-1.5">
                          <div className="text-slate-400">Target: Python KeyError in dictionary pipeline</div>
                          <div className="text-cyan-300">→ Vector embeddings retrieved 3 contextual patterns</div>
                          <div className="text-emerald-400">✓ Automated patch &amp; explanation generated</div>
                        </div>
                      </div>

                      <div className="p-2.5 rounded bg-purple-950/30 text-[11px] text-purple-200 border border-purple-500/20">
                        Contextual retrieval RAG sandbox evaluating student submissions with automated test verification.
                      </div>
                    </div>
                  ) : currentProject.id === 'lint-ai' ? (
                    <div className="p-4 rounded-xl bg-slate-950/90 border border-cyan-500/30 font-mono text-xs flex flex-col justify-between h-full space-y-3">
                      <div>
                        <div className="flex items-center justify-between text-cyan-300 font-bold border-b border-white/[0.08] pb-2 mb-3">
                          <div className="flex items-center gap-1.5">
                            <CommandLineIcon className="w-4 h-4 text-cyan-400" />
                            <span>AST Analysis &amp; Debt Scanner</span>
                          </div>
                          <span className="text-emerald-400 text-[10px]">Active Engine</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div className="p-2.5 rounded bg-slate-900 border border-white/5 text-center">
                            <div className="text-[10px] text-slate-400">AST Parsed Nodes</div>
                            <div className="text-base font-bold text-cyan-400">4,820</div>
                          </div>
                          <div className="p-2.5 rounded bg-slate-900 border border-white/5 text-center">
                            <div className="text-[10px] text-slate-400">Cognitive Complexity</div>
                            <div className="text-base font-bold text-emerald-400">Grade A</div>
                          </div>
                          <div className="p-2.5 rounded bg-slate-900 border border-white/5 text-center">
                            <div className="text-[10px] text-slate-400">Code Smells Flagged</div>
                            <div className="text-base font-bold text-amber-400">0 Critical</div>
                          </div>
                          <div className="p-2.5 rounded bg-slate-900 border border-white/5 text-center">
                            <div className="text-[10px] text-slate-400">Audit Export</div>
                            <div className="text-base font-bold text-indigo-400">PDF Ready</div>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 rounded bg-slate-900/90 border border-white/5 space-y-1 text-[11px]">
                        <div className="text-slate-400">CLI Execution Log:</div>
                        <div className="text-slate-300 font-mono text-[10px]">
                          ➜ lint-ai scan --target src/ --rules strict [PASS]
                        </div>
                      </div>

                      <div className="p-2.5 rounded bg-cyan-950/40 text-[11px] text-cyan-200 border border-cyan-500/20">
                        Multi-folder recursive AST parsing to prevent regressions and generate executive reports.
                      </div>
                    </div>
                  ) : currentProject.id === 'assistive-detect' ? (
                    <div className="p-4 rounded-xl bg-slate-950/90 border border-emerald-500/30 font-mono text-xs flex flex-col justify-between h-full space-y-3">
                      <div>
                        <div className="flex items-center justify-between text-emerald-300 font-bold border-b border-white/[0.08] pb-2 mb-3">
                          <div className="flex items-center gap-1.5">
                            <CpuChipIcon className="w-4 h-4 text-emerald-400" />
                            <span>Mobile Edge Radar HUD</span>
                          </div>
                          <span className="text-cyan-400 text-[10px]">TFLite v2.14</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div className="p-2.5 rounded bg-slate-900 border border-white/5 text-center">
                            <div className="text-[10px] text-slate-400">Obstacle Proximity</div>
                            <div className="text-base font-bold text-emerald-400">1.2m Clear</div>
                          </div>
                          <div className="p-2.5 rounded bg-slate-900 border border-white/5 text-center">
                            <div className="text-[10px] text-slate-400">Acoustic Channel</div>
                            <div className="text-base font-bold text-cyan-400">Standby</div>
                          </div>
                          <div className="p-2.5 rounded bg-slate-900 border border-white/5 text-center">
                            <div className="text-[10px] text-slate-400">Edge Latency</div>
                            <div className="text-base font-bold text-amber-400">18ms</div>
                          </div>
                          <div className="p-2.5 rounded bg-slate-900 border border-white/5 text-center">
                            <div className="text-[10px] text-slate-400">Haptic Alert</div>
                            <div className="text-base font-bold text-indigo-400">Armed</div>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 rounded bg-slate-900/90 border border-white/5 space-y-1 text-[11px]">
                        <div className="text-slate-400">Accessibility Pipeline:</div>
                        <div className="text-slate-300 font-mono text-[10px]">
                          Simultaneous tri-modal alerts: Screen Text + Speech Synth + Haptic Pulses
                        </div>
                      </div>

                      <div className="p-2.5 rounded bg-emerald-950/40 text-[11px] text-emerald-200 border border-emerald-500/20">
                        Custom-trained mobile TensorFlow Lite model designed for rapid real-time spatial accessibility.
                      </div>
                    </div>
                  ) : currentProject.id === 'weather-aqi' ? (
                    <div className="p-4 rounded-xl bg-slate-950/90 border border-blue-500/30 font-mono text-xs flex flex-col justify-between h-full space-y-3">
                      <div>
                        <div className="flex items-center justify-between text-blue-300 font-bold border-b border-white/[0.08] pb-2 mb-3">
                          <div className="flex items-center gap-1.5">
                            <CloudIcon className="w-4 h-4 text-blue-400" />
                            <span>Atmospheric Predictive HUD</span>
                          </div>
                          <span className="text-emerald-400 text-[10px]">ML Forecast</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div className="p-2.5 rounded bg-slate-900 border border-white/5 text-center">
                            <div className="text-[10px] text-slate-400">AQI Index</div>
                            <div className="text-base font-bold text-emerald-400">42 (Good)</div>
                          </div>
                          <div className="p-2.5 rounded bg-slate-900 border border-white/5 text-center">
                            <div className="text-[10px] text-slate-400">PM2.5 Level</div>
                            <div className="text-base font-bold text-cyan-400">11 µg/m³</div>
                          </div>
                          <div className="p-2.5 rounded bg-slate-900 border border-white/5 text-center">
                            <div className="text-[10px] text-slate-400">Predicted Temp</div>
                            <div className="text-base font-bold text-amber-400">28.4°C</div>
                          </div>
                          <div className="p-2.5 rounded bg-slate-900 border border-white/5 text-center">
                            <div className="text-[10px] text-slate-400">ML Confidence</div>
                            <div className="text-base font-bold text-indigo-400">94.2%</div>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 rounded bg-slate-900/90 border border-white/5 space-y-1 text-[11px]">
                        <div className="text-slate-400">Data Pipeline ETL:</div>
                        <div className="text-slate-300 font-mono text-[10px]">
                          Automated API ingestion → Feature Normalization → Time Series Regressor
                        </div>
                      </div>

                      <div className="p-2.5 rounded bg-blue-950/40 text-[11px] text-blue-200 border border-blue-500/20">
                        Multi-factor atmospheric prediction delivering localized particulate analysis.
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 rounded-xl bg-slate-950/90 border border-amber-500/30 font-mono text-xs flex flex-col justify-between h-full space-y-3">
                      <div>
                        <div className="flex items-center justify-between text-amber-300 font-bold border-b border-white/[0.08] pb-2 mb-3">
                          <div className="flex items-center gap-1.5">
                            <Square3Stack3DIcon className="w-4 h-4 text-amber-400" />
                            <span>Ride Dispatch &amp; Matching Engine</span>
                          </div>
                          <span className="text-emerald-400 text-[10px]">Live Node</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div className="p-2.5 rounded bg-slate-900 border border-white/5 text-center">
                            <div className="text-[10px] text-slate-400">Nearby Cabs</div>
                            <div className="text-base font-bold text-amber-400">14 Active</div>
                          </div>
                          <div className="p-2.5 rounded bg-slate-900 border border-white/5 text-center">
                            <div className="text-[10px] text-slate-400">Surge Index</div>
                            <div className="text-base font-bold text-cyan-400">1.0x Normal</div>
                          </div>
                          <div className="p-2.5 rounded bg-slate-900 border border-white/5 text-center">
                            <div className="text-[10px] text-slate-400">Match Latency</div>
                            <div className="text-base font-bold text-emerald-400">1.2s</div>
                          </div>
                          <div className="p-2.5 rounded bg-slate-900 border border-white/5 text-center">
                            <div className="text-[10px] text-slate-400">Authentication</div>
                            <div className="text-base font-bold text-indigo-400">JWT / Auth</div>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 rounded bg-slate-900/90 border border-white/5 space-y-1 text-[11px]">
                        <div className="text-slate-400">Dispatch System:</div>
                        <div className="text-slate-300 font-mono text-[10px]">
                          Geo-spatial route plotting with dynamic fare calculation &amp; driver assignment.
                        </div>
                      </div>

                      <div className="p-2.5 rounded bg-amber-950/40 text-[11px] text-amber-200 border border-amber-500/20">
                        Production-grade ride booking replica showcasing state persistence and responsive UI architecture.
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Projects;