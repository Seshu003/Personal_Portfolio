import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import profileimg from '../images/profile.jpg';
// import resume from '../images/SaiSeshuAdimulam.pdf'

<Typewriter
  words={[
    'AI & ML Developer',
    'Android Developer',
    'Cloud Computing Enthusiast',
    'Problem Solver'
  ]}
  loop
  cursor
  cursorStyle="_"
  typeSpeed={70}
  deleteSpeed={50}
  delaySpeed={1000}
/>

import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { FaInstagram } from 'react-icons/fa';


const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary-400/5 to-primary-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk text-gray-900 dark:text-white mb-4">
                Hello, I'm{' '}
                <span className="gradient-text">Sai Seshu</span>
              </h1>
              <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium h-8">
                <Typewriter
                  words={[
                    'AI & ML Developer',
                    'Android Developer',
                    'Cloud Computing Enthusiast',
                    'Problem Solver'
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
            >
              Passionate about creating intelligent solutions through AI/ML, building intuitive mobile applications, 
              and leveraging cloud technologies to solve real-world problems. Currently pursuing B.Tech in AI with 
              hands-on experience in multiple internships.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="btn-primary cursor-pointer inline-flex items-center justify-center"
              >
                Get In Touch
              </Link>
              <a
                href="/Seshur.pdf"
                download
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                <FaDownload className="w-4 h-4" />
                Download CV
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-6 justify-center lg:justify-start"
            >
              <motion.a
                href="https://github.com/Seshu003"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
              >
                <FaGithub className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/sai-seshu"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
              >
                <FaLinkedin className="w-6 h-6" />
              </motion.a>

              <motion.a
                href="https://instagram.com/your_username"  // Replace with your actual handle
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300 hover:text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-all duration-300"
              >
                <FaInstagram className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 p-1"
              >
                <div className="w-full h-full rounded-full bg-white dark:bg-dark-900"></div>
              </motion.div>
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={profileimg}
                alt="Sai Seshu Adimulam"
                className="relative z-10 w-80 h-80 object-cover rounded-full shadow-2xl"
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
              >
                AI/ML
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-primary-500 transition-colors duration-300"
            >
              <span className="text-sm font-medium mb-2">Scroll Down</span>
              <ChevronDownIcon className="w-6 h-6" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;