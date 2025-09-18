'use client';

import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
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

  return (
    <footer className="relative py-16 border-t border-card/50">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center mb-8" // Added more margin-bottom (mb-8)
            >
              <Link href="/" className="flex items-center" aria-label="Home">
                {/* Logo container with significantly increased size */}
                <span className="relative flex items-center justify-center h-40 w-40 rounded-full bg-card/5 p-3 ring-2 ring-card/50"> {/* Larger container, thicker ring */}
                  <Image
                    src={logo}
                    alt="Technify logo"
                    width={170}  // Dramatically increased from 96
                    height={170} // Dramatically increased from 96
                    priority
                    className="object-contain"
                  />
                  {/* Enhanced glow behind logo */}
                  <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#1F6FEB]/30 blur-xl" /> {/* More intense glow */}
                </span>
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-foreground/60 mb-8 leading-relaxed max-w-sm"
            >
              Transform your business with our cutting-edge platform designed to streamline operations and drive growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
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
                  className="p-3 hover:bg-card/10 transition-all duration-300 rounded-lg group"
                >
                  <div className="text-foreground/60 group-hover:text-[#1F6FEB] transition-colors duration-300">
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
                <h3 className="text-foreground font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="text-foreground/60 hover:text-[#1F6FEB] transition-all duration-300"
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
          className="mt-12 pt-8 border-t border-card/50 flex flex-col md:flex-row items-center justify-between"
        >
          <p className="text-foreground/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Technify. All rights reserved.
          </p>

          <div className="flex items-center space-x-8 text-sm">
            <motion.a href="#" whileHover={{ color: '#1F6FEB' }} className="text-foreground/60 hover:text-[#1F6FEB] transition-colors duration-300">
              Privacy Policy
            </motion.a>
            <motion.a href="#" whileHover={{ color: '#1F6FEB' }} className="text-foreground/60 hover:text-[#1F6FEB] transition-colors duration-300">
              Terms of Service
            </motion.a>
            <motion.a href="#" whileHover={{ color: '#1F6FEB' }} className="text-foreground/60 hover:text-[#1F6FEB] transition-colors duration-300">
              Cookies
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}