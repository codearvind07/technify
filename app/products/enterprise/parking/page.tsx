"use client";

import { motion, Variants } from "framer-motion";
import {
  Car,
  Scan,
  UserCheck,
  QrCode,
  BarChart3,
  Shield,
  Zap,
  ArrowRight,
  Check,
  HardDrive,
  Monitor,
  MapPin,
} from "lucide-react";
import { SEO } from '@/components/seo/seo';
import Image from "next/image";
import hero from "@/assets/Parkingenterprice.jpg"
import hero1 from "@/assets/parkingenterprice1.jpg"
import hero2 from "@/assets/parkingenterprice2.jpg"

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
    "✔ Faster vehicle flow at peak hours",
    "✔ Organized parking allocation",
    "✔ Higher security and tracking",
    "✔ Reduced manual effort & staffing costs",
    "✔ Better visitor experience",
    "✔ Analytics-driven decision-making",
    "✔ Zero congestion and smoother operations"
  ];

  return (
    <>
      <SEO
        title="Enterprise Parking Management System | ANPR Corporate Parking"
        description="Technify provides AI-powered, fully automated Parking Management Systems for enterprises, ensuring smooth entry/exit, intelligent parking allocation, and complete visibility of vehicle movement."
        path="/products/enterprise/parking"
      />
      
      {/* Main content */}
      <div className="min-h-screen bg-white text-gray-800">
        <main>
          {/* Hero Section */}
          <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div 
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >
                  <motion.div 
                    variants={itemVariants}
                    className="flex items-center gap-2 mb-6"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Smart Access. Organized Parking. Seamless Employee & Visitor Experience.
                    </span>
                  </motion.div>
                  
                  <motion.h1 
                    variants={itemVariants}
                    className="text-4xl md:text-5xl text-gray-900 mb-6 leading-tight font-semibold"
                  >
                    Parking Management System for  Enterprises{" "}
                   
                  </motion.h1>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-lg text-gray-600 mb-8 leading-relaxed"
                  >
                    Corporate offices, IT parks, and business campuses deal with heavy daily vehicle traffic. Technify provides AI-powered, fully automated Parking Management Systems that ensure smooth entry/exit, intelligent parking allocation, and complete visibility of vehicle movement.
                  </motion.p>
                </motion.div>
                
                <motion.div 
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className="relative"
                >
                  <div className="relative rounded-lg overflow-hidden border border-gray-200">
                    <Image 
                      src={hero} 
                      alt="Enterprise Parking Management System" 
                      width={600} 
                      height={400} 
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Importance Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
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
                  className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900"
                >
                  Why Smart Parking Matters for Enterprises
                </motion.h2>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
                >
                  A modern parking system helps organizations avoid congestion, improve security, and enhance the overall workplace experience. A well-managed parking system reflects a professional and modern workplace.
                </motion.p>
                
                <motion.div 
                  variants={staggerChildren}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                  <motion.div 
                    variants={fadeInUp}
                    className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-all duration-300"
                  >
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm text-center">Avoid Congestion</span>
                  </motion.div>
                  
                  <motion.div 
                    variants={fadeInUp}
                    className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-all duration-300"
                  >
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm text-center">Improve Security</span>
                  </motion.div>
                  
                  <motion.div 
                    variants={fadeInUp}
                    className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-all duration-300"
                  >
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm text-center">Increase Efficiency</span>
                  </motion.div>

                  <motion.div 
                    variants={fadeInUp}
                    className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-all duration-300"
                  >
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm text-center">Enhance Experience</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* What We Deliver Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-200">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <div className="relative rounded-lg overflow-hidden shadow-lg border border-gray-200">
                    <Image 
                      src={hero2} 
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
                    className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900"
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
                    className="space-y-4 mt-8"
                  >
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-gray-200">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center mt-1">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Complete Ecosystem</h3>
                        <p className="text-gray-600 text-sm">End-to-end parking management from entry to exit with integrated security.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-gray-200">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center mt-1">
                        <HardDrive className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Smart Technology</h3>
                        <p className="text-gray-600 text-sm">AI-driven ANPR engine with real-time analytics and reporting capabilities.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-gray-200">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center mt-1">
                        <Zap className="h-4 w-4 text-blue-600" />
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
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">
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
                    className="group p-8 bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-lg border border-gray-300 group-hover:border-blue-400 transition-colors duration-300">
                        {index === 0 && <Scan className="w-6 h-6 text-white" />}
                        {index === 1 && <UserCheck className="w-6 h-6 text-white" />}
                        {index === 2 && <QrCode className="w-6 h-6 text-white" />}
                        {index === 3 && <MapPin className="w-6 h-6 text-white" />}
                        {index === 4 && <Car className="w-6 h-6 text-white" />}
                        {index === 5 && <Monitor className="w-6 h-6 text-white" />}
                        {index === 6 && <Shield className="w-6 h-6 text-white" />}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{capability.title}</h3>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {capability.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Technical Highlights Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-100">
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
                    className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900"
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
                        className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg hover:border-blue-300 transition-all duration-300"
                      >
                        <Zap className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700 text-sm font-medium">{highlight}</span>
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
                  <div className="relative rounded-lg overflow-hidden shadow-lg border border-gray-200">
                    <Image 
                      src={hero1} 
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
          <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">
                  Where Systems Are Deployed
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our parking management solutions are ideal for various enterprise environments.
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto"
              >
                {deploymentAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-all duration-300"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{area}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* System Integrations Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-100">
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
                  className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900"
                >
                  System Integrations
                </motion.h2>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-lg text-gray-600 max-w-2xl mx-auto"
                >
                  Creating a connected mobility ecosystem inside the enterprise.
                </motion.p>
                
                <motion.div 
                  variants={staggerChildren}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
                >
                  {integrations.map((integration, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-all duration-300"
                    >
                      <Zap className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <div className="text-left">
                        <p className="text-gray-700 text-sm">{integration}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-lg text-gray-600 mt-12 max-w-3xl mx-auto"
                >
                  Everything runs on a single, intelligent parking management platform.
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <div className="relative rounded-lg overflow-hidden shadow-lg border border-gray-200">
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
                    className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900"
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
                        className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 border-gray-700"
                      >
                        <div className="font-medium text-white">{benefit}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

         
        </main>
      </div>
    </>
  );
}