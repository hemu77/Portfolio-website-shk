import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

interface PortfolioProps {
  isDarkMode: boolean;
}

const Portfolio = ({ isDarkMode }: PortfolioProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Intelli-Vision Focus",
      description: "A self-proctoring platform using AI for focus management and progress tracking, achieving 40% increase in productivity",
      image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?auto=format&fit=crop&q=80",
      tags: ["Python", "YOLOv5", "OpenCV", "Flask", "Deep Learning"],
      demoLink: "https://drive.google.com/file/d/1-6fNnkw36UxIg4dnnEhpumrjQ51W3-Ub/view?usp=sharing",
    },
    {
      title: "Early Prediction of Sepsis",
      description: "IEEE published research achieving 99% accuracy in sepsis prediction using ensemble learning methods",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
      tags: ["Python", "Scikit-learn", "Streamlit", "Machine Learning"],
      demoLink: "https://ieeexplore.ieee.org/document/10489253",
      githubLink: "https://github.com/hemu77/sepsis_prediction_m_voting"
    },
    {
      title: "JAR007 Voice Assistant",
      description: "Advanced voice-based assistant using NLP and OpenAI API, integrated with Arduino for smart home control",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80",
      tags: ["Python", "NLP", "OpenAI API", "Arduino", "NLTK"],
      githubLink: "https://github.com/hemu77"
    }
  ];

  return (
    <section id="portfolio" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Featured Projects
          </h2>
          <p className={`max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            A showcase of my recent projects in Machine Learning, Data Science, and Software Development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`rounded-lg shadow-lg overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <div className="relative aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 rounded-full text-sm ${
                        isDarkMode 
                          ? 'bg-blue-900/50 text-blue-300' 
                          : 'bg-blue-100 text-blue-600'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center ${
                        isDarkMode 
                          ? 'text-blue-400 hover:text-blue-300' 
                          : 'text-blue-600 hover:text-blue-700'
                      }`}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center ${
                        isDarkMode 
                          ? 'text-gray-300 hover:text-gray-100' 
                          : 'text-gray-600 hover:text-gray-700'
                      }`}
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/hemu77"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-6 py-3 rounded-lg transition-colors ${
              isDarkMode 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
          >
            <Github className="w-5 h-5 mr-2" />
            Check Out More Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;