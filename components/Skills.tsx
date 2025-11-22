'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaReact,
  FaNode,
  FaPython,
  FaJava,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaJs,
  FaHtml5,
  FaCss3Alt,
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTypescript,
  SiTensorflow,
  SiPytorch,
  SiPostgresql,
  SiMongodb,
  SiKubernetes,
  SiRedis,
} from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Combine all skills into a single array for the slider
  const allSkills = [
    { name: 'React', icon: FaReact, color: 'text-blue-400' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-400' },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
    { name: 'Node.js', icon: FaNode, color: 'text-green-400' },
    { name: 'Python', icon: FaPython, color: 'text-yellow-300' },
    { name: 'Java', icon: FaJava, color: 'text-red-400' },
    { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-400' },
    { name: 'PyTorch', icon: SiPytorch, color: 'text-red-400' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400' },
    { name: 'Redis', icon: SiRedis, color: 'text-red-400' },
    { name: 'Docker', icon: FaDocker, color: 'text-blue-400' },
    { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-500' },
    { name: 'AWS', icon: FaAws, color: 'text-orange-400' },
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-400' },
  ]

  // Duplicate the array for seamless infinite scroll
  const duplicatedSkills = [...allSkills, ...allSkills]

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I work with to build amazing products
          </p>
        </motion.div>
      </div>

      {/* Logo Slider - Full Width */}
      <div className="relative w-full">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 via-gray-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 via-gray-900 to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden w-full">
            <motion.div
              className="flex gap-8"
              animate={{
                x: ['0%', '-50%'],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 15,
                  ease: 'linear',
                },
              }}
            >
              {duplicatedSkills.map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.2, y: -10 }}
                  className="flex-shrink-0 flex flex-col items-center justify-center gap-3 p-6 rounded-2xl glass-dark min-w-[140px] group cursor-pointer"
                >
                  <div className="relative">
                    <skill.icon className={`text-5xl md:text-6xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <span className="text-white text-sm font-semibold text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
    </section>
  )
}

export default Skills

