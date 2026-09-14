import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-scroll';
import { 
  ArrowDownTrayIcon, 
  CommandLineIcon, 
  SparklesIcon, 
  CpuChipIcon, 
  SignalIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileimg from '../images/profile.jpg';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('telemetry');
  const [ping, setPing] = useState(14);

  // Periodic simulated latency fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      setPing(Math.floor(12 + Math.random() * 6));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-radial-mesh bg-grid-cyber"
    >
      {/* Background Decorative Glow Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Value Proposition */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs text-emerald-300 font-medium tracking-wide">
                Available for Full-Stack &amp; AI Engineering Roles • Fast Onboarding
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-space-grotesk font-bold text-4xl sm:text-6xl tracking-tight text-white leading-[1.1]">
                Hi, I'm <span className="gradient-text">Sai Seshu</span>
              </h1>
              
              <div className="font-mono text-lg sm:text-2xl text-cyan-400 font-medium h-9 flex items-center justify-center lg:justify-start gap-2">
                <span className="text-slate-500">$</span>
                <Typewriter
                  words={[
                    'AI/ML Full-Stack Developer',
                    'Full-Stack Developer (React & Node.js)',
                    'LLM & RAG Solutions Architect',
                    'IoT Telemetry & MQTT Specialist',
                    'Deep Learning & Model Engineer'
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={55}
                  deleteSpeed={35}
                  delaySpeed={1400}
                />
              </div>
            </div>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              AI/ML &amp; Full-Stack Engineer with proven hands-on experience designing and deploying 
              production-ready distributed applications using <span className="text-white font-semibold">Python, TensorFlow, React, Node.js, and PostgreSQL</span>. 
              Specialized in real-time IoT telemetry pipelines (MQTT &amp; WebSockets), LLM &amp; RAG architectures, and scalable cloud deployments.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
                className="btn-shimmer px-6 py-3 text-sm font-semibold flex items-center gap-2 cursor-pointer"
              >
                <span>View Featured Projects</span>
                <ChevronRightIcon className="w-4 h-4" />
              </Link>

              <a
                href="/SaiSeshuAdimulam.pdf"
                download="SaiSeshuAdimulam_Resume.pdf"
                className="btn-cyber-outline px-6 py-3 text-sm font-semibold flex items-center gap-2"
              >
                <ArrowDownTrayIcon className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Core Tech Stack Row */}
            <div className="pt-4 border-t border-white/[0.08]">
              <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">
                Core Production Stack
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {['Python', 'TensorFlow', 'React', 'Node.js', 'PostgreSQL', 'FastAPI', 'RAG / LLMs', 'Docker', 'AWS', 'MQTT'].map((tech) => (
                  <span
                    key={tech}
                    className="code-badge transition-colors hover:border-indigo-400/60 hover:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-Tech Interactive Terminal HUD */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Terminal Window */}
            <div className="terminal-card overflow-hidden">
              {/* Terminal Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="ml-2 text-xs font-mono text-slate-400">seshu@system-node:~</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                  <SignalIcon className="w-3.5 h-3.5 animate-pulse" />
                  <span>{ping}ms</span>
                </div>
              </div>

              {/* Terminal Tabs */}
              <div className="flex border-b border-white/[0.08] bg-slate-950/60 text-xs font-mono">
                <button
                  onClick={() => setActiveTab('telemetry')}
                  className={`px-4 py-2 border-r border-white/[0.08] transition-colors ${
                    activeTab === 'telemetry' 
                      ? 'bg-indigo-950/40 text-indigo-300 border-b-2 border-b-indigo-500' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  system.status
                </button>
                <button
                  onClick={() => setActiveTab('architecture')}
                  className={`px-4 py-2 border-r border-white/[0.08] transition-colors ${
                    activeTab === 'architecture' 
                      ? 'bg-indigo-950/40 text-indigo-300 border-b-2 border-b-indigo-500' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  architecture.json
                </button>
              </div>

              {/* Terminal Content Body */}
              <div className="p-5 space-y-4 text-xs font-mono leading-relaxed bg-slate-950/80 min-h-[300px]">
                {activeTab === 'telemetry' ? (
                  <>
                    <div className="text-slate-400">
                      <span className="text-emerald-400">➜</span> <span className="text-cyan-400">~</span> npx seshu status --live
                    </div>

                    <div className="space-y-1.5 text-slate-300">
                      <div className="flex justify-between">
                        <span className="text-slate-500">[ENGINE]</span>
                        <span className="text-indigo-400">Python 3.13 • TensorFlow Lite</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">[FULL-STACK]</span>
                        <span className="text-cyan-400">React 18 • Node.js • PostgreSQL</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">[TELEMETRY]</span>
                        <span className="text-emerald-400">Aedes MQTT • 32 Live Nodes</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">[AI PIPELINE]</span>
                        <span className="text-purple-400">RAG Context Retrieval • LLMs</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">[VERCEL DOMAIN]</span>
                        <span className="text-slate-200">seshu.vercel.app</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-indigo-950/30 border border-indigo-500/20 text-slate-300 text-[11px] space-y-1">
                      <div className="flex items-center gap-2 text-indigo-300 font-semibold">
                        <CpuChipIcon className="w-4 h-4 text-indigo-400" />
                        <span>ArcForge Telemetry Pipeline</span>
                      </div>
                      <div className="text-slate-400">
                        Aedes MQTT Broker listening on socket:5000. Real-time sensor streaming active for student evaluation HUD.
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-slate-500 pt-1">
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                      <span>Ready for incoming production deployments...</span>
                    </div>
                  </>
                ) : (
                  <pre className="text-slate-300 text-[11px] overflow-x-auto">
{`{
  "developer": "Sai Seshu Adimulam",
  "role": "AI/ML Full-Stack Developer",
  "location": "Kakinada, AP",
  "cgpa": 8.17,
  "institution": "KIET (CAI)",
  "featured_projects": [
    "ArcForge (IoT Telemetry Suite)",
    "AI-Powered Python Debugger & Tutor",
    "Lint AI (Tech Debt Scanner)"
  ],
  "fluentedge_awards": [
    "Speaking Star (Score 7.5/9, CEFR B2)",
    "Reading Star (Score 7/9, CEFR B2)"
  ],
  "contact": {
    "email": "seshu.ay2k26@gmail.com",
    "phone": "+91 7981104636"
  }
}`}
                  </pre>
                )}
              </div>
            </div>

            {/* Profile Hologram Avatar Floating Widget */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -left-6 flex items-center gap-3 p-2.5 rounded-2xl bg-slate-900/95 border border-indigo-500/30 shadow-2xl backdrop-blur-xl"
            >
              <div className="relative">
                <img
                  src={profileimg}
                  alt="Sai Seshu"
                  className="w-12 h-12 rounded-xl object-cover border border-white/20"
                />
                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-slate-900"></span>
              </div>
              <div className="pr-2">
                <div className="font-space-grotesk font-bold text-white text-xs">
                  Sai Seshu Adimulam
                </div>
                <div className="text-[10px] font-mono text-cyan-400">
                  KIET '26 • B.Tech AI
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;