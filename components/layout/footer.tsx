'use client';

import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import logo from "../../assets/Technify-logo.png";

export function Footer() {
  const footerSections = [
    { 
      title: 'Product', 
      links: [
        { text: 'Easy Vigil', href: '/products/easy-vigil' },
        { text: 'Berhard', href: '/products/berhard' },
        { text: 'Myten', href: '/products/myten' },
        { text: 'ELV Solutions', href: '/solutions/elv' },
        { text: 'ICT Solutions', href: '/solutions/ict' },
        { text: 'Automation Solutions', href: '/solutions/automation' }
      ] 
    },
    { 
      title: 'Company', 
      links: [
        { text: 'About', href: '/about' },
        { text: 'Careers', href: '/career' },
        { text: 'Services', href: '/services' },
        { text: 'Leadership', href: '/about/leadership' },
        { text: 'Press', href: '/press' },
        { text: 'Partners', href: '/partners' }
      ] 
    },
    { 
      title: 'Support', 
      links: [
        { text: 'Help Center', href: '/support/help' },
        { text: 'Documentation', href: '/support/docs' },
        { text: 'Status', href: '/status' },
        { text: 'Contact', href: '/contact' },
        { text: 'Support Portal', href: '/support/portal' },
        { text: 'FAQs', href: '/support/faqs' }
      ] 
    },
  ];

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Github className="w-5 h-5" />, href: '#', label: 'GitHub' },
    { icon: <Mail className="w-5 h-5" />, href: '#', label: 'Email' },
  ];

  const contactInfo = [
    { icon: <MapPin className="w-5 h-5" />, text: '5,Gautam Nagar New Delhi 110049' },
    { icon: <Phone className="w-5 h-5" />, text: '+91 9999769378' },
    { icon: <Mail className="w-5 h-5" />, text: 'info@technify.co.in' },
  ];

  return (
    <footer className="relative py-16 border-t border-gray-200 bg-gradient-to-br from-[#f7fafc] via-[#e3e8ee] to-[#f7fafc]">
      {/* HomeFeatureGridSection-like animated background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e3e8ee]/90 via-[#f7fafc]/90 to-[#f7fafc]/90"></div>
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(circle at 15% 50%, #ff784922 1px, transparent 1px),
                radial-gradient(circle at 85% 30%, #3b82f622 1px, transparent 1px)
              `,
              backgroundSize: '44px 44px'
            }}
          ></div>
        </div>
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-[#ff7849]/10 blur-3xl"
          animate={{ x: [0, 60, 0], y: [0, -60, 0] }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full bg-[#3b82f6]/10 blur-3xl"
          animate={{ x: [0, -60, 0], y: [0, 60, 0] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center mb-8"
            >
              <Link href="/" className="flex items-center" aria-label="Home">
                {/* Logo container with significantly increased size */}
                <span className="relative flex items-center justify-center h-40 w-40 rounded-full bg-white/5 p-3 ring-2 ring-blue-500/50">
                  <Image
                    src={logo}
                    alt="Technify logo"
                    width={170}
                    height={170}
                    priority
                    className="object-contain"
                  />
                  {/* Enhanced glow behind logo */}
                  <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-blue-500/30 to-orange-500/30 blur-xl" />
                </span>
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-600 mb-8 leading-relaxed max-w-sm body-base"
            >
              Transform your business with our cutting-edge platform designed to streamline operations and drive growth.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="heading-5 text-gray-900 mb-4">Contact Us</h3>
              <div className="space-y-3">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-blue-600 mt-1 mr-3">{item.icon}</span>
                    <span className="text-gray-600 body-small">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gradient-to-r from-blue-500 to-orange-500 text-white rounded-lg group shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-white group-hover:text-white transition-colors duration-300">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="heading-6 text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="text-gray-600 hover:text-blue-600 transition-all duration-300 body-small"
                      >
                        {link.text}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between"
        >
          <p className="text-gray-600 body-small mb-4 md:mb-0">
            © {new Date().getFullYear()} Technify. All rights reserved.
          </p>

          <div className="flex items-center space-x-8 body-small">
            <motion.a href="#" whileHover={{ color: '#3b82f6' }} className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
              Privacy Policy
            </motion.a>
            <motion.a href="#" whileHover={{ color: '#3b82f6' }} className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
              Terms of Service
            </motion.a>
            <motion.a href="#" whileHover={{ color: '#3b82f6' }} className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
              Cookies
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}