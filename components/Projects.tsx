'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#',
      category: 'software',
    },
    {
      title: 'Predictive Analytics Dashboard',
      description:
        'Machine learning-powered dashboard for sales forecasting and customer behavior analysis. Built with Python, TensorFlow, and React.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      tags: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
      github: '#',
      demo: '#',
      category: 'data-science',
    },
    {
      title: 'Real-Time Chat Application',
      description:
        'Scalable chat application with WebSocket support, real-time messaging, and file sharing capabilities.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
      tags: ['Next.js', 'Socket.io', 'TypeScript', 'Redis'],
      github: '#',
      demo: '#',
      category: 'software',
    },
    {
      title: 'Customer Churn Prediction Model',
      description:
        'ML model to predict customer churn with 92% accuracy. Includes data preprocessing pipeline and visualization dashboard.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      tags: ['Python', 'Scikit-learn', 'Pandas', 'Flask'],
      github: '#',
      demo: '#',
      category: 'data-science',
    },
    {
      title: 'Task Management System',
      description:
        'Collaborative task management platform with real-time updates, team collaboration, and project tracking features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800',
      tags: ['React', 'Node.js', 'PostgreSQL', 'GraphQL'],
      github: '#',
      demo: '#',
      category: 'software',
    },
    {
      title: 'Image Classification API',
      description:
        'Deep learning API for image classification using CNN. Supports multiple model architectures and batch processing.',
      image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800',
      tags: ['Python', 'PyTorch', 'FastAPI', 'Docker'],
      github: '#',
      demo: '#',
      category: 'data-science',
    },
  ]

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of software engineering and data science projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-dark rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-3">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

