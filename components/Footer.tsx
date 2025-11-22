'use client'

import { motion } from 'framer-motion'
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope,
  FaCode,
  FaDownload
} from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaEnvelope, href: '#contact', label: 'Email' },
  ]

  const pageLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 mb-6 md:mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-2 text-xl font-bold gradient-text mb-2">
              <FaCode />
              <span>Portfolio</span>
            </div>
            <p className="text-sm text-gray-400 mb-3">
              Software Engineer & Data Scientist
            </p>
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed max-w-xs mx-auto md:mx-0 mb-4">
              Building innovative solutions through code and data-driven insights. 
              Passionate about creating impactful applications and extracting meaningful 
              insights from complex datasets.
            </p>
            <motion.a
              href="/S . D Shinde.pdf"
              download
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-blue-500 text-white rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all"
            >
              <FaDownload className="text-xs" />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>

          {/* Page Links - Vertical */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-white font-semibold mb-4 text-base md:text-lg">Quick Links</h3>
            <ul className="space-y-2 text-center md:text-left">
              {pageLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5, color: '#0ea5e9' }}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm md:text-base block"
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center md:items-end"
          >
            <h3 className="text-white font-semibold mb-4 text-base md:text-lg">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-xl md:text-2xl hover:text-primary-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-800 text-center text-xs md:text-sm text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

