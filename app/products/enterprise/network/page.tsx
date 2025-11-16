"use client";

import { motion, Variants } from "framer-motion";
import { 
  Wifi, 
  Server, 
  Cloud, 
  Shield, 
  Zap, 
  Download,
  FileText,
  ArrowRight,
  Play,
  Cable,
  Router,
  Lock,
  Check,
  HardDrive,
  Monitor
} from "lucide-react";
import { SEO } from '@/components/seo/seo';
import Image from "next/image";

export default function EnterpriseNetworkPage() {
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

  const passiveSolutions = [
    {
      title: "Structured Cabling Systems",
      points: [
        "Cat6 / Cat6A / Cat7 cabling",
        "Fiber optic cabling",
        "FTTx deployment",
        "Internal/external OFC links",
        "Patch panels & intelligent cabling"
      ]
    },
    {
      title: "Data Center Cabling",
      points: [
        "Server rack cabling",
        "Fiber backbone",
        "Redundant pathways",
        "High-density cabling solutions"
      ]
    },
    {
      title: "Rack & Cabinet Solutions",
      points: [
        "Wall-mount & floor-standing racks",
        "Cable management",
        "Cooling-friendly ventilation",
        "Power rail integration"
      ]
    },
    {
      title: "Cable Testing & Certification",
      points: [
        "Fluke testing",
        "OTDR testing for fiber",
        "Compliance reports"
      ]
    }
  ];

  const activeSolutions = [
    {
      title: "Core, Distribution & Access Switching",
      points: [
        "Layer 2 & Layer 3 switches",
        "Managed PoE switches for CCTV & Wi-Fi",
        "High-throughput backbone switches",
        "Redundant switching topology"
      ]
    },
    {
      title: "Enterprise Routers",
      points: [
        "Secure routing",
        "WAN/LAN connectivity",
        "Multi-SIM/ISP failover",
        "MPLS/SD-WAN compatibility"
      ]
    },
    {
      title: "Enterprise Wi-Fi Solutions",
      points: [
        "High-density access points",
        "Seamless roaming",
        "Wi-Fi 6 / Wi-Fi 6E support",
        "Guest network with captive portal",
        "Heatmap-based RF planning"
      ]
    },
    {
      title: "Network Security",
      points: [
        "Firewalls",
        "Intrusion Prevention Systems (IPS)",
        "VPN solutions",
        "Zero Trust & NAC (optional)",
        "Content filtering & threat protection"
      ]
    }
  ];

  const technicalHighlights = [
    "Gigabit & 10G fiber backbone",
    "Redundant ring topology",
    "VLAN-based segmentation",
    "QoS for VoIP & video traffic",
    "SNMP network monitoring",
    "Secure authentication (802.1x)",
    "Network uptime optimization (SLA-backed)"
  ];

  const deploymentAreas = [
    "Corporate offices",
    "IT parks & campuses",
    "Retail chains",
    "Data centers",
    "Manufacturing plants",
    "Warehouses",
    "Banking & finance institutions",
    "Educational institutions"
  ];

  const integrations = [
    "CCTV Surveillance",
    "BMS",
    "Fire Alarm System",
    "Access Control",
    "Wi-Fi",
    "Data Center systems",
    "Cloud applications"
  ];

  const benefits = [
    "High-speed and stable connectivity",
    "Zero network downtime",
    "Secure and encrypted communication",
    "Seamless Wi-Fi for employees & guests",
    "Future-ready fiber backbone",
    "Centralized network monitoring",
    "Optimized IT operations and performance"
  ];

  return (
    <>
      <SEO 
        title="Enterprise Network Infrastructure - Active & Passive Networking Solutions"
        description="Comprehensive enterprise network infrastructure solutions including structured cabling, wireless systems, cloud integration, and network security for reliable business connectivity. enterprise network solutions, active passive networking, structured cabling services, enterprise wifi solutions, corporate network infrastructure, data center networking"
        path="/products/enterprise/network"
        image="/images/og-enterprise-network.jpg"
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
                    className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6"
                  >
                    High-Speed Connectivity. Reliable Infrastructure. Zero Downtime for Modern Enterprises.
                  </motion.div>
                  
                  <motion.h1 
                    variants={itemVariants}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900"
                  >
                    Active & Passive{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Network Solutions
                    </span>
                  </motion.h1>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed"
                  >
                    Comprehensive networking solutions designed to provide reliable, secure, and scalable connectivity 
                    for enterprise environments with both active and passive infrastructure components.
                  </motion.p>
                </motion.div>
                
                <motion.div 
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className="relative"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                    <Image 
                      src="https://plus.unsplash.com/premium_photo-1744345196324-94c618a49bc3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QWN0aXZlJTIwJTI2JTIwUGFzc2l2ZSUyME5ldHdvcmslMjBTb2x1dGlvbnN8ZW58MHx8MHx8fDA%3D" 
                      alt="Enterprise Network Infrastructure" 
                      width={600} 
                      height={400} 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Importance Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="text-center mb-16"
              >
                <motion.h2 
                  variants={itemVariants}
                  className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
                >
                  Why Strong Network Infrastructure Matters
                </motion.h2>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
                >
                  Every enterprise runs on a strong network backbone. Whether it's IT operations, cloud applications, video conferencing, ERP systems, or security infrastructure — everything depends on a fast, stable, and secure network.
                </motion.p>
                
                <motion.div 
                  variants={staggerChildren}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  <motion.div 
                    variants={fadeInUp}
                    className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                      <Zap className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">High Performance</h3>
                    <p className="text-gray-600">High-speed communication and stable access to business applications for enhanced productivity.</p>
                  </motion.div>
                  
                  <motion.div 
                    variants={fadeInUp}
                    className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                  >
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                      <Shield className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Security & Reliability</h3>
                    <p className="text-gray-600">Secure data transfer and non-stop cloud operations with real-time monitoring capabilities.</p>
                  </motion.div>
                  
                  <motion.div 
                    variants={fadeInUp}
                    className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                      <Wifi className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Collaboration</h3>
                    <p className="text-gray-600">Smooth video calls & collaboration tools for modern enterprise communication needs.</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* What We Deliver Section */}
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
                    <Image 
                      src="https://images.unsplash.com/photo-1625014618427-fbc980b974f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fEFjdGl2ZSUyMCUyNiUyMFBhc3NpdmUlMjBOZXR3b3JrJTIwU29sdXRpb25zfGVufDB8fDB8fHww" 
                      alt="Complete Network Infrastructure" 
                      width={600} 
                      height={400} 
                      className="w-full h-auto object-cover"
                    />
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
                    What Technify Delivers
                  </motion.h2>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-lg text-gray-600 mb-8 leading-relaxed"
                  >
                    A complete network infrastructure — from structured cabling to advanced core switching and wireless networks.
                  </motion.p>
                  
                  <motion.div 
                    variants={itemVariants}
                    className="space-y-4"
                  >
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-gray-200">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mt-1">
                        <Check className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">End-to-End Solutions</h3>
                        <p className="text-gray-600 text-sm">Comprehensive coverage from physical cabling to advanced network security.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-gray-200">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mt-1">
                        <Server className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Scalable Architecture</h3>
                        <p className="text-gray-600 text-sm">Designed to grow with your enterprise across multiple locations and facilities.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-gray-200">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mt-1">
                        <Zap className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">High Performance</h3>
                        <p className="text-gray-600 text-sm">Gigabit speeds and low latency for demanding enterprise applications.</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Passive Network Solutions Section */}
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
                  PASSIVE NETWORK SOLUTIONS
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  (The physical foundation of your network)
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {passiveSolutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-gradient-to-b from-white to-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <Cable className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {solution.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          </div>
                          <span className="text-gray-600 text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Active Network Solutions Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  ACTIVE NETWORK SOLUTIONS
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  (The brain of your network)
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {activeSolutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-gradient-to-b from-white to-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <Router className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {solution.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          </div>
                          <span className="text-gray-600 text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Technical Highlights Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                    Technical Architecture Highlights
                  </motion.h2>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-lg text-gray-600 mb-8 leading-relaxed"
                  >
                    Cutting-edge technology designed to meet the connectivity demands of modern enterprises with reliability and security.
                  </motion.p>
                  
                  <motion.div 
                    variants={staggerChildren}
                    className="grid grid-cols-1 gap-4"
                  >
                    {technicalHighlights.map((highlight, index) => (
                      <motion.div 
                        key={index}
                        variants={fadeInUp}
                        className="flex items-center gap-4 p-4 rounded-lg bg-white border border-gray-200"
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                          <Zap className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="font-medium text-gray-900">{highlight}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
                
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className="relative"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                    <Image 
                      src="https://images.unsplash.com/photo-1673195059241-051641a66132?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fEFjdGl2ZSUyMCUyNiUyMFBhc3NpdmUlMjBOZXR3b3JrJTIwU29sdXRpb25zfGVufDB8fDB8fHww" 
                      alt="Network Technical Highlights" 
                      width={600} 
                      height={400} 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Deployment Areas Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Where We Deploy Network Solutions
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                  Strategic placement across all critical enterprise environments for comprehensive connectivity.
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {deploymentAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-gray-200"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mt-1">
                      <Monitor className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="font-medium text-gray-900">{area}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* System Integrations Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="text-center mb-16"
              >
                <motion.h2 
                  variants={itemVariants}
                  className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
                >
                  System Integrations
                </motion.h2>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto"
                >
                  Seamless connectivity with existing enterprise infrastructure for enhanced operational efficiency.
                </motion.p>
                
                <motion.div 
                  variants={staggerChildren}
                  className="max-w-4xl mx-auto space-y-4"
                >
                  {integrations.map((integration, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center gap-4 p-6 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200 shadow-sm"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium text-gray-900">{integration}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-lg text-gray-600 mt-8 max-w-3xl mx-auto"
                >
                  Everything runs on a single, intelligent network backbone.
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* Benefits Section */}
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
                    <Image 
                      src="https://plus.unsplash.com/premium_photo-1744345196350-c55cd2b28cab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fEFjdGl2ZSUyMCUyNiUyMFBhc3NpdmUlMjBOZXR3b3JrJTIwU29sdXRpb25zfGVufDB8fDB8fHww" 
                      alt="Enterprise Network Benefits" 
                      width={600} 
                      height={400} 
                      className="w-full h-auto object-cover"
                    />
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
                    Benefits for Enterprises
                  </motion.h2>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-lg text-gray-600 mb-8 leading-relaxed"
                  >
                    Our Network Infrastructure solutions provide reliable connectivity tailored for enterprise environments.
                  </motion.p>
                  
                  <motion.div 
                    variants={staggerChildren}
                    className="grid grid-cols-1 gap-4"
                  >
                    {benefits.map((benefit, index) => (
                      <motion.div 
                        key={index}
                        variants={fadeInUp}
                        className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200"
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                          <Check className="h-5 w-5 text-white" />
                        </div>
                        <div className="font-medium text-gray-900">{benefit}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center text-white"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Your Network?</h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
                  Contact our experts to discuss how our Network Infrastructure solutions can power your enterprise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact" 
                    className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg flex items-center justify-center"
                  >
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
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