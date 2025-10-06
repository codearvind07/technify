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
}

const leftFeatures: Feature[] = [
  { icon: videoCamera, label: "Video Systems" },
  { icon: accessControl, label: "Access Control" },
  { icon: fireAlarm, label: "Fire Safety" },
];

const centerFeature: Feature = { icon: powerSolution, label: "Power Solutions" };

const rightFeatures: Feature[] = [
  { icon: dataNetworking, label: "Data Networking" },
  { icon: buildingManagement, label: "Building Systems" },
  { icon: publicAddress, label: "Public Address" },
];

/* ---------- Variants ---------- */
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const iconVariants: Variants = {
  initial: { scale: 1, rotate: 0 },
  hover: { scale: 1.15, rotate: 360, transition: { duration: 0.7, ease: "easeInOut" } },
};

const floating: Variants = {
  animate: {
    y: [-3, 3, -3],
    transition: { duration: 3, repeat: Infinity, repeatType: "reverse" },
  },
};

/* ---------- FeatureCard ---------- */
const FeatureCard: React.FC<{ feature: Feature; className?: string; iconSize?: number }> = ({
  feature,
  className = "",
  iconSize = 48,
}) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -8, boxShadow: "0 10px 32px rgba(255,179,0,0.25)" }}
    className={`group ${className}`}
  >
    <div className="flex flex-col items-center text-center p-4 sm:p-5 md:p-6 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-xl shadow-lg transition-all duration-500 group-hover:bg-white group-hover:border-orange-300/60">
      <motion.div
        className="mb-3 sm:mb-4 p-2 sm:p-3 rounded-xl bg-gradient-to-br from-blue-50 to-orange-50"
        whileHover="hover"
        initial="initial"
        variants={iconVariants}
      >
        <motion.div variants={floating} animate="animate">
          <Image src={feature.icon} alt={feature.label} width={iconSize} height={iconSize} className="drop-shadow-md" />
        </motion.div>
      </motion.div>
      <SplitText
        text={feature.label}
        className="body-base font-semibold text-gray-800 group-hover:text-orange-500 transition-colors duration-300"
        delay={0.1}
        duration={0.5}
        ease="power3.out"
        splitType="words"
        from={{ opacity: 0, y: 20 }}
        to={{ opacity: 1, y: 0 }}
      />
    </div>
  </motion.div>
);

/* ---------- Main Section ---------- */
export function HomeFeatureGridSection() {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-24 mt-0 pt-0 bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Iridescent & Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Iridescence color={[1, 1, 1]} mouseReact={false} amplitude={0.1} speed={1.0} />
      </div>
      <div className="absolute inset-0 opacity-[0.04] z-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 15% 50%, hsl(210 20% 85%) 1px, transparent 1px),
                              radial-gradient(circle at 85% 30%, hsl(30 20% 80%) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.header variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/15 to-orange-500/15 backdrop-blur-md border border-blue-500/30 rounded-full px-4 sm:px-6 py-1.5 sm:py-2 mb-4 sm:mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-orange-500 animate-pulse" />
            <span className="caption font-medium uppercase tracking-wider">
              <SplitText text="Our Solutions" splitType="words" />
            </span>
          </div>
          <h2 className="heading-2 mb-3 sm:mb-4 text-gray-800 leading-tight">
            Comprehensive Technology Infrastructure Services
          </h2>
          <SplitText
            text="End-to-end solutions for enterprises and smart environments with cutting-edge technology integration."
            className="body-large text-gray-600 max-w-3xl mx-auto font-light leading-relaxed"
            splitType="words"
          />
        </motion.header>

        {/* Grid - Optimized for mobile */}
        <main className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-start mb-12 sm:mb-16 md:mb-20">
          {/* Left */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4 sm:space-y-6">
            {leftFeatures.map((f, i) => (
              <FeatureCard key={f.label} feature={f} className={i === 1 ? "md:translate-x-4" : ""} iconSize={40} />
            ))}
          </motion.div>

          {/* Center */}
          <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-col items-center">
            <motion.div
              className="relative mb-6 sm:mb-8"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            >
              <div className="relative w-32 h-32 sm:w-44 sm:h-44 md:w-64 md:h-64 rounded-2xl sm:rounded-3xl overflow-hidden border border-blue-200 shadow-2xl mx-auto">
                <Image src={bag} alt="Technology solutions" fill className="object-cover" priority sizes="(max-width: 768px) 176px, 256px" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
              </div>
            </motion.div>
            <FeatureCard feature={centerFeature} iconSize={40} />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 sm:mt-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-md hover:shadow-xl transition body-base"
            >
              View All Solutions
            </motion.button>
          </motion.div>

          {/* Right */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4 sm:space-y-6">
            {rightFeatures.map((f, i) => (
              <FeatureCard key={f.label} feature={f} className={i === 1 ? "md:-translate-x-4" : ""} iconSize={40} />
            ))}
          </motion.div>
        </main>

        {/* Closing Statement */}
        <motion.footer variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center max-w-4xl mx-auto">
          <SplitText text="Integrated Technology Solutions" className="heading-3 text-gray-800 mb-4 sm:mb-6" splitType="words" />
          <SplitText
            text="We blend innovation with expertise to deliver solutions that enhance security, efficiency, and user experience across your infrastructure."
            className="body-base text-gray-600 mb-6 sm:mb-8 leading-relaxed"
            splitType="words"
          />
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {["System Integration", "24/7 Support", "Scalable Design", "Security First"].map((item, i) => (
              <div
                key={i}
                className="px-3 py-1.5 sm:px-5 sm:py-2 bg-gradient-to-r from-blue-500/15 to-orange-500/15 rounded-full text-gray-800 body-small font-medium shadow-sm hover:shadow-md transition"
              >
                <SplitText text={item} splitType="words" />
              </div>
            ))}
          </div>
        </motion.footer>
      </div>
    </section>
  );
}