'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaDatabase, FaRocket, FaLightbulb } from 'react-icons/fa'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: FaCode,
      title: 'Software Engineering',
      description: 'Full-stack development with modern frameworks and best practices',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaDatabase,
      title: 'Data Science',
      description: 'Machine learning, data analysis, and predictive modeling',
      color: 'from-blue-500 to-white',
    },
    {
      icon: FaRocket,
      title: 'Innovation',
      description: 'Building scalable solutions and cutting-edge applications',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: FaLightbulb,
      title: 'Problem Solving',
      description: 'Transforming complex challenges into elegant solutions',
      color: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <section
      id="about"
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
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about creating impactful software solutions and extracting
            meaningful insights from data
          </p>
        </motion.div>

        <div className="w-full mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-dark p-8 md:p-12 rounded-2xl"
          >
            
            <p className="text-gray-300 leading-relaxed mb-4">
            Detail-oriented and highly motivated Software Developer with 2+ years of combined experience in software
development, data science education, and IT operations. Proficient in Java, Python, and C, with hands-on expertise in web
technologies, data visualization, and backend development. Strong background in academic teaching and team leadership,
having served as an Assistant Professor and Operational Manager, alongside industry experience as a Jr. Software
Developer.
Skilled in developing scalable web applications using Java, Node.js, HTML, CSS, JavaScript, and ReactJS, with
experience in Firebase, MySQL, MongoDB, and Power BI. Passionate about solving real-world problems through datadriven insights and software innovation.
Known for quick learning, cross-functional collaboration, and a strong foundation in OOP principles and software
lifecycle practices. Currently pursuing M. Tech in Computer Science and Engineering, with a continuous drive for
learning and applying emerging technologies in impactful ways.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-dark p-6 rounded-xl text-center group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`inline-flex p-4 rounded-full bg-gradient-to-r ${feature.color} mb-4`}
              >
                <feature.icon className="text-3xl text-white" />
              </motion.div>
              <h4 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-400 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

