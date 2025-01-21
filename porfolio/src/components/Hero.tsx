import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';

interface HeroProps {
  isDarkMode: boolean;
}

const Hero = ({ isDarkMode }: HeroProps) => {
  return (
    <section id="home" className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Hi, I'm{' '}
              <span className="text-blue-600">
                Sai Hemanth Kilaru
              </span>
            </h1>
            <h2 className={`text-xl md:text-2xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Data Scientist | Machine Learning Enthusiast | Problem Solver
            </h2>
            <div className="flex gap-4">
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg font-medium"
              >
                View Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center px-8 py-3 border-2 border-blue-600 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} rounded-lg font-medium`}
              >
                <FileText className="mr-2 w-5 h-5" />
                Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;