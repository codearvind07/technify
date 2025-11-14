"use client";

import { motion, Variants } from "framer-motion";
import { 
  Volume2, 
  Mic, 
  Radio, 
  Wifi, 
  Zap, 
  Download,
  ArrowRight,
  Play
} from "lucide-react";
import { SEO } from '@/components/seo/seo';

export default function RailwayPASPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 0.2,
        ease: "easeOut"
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      },
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.1
      } 
    }
  };

  const features = [
    {
      icon: Volume2,
      title: "High-Quality Audio",
      description: "Crystal clear audio delivery with noise cancellation for optimal intelligibility."
    },
    {
      icon: Wifi,
      title: "IP-Based Network",
      description: "Modern IP infrastructure for seamless integration and remote management."
    },
    {
      icon: Mic,
      title: "Priority Override",
      description: "Emergency announcements with automatic priority override for critical communications."
    },
    {
      icon: Radio,
      title: "Zone Control",
      description: "Flexible zone management for targeted or facility-wide announcements."
    }
  ];

  const applications = [
    "Station announcements",
    "Platform information",
    "Emergency notifications",
    "Background music",
    "Boarding calls",
    "Security alerts"
  ];

  return (
    <>
      <SEO 
        title="Railway Public Address System (PAS) - Clear Communication Solutions"
        description="Advanced Public Address Systems for railways featuring high-quality audio, IP-based networking, priority override, and zone control for all railway communication needs."
        path="/products/railway/pas"
        image="/images/og-railway-pas.jpg"
      />
      
      <div className="min-h-screen bg-white text-gray-800">
        <main>
          {/* Hero Section */}
          <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div 
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >
                  <motion.div 
                    variants={itemVariants}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6"
                  >
                    Railway Communication Solution
                  </motion.div>
                  
                  <motion.h1 
                    variants={itemVariants}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900"
                  >
                    Public Address{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                      System
                    </span>
                  </motion.h1>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed"
                  >
                    Reliable and high-quality audio communication systems designed for railway environments to ensure clear announcements and emergency notifications.
                  </motion.p>
                  
                  <motion.div 
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <a 
                      href="/contact" 
                      className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center"
                    >
                      Request Demo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                    <a 
                      href="/pdf/railway-pas-brochure.pdf" 
                      download
                      className="bg-white text-gray-700 border border-gray-300 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-md flex items-center justify-center"
                    >
                      <Play className="mr-2 h-5 w-5" />
                      View Brochure
                    </a>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className="relative"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-full h-96 flex items-center justify-center">
                      <div className="text-white text-center p-8">
                        <Volume2 className="w-24 h-24 mx-auto mb-6" />
                        <h3 className="text-2xl font-bold">Public Address System</h3>
                        <p className="mt-2 opacity-90">Clear Communication for Railways</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Advanced Communication Features
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Cutting-edge technology designed to ensure clear and reliable communication throughout railway facilities.
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200"
                  >
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Applications Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-full h-96 flex items-center justify-center">
                      <div className="text-white text-center p-8">
                        <Mic className="w-24 h-24 mx-auto mb-6" />
                        <h3 className="text-2xl font-bold">Communication Applications</h3>
                        <p className="mt-2 opacity-90">Versatile System for All Railway Needs</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={containerVariants}
                >
                  <motion.h2 
                    variants={itemVariants}
                    className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
                  >
                    System Applications
                  </motion.h2>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-lg text-gray-600 mb-8 leading-relaxed"
                  >
                    Our Public Address System is designed to handle all communication needs in a railway environment.
                  </motion.p>
                  
                  <motion.div 
                    variants={staggerChildren}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {applications.map((application, index) => (
                      <motion.div 
                        key={index}
                        variants={fadeInUp}
                        className="flex items-center gap-4 p-4 rounded-lg bg-white border border-gray-200"
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                          <Zap className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="font-medium text-gray-900">{application}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center text-white"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Improve Railway Communication?</h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
                  Contact our experts to discuss how our Public Address System can enhance communication at your railway network.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/pdf/railway-pas-brochure.pdf" 
                    download
                    className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg flex items-center"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download Brochure
                  </a>
                  <a 
                    href="/contact" 
                    className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all"
                  >
                    Request Demo
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
