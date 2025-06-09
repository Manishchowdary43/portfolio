import React from 'react';
import { Heart, Code, ArrowUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-6 sm:py-8 text-center bg-white dark:bg-gray-900">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mb-4 sm:mb-6">
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 mx-auto text-white transition-transform bg-primary-600 rounded-full hover:bg-primary-700 hover:-translate-y-1"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
        
        <div className="flex items-center justify-center mb-3 sm:mb-4 text-base sm:text-lg font-medium text-primary-600 dark:text-primary-400">
          <Code className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          <span>Ganaparthi Manish</span>
        </div>
        
        <p className="mb-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
          Aspiring Software Developer | B.Tech Student
        </p>
        
        <div className="flex justify-center mb-4 sm:mb-6 space-x-4 sm:space-x-6">
          <a 
            href="https://github.com/ganaparthimanish" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
            aria-label="GitHub"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
            </svg>
          </a>
          <a 
            href="https://in.linkedin.com/in/ganaparthi-manish-chowdary-400765264" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
            aria-label="LinkedIn"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
            </svg>
          </a>
          <a 
            href="mailto:ganaparthimanishchowdary@gmail.com"
            className="text-gray-500 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
            aria-label="Email"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"></path>
            </svg>
          </a>
        </div>
        
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          Designed and built with <Heart className="inline-block w-3 h-3 sm:w-4 sm:h-4 text-error-500" /> by Ganaparthi Manish
        </p>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;