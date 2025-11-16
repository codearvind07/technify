"use client";

import { motion, Variants } from "framer-motion";
import { 
  Tv, 
  Video, 
  Speaker, 
  Monitor, 
  Zap, 
  Download,
  ArrowRight,
  Play,
  Mic,
  Eye,
  HardDrive,
  Check
} from "lucide-react";
import { SEO } from '@/components/seo/seo';
import Image from "next/image";

export default function EnterpriseAVPage() {
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
      title: "Meeting Room & Boardroom AV",
      points: [
        "4K displays & interactive touch panels",
        "Video conferencing systems (Zoom/Teams/Google Meet compatible)",
        "Wireless presentation systems",
        "Digital whiteboards",
        "Ceiling & table microphones",
        "Soundbars & speaker systems"
      ],
      note: "Creates a seamless hybrid meeting experience."
    },
    {
      title: "Audio Conferencing & Sound Reinforcement",
      points: [
        "High-fidelity speakers",
        "DSP-based audio processing",
        "Beamforming microphones",
        "Acoustic echo cancellation"
      ],
      note: "Perfect for medium and large conference rooms."
    },
    {
      title: "Digital Signage Solutions",
      points: [
        "Corporate communication screens",
        "Reception lobby displays",
        "Internal branding",
        "Digital noticeboards",
        "Multi-zone content layouts",
        "Centralized scheduling"
      ],
      note: "Ideal for HR, admin, and corporate communication teams."
    },
    {
      title: "Command Center & NOC/SOC AV",
      points: [
        "Large video walls",
        "LED/LCD wall processors",
        "Multi-source data visualization",
        "KVM matrix switching",
        "Operator consoles",
        "Real-time dashboards"
      ],
      note: "Suitable for IT monitoring centers, security command centers, and enterprise control rooms."
    },
    {
      title: "Training Rooms & Auditorium AV",
      points: [
        "Stage lighting & audio",
        "Laser projectors",
        "Handheld/lapel microphones",
        "Video recording setups",
        "Network-based audio distribution"
      ],
      note: "Supports large corporate events & training programs."
    },
    {
      title: "Backend AV Processing",
      points: [
        "Media servers",
        "Matrix switchers (HDMI/SDI/IP)",
        "Audio DSP processors",
        "Encoder/decoder systems",
        "Redundant AV racks for 24×7 operations"
      ]
    }
  ];

  const technicalHighlights = [
    "4K/8K resolution support",
    "IP-based AV distribution",
    "HDBaseT & SDVoE technologies",
    "Centralized AV management",
    "Remote device monitoring",
    "Automatic power scheduling",
    "Support for Microsoft Teams Rooms & Zoom Rooms"
  ];

  const deploymentAreas = [
    "Boardrooms",
    "Conference rooms",
    "Huddle rooms",
    "Auditoriums",
    "Training rooms",
    "Reception & common areas",
    "Corporate floors",
    "NOC/SOC control rooms",
    "HR & communication zones"
  ];

  const integrations = [
    "BMS → Lighting/AC automation during meetings",
    "Access Control → Room booking + entry integration",
    "CCTV → Video feed integration in control rooms",
    "Network Systems → Enterprise Wi-Fi & switching",
    "Digital Signage CMS → Central content distribution"
  ];

  const benefits = [
    "Professional & high-quality meetings",
    "Enhanced collaboration across teams",
    "Better decision-making through real-time data displays",
    "Automated room environment",
    "Centralized control of all AV devices",
    "Strong brand presence via digital signage",
    "Reliable performance for hybrid work culture"
  ];

  return (
    <>
      <SEO 
        title="Enterprise Audio-Visual (AV) Solutions - Conference Room & Digital Signage Systems"
        description="Comprehensive AV solutions for enterprises featuring video conferencing, sound systems, digital signage, and content management for enhanced collaboration and communication. enterprise av solutions, corporate meeting room av, digital signage systems, noc soc video wall, boardroom audio visual setup, office av integration"
        path="/products/enterprise/av"
        image="/images/og-enterprise-av.jpg"
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
                    Smart Meetings. Digital Collaboration. Visual Intelligence for Modern Workplaces.
                  </motion.div>
                  
                  <motion.h1 
                    variants={itemVariants}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900"
                  >
                    Audio-Visual{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Solutions
                    </span>
                  </motion.h1>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed"
                  >
                    Complete AV systems designed to enhance collaboration, communication, and presentation capabilities 
                    for enterprise environments with seamless integration and professional quality.
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
                      src="https://plus.unsplash.com/premium_photo-1756776238206-31335d74a4eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fEVudGVycHJpY2UlMjBBdWRpby1WaXN1YWwlMjBTb2x1dGlvbnN8ZW58MHx8MHx8fDA%3D" 
                      alt="Enterprise Audio-Visual Systems" 
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
                  Why AV Systems Matter for Enterprises
                </motion.h2>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
                >
                  Enterprises require advanced Audio-Visual systems for conference rooms, training centers, digital signage, NOC/SOC command centers, and workspace communication.
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
                      <Video className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Professional Meetings</h3>
                    <p className="text-gray-600">High-quality video conferencing and hybrid meeting solutions for seamless collaboration.</p>
                  </motion.div>
                  
                  <motion.div 
                    variants={fadeInUp}
                    className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                  >
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                      <Monitor className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Real-Time Monitoring</h3>
                    <p className="text-gray-600">Visual intelligence for NOCs/SOCs with real-time data visualization and dashboards.</p>
                  </motion.div>
                  
                  <motion.div 
                    variants={fadeInUp}
                    className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                      <Tv className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Digital Communication</h3>
                    <p className="text-gray-600">Corporate messaging and branding through digital signage and communication systems.</p>
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
                      src="https://plus.unsplash.com/premium_photo-1754211772292-9dc99de0dd22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fEVudGVycHJpY2UlMjBBdWRpby1WaXN1YWwlMjBTb2x1dGlvbnN8ZW58MHx8MHx8fDA%3D" 
                      alt="Complete AV Ecosystem" 
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
                    A complete AV ecosystem for meeting rooms, auditoriums, corporate floors, and command centers.
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
                        <h3 className="font-semibold text-gray-900 mb-1">Enterprise-Grade Solutions</h3>
                        <p className="text-gray-600 text-sm">Professional AV systems designed for reliability and scalability in enterprise environments.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-gray-200">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mt-1">
                        <Monitor className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Seamless Integration</h3>
                        <p className="text-gray-600 text-sm">Full compatibility with Microsoft Teams Rooms, Zoom Rooms, and other collaboration platforms.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-gray-200">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mt-1">
                        <Zap className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Centralized Management</h3>
                        <p className="text-gray-600 text-sm">Unified control of all AV devices with remote monitoring and automatic scheduling.</p>
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
                  Comprehensive AV solutions with specialized features for different enterprise environments.
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
                        {index === 0 && <Monitor className="w-6 h-6 text-white" />}
                        {index === 1 && <Mic className="w-6 h-6 text-white" />}
                        {index === 2 && <Tv className="w-6 h-6 text-white" />}
                        {index === 3 && <Eye className="w-6 h-6 text-white" />}
                        {index === 4 && <Video className="w-6 h-6 text-white" />}
                        {index === 5 && <HardDrive className="w-6 h-6 text-white" />}
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
                    Cutting-edge technology designed to meet the AV requirements of modern enterprise environments with reliability and performance.
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
                      src="https://plus.unsplash.com/premium_photo-1747277562555-f38a347250bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fEVudGVycHJpY2UlMjBBdWRpby1WaXN1YWwlMjBTb2x1dGlvbnN8ZW58MHx8MHx8fDA%3D" 
                      alt="AV Technical Highlights" 
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
                  Where AV Solutions Are Deployed
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                  Strategic placement across all critical enterprise zones for comprehensive AV coverage.
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
                  Creates a smart, connected workplace experience.
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
                      src="https://images.unsplash.com/photo-1627848455575-370d989211f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fEVudGVycHJpY2UlMjBBdWRpby1WaXN1YWwlMjBTb2x1dGlvbnN8ZW58MHx8MHx8fDA%3D" 
                      alt="Enterprise AV Benefits" 
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
                    Our Audio-Visual Solutions enhance communication and collaboration tailored for enterprise environments.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Your AV Systems?</h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
                  Contact our experts to discuss how our Audio-Visual Solutions can transform your enterprise communication.
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