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
      title: "Student Management System",
      description: "A comprehensive web application for managing student records, grades, and academic information with role-based access control for administrators and students.",
      image: "https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      category: 'frontend',
      liveLink: "https://student-management-demo.netlify.app",
      githubLink: "https://github.com/ganaparthimanish/student-management"
    },
    {
      id: 2,
      title: "E-Learning Platform UI",
      description: "Modern and intuitive user interface design for an online learning platform with focus on accessibility and user experience for students and instructors.",
      image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Figma", "UI/UX", "Prototyping", "User Research"],
      category: 'ui',
      liveLink: "https://www.figma.com/proto/elearning-platform",
      githubLink: "https://github.com/ganaparthimanish/elearning-ui"
    },
    {
      id: 3,
      title: "Sorting Algorithm Visualizer",
      description: "Interactive web application that visualizes various sorting algorithms including bubble sort, merge sort, quick sort, and heap sort with step-by-step animations.",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["JavaScript", "HTML5", "CSS3", "Algorithms", "Data Structures"],
      category: 'dsa',
      liveLink: "https://sorting-visualizer-gm.netlify.app",
      githubLink: "https://github.com/ganaparthimanish/sorting-visualizer"
    },
    {
      id: 4,
      title: "College Event Management App",
      description: "Mobile-first web application for managing college events, registrations, and notifications. Built as a team project for our college's annual tech fest.",
      image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "Firebase", "PWA", "Team Project"],
      category: 'group',
      liveLink: "https://college-events-kare.netlify.app",
      githubLink: "https://github.com/ganaparthimanish/college-events"
    },
    {
      id: 5,
      title: "Personal Finance Tracker",
      description: "A responsive web application that helps users track their expenses, income, and savings goals with interactive charts and budget planning features.",
      image: "https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "Chart.js", "Local Storage", "Responsive Design"],
      category: 'frontend',
      liveLink: "https://finance-tracker-gm.netlify.app",
      githubLink: "https://github.com/ganaparthimanish/finance-tracker"
    },
    {
      id: 6,
      title: "Library Management System UI",
      description: "Complete UI/UX design for a digital library management system with features for book cataloging, user management, and borrowing system.",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Adobe XD", "UI Design", "Wireframing", "User Flow"],
      category: 'ui',
      liveLink: "https://xd.adobe.com/view/library-management",
      githubLink: "https://github.com/ganaparthimanish/library-ui"
    },
    {
      id: 7,
      title: "Pathfinding Algorithm Visualizer",
      description: "Interactive tool to visualize pathfinding algorithms like A*, Dijkstra's, and BFS/DFS on a grid with obstacles and different terrains.",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["JavaScript", "Canvas API", "Graph Algorithms", "Visualization"],
      category: 'dsa',
      liveLink: "https://pathfinding-visualizer-gm.netlify.app",
      githubLink: "https://github.com/ganaparthimanish/pathfinding-visualizer"
    },
    {
      id: 8,
      title: "Smart Campus IoT Project",
      description: "IoT-based smart campus solution developed during a hackathon to monitor classroom occupancy, energy usage, and environmental conditions.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["IoT", "Arduino", "React Dashboard", "Team Project", "Hackathon"],
      category: 'group',
      liveLink: "https://smart-campus-dashboard.netlify.app",
      githubLink: "https://github.com/ganaparthimanish/smart-campus"
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
    { id: 'all', label: 'All Projects', icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: 'ui', label: 'UI/UX Design', icon: <PenTool className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: 'frontend', label: 'Frontend', icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: 'dsa', label: 'DSA Projects', icon: <BrainCircuit className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: 'group', label: 'Team Projects', icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" /> }
  ];

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'ui':
        return <PenTool className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />;
      case 'frontend':
        return <Code className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />;
      case 'dsa':
        return <BrainCircuit className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />;
      case 'group':
        return <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />;
      default:
        return <Code className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />;
    }
  };

  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container px-4 sm:px-6 lg:px-8">
        <SectionTitle>My Projects</SectionTitle>
        
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 px-2">
          {filters.map((filterItem) => (
            <button
              key={filterItem.id}
              onClick={() => setFilter(filterItem.id)}
              className={`flex items-center px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors rounded-full ${
                filter === filterItem.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              <span className="mr-1 sm:mr-2">{filterItem.icon}</span>
              <span className="hidden sm:inline">{filterItem.label}</span>
              <span className="sm:hidden">
                {filterItem.id === 'all' ? 'All' : 
                 filterItem.id === 'ui' ? 'UI/UX' :
                 filterItem.id === 'frontend' ? 'Frontend' :
                 filterItem.id === 'dsa' ? 'DSA' : 'Team'}
              </span>
            </button>
          ))}
        </div>
        
        <motion.div 
          ref={ref}
          className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
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
              <div className="relative overflow-hidden h-48 sm:h-52">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 left-0 px-2 sm:px-3 py-1 m-2 sm:m-3 text-xs font-medium text-white rounded-full bg-primary-600">
                  <div className="flex items-center">
                    {getCategoryIcon(project.category)}
                    <span className="hidden sm:inline">
                      {project.category === 'ui' && 'UI/UX Design'}
                      {project.category === 'frontend' && 'Frontend'}
                      {project.category === 'dsa' && 'DSA Project'}
                      {project.category === 'group' && 'Team Project'}
                    </span>
                    <span className="sm:hidden">
                      {project.category === 'ui' && 'UI/UX'}
                      {project.category === 'frontend' && 'Frontend'}
                      {project.category === 'dsa' && 'DSA'}
                      {project.category === 'group' && 'Team'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="mb-2 text-lg sm:text-xl font-semibold line-clamp-2">{project.title}</h3>
                <p className="mb-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs font-medium text-primary-700 bg-primary-100 rounded-full dark:bg-primary-900 dark:text-primary-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-1 text-xs font-medium text-gray-500 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-400">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
                
                <div className="flex justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
                  {project.liveLink && (
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium transition-colors text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                    >
                      <span className="hidden sm:inline">Live Demo</span>
                      <span className="sm:hidden">Demo</span>
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
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
                      <Github className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;