import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  Github, 
  Linkedin, 
  Twitter 
} from 'lucide-react';
import SectionTitle from './common/SectionTitle';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<{
    status: 'idle' | 'success' | 'error';
    message: string;
  }>({
    status: 'idle',
    message: '',
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ status: 'success', message: 'Message sent successfully! I will get back to you soon.' });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setTimeout(() => {
      setFormStatus({ status: 'idle', message: '' });
    }, 5000);
  };

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionTitle>Get In Touch</SectionTitle>
        
        <motion.div 
          ref={ref}
          className="grid gap-8 lg:grid-cols-2"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Let's Talk!</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Have a project in mind or just want to chat? Feel free to reach out through any of 
              the methods below or use the contact form.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 mr-4 text-white rounded-full bg-primary-600">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h4>
                  <a 
                    href="mailto:ganaparthimanishchowdary@gmail.com" 
                    className="text-lg transition-colors hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    ganaparthimanishchowdary@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 mr-4 text-white rounded-full bg-primary-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</h4>
                  <p className="text-lg">Sakhavaram, Prakasam District, AP, India</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 mr-4 text-white rounded-full bg-primary-600">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone</h4>
                  <a 
                    href="tel:+918897868951" 
                    className="text-lg transition-colors hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    +91 8897868951
                  </a>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <h4 className="mb-4 font-medium">Connect with me:</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 text-gray-600 transition-all transform bg-gray-100 rounded-full hover:bg-primary-600 hover:text-white hover:scale-110 dark:bg-gray-700 dark:text-gray-300"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 text-gray-600 transition-all transform bg-gray-100 rounded-full hover:bg-primary-600 hover:text-white hover:scale-110 dark:bg-gray-700 dark:text-gray-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 text-gray-600 transition-all transform bg-gray-100 rounded-full hover:bg-primary-600 hover:text-white hover:scale-110 dark:bg-gray-700 dark:text-gray-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-lg transform hover:shadow-xl transition-all dark:bg-gray-800">
            <h3 className="mb-4 text-2xl font-semibold">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 transition-colors border rounded-md border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-primary-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 transition-colors border rounded-md border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-primary-500"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 transition-colors border rounded-md border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-primary-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 transition-colors border rounded-md border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-primary-500"
                ></textarea>
              </div>
              
              {formStatus.status !== 'idle' && (
                <div className={`p-3 rounded-md ${
                  formStatus.status === 'success' 
                    ? 'bg-success-100 text-success-800 dark:bg-success-900 dark:text-success-300' 
                    : 'bg-error-100 text-error-800 dark:bg-error-900 dark:text-error-300'
                }`}>
                  {formStatus.message}
                </div>
              )}
              
              <button
                type="submit"
                className="flex items-center justify-center w-full px-6 py-3 text-white transition-all transform rounded-md btn btn-primary hover:scale-105"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;