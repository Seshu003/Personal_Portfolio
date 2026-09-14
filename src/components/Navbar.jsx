import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Bars3Icon, XMarkIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Certificates', to: 'certificates' },
    { name: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active section detector
      const scrollPosition = window.scrollY + 120;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].to);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].to);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-3 sm:py-4 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-2xl transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/80 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]'
            : 'bg-slate-950/40 backdrop-blur-md border border-white/5'
        }`}
      >
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center font-space-grotesk font-black text-white text-base shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
            SS
          </div>
          <div className="flex flex-col">
            <span className="font-space-grotesk font-bold text-white text-base leading-none tracking-tight flex items-center gap-1.5">
              SAI SESHU
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </span>
            <span className="font-mono text-[10px] text-slate-400 tracking-wider">
              AI & FULL-STACK
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] px-2 py-1 rounded-xl">
          {navItems.map((item) => {
            const isActive = activeSection === item.to;
            return (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                className={`relative px-3.5 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-all duration-200 ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600/40 to-cyan-500/30 border border-indigo-500/50 rounded-lg shadow-[0_0_12px_rgba(99,102,241,0.3)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          <a
            href="https://github.com/Seshu003"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all"
            title="GitHub Profile"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/sai-seshu"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all"
            title="LinkedIn Profile"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          
          <a
            href="/SaiSeshuAdimulam.pdf"
            download="SaiSeshuAdimulam_Resume.pdf"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/30 transition-all duration-200 hover:scale-[1.02]"
          >
            <ArrowDownTrayIcon className="w-3.5 h-3.5" />
            <span>CV</span>
          </a>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle Menu"
            >
              {isOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-4 right-4 bg-slate-950/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl lg:hidden flex flex-col gap-1 z-50"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className={`px-3.5 py-2.5 rounded-xl text-sm font-medium cursor-pointer transition-colors ${
                  activeSection === item.to
                    ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30'
                    : 'text-slate-300 hover:bg-white/[0.05]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;