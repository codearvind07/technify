"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Online image URLs - Replace these with actual professional images
const AboutHeroImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80";
const TeamImage = "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80";
const OnlineCollaborationImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80";
const GlobalNetworkImage = "https://images.unsplash.com/photo-1596524460574-c594e355e48f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80";
const InnovationImage = "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80";

const strengths = [
  {
    title: "CHECKOUTS DOCTOR'S",
    description: "Touchy used its identity to harness in most the unique needs and capabilities of each customer. Our team of experts volunteered to share our expertise with all our public knowledge, by delivering excellent experience with everyday creative and modernness.",
    icon: "🔄",
    image: OnlineCollaborationImage
  },
  {
    title: "TECHNICAL REPUTER",
    description: "When highly technical investment firms, Touchy's commitment to focus technology was already one person. We only opted for the community, also healthcare, working group, conducted training with the global brand and physical technologies.",
    icon: "💻",
    image: InnovationImage
  },
  {
    title: "RELIABLE SERVICES",
    description: "Beyond the retail design and implementation, Touchy provides ongoing support to other local businesses across the central world. Our communications system includes digital platforms, mobile phones, electronic devices, digital applications, and mobile smartphones.",
    icon: "🛡️",
    image: GlobalNetworkImage
  },
  {
    title: "PUBLIC COLLETTERCENTRALIZATION",
    description: "Our company for employees of non-executive non-territory business, Touchy, uses a trusted loyalty company, which has been supported by industry-related organizations. The company has grown up on the next scale for year.",
    icon: "🌐",
    image: OnlineCollaborationImage
  },
  {
    title: "SECURITY AND COMMUNICATION",
    description: "The use of keypoint-cleanwork events and employee numbers requirements following customers implementing them will continue to address the problem for delivery and timely pay-forward and maintenance. We are proud of these.",
    icon: "🔒",
    image: InnovationImage
  }
];

const values = [
  {
    title: "Relationships",
    description: "Virtual ownership and ensure accountability to all our clients.",
    icon: "🤝",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Integrity",
    description: "Our foundation is built on unwavering honesty and ethical principles.",
    icon: "⚖️",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Concerns",
    description: "We approach every interaction with respect, preference, and humility.",
    icon: "💭",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Adaptability",
    description: "We initially embrace change and innovation to meet evolving expectations.",
    icon: "🔄",
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Excellence",
    description: "We constantly strive for the highest standards and practicality.",
    icon: "⭐",
    color: "from-yellow-500 to-amber-500"
  }
];

const services = [
  "Knowledge of Professional Asset Groups",
  "Personal Client System",
  "Key Audit System",
  "Customer & Supervisor",
  "Power Solutions",
  "Integrated Auditor",
  "Governance System",
  "Public Address & Compliance System"
];

export default function AboutHero() {
  const [activeTab, setActiveTab] = useState("mission");
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

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

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const floatingAnimation = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-cyan-50/10 font-sans overflow-hidden">
      {/* Enhanced Background Elements */}
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

        {/* Network Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px),
                             linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
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
        
        {/* Floating Tech Icons */}
        {['💻', '🌐', '📱', '🖥️', '🔗', '📡', '⚡', '🔒'].map((icon, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-20"
            style={{
              top: `${10 + i * 12}%`,
              left: `${5 + i * 15}%`,
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
                <span className="font-semibold">About Technify Solutions</span>
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="text-5xl md:text-7xl font-black mb-8 text-slate-900 tracking-tight leading-tight"
              >
                THIS IS{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 animate-gradient-x">
                  WHO WE ARE
                </span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-12 font-light leading-relaxed"
              >
                A premier technology-driven solution provider delivering comprehensive services across 
                <span className="font-semibold text-blue-600"> global digital transformation</span>, 
                <span className="font-semibold text-purple-600"> enterprise systems</span>, and 
                <span className="font-semibold text-cyan-600"> innovative technology solutions</span>.
              </motion.p>

              {/* Animated Stats */}
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
              >
                {[
                  { number: "15+", label: "Years Experience" },
                  { number: "500+", label: "Projects" },
                  { number: "50+", label: "Team Members" },
                  { number: "24/7", label: "Global Support" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200/50"
                  >
                    <div className="text-2xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Who We Are Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">
                  How We Serve You
                </h2>
                
                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {services.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-start group"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.2 }}
                        className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mt-2 mr-4 flex-shrink-0"
                      />
                      <span className="text-slate-700 group-hover:text-slate-900 transition-colors">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="space-y-6">
                  <p className="text-slate-600 leading-relaxed text-lg">
                    <span className="font-semibold text-slate-900">Technify Solution Controller</span> is a technology-driven solution offering company involved in information communication & technology across Globe & Television, Electronic Society systems, Globe Automation, Electronics Systems, BFS Services, and Air Systems as core business domains.
                  </p>
                  
                  <p className="text-slate-600 leading-relaxed text-lg">
                    In our dedicated network, we enhance Customer Experience by providing comprehensive solutions and related services to customers across various verticals including Electronics, warehouses, Commercial infrastructure, industries, hospitality and many more.
                  </p>
                  
                  <motion.blockquote 
                    whileHover={{ scale: 1.02 }}
                    className="border-l-4 border-blue-600 pl-6 italic text-slate-900 bg-blue-50/50 p-6 rounded-2xl"
                  >
                    "Technify is our joint venture company. We pride ourselves on being your comprehensive solution provider that you can always rely on."
                  </motion.blockquote>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative h-96 rounded-3xl overflow-hidden shadow-2xl border border-slate-200/60"
                >
                  <Image
                    src={AboutHeroImage}
                    alt="Technify Global Team"
                    fill
                    className="object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                  
                  {/* Floating elements */}
                  <motion.div
                    animate={floatingAnimation}
                    className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
                  >
                    <div className="text-2xl">🚀</div>
                  </motion.div>
                  
                  <motion.div
                    animate={floatingAnimation}
                    transition={{ delay: 1 }}
                    className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
                  >
                    <div className="text-2xl">🌐</div>
                  </motion.div>
                </motion.div>
                
                {/* Background accent */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl flex items-center justify-center text-4xl text-white shadow-2xl -z-10">
                  ⚡
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Why Choose Technify Section */}
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
                WHY CHOOSE{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  TECHNIFY
                </span>
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Discover what sets us apart in the technology solutions industry with our innovative approach and global expertise
              </motion.p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {strengths.map((strength, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-200/60 hover:border-blue-300 transition-all group hover:shadow-2xl relative overflow-hidden"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-5">
                    <Image
                      src={strength.image}
                      alt=""
                      fill
                      className="object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                  
                  <div className="relative z-10">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="text-4xl mb-6 inline-block"
                    >
                      {strength.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {strength.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {strength.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-slate-200/60">
                      <span className="text-blue-600 text-sm font-semibold uppercase tracking-wide">
                        INNOVATION DRIVEN
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Vision & Mission Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="text-center mb-20"
            >
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                VISION &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  MISSION
                </span>
              </motion.h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Mission */}
              <motion.div 
                variants={itemVariants} 
                className="bg-white p-10 rounded-3xl border border-slate-200/60 shadow-2xl hover:shadow-3xl transition-all group"
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg"
                >
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </motion.div>
                <h3 className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-8">OUR MISSION</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Delivered in bringing a license and intelligent virtual, launching Customer Experiences and Leading Team. We Promote a Future Home Safety and Innovation Partnership (COBE). Our responsibility is to contribute and capture specific approaches to make the world a safe, creative and more interconnected place for everyone.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div 
                variants={itemVariants} 
                className="bg-white p-10 rounded-3xl border border-slate-200/60 shadow-2xl hover:shadow-3xl transition-all group"
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg"
                >
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </motion.div>
                <h3 className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8">OUR VISION</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  To create solutions that empower communities with safety, intelligence, and security, fostering a brighter future for all. Our commitment to excellence drives us to continuously enhance our business using leading edge technology and dynamic innovation.
                </p>
              </motion.div>
            </div>

            {/* Enhanced Values Section */}
            <motion.div variants={itemVariants} className="mt-20">
              <h3 className="text-3xl font-black text-slate-900 mb-12 text-center">OUR CORE VALUES</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {values.map((value, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ y: -8, scale: 1.05 }}
                    onHoverStart={() => setHoveredValue(index)}
                    onHoverEnd={() => setHoveredValue(null)}
                    className="text-center bg-white p-8 rounded-3xl border border-slate-200/60 shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group"
                  >
                    <motion.div
                      animate={hoveredValue === index ? { scale: 1.1 } : { scale: 1 }}
                      className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg text-2xl text-white`}
                    >
                      {value.icon}
                    </motion.div>
                    <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {value.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Culture Section */}
            <motion.div 
              variants={itemVariants} 
              className="mt-20 bg-gradient-to-br from-slate-50 to-blue-50/30 p-12 rounded-3xl border border-slate-200/60 shadow-2xl"
            >
              <h3 className="text-3xl font-black text-slate-900 mb-8">OUR CULTURE</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-slate-600 leading-relaxed text-lg mb-6">
                    <span className="font-bold text-slate-900">People Come First.</span> We value our employees and believe they are truly responsible for our success. We continuously create opportunities for our people to grow professionally and prosper.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    At Technify, our team members work beyond customers' leadership processes and have an audience at different times, for us, and for the world.
                  </p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative h-64 rounded-2xl overflow-hidden shadow-lg"
                >
                  <Image
                    src={TeamImage}
                    alt="Technify Team Culture"
                    fill
                    className="object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section className="py-20 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden"
            >
              {/* Animated Background */}
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
                  className="text-4xl md:text-5xl font-black mb-8"
                >
                  Let's Transform Your Vision
                </motion.h2>
                
                <motion.div 
                  variants={itemVariants}
                  className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl text-left max-w-md mx-auto shadow-2xl"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-6">GET IN TOUCH</h3>
                  <ul className="space-y-3 text-slate-700 mb-6">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      ACCOMMODATE ANNUAL REPORT
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      RESEARCH FOR YOUR COMPANY
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      WORKSHIP FOR YOU
                    </li>
                  </ul>
                  
                  <div className="space-y-2 text-slate-600">
                    <p>📧 info@technify.com</p>
                    <p>🌐 www.technify.com</p>
                    <p>📞 contact@technify.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
                >
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white text-slate-900 px-12 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all shadow-lg flex items-center justify-center group"
                  >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Schedule Consultation
                  </motion.button>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-transparent border-2 border-white/30 text-white px-12 py-4 rounded-2xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all flex items-center justify-center group"
                  >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    Start Conversation
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}