import React from 'react';
import { motion } from 'framer-motion';
import { HeartIcon } from '@heroicons/react/24/solid';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-dark-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold font-space-grotesk mb-2"
            >
              <span className="text-primary-400">SAI</span>
              <span className="text-white ml-1">SESHU</span>
            </motion.div>
            <p className="text-gray-400 text-sm max-w-md">
              AI & ML Developer passionate about creating innovative solutions 
              through technology and continuous learning.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <motion.a
              href="https://github.com/Seshu003"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-gray-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <FaGithub className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/sai-seshu"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <FaLinkedin className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400"
        >
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span>&copy; {currentYear} Sai Seshu Adimulam. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <HeartIcon className="w-4 h-4 text-red-500" />
            </motion.div>
            <span>using React & Tailwind CSS</span>
          </div>
        </motion.div>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-6 text-xs text-gray-500"
        >
          Last updated: {new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;