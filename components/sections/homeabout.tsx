'use client';

import Head from "next/head";
import Image from "next/image";
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

import aboutImage from "../../assets/Implementation.jpg";

/* ------------------ SERVICES ------------------ */
const services = [
  { name: "IT Solutions", desc: "Scalable and robust IT infrastructure.", icon: Server, stats: "99.9% Uptime" },
  { name: "Gate Automation", desc: "Seamless and secure access control.", icon: KeySquare, stats: "Automated" },
  { name: "Fire Safety", desc: "Reliable fire detection and suppression.", icon: Flame, stats: "Certified" },
  { name: "Public Address", desc: "Clear and effective communication.", icon: Mic2, stats: "Crystal Clear" },
];

export default function HomeAbout() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white text-gray-800">
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

      {/* ------------------ PAGE HEAD ------------------ */}
      <Head>
        <title>About Us | Technify Solutions</title>
        <meta
          name="description"
          content="Technology driven solution offering company with portfolio of entire ICT"
        />
      </Head>

      {/* ------------------ HERO SECTION (UPDATED) ------------------ */}
      <section className="pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 px-4 sm:px-6 text-center relative">
        <div className="max-w-5xl mx-auto relative z-10">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-gray-900 leading-tight font-poppins"
          >
            About Us
          </h1>

          <p
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-raleway"
          >
            Discover the innovative technology solutions that drive business transformation.
          </p>
        </div>
      </section>

      {/* ------------------ ABOUT CONTENT (UPDATED) ------------------ */}
      <main className="relative container mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-16 sm:pb-20 z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* ABOUT SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 sm:mb-20 md:mb-24">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 font-poppins">
                Empowering Innovation Through Technology
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-3 sm:mb-4 font-raleway">
                <span className="font-bold text-gray-800">Technify Solutions</span> is a young and ambitious startup driven by innovation and passion for technology.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-3 sm:mb-4 font-raleway">
                We specialize in IT infrastructure, cybersecurity, automation, cloud technologies — and turn complex ideas into simple, impactful digital solutions.
              </p>
              <p className="italic border-l-4 border-blue-500 pl-4 text-sm sm:text-base text-gray-700 font-raleway">
                "We craft digital experiences that help businesses evolve, adapt, and thrive in a connected world."
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative h-64 sm:h-72 md:h-80 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-gray-200"
            >
              <Image src={aboutImage} alt="About Technify Solutions" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </motion.div>
          </div>

          {/* SERVICES GRID (UPDATED) */}
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 sm:mb-6 font-poppins"
          >
            Comprehensive Technology Services
          </h2>
          <p 
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12 sm:mb-16 font-raleway"
          >
            Trust our expertise, innovation, and long-lasting commitment to delivering transformative technology solutions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  key={service.name} 
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 text-center hover:shadow-lg transition-all duration-300 relative overflow-hidden group h-full"
                >
                  <div 
                    className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-100 to-orange-100 flex items-center justify-center"
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 font-poppins">{service.name}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 font-raleway">{service.desc}</p>
                  <span className="inline-block px-3 sm:px-4 py-1 bg-blue-50 text-blue-700 text-xs sm:text-sm rounded-full font-raleway">{service.stats}</span>
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-transparent group-hover:border-blue-500 transition-all duration-300 pointer-events-none"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}