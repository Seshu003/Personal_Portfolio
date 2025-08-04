import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserIcon, 
  CalendarIcon, 
  GlobeAltIcon, 
  HeartIcon,
  AcademicCapIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const About = () => {
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

  const personalInfo = [
    { icon: CalendarIcon, label: 'Date of Birth', value: '24-02-2005' },
    { icon: UserIcon, label: "Father's Name", value: 'A. Radha Prasad' },
    { icon: UserIcon, label: 'Gender', value: 'Male' },
    { icon: GlobeAltIcon, label: 'Nationality', value: 'Indian' },
    { icon: GlobeAltIcon, label: 'Languages', value: 'Telugu | English | Hindi | Kannada' },
    { icon: HeartIcon, label: 'Hobbies', value: 'Surfing internet, gathering tech ideas' },
  ];

  const strengths = [
    { icon: '🤝', name: 'Teamwork', description: 'Collaborative problem-solving' },
    { icon: '😊', name: 'Optimism', description: 'Positive mindset in challenges' },
    { icon: '🏔️', name: 'Perseverance', description: 'Never giving up attitude' },
    { icon: '❤️', name: 'Sincerity', description: 'Honest and genuine approach' },
    { icon: '💪', name: 'Dedication', description: 'Committed to excellence' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-gray-900 dark:text-white mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Personal Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass dark:glass-dark rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <AcademicCapIcon className="w-8 h-8 text-primary-500" />
                  Personal Information
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {personalInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors duration-300"
                    >
                      <info.icon className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                          {info.label}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {info.value}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Strengths */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass dark:glass-dark rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <SparklesIcon className="w-8 h-8 text-primary-500" />
                  My Strengths
                </h3>
                <div className="grid gap-4">
                  {strengths.map((strength, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 hover:from-primary-100 hover:to-primary-200 dark:hover:from-primary-800/30 dark:hover:to-primary-700/30 transition-all duration-300 cursor-pointer"
                    >
                      <div className="text-2xl">{strength.icon}</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {strength.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {strength.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bio Section */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center max-w-4xl mx-auto"
          >
            <div className="glass dark:glass-dark rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                My Journey
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate AI & ML developer currently pursuing my B.Tech in Artificial Intelligence 
                at KIET, Koringa. With a strong foundation in electronics and communication engineering from 
                my diploma, I've transitioned into the exciting world of artificial intelligence and machine learning. 
                My journey has been marked by continuous learning, hands-on projects, and valuable internship 
                experiences that have shaped my technical expertise and problem-solving abilities.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                I believe in the power of technology to transform lives and am committed to creating innovative 
                solutions that make a positive impact. Whether it's developing AI-powered mobile applications, 
                working with cloud technologies, or exploring the latest in machine learning, I approach every 
                challenge with enthusiasm and dedication.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
