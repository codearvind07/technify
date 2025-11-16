"use client";

import { motion, Variants } from "framer-motion";
import { 
  Car, 
  Ticket, 
  CreditCard, 
  MapPin, 
  Smartphone, 
  Download,
  ArrowRight,
  Play,
  Check,
  Eye,
  Shield,
  Zap,
  Monitor,
  HardDrive,
  Users,
  Clock
} from "lucide-react";
import { SEO } from '@/components/seo/seo';
import Image from "next/image";

export default function HospitalParkingPage() {
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

  const capabilities = [
    {
      title: "ANPR (Automatic Number Plate Recognition)",
      points: [
        "Automatically detects vehicle number plates",
        "Works in low light & bad weather",
        "Identifies staff, visitors, and ambulance vehicles",
        "Sends alerts for blacklisted vehicles"
      ]
    },
    {
      title: "Ticketless Entry & Exit",
      points: [
        "QR-based or mobile-based entry",
        "No human interaction required",
        "Auto-calculated parking duration & fees",
        "Faster movement for patient vehicles"
      ]
    },
    {
      title: "Parking Guidance System",
      points: [
        "LED indicators for empty/occupied slots",
        "Wayfinding signboards",
        "Floor-wise occupancy display",
        "Helps reduce waiting time for parking"
      ]
    },
    {
      title: "Ambulance Priority Access",
      points: [
        "Dedicated ambulance lane",
        "Auto gate opening through ANPR",
        "Real-time monitoring for emergency movement"
      ],
      note: "Critical for trauma & emergency units."
    },
    {
      title: "Staff & Doctor Parking Management",
      points: [
        "RFID-based staff parking",
        "Fixed/reserved parking slots",
        "Entry logs for compliance",
        "Time-based access rules"
      ]
    },
    {
      title: "Central Parking Management Dashboard",
      points: [
        "Live monitoring of parking areas",
        "Occupancy reports",
        "Vehicle movement logs",
        "Overstay alerts",
        "Revenue tracking (for paid parking)"
      ]
    }
  ];

  const technicalHighlights = [
    "AI-powered ANPR engine",
    "Industrial-grade cameras & sensors",
    "Fiber/Gigabit network distribution",
    "Redundant server backup",
    "24×7 device health monitoring",
    "Emergency override support",
    "Integration-ready with CCTV & HIMS"
  ];

  const deploymentAreas = [
    "Main hospital entry & exit",
    "Emergency/Trauma entrance",
    "Staff and doctor parking",
    "Visitor parking areas",
    "Pharmacy/outpatient block parking",
    "Basement & multilevel parking"
  ];

  const integrations = [
    "CCTV → Live stream for every parking event",
    "HIMS → Patient-linked parking validation",
    "PAS → Parking announcements",
    "Access Control → Staff gate control",
    "Digital Display Boards → Real-time occupancy info"
  ];

  const benefits = [
    "Smooth vehicle flow",
    "Quick access for ambulances",
    "Controlled visitor parking",
    "Reduced congestion at peak hours",
    "Higher security & tracking",
    "Increased parking revenue accuracy",
    "Better patient and visitor experience"
  ];

  return (
    <>
      <SEO 
        title="Parking Management System for Hospitals - Automated Vehicle Flow"
        description="Advanced Parking Management Systems featuring automated vehicle management, contactless payments, real-time space tracking, and mobile integration for enhanced hospital parking experience. hospital parking management system, ANPR hospital parking, smart parking healthcare, automated hospital parking, hospital vehicle tracking, patient parking system"
        path="/products/hospital/parking"
        image="/images/og-hospital-parking.jpg"
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
                    Organized Traffic. Zero Congestion. Hassle-Free Patient Access.
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
                    Advanced parking management systems designed to streamline vehicle flow, enhance security, and improve the parking experience for patients, visitors, and staff.
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
                      src="https://plus.unsplash.com/premium_photo-1743759708746-fe50e7f9adce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFBhcmtpbmclMjBNYW5hZ2VtZW50JTIwU3lzdGVtJTIwaG9zcGl0YWx8ZW58MHx8MHx8fDA%3D" 
                      alt="Hospital Parking Management System" 
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
                  Why Smart Parking Is Critical for Hospitals
                </motion.h2>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
                >
                  Hospitals experience continuous vehicle movement — ambulances, patient vehicles, visitors, doctors, staff, and emergency services.
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
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Emergency Access</h3>
                    <p className="text-gray-600">Ensures quick access for emergency vehicles and reduces chaos at entry/exit gates.</p>
                  </motion.div>
                  
                  <motion.div 
                    variants={fadeInUp}
                    className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                  >
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                      <Car className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Efficient Flow</h3>
                    <p className="text-gray-600">Speeds up patient drop-off & pick-up while preventing unauthorized parking.</p>
                  </motion.div>
                  
                  <motion.div 
                    variants={fadeInUp}
                    className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Security & Control</h3>
                    <p className="text-gray-600">Keeps staff and visitor parking organized while enhancing overall hospital efficiency.</p>
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
                      src="https://images.unsplash.com/photo-1583787658528-988d9ae0f3e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fFBhcmtpbmclMjBNYW5hZ2VtZW50JTIwU3lzdGVtJTIwZm9yJTIwaG9zcGl0YWx8ZW58MHx8MHx8fDA%3D" 
                      alt="Integrated Parking Management System" 
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
                    A fully automated, camera-based parking ecosystem with real-time visibility and control.
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
                        <h3 className="font-semibold text-gray-900 mb-1">AI-Powered ANPR</h3>
                        <p className="text-gray-600 text-sm">Advanced license plate recognition with intelligent vehicle identification.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-gray-200">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mt-1">
                        <Shield className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">24/7 Operation</h3>
                        <p className="text-gray-600 text-sm">Continuous monitoring and control for hospital environments.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-gray-200">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mt-1">
                        <Zap className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Emergency Priority</h3>
                        <p className="text-gray-600 text-sm">Dedicated access for ambulances and emergency vehicles.</p>
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
                  Comprehensive parking solutions with advanced features for modern healthcare facilities.
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-gradient-to-b from-white to-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <Car className="w-6 h-6 text-white" />
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
                    
                    {capability.note && (
                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-xs text-gray-500 italic">{capability.note}</p>
                      </div>
                    )}
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
                    Cutting-edge technology designed to meet the unique challenges of healthcare environments with reliability and scalability.
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
                      src="https://images.unsplash.com/photo-1604277626272-2e8e9e81316d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY3fHxQYXJraW5nJTIwTWFuYWdlbWVudCUyMFN5c3RlbSUyMGZvciUyMGhvc3BpdGFsfGVufDB8fDB8fHww" 
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
                  Where the System Is Installed
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                  Strategic placement across all critical hospital zones for comprehensive parking management.
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
                      <MapPin className="h-5 w-5 text-blue-600" />
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
                  Seamless connectivity with existing hospital infrastructure for enhanced operational efficiency.
                </motion.p>
                
                <motion.div 
                  variants={staggerChildren}
                  className="max-w-4xl mx-auto space-y-4"
                >
                  {integrations.map((integration, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center gap-4 p-6 rounded-xl bg-white border border-gray-200 shadow-sm"
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
                  Creates a smart mobility ecosystem within the hospital.
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
                      src="https://images.unsplash.com/photo-1681116864662-b7b03ec38869?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxQYXJraW5nJTIwTWFuYWdlbWVudCUyMFN5c3RlbSUyMGZvciUyMGhvc3BpdGFsfGVufDB8fDB8fHww" 
                      alt="Hospital Parking Benefits" 
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
                    Benefits for Hospitals
                  </motion.h2>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-lg text-gray-600 mb-8 leading-relaxed"
                  >
                    Our Parking Management System enhances the visitor experience while improving operational efficiency.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Streamline Hospital Parking?</h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
                  Contact our experts to discuss how our Parking Management System can enhance the efficiency of your healthcare facility.
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