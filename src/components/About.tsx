import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, User, GraduationCap, Briefcase, Heart } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <SectionTitle>About Me</SectionTitle>
        
        <motion.div 
          ref={ref}
          className="grid gap-8 md:grid-cols-2"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
        >
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mt-1 text-white bg-primary-600 rounded-lg">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Who I Am</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  I'm a Computer Science student with a passion for software development and problem-solving. 
                  Currently pursuing my B.Tech at Kalasalingam Academy of Research and Education (2022-2026), 
                  I'm eager to learn and apply new technologies to create innovative solutions.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mt-1 text-white bg-secondary-600 rounded-lg">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Education</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  B.Tech in Computer Science, 2022-2026<br />
                  Kalasalingam Academy of Research and Education<br />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Relevant courses: Data Structures, Web Development, Programming Fundamentals
                  </span>
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mt-1 text-white rounded-lg bg-accent-600">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Location</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Sakhavaram, Prakasam District<br />
                  Andhra Pradesh, India<br />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Open to remote opportunities and collaborations
                  </span>
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mt-1 text-white bg-success-600 rounded-lg">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Interests</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Beyond coding, I'm passionate about exploring new technologies, 
                  participating in hackathons, and contributing to open-source projects. 
                  I enjoy problem-solving and creating efficient, user-friendly solutions.
                </p>
              </div>
            </div>
            
            <div className="pt-4">
              <a 
                href="/resume.pdf" 
                target="_blank"
                className="btn btn-primary transform hover:scale-105 transition-transform"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="h-full overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform">
            <img 
              src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="About Me" 
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;