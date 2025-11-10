'use client';

import { motion } from 'framer-motion';
import { Twitter, Linkedin, Mail, Phone, MapPin, Facebook, Instagram, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import logo from "../../assets/Technify-logo.png";

export function Footer() {
  const footerSections = [
    {
      title: 'Products',
      links: [
        { text: 'Easy Vigil', href: '/products/easy-vigil' },
        { text: 'Berhard', href: '/products/berhard' },
        { text: 'Myten', href: '/products/myten' },
        { text: 'ELV Solutions', href: '/solutions/elv' },
        { text: 'ICT Solutions', href: '/solutions/ict' },
        { text: 'Automation Solutions', href: '/solutions/automation' }
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '/about' },
        { text: 'Leadership', href: '/about/leadership' },
        { text: 'Careers', href: '/career' },
        { text: 'Press', href: '/press' },
        { text: 'Partners', href: '/partners' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Help Center', href: '/support/help' },
        { text: 'Documentation', href: '/support/docs' },
        { text: 'Status', href: '/status' },
        { text: 'Contact', href: '/contact' },
        { text: 'FAQs', href: '/support/faqs' },
      ],
    },
  ];

  const contactInfo = [
    { icon: <MapPin className="w-4 h-4" />, text: '5, Gautam Nagar, New Delhi 110049' },
    { icon: <Phone className="w-4 h-4" />, text: '+91 9999769378' },
    { icon: <Mail className="w-4 h-4" />, text: 'info@technify.co.in' },
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, href: '#', label: 'Facebook' },
    { icon: <Instagram size={18} />, href: '#', label: 'Instagram' },
    { icon: <Linkedin size={18} />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter size={18} />, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="relative bg-white border-t border-gray-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <Link href="/" className="inline-block mb-6">
              <Image 
                src={logo} 
                alt="Technify logo" 
                width={160} 
                height={48} 
                className="object-contain"
              />
            </Link>

            <p className="text-gray-600 mb-8 leading-relaxed max-w-md">
              Empowering businesses with smart, automated, and connected solutions to shape the future of technology.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              {contactInfo.map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3 text-gray-600 group"
                >
                  <span className="text-orange-500 mt-0.5 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <span className="text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gray-50 hover:bg-orange-50 border border-gray-200 rounded-lg text-gray-600 hover:text-orange-600 transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {footerSections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-gray-900 mb-6 text-lg">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, j) => (
                    <motion.li 
                      key={j} 
                      whileHover={{ x: 4 }}
                    >
                      <Link 
                        href={link.href} 
                        className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-all group text-sm"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.text}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-500 text-sm"
            >
              © {new Date().getFullYear()} Technify. All rights reserved.
            </motion.p>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex gap-6 text-sm"
            >
              <Link href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                Cookies
              </Link>
            </motion.div>

            {/* Powered by */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              <Link
                href="https://www.dmiraki.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-700 font-medium transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://www.dmiraki.com', '_blank', 'noopener,noreferrer');
                }}
              >
                Powered by Dmiraki
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}