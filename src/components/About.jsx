import React from 'react';
import { motion } from 'framer-motion';
import { 
  AcademicCapIcon, 
  MapPinIcon, 
  CpuChipIcon, 
  SparklesIcon,
  CheckBadgeIcon,
  ArrowTrendingUpIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const About = () => {
  const educationData = [
    {
      degree: 'B.Tech in Artificial Intelligence (CAI)',
      institution: 'KIET, Korangi',
      timeline: '2023 - 2026',
      score: 'CGPA: 8.17',
      featured: true
    },
    {
      degree: 'Diploma in Electronics & Communication',
      institution: 'Aditya Polytechnic College, Surampalem',
      timeline: '2020 - 2023',
      score: '92.0%'
    },
    {
      degree: 'High School (EM)',
      institution: 'Yoganand High School, Kakinada',
      timeline: '2019 - 2020',
      score: '95.0%'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 relative bg-obsidian-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs mb-2.5">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>IDENTITY &amp; FOUNDATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-space-grotesk font-bold text-white tracking-tight">
            Engineering <span className="gradient-text">Profile</span>
          </h2>
          <p className="mt-2 text-slate-400 text-xs sm:text-sm">
            Bridging AI/ML model architecture with production-grade full-stack distributed systems.
          </p>
        </div>

        {/* Balanced 2x2 Bento Grid (Equal Heights, No Empty Gaps) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* Card 1: Engineering Mindset & Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="glass-panel p-6 sm:p-7 flex flex-col justify-between border border-white/10 hover:border-indigo-500/30 transition-all h-full"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <CpuChipIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-space-grotesk font-bold text-white">
                    Full-Stack &amp; AI Systems
                  </h3>
                  <span className="font-mono text-xs text-indigo-400">Architecture Mindset</span>
                </div>
              </div>

              <div className="space-y-3 text-slate-300 text-xs sm:text-sm leading-relaxed">
                <p>
                  I engineer end-to-end applications where machine learning models seamlessly power real-time web infrastructure. 
                  My focus centers on scalable distributed APIs, reactive interfaces, and efficient model execution.
                </p>
                <p>
                  Key systems include <strong className="text-cyan-400 font-semibold">ArcForge</strong> (a multi-role IoT suite streaming telemetry across 32 machine nodes using Aedes MQTT and Socket.IO) 
                  and containerized <strong className="text-indigo-300 font-semibold">AI Python Debugger</strong> integrating RAG contextual retrieval for automated remediation.
                </p>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-2.5 pt-4 mt-4 border-t border-white/[0.08]">
              <div className="p-2.5 rounded-xl bg-slate-900/80 border border-white/5 text-center">
                <div className="text-lg font-space-grotesk font-bold text-indigo-400">12+</div>
                <div className="text-[10px] font-mono text-slate-400">Deliverables Built</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/80 border border-white/5 text-center">
                <div className="text-lg font-space-grotesk font-bold text-cyan-400">32</div>
                <div className="text-[10px] font-mono text-slate-400">Telemetry Nodes</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/80 border border-white/5 text-center">
                <div className="text-lg font-space-grotesk font-bold text-emerald-400">80%</div>
                <div className="text-[10px] font-mono text-slate-400">Bug Test Coverage</div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Academic Trajectory */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="glass-panel p-6 sm:p-7 flex flex-col justify-between border border-white/10 hover:border-cyan-500/30 transition-all h-full"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <AcademicCapIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-space-grotesk font-bold text-white">Education</h3>
                    <span className="font-mono text-xs text-cyan-400">Academic Background</span>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 font-mono text-xs text-emerald-400 font-bold">
                  CGPA: 8.17
                </span>
              </div>

              <div className="space-y-2.5">
                {educationData.map((edu, idx) => (
                  <div 
                    key={idx}
                    className={`p-3 rounded-xl transition-all ${
                      edu.featured 
                        ? 'bg-gradient-to-r from-indigo-950/60 to-slate-900 border border-indigo-500/30' 
                        : 'bg-slate-900/50 border border-white/5'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-white text-xs sm:text-sm">
                          {edu.degree}
                        </h4>
                        <div className="text-[11px] text-slate-400">{edu.institution}</div>
                      </div>
                      <span className="font-mono text-xs font-bold text-indigo-300 shrink-0 ml-2">
                        {edu.score}
                      </span>
                    </div>
                    <div className="font-mono text-[10px] text-slate-500 mt-1">
                      {edu.timeline}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 mt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Artificial Intelligence (CAI) Major</span>
              <span className="text-emerald-400 font-semibold">● Verified Grade</span>
            </div>
          </motion.div>

          {/* Card 3: Coromandel CSR & FluentEdge BET 2026 */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="glass-panel p-6 sm:p-7 flex flex-col justify-between border border-white/10 hover:border-emerald-500/30 transition-all h-full"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <CheckBadgeIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-space-grotesk font-bold text-white">
                    Coromandel CSR &amp; FluentEdge BET
                  </h3>
                  <span className="font-mono text-xs text-emerald-400">Skill Excellence Awards</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 mb-3">
                <div className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">Speaking Star</span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-emerald-500/25 text-emerald-300 font-bold">
                      7.5 / 9
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">CEFR B2 Proficient</div>
                </div>

                <div className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">Reading Star</span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-emerald-500/25 text-emerald-300 font-bold">
                      7.0 / 9
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">CEFR B2 Proficient</div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-200">Listening Test</span>
                    <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-semibold">
                      Certified
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Comprehension Verified</div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-200">FluentEdge BET</span>
                    <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 font-semibold">
                      Baseline Pass
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Corporate Readiness</div>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Accredited in corporate business communication, listening comprehension, and professional workplace readiness under the Coromandel CSR Skill Initiative.
              </p>
            </div>

            <div className="pt-3 mt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>National Assessment 2026</span>
              <span className="text-emerald-400 font-semibold">● CEFR B2 Level</span>
            </div>
          </motion.div>

          {/* Card 4: Location & Work Preferences */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="glass-panel p-6 sm:p-7 flex flex-col justify-between border border-white/10 hover:border-purple-500/30 transition-all h-full"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <GlobeAltIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-space-grotesk font-bold text-white">
                    Location &amp; Availability
                  </h3>
                  <span className="font-mono text-xs text-purple-400">Work Preferences</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-900/50 border border-white/5">
                  <MapPinIcon className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span><strong>Base:</strong> Kakinada, Andhra Pradesh, India (Relocation Ready)</span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-900/50 border border-white/5">
                  <ArrowTrendingUpIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Target Roles:</strong> Full-Stack Developer • AI/ML Engineer</span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-900/50 border border-white/5">
                  <GlobeAltIcon className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span><strong>Work Mode:</strong> On-Site • Hybrid • Remote (Immediate Joiner)</span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-900/50 border border-white/5">
                  <SparklesIcon className="w-4 h-4 text-purple-400 shrink-0" />
                  <span><strong>Languages:</strong> Telugu (Native), English (Proficient), Hindi, Kannada</span>
                </div>
              </div>
            </div>

            <div className="pt-3 mt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Ready for Immediate Deployment</span>
              <span className="text-emerald-400 font-bold">● Active Candidate</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
