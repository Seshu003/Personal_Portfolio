import React from 'react';
import { motion } from 'framer-motion';
import { 
  BriefcaseIcon, 
  TrophyIcon, 
  SparklesIcon,
  CalendarIcon,
  BuildingOffice2Icon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { FaCertificate } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      role: 'Full-Stack Development Trainee',
      company: 'Coromandel Skill Development Center',
      period: 'June 2026 - August 2026',
      badge: 'Recent Traineeship',
      description: 'Completed intensive hands-on full-stack engineering covering React, Node.js, Express, JavaScript, and SQL across 10+ structured project modules.',
      deliverables: [
        'Delivered 12 project-based production deliverables as part of the curriculum',
        'Built responsive front-end interfaces with React and robust RESTful backend microservices',
        'Integrated relational SQL schemas with complex joins and transactional integrity'
      ],
      tags: ['React', 'Node.js', 'SQL', 'REST APIs', 'Bootstrap', 'Full-Stack']
    },
    {
      role: 'AI & ML Intern',
      company: 'Sweach Foundation',
      period: 'May 2024 - July 2024',
      badge: 'AI Research & Engineering',
      description: 'Engineered and fine-tuned machine learning models in Python & TensorFlow for computer vision and deep learning tasks.',
      deliverables: [
        'Achieved 90% training accuracy and 73% prediction accuracy through iterative hyperparameter tuning',
        'Designed and optimized automated data preprocessing pipelines to maximize model throughput',
        'Implemented computer vision pipelines for real-world image classification'
      ],
      tags: ['Python', 'TensorFlow', 'Deep Learning', 'Computer Vision', 'Data Pipelines']
    },
    {
      role: 'Frontend Developer Intern',
      company: 'Technical Hub',
      period: 'September 2022 - December 2022',
      badge: 'Web & Cloud Engineering',
      description: 'Built cross-browser web applications and streamlined local-to-cloud deployments on AWS.',
      deliverables: [
        'Built responsive web apps using HTML5, CSS3, JavaScript, and Bootstrap',
        'Deployed applications with PHP, XAMPP, and AWS, achieving local-to-cloud deployment in a single day',
        'Tested across multiple desktop and mobile viewports for UI consistency'
      ],
      tags: ['HTML5/CSS3', 'JavaScript', 'Bootstrap', 'PHP', 'AWS', 'XAMPP']
    },
    {
      role: 'Android Developer & AWS Data Engineer Intern',
      company: 'Eduskills',
      period: 'July 2024 - November 2024',
      badge: 'Mobile & Cloud',
      description: 'Built native Android apps with Kotlin and explored AWS cloud-based data storage and processing workflows.',
      deliverables: [
        'Developed native Android applications from scratch using Kotlin and Jetpack components',
        'Configured AWS storage and cloud integration for mobile data sync'
      ],
      tags: ['Android', 'Kotlin', 'AWS Cloud', 'Data Pipelines']
    }
  ];

  const awards = [
    {
      title: '2nd Prize – KIET Hackathon',
      subtitle: 'Built an AI-powered solution within 24 hours under intense competition.',
      icon: TrophyIcon,
      color: 'text-yellow-400',
      bg: 'bg-yellow-400/10 border-yellow-400/30'
    },
    {
      title: 'Speaking Star Award (7.5/9, CEFR B2)',
      subtitle: 'Coromandel CSR Initiative & FluentEdge BET 2026 Skill Excellence Recognition.',
      icon: FaCertificate,
      color: 'text-emerald-400',
      bg: 'bg-emerald-400/10 border-emerald-400/30'
    },
    {
      title: 'Reading Star Award (7/9, CEFR B2)',
      subtitle: 'Coromandel CSR Initiative & FluentEdge BET 2026 Skill Excellence Recognition.',
      icon: FaCertificate,
      color: 'text-emerald-400',
      bg: 'bg-emerald-400/10 border-emerald-400/30'
    },
    {
      title: '3rd Place – Frontend Bootcamp',
      subtitle: 'Recognized for standout front-end architecture among competitive cohort.',
      icon: TrophyIcon,
      color: 'text-amber-400',
      bg: 'bg-amber-400/10 border-amber-400/30'
    },
    {
      title: 'AWS Cloud Practitioner',
      subtitle: 'Certified foundational cloud architecture and core services from Amazon Web Services.',
      icon: FaCertificate,
      color: 'text-cyan-400',
      bg: 'bg-cyan-400/10 border-cyan-400/30'
    },
    {
      title: 'TensorFlow Developer Certificate',
      subtitle: 'Certified deep learning, neural networks, and computer vision with TensorFlow.',
      icon: FaCertificate,
      color: 'text-indigo-400',
      bg: 'bg-indigo-400/10 border-indigo-400/30'
    },
  ];

  const milestones = [
    {
      title: 'KIET Hackathon – 2nd Prize',
      category: 'Competitive Hackathon',
      period: '24-Hour Sprint',
      description: 'Built and deployed an AI-driven solution under intense competition against 50+ college teams, recognized for rapid full-stack execution and architecture.',
      highlight: 'Top 3% Finalist',
      tags: ['AI Solution', 'Fast Prototyping', 'Team Lead', '24h Hackathon']
    },
    {
      title: 'FluentEdge BET 2026 Double Star Awards',
      category: 'Coromandel CSR Initiative',
      period: 'Skill Assessment 2026',
      description: 'Achieved CEFR B2 proficiency in corporate readiness with 7.5/9 in Speaking and 7.0/9 in Reading, awarded Speaking Star & Reading Star honors.',
      highlight: 'CEFR B2 Certified',
      tags: ['Speaking Star (7.5/9)', 'Reading Star (7.0/9)', 'Business Communication']
    },
    {
      title: 'AWS Cloud & TensorFlow Developer Accreditations',
      category: 'Cloud & AI Certifications',
      period: 'Professional Validation',
      description: 'Validated foundational cloud infrastructure on Amazon Web Services and deep learning neural network architectures using TensorFlow and Keras.',
      highlight: 'Industry Certified',
      tags: ['AWS Cloud Practitioner', 'TensorFlow Developer', 'Deep Learning']
    },
    {
      title: 'Frontend Bootcamp – 3rd Place & Academic Honors',
      category: 'Web Engineering & Academics',
      period: 'Cohort Recognition',
      description: 'Recognized for standout front-end architecture, responsive design execution, and maintained high academic standard (CGPA 8.17 in Artificial Intelligence).',
      highlight: 'CGPA 8.17 / Top Cohort',
      tags: ['Frontend Mastery', 'Aditya 92.0%', 'Yoganand 95.0%']
    }
  ];

  return (
    <section id="experience" className="py-20 relative bg-obsidian-900 border-t border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs mb-3">
            <BriefcaseIcon className="w-3.5 h-3.5" />
            <span>TRAJECTORY &amp; HONORS MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-space-grotesk font-bold text-white tracking-tight">
            Industry <span className="gradient-text">Experience</span> &amp; Honors
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Demonstrated engineering execution across traineeships, AI research, and competitive awards.
          </p>
        </div>

        {/* Balanced 2-Column Grid (Equal Heights, No Dead Space) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Column: Work Experience Trajectory */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-white/[0.08]">
              <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <BriefcaseIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-space-grotesk font-bold text-white">Work Experience &amp; Traineeships</h3>
                <span className="font-mono text-xs text-cyan-400">4 Applied Engineering Roles</span>
              </div>
            </div>

            <div className="space-y-4 flex-1 flex flex-col justify-between">
              {experiences.map((exp, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  key={idx}
                  className="glass-panel-interactive p-5 flex flex-col justify-between border border-white/10 hover:border-cyan-500/30 transition-all"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <span className="font-mono text-[11px] text-cyan-400 font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                        {exp.badge}
                      </span>
                      <span className="font-mono text-[11px] text-slate-400 flex items-center gap-1">
                        <CalendarIcon className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                    </div>

                    <h4 className="text-base font-space-grotesk font-bold text-white">
                      {exp.role}
                    </h4>
                    <div className="text-xs font-mono text-indigo-400 mb-2 flex items-center gap-1.5">
                      <BuildingOffice2Icon className="w-3.5 h-3.5" />
                      <span>{exp.company}</span>
                    </div>

                    <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-1.5 mb-3">
                      {exp.deliverables.slice(0, 2).map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-1.5 text-xs text-slate-400">
                          <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-white/[0.06]">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] font-mono text-[10px] text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Competitive Honors & Achievements */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-white/[0.08]">
              <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <TrophyIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-space-grotesk font-bold text-white">Honors &amp; Milestones</h3>
                <span className="font-mono text-xs text-amber-400">Recognitions &amp; Certifications</span>
              </div>
            </div>

            <div className="space-y-4 flex-1 flex flex-col justify-between">
              {milestones.map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  key={i}
                  className="glass-panel p-5 flex flex-col justify-between border border-white/10 hover:border-amber-500/30 transition-all group"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <span className="font-mono text-[11px] text-amber-400 font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                        {item.category}
                      </span>
                      <span className="font-mono text-[11px] text-emerald-400 font-semibold">
                        {item.highlight}
                      </span>
                    </div>

                    <h4 className="text-base font-space-grotesk font-bold text-white group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h4>
                    <div className="text-xs font-mono text-slate-400 mb-2">
                      {item.period}
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-white/[0.06]">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] font-mono text-[10px] text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
