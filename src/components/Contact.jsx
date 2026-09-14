import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  PaperAirplaneIcon,
  GlobeAltIcon,
  CommandLineIcon
} from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mini Interactive Terminal
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([
    { text: 'Type "help" to view available terminal commands.', type: 'info' }
  ]);

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let response = '';
    let type = 'output';

    switch (cmd) {
      case 'help':
        response = 'Commands: contact, email, phone, resume, github, clear';
        break;
      case 'contact':
        response = 'Sai Seshu • seshu.ay2k26@gmail.com • +91 7981104636';
        break;
      case 'email':
        response = 'Direct inbox: seshu.ay2k26@gmail.com';
        break;
      case 'phone':
        response = 'Cellular: +91 7981104636';
        break;
      case 'resume':
        response = 'Downloading resume... (Triggered /SaiSeshuAdimulam.pdf)';
        window.open('/SaiSeshuAdimulam.pdf', '_blank');
        break;
      case 'github':
        response = 'Opening https://github.com/Seshu003';
        window.open('https://github.com/Seshu003', '_blank');
        break;
      case 'clear':
        setTerminalHistory([]);
        setTerminalInput('');
        return;
      default:
        response = `Command not recognized: "${cmd}". Type "help" for options.`;
        type = 'error';
    }

    setTerminalHistory(prev => [
      ...prev, 
      { text: `$ ${terminalInput}`, type: 'cmd' },
      { text: response, type }
    ]);
    setTerminalInput('');
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1200));
      toast.success('Message received! I will get back to you shortly.', {
        duration: 4000,
        position: 'top-center',
        style: {
          background: '#090d16',
          color: '#f8fafc',
          border: '1px solid rgba(99, 102, 241, 0.4)'
        }
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      toast.error('Submission failed. Please email seshu.ay2k26@gmail.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      icon: EnvelopeIcon,
      label: 'Email',
      value: 'seshu.ay2k26@gmail.com',
      href: 'mailto:seshu.ay2k26@gmail.com'
    },
    {
      icon: PhoneIcon,
      label: 'Direct Phone',
      value: '+91 7981104636',
      href: 'tel:+917981104636'
    },
    {
      icon: GlobeAltIcon,
      label: 'Portfolio Domain',
      value: 'seshu.vercel.app',
      href: 'https://seshu.vercel.app'
    },
    {
      icon: MapPinIcon,
      label: 'Location',
      value: 'Kakinada, Andhra Pradesh, India',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-24 relative bg-obsidian-900 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs mb-3">
            <CommandLineIcon className="w-3.5 h-3.5" />
            <span>INITIATE CONNECTION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-space-grotesk font-bold text-white tracking-tight">
            Let's Build <span className="gradient-text">Something Extraordinary</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Open for full-time engineering roles, AI research collaborations, and technical discussions.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Info & Interactive Terminal (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4">
            
            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              {contactCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={i}
                    className="glass-panel p-3.5 flex items-center gap-3.5 hover:border-indigo-500/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <div className="font-mono text-[11px] text-slate-400">{card.label}</div>
                      {card.href ? (
                        <a
                          href={card.href}
                          className="font-space-grotesk font-semibold text-white hover:text-cyan-400 text-sm transition-colors truncate block"
                        >
                          {card.value}
                        </a>
                      ) : (
                        <span className="font-space-grotesk font-semibold text-white text-sm truncate block">
                          {card.value}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Interactive Terminal */}
            <div className="terminal-card overflow-hidden flex-1 flex flex-col justify-between min-h-[220px]">
              <div className="px-4 py-2.5 bg-slate-900/90 border-b border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>quick-cli:~</span>
                <span className="text-[10px] text-emerald-400">● live terminal</span>
              </div>
              
              <div className="p-4 bg-slate-950/80 font-mono text-xs space-y-1.5 flex-1 overflow-y-auto min-h-[140px]">
                {terminalHistory.map((line, idx) => (
                  <div 
                    key={idx}
                    className={`${
                      line.type === 'cmd' 
                        ? 'text-cyan-400 font-bold' 
                        : line.type === 'error'
                        ? 'text-rose-400'
                        : 'text-slate-300'
                    }`}
                  >
                    {line.text}
                  </div>
                ))}
              </div>

              <form onSubmit={handleTerminalSubmit} className="flex border-t border-white/10 bg-slate-950">
                <span className="px-3 py-2.5 text-indigo-400 font-mono text-xs select-none">$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="type 'help' or 'resume'..."
                  className="w-full bg-transparent font-mono text-xs text-white placeholder-slate-600 focus:outline-none py-2.5 pr-3"
                />
              </form>
            </div>

          </div>

          {/* Right Column: Glassmorphic Message Form (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <div className="glass-panel p-6 sm:p-8 border border-white/10 shadow-2xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-space-grotesk font-bold text-white mb-5">
                  Send a Direct Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-mono text-xs text-slate-300">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-xs text-slate-300">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-slate-300">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="AI/ML Opportunity / Full-Stack Project"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-slate-300">Project or Role Details</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Share requirements, role specs, or interview invitations..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-shimmer w-full py-3.5 text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2"
                  >
                    <PaperAirplaneIcon className="w-4 h-4" />
                    <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;