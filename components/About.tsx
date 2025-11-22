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
            <h3 className="text-2xl font-bold text-white mb-4">
              My Journey
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              With a strong foundation in both software engineering and data science,
              I bring a unique perspective to every project. I specialize in building
              robust applications while leveraging data-driven insights to create
              intelligent solutions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My expertise spans from developing scalable web applications to
              implementing machine learning models that drive business value. I'm
              passionate about continuous learning and staying updated with the
              latest technologies and methodologies.
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

