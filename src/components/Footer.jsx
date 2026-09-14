import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';
import { ArrowUpIcon, SignalIcon } from '@heroicons/react/24/outline';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-obsidian-950 text-white border-t border-white/[0.08] py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          
          {/* Brand & Mission */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center font-space-grotesk font-black text-white text-sm">
                SS
              </div>
              <span className="text-xl font-space-grotesk font-bold tracking-tight text-white">
                SAI SESHU ADIMULAM
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md font-sans">
              AI/ML Full-Stack Developer engineering distributed systems, real-time IoT pipelines, 
              and generative AI solutions.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Seshu003"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/10 text-slate-300 hover:text-white flex items-center justify-center transition-all"
              title="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/sai-seshu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-slate-300 hover:text-white flex items-center justify-center transition-all"
              title="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href="https://seshu.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 text-slate-300 hover:text-white flex items-center justify-center transition-all"
              title="Live Domain"
            >
              <FaGlobe className="w-4 h-4" />
            </a>

            <button
              onClick={() => scroll.scrollToTop()}
              className="w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-500/40 hover:bg-indigo-600/60 text-indigo-300 hover:text-white flex items-center justify-center transition-all ml-2"
              title="Scroll to top"
            >
              <ArrowUpIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 gap-4">
          <div className="flex items-center gap-2">
            <SignalIcon className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>Systems Normal • React 18 &amp; Tailwind CSS</span>
          </div>

          <div>
            &copy; {currentYear} Sai Seshu Adimulam. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;