import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  EyeIcon, 
  MicrophoneIcon, 
  TruckIcon, 
  CloudIcon,
  FunnelIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ola from '../images/ola.jpg';
import weather from '../images/weather.jpg';

const Projects = () => {
  const [filter, setFilter] = useState('all');

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

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Assistive Object & Sound Detection',
      description: 'Android app with TFLite model to detect objects and sounds; alerts via speech, text, vibration for accessibility.',
      icon: EyeIcon,
      status: 'ongoing',
      category: 'ai-ml',
      tags: ['Android', 'TensorFlow Lite', 'Computer Vision', 'Accessibility'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Seshu003',
      demo: null,
      features: [
        'Real-time object detection using TensorFlow Lite',
        'Sound recognition and classification',
        'Multi-modal alerts (speech, text, vibration)',
        'Optimized for accessibility users'
      ]
    },
    {
      id: 2,
      title: 'AI Voice Assistant for Mobile Automation',
      description: 'Real-time assistant using NLP and speech recognition to execute mobile tasks and automate workflows.',
      icon: MicrophoneIcon,
      status: 'ongoing',
      category: 'ai-ml',
      tags: ['NLP', 'Speech Recognition', 'Android', 'Automation'],
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Seshu003',
      demo: null,
      features: [
        'Natural language processing for command understanding',
        'Voice-to-action mobile automation',
        'Context-aware task execution',
        'Personalized user experience'
      ]
    },
    {
      id: 3,
      title: 'Ola Bike Ride Forecast',
      description: 'Predictive model using historical ride, traffic, and weather data to forecast bike ride demand and optimize operations.',
      icon: TruckIcon,
      status: 'completed',
      category: 'data-science',
      tags: ['Machine Learning', 'Predictive Analytics', 'Python', 'Data Visualization'],
      image: ola,
      github: 'https://github.com/Seshu003',
      demo: 'https://example.com',
      features: [
        'Time series forecasting for ride demand',
        'Weather and traffic data integration',
        'Interactive data visualization dashboard',
        'Business insights and recommendations'
      ]
    },
    {
      id: 4,
      title: 'Weather & AQI Forecasting System',
      description: 'ML-based system using real-time APIs to forecast weather conditions and Air Quality Index with high accuracy.',
      icon: CloudIcon,
      status: 'completed',
      category: 'data-science',
      tags: ['Machine Learning', 'API Integration', 'Data Analysis', 'Environmental'],
      image: weather,
      github: 'https://github.com/Seshu003/Weather-Forecasting-and-AQI',
      demo: 'https://example.com',
      features: [
        'Real-time weather data processing',
        'Air Quality Index prediction',
        'Multiple location support',
        'Historical data analysis and trends'
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'ai-ml', name: 'AI/ML', count: projects.filter(p => p.category === 'ai-ml').length },
    { id: 'data-science', name: 'Data Science', count: projects.filter(p => p.category === 'data-science').length },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-900">
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
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
              Showcasing my latest work in AI/ML, mobile development, and data science
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  filter === category.id
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <FunnelIcon className="w-4 h-4" />
                {category.name}
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass dark:glass-dark rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'ongoing'
                          ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                          : 'bg-green-500/20 text-green-300 border border-green-500/30'
                      }`}>
                        {project.status === 'ongoing' ? 'In Progress' : 'Completed'}
                      </span>
                    </div>

                    {/* Project Icon */}
                    <div className="absolute bottom-4 right-4">
                      <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Key Features:
                      </h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        {project.features.slice(0, 2).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-300"
                      >
                        <FaGithub className="w-4 h-4" />
                        Code
                      </motion.a>
                      
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-300"
                        >
                          <FaExternalLinkAlt className="w-4 h-4" />
                          Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* View More Projects */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/Seshu003"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <CodeBracketIcon className="w-5 h-5" />
              View More Projects on GitHub
              <FaExternalLinkAlt className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;