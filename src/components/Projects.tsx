import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Code, PenTool, BrainCircuit, Users } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'ui' | 'frontend' | 'dsa' | 'group';
  liveLink?: string;
  githubLink?: string;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [filter, setFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Website Redesign",
      description: "A complete UI/UX case study to improve user experience and conversion rates for an e-commerce platform.",
      image: "https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["UI/UX", "Figma", "User Research", "Prototyping"],
      category: 'ui',
      liveLink: "https://www.behance.net",
      githubLink: "https://github.com"
    },
    {
      id: 2,
      title: "Task Management Dashboard",
      description: "A responsive dashboard for task management with drag-and-drop functionality, built with React and Tailwind CSS.",
      image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "Tailwind CSS", "Frontend", "JavaScript"],
      category: 'frontend',
      liveLink: "https://www.example.com",
      githubLink: "https://github.com"
    },
    {
      id: 3,
      title: "Algorithm Visualizer",
      description: "An interactive tool that visualizes various sorting and pathfinding algorithms to help understand their inner workings.",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["DSA", "JavaScript", "Algorithms", "Visualization"],
      category: 'dsa',
      liveLink: "https://www.example.com",
      githubLink: "https://github.com"
    },
    {
      id: 4,
      title: "Health App Interface",
      description: "A UI/UX case study for a health monitoring application with a focus on accessibility and ease of use.",
      image: "https://images.pexels.com/photos/3952034/pexels-photo-3952034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["UI/UX", "Adobe XD", "Prototyping", "Mobile Design"],
      category: 'ui',
      liveLink: "https://www.behance.net",
      githubLink: "https://github.com"
    },
    {
      id: 5,
      title: "Personal Finance Tracker",
      description: "A web application that helps users track expenses, income, and savings goals with visual charts and reports.",
      image: "https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "Chart.js", "Frontend", "TypeScript"],
      category: 'frontend',
      liveLink: "https://www.example.com",
      githubLink: "https://github.com"
    },
    {
      id: 6,
      title: "Smart City Hackathon Project",
      description: "A collaborative project developed during a 48-hour hackathon to address urban transportation challenges.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Hackathon", "Team Project", "React", "API Integration"],
      category: 'group',
      liveLink: "https://www.example.com",
      githubLink: "https://github.com"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const filters = [
    { id: 'all', label: 'All Projects', icon: <Code className="w-5 h-5" /> },
    { id: 'ui', label: 'UI/UX Design', icon: <PenTool className="w-5 h-5" /> },
    { id: 'frontend', label: 'Frontend', icon: <Code className="w-5 h-5" /> },
    { id: 'dsa', label: 'DSA Projects', icon: <BrainCircuit className="w-5 h-5" /> },
    { id: 'group', label: 'Group Projects', icon: <Users className="w-5 h-5" /> }
  ];

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'ui':
        return <PenTool className="w-5 h-5 mr-1" />;
      case 'frontend':
        return <Code className="w-5 h-5 mr-1" />;
      case 'dsa':
        return <BrainCircuit className="w-5 h-5 mr-1" />;
      case 'group':
        return <Users className="w-5 h-5 mr-1" />;
      default:
        return <Code className="w-5 h-5 mr-1" />;
    }
  };

  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <SectionTitle>My Projects</SectionTitle>
        
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filterItem) => (
            <button
              key={filterItem.id}
              onClick={() => setFilter(filterItem.id)}
              className={`flex items-center px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                filter === filterItem.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              <span className="mr-2">{filterItem.icon}</span>
              {filterItem.label}
            </button>
          ))}
        </div>
        
        <motion.div 
          ref={ref}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={container}
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              variants={item}
              className="overflow-hidden transition-transform rounded-lg shadow-lg card hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-52">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 left-0 px-3 py-1 m-3 text-xs font-medium text-white rounded-full bg-primary-600">
                  <div className="flex items-center">
                    {getCategoryIcon(project.category)}
                    {project.category === 'ui' && 'UI/UX Design'}
                    {project.category === 'frontend' && 'Frontend'}
                    {project.category === 'dsa' && 'DSA Project'}
                    {project.category === 'group' && 'Group Project'}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs font-medium text-primary-700 bg-primary-100 rounded-full dark:bg-primary-900 dark:text-primary-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
                  {project.liveLink && (
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium transition-colors text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                    >
                      Live Demo
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  )}
                  
                  {project.githubLink && (
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium transition-colors text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
                    >
                      Code
                      <Github className="w-4 h-4 ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;