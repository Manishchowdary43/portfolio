import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
import AnimatedText from './common/AnimatedText';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section 
      id="home" 
      className="relative flex items-center justify-center min-h-screen pt-16 sm:pt-20 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-primary-500/20 rounded-full -top-10 -left-16 blur-3xl animate-pulse"></div>
        <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-secondary-500/20 rounded-full top-1/3 -right-20 blur-3xl animate-pulse delay-700"></div>
        <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-accent-500/20 rounded-full -bottom-20 left-1/4 blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col items-center justify-center text-center"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={container}
        >
          <motion.div 
            className="relative group"
            variants={item}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 mb-6 sm:mb-8 overflow-hidden rounded-full ring-4 ring-white dark:ring-gray-800">
              <img 
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1" 
                alt="Ganaparthi Manish" 
                className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-110"
              />
            </div>
          </motion.div>
          
          <motion.div 
            variants={item} 
            className="mb-2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent leading-tight">
              <AnimatedText text="Ganaparthi Manish" />
            </h1>
          </motion.div>
          
          <motion.div variants={item} className="mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 px-4">
              <AnimatedText 
                text="Aspiring Software Developer | B.Tech Student" 
                delay={1.2}
              />
            </h2>
          </motion.div>
          
          <motion.p 
            variants={item} 
            className="max-w-2xl mb-6 sm:mb-8 text-base sm:text-lg text-gray-700 dark:text-gray-300 px-4 sm:px-6"
          >
            A passionate Computer Science student at Kalasalingam Academy of Research and Education,
            dedicated to creating innovative solutions and learning cutting-edge technologies.
          </motion.p>
          
          <motion.div 
            variants={item}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 px-4"
          >
            <motion.a 
              href="#contact" 
              className="btn btn-primary w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
            <motion.a 
              href="#projects" 
              className="btn btn-outline w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>
          
          <motion.div 
            variants={item}
            className="flex flex-wrap justify-center gap-4 sm:gap-6"
          >
            {[
              { href: "https://github.com/ganaparthimanish", icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />, label: "GitHub" },
              { href: "https://in.linkedin.com/in/ganaparthi-manish-chowdary-400765264", icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />, label: "LinkedIn" },
              { href: "mailto:ganaparthimanishchowdary@gmail.com", icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Email" },
              { href: "/resume.pdf", icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Resume" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-all dark:text-gray-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                whileHover={{ 
                  scale: 1.2,
                  color: "var(--tw-colors-primary-600)",
                }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      <motion.a 
        href="#about" 
        className="absolute flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 text-gray-500 transition-all bottom-6 sm:bottom-8 dark:text-gray-400"
        whileHover={{ scale: 1.2, color: "var(--tw-colors-primary-600)" }}
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 animate-bounce" />
      </motion.a>
    </section>
  );
};

export default Hero;