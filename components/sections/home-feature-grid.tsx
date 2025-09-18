"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
import bag from "../../assets/fabio.jpg";
import videoCamera from "../../assets/icon/video-camera.png";
import accessControl from "../../assets/icon/AccessControl.png";
import fireAlarm from "../../assets/icon/fire-alarm.png";
import powerSolution from "../../assets/icon/Powersolution.png";
import dataNetworking from "../../assets/icon/Data & Networking.png";
import buildingManagement from "../../assets/icon/Building Managemnet.png";
import publicAddress from "../../assets/icon/Public.png";

// Feature lists with improved color scheme
const leftFeatures = [
  { icon: videoCamera, label: "Video Systems", color: "text-[#C9D1D9]", bg: "bg-[#0D1117]" },
  { icon: accessControl, label: "Access Control", color: "text-[#C9D1D9]", bg: "bg-[#0D1117]" },
  { icon: fireAlarm, label: "Fire Safety", color: "text-[#C9D1D9]", bg: "bg-[#0D1117]" },
];

const centerFeatures = [
  { icon: powerSolution, label: "Power Solutions", color: "text-[#C9D1D9]", bg: "bg-[#0D1117]" },
];

const rightFeatures = [
  { icon: dataNetworking, label: "Data Networking", color: "text-[#C9D1D9]", bg: "bg-[#0D1117]" },
  { icon: buildingManagement, label: "Building Systems", color: "text-[#C9D1D9]", bg: "bg-[#0D1117]" },
  { icon: publicAddress, label: "Public Address", color: "text-[#C9D1D9]", bg: "bg-[#0D1117]" },
];

// Animation variants
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// Icon animation variants
const iconVariants: Variants = {
  initial: { scale: 1, rotate: 0 },
  hover: { 
    scale: 1.3, 
    rotate: 360,
    transition: { 
      duration: 1.2,
      ease: "circOut"
    } 
  },
  tap: { 
    scale: 0.95, 
    rotate: -10,
    transition: { 
      duration: 0.2,
      ease: "backIn"
    } 
  }
};

// Continuous subtle animation for icons
const floatingAnimation: Variants = {
  animate: {
    y: [-2, 2, -2],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

export function HomeFeatureGridSection() {
  return (
    <section className="relative w-full py-20 md:py-28 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 15% 50%, hsl(210 10% 20%) 1px, transparent 1px),
                            radial-gradient(circle at 85% 30%, hsl(210 10% 15%) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative">
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-white/10"></div>
        <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-white/10"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-white/10"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-white/10"></div>
        {/* Professional header */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-slate-800/80 backdrop-blur-md border border-blue-500/40 rounded-full px-6 py-3 mb-8 shadow-lg">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-[#1F6FEB]"></div>
            <span className="text-[#C9D1D9]/70 text-sm font-medium tracking-wider uppercase">Our Solutions</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block text-white mb-3 bg-gradient-to-r from-blue-100 to-purple-100 bg-clip-text text-transparent">Comprehensive Technology</span>
            <span className="block text-white bg-gradient-to-r from-cyan-100 to-blue-100 bg-clip-text text-transparent">
              Infrastructure Services
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-300/90 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
            End-to-end solutions designed for modern enterprises and smart environments with cutting-edge technology integration.
          </p>
        </motion.div>

        {/* Three-column feature layout with enhanced visual balance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24 items-start">
          {/* Left column with zigzag pattern for first three features */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* First feature - Video Systems */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-white/20 bg-slate-800/60 backdrop-blur-xl shadow-xl transition-all duration-500 group-hover:bg-slate-700/80 group-hover:shadow-blue-500/20">
                <motion.div 
                  className={`mb-4 p-4 rounded-lg group-hover:opacity-80 transition-opacity`}
                  whileHover="hover"
                  whileTap="tap"
                  initial="initial"
                  variants={iconVariants}
                >
                  <motion.div
                    variants={floatingAnimation}
                    animate="animate"
                  >
                    <Image 
                      src={leftFeatures[0].icon} 
                      alt={leftFeatures[0].label} 
                      width={64} 
                      height={64} 
                      className={`${leftFeatures[0].color} drop-shadow-lg`}
                    />
                  </motion.div>
                </motion.div>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-200 transition-all duration-300">
                  {leftFeatures[0].label}
                </h3>
              </div>
            </motion.div>

            {/* Second feature - Access Control (zigzag offset) */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -5 }}
              className="group translate-x-6"
            >
              <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-white/20 bg-slate-800/60 backdrop-blur-xl shadow-xl transition-all duration-500 group-hover:bg-slate-700/80 group-hover:shadow-blue-500/20">
                <motion.div 
                  className={`mb-4 p-4 rounded-lg group-hover:opacity-80 transition-opacity`}
                  whileHover="hover"
                  whileTap="tap"
                  initial="initial"
                  variants={iconVariants}
                >
                  <motion.div
                    variants={floatingAnimation}
                    animate="animate"
                  >
                    <Image 
                      src={leftFeatures[1].icon} 
                      alt={leftFeatures[1].label} 
                      width={64} 
                      height={64} 
                      className={`${leftFeatures[1].color} drop-shadow-lg`}
                    />
                  </motion.div>
                </motion.div>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-200 transition-all duration-300">
                  {leftFeatures[1].label}
                </h3>
              </div>
            </motion.div>

            {/* Third feature - Fire Safety (back to normal position) */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-white/20 bg-slate-800/60 backdrop-blur-xl shadow-xl transition-all duration-500 group-hover:bg-slate-700/80 group-hover:shadow-blue-500/20">
                <motion.div 
                  className={`mb-4 p-4 rounded-lg group-hover:opacity-80 transition-opacity`}
                  whileHover="hover"
                  whileTap="tap"
                  initial="initial"
                  variants={iconVariants}
                >
                  <motion.div
                    variants={floatingAnimation}
                    animate="animate"
                  >
                    <Image 
                      src={leftFeatures[2].icon} 
                      alt={leftFeatures[2].label} 
                      width={64} 
                      height={64} 
                      className={`${leftFeatures[2].color} drop-shadow-lg`}
                    />
                  </motion.div>
                </motion.div>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-200 transition-all duration-300">
                  {leftFeatures[2].label}
                </h3>
              </div>
            </motion.div>
          </motion.div>

          {/* Center column with central image */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center"
          >
            <div className="relative mb-8 transform hover:scale-105 transition-transform duration-300">
              <div className="relative w-72 h-72 rounded-3xl overflow-hidden border border-white/30 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-slate-900/40 backdrop-blur-2xl"></div>
                <Image
                  src={bag}
                  alt="Technology solutions"
                  fill
                  className="object-cover relative z-10 hover:brightness-110 transition-all duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-blue-900/30 to-transparent"></div>
              </div>
            </div>
            
            {/* Center feature moved above button with icon above text */}
            <motion.div
              whileHover={{ y: -5 }}
              className="group mb-6"
            >
              <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-white/20 bg-slate-800/60 backdrop-blur-xl shadow-xl transition-all duration-500 group-hover:bg-slate-700/80 group-hover:shadow-blue-500/20">
                <motion.div 
                  className={`mb-4 p-3 rounded-lg group-hover:opacity-80 transition-opacity`}
                  whileHover="hover"
                  whileTap="tap"
                  initial="initial"
                  variants={iconVariants}
                >
                  <motion.div
                    variants={floatingAnimation}
                    animate="animate"
                  >
                    <Image 
                      src={centerFeatures[0].icon} 
                      alt={centerFeatures[0].label} 
                      width={56} 
                      height={56} 
                      className={`${centerFeatures[0].color} drop-shadow-lg`}
                    />
                  </motion.div>
                </motion.div>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-200 transition-all duration-300">
                  {centerFeatures[0].label}
                </h3>
              </div>
            </motion.div>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 relative overflow-hidden group"
            >
              <span className="relative z-10">View All Solutions</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </motion.button>
          </motion.div>

          {/* Right column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {rightFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-white/20 bg-slate-800/60 backdrop-blur-xl shadow-xl transition-all duration-500 group-hover:bg-slate-700/80 group-hover:shadow-blue-500/20">
                  <motion.div 
                    className={`mb-4 p-4 rounded-lg group-hover:opacity-80 transition-opacity`}
                    whileHover="hover"
                    whileTap="tap"
                    initial="initial"
                    variants={iconVariants}
                  >
                    <motion.div
                      variants={floatingAnimation}
                      animate="animate"
                    >
                      <Image 
                        src={feature.icon} 
                        alt={feature.label} 
                        width={64} 
                        height={64} 
                        className={`${feature.color} drop-shadow-lg`}
                      />
                    </motion.div>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-200 transition-all duration-300">
                    {feature.label}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Simplified content section */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-7 bg-gradient-to-r from-blue-100 to-purple-100 bg-clip-text text-transparent">
            Integrated Technology Solutions
          </h3>
          <p className="text-lg md:text-xl text-slate-300/95 mb-10 leading-relaxed tracking-wide">
            Our comprehensive approach combines innovative technology with industry expertise to deliver solutions that enhance security, efficiency, and user experience across all your infrastructure needs.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "System Integration",
              "24/7 Support",
              "Scalable Design",
              "Security First"
            ].map((item, idx) => (
              <div key={idx} className="px-6 py-3 bg-slate-800/70 backdrop-blur-md border border-white/20 rounded-full text-slate-300/90 text-base font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}