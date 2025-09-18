'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export function CallToActionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      description: "Speak directly with our experts",
      action: "Schedule Call",
      href: "/contact"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "Get detailed project proposals",
      action: "Send Email",
      href: "/contact"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      description: "Quick answers to your questions",
      action: "Start Chat",
      href: "/contact"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background matching HomeSolutions */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b2a] via-[#1b263b] to-[#0f172a]" />
      
      {/* Background lighting matching HomeSolutions */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-[#1F6FEB]/20 rounded-full blur-[120px] opacity-40 animate-pulse -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFB300]/20 rounded-full blur-[130px] opacity-30 animate-pulse -z-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main CTA Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 shadow-2xl"
        >
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Let's discuss how our technology solutions can drive your business forward. 
              Get a free consultation and discover the possibilities.
            </motion.p>

            {/* Primary CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#1F6FEB] to-[#FFB300] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-[#1F6FEB] text-[#1F6FEB] font-semibold px-8 py-4 rounded-lg hover:bg-[#1F6FEB]/10 transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                >
                  Learn More About Us
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Contact Methods */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center group hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-[#1F6FEB]/20 to-[#FFB300]/20 group-hover:from-[#1F6FEB]/30 group-hover:to-[#FFB300]/30 transition-all duration-300">
                    {method.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {method.description}
                </p>
                <Link href={method.href}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-[#1F6FEB] font-medium hover:text-[#1F6FEB]/80 transition-colors duration-200"
                  >
                    {method.action}
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 mb-4">Trusted by industry leaders</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <span className="text-sm font-medium text-gray-300">500+ Projects</span>
              <span className="text-sm font-medium text-gray-300">•</span>
              <span className="text-sm font-medium text-gray-300">15+ Years</span>
              <span className="text-sm font-medium text-gray-300">•</span>
              <span className="text-sm font-medium text-gray-300">99% Success Rate</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}