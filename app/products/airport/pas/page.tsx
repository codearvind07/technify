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
  Play,
  Check,
  Server,
  Speaker,
  Monitor,
  Shield
} from "lucide-react";
import { SEO } from '@/components/seo/seo';
import Image from "next/image";

export default function AirportPASPage() {
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

  const floatAnimation: Variants = {
    hidden: { y: 0 },
    visible: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
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
    "Terminal announcements",
    "Gate information",
    "Emergency notifications",
    "Background music",
    "Boarding calls",
    "Security alerts"
  ];

  const coreCapabilities = [
    {
      icon: Server,
      title: "Digital & IP-Based Audio System",
      items: [
        "Fully IP-enabled architecture",
        "Fiber-backbone audio distribution",
        "Audio over network (AoIP)",
        "Redundant amplifiers & controllers"
      ]
    },
    {
      icon: Speaker,
      title: "Airport-Grade Loudspeakers",
      items: [
        "High-power ceiling and column speakers",
        "Directional speakers for terminals",
        "Weatherproof outdoor speakers for airside",
        "Noise-adaptive output control"
      ]
    },
    {
      icon: Monitor,
      title: "Zone-Based Announcements",
      items: [
        "Terminal-wise zones",
        "Gate-wise announcements",
        "Baggage area announcements",
        "Priority-based emergency zones"
      ]
    },
    {
      icon: Mic,
      title: "Automated & Pre-Recorded Messages",
      items: [
        "Auto announcements for flight boarding",
        "Gate changes",
        "Delay updates",
        "Emergency evacuation messages"
      ]
    },
    {
      icon: Monitor,
      title: "Centralized Audio Control Console",
      items: [
        "Touch-panel based UI",
        "Live mic announcements",
        "Real-time volume control",
        "Fault and health monitoring"
      ]
    }
  ];

  const technicalHighlights = [
    "EN 54-compliant equipment",
    "24×7 redundancy",
    "Auto amplifier switching",
    "Fail-safe loop design",
    "Integrated UPS backup",
    "Remote monitoring & analytics"
  ];

  const coverageZones = [
    "Terminals (departures & arrivals)",
    "Boarding gates",
    "Check-in counters",
    "Immigration & customs",
    "Baggage claim area",
    "Food courts & retail zones",
    "Apron & airside (optional)",
    "Parking and access roads"
  ];

  const systemIntegrations = [
    "FIDS for auto-flight announcements",
    "CCTV for incident-triggered alerts",
    "Fire Alarm System for evacuation",
    "BMS for central facility control"
  ];

  const operatorBenefits = [
    "Clear communication even in noisy environments",
    "Faster passenger movement",
    "Fewer missed flights due to unclear announcements",
    "Efficient crowd flow during peak hours",
    "High reliability with zero outage",
    "Fully compliant with aviation safety standards"
  ];

  return (
    <>
      <SEO 
        title="Airport Public Address System (PAS) - Clear Communication Solutions"
        description="Advanced Public Address Systems for airports featuring high-quality audio, IP-based networking, priority override, and zone control. Crystal-clear announcements with zero downtime for total airport coverage. IP-based audio system for airports, aviation announcement system, EN-54 PAS, airport communication system."
        path="/products/airport/pas"
        image="/images/og-airport-pas.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
        <main>
          {/* Hero Section */}
          <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden -z-10">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
            </div>
            
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div 
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >
                  <motion.div 
                    variants={itemVariants}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium"
                  >
                    <Shield className="w-4 h-4 mr-2" />
                    Airport Communication Solution
                  </motion.div>
                  
                  <motion.h1 
                    variants={itemVariants}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900"
                  >
                    Public Address{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      System
                    </span>
                  </motion.h1>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-xl text-gray-600 mb-2 max-w-2xl leading-relaxed"
                  >
                    Crystal-Clear Announcements. Zero Downtime. Total Coverage.
                  </motion.p>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed"
                  >
                    The Public Address System (PAS) is the voice of the airport — guiding passengers, managing crowd movement, and enabling fast communication during normal and emergency operations.
                  </motion.p>
                  
                  
                </motion.div>
                
                <motion.div 
                  initial="hidden"
                  animate="visible"
                  variants={floatAnimation}
                  className="relative"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                    <Image
                      src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                      alt="Airport Public Address System"
                      width={600}
                      height={400}
                      className="object-cover w-full h-96"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-bold">Public Address System</h3>
                      <p className="mt-2 opacity-90">Clear Communication for Airports</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Why PAS Is Critical Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Why PAS Is Critical for Airports
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Airports need announcements that are:
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerChildren}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {[
                  "Loud and clear",
                  "Instantly deliverable",
                  "Zone-wise controllable",
                  "Redundant (no single point of failure)"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <p className="text-gray-800 font-medium">{item}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mt-12"
              >
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Passenger guidance, safety communication, gate changes, emergency alerts — all depend on a reliable PAS network.
                </p>
              </motion.div>
            </div>
          </section>

          {/* What Technify Delivers Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  What Technify Delivers
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  A modern, network-based PAS with IP-audio distribution, intelligent control, and seamless integration with airport systems.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Advanced Communication Features
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Cutting-edge technology designed to ensure clear and reliable communication throughout airport facilities.
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerChildren}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Core Capabilities Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Core Capabilities
                </h2>
              </motion.div>
              
              <div className="space-y-8">
                {coreCapabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-lg rounded-2xl p-8 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <capability.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-5">
                          {capability.title}
                        </h3>
                        
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {capability.items.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors duration-200">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span className="text-gray-700 font-medium">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Technical Highlights Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Technical Highlights
                </h2>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerChildren}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {technicalHighlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <p className="text-gray-800 font-medium">{highlight}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Coverage Zones Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  PAS Coverage Zones in Airports
                </h2>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerChildren}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {coverageZones.map((zone, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.03 }}
                    className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">{zone}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* System Integrations Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  System Integrations
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Technify integrates PAS with:
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerChildren}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {systemIntegrations.map((integration, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <p className="text-gray-800 font-medium">{integration}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mt-12"
              >
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  This ensures one unified communication platform for the entire airport.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Applications Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                  className="relative"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                    <Image
                      src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                      alt="Airport Communication Control Room"
                      width={600}
                      height={400}
                      className="object-cover w-full h-96"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-bold">Communication Applications</h3>
                      <p className="mt-2 opacity-90">Versatile System for All Airport Needs</p>
                    </div>
                  </div>
                  
                  {/* Floating badge */}
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-2xl shadow-xl">
                    <div className="flex items-center">
                      <Check className="w-6 h-6 mr-2" />
                      <span className="font-bold">EN 54 Compliant</span>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
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
                    Our Public Address System is designed to handle all communication needs in an airport environment.
                  </motion.p>
                  
                  <motion.div 
                    variants={staggerChildren}
                    className="space-y-5"
                  >
                    {applications.map((application, index) => (
                      <motion.div 
                        key={index}
                        variants={fadeInUp}
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 border border-gray-100 transition-all duration-300 group"
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Zap className="h-4 w-4 text-white" />
                        </div>
                        <div className="font-medium text-gray-900 group-hover:text-gray-900">{application}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Benefits for Airport Operators
                </h2>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerChildren}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {operatorBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <p className="text-gray-800 font-medium">{benefit}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center text-white"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Improve Airport Communication?</h2>
                <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
                  Contact our experts to discuss how our Public Address System can enhance communication at your airport.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                 

                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}