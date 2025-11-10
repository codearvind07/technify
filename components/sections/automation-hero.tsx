"use client";

import { motion, Variants } from "framer-motion";
import type { JSX } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  Zap, Home, Command, Lightbulb, Building, Cpu,
  BarChart3, Shield, Cloud, Settings,
  Monitor, Play, Star, Users, Target, CheckCircle
} from "lucide-react";

import heroimg from "../../assets/EnergyManagementcard.jpg";
import Energy from "../../assets/EnergyManagement.jpg";
import homeAutomation from "../../assets/HomeAutomation.jpg";
import Commanda from "../../assets/CommandControl.jpg";
import Lighting from "../../assets/LCS.jpg";
import robotics from "../../assets/Robotics.jpg";
import buildingManagement from "../../assets/BuildingManagementSystem.jpg";
import building from "../../assets/Integrated Building Management System (IBMS).jpg";

export default function AutomationHero() {

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] },
    },
    hover: {
      scale: 1.04,
      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
      transition: { duration: 0.3 }
    }
  };

  const solutions = [
    {
      title: "Energy Management Monitoring System",
     
      image: heroimg,
      description:
        "A smart energy monitoring platform that tracks usage, analyzes patterns, and optimizes consumption for commercial and industrial operations.",
      features: ["Real-time monitoring", "Energy usage reporting", "Cost optimization", "Grid performance management"],
      color: "from-blue-500 to-cyan-500",
      gradient: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
      bgGradient: "bg-gradient-to-br from-blue-100/40 via-cyan-100/30 to-white"
    },
    {
      title: "Home Automation",
      icon: Home,
      image: homeAutomation,
      description:
        "An intelligent home automation ecosystem that connects lighting, scenes, security, and appliances for seamless control from anywhere.",
      features: ["Smart lighting automation", "Entertainment scene control", "Security integration", "Remote access"],
      color: "from-violet-500 to-purple-500",
      gradient: "bg-gradient-to-br from-violet-500/20 to-purple-500/20",
      bgGradient: "bg-gradient-to-br from-violet-100/40 via-purple-100/30 to-white"
    },
    {
      title: "Command Control Center (CCSI)",
    
      image: Commanda,
      description:
        "A centralized command platform that unifies real-time data, system alerts, and critical operations into one intelligent control environment.",
      features: ["Intelligent Traffic Management", "Data Center operations", "Safety & Security systems", "Early Warning alerts"],
      color: "from-emerald-500 to-green-500",
      gradient: "bg-gradient-to-br from-emerald-500/20 to-green-500/20",
      bgGradient: "bg-gradient-to-br from-emerald-100/40 via-green-100/30 to-white"
    },
    {
      title: "Lighting Control System (LCS)",
     
      image: Lighting,
      description:
        "An intelligent network-based lighting system that adapts to user needs and boosts efficiency through automation and energy optimization.",
      features: ["Network-based control", "Energy efficiency", "Custom lighting scenarios", "Remote access"],
      color: "from-amber-500 to-orange-500",
      gradient: "bg-gradient-to-br from-amber-500/20 to-orange-500/20",
      bgGradient: "bg-gradient-to-br from-amber-100/40 via-orange-100/30 to-white"
    },
    {
      title: "Building Management System (BMS)",
      
      image: buildingManagement,
      description:
        "A comprehensive building automation suite that manages HVAC, lighting, electrical systems, and safety infrastructure with precision.",
      features: ["HVAC control", "Lighting management", "Power systems", "Fire and security"],
      color: "from-red-500 to-pink-500",
      gradient: "bg-gradient-to-br from-red-500/20 to-pink-500/20",
      bgGradient: "bg-gradient-to-br from-red-100/40 via-pink-100/30 to-white"
    },
    {
      title: "Integrated Building Management System (IBMS)",
  
      image: building,
      description:
        "A next-generation unified platform that integrates multiple building systems with web-based access, analytics, and automated control.",
      features: ["Facility management", "ERP compatibility", "Web-based access", "Multi-system integration"],
      color: "from-indigo-500 to-blue-500",
      gradient: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20",
      bgGradient: "bg-gradient-to-br from-indigo-100/40 via-blue-100/30 to-white"
    },
    {
      title: "Robotics & Automation",
     
      image: robotics,
      description:
        "Custom robotic and industrial automation solutions designed to streamline workflows, increase reliability, and support complex operations.",
      features: ["Industrial automation", "System integration", "Custom solutions", "Application-specific designs"],
      color: "from-gray-600 to-slate-500",
      gradient: "bg-gradient-to-br from-gray-600/20 to-slate-500/20",
      bgGradient: "bg-gradient-to-br from-gray-100/40 via-slate-100/30 to-white"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 font-sans">
      <Head>
        <title>Automation Solutions | Technify</title>
        <meta name="description" content="Advanced automation solutions for industrial, commercial, and residential applications" />
      </Head>

      <main className="relative pt-16 sm:pt-20 md:pt-24 overflow-hidden">

        {/* ================= HERO SECTION ================= */}
        <section className="relative py-16 md:py-20 lg:py-24">
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side */}
              <div className="space-y-6">
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200 shadow-lg"
                >
                  <Zap className="w-4 h-4 text-white" />
                  <span className="text-sm font-medium text-blue-700">Leading Automation Solutions</span>
                </motion.div>

                <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Smart</span><br />
                  <span className="text-slate-900">Automation</span><br />
                  <span className="text-slate-700">For Modern Spaces</span>
                </motion.h1>

                <motion.p variants={itemVariants} className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                  Transform your residential, commercial, or industrial spaces with cutting-edge automation technology.
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span className="text-sm font-medium">24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span className="text-sm font-medium">Custom Solutions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span className="text-sm font-medium">Energy Efficient</span>
                  </div>
                </motion.div>
              </div>

              {/* Right Image */}
              <motion.div variants={itemVariants} className="relative">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-8 border-white/30">
                  <Image
                    src={Energy}
                    alt="Automation Solutions"
                    width={700}
                    height={600}
                    className="object-cover w-full h-auto max-h-[500px]"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ================= SOLUTIONS SECTION ================= */}
        <section className="relative py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>

              <div className="text-center mb-12 md:mb-16">
                <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  Comprehensive <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Automation</span> Solutions
                </motion.h2>

                <motion.p variants={itemVariants} className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
                  From residential comfort to industrial efficiency, our systems deliver intelligent control and energy savings.
                </motion.p>
              </div>

              {/* CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {solutions.map((solution, index) => {
                  const Icon = solution.icon;

                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover="hover"
                      className="group relative bg-white rounded-2xl sm:rounded-3xl shadow-xl transition-all border border-slate-200 overflow-hidden"
                    >
                      <div className={`absolute inset-0 ${solution.bgGradient}`}></div>
                      <div className={`absolute inset-0 ${solution.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>

                      <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                        <Image
                          src={solution.image}
                          alt={solution.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        
                      </div>

                      <div className="relative p-5 sm:p-6 bg-white/80 backdrop-blur-sm">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">{solution.title}</h3>

                        <p className="text-slate-600 mb-3 sm:mb-4 leading-relaxed text-sm">{solution.description}</p>

                        <ul className="space-y-2 mb-4">
                          {solution.features.map((feature, idx) => (
                            <motion.li key={idx} className="flex items-center text-slate-700 text-sm" whileHover={{ x: 4 }}>
                              <div className={`w-2 h-2 bg-gradient-to-r ${solution.color} rounded-full mr-3`}></div>
                              {feature}
                            </motion.li>
                          ))}
                        </ul>

                        {/* ✅ Removed Learn More button — replaced with clean footer line */}
                        <div className="pt-2 pb-2">
                          <div className="w-full h-[2px] bg-gradient-to-r from-slate-200 to-transparent rounded-full"></div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

          </div>
        </section>

      </main>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}