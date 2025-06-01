import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Palette, 
  Code, 
  Database, 
  MessageSquare, 
  BarChart4, 
  Clock, 
  Users, 
  BrainCircuit 
} from 'lucide-react';
import SectionTitle from './common/SectionTitle';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories: SkillCategory[] = [
    {
      title: "UI/UX Design",
      icon: <Palette className="w-6 h-6" />,
      skills: ["Figma", "Adobe XD", "Sketch", "Wireframing", "Prototyping", "User Research", "Design Systems", "Bravo Studio"],
      color: "bg-primary-600"
    },
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      skills: ["HTML5", "CSS3/SCSS", "JavaScript/TypeScript", "React", "Next.js", "Tailwind CSS", "Responsive Design", "Animation"],
      color: "bg-secondary-600"
    },
    {
      title: "Data Structures & Algorithms",
      icon: <Database className="w-6 h-6" />,
      skills: ["Arrays & Strings", "Linked Lists", "Stacks & Queues", "Trees & Graphs", "Sorting", "Searching", "Dynamic Programming", "Problem Solving"],
      color: "bg-accent-600"
    },
    {
      title: "Soft Skills",
      icon: <MessageSquare className="w-6 h-6" />,
      skills: ["Communication", "Teamwork", "Problem Solving", "Adaptability", "Critical Thinking", "Attention to Detail", "Time Management", "Creativity"],
      color: "bg-success-600"
    }
  ];

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

  const renderSkillIcon = (title: string) => {
    switch(title) {
      case "UI/UX Design":
        return <Palette className="w-6 h-6" />;
      case "Frontend Development":
        return <Code className="w-6 h-6" />;
      case "Data Structures & Algorithms":
        return <BrainCircuit className="w-6 h-6" />;
      case "Soft Skills":
        return <Users className="w-6 h-6" />;
      default:
        return <BarChart4 className="w-6 h-6" />;
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle>My Skills</SectionTitle>
        
        <motion.div 
          ref={ref}
          className="grid gap-8 md:grid-cols-2"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={container}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg"
            >
              <div className={`p-4 text-white ${category.color}`}>
                <div className="flex items-center gap-3">
                  {renderSkillIcon(category.title)}
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16">
          <h3 className="mb-6 text-2xl font-semibold text-center">Other Skills & Tools</h3>
          
          <motion.div 
            className="grid gap-4 sm:grid-cols-2 md:grid-cols-4"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={container}
          >
            {[
              { name: "Git & GitHub", icon: <Code className="w-5 h-5 mr-2" /> },
              { name: "Responsive Design", icon: <BarChart4 className="w-5 h-5 mr-2" /> },
              { name: "Time Management", icon: <Clock className="w-5 h-5 mr-2" /> },
              { name: "Team Collaboration", icon: <Users className="w-5 h-5 mr-2" /> },
            ].map((item, index) => (
              <motion.div 
                key={index} 
                variants={item}
                className="flex items-center p-4 transition-colors bg-gray-100 rounded-lg dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                {item.icon}
                <span>{item.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;