"use client";

import { motion, Variants } from "framer-motion";
import { 
  Camera, 
  Eye, 
  Shield, 
  Zap, 
  Cloud, 
  Download,
  FileText,
  ArrowRight,
  Play,
  Monitor,
  HardDrive,
  Lock,
  AlertTriangle,
  Users,
  Clock,
  Check,
  DoorOpen,
  Server,
  Car,
  Package,
  Coffee,
  Fence,
  Building,
  Box
} from "lucide-react";
import { SEO } from '@/components/seo/seo';
import Image from "next/image";

export default function EnterpriseCCTVPage() {
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
      title: "High-Definition IP Cameras",
      points: [
        "4MP/8MP/4K cameras",
        "Dome, bullet & PTZ options",
        "Low-light and IR night vision",
        "Indoor/outdoor weatherproof cameras",
        "Anti-vandal cameras for public zones"
      ],
      note: "Ideal for office floors, parking, reception, and perimeter."
    },
    {
      title: "AI-Based Video Analytics",
      points: [
        "Face recognition",
        "ANPR for parking",
        "Intrusion detection",
        "People counting & occupancy analytics",
        "Queue monitoring",
        "Motion alerts",
        "Tailgating detection"
      ],
      note: "Perfect for access-controlled workplaces."
    },
    {
      title: "Centralized Command Center",
      points: [
        "Multi-location monitoring",
        "Large video wall setup",
        "Real-time alert dashboard",
        "Event-based notifications",
        "Live & playback from any device (secure access)"
      ]
    },
    {
      title: "Enterprise Storage Solutions",
      points: [
        "High-availability NVR/server-based recording",
        "30–180 day retention",
        "RAID storage protection",
        "Redundant failover servers",
        "Encrypted data retention & backups"
      ]
    },
    {
      title: "Integration with Enterprise Systems",
      points: [
        "Access Control → Door badge + video capture",
        "BMS → Environmental triggers",
        "Parking System → Vehicle entry footage",
        "Fire Alarm → Video pop-up for emergency zones",
        "HR & Attendance → Verification during incidents"
      ]
    }
  ];

  const technicalHighlights = [
    "ONVIF-compliant multi-brand support",
    "Gigabit fiber backbone",
    "Cybersecure camera firmware",
    "Role-based access privileges",
    "Real-time device health monitoring",
    "SLA-backed 24×7 AMC support"
  ];

  const deploymentAreas = [
    "Office floors",
    "Reception & lobby",
    "Meeting rooms & corridors",
    "Data centers & server rooms",
    "Parking & basements",
    "Loading/unloading areas",
    "Cafeterias",
    "Building perimeter",
    "Lift lobbies",
    "Warehousing zones"
  ];

  const benefits = [
    "Enhanced security & incident prevention",
    "Data-driven analytics for smart workspace management",
    "Faster emergency response",
    "Zero blind spots across campus",
    "Protection of confidential & sensitive areas",
    "Multi-location central monitoring"
  ];

  return (
    <>
      <SEO 
        title="Enterprise CCTV Surveillance Systems - Advanced Security Monitoring"
        description="Comprehensive CCTV surveillance solutions for enterprises featuring AI-powered analytics, real-time monitoring, and compliance with security standards. enterprise cctv system, corporate surveillance solution, office security camera system, commercial cctv installation, smart surveillance for enterprises"
        path="/products/enterprise/cctv"
        image="/images/og-enterprise-cctv.jpg"
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
                    Secure Workspaces. Smart Monitoring. Operational Control.
                  </motion.div>
                  
                  <motion.h1 
                    variants={itemVariants}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900"
                  >
                    CCTV Surveillance{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      System
                    </span>
                  </motion.h1>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed"
                  >
                    Advanced surveillance solutions designed specifically for enterprise environments to enhance security, 
                    monitor operations, and ensure employee and asset safety.
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
                      src="https://images.unsplash.com/photo-1560617577-ecd7ffd04b98?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEVudGVycHJpc2UlMjBDQ1RWJTIwU3VydmVpbGxhbmNlJTIwU3lzdGVtfGVufDB8fDB8fHww" 
                      alt="Enterprise CCTV Surveillance System" 
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
                  Why CCTV Is Critical for Enterprises
                </motion.h2>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
                >
                  Enterprises need a reliable CCTV Surveillance System to protect employees, assets, data centers, sensitive zones, and multi-floor office environments.
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
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Enhanced Security</h3>
                    <p className="text-gray-600">Strengthen security and compliance while preventing unauthorized access to sensitive areas.</p>
                  </motion.div>
                  
                  <motion.div 
                    variants={fadeInUp}
                    className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                  >
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                      <Eye className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Employee Safety</h3>
                    <p className="text-gray-600">Ensure employee safety and protect high-value assets through continuous monitoring.</p>
                  </motion.div>
                  
                  <motion.div 
                    variants={fadeInUp}
                    className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                      <Zap className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Operational Control</h3>
                    <p className="text-gray-600">Improve operational transparency with real-time incident detection and audit reporting.</p>
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
                      src="https://plus.unsplash.com/premium_photo-1748986517832-72d65713e911?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RW50ZXJwcmlzZSUyMENDVFYlMjBTdXJ2ZWlsbGFuY2UlMjBTeXN0ZW0lMjBjb250cm9sJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D" 
                      alt="Enterprise CCTV Ecosystem" 
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
                    A complete, scalable CCTV surveillance ecosystem engineered for enterprise networks.
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
                        <h3 className="font-semibold text-gray-900 mb-1">AI-Powered Analytics</h3>
                        <p className="text-gray-600 text-sm">Advanced video analytics for real-time threat detection and automated alerts.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-gray-200">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mt-1">
                        <Shield className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Enterprise-Grade Security</h3>
                        <p className="text-gray-600 text-sm">Compliant with enterprise security regulations and industry best practices.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-gray-200">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mt-1">
                        <Zap className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Scalable Architecture</h3>
                        <p className="text-gray-600 text-sm">Designed to grow with your enterprise across multiple locations and facilities.</p>
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
                  Comprehensive surveillance solutions tailored for enterprise environments with specialized features for security and analytics.
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
                    className="rounded-2xl p-8 border border-gray-200 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600">
                        {index === 0 && <Camera className="w-6 h-6" />}
                        {index === 1 && <Eye className="w-6 h-6" />}
                        {index === 2 && <Monitor className="w-6 h-6" />}
                        {index === 3 && <HardDrive className="w-6 h-6" />}
                        {index === 4 && <Zap className="w-6 h-6" />}
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
                    Cutting-edge technology designed to meet the unique security challenges of enterprise environments with reliability and compliance.
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
                      src="https://images.unsplash.com/photo-1708807472445-d33589e6b090?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RW50ZXJwcmlzZSUyMENDVFYlMjBTdXJ2ZWlsbGFuY2UlMjBTeXN0ZW0lMjBjb250cm9sJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D" 
                      alt="CCTV Technical Highlights" 
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
                  Where CCTV Is Installed
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                  Strategic placement across all critical enterprise zones for comprehensive coverage and security.
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
                    className="flex items-start gap-4 p-6 rounded-xl border border-gray-200"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-blue-600 mt-1">
                      {index === 0 && <Monitor className="h-5 w-5" />}
                      {index === 1 && <Users className="h-5 w-5" />}
                      {index === 2 && <DoorOpen className="h-5 w-5" />}
                      {index === 3 && <Server className="h-5 w-5" />}
                      {index === 4 && <Car className="h-5 w-5" />}
                      {index === 5 && <Package className="h-5 w-5" />}
                      {index === 6 && <Coffee className="h-5 w-5" />}
                      {index === 7 && <Fence className="h-5 w-5" />}
                      {index === 8 && <Building className="h-5 w-5" />}
                      {index === 9 && <Box className="h-5 w-5" />}
                    </div>
                    <span className="font-medium text-gray-900">{area}</span>
                  </motion.div>
                ))}
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
                      src="https://images.unsplash.com/photo-1595191497467-f31ae50927b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fEVudGVycHJpc2UlMjBDQ1RWJTIwU3VydmVpbGxhbmNlJTIwU3lzdGVtJTIwYmVuZWZpdGVzfGVufDB8fDB8fHww" 
                      alt="Enterprise CCTV Benefits" 
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
                    Our CCTV surveillance systems provide comprehensive security coverage tailored for enterprise environments.
                  </motion.p>
                  
                  <motion.div 
                    variants={staggerChildren}
                    className="grid grid-cols-1 gap-4"
                  >
                    {benefits.map((benefit, index) => (
                      <motion.div 
                        key={index}
                        variants={fadeInUp}
                        className="flex items-center gap-4 p-4 rounded-lg border border-gray-200"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-blue-600">
                          <Check className="h-5 w-5" />
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Enterprise Security?</h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
                  Contact our experts to discuss how our CCTV surveillance systems can protect your enterprise facility.
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