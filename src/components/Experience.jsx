import React from 'react';
import { motion } from 'framer-motion';
import { 
  BriefcaseIcon, 
  CalendarIcon, 
  BuildingOfficeIcon,
  AcademicCapIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline';
import { FaCertificate } from 'react-icons/fa';

import { SiCisco } from 'react-icons/si';
import { MapPinIcon } from '@heroicons/react/24/outline';




const Experience = () => {
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

  const internships = [
    {
      title: 'AI & ML Intern',
      company: 'Sweach Foundation',
      period: 'May–July 2024',
      description: 'Developed AI/ML models using Python & TensorFlow, applied Deep Learning and Computer Vision techniques for real-world applications.',
      tags: ['Python', 'TensorFlow', 'Deep Learning', 'Computer Vision'],
      type: 'internship'
    },
    {
      title: 'Android Developer Intern',
      company: 'Eduskills',
      period: 'July-Sept 2024',
      description: 'Built Android applications with Kotlin and have learnt to build from scratch.',
      tags: ['Android', 'Kotlin', 'AWS', 'Cloud Integration'],
      type: 'internship'
    },
    {
      title: 'AWS Cloud & Data Engineer Intern',
      company: 'Eduskills',
      period: 'Oct-Nov 2024',
      description: 'Gained hands-on experience in cloud-based data pipelines, storage, and processing using AWS services.',
      tags: ['Android', 'Kotlin', 'AWS', 'Cloud Integration'],
      type: 'internship'
    }
  ];

  const education = [
    {
      degree: 'B.Tech in Artificial Intelligence (CAI)',
      institution: 'KIET',
      loc: 'Koringa',
      period: '2023–2026',
      grade: '80%',
      type: 'education'
    },
    {
      degree: 'Diploma in ECE (Electronics)',
      institution: 'Aditya Engineering College',
      loc: 'Surampalem',
      period: '2020–2023',
      grade: '92%',
      type: 'education'
    },
    {
      degree: 'High School',
      institution: 'Yoganand High School (EM)',
      loc: 'Kakinada',
      period: '2019–2020',
      grade: '95%',
      type: 'education'
    }
  ];

  const achievements = [
    {
      title: 'Great Learning Certificates',
      description: 'HTML, CSS, JavaScript, PHP',
      icon: FaCertificate,
      color: 'text-green-500'
    },
    {
      title: 'HackerRank Verified Skills',
      description: 'Python (Basics), CSS',
      icon: FaCertificate,
      color: 'text-green-600'
    },
    {
      title: 'HackerRank Badge',
      description: 'C - 3-Star Badge',
      icon: FaCertificate,
      color: 'text-green-600'
    },
    {
      title: 'Cisco Cyber Security',
      description: 'Certified',
      icon: SiCisco,
      color: 'text-blue-500'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-dark-800">
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
              Experience & <span className="gradient-text">Education</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Internships */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-8">
                <BriefcaseIcon className="w-8 h-8 text-primary-500" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Internships
                </h3>
              </div>

              <div className="space-y-6">
                {internships.map((internship, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-8 pb-8 border-l-2 border-primary-200 dark:border-primary-800 last:border-l-0 last:pb-0"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-500 rounded-full"></div>
                    
                    <div className="glass dark:glass-dark rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                            {internship.title}
                          </h4>
                          <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold">
                            <BuildingOfficeIcon className="w-4 h-4" />
                            {internship.company}
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                          <CalendarIcon className="w-4 h-4" />
                          {internship.period}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {internship.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {internship.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-8">
                <AcademicCapIcon className="w-8 h-8 text-primary-500" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Education
                </h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-8 pb-8 border-l-2 border-primary-200 dark:border-primary-800 last:border-l-0 last:pb-0"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-500 rounded-full"></div>
                    
                    <div className="glass dark:glass-dark rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                            {edu.degree}
                          </h4>
                          <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold">
                            <BuildingOfficeIcon className="w-4 h-4" />
                            {edu.institution}
                          </div>
                          <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold">
                            <MapPinIcon className="w-4 h-4" />
                            {edu.loc}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mb-1">
                            <CalendarIcon className="w-4 h-4" />
                            {edu.period}
                          </div>
                          <div className="text-lg font-bold text-primary-500">
                            {edu.grade}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Achievements & Certifications */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="flex items-center justify-center gap-3 mb-12">
              <TrophyIcon className="w-8 h-8 text-primary-500" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Achievements
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass dark:glass-dark rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    {typeof achievement.icon === 'function' ? (
                      React.createElement(achievement.icon, {
                        className: `w-12 h-12 ${achievement.color}`
                      })
                    ) : (
                      <achievement.icon className={`w-12 h-12 ${achievement.color}`} />
                    )}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
