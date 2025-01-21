import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AboutProps {
  isDarkMode: boolean;
}

const About = ({ isDarkMode }: AboutProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              About Me
            </h2>
            <p className={`text-lg leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm Sai Hemanth Kilaru, a data scientist with a Master's in Data Science from the University of Arizona. 
              I specialize in transforming raw data into impactful insights through Python, machine learning, and cloud 
              platforms like AWS.
            </p>
            <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Passionate about solving complex problems, I thrive on creating innovative solutions that empower teams 
              and drive impact. My mantra? Keep it simple, scalable, and results-driven.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative max-w-sm mx-auto lg:ml-auto"
          >
            <div className="aspect-square w-[400px] h-[400px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;