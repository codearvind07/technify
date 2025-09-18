"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { 
  Settings, 
  Cpu, 
  BarChart3, 
  Wifi, 
  Shield, 
  Zap, 
  CheckCircle,
  Lock
} from "lucide-react";
import { SEO } from '@/components/seo/seo';

export default function BerhardPage() {
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

  return (
    <>
      <SEO 
        title="Berhard Control Kiosk - Durable High-Performance Technology Solutions"
        description="Berhard Control Kiosk designed for parking management, retail, airports, banking, and IT networking applications. Featuring rugged design, 10-year lifespan, IP22 compliance, and modular components."
        path="/products/berhard"
        image="/images/og-berhard.jpg"
      />
      <div className="font-[Poppins,sans-serif] min-h-screen bg-gradient-to-br from-[#0D1117] via-[#0D1117] to-[#0D1117] text-white overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-[#1F6FEB] rounded-full blur-[120px] opacity-10 animate-pulse -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFB300] rounded-full blur-[130px] opacity-10 animate-pulse -z-10" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#1F6FEB] rounded-full blur-[100px] opacity-5 animate-pulse animation-delay-2000 -z-10" />

      <main className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-center py-20">
          <motion.h1
            className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1F6FEB] to-[#FFB300]"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Berhard
          </motion.h1>
          <motion.p
            className="mt-4 max-w-3xl text-lg text-[#C9D1D9]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Durable and high-performance <span className="font-semibold">Control Kiosk</span> designed for Parking Management, Retail, Airports, Banking, and IT Networking applications.
          </motion.p>
        </section>

        {/* Quality Section */}
        <section className="py-16 px-6 md:px-16">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-[#1F6FEB]"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Quality and Longevity Requirements
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 text-[#C9D1D9]">
            {[
              { icon: CheckCircle, title: "ISO Certification", desc: "Consistent product quality & adherence to regulatory norms." },
              { icon: Shield, title: "Lifespan", desc: "Built to withstand at least 10 years of normal use." },
              { icon: Settings, title: "Modular Design", desc: "Interchangeable and replaceable parts for easy maintenance." }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-[#0D1117] to-[#0D1117] p-6 rounded-2xl shadow-lg hover:shadow-[#1F6FEB]/40 transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                <item.icon className="w-10 h-10 text-[#1F6FEB] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#1F6FEB]">{item.title}</h3>
                <p className="text-[#C9D1D9]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Durability Section */}
        <section className="py-20 px-6 md:px-16 bg-gradient-to-r from-[#0D1117] to-[#0D1117]">
          <motion.h2
            className="text-3xl font-bold text-center text-[#1F6FEB] mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Durability and Protection
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Rugged Design", desc: "Minimum lifespan of 10 years for structural stability." },
              { title: "Rodent Proof", desc: "IP22 compliant rodent-proof enclosure." },
              { title: "User Comfort", desc: "PU wrist support for enhanced user comfort." }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-6 bg-[#0D1117] rounded-2xl shadow-lg border border-[#0D1117] hover:scale-105 transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold text-[#1F6FEB] mb-2">{item.title}</h3>
                <p className="text-[#C9D1D9]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Additional Features */}
        <section className="py-16 px-6 md:px-16">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-[#1F6FEB]"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Additional Compliance & Design Features
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 text-[#C9D1D9]">
            {[
              { num: "1", title: "Grouting Provision", desc: "Concealed provision of grouting to the floor with anchor fasteners." },
              { num: "2", title: "Foam Gasket", desc: "All doors have foam gasket to protect equipment from dust." },
              { num: "3", title: "RoHS Certified", desc: "Enclosure certified to restrict hazardous material." }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-[#0D1117] to-[#0D1117] p-6 rounded-2xl shadow-lg relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                <div className="absolute -top-4 left-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#1F6FEB] text-white font-bold shadow-lg">
                  {item.num}
                </div>
                <h3 className="text-xl font-semibold mb-2 mt-2 text-[#C9D1D9]">{item.title}</h3>
                <p className="text-[#C9D1D9]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technology Partners Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#1F6FEB] via-[#1F6FEB] to-[#FFB300] bg-clip-text text-transparent"
            >
              Technology Partners & Products
            </motion.h2>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-12"
            >
              {/* PA & AV */}
              <motion.div variants={itemVariants} className="bg-[#0D1117]/90 backdrop-blur-md border border-[#0D1117] rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-[#C9D1D9] mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#1F6FEB]/20 rounded-lg flex items-center justify-center">
                    <Settings className="w-5 h-5 text-[#1F6FEB]" />
                  </div>
                  Public Address & Audio-Visual
                </h3>
                <div className="bg-gradient-to-br from-[#1F6FEB]/10 to-[#FFB300]/10 rounded-xl p-6 border border-[#1F6FEB]/20 hover:transform hover:-translate-y-1 transition-all duration-300">
                  <h4 className="font-semibold text-[#C9D1D9] mb-2">Heinrich</h4>
                  <p className="text-sm text-[#C9D1D9]">Professional PA & Audio-Visual Systems for Industrial Applications</p>
                </div>
              </motion.div>

              {/* Networking */}
              <motion.div variants={itemVariants} className="bg-[#0D1117]/90 backdrop-blur-md border border-[#0D1117] rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-[#C9D1D9] mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#1F6FEB]/20 rounded-lg flex items-center justify-center">
                    <Wifi className="w-5 h-5 text-[#1F6FEB]" />
                  </div>
                  Networking (Passive & Active)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-[#1F6FEB]/10 to-[#FFB300]/10 rounded-xl p-6 border border-[#1F6FEB]/20 hover:transform hover:-translate-y-1 transition-all duration-300">
                    <h4 className="font-semibold text-[#C9D1D9] mb-2">Legrand</h4>
                    <p className="text-sm text-[#C9D1D9]">Passive Networking Infrastructure</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#1F6FEB]/10 to-[#FFB300]/10 rounded-xl p-6 border border-[#1F6FEB]/20 hover:transform hover:-translate-y-1 transition-all duration-300">
                    <h4 className="font-semibold text-[#C9D1D9] mb-2">Cisco</h4>
                    <p className="text-sm text-[#C9D1D9]">Enterprise Networking Switches</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#1F6FEB]/10 to-[#FFB300]/10 rounded-xl p-6 border border-[#1F6FEB]/20 hover:transform hover:-translate-y-1 transition-all duration-300">
                    <h4 className="font-semibold text-[#C9D1D9] mb-2">Watchdog</h4>
                    <p className="text-sm text-[#C9D1D9]">Industrial Networking Switches</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#1F6FEB]/10 to-[#FFB300]/10 rounded-xl p-6 border border-[#1F6FEB]/20 hover:transform hover:-translate-y-1 transition-all duration-300">
                    <h4 className="font-semibold text-[#C9D1D9] mb-2">Fortinet</h4>
                    <p className="text-sm text-[#C9D1D9]">Advanced Firewall Solutions</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
    </>
  );
}