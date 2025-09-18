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

export default function HomeAbout() {
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

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
      `}</style>
      <Head>
        <title>About Us | Technify Solutions</title>
        <meta
          name="description"
          content="Technology driven solution offering company with portfolio of entire ICT"
        />
      </Head>

      {/* Enhanced background lighting effects with improved gradients */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-slate-900/30 rounded-full blur-[180px] opacity-20 animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-purple-900/25 via-blue-900/20 to-slate-900/30 rounded-full blur-[200px] opacity-25 animate-pulse -z-10" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[700px] bg-gradient-to-r from-blue-600/20 via-purple-600/15 to-blue-600/20 rounded-full blur-[240px] opacity-15 animate-pulse -z-10" />
      
      {/* Floating geometric shapes with enhanced animation */}
      <div className="absolute top-20 left-1/4 w-5 h-5 bg-gradient-to-br from-blue-500/80 via-purple-500/80 to-blue-500/80 rotate-45 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
      <div className="absolute top-24 left-1/3 w-3 h-3 bg-gradient-to-br from-purple-500/60 via-pink-500/60 to-purple-500/60 rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }} />
      <div className="absolute top-16 left-2/5 w-4 h-2 bg-gradient-to-r from-cyan-500/70 to-blue-500/70 skew-y-12 animate-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }} />
      <div className="absolute bottom-32 right-1/4 w-8 h-8 bg-gradient-to-br from-purple-500/70 via-pink-500/70 to-purple-500/70 rounded-full animate-bounce shadow-lg shadow-purple-500/30" style={{ animationDelay: '1s', animationDuration: '3.5s' }} />
      <div className="absolute bottom-28 right-2/5 w-5 h-5 bg-gradient-to-r from-blue-500/60 to-cyan-500/60 rotate-45 animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }} />
      <div className="absolute bottom-36 right-1/3 w-3 h-6 bg-gradient-to-t from-indigo-500/50 to-blue-500/50 rounded-t-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5.5s' }} />
      <div className="absolute top-1/3 right-16 w-4 h-4 bg-gradient-to-br from-yellow-400/80 via-orange-400/80 to-yellow-400/80 rotate-45 animate-spin" style={{ animationDuration: '6s' }} />
      <div className="absolute top-1/3 right-20 w-2 h-2 bg-gradient-to-br from-orange-400/60 via-red-400/60 to-orange-400/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '3s' }} />
      <div className="absolute bottom-1/4 left-20 w-4 h-4 bg-gradient-to-br from-blue-500/70 via-indigo-500/70 to-blue-500/70 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 left-16 w-2.5 h-2.5 bg-gradient-to-br from-indigo-500/50 via-purple-500/50 to-indigo-500/50 rotate-45 animate-pulse" style={{ animationDelay: '2.5s', animationDuration: '5s' }} />
      <div className="absolute bottom-1/3 left-24 w-3 h-3 bg-gradient-to-r from-cyan-400/60 to-blue-400/60 rounded-full animate-bounce" style={{ animationDelay: '3s', animationDuration: '3.5s' }} />
      
      {/* Dynamic grid overlay with subtle animation */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle at 15% 50%, hsl(210 10% 20%) 1px, transparent 1px),
                            radial-gradient(circle at 85% 30%, hsl(280 10% 15%) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          filter: 'blur(0.5px)'
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-purple-900/5 animate-pulse" />
        <div className="absolute inset-0" style={{
          background: `conic-gradient(from 0deg, transparent, rgba(59, 130, 246, 0.1), transparent 30%)`,
          opacity: 0.15,
          animation: 'spin 8s linear infinite'
        }}></div>
        <div className="h-full w-full bg-[linear-gradient(to_bottom,rgba(31,111,235,0.1)_1px,transparent_1px)] bg-[length:100%_40px] animate-[pulse_8s_ease-in-out_infinite]" />
      </div>

      <main className="relative container mx-auto px-6 py-32 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Enhanced Header Section */}
          <motion.div variants={itemVariants} className="mb-24 text-center space-y-10">
            {/* Status Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-[#0D1117]/50 backdrop-blur-lg border border-[#1F6FEB]/30 rounded-full px-6 py-2 mb-6"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50" />
              <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent text-base font-bold tracking-widest uppercase shadow-lg shadow-blue-500/20 animate-pulse-glow">About Technify</span>
            </motion.div>

            <motion.h1
              className="text-7xl md:text-9xl font-black bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(59,130,246,0.8)] leading-tight text-center"
              whileHover={{ scale: 1.03, y: -5 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{ textShadow: '0 0 50px rgba(59,130,246,0.5), 0 0 100px rgba(139,92,246,0.3)' }}
            >
              About Us
            </motion.h1>

            <motion.h2
              className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 bg-clip-text text-transparent tracking-widest uppercase"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              THIS IS WHO WE ARE
            </motion.h2>

            {/* Enhanced decorative line */}
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                className="h-[2px] w-20 bg-gradient-to-r from-transparent via-[#1F6FEB] to-transparent rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
              <motion.div
                className="mx-4 w-3 h-3 bg-gradient-to-br from-[#1F6FEB] to-[#FFB300] rounded-full shadow-[0_0_15px_rgba(31,111,235,0.8)]"
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 0.8, delay: 1 }}
              />
              <motion.div
                className="h-[2px] w-20 bg-gradient-to-r from-transparent via-[#1F6FEB] to-transparent rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </motion.div>
          </motion.div>

          {/* Enhanced Content Card */}
          <motion.div
            variants={itemVariants}
            className="relative mb-24"
          >
            <motion.div
              className="relative bg-[#0D1117]/50 backdrop-blur-xl border border-[#1F6FEB]/30 rounded-3xl shadow-[0_0_50px_rgba(31,111,235,0.2)] p-12 md:p-16 overflow-hidden"
              whileHover={{
                y: -10,
                boxShadow: "0 0 80px rgba(31,111,235,0.4)",
              }}
              transition={{ duration: 0.5 }}
            >
              {/* Corner decorations */}
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#1F6FEB]/50 opacity-60" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#1F6FEB]/50 opacity-60" />
              
              {/* Top accent line */}
              <div className="absolute -top-[1px] left-8 right-8 h-[3px] bg-gradient-to-r from-transparent via-[#1F6FEB]/90 to-transparent rounded-full" />
              
              {/* Enhanced content with better typography */}
              <motion.div
                className="relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.p
                  className="text-[#C9D1D9] mb-8 leading-relaxed text-xl md:text-2xl font-light"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <span className="font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent text-3xl md:text-4xl drop-shadow-lg">Technify Solutions</span> is a comprehensive technology provider that architects and delivers integrated solutions for businesses across all sectors. Our core expertise encompasses complete IT infrastructure, electronic security systems, audio-visual solutions, fire safety, and public address systems.
                </motion.p>
                
                <motion.p
                  className="text-[#C9D1D9]/90 text-lg md:text-xl leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  We serve a diverse range of environments, including data centers, warehouses, commercial buildings, industrial facilities, and the hospitality industry. More than just a vendor, we act as your <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent font-bold">strategic partner</span> and single point of contact, providing end-to-end technology solutions—from your on-site equipment to cloud connectivity—all dedicated to enriching the customer experience.
                </motion.p>
              </motion.div>
              
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1F6FEB]/5 via-transparent to-[#FFB300]/5 rounded-3xl" />
              
              {/* Floating particles */}
              <div className="absolute top-8 right-8 w-2 h-2 bg-[#1F6FEB]/60 rounded-full animate-pulse" />
              <div className="absolute bottom-12 left-12 w-2.5 h-2.5 bg-[#1F6FEB]/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </motion.div>
          </motion.div>

          {/* Enhanced Services Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.name}
                  className="group relative flex flex-col items-center justify-center bg-slate-800/70 backdrop-blur-2xl border border-white/20 p-9 rounded-3xl shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-500 transform hover:-translate-y-3"
                  whileHover={{ scale: 1.1, y: -10 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.15, duration: 0.8 }}
                >
                  {/* Corner decorations */}
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#1F6FEB]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#1F6FEB]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Enhanced icon container with glass-morphism effect */}
                  <div className="relative mb-7 p-5 rounded-2xl bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-slate-900/40 backdrop-blur-xl border border-white/20 shadow-lg transition-all duration-500 group-hover:from-blue-800/50 group-hover:to-purple-800/40">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/40 via-purple-500/40 to-pink-500/40 opacity-0 group-hover:opacity-40 transition-all duration-500" />
                    <div className="relative group-hover:scale-125 transition-transform duration-500 ease-out">
                      <Icon className="w-10 h-10 text-transparent bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 bg-clip-text group-hover:from-blue-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all duration-500 drop-shadow-lg" />
                    </div>
                    {/* Orbiting sparkles with enhanced animation */}
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-spin" style={{ animationDuration: '2s' }} />
                    <div className="absolute -bottom-2 -left-2 w-2.5 h-2.5 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-80 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '1.5s' }} />
                  </div>
                  
                  <div className="text-2xl font-bold text-white group-hover:text-blue-200 text-center leading-tight transition-all duration-500 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 bg-clip-text text-transparent">
                    {service.name}
                  </div>
                  
                  {/* Enhanced hover glow effect with dynamic gradient */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-80 transition-all duration-700 blur-sm" />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tl from-transparent via-blue-500/10 to-transparent opacity-0 group-hover:opacity-60 transition-all duration-1000 transform group-hover:scale-110" />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-purple-500/10 to-transparent opacity-0 group-hover:opacity-60 transition-all duration-1200 transform group-hover:scale-125" />
                  
                  {/* Enhanced bottom accent with animation */}
                  <div className="absolute left-6 right-6 -bottom-[2px] h-[3px] bg-gradient-to-r from-transparent via-blue-500/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full shadow-lg shadow-blue-500/50" />
                  <div className="absolute left-8 right-8 -bottom-1 h-[1px] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent opacity-0 group-hover:opacity-80 transition-all duration-700" />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}