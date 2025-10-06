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
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 text-gray-800">
      <Head>
        <title>About Us | Technify Solutions</title>
        <meta
          name="description"
          content="Technology driven solution offering company with portfolio of entire ICT"
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-24 px-6 text-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse"></div>
        </div>
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-5xl mx-auto relative z-10"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-200 to-orange-100"
          >
            About Us
          </motion.h1>
          <motion.h2
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl font-medium text-gray-200 mb-10 max-w-2xl mx-auto"
          >
            Discover the innovative technology solutions that drive business transformation
          </motion.h2>
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full shadow-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:-translate-y-1"
          >
            Explore Our Solutions
          </motion.button>
        </motion.div>
      </section>

      {/* About Content */}
      <main className="relative container mx-auto px-6 py-20 md:py-28 z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* About Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 p-8 md:p-12 mb-20 relative overflow-hidden"
          >
            {/* Glassmorphism effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-blue-50/30 backdrop-blur-sm -z-10"></div>
            
            <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-700">
                Empowering Innovation Through Technology
              </span>
            </motion.h2>
            
            <motion.p
              className="text-gray-700 mb-8 leading-relaxed text-lg md:text-xl"
            >
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 text-2xl md:text-3xl">
                Technify Solutions
              </span>{" "}
              is more than just a technology provider, we're your strategic partner in digital transformation. With over a decade of experience, we specialize in designing and implementing comprehensive technology solutions that drive business growth and operational excellence.
            </motion.p>
            <motion.p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              Our team of certified experts delivers end-to-end services across IT infrastructure, cybersecurity, automation systems, and cloud technologies. We understand that every business is unique, which is why we tailor our solutions to meet your specific challenges and objectives.
            </motion.p>
            <motion.p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              From Fortune 500 corporations to emerging startups, organizations trust Technify Solutions to architect resilient technology ecosystems that scale with their ambitions. Our commitment to innovation, quality, and customer success has positioned us as a leader in the technology solutions industry.
            </motion.p>
            <motion.p className="text-gray-600 text-base md:text-lg leading-relaxed italic border-l-4 border-orange-500 pl-6 py-2 bg-orange-50/50 rounded-r-lg">
              "We don't just implement technology—we craft digital experiences that transform businesses and empower teams to achieve extraordinary results."
            </motion.p>
          </motion.div>

          {/* Services Section Title */}
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-700">
              Comprehensive Technology Services
            </span>
          </motion.h2>

          {/* Services Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.name}
                  className="group relative flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer backdrop-blur-sm"
                  whileHover={{ y: -10, rotateY: 5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                >
                  {/* Floating Icon with Glow */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: idx * 0.1,
                    }}
                    className="relative mb-6 p-5 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 group-hover:from-orange-200 group-hover:to-orange-300 shadow-lg shadow-orange-200/50 transition-all duration-500"
                  >
                    <Icon className="w-10 h-10 text-orange-600 drop-shadow-md" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 text-center transition-colors duration-300">
                    {service.name}
                  </h3>

                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-200/10 to-orange-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}