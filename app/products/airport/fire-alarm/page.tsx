"use client";

import { motion, Variants } from "framer-motion";
import { 
  Shield, 
  Zap, 
  Bell, 
  Wifi, 
  Battery, 
  Download,
  ArrowRight,
  Play,
  Check,
  Server,
  Speaker,
  Monitor,
  Flame
} from "lucide-react";
import { SEO } from '@/components/seo/seo';
import Image from "next/image";

export default function AirportFireAlarmPage() {
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
      icon: Bell,
      title: "Early Detection",
      description: "Advanced sensors for rapid fire and smoke detection to ensure immediate response."
    },
    {
      icon: Shield,
      title: "Comprehensive Coverage",
      description: "Full airport coverage with strategically placed detectors and notification devices."
    },
    {
      icon: Wifi,
      title: "Network Integration",
      description: "IP-based system with remote monitoring and integration with other airport systems."
    },
    {
      icon: Battery,
      title: "Backup Power",
      description: "Uninterrupted operation with battery backup and generator integration."
    }
  ];

  const coreCapabilities = [
    {
      icon: Monitor,
      title: "Intelligent Addressable Detectors",
      items: [
        "Smoke detectors",
        "Heat detectors",
        "Multi-sensor detectors",
        "Beam detectors for large halls",
        "Flame detectors for fuel zones"
      ]
    },
    {
      icon: Server,
      title: "Fire Alarm Control Panels (FACP)",
      items: [
        "Redundant CPU architecture",
        "Networked panels across multiple terminals",
        "LCD / touchscreen operation",
        "Event logs & device health reports"
      ]
    },
    {
      icon: Bell,
      title: "Sounders, Strobes & Hooters",
      items: [
        "High-decibel fire sounders",
        "LED strobes for noisy areas",
        "Voice evacuation speakers",
        "Airport-grade durable housings"
      ]
    },
    {
      icon: Speaker,
      title: "Emergency Voice Evacuation System",
      items: [
        "Pre-recorded evacuation messages",
        "Multi-language support",
        "Zone-wise evacuation control",
        "Integration with PAS for priority override"
      ]
    },
    {
      icon: Flame,
      title: "Gas Suppression & Special Hazard Systems",
      items: [
        "FM200",
        "NOVEC",
        "CO₂",
        "Inert Gas Systems"
      ]
    }
  ];

  const technicalHighlights = [
    "EN-54 certified components",
    "Loop-powered, self-diagnosing detectors",
    "Fiber-networked fire panels",
    "Redundant power supply & UPS backup",
    "Automatic paging to emergency teams",
    "Event monitoring through centralized command center"
  ];

  const coverageZones = [
    "Terminal buildings (Departure/Arrival)",
    "Baggage handling system (BHS)",
    "Retail & food courts",
    "Electrical rooms & UPS rooms",
    "Data centers & communication rooms",
    "Security hold area",
    "Airside operations building",
    "Cargo & warehouse zones",
    "Parking and utility blocks"
  ];

  const systemIntegrations = [
    "PAS → Automated fire announcements",
    "CCTV → Live feed pop-ups during alarms",
    "BMS → HVAC shutdown, lift control, smoke extraction",
    "Access Control → Door release during emergencies"
  ];

  const operatorBenefits = [
    "Fastest smoke/heat detection",
    "Intelligent zone-based evacuation",
    "Centralized visibility for multiple terminals",
    "Automation reduces human error",
    "Global standards compliance",
    "Maximum passenger & staff safety"
  ];

  return (
    <>
      <SEO 
        title="Airport Fire Alarm System - Comprehensive Fire Safety Solutions"
        description="Advanced Fire Alarm Systems for airports featuring early detection, comprehensive coverage, network integration, and backup power for maximum safety compliance. Early Detection. Instant Response. Life-Safety Engineered for Airports. airport fire alarm system, addressable fire detection, aviation life safety systems, EN-54 fire system airport, fire evacuation system, airport fire protection technology"
        path="/products/airport/fire-alarm"
        image="/images/og-airport-fire-alarm.jpg"
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
                    <Flame className="w-4 h-4 mr-2" />
                    Airport Safety Solution
                  </motion.div>
                  
                  <motion.h1 
                    variants={itemVariants}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900"
                  >
                    Fire Alarm{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      System
                    </span>
                  </motion.h1>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-xl text-gray-600 mb-2 max-w-2xl leading-relaxed"
                  >
                    Early Detection. Instant Response. Life-Safety Engineered for Airports.
                  </motion.p>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed"
                  >
                    Airports are complex facilities with continuous movement of passengers, aircraft, luggage, fuel, and critical equipment. A Fire Alarm System must be ultra-reliable, intelligent, and compliant with global aviation safety standards.
                  </motion.p>
                  
                  <motion.div 
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <a 
                      href="/contact" 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
                    >
                      Contact Us
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  initial="hidden"
                  animate="visible"
                  variants={floatAnimation}
                  className="relative"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                    <Image
                      src="https://plus.unsplash.com/premium_photo-1661504982445-612e56b34182?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Airport Fire Alarm System"
                      width={600}
                      height={400}
                      className="object-cover w-full h-96"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-bold">Fire Alarm System</h3>
                      <p className="mt-2 opacity-90">Maximum Safety for Airports</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Why Fire Alarms Are Mission-Critical Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-red-50">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Why Fire Alarms Are Mission-Critical at Airports
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Airports cannot afford delays in detection or evacuation. A modern fire alarm system ensures:
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerChildren}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
              >
                {[
                  "Early smoke/heat detection",
                  "Automated emergency responses",
                  "Real-time alerts to control rooms",
                  "Rapid coordination with fire & rescue teams",
                  "Full compliance with DGCA, NFPA, and ICAO safety norms"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <p className="text-gray-800 font-medium">{item}</p>
                    </div>
                  </motion.div>
                ))}
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
                  A fully integrated Addressable Fire Alarm & Life Safety System that monitors thousands of devices across the airport.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-red-50">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Advanced Safety Features
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Cutting-edge technology designed to ensure rapid detection and response in emergency situations.
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
                    <div className="w-14 h-14 bg-gradient-to-r from-red-100 to-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-7 h-7 text-red-600" />
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
                      <div className="w-16 h-16 bg-gradient-to-r from-red-100 to-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <capability.icon className="w-8 h-8 text-red-600" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-5">
                          {capability.title}
                        </h3>
                        
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {capability.items.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-red-50 transition-colors duration-200">
                              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
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
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-red-50">
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
                      <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
                  Fire Alarm Coverage Zones
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
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">{zone}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* System Integrations Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-red-50">
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
                  Technify integrates Fire Alarm System with:
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
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
                  This creates a single, intelligent life-safety ecosystem.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Components Section */}
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
                      src="https://images.unsplash.com/photo-1757191376988-45331123a8dc?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Fire Alarm System Components"
                      width={600}
                      height={400}
                      className="object-cover w-full h-96"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-bold">System Components</h3>
                      <p className="mt-2 opacity-90">Complete Fire Safety Infrastructure</p>
                    </div>
                  </div>
                  
                  {/* Floating badge */}
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-2xl shadow-xl">
                    <div className="flex items-center">
                      <Check className="w-6 h-6 mr-2" />
                      <span className="font-bold">EN-54 Certified</span>
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
                    Key Components
                  </motion.h2>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-lg text-gray-600 mb-8 leading-relaxed"
                  >
                    Our Fire Alarm System includes all essential components for comprehensive fire safety coverage.
                  </motion.p>
                  
                  <motion.div 
                    variants={staggerChildren}
                    className="space-y-5"
                  >
                    {[
                      "Smoke detectors",
                      "Heat sensors",
                      "Manual call points",
                      "Sounders and beacons",
                      "Control panels",
                      "Emergency lighting"
                    ].map((component, index) => (
                      <motion.div 
                        key={index}
                        variants={fadeInUp}
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50 border border-gray-100 transition-all duration-300 group"
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Bell className="h-4 w-4 text-white" />
                        </div>
                        <div className="font-medium text-gray-900 group-hover:text-gray-900">{component}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-red-50">
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Airport Fire Safety?</h2>
                <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
                  Contact our experts to discuss how our Fire Alarm System can protect your airport.
                </p>
                
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}