"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
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

interface Feature {
  icon: StaticImageData;
  label: string;
  desc?: string;
}

/* ---------- Feature Data ---------- */
const leftFeatures: Feature[] = [
  { icon: videoCamera, label: "Video Systems", desc: "Smart surveillance for 24/7 monitoring." },
  { icon: accessControl, label: "Access Control", desc: "Secure and controlled access management." },
  { icon: fireAlarm, label: "Fire Safety", desc: "Early detection & prompt alerting." },
];

const centerFeature: Feature = { icon: powerSolution, label: "Power Solutions", desc: "Reliable & scalable energy backup." };

const rightFeatures: Feature[] = [
  { icon: dataNetworking, label: "Data Networking", desc: "High-speed & secure connectivity." },
  { icon: buildingManagement, label: "Building Systems", desc: "Smart infrastructure automation." },
  { icon: publicAddress, label: "Public Address", desc: "Clear and effective communication." },
];

/* ---------- Animation ---------- */
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const floating: Variants = {
  animate: { y: [-5, 5, -5], transition: { duration: 4, repeat: Infinity, repeatType: "reverse" } }
};

/* ---------- Card Component (RESPONSIVE) ---------- */
const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => (
  <motion.div
    variants={cardVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    whileHover={{ y: -5, scale: 1.02 }}
    className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm p-2 sm:p-5 text-center hover:shadow-lg transition-all duration-300 relative overflow-hidden group h-full"
  >
    {/* ICON */}
    <motion.div
      variants={floating}
      animate="animate"
      className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-100 to-orange-100 flex items-center justify-center"
    >
      <Image src={feature.icon} alt={feature.label} width={32} height={32} className="w-6 h-6 sm:w-7 sm:h-7" />
    </motion.div>

    {/* TITLE */}
    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 font-poppins">
      {feature.label}
    </h4>

    {/* DESCRIPTION */}
    {feature.desc && (
      <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 font-raleway">
        {feature.desc}
      </p>
    )}

    {/* Optional stat line placeholder to match HomeAbout card layout */}
    <span className="inline-block px-3 sm:px-4 py-1 bg-blue-50 text-blue-700 text-xs sm:text-sm rounded-full font-raleway opacity-0 pointer-events-none">
      {/* keep layout parity; populate if needed */}
    </span>

    {/* Border effect */}
    <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-transparent group-hover:border-blue-500 transition-all duration-300 pointer-events-none"></div>
  </motion.div>
);

/* ---------- PAGE SECTION ---------- */
export function HomeFeatureGridSection() {
  return (
    <section className="relative w-full pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-60 h-60 sm:w-80 sm:h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 sm:w-80 sm:h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(to right, #1F6FEB 1px, transparent 1px),
                              linear-gradient(to bottom, #fb8500 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 md:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 leading-tight font-poppins">
            End-to-End Solutions for Modern Enterprises
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-raleway">
            Cutting-edge technology and smart environments designed to elevate your business operations
          </p>
        </motion.div>

        {/* MOBILE: Single column stacked layout */}
        <div className="md:hidden space-y-4 sm:space-y-6">
          {/* All features in single column for mobile */}
          <motion.div
            className="space-y-4 sm:space-y-6"
          >
            {[...leftFeatures, centerFeature, ...rightFeatures].map((f) => (
              <FeatureCard key={f.label} feature={f} />
            ))}
          </motion.div>

          {/* Center image for mobile */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex justify-center mt-8 sm:mt-10"
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            >
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                <Image src={bag} alt="Technology solutions" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent" />
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="w-full mt-6 sm:mt-8"
          >
            <Link
              href="/products"
              className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white font-semibold px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition text-center block text-sm sm:text-base font-poppins"
            >
              View All Solutions
            </Link>
          </motion.div>
        </div>

        {/* DESKTOP: 3-column layout with adjusted spacing like HomeAbout */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 items-start">

          {/* LEFT */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {leftFeatures.map((f) => (
              <FeatureCard key={f.label} feature={f} />
            ))}
          </motion.div>

          {/* CENTER */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <motion.div
              className="relative mb-6 lg:mb-8"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            >
              <div className="relative w-56 h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
                <Image src={bag} alt="Technology solutions" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent" />
              </div>
            </motion.div>

            <FeatureCard feature={centerFeature} />

            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              className="mt-6 w-full"
            >
              <Link
                href="/products"
                className="bg-gradient-to-r from-blue-600 to-orange-500 text-white font-semibold px-6 py-3 md:py-4 rounded-xl shadow-sm hover:shadow-md transition text-center block text-base font-poppins"
              >
                View All Solutions
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {rightFeatures.map((f) => (
              <FeatureCard key={f.label} feature={f} />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}