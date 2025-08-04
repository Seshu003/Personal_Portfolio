import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, 
  FaJava, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaPhp, 
  FaReact, 
  FaAndroid, 
  FaAws 
} from 'react-icons/fa';
import { 
  SiKotlin, 
  SiTensorflow, 
  SiCisco,
  SiC
} from 'react-icons/si';

const Skills = () => {
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

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: [
        { name: 'Python', icon: FaPython, color: '#3776ab', level: 70 },
        { name: 'Java', icon: FaJava, color: '#f89820', level: 65 },
        { name: 'C', icon: SiC, color: '#00599c', level: 80 },
        { name: 'JavaScript', icon: FaJs, color: '#f7df1e', level: 60 },
      ]
    },
    {
      title: 'Web Development',
      icon: '🌐',
      skills: [
        { name: 'HTML', icon: FaHtml5, color: '#e34f26', level: 95 },
        { name: 'CSS', icon: FaCss3Alt, color: '#1572b6', level: 90 },
        { name: 'PHP', icon: FaPhp, color: '#777bb4', level: 75 },
        { name: 'ReactJS', icon: FaReact, color: '#61dafb', level: 45 },
      ]
    },
    {
      title: 'Mobile & AI Development',
      icon: '📱',
      skills: [
        { name: 'Android', icon: FaAndroid, color: '#3ddc84', level: 65 },
        { name: 'Kotlin', icon: SiKotlin, color: '#7f52ff', level: 49 },
        { name: 'Machine Learning', icon: '🧠', color: '#ff6b6b', level: 85 },
        { name: 'TensorFlow', icon: SiTensorflow, color: '#ff6f00', level: 80 },
      ]
    },
    {
      title: 'Cloud & Security',
      icon: '☁️',
      skills: [
        { name: 'AWS Cloud', icon: FaAws, color: '#ff9900', level: 75 },
        { name: 'CISCO Cyber Security', icon: SiCisco, color: '#1ba0d7', level: 70 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-800">
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
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise across various domains
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="glass dark:glass-dark rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          {typeof skill.icon === 'string' ? (
                            <span className="text-2xl">{skill.icon}</span>
                          ) : (
                            <skill.icon 
                              className="w-6 h-6" 
                              style={{ color: skill.color }}
                            />
                          )}
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1, 
                            delay: (categoryIndex * 0.1) + (skillIndex * 0.1),
                            ease: "easeOut"
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-600 relative overflow-hidden"
                        >
                          <motion.div
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{
                              repeat: Infinity,
                              duration: 2,
                              ease: "linear",
                              delay: 1
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <div className="glass dark:glass-dark rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Additional Expertise
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'Data Analysis', 'Computer Vision', 'Deep Learning', 'API Integration',
                  'Database Management', 'Version Control (Git)', 'Agile Development',
                  'Problem Solving', 'Team Collaboration', 'Technical Documentation'
                ].map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gradient-to-r from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;