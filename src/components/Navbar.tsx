import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Code } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Handle scroll to section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      setIsMenuOpen(false);
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md py-2' 
          : 'bg-transparent py-3 sm:py-4'
      }`}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a 
          href="#home" 
          className="flex items-center text-xl sm:text-2xl font-bold text-primary-600 dark:text-primary-400"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          <Code className="w-6 h-6 sm:w-8 sm:h-8 mr-2" />
          <span className="hidden sm:inline">Ganaparthi Manish</span>
          <span className="sm:hidden">GM</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-1">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="nav-link text-sm lg:text-base"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
            <li>
              <button 
                onClick={toggleTheme}
                className="p-2 ml-2 text-gray-600 rounded-full dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 lg:w-5 lg:h-5" /> : <Moon className="w-4 h-4 lg:w-5 lg:h-5" />}
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2 mr-2 text-gray-600 rounded-full dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-600 rounded-md dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="absolute w-full px-4 py-4 mt-2 bg-white shadow-md md:hidden dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <ul className="flex flex-col space-y-2">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="block py-3 px-2 nav-link text-base"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;