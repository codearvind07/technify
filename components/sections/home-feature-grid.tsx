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

/* ---------- Card Component (SIZE FIXED) ---------- */
const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => (
  <motion.div
    variants={cardVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="bg-white rounded-2xl border border-gray-200 shadow-md w-[250px] h-[260px] p-7 text-center flex flex-col justify-between mx-auto transition duration-300 relative group"
  >
    {/* ICON */}
    <motion.div
      variants={floating}
      animate="animate"
      className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-100 to-orange-100 flex items-center justify-center"
    >
      <Image src={feature.icon} alt={feature.label} width={40} height={40} />
    </motion.div>

    {/* DESCRIPTION */}
    {feature.desc && (
      <p className="text-gray-600 text-sm mb-3">{feature.desc}</p>
    )}

    {/* TITLE */}
    <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.label}</h4>
    
    {/* Border effect to match homeabout */}
    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500 transition-all duration-300 pointer-events-none"></div>
  </motion.div>
);

/* ---------- PAGE SECTION ---------- */
export function HomeFeatureGridSection() {
  return (
    <section className="relative w-full py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(to right, #1F6FEB 1px, transparent 1px),
                              linear-gradient(to bottom, #fb8500 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center heading-3 text-gray-800 mb-12 sm:mb-16"
        >
          End-to-end solutions for enterprises and smart environments with
          cutting-edge technology integration
        </motion.h2>

        <main className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-start mb-12 sm:mb-16 md:mb-20">

          {/* LEFT */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            {leftFeatures.map((f, i) => (
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
              className="relative mb-8"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            >
              <div className="relative w-64 h-64 rounded-2xl overflow-hidden border border-gray-200 shadow-xl mx-auto">
                <Image src={bag} alt="Technology solutions" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent" />
              </div>
            </motion.div>

            <FeatureCard feature={centerFeature} />

            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              className="mt-6"
            >
              <Link
                href="/products"
                className="bg-gradient-to-r from-blue-600 to-orange-500 text-white font-semibold px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition body-base cursor-pointer text-center block"
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
            className="space-y-4 sm:space-y-6"
          >
            {rightFeatures.map((f, i) => (
              <FeatureCard key={f.label} feature={f} />
            ))}
          </motion.div>

        </main>
      </div>
    </section>
  );
}
