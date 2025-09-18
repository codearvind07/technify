"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { 
  Camera, 
  Shield, 
  Eye, 
  Lock,
  Search,
  Palette,
  Users,
  Download,
  FileText
} from "lucide-react";
import { SEO } from '@/components/seo/seo';

export default function EasyVigilPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15, 
        delayChildren: 0.2,
        ease: "easeOut"
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      },
    },
  };

  return (
    <>
      <SEO 
        title="EasyVigil - AI-Powered Video Analytics & Surveillance Platform"
        description="EasyVigil unified platform for video analytics, surveillance, and building automation. Features AI-powered intrusion detection, camera tampering detection, object recognition, and comprehensive security management."
        path="/products/easy-vigil"
        image="/images/og-easyvigil.jpg"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-[#1F6FEB]/10 rounded-full blur-3xl opacity-50 animate-pulse -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFB300]/10 rounded-full blur-3xl opacity-40 animate-pulse -z-10" />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-[#1F6FEB]/10 rounded-full blur-3xl opacity-30 animate-pulse -z-10" />

      {/* Navigation */}
      <nav className="fixed w-full bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-md py-4 px-8 z-50 flex justify-between items-center border-b border-gray-800">
        <div className="flex items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-[#1F6FEB] via-[#1F6FEB] to-[#FFB300] bg-clip-text text-transparent">
            EasyVigil
          </span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
          <a href="#expertise" className="hover:text-cyan-400 transition-colors">Expertise</a>
          <a href="#platform" className="hover:text-cyan-400 transition-colors">Platform</a>
          <a href="#analytics" className="hover:text-cyan-400 transition-colors">Analytics</a>
        </div>
        <button className="bg-gradient-to-r from-[#1F6FEB] to-[#FFB300] text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all">
          Contact Us
        </button>
      </nav>

      <main className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              className="text-5xl md:text-6xl font-extrabold mb-6"
            >
              <span className="bg-gradient-to-r from-[#1F6FEB] via-[#1F6FEB] to-[#FFB300] bg-clip-text text-transparent">
                Easy Vigil
              </span>{" "}
              Unified Platform
            </motion.h1>
            
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              <span className="px-4 py-2 bg-[#1F6FEB]/30 rounded-full text-[#1F6FEB]">Connect</span>
              <span className="px-4 py-2 bg-[#1F6FEB]/30 rounded-full text-[#1F6FEB]">Detect</span>
              <span className="px-4 py-2 bg-[#FFB300]/30 rounded-full text-[#FFB300]">Diagnose</span>
              <span className="px-4 py-2 bg-[#1F6FEB]/30 rounded-full text-[#1F6FEB]">Improve</span>
            </motion.div>
            
            <motion.p 
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
            >
              Mitigate risk, maintain continuity, and improve efficiency with our AI-powered video analytics platform.
            </motion.p>
            
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <button className="bg-gradient-to-r from-[#1F6FEB] to-[#FFB300] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all">
                Get Started
              </button>
              <button className="bg-transparent border border-[#1F6FEB] text-[#1F6FEB] px-8 py-4 rounded-xl font-semibold hover:bg-[#1F6FEB]/30 transition-all">
                View Demo
              </button>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Command Better Business Outcomes
            </motion.h2>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              <motion.div 
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-full h-64 bg-gradient-to-br from-[#1F6FEB]/20 to-[#FFB300]/20 rounded-xl mb-6 flex items-center justify-center">
                  <Shield className="w-24 h-24 text-[#1F6FEB]" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Unified Control Center</h3>
                <p className="text-gray-300">
                  Streamline complex operations by better coordinating your systems, teams and devices, even across distributed facilities.
                </p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-full h-64 bg-gradient-to-br from-[#FFB300]/20 to-[#1F6FEB]/20 rounded-xl mb-6 flex items-center justify-center">
                  <Eye className="w-24 h-24 text-[#FFB300]" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Intuitive Interface</h3>
                <p className="text-gray-300">
                  Access critical information quickly with an intuitive user interface and incident workflows based on standard operating procedures.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Video Analytics Section */}
        <section id="analytics" className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#1F6FEB] via-[#1F6FEB] to-[#FFB300] bg-clip-text text-transparent"
              >
                Video Analytics Software Platform
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                AI-powered video analytics for enhanced security and operational efficiency
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <motion.div 
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#1F6FEB]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-8 w-8 text-[#1F6FEB]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Intrusion Detection</h3>
                <p className="text-gray-300">Automatically detect unauthorized access to restricted areas</p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#1F6FEB]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-8 w-8 text-[#1F6FEB]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Camera Tampering</h3>
                <p className="text-gray-300">Immediately detect when cameras are obstructed or tampered with</p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#FFB300]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-[#FFB300]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Object Detection</h3>
                <p className="text-gray-300">Identify and classify objects, people, and vehicles in real-time</p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#1F6FEB]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-8 w-8 text-[#1F6FEB]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Color Search</h3>
                <p className="text-gray-300">Quickly search for objects based on color characteristics</p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#1F6FEB]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-[#1F6FEB]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Combination Search</h3>
                <p className="text-gray-300">Advanced search combining multiple attributes and criteria</p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#FFB300]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-[#FFB300]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">False Person Detection</h3>
                <p className="text-gray-300">Distinguish between real people and representations</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Areas of Expertise
            </motion.h2>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="overflow-x-auto"
            >
              <table className="w-full border-separate border-spacing-4">
                <thead>
                  <tr className="text-left">
                    <th className="text-[#1F6FEB] text-lg p-4">Building Automation & Control</th>
                    <th className="text-[#1F6FEB] text-lg p-4">Easy Management</th>
                    <th className="text-[#FFB300] text-lg p-4">System Integration</th>
                    <th className="text-[#1F6FEB] text-lg p-4">Support Services</th>
                    <th className="text-[#1F6FEB] text-lg p-4">Energy & Systems Analytic</th>
                  </tr>
                </thead>
                <tbody>
                  <motion.tr 
                    variants={itemVariants}
                    className="hover:bg-cyan-900/10 transition-all duration-300 hover:scale-105"
                  >
                    <td className="p-4">Flexive comfort</td>
                    <td className="p-4">Customized reporting</td>
                    <td className="p-4">Multi-vendor/legacy support</td>
                    <td className="p-4">24/7 Monitoring & Response</td>
                    <td className="p-4">Risk Detection & Diagnosis</td>
                  </motion.tr>
                  <motion.tr 
                    variants={itemVariants}
                    className="hover:bg-cyan-900/10 transition-all duration-300 hover:scale-105"
                  >
                    <td className="p-4">The PA, CCTV & Marine Control</td>
                    <td className="p-4">Automation</td>
                    <td className="p-4">Web-based IoT solutions</td>
                    <td className="p-4">Alarm Management</td>
                    <td className="p-4">Operating dashboards & reporting</td>
                  </motion.tr>
                  <motion.tr 
                    variants={itemVariants}
                    className="hover:bg-cyan-900/10 transition-all duration-300 hover:scale-105"
                  >
                    <td className="p-4">Mission critical systems</td>
                    <td className="p-4">Automated Demand Response</td>
                    <td className="p-4">Wireless & Open Protocols</td>
                    <td className="p-4">Prevention Maintenance</td>
                    <td className="p-4">Predictive Maintenance</td>
                  </motion.tr>
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        {/* Platform Section */}
        <section id="platform" className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              EasyVigil Unified Platform
            </motion.h2>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              <motion.div 
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col"
              >
                <h3 className="text-2xl font-semibold mb-6">Platform Overview</h3>
                <p className="text-gray-300 mb-6 flex-grow">
                  EasyVigil is an open system that supports a full range of industry standard open protocols and web services interfaces. It links to a suite of applications for diverse interfaces designed to facilitate enterprise operations from virtually anywhere.
                </p>
                <div className="flex gap-4">
                  <button className="bg-gradient-to-r from-[#1F6FEB] to-[#FFB300] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all flex items-center">
                    <Download className="h-5 w-5 mr-2" />
                    Download Brochure
                  </button>
                  <button className="bg-transparent border border-[#1F6FEB] text-[#1F6FEB] px-6 py-3 rounded-lg font-semibold hover:bg-[#1F6FEB]/30 transition-all flex items-center">
                    <FileText className="h-5 w-5 mr-2" />
                    View PDF
                  </button>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col"
              >
                <h3 className="text-2xl font-semibold mb-6">Video Analytics Platform</h3>
                <p className="text-gray-300 mb-6 flex-grow">
                  Our AI-powered video analytics platform provides advanced capabilities for intrusion detection, camera tampering detection, object recognition, and much more. Enhance your security and operational efficiency with our cutting-edge technology.
                </p>
                <div className="flex gap-4">
                  <button className="bg-gradient-to-r from-[#FFB300] to-[#1F6FEB] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all flex items-center">
                    <Download className="h-5 w-5 mr-2" />
                    Download Analytics PDF
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Technology Partners Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Our Technology Partners
            </motion.h2>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-12"
            >
              {/* VMS & Analytics */}
              <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#1F6FEB]/20 rounded-lg flex items-center justify-center">
                    <Eye className="w-5 h-5 text-[#1F6FEB]" />
                  </div>
                  VMS & Analytics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-[#1F6FEB]/10 to-[#FFB300]/10 rounded-xl p-6 border border-[#1F6FEB]/20 hover:transform hover:-translate-y-1 transition-all duration-300">
                    <h4 className="font-semibold text-slate-100 mb-2">I2V</h4>
                    <p className="text-sm text-gray-300">Advanced VMS & Analytics Solutions</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#1F6FEB]/10 to-[#FFB300]/10 rounded-xl p-6 border border-[#1F6FEB]/20 hover:transform hover:-translate-y-1 transition-all duration-300">
                    <h4 className="font-semibold text-slate-100 mb-2">Videonetics</h4>
                    <p className="text-sm text-gray-300">Intelligent VMS & Video Analytics</p>
                  </div>
                </div>
              </motion.div>

              {/* Security & Surveillance */}
              <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#1F6FEB]/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#1F6FEB]" />
                  </div>
                  Security & Surveillance
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-[#1F6FEB]/10 to-[#FFB300]/10 rounded-xl p-6 border border-[#1F6FEB]/20 hover:transform hover:-translate-y-1 transition-all duration-300">
                    <h4 className="font-semibold text-slate-100 mb-2">Honeywell</h4>
                    <p className="text-sm text-gray-300">Fire Alarm & CCTV Systems</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#1F6FEB]/10 to-[#FFB300]/10 rounded-xl p-6 border border-[#1F6FEB]/20 hover:transform hover:-translate-y-1 transition-all duration-300">
                    <h4 className="font-semibold text-slate-100 mb-2">IDIS</h4>
                    <p className="text-sm text-gray-300">Professional CCTV Solutions</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#1F6FEB]/10 to-[#FFB300]/10 rounded-xl p-6 border border-[#1F6FEB]/20 hover:transform hover:-translate-y-1 transition-all duration-300">
                    <h4 className="font-semibold text-slate-100 mb-2">Edwards by UTC</h4>
                    <p className="text-sm text-gray-300">Fire Alarm Systems</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#1F6FEB]/10 to-[#FFB300]/10 rounded-xl p-6 border border-[#1F6FEB]/20 hover:transform hover:-translate-y-1 transition-all duration-300">
                    <h4 className="font-semibold text-slate-100 mb-2">Timewatch</h4>
                    <p className="text-sm text-gray-300">Access Control & Gate Automation</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#1F6FEB]/10 to-[#FFB300]/10 rounded-xl p-6 border border-[#1F6FEB]/20 hover:transform hover:-translate-y-1 transition-all duration-300">
                    <h4 className="font-semibold text-slate-100 mb-2">OptiExacta</h4>
                    <p className="text-sm text-gray-300">Facial Recognition Solutions</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-slate-900/90 to-slate-800/90 py-12 px-4 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  EasyVigil
                </span>
                <p className="text-gray-400 mt-2">Connect • Detect • Diagnose • Improve</p>
              </div>
              
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-[#1F6FEB] transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-[#1F6FEB] transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-[#1F6FEB] transition-colors">Contact</a>
              </div>
            </div>
            
            <div className="text-center text-gray-500 text-sm mt-8">
              &copy; 2023 EasyVigil. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
    </>
  );
}