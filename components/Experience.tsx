'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: 'Operational Manager',
      company: 'YCIS Data and Technology Center',
      location: 'Satara, Maharashtra',
      period: '2024 - Present',
      description: [
        'Managed daily operations of the institution, ensuring smooth administrative and academic workflows.',
        'Supervised teams and delegated responsibilities to achieve institutional goals.',
        'Handled Proxmox OS for virtualization and server management.',
        'Managed deployment and maintenance of web applications, including Node.js, PHP, and WordPress.',
      ],
      
    },
    {
      title: 'Assistant Professor',
      company: 'Yashavantrao Chavan Institute of Science',
      location: 'Satara, Maharashtra',
      period: '2023 - Present',
      description: [
        'Developed and enhanced course materials to stay current with industry advancements and trends.',
        '2 Years of Experience in Data Science Department',
        'Taught courses on data science, including Python, Power BI, and SQL',
      ],
      
    },
    
    {
      title: 'Jr. Software Developer ',
      company: 'Agroson Alliance LLP',
      location: 'Satara, Maharashtra',
      period: '2022 - 2023',
      description: [
        '1 Year of Experience in Agroson Alliance LLP as Jr. Software Developer.',
        'Collaborate with senior developers to design, develop, and maintain scalable web applications.',
        'Version control systems, particularly Git, for collaboration and version management.',
        'Proficiency in HTML, CSS, JavaScript, and familiarity with front-end frameworks like ReactJS.',
      ],
      
    },
  ]

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 w-full"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A journey of growth, learning, and impactful contributions
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line - Hidden on mobile, visible on larger screens */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-blue-500 to-white opacity-30" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                className="relative flex flex-col items-start"
              >
                {/* Timeline Dot - Hidden on mobile, visible on larger screens */}
                <div className="hidden md:block absolute left-8 -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full border-4 border-gray-900 z-10" />

                {/* Content Card */}
                <div className="w-full md:ml-0 md:pl-8">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass-dark p-5 md:p-8 lg:p-10 rounded-2xl w-full"
                  >
                    <div className="flex flex-col md:grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                          {experience.title}
                        </h3>
                        <p className="text-primary-400 font-semibold text-base md:text-lg mb-4">
                          {experience.company}
                        </p>
                        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 md:gap-4 text-gray-400 text-sm">
                          <div className="flex items-center gap-2">
                            <FaCalendarAlt className="text-primary-400" />
                            <span>{experience.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-primary-400" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <ul className="space-y-2 text-gray-300 text-sm md:text-base">
                          {experience.description.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-3">
                              <span className="text-primary-400 mt-1.5 flex-shrink-0">▸</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

