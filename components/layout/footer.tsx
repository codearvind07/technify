'use client';

import { motion } from 'framer-motion';
import { Twitter, Linkedin, Mail, Phone, MapPin, Facebook, Instagram, ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import logo from "../../assets/Technify-logo.png";

export function Footer() {
  const footerSections = [
    {
      title: 'Products',
      links: [
        { text: 'CCTV Surveillance Systems', href: '/products/airport/cctv' },
        { text: 'Panic Alarm / Nurse Call System (NCS)', href: '/products/hospital/ncs' },
        { text: 'Queue Management System', href: '/products/hospital/qms' },
        { text: 'Public Address System (PAS)', href: '/products/airport/pas' },
        { text: 'Fire Alarm System', href: '/products/airport/fire-alarm' },
        { text: 'FIDS (Flight Information Display System)', href: '/products/airport/fids' },
      ],
    },
    {
      title: 'Company Pages',
      links: [
        { text: 'Services', href: '/services' },
        { text: 'About Us', href: '/about' },
        { text: 'Career', href: '/career' },
        { text: 'Contact Us', href: '/contact' },
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
    <footer className="relative bg-gray-500">
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

            <p className="text-gray-300 mb-8 leading-relaxed max-w-md">
              Empowering businesses with smart, automated, and connected solutions to shape the future of technology.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              {contactInfo.map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3 text-gray-300 group"
                >
                  <span className="text-orange-400 mt-0.5 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <span className="text-gray-200 text-sm">{item.text}</span>
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
                  className="p-3 bg-gray-700 hover:bg-orange-500 border border-gray-600 rounded-lg text-gray-300 hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {footerSections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-white mb-6 text-lg">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, j) => (
                    <motion.li key={j} whileHover={{ x: 4 }}>
                      <Link 
                        href={link.href} 
                        className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-all group text-sm"
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
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-300 text-sm"
            >
              © {new Date().getFullYear()} Technify. All rights reserved.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex gap-6 text-sm"
            >
              <Link href="#" className="text-gray-400 hover:text-gray-200 transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-gray-200 transition-colors">Terms of Service</Link>
              <Link href="#" className="text-gray-400 hover:text-gray-200 transition-colors">Cookies</Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-gray-300 text-sm"
            >
              <span>Powered by</span>
              <Link
                href="https://dmiraki.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-orange-400 hover:text-orange-300 font-medium transition-colors group"
              >
                Dmiraki
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
