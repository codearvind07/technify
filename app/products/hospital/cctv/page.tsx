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
  Check
} from "lucide-react";
import { SEO } from '@/components/seo/seo';
import Image from "next/image";

export default function HospitalCCTVPage() {
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
        "Dome, bullet & PTZ cameras",
        "Night vision for low-light wards",
        "Anti-vandal cameras for public areas"
      ],
      note: "Ideal for OPDs, lobbies, waiting halls & back-office areas."
    },
    {
      title: "ICU/NICU Monitoring Cameras",
      points: [
        "Privacy-safe monitoring",
        "Secure hospital-only streaming",
        "Restriction-based viewing for doctors & nurses",
        "Smart alerts for abnormal activity"
      ]
    },
    {
      title: "Intelligent Video Analytics (IVA)",
      points: [
        "Patient fall detection",
        "Intrusion alerts",
        "Restricted zone monitoring",
        "Queue detection",
        "Loitering & crowd alerts",
        "Door open/close tracking",
        "Break-in detection"
      ]
    },
    {
      title: "Central Monitoring Room",
      points: [
        "24×7 live feed",
        "Multi-screen video walls",
        "Incident tagging",
        "Real-time alerts to security staff",
        "Patient & ward-level monitoring"
      ]
    },
    {
      title: "Storage & Reliability",
      points: [
        "30–180 days recording",
        "Network Video Recorders (NVRs)",
        "Redundant server cluster",
        "RAID storage protection",
        "Encrypted video retention"
      ]
    },
    {
      title: "Healthcare-Safe Architecture",
      points: [
        "Hygienic camera housings",
        "Non-intrusive monitoring",
        "Privacy-compliant design",
        "Noise-free operation"
      ]
    }
  ];

  const technicalHighlights = [
    "4K/8K resolution support",
    "AI-powered video analytics",
    "Centralized NVR management",
    "Remote monitoring capabilities",
    "Encrypted video storage",
    "Redundant system architecture",
    "HIPAA-compliant design",
    "Seamless integration with nurse call systems"
  ];

  const deploymentAreas = [
    "Emergency & trauma center",
    "ICU/NICU wards",
    "Operation theatres (OT corridors)",
    "Doctors' rooms & nursing stations",
    "Pharmacy & record rooms",
    "Pathology labs",
    "In-patient wards",
    "Parking & ambulance bay",
    "Entry/exit gates",
    "Waiting halls & cafeterias"
  ];

  const integrations = [
    "Nurse Call System → Automated patient alerts",
    "Access Control → Restricted medical zones",
    "HIMS → OT logs, staff movement records",
    "Parking System → Vehicle event logging",
    "Fire Alarm → Visual alert pop-ups"
  ];

  const benefits = [
    "Safer patient environments",
    "Zero blind spots in high-risk areas",
    "Reduced malpractice & disputes",
    "Better staff accountability",
    "Enhanced operational transparency",
    "Fast emergency response",
    "Secured medicines & hospital assets"
  ];

  return (
    <>
      <SEO 
        title="Hospital CCTV Surveillance Systems - Advanced Security Monitoring"
        description="Comprehensive CCTV surveillance solutions for hospitals featuring AI-powered analytics, real-time monitoring, and compliance with healthcare security standards. hospital cctv system, healthcare surveillance solutions, ICU monitoring cameras, hospital security system, medical CCTV solutions, patient safety monitoring"
        path="/products/hospital/cctv"
        image="/images/og-hospital-cctv.jpg"
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
                    Patient Safety. Secure Environment. Complete Visibility.
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
                    Advanced surveillance solutions designed specifically for healthcare environments to enhance security, monitor operations, and ensure patient and staff safety.
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
                      src="https://images.unsplash.com/photo-1708807472445-d33589e6b090?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="Hospital CCTV Surveillance System" 
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
                  Why CCTV Is Critical for Hospitals
                </motion.h2>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
                >
                  Hospitals require continuous monitoring to ensure patient safety, protect assets, and maintain operational integrity across all departments.
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
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Patient Safety</h3>
                    <p className="text-gray-600">Continuous monitoring of sensitive areas like ICUs and NICUs ensures patient wellbeing and immediate response to emergencies.</p>
                  </motion.div>
                  
                  <motion.div 
                    variants={fadeInUp}
                    className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                  >
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                      <Eye className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Asset Protection</h3>
                    <p className="text-gray-600">Safeguard expensive medical equipment, medications, and hospital property from theft and unauthorized access.</p>
                  </motion.div>
                  
                  <motion.div 
                    variants={fadeInUp}
                    className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                      <Lock className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Operational Integrity</h3>
                    <p className="text-gray-600">Monitor staff activities, maintain compliance standards, and ensure proper protocols are followed throughout the facility.</p>
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
                      src="https://images.unsplash.com/photo-1708807472445-d33589e6b090?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="Integrated CCTV Network" 
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
                    A fully integrated, multi-layer CCTV network optimized for clinical environments with healthcare-grade security and privacy compliance.
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
                        <h3 className="font-semibold text-gray-900 mb-1">HIPAA Compliance</h3>
                        <p className="text-gray-600 text-sm">Privacy-compliant design with secure access controls and encrypted storage.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-gray-200">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mt-1">
                        <Zap className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">24/7 Monitoring</h3>
                        <p className="text-gray-600 text-sm">Round-the-clock surveillance with instant notifications for security events.</p>
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
                  Comprehensive surveillance solutions tailored for healthcare environments with specialized features for patient care and security.
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
                    className="rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600">
                        {index === 0 && <Camera className="w-6 h-6" />}
                        {index === 1 && <Eye className="w-6 h-6" />}
                        {index === 2 && <Zap className="w-6 h-6" />}
                        {index === 3 && <Monitor className="w-6 h-6" />}
                        {index === 4 && <HardDrive className="w-6 h-6" />}
                        {index === 5 && <Shield className="w-6 h-6" />}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{capability.title}</h3>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {capability.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5">
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
                    Cutting-edge technology designed to meet the unique security challenges of healthcare environments with reliability and compliance.
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
                      src="https://images.unsplash.com/photo-1673357260733-67bec06265a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk1fHxIb3NwaXRhbCUyMENDVFYlMjBTdXJ2ZWlsbGFuY2UlMjBTeXN0ZW0lMjBjb250cm9sJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D" 
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
                  Where CCTV Is Installed in Hospitals
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                  Strategic placement across all critical hospital zones for comprehensive coverage and security.
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
                      {index === 0 && <AlertTriangle className="h-5 w-5 text-blue-600" />}
                      {index === 1 && <Users className="h-5 w-5 text-blue-600" />}
                      {index === 2 && <Camera className="h-5 w-5 text-blue-600" />}
                      {index === 3 && <Monitor className="h-5 w-5 text-blue-600" />}
                      {index === 4 && <FileText className="h-5 w-5 text-blue-600" />}
                      {index === 5 && <FileText className="h-5 w-5 text-blue-600" />}
                      {index === 6 && <Monitor className="h-5 w-5 text-blue-600" />}
                      {index === 7 && <HardDrive className="h-5 w-5 text-blue-600" />}
                      {index === 8 && <Lock className="h-5 w-5 text-blue-600" />}
                      {index === 9 && <Monitor className="h-5 w-5 text-blue-600" />}
                      {index > 9 && <Monitor className="h-5 w-5 text-blue-600" />}
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
                      className="flex items-center gap-4 p-6 rounded-xl border border-gray-200"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600">
                        {index === 0 && <Users className="h-6 w-6" />}
                        {index === 1 && <Lock className="h-6 w-6" />}
                        {index === 2 && <Monitor className="h-6 w-6" />}
                        {index === 3 && <HardDrive className="h-6 w-6" />}
                        {index === 4 && <AlertTriangle className="h-6 w-6" />}
                      </div>
                      <div className="text-left">
                        <p className="font-medium text-gray-900">{integration}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
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
                      src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="Hospital CCTV Benefits" 
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
                    Our CCTV surveillance systems provide comprehensive security coverage tailored for healthcare environments.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Hospital Security?</h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
                  Contact our experts to discuss how our CCTV surveillance systems can protect your healthcare facility.
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