"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
import SplitText from "../ui/split-text";
import Iridescence from "../ui/iridescence";
import bag from "../../assets/fabio.jpg";
import videoCamera from "../../assets/icon/video-camera.png";
import accessControl from "../../assets/icon/AccessControl.png";
import fireAlarm from "../../assets/icon/fire-alarm.png";
import powerSolution from "../../assets/icon/Powersolution.png";
import dataNetworking from "../../assets/icon/Data & Networking.png";
import buildingManagement from "../../assets/icon/Building Managemnet.png";
import publicAddress from "../../assets/icon/Public.png";

interface Feature {
  icon: StaticImageData;
  label: string;
  color: string;
  bg: string;
}

const leftFeatures = [
  { icon: videoCamera, label: "Video Systems", color: "text-blue-600", bg: "bg-white" },
  { icon: accessControl, label: "Access Control", color: "text-blue-600", bg: "bg-white" },
  { icon: fireAlarm, label: "Fire Safety", color: "text-blue-600", bg: "bg-white" },
];

const centerFeature = 
  { icon: powerSolution, label: "Power Solutions", color: "text-blue-600", bg: "bg-white" }

const rightFeatures = [
  { icon: dataNetworking, label: "Data Networking", color: "text-blue-600", bg: "bg-white" },
  { icon: buildingManagement, label: "Building Systems", color: "text-blue-600", bg: "bg-white" },
  { icon: publicAddress, label: "Public Address", color: "text-blue-600", bg: "bg-white" },
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

// Enhanced icon animation variants with 360-degree rotation
const iconVariants: Variants = {
  initial: { scale: 1, rotate: 0 },
  hover: { 
    scale: 1.2, 
    rotate: 360,
    transition: { 
      duration: 0.7,
      ease: "easeInOut"
    } 
  },
  tap: { 
    scale: 0.95, 
    rotate: -10,
    transition: { 
      type: "spring", stiffness: 400, damping: 15 
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

// Word-by-word animation for the main heading
const sentenceVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.08,
    },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring", damping: 12, stiffness: 100,
    },
  },
};

// Reusable FeatureCard component with enhanced styling
interface FeatureCardProps {
  feature: Feature;
  className?: string;
  iconSize?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, className = "", iconSize = 64 }) => {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -8, boxShadow: "0 8px 32px #FFB30022" }}
      className={`group ${className}`}
    >
      <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-200/30 bg-white/80 backdrop-blur-xl shadow-xl transition-all duration-500 group-hover:bg-white group-hover:shadow-orange-400/25 group-hover:border-orange-300/50 hover:shadow-2xl">
        <motion.div
          className="mb-4 p-3 rounded-xl group-hover:opacity-90 transition-opacity bg-gradient-to-br from-blue-50 to-orange-50"
          whileHover="hover"
          whileTap="tap"
          initial="initial"
          variants={iconVariants}
        >
          <motion.div variants={floatingAnimation} animate="animate">
            <Image
              src={feature.icon}
              alt={feature.label}
              width={iconSize}
              height={iconSize}
              className={`${feature.color} drop-shadow-lg`}
            />
          </motion.div>
        </motion.div>
        <SplitText
          text={feature.label}
          className="text-lg font-semibold text-gray-800 group-hover:text-orange-500 transition-all duration-300 w-full"
          delay={0.1}
          duration={0.5}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </div>
    </motion.div>
  );
};

export function HomeFeatureGridSection() {
  return (
    <section className="relative w-full py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
      {/* Glassy iridescence effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Iridescence 
          color={[1, 1, 1]}
          mouseReact={false}
          amplitude={0.1}
          speed={1.0}
        />
      </div>
      {/* Soft radial background pattern */}
      <div className="absolute inset-0 opacity-[0.04] z-0">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 15% 50%, hsl(210 20% 85%) 1px, transparent 1px),
                            radial-gradient(circle at 85% 30%, hsl(30 20% 80%) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      {/* Animated floating circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-orange-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      {/* Extra gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/10 via-white to-orange-100/10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative corners */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-blue-100/50"></div>
        <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-orange-100/50"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-blue-100/50"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-orange-100/50"></div>

        {/* Header */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/15 to-orange-500/15 backdrop-blur-md border border-blue-500/30 rounded-full px-6 py-3 mb-8 shadow-md">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-orange-500 animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span className="text-gray-700 text-sm font-medium tracking-wider uppercase">
              <SplitText
                text="Our Solutions"
                className="inline-block w-auto"
                delay={0.1}
                duration={0.5}
                ease="power3.out"
                splitType="words"
                from={{ opacity: 0, y: 20 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </span>
          </div>
          <SplitText
            text="Comprehensive Technology Infrastructure Services"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight w-full bg-gradient-to-r from-blue-500 via-orange-500 to-blue-500 bg-clip-text text-transparent"
            delay={0.2}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <SplitText
            text="End-to-end solutions designed for modern enterprises and smart environments with cutting-edge technology integration."
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed tracking-wide w-full"
            delay={0.4}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-24 items-start">
          {/* Left column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          > 
            {leftFeatures.map((feature, idx) => (
              <FeatureCard key={feature.label} feature={feature} className={idx === 1 ? "lg:translate-x-6" : ""} />
            ))}
          </motion.div>

          {/* Center column with floating image */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col items-center justify-center"
          >
            <motion.div
              className="relative mb-8 transform hover:scale-105 transition-transform duration-500"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            >
              <div className="relative w-64 h-64 rounded-3xl overflow-hidden border border-blue-200/50 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-orange-100/20 to-white/30 backdrop-blur-xl"></div>
                <Image
                  src={bag}
                  alt="Technology solutions"
                  fill
                  className="object-cover relative z-10 hover:brightness-105 transition-all duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-blue-900/20 to-transparent"></div>
              </div>
            </motion.div>
            <FeatureCard feature={centerFeature} iconSize={56} className="mb-6" />
            <motion.button
              whileHover={{ scale: 1.08, boxShadow: "0 0 24px #FFB300" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 relative overflow-hidden group"
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
              <FeatureCard key={feature.label} feature={feature} className={idx === 1 ? "lg:-translate-x-6" : ""} />
            ))}
          </motion.div>
        </div>

        {/* Enhanced content section */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <SplitText
            text="Integrated Technology Solutions"
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-7 w-full"
            delay={0.1}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <SplitText
            text="Our comprehensive approach combines innovative technology with industry expertise to deliver solutions that enhance security, efficiency, and user experience across all your infrastructure needs."
            className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed tracking-wide w-full"
            delay={0.3}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "System Integration",
              "24/7 Support",
              "Scalable Design",
              "Security First"
            ].map((item, idx) => (
              <div key={idx} className="px-6 py-3 bg-gradient-to-r from-blue-500/15 to-orange-500/15 backdrop-blur-md border border-gray-200/30 rounded-full text-gray-700 text-base font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <SplitText
                  text={item}
                  className="text-gray-800 inline-block"
                  delay={0.1 * idx}
                  duration={0.5}
                  ease="power3.out"
                  splitType="words"
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}