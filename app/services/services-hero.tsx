"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Import images - You can replace these with actual online service related images
import DesignServiceImage from "../../assets/beanbag-person.png";
import SupportServiceImage from "../../assets/beanbag-person.png";
import OnlineCollaborationImage from "../../assets/beanbag-person.png";
import CloudServicesImage from "../../assets/beanbag-person.png";
import DigitalTransformationImage from "../../assets/beanbag-person.png";
import RemoteTeamImage from "../../assets/beanbag-person.png";

const services = [
  {
    id: 1,
    title: "Design Engineering",
    description: "Technify design engineers have a vast experience in the different phases of all aspects of solutions, whereby the performance and regulations are met.",
    detailedDescription: "Our team is located in India and Singapore, are involved first hand in building clients designs and re-design of an existing requirement or simply provide consultations to our clients.",
    features: [
      "Comprehensive solution design",
      "Performance optimization",
      "Regulatory compliance",
      "Client consultation services",
      "Redesign of existing systems"
    ],
    image: OnlineCollaborationImage,
    color: "from-blue-600 to-cyan-600",
    gradient: "bg-gradient-to-br from-blue-600 to-cyan-600",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    onlineFeatures: ["Remote Design Sessions", "Cloud-based Collaboration", "Virtual Prototyping", "Online Design Reviews"]
  },
  {
    id: 2,
    title: "Support Services",
    description: "Technify's Support team also known as Pre and Post sales service team are measured (and appreciated) by their prompt response.",
    detailedDescription: "The team's main focus is to take full ownership of the project's solution in the form of create, design, and built a solution which not only meet but exceeds customers expectation and ensure customer's delight.",
    features: [
      "Pre and post-sales support",
      "Prompt response times",
      "Full project ownership",
      "Customer satisfaction focus",
      "Solution design and implementation"
    ],
    image: CloudServicesImage,
    color: "from-purple-600 to-pink-600",
    gradient: "bg-gradient-to-br from-purple-600 to-pink-600",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 19.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    onlineFeatures: ["24/7 Remote Support", "Live Chat Assistance", "Video Call Support", "Screen Sharing Sessions"]
  }
];

const stats = [
  { value: "24/7", label: "Online Support", icon: "🌐", description: "Round-the-clock digital assistance" },
  { value: "100+", label: "Remote Projects", icon: "🚀", description: "Successfully delivered online" },
  { value: "15+", label: "Years Experience", icon: "⭐", description: "In digital transformation" },
  { value: "98%", label: "Client Satisfaction", icon: "❤️", description: "Across global online services" }
];

const processSteps = [
  {
    step: 1,
    title: "Virtual Consultation",
    description: "We begin with online meetings to understand your unique requirements and challenges.",
    icon: "💬",
    onlineAspect: "Video Conferencing"
  },
  {
    step: 2,
    title: "Digital Design",
    description: "Our expert team creates comprehensive solutions using cloud-based design tools.",
    icon: "🎯",
    onlineAspect: "Cloud Collaboration"
  },
  {
    step: 3,
    title: "Remote Implementation",
    description: "We build and deploy your solution with precision using remote access tools.",
    icon: "⚡",
    onlineAspect: "Remote Deployment"
  },
  {
    step: 4,
    title: "Online Support",
    description: "Our dedicated team provides ongoing support through digital channels.",
    icon: "🛠️",
    onlineAspect: "Digital Support"
  }
];

const onlineTools = [
  {
    name: "Video Conferencing",
    description: "HD video calls for seamless communication",
    icon: "📹",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Cloud Storage",
    description: "Secure file sharing and collaboration",
    icon: "☁️",
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Project Management",
    description: "Real-time progress tracking and updates",
    icon: "📊",
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "Live Chat",
    description: "Instant messaging for quick support",
    icon: "💬",
    color: "from-orange-500 to-red-500"
  }
];

export default function ServicesHero() {
  const [activeService, setActiveService] = useState(0);
  const [hoveredTool, setHoveredTool] = useState<number | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15, 
        delayChildren: 0.2,
        ease: "easeOut"
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      },
    },
  };

  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardHover = {
    rest: { scale: 1, y: 0 },
    hover: { scale: 1.02, y: -8 }
  };

  const floatingAnimation = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-cyan-50/10 font-sans overflow-hidden">
      {/* Enhanced Background Elements with Online Theme */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute top-1/2 left-1/4 w-60 h-60 bg-cyan-500 rounded-full blur-3xl"
        />

        {/* Network Connection Lines */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0,50 L100,50 M50,0 L50,100" stroke="currentColor" strokeWidth="1" fill="none"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#network)" className="text-blue-400"/>
          </svg>
        </div>
      </div>

      {/* Enhanced floating particles with online theme */}
      <div className="fixed inset-0 -z-10">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Floating Icons */}
        {['💻', '🌐', '📱', '🖥️', '🔗', '📡'].map((icon, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-20"
            style={{
              top: `${15 + i * 15}%`,
              left: `${10 + i * 12}%`,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      {/* Digital Pulse Animation */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-green-400 rounded-full opacity-20"
          animate={{
            scale: [0, 20, 0],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 0,
            ease: "easeOut"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-4 h-4 bg-blue-400 rounded-full opacity-20"
          animate={{
            scale: [0, 25, 0],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 1,
            ease: "easeOut"
          }}
        />
      </div>

      <main className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Enhanced Hero Section */}
        <section className="relative py-12 flex flex-col items-center justify-center">
          <div className="relative z-10 w-full max-w-6xl mx-auto text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center"
            >
              <motion.div 
                variants={itemVariants}
                className="inline-flex items-center bg-white/80 backdrop-blur-sm text-slate-700 px-6 py-3 rounded-2xl mb-8 border border-slate-200/60 shadow-lg"
              >
                <motion.span 
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mr-3"
                />
                <span className="font-semibold">Digital Professional Services</span>
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="text-5xl md:text-7xl font-black mb-8 text-slate-900 tracking-tight leading-tight"
              >
                Transform Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 animate-gradient-x">
                  Digital Vision
                </span>{" "}
                Into Reality
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-12 font-light leading-relaxed"
              >
                Comprehensive <span className="font-semibold text-blue-600">online design engineering</span> and 
                <span className="font-semibold text-purple-600"> digital support services</span> to bring your vision 
                to life with global reach and local precision.
              </motion.p>

              {/* Animated Online Badges */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap justify-center gap-4 mb-12"
              >
                {['Remote Collaboration', 'Cloud-Based', '24/7 Online', 'Global Team'].map((badge, index) => (
                  <motion.div
                    key={badge}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200/60 text-slate-700 text-sm font-medium flex items-center gap-2"
                  >
                    <span className="text-green-500">✓</span>
                    {badge}
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all shadow-lg flex items-center justify-center group"
                >
                  <span>Start Digital Project</span>
                  <motion.svg 
                    className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white/80 backdrop-blur-sm text-slate-700 border-2 border-slate-200 px-10 py-4 rounded-2xl font-semibold hover:border-blue-300 hover:bg-white transition-all shadow-lg flex items-center justify-center group"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  View Digital Portfolio
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-200/60 shadow-lg hover:shadow-xl transition-all group text-center relative overflow-hidden"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="text-4xl mb-4 opacity-80">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">
                    {stat.value}
                  </div>
                  <div className="text-slate-600 font-semibold text-sm uppercase tracking-wide mb-2">
                    {stat.label}
                  </div>
                  <div className="text-slate-500 text-xs">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Online Tools Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="text-center mb-16"
            >
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Digital Toolkit</span>
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Leveraging cutting-edge online tools for seamless collaboration and exceptional results
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {onlineTools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  variants={itemVariants}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-slate-200/60 hover:border-blue-300 transition-all group text-center relative overflow-hidden"
                  whileHover={{ y: -8, scale: 1.05 }}
                  onHoverStart={() => setHoveredTool(index)}
                  onHoverEnd={() => setHoveredTool(null)}
                >
                  <motion.div
                    animate={hoveredTool === index ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 ${tool.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg text-2xl`}
                  >
                    {tool.icon}
                  </motion.div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{tool.name}</h3>
                  <p className="text-slate-600 text-sm">{tool.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Services Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <motion.div 
                variants={itemVariants}
                className="text-center mb-20"
              >
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Digital Services</span>
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  Professional services delivered through advanced online platforms and digital collaboration tools
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    variants={itemVariants}
                    className="group relative"
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    onMouseEnter={() => setActiveService(index)}
                  >
                    <motion.div
                      variants={cardHover}
                      className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200/60 relative"
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Service Header with Gradient */}
                      <div className={`h-32 ${service.gradient} relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="absolute top-6 left-8">
                          <div className="bg-white/20 backdrop-blur-sm rounded-2xl w-16 h-16 flex items-center justify-center text-white">
                            {service.icon}
                          </div>
                        </div>
                        <div className="absolute top-8 right-8">
                          <div className="text-6xl font-black text-white/20">0{service.id}</div>
                        </div>
                        <div className="absolute bottom-6 left-8">
                          <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                        </div>
                      </div>
                      
                      {/* Service Content */}
                      <div className="p-8">
                        <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                          {service.description}
                        </p>
                        
                        <div className="bg-slate-50 rounded-2xl p-6 mb-6 border border-slate-200/60">
                          <p className="text-slate-700 leading-relaxed italic">
                            {service.detailedDescription}
                          </p>
                        </div>

                        {/* Online Features */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                            <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3"></span>
                            Online Capabilities
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.onlineFeatures.map((feature, featureIndex) => (
                              <motion.span
                                key={featureIndex}
                                whileHover={{ scale: 1.05 }}
                                className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm border border-green-200"
                              >
                                {feature}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mb-8">
                          <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                            <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mr-3"></span>
                            Key Features
                          </h4>
                          <ul className="space-y-3">
                            {service.features.map((feature, featureIndex) => (
                              <motion.li 
                                key={featureIndex}
                                whileHover={{ x: 5 }}
                                className="flex items-start group/feature"
                              >
                                <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mt-2 mr-4 flex-shrink-0 group-hover/feature:scale-125 transition-transform`}></div>
                                <span className="text-slate-700">{feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                          <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`flex-1 ${service.gradient} text-white py-4 rounded-2xl font-semibold hover:shadow-lg transition-all shadow-md flex items-center justify-center group`}
                          >
                            Start Online Consultation
                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </motion.button>
                          <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex-1 border-2 border-slate-300 text-slate-700 py-4 rounded-2xl font-semibold hover:border-blue-500 hover:bg-blue-50 transition-all flex items-center justify-center"
                          >
                            Schedule Video Call
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Process Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="text-center mb-20"
            >
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Digital Process</span>
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                A streamlined online approach to delivering exceptional results for our global clients
              </motion.p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={step.step}
                  variants={itemVariants}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-200/60 hover:border-blue-300 transition-all group text-center relative overflow-hidden"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Step Number Background */}
                  <div className="absolute -top-4 -right-4 text-8xl font-black text-slate-100/50 -z-10">
                    {step.step}
                  </div>
                  
                  <motion.div
                    animate={floatingAnimation}
                    className="bg-gradient-to-br from-blue-600 to-cyan-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all"
                  >
                    <span className="text-2xl">{step.icon}</span>
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <div className="text-sm text-blue-600 font-semibold">
                    {step.onlineAspect}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden"
            >
              {/* Animated Background Elements */}
              <div className="absolute inset-0 opacity-10">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                  }}
                  className="absolute top-10 left-10 w-32 h-32 bg-cyan-400 rounded-full blur-3xl"
                />
                <motion.div
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    delay: 2,
                  }}
                  className="absolute bottom-10 right-10 w-32 h-32 bg-purple-400 rounded-full blur-3xl"
                />
              </div>

              <div className="relative z-10 text-center">
                <motion.h2 
                  variants={itemVariants}
                  className="text-4xl md:text-5xl font-black mb-6"
                >
                  Ready to Start Your Digital Project?
                </motion.h2>
                <motion.p 
                  variants={itemVariants}
                  className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed"
                >
                  Connect with our global team online and transform your vision into reality with our digital professional services
                </motion.p>
                
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white text-slate-900 px-12 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all shadow-lg flex items-center justify-center group"
                  >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Schedule Video Call
                  </motion.button>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-transparent border-2 border-white/30 text-white px-12 py-4 rounded-2xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all flex items-center justify-center group"
                  >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Digital Portfolio
                  </motion.button>
                </motion.div>

                {/* Online Availability Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8 flex items-center justify-center gap-2 text-blue-200"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 bg-green-400 rounded-full"
                  />
                  <span className="text-sm">Available for online consultation 24/7</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}