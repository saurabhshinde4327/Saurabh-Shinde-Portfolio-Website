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
      title: 'Healthcare Android Application',
      description:
        'CACTUS – Mental Wellness and Daily Health Journal is an academic project designed to help users track their physical and mental well-being in a simple, organized, and secure way. The application features a robust backend built with Kotlin, managing core logic and data processing efficiently. The frontend is developed using XML-based UI layouts, delivering an intuitive and user-friendly interface. For data management, the project uses Firebase Realtime Database, enabling seamless cloud synchronization and secure storage of user entries. Additionally, Firebase Authentication is integrated to ensure safe user registration, login, and account management, maintaining strong privacy and security standards. This project showcases a complete end-to-end Android app solution focused on promoting healthier daily habits.',
      image: '/Health Android Application.png',
      
    },
    {
      title: 'Data Analysis: Exploratory Data Analysis on Sales Data',
      description:
        'Data Analysis: Exploratory Data Analysis on Sales Data is a comprehensive analytical project focused on uncovering meaningful insights from raw sales data. The objective of this project is to perform in-depth Exploratory Data Analysis (EDA) using Python to understand trends, patterns, and relationships within the dataset, while leveraging Power BI for interactive and visually compelling dashboards. The process begins with thorough data preparation, including cleaning the dataset, handling missing values, removing duplicates, and correcting inconsistencies. Using Python, key descriptive statistics such as mean, median, mode, and standard deviation are computed, along with correlation analysis to explore relationships between variables. Finally, insights are visualized using Power BI, enabling clear identification of trends, anomalies, and actionable observations that support informed business decision-making.',
      image: '/Data Analysis.png',
      
    },
    {
      title: 'YCIS Data Center – Full Admin Management Panel',
      description:
        'YCIS Data Center – Full Admin Management Panel is a web-based dashboard designed to manage students, users, file uploads, storage insights, and department statistics. Built with Next.js, Tailwind CSS, and Axios, it provides a secure, fast, and intuitive interface for centralized data center operations.',
      image: '/Data Center Website.png',
      
    },
    {
      title: 'YCIS Locker – Cloud File Management System',
      description:
        'YCIS Locker – Secure File Storage & Sharing Platform is a web application that allows users to upload, store, and share files securely. Built using Next.js, Tailwind CSS, and Axios, it provides user authentication, a clean UI, and real-time file management capabilities.',
      image: '/YCIS Locker.png',
      
    },
    {
      title: 'AgroTrack – Smart Farming & Voice-Assisted Support App',
      description:
        'AgroTrack is a Marathi-language mobile application designed to help farmers efficiently track their plantation activities and daily agricultural processes. The app simplifies farm management by allowing users to record crop progress, maintain schedules, and monitor important tasks. It also includes a built-in voice assistant that helps farmers easily generate official letters and documentation using spoken Marathi, making the process fast and accessible for those with limited typing skills. AgroTrack provides a practical, user-friendly solution to support farmers in improving productivity and managing their agricultural workflow more effectively.',
      image: '/AgroTrack.png',
      
    },
    {
      title: 'Teaching Assistant for Students – AI-Powered Learning Support System',
      description:
        'eaching Assistant for Students is an AI-powered learning support system built using Streamlit and Machine Learning algorithms to help students improve their academic performance. The system provides personalized assistance by analyzing student inputs, generating study recommendations, and offering automated responses to common academic queries. Using Streamlit, the project delivers a clean, interactive, and user-friendly interface, while machine learning models enable intelligent predictions, content suggestions, and data-driven insights. This project demonstrates effective integration of ML with modern UI tools to create a smart digital assistant for students.',
      image: '/Teaching Assistant.png',
      
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

