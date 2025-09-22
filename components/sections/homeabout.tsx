// pages/about.tsx
"use client";

import Head from "next/head";
import { motion, Variants } from "framer-motion";
import {
  Server,
  Shield,
  KeySquare,
  Activity,
  Flame,
  Mic2,
  MonitorSmartphone,
  Cloud,
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const services = [
  { name: "IT Solutions", icon: Server },
  { name: "Security Systems", icon: Shield },
  { name: "Gate Automation", icon: KeySquare },
  { name: "Detection Systems", icon: Activity },
  { name: "Fire Safety", icon: Flame },
  { name: "Public Address", icon: Mic2 },
  { name: "AV Systems", icon: MonitorSmartphone },
  { name: "Cloud Services", icon: Cloud },
];

export default function HomeAbout() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gray-50 text-gray-800">
      <Head>
        <title>About Us | Technify Solutions</title>
        <meta
          name="description"
          content="Technology driven solution offering company with portfolio of entire ICT"
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-800 to-blue-900 text-white py-20 px-6 text-center relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent text-white to-blue-500 mb-6"
          >
            About Us
          </motion.h1>
          <motion.h2
            variants={itemVariants}
            className="text-lg md:text-xl font-medium text-gray-200 mb-8"
          >
            THIS IS WHO WE ARE
          </motion.h2>
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 transition-all"
          >
            Learn More
          </motion.button>
        </motion.div>
      </section>

      {/* About Content */}
      <main className="relative container mx-auto px-6 py-16 z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* About Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-3xl shadow-xl border border-gray-200 p-10 md:p-16 mb-20 relative"
          >
            <motion.p
              className="text-gray-700 mb-6 leading-relaxed text-lg md:text-xl"
            >
              <span className="font-bold text-orange-500 text-2xl md:text-3xl">
                Technify Solutions
              </span>{" "}
              is a comprehensive technology provider that architects and delivers
              integrated solutions for businesses across all sectors. Our core
              expertise encompasses complete IT infrastructure, electronic
              security systems, audio-visual solutions, fire safety, and public
              address systems.
            </motion.p>
            <motion.p className="text-gray-600 text-base md:text-lg leading-relaxed">
              We serve a diverse range of environments, including data centers,
              warehouses, commercial buildings, industrial facilities, and the
              hospitality industry. More than just a vendor, we act as your{" "}
              <span className="text-orange-500 bg-clip-text text-transparent font-bold">
                strategic partner
              </span>{" "}
              and single point of contact, providing end-to-end technology
              solutions—from your on-site equipment to cloud connectivity—all
              dedicated to enriching the customer experience.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.name}
                  className="group relative flex flex-col items-center justify-center bg-orange-50 border border-orange-200 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  whileHover={{ y: -6 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                >
                  {/* Floating Orange Icon with Glow */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: idx * 0.1,
                    }}
                    className="relative mb-6 p-5 rounded-full bg-gradient-to-br from-orange-200 to-orange-300 group-hover:from-orange-300 group-hover:to-orange-400 shadow-lg shadow-orange-200/50 transition-all duration-500"
                  >
                    <Icon className="w-10 h-10 text-orange-500 drop-shadow-md" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 text-center transition-colors">
                    {service.name}
                  </h3>

                  {/* Background glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-200/20 to-orange-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
