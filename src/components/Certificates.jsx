import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AcademicCapIcon, 
  EyeIcon,
  XMarkIcon,
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
// import ce2 from '../images/certificates/‌Intro_to_DL_C3-1.jpg';
import Introduction_to_Generaive_AI from '../images/certificates/Introduction_to_Generaive_AI.jpg';
import Long_Term_Google from '../images/certificates/Long_Term_Google-Android-Developer_and_AWS_Data_Engineer.jpg';
import Sweach from '../images/certificates/Sweach_AI.jpg';
import PyTorch from '../images/certificates/UC-M_Pytorch.jpg';
import web from '../images/certificates/Web_Full_Stack.jpg';
import z from '../images/certificates/Zscaler_Networking.jpg';


const Certificates = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const certificates = [
    {
      id: 1,
      title: 'AICTE Google Cloud Computing',
      issuer: 'AICTE & Google',
      date: '2024',
      image: AICTE_GOOGLE,
      category: 'Cloud Computing'
    },
    {
      id: 2,
      title: 'AWS Cloud Foundations',
      issuer: 'Amazon Web Services',
      date: '2024',
      image: AWS_CF,
      category: 'Cloud Computing'
    },
    {
      id: 3,
      title: 'AI Fundamentals',
      issuer: 'IBM',
      date: '2024',
      image: AI_Fundamentals,
      category: 'Artificial Intelligence'
    },
    {
      id: 4,
      title: 'AICTE AWS Data Engineering',
      issuer: 'AICTE & AWS',
      date: '2024',
      image: AICTE_AWS,
      category: 'Data Engineering'
    },
    {
      id: 5,
      title: 'AWS Data Engineering',
      issuer: 'Amazon Web Services',
      date: '2024',
      image: AWS_DE,
      category: 'Data Engineering'
    },
    {
      id: 6,
      title: 'Advanced NLP',
      issuer: 'Coursera',
      date: '2024',
      image: adv_nlp,
      category: 'Machine Learning'
    },
    {
      id: 7,
      title: 'Python Basics',
      issuer: 'HackerRank',
      date: '2024',
      image: Basics_of_python.jpg,
      category: 'Programming'
    },
    {
      id: 8,
      title: 'IBM Edunet Foundation',
      issuer: 'IBM',
      date: '2024',
      image: IBM_Edunet,
      category: 'Technology'
    },
    {
      id: 9,
      title: 'Introduction to NLP',
      issuer: 'Coursera',
      date: '2024',
      // image: ce2,
      category: 'Machine Learning'
    },
    {
      id: 10,
      title: 'Introduction to Generative AI',
      issuer: 'Google',
      date: '2024',
      image: Introduction_to_Generaive_AI,
      category: 'Artificial Intelligence'
    },
    {
      id: 11,
      title: 'Sweach AI Certification',
      issuer: 'Sweach Foundation',
      date: '2024',
      image: Sweach,
      category: 'Artificial Intelligence'
    },
    {
      id: 12,
      title: 'PyTorch Fundamentals',
      issuer: 'Udemy',
      date: '2024',
      image: PyTorch,
      category: 'Machine Learning'
    },
    {
      id: 13,
      title: 'Web Full Stack Development',
      issuer: 'Great Learning',
      date: '2024',
      image: web,
      category: 'Web Development'
    },
    {
      id: 14,
      title: 'Zscaler Networking',
      issuer: 'Zscaler',
      date: '2024',
      image: z,
      category: 'Networking'
    },
    {
      id: 15,
      title: 'Introduction to Deep Learning',
      issuer: 'Coursera',
      date: '2024',
      image: ce,
      category: 'Machine Learning'
    },
    {
      id: 16,
      title: 'Google Android Developer & AWS Data Engineer',
      issuer: 'Google & AWS',
      date: '2024',
      image: Long_Term_Google,
      category: 'Mobile Development'
    }
  ];

  const displayedCertificates = showAll ? certificates : certificates.slice(0, 3);

  const openModal = (certificate, index) => {
    setSelectedCertificate(certificate);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  const navigateCertificate = (direction) => {
    const totalCertificates = showAll ? certificates.length : displayedCertificates.length;
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % totalCertificates
      : (currentIndex - 1 + totalCertificates) % totalCertificates;
    
    setCurrentIndex(newIndex);
    setSelectedCertificate(showAll ? certificates[newIndex] : displayedCertificates[newIndex]);
  };

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-dark-900">
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
              My <span className="gradient-text">Certificates</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
              Professional certifications and achievements in AI/ML, Cloud Computing, and Software Development
            </p>
          </motion.div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedCertificates.map((certificate, index) => (
              <motion.div
                key={certificate.id}
                variants={itemVariants}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass dark:glass-dark rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => openModal(certificate, index)}
              >
                {/* Certificate Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* View Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                      <EyeIcon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-500/90 text-white text-xs font-semibold rounded-full">
                      {certificate.category}
                    </span>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors duration-300">
                    {certificate.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                    {certificate.issuer}
                  </p>
                  <p className="text-primary-500 text-sm font-semibold">
                    {certificate.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <AcademicCapIcon className="w-5 h-5" />
              {showAll ? 'Show Less' : `View All Certificates (${certificates.length})`}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white dark:bg-dark-800 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {selectedCertificate.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {selectedCertificate.issuer} • {selectedCertificate.date}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                >
                  <XMarkIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                </button>
              </div>

              {/* Certificate Image */}
              <div className="relative">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="w-full h-auto max-h-[70vh] object-contain bg-gray-50 dark:bg-gray-900"
                />

                {/* Navigation Buttons */}
                <button
                  onClick={() => navigateCertificate('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-200"
                >
                  <ChevronLeftIcon className="w-6 h-6" />
                </button>
                <button
                  onClick={() => navigateCertificate('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-200"
                >
                  <ChevronRightIcon className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-gray-50 dark:bg-dark-700">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                    {selectedCertificate.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {currentIndex + 1} of {showAll ? certificates.length : displayedCertificates.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;