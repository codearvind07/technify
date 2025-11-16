"use client";

import { motion, Variants } from "framer-motion";
import { 
  Monitor, 
  Database, 
  Wifi, 
  RefreshCw, 
  Smartphone, 
  Download,
  ArrowRight,
  Play,
  Check,
  Server,
  Shield,
  Zap,
  Eye,
  AlertTriangle,
  Users,
  Clock
} from "lucide-react";
import { SEO } from '@/components/seo/seo';
import Image from "next/image";

export default function RailwayPIDSPage() {
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

  const coreCapabilities = [
    {
      icon: Database,
      title: "Real-Time Train Data Integration",
      items: [
        "Automated updates from CC/traffic control",
        "Instant platform changes",
        "Delay/skip updates",
        "Route & interchange data",
        "API integration with metro OCC systems"
      ]
    },
    {
      icon: Monitor,
      title: "High-Brightness Display Systems",
      items: [
        "LED/LCD platform displays",
        "Concourse display boards",
        "Coach/door-side LED bars",
        "Large format video walls",
        "Sunlight-readable outdoor screens"
      ]
    },
    {
      icon: Server,
      title: "Smart Backend & Control Software",
      items: [
        "Centralized content management",
        "Real-time dashboard",
        "Multi-language screen templates",
        "Priority message broadcast",
        "Emergency overlays",
        "Custom layouts for train arrivals, departures, route maps"
      ]
    },
    {
      icon: Users,
      title: "Multilingual Support",
      items: [
        "English",
        "Hindi",
        "Regional languages (customizable)"
      ]
    },
    {
      icon: Zap,
      title: "Audio Synchronization",
      items: [
        "PIDS integrates with PAS",
        "Auto announcements triggered with display updates"
      ]
    },
    {
      icon: Shield,
      title: "Redundancy & High Availability",
      items: [
        "Dual servers",
        "Auto failover",
        "Backup syncing",
        "Health monitoring for each display"
      ]
    }
  ];

  const technicalHighlights = [
    "Gigabit communication backbone",
    "API/XML/JSON integration capabilities",
    "Real-time screen health monitoring",
    "High-brightness 3000–5000 nits displays",
    "Wide viewing angle visibility",
    "Dust & vibration-resistant hardware",
    "SLA-backed maintenance"
  ];

  const coverageZones = [
    "Metro platforms",
    "Railway station platforms",
    "Concourse & ticketing areas",
    "Interchange/passenger flow points",
    "Parking & entry areas (for wayfinding)",
    "Train doors (LED route bars)",
    "On escalators/FOBs for guidance"
  ];

  const systemIntegrations = [
    "PAS → Auto synchronized audio announcements",
    "CCTV → Crowd alerts display",
    "Fire Alarm System → Emergency messages",
    "Access Control → Restricted area signage",
    "BMS → Energy scheduling"
  ];

  const operatorBenefits = [
    "Reduced crowding & passenger confusion",
    "Smooth peak-hour movement",
    "Accurate & real-time information",
    "Multilingual flexibility",
    "Better coordination across stations",
    "Minimal manual intervention",
    "Enhanced passenger experience"
  ];

  return (
    <>
      <SEO 
        title="PIDS - Passenger Information Display System for Railways"
        description="Advanced Passenger Information Display Systems featuring real-time updates, data integration, network connectivity, and multi-platform access for enhanced passenger experience. railway pids system, metro passenger information display, train arrival display, real-time railway display system, pids software metro, digital signage for railways"
        path="/products/railway/pids"
        image="/images/og-railway-pids.jpg"
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
                    <Monitor className="w-4 h-4 mr-2" />
                    Railway Information Solution
                  </motion.div>
                  
                  <motion.h1 
                    variants={itemVariants}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900"
                  >
                    Passenger Information{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Display System
                    </span>
                  </motion.h1>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-xl text-gray-600 mb-2 max-w-2xl leading-relaxed"
                  >
                    Real-Time Train Information. Clear Guidance. Smooth Passenger Flow.
                  </motion.p>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed"
                  >
                    The Passenger Information Display System (PIDS) is the digital communication engine of every railway & metro station. Passengers rely on PIDS for platform details, train timings, route updates, interchange guidance, delays, and safety messages.
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
                      src="https://images.unsplash.com/photo-1652419482893-2240baa82cc2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Railway Passenger Information Display System"
                      width={600}
                      height={400}
                      className="object-cover w-full h-96"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-bold">Passenger Information Display</h3>
                      <p className="mt-2 opacity-90">Real-Time Train Data for Passengers</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Why PIDS Is Essential Section */}
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
                  Why PIDS Is Essential for Railways & Metro
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  A modern PIDS helps stations:
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerChildren}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {[
                  "Reduce crowding and confusion",
                  "Speed up passenger movement",
                  "Communicate real-time train status",
                  "Provide multilingual information",
                  "Ensure smooth peak-hour operations",
                  "Deliver safety & emergency messages instantly"
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
                  PIDS is crucial for urban, high-density travel systems.
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
                  A complete, integrated PIDS ecosystem — from backend data servers to LED/LCD passenger-facing displays.
                </p>
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
                        
                        {index === 1 && (
                          <p className="mt-4 text-gray-600 italic">
                            Suitable for indoor and outdoor use:
                          </p>
                        )}
                        {index === 1 && (
                          <p className="mt-2 text-gray-600 italic">
                            Built for 24×7 railway duty cycles.
                          </p>
                        )}
                        {index === 3 && (
                          <p className="mt-4 text-gray-600 italic">
                            Ensures clarity for diverse passenger groups.
                          </p>
                        )}
                        {index === 4 && (
                          <p className="mt-4 text-gray-600 italic">
                            Perfect for high-noise platforms.
                          </p>
                        )}
                        {index === 5 && (
                          <p className="mt-4 text-gray-600 italic">
                            Ensures no information blackout.
                          </p>
                        )}
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

          {/* Where PIDS Is Used Section */}
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
                  Where PIDS Is Used
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
                  Technify integrates PIDS with:
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerChildren}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                  Creates a complete passenger information ecosystem.
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
                      src="https://images.unsplash.com/photo-1593694604972-f84372519abc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFBhc3NlbmdlciUyMEluZm9ybWF0aW9uJTIwRGlzcGxheSUyMFJlYWwtVGltZSUyMFRyYWluJTIwRGF0YSUyMGZvciUyMFBhc3NlbmdlcnN8ZW58MHx8MHx8fDA%3D"
                      alt="PIDS System Components"
                      width={600}
                      height={400}
                      className="object-cover w-full h-96"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-bold">System Components</h3>
                      <p className="mt-2 opacity-90">Complete PIDS Infrastructure</p>
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
                    Our Passenger Information Display System includes all essential components for comprehensive passenger information.
                  </motion.p>
                  
                  <motion.div 
                    variants={staggerChildren}
                    className="space-y-5"
                  >
                    {[
                      "Data servers",
                      "Display controllers",
                      "High-brightness screens",
                      "Network infrastructure",
                      "Central management software",
                      "Mobile applications"
                    ].map((component, index) => (
                      <motion.div 
                        key={index}
                        variants={fadeInUp}
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 border border-gray-100 transition-all duration-300 group"
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Monitor className="h-4 w-4 text-white" />
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
                  Benefits for Railway Operators
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Improve Passenger Information?</h2>
                <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
                  Contact our experts to discuss how our PIDS can enhance the passenger experience at your railway network.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact" 
                    className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center group"
                  >
                    Get in Touch
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