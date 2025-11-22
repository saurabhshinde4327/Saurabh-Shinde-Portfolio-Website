'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Mesh */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.3) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Animated Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Multiple Animated Orbs */}
        <motion.div
          animate={{
            x: mousePosition.x * 0.5,
            y: mousePosition.y * 0.5,
            scale: [1, 1.2, 1],
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: -mousePosition.x * 0.5,
            y: -mousePosition.y * 0.5,
            scale: [1, 1.3, 1],
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: mousePosition.x * 0.3,
            y: -mousePosition.y * 0.3,
            scale: [1, 1.1, 1],
          }}
          transition={{ type: 'spring', stiffness: 40, damping: 25 }}
          className="absolute top-1/2 right-1/3 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: -mousePosition.x * 0.4,
            y: mousePosition.y * 0.4,
            scale: [1, 1.15, 1],
          }}
          transition={{ type: 'spring', stiffness: 45, damping: 22 }}
          className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl"
        />

        {/* Rotating Gradient Circles */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-full h-full rounded-full border-2 border-primary-500/20" />
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-full h-full rounded-full border-2 border-blue-500/20" />
        </motion.div>

        {/* Animated Wave Effect */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-64"
          animate={{
            background: [
              'linear-gradient(to top, rgba(14, 165, 233, 0.1) 0%, transparent 100%)',
              'linear-gradient(to top, rgba(59, 130, 246, 0.1) 0%, transparent 100%)',
              'linear-gradient(to top, rgba(255, 255, 255, 0.1) 0%, transparent 100%)',
              'linear-gradient(to top, rgba(14, 165, 233, 0.1) 0%, transparent 100%)',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Pulsing Center Orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-primary-500/30 to-blue-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-5xl font-bold mb-3"
            >
              <span className="text-white">Hi, I'm </span>
              <span className="gradient-text">Saurabh Shinde</span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl font-semibold mb-5 text-gray-300"
            >
              <span className="gradient-text">Software Engineer</span>
              <span className="text-white"> & </span>
              <span className="gradient-text">Data Scientist</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-gray-300 mb-6 max-w-3xl mx-auto lg:mx-0 leading-relaxed"
            >
              Transforming complex problems into elegant solutions through cutting-edge software development 
              and data-driven analytics. Passionate about creating impactful applications and extracting 
              meaningful insights from data.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start items-center mb-8"
            >
              <motion.a
                href="/S . D Shinde.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-primary-500 text-white rounded-full font-semibold text-base shadow-lg hover:shadow-blue-500/50 transition-all inline-flex items-center gap-2"
              >
                <FaDownload />
                <span>Download Resume</span>
                <FaExternalLinkAlt className="text-sm" />
              </motion.a>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            variants={itemVariants}
            className="flex-1 flex justify-center lg:justify-end relative"
          >
            <div className="relative">
              {/* Animated Glow Ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-r from-primary-500/50 via-blue-500/50 to-white/30 blur-2xl" />
              </motion.div>

              {/* Rotating Border */}
              <motion.div
                className="absolute -inset-4 rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-r from-primary-500 via-blue-500 to-white p-1">
                  <div className="w-full h-full rounded-full bg-gray-900" />
                </div>
              </motion.div>

              {/* Image Container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-primary-500/30 shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-blue-500/20 z-10" />
                {!imageError ? (
                  <Image
                    src="/profile.jpg"
                    alt="Profile Picture"
                    fill
                    className="object-cover z-0"
                    priority
                    sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-500/30 to-blue-500/30 z-0">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white/70">
                      SS
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Floating Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-primary-500/30 rounded-full blur-xl"
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-500/30 rounded-full blur-xl"
                animate={{
                  y: [0, 20, 0],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Floating Particles */}
      {[...Array(30)].map((_, i) => {
        const randomX = Math.random() * dimensions.width
        const randomY = Math.random() * dimensions.height
        const randomEndX = Math.random() * dimensions.width
        const randomEndY = Math.random() * dimensions.height
        const size = Math.random() * 4 + 2
        const colors = [
          'bg-primary-400/40',
          'bg-blue-400/40',
          'bg-white/30',
          'bg-cyan-400/40',
        ]
        const color = colors[Math.floor(Math.random() * colors.length)]
        
        return (
          <motion.div
            key={i}
            className={`absolute ${color} rounded-full`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
            }}
            initial={{
              x: randomX,
              y: randomY,
              scale: 0,
            }}
            animate={{
              y: [null, randomEndY],
              x: [null, randomEndX],
              opacity: [0, 0.8, 0.4, 0],
              scale: [0, 1, 1.2, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut',
            }}
          />
        )
      })}

      {/* Animated Code Symbols */}
      {['<', '/>', '{', '}', '(', ')', '[', ']'].map((symbol, i) => (
        <motion.div
          key={symbol}
          className="absolute text-primary-400/20 text-6xl font-mono font-bold"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            y: [null, Math.random() * dimensions.height],
            x: [null, Math.random() * dimensions.width],
            opacity: [0, 0.3, 0],
            rotate: [0, 360],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            delay: i * 2,
            ease: 'easeInOut',
          }}
        >
          {symbol}
        </motion.div>
      ))}

      {/* Animated Connecting Lines */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 10 20 L 90 80"
          stroke="rgba(14, 165, 233, 0.3)"
          strokeWidth="0.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.path
          d="M 90 20 L 10 80"
          stroke="rgba(59, 130, 246, 0.3)"
          strokeWidth="0.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 1.5,
            ease: 'easeInOut',
          }}
        />
      </svg>
    </section>
  )
}

export default Hero

