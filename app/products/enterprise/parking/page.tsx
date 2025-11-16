"use client";

import { motion, Variants } from "framer-motion";
import { 
  Car, 
  Scan, 
  UserCheck, 
  QrCode, 
  MapPin, 
  BarChart3,
  Shield,
  Eye,
  Zap,
  Download,
  ArrowRight,
  Play,
  Ticket,
  Lock,
  Check,
  HardDrive,
  Monitor
} from "lucide-react";
import { SEO } from '@/components/seo/seo';
import Image from "next/image";

export default function EnterpriseParkingPage() {
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

  const coreCapabilities = [
    {
      title: "ANPR (Automatic Number Plate Recognition)",
      points: [
        "Automated vehicle entry & exit",
        "High accuracy in day/night conditions",
        "Identifies employees, visitors & vendors",
        "Blacklist/whitelist alerts",
        "Event logging for every vehicle"
      ]
    },
    {
      title: "RFID-Based Staff Parking",
      points: [
        "RFID tags for employees & management staff",
        "Auto barrier opening",
        "Time-based access controls",
        "Reserved slot management"
      ]
    },
    {
      title: "Ticketless Visitor Parking",
      points: [
        "QR-based or mobile-based entry",
        "Visitor pass integration",
        "Automated duration tracking",
        "Smooth exit process for guests"
      ]
    },
    {
      title: "Smart Parking Guidance",
      points: [
        "LED indicators for available slots",
        "Digital signage for directions",
        "Zone-wise occupancy tracking",
        "Floor-level dashboards"
      ]
    },
    {
      title: "Boom Barriers & Access Control",
      points: [
        "High-speed boom barriers",
        "Anti-tailgating sensors",
        "Integration with turnstiles & access systems",
        "Emergency override capability"
      ]
    },
    {
      title: "Centralized Parking Management Dashboard",
      points: [
        "Real-time vehicle movement",
        "Occupancy analytics",
        "Overstay alerts",
        "Role-based user access",
        "Revenue tracking (for paid/commercial campuses)"
      ]
    },
    {
      title: "Security Layer Integration",
      points: [
        "CCTV feeds linked to vehicle entry events",
        "Tampering alerts",
        "Incident recording",
        "Emergency broadcast integration"
      ]
    }
  ];

  const technicalHighlights = [
    "AI-driven ANPR engine",
    "Gigabit fiber/Wi-Fi integration",
    "Industrial-grade cameras & sensors",
    "Redundant servers with backup storage",
    "Real-time health monitoring of devices",
    "API-ready for HR/ERP integration",
    "Cloud or on-prem deployment options"
  ];

  const deploymentAreas = [
    "Corporate office parking",
    "IT parks & tech campuses",
    "Business towers",
    "SEZ zones",
    "Commercial office complexes",
    "Mixed-use developments",
    "Visitor reception parking",
    "Multi-level/basement parking"
  ];

  const integrations = [
    "CCTV → Video verification for every entry/exit",
    "Access Control → Staff entry-to-office sync",
    "BMS → Lighting automation based on vehicle flow",
    "HRMS → Employee parking allocation",
    "Digital Signage → Real-time availability display"
  ];

  const benefits = [
    "Faster vehicle flow at peak hours",
    "Organized parking allocation",
    "Higher security and tracking",
    "Reduced manual effort & staffing costs",
    "Better visitor experience",
    "Analytics-driven decision-making",
    "Zero congestion and smoother operations"
  ];

  return (
    <>
      <SEO 
        title="Enterprise Parking Management System - ANPR Corporate Parking Automation"
        description="AI-powered parking management systems for enterprises featuring ANPR, RFID, smart guidance, real-time dashboards, and integration with security systems for seamless employee and visitor experience."
        path="/products/enterprise/parking"
      />
      
      {/* Main content */}
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
                    Smart Access. Organized Parking. Seamless Employee & Visitor Experience.
                  </motion.div>
                  
                  <motion.h1 
                    variants={itemVariants}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900"
                  >
                    Parking Management{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      System
                    </span>
                  </motion.h1>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed"
                  >
                    AI-powered, fully automated Parking Management Systems that ensure smooth entry/exit, intelligent parking allocation, and complete visibility of vehicle movement.
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
                      src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFya2luZyUyMG1hbmFnZW1lbnQlMjBzeXN0ZW18ZW58MHx8MHx8fDA%3D" 
                      alt="Enterprise Parking Management System" 
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
                  Why Smart Parking Matters for Enterprises
                </motion.h2>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
                >
                  A modern parking system helps organizations avoid congestion, improve security, and enhance the overall workplace experience.
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
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Efficiency</h3>
                    <p className="text-gray-600">Faster vehicle flow at peak hours with organized parking allocation and reduced manual effort.</p>
                  </motion.div>
                  
                  <motion.div 
                    variants={fadeInUp}
                    className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                  >
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                      <Shield className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Security</h3>
                    <p className="text-gray-600">Higher security and tracking with automated monitoring and incident recording.</p>
                  </motion.div>
                  
                  <motion.div 
                    variants={fadeInUp}
                    className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                      <Car className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Experience</h3>
                    <p className="text-gray-600">Better visitor experience with seamless entry/exit and smooth parking guidance.</p>
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
                      src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcmtpbmd8ZW58MHx8MHx8fDA%3D" 
                      alt="Complete Parking Management System" 
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
                    A complete, integrated parking ecosystem powered by ANPR cameras, RFID, automation, and real-time dashboards.
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
                        <h3 className="font-semibold text-gray-900 mb-1">Complete Ecosystem</h3>
                        <p className="text-gray-600 text-sm">End-to-end parking management from entry to exit with integrated security.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-gray-200">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mt-1">
                        <HardDrive className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Smart Technology</h3>
                        <p className="text-gray-600 text-sm">AI-driven ANPR engine with real-time analytics and reporting capabilities.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-gray-200">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mt-1">
                        <Zap className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Seamless Integration</h3>
                        <p className="text-gray-600 text-sm">Connects with existing enterprise systems for unified operations.</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Core Capabilities Section */}
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
                  Core Capabilities
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Comprehensive parking management features designed for enterprise environments.
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {coreCapabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-gradient-to-b from-white to-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        {index === 0 && <Scan className="w-6 h-6 text-white" />}
                        {index === 1 && <UserCheck className="w-6 h-6 text-white" />}
                        {index === 2 && <QrCode className="w-6 h-6 text-white" />}
                        {index === 3 && <MapPin className="w-6 h-6 text-white" />}
                        {index === 4 && <BarChart3 className="w-6 h-6 text-white" />}
                        {index === 5 && <Monitor className="w-6 h-6 text-white" />}
                        {index === 6 && <Shield className="w-6 h-6 text-white" />}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{capability.title}</h3>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {capability.points.map((point, idx) => (
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
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
                    Technical Highlights
                  </motion.h2>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-lg text-gray-600 mb-8 leading-relaxed"
                  >
                    Our parking management system leverages cutting-edge technologies for optimal performance and reliability.
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
                      src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBhcmtpbmd8ZW58MHx8MHx8fDA%3D" 
                      alt="Parking Technical Highlights" 
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
                  Where Systems Are Deployed
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                  Our parking management solutions are ideal for various enterprise environments.
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
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
                  Creating a connected mobility ecosystem inside the enterprise.
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
                  Everything runs on a single, intelligent parking management platform.
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
                      src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBhcmtpbmd8ZW58MHx8MHx8fDA%3D" 
                      alt="Enterprise Parking Benefits" 
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
                    Transform your parking operations with measurable improvements.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Enterprise Parking?</h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
                  Contact our experts to discuss how our Parking Management System can enhance your enterprise facility.
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