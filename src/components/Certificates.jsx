import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AcademicCapIcon, 
  EyeIcon, 
  XMarkIcon,
  CheckBadgeIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

import adv_nlp from '../images/certificates/Adv_NPL.jpg';
import AI_Fundamentals from '../images/certificates/AI_Fundamentals.jpg';
import AICTE_AWS from '../images/certificates/AICTE_AWS.jpg';
import AICTE_GOOGLE from '../images/certificates/AICTE_GOOGLE.jpg';
import AWS_CF from '../images/certificates/AWS_CF.jpg';
import AWS_DE from '../images/certificates/AWS_DE.jpg';
import Basics_of_python from '../images/certificates/Basics_of_python.jpg';
import IBM_Edunet from '../images/certificates/IBM_Edunet.jpg';
import ce from '../images/certificates/‌Intro_to_DL_C2-1.jpg';
import Introduction_to_Generaive_AI from '../images/certificates/Introduction_to_Generaive_AI.jpg';
import Long_Term_Google from '../images/certificates/Long_Term_Google-Android-Developer_and_AWS_Data_Engineer.jpg';
import Sweach from '../images/certificates/Sweach_AI.jpg';
import PyTorch from '../images/certificates/UC-M_Pytorch.jpg';
import web from '../images/certificates/Web_Full_Stack.jpg';
import z from '../images/certificates/Zscaler_Networking.jpg';
import BET_Speaking_Star from '../images/certificates/BET_Speaking_Star.png';
import BET_Reading_Star from '../images/certificates/BET_Reading_Star.png';
import BET_Listening from '../images/certificates/BET_Listening.png';
import BET_Baseline from '../images/certificates/BET_Baseline.png';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);

  const certificates = [
    {
      id: 1,
      title: 'Speaking Skill Star (7.5/9 - CEFR B2)',
      issuer: 'Coromandel CSR & FluentEdge BET',
      date: '2026',
      category: 'bet-2026',
      badge: 'Top Performer',
      image: BET_Speaking_Star,
      verified: true
    },
    {
      id: 2,
      title: 'Reading Skill Star (7.0/9 - CEFR B2)',
      issuer: 'Coromandel CSR & FluentEdge BET',
      date: '2026',
      category: 'bet-2026',
      badge: 'Top Performer',
      image: BET_Reading_Star,
      verified: true
    },
    {
      id: 3,
      title: 'Listening Baseline Assessment',
      issuer: 'Coromandel CSR & FluentEdge BET',
      date: '2026',
      category: 'bet-2026',
      badge: 'Certified',
      image: BET_Listening,
      verified: true
    },
    {
      id: 4,
      title: 'FluentEdge Baseline Assessment',
      issuer: 'Coromandel CSR & FluentEdge BET',
      date: '2026',
      category: 'bet-2026',
      badge: 'Certified',
      image: BET_Baseline,
      verified: true
    },
    {
      id: 5,
      title: 'AICTE Google Cloud Computing',
      issuer: 'AICTE & Google',
      date: '2024',
      category: 'cloud',
      badge: 'Google Cloud',
      image: AICTE_GOOGLE,
      verified: true
    },
    {
      id: 6,
      title: 'AWS Cloud Foundations',
      issuer: 'Amazon Web Services',
      date: '2024',
      category: 'cloud',
      badge: 'AWS Certified',
      image: AWS_CF,
      verified: true
    },
    {
      id: 7,
      title: 'AI Fundamentals',
      issuer: 'IBM',
      date: '2024',
      category: 'ai-ml',
      badge: 'IBM Watson',
      image: AI_Fundamentals,
      verified: true
    },
    {
      id: 8,
      title: 'AICTE AWS Data Engineering',
      issuer: 'AICTE & AWS',
      date: '2024',
      category: 'cloud',
      badge: 'Data Pipelines',
      image: AICTE_AWS,
      verified: true
    },
    {
      id: 9,
      title: 'Introduction to Generative AI',
      issuer: 'Google Cloud',
      date: '2024',
      category: 'ai-ml',
      badge: 'GenAI',
      image: Introduction_to_Generaive_AI,
      verified: true
    },
    {
      id: 10,
      title: 'Deep Learning with PyTorch',
      issuer: 'Udemy / UC',
      date: '2024',
      category: 'ai-ml',
      badge: 'PyTorch',
      image: PyTorch,
      verified: true
    },
    {
      id: 11,
      title: 'Sweach AI Research Internship Cert',
      issuer: 'Sweach Foundation',
      date: '2024',
      category: 'ai-ml',
      badge: 'AI Internship',
      image: Sweach,
      verified: true
    },
    {
      id: 12,
      title: 'Web Full-Stack Development',
      issuer: 'Technical Hub',
      date: '2023',
      category: 'web',
      badge: 'Full-Stack',
      image: web,
      verified: true
    },
    {
      id: 13,
      title: 'Zscaler Cloud & Network Security',
      issuer: 'Zscaler',
      date: '2024',
      category: 'cloud',
      badge: 'Security',
      image: z,
      verified: true
    },
    {
      id: 14,
      title: 'Python Core Programming',
      issuer: 'HackerRank',
      date: '2024',
      category: 'ai-ml',
      badge: 'HackerRank',
      image: Basics_of_python,
      verified: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Credentials' },
    { id: 'bet-2026', name: 'Coromandel FluentEdge' },
    { id: 'cloud', name: 'Cloud & Infrastructure' },
    { id: 'ai-ml', name: 'AI & Data Science' },
  ];

  const filteredCerts = activeCategory === 'all'
    ? certificates
    : certificates.filter(c => c.category === activeCategory);

  // Visible count: 3 cards on desktop
  const visibleCards = 3;
  const maxIndex = Math.max(0, filteredCerts.length - visibleCards);

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setCurrentIndex(0);
  };

  // Slice cards for display
  const displayedCerts = filteredCerts.slice(currentIndex, currentIndex + visibleCards);

  return (
    <section id="certificates" className="py-16 sm:py-20 relative bg-obsidian-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header & Slider Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-mono text-xs mb-2.5">
              <AcademicCapIcon className="w-3.5 h-3.5" />
              <span>ACCREDITED CREDENTIALS CAROUSEL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-space-grotesk font-bold text-white tracking-tight">
              Verified <span className="gradient-text">Certifications</span>
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <div className="font-mono text-xs text-slate-400 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-lg">
              <span>{currentIndex + 1} - {Math.min(currentIndex + visibleCards, filteredCerts.length)} of {filteredCerts.length}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="p-2 rounded-xl bg-slate-900/90 border border-white/10 hover:border-purple-500/40 text-slate-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                title="Previous"
              >
                <ChevronLeftIcon className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                className="p-2 rounded-xl bg-slate-900/90 border border-white/10 hover:border-purple-500/40 text-slate-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                title="Next"
              >
                <ChevronRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto gap-2 pb-2 mb-6 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl font-mono text-xs whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-purple-600/30 border border-purple-500/60 text-white shadow-md shadow-purple-500/20'
                  : 'bg-slate-900/50 border border-white/5 text-slate-400 hover:text-slate-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Horizontal Carousel Track */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[300px] items-stretch">
          <AnimatePresence mode="popLayout">
            {displayedCerts.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                onClick={() => setSelectedCertificate(cert)}
                className="glass-panel-interactive p-4 flex flex-col justify-between cursor-pointer group h-full"
              >
                {/* Thumbnail */}
                <div className="relative h-44 rounded-xl overflow-hidden bg-slate-900 mb-3.5 shrink-0">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                  <div className="absolute top-2 right-2">
                    <span className="px-2 py-0.5 rounded-full bg-slate-950/80 border border-white/15 font-mono text-[10px] text-cyan-300 font-bold backdrop-blur-md">
                      {cert.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-slate-300 truncate max-w-[170px]">
                      {cert.issuer}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-mono text-purple-300">
                      <EyeIcon className="w-3.5 h-3.5" />
                      <span>Inspect</span>
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <h4 className="font-space-grotesk font-bold text-white text-sm group-hover:text-purple-300 transition-colors line-clamp-2 min-h-[40px]">
                    {cert.title}
                  </h4>
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mt-2 pt-2 border-t border-white/[0.06]">
                    <span>{cert.date}</span>
                    <span className="flex items-center gap-1 text-emerald-400">
                      <CheckBadgeIcon className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal Lightbox */}
        <AnimatePresence>
          {selectedCertificate && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl"
              onClick={() => setSelectedCertificate(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-3xl w-full bg-slate-900 border border-white/15 rounded-2xl overflow-hidden shadow-2xl"
              >
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-950/60">
                  <div>
                    <h3 className="font-space-grotesk font-bold text-white text-base">
                      {selectedCertificate.title}
                    </h3>
                    <div className="font-mono text-xs text-indigo-400">
                      {selectedCertificate.issuer} • {selectedCertificate.date}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedCertificate(null)}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-4 bg-slate-950 flex items-center justify-center max-h-[75vh] overflow-auto">
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="rounded-lg object-contain max-h-[70vh] w-auto shadow-xl"
                  />
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Certificates;