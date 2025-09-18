"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

import auto from "../../assets/automation.jpg";
import elv from "../../assets/elv.png";
import ict from "../../assets/ict.png";

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

export default function HomeSolutions() {
  const solutions = [
    {
      title: "AUTOMATION SOLUTIONS",
      subtitle: "Intelligent Control Systems",
      description:
        "Technify's automation division continuously researches innovative control applications and delivers integrated solutions tailored to every need. Our in‑house Automation Systems Engineers help design and implement robust, scalable processing systems.",
      extendedDescription: "From industrial process automation to smart building management, we create intelligent ecosystems that optimize performance, reduce operational costs, and enhance safety protocols through cutting-edge technology integration.",
      features: [
        "Industrial Process Control",
        "Smart Building Management",
        "SCADA Systems",
        "PLC Programming",
        "HMI Development",
        "IoT Integration"
      ],
      benefits: [
        "40% Reduction in Operational Costs",
        "Enhanced Safety & Compliance",
        "Real-time Monitoring & Control",
        "Predictive Maintenance"
      ],
      image: auto,
      link: "/solutions/automation",
      color: "green"
    },
    {
      title: "ELV SOLUTIONS",
      subtitle: "Extra-Low Voltage Systems",
      description:
        "Technify's Extra‑Low Voltage (ELV) solutions are an integral part of any electrical project scope. We specialize in turnkey delivery across a comprehensive stack of ELV systems for safety, efficiency, and seamless integration.",
      extendedDescription: "Our comprehensive ELV portfolio covers security, communication, and control systems that form the backbone of modern intelligent buildings and infrastructure projects.",
      features: [
        "CCTV & Security Systems",
        "Access Control Solutions",
        "Fire Alarm Systems",
        "Public Address Systems",
        "Structured Cabling",
        "Nurse Call Systems"
      ],
      benefits: [
        "Integrated Security Solutions",
        "24/7 Monitoring Capabilities",
        "Scalable Infrastructure",
        "Compliance with Safety Standards"
      ],
      image: elv,
      link: "/solutions/elv",
      color: "pink"
    },
    {
      title: "ICT SOLUTIONS",
      subtitle: "Information & Communication Technology",
      description:
        "Technify's Information & Communication Technology (ICT) division unifies connectivity through reliable infrastructure and modern architectures to enable cohesive, scalable communication across the enterprise.",
      extendedDescription: "We deliver future-ready ICT infrastructure that supports digital transformation initiatives, cloud integration, and seamless communication across all organizational levels.",
      features: [
        "Network Infrastructure",
        "Cloud Solutions",
        "Unified Communications",
        "Data Center Solutions",
        "Cybersecurity Services",
        "Managed IT Services"
      ],
      benefits: [
        "99.9% Network Uptime",
        "Enhanced Data Security",
        "Scalable Cloud Infrastructure",
        "24/7 Technical Support"
      ],
      image: ict,
      link: "/solutions/ict",
      color: "teal"
    },
  ];

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
              Solutions Portfolio
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-300/90 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
            End-to-end solutions designed for modern enterprises and smart environments with cutting-edge technology integration.
          </p>
        </motion.div>

        {/* Three-column feature layout with enhanced visual balance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24 items-start">
          {/* Left column with zigzag pattern for first solution */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-white/20 bg-slate-800/60 backdrop-blur-xl shadow-xl transition-all duration-500 group-hover:bg-slate-700/80 group-hover:shadow-blue-500/20">
                <motion.div 
                  className="mb-4 p-4 rounded-lg group-hover:opacity-80 transition-opacity"
                  whileHover="hover"
                  whileTap="tap"
                  initial="initial"
                  variants={iconVariants}
                >
                  <motion.div
                    variants={floatingAnimation}
                    animate="animate"
                  >
                    <div className="relative w-32 h-32 rounded-lg overflow-hidden">
                      <Image 
                        src={solutions[0].image} 
                        alt={solutions[0].title} 
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                </motion.div>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-200 transition-all duration-300 mb-2">
                  {solutions[0].title}
                </h3>
                <p className="text-slate-300/90 text-sm mb-4">
                  {solutions[0].subtitle}
                </p>
                <p className="text-slate-300/80 text-base leading-relaxed">
                  {solutions[0].description}
                </p>
                <Link 
                  href={solutions[0].link}
                  className="mt-6 inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:from-blue-500 hover:to-purple-500"
                >
                  Learn More
                </Link>
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
              <div className="relative w-96 h-96 rounded-3xl overflow-hidden border border-white/30 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-slate-900/40 backdrop-blur-2xl"></div>
                <Image
                  src={solutions[1].image}
                  alt={solutions[1].title}
                  fill
                  className="object-cover relative z-10 hover:brightness-110 transition-all duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-blue-900/30 to-transparent"></div>
              </div>
            </div>
            
            {/* Center solution */}
            <motion.div
              whileHover={{ y: -5 }}
              className="group mb-6 w-full"
            >
              <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-white/20 bg-slate-800/60 backdrop-blur-xl shadow-xl transition-all duration-500 group-hover:bg-slate-700/80 group-hover:shadow-blue-500/20">
                <motion.div 
                  className="mb-4 p-3 rounded-lg group-hover:opacity-80 transition-opacity"
                  whileHover="hover"
                  whileTap="tap"
                  initial="initial"
                  variants={iconVariants}
                >
                  <motion.div
                    variants={floatingAnimation}
                    animate="animate"
                  >
                    <div className="relative w-28 h-28 rounded-lg overflow-hidden">
                      <Image 
                        src={solutions[1].image} 
                        alt={solutions[1].title} 
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                </motion.div>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-200 transition-all duration-300 mb-2">
                  {solutions[1].title}
                </h3>
                <p className="text-slate-300/90 text-sm mb-4">
                  {solutions[1].subtitle}
                </p>
                <p className="text-slate-300/80 text-base leading-relaxed">
                  {solutions[1].description}
                </p>
                <Link 
                  href={solutions[1].link}
                  className="mt-6 inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:from-blue-500 hover:to-purple-500"
                >
                  Learn More
                </Link>
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
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-white/20 bg-slate-800/60 backdrop-blur-xl shadow-xl transition-all duration-500 group-hover:bg-slate-700/80 group-hover:shadow-blue-500/20">
                <motion.div 
                  className="mb-4 p-4 rounded-lg group-hover:opacity-80 transition-opacity"
                  whileHover="hover"
                  whileTap="tap"
                  initial="initial"
                  variants={iconVariants}
                >
                  <motion.div
                    variants={floatingAnimation}
                    animate="animate"
                  >
                    <div className="relative w-32 h-32 rounded-lg overflow-hidden">
                      <Image 
                        src={solutions[2].image} 
                        alt={solutions[2].title} 
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                </motion.div>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-200 transition-all duration-300 mb-2">
                  {solutions[2].title}
                </h3>
                <p className="text-slate-300/90 text-sm mb-4">
                  {solutions[2].subtitle}
                </p>
                <p className="text-slate-300/80 text-base leading-relaxed">
                  {solutions[2].description}
                </p>
                <Link 
                  href={solutions[2].link}
                  className="mt-6 inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:from-blue-500 hover:to-purple-500"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
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