import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header = ({ isDarkMode, toggleTheme }: HeaderProps) => {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-md shadow-sm`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-blue-600"
          >
            SK
          </motion.div>
          
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#home" isDarkMode={isDarkMode}>Home</NavLink>
            <NavLink href="#portfolio" isDarkMode={isDarkMode}>Portfolio</NavLink>
            <NavLink href="#contact" isDarkMode={isDarkMode}>Contact</NavLink>
          </nav>

          <div className="flex items-center space-x-4">
            <SocialIcon href="https://github.com/hemu77" icon={<Github />} isDarkMode={isDarkMode} />
            <SocialIcon href="https://www.linkedin.com/in/sai-hemanth-kilaru/" icon={<Linkedin />} isDarkMode={isDarkMode} />
            <SocialIcon href="mailto:skilaru@arizona.edu" icon={<Mail />} isDarkMode={isDarkMode} />
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-lg ${isDarkMode ? 'text-yellow-400' : 'text-gray-600'}`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              <FileText className="w-4 h-4 mr-2" />
              Resume
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

const NavLink = ({ href, children, isDarkMode }: { href: string; children: React.ReactNode; isDarkMode: boolean }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.05 }}
    className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
  >
    {children}
  </motion.a>
);

const SocialIcon = ({ href, icon, isDarkMode }: { href: string; icon: React.ReactNode; isDarkMode: boolean }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, color: "#2563eb" }}
    className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
  >
    {icon}
  </motion.a>
);

export default Header;