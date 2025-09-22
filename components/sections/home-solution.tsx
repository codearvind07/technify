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
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: "easeInOut"
    } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.7,
      ease: "easeInOut"
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
      color: "blue",
      icon: "🤖"
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
      color: "orange",
      icon: "🔌"
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
      color: "blue",
      icon: "🌐"
    },
  ];

  return (
    <section className="relative w-full py-24 md:py-32 bg-gradient-to-br from-[#0D1117] via-[#161B2A] to-[#1D2336] text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#1F6FEB]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#fb8500]/10 rounded-full blur-3xl animate-pulse-slower"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(to right, #fb8500 1px, transparent 1px),
                              linear-gradient(to bottom, #1F6FEB 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Floating elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-12 h-12 rounded-lg bg-[#1F6FEB]/10 backdrop-blur-sm border border-[#1F6FEB]/20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1]
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-8 h-8 rounded-full bg-[#fb8500]/10 backdrop-blur-sm border border-[#fb8500]/20"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1],
            delay: 1
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Decorative corner accents */}
        <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-[#1F6FEB]/30"></div>
        <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-[#fb8500]/30"></div>
        <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-[#1F6FEB]/30"></div>
        <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-[#fb8500]/30"></div>
        
        {/* Professional header */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-20 relative"
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-[#232946]/80 backdrop-blur-md border border-[#1F6FEB]/30 rounded-full px-5 py-2.5 mb-8 shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ y: -2 }}
          >
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#1F6FEB] to-[#fb8500] animate-pulse"></div>
            <span className="text-[#fb8500] text-sm font-medium tracking-wider uppercase">Our Solutions</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
            <span className="block text-white mb-3">Comprehensive Technology</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1F6FEB] to-[#fb8500]">
              Solutions Portfolios
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-[#e2e8f0] max-w-3xl mx-auto font-light leading-relaxed">
            End-to-end solutions designed for modern enterprises and smart environments with cutting-edge technology integration.
          </p>
        </motion.div>

        {/* Solution Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative flex flex-col h-full rounded-2xl overflow-hidden shadow-2xl border border-[#1F6FEB]/20 bg-[#232946]/90 backdrop-blur-sm transition-all duration-500"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0D1117] opacity-90 group-hover:opacity-80 transition-opacity duration-500 z-10"></div>
              
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={solution.image} 
                  alt={solution.title} 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] to-transparent opacity-70"></div>
                
                {/* Icon badge */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-[#232946]/80 backdrop-blur-sm border border-[#1F6FEB]/30 flex items-center justify-center text-2xl">
                  {solution.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-20 flex flex-col flex-grow p-6">
                <h3 className="text-xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-[#fb8500]">
                  {solution.title}
                </h3>
                <p className="text-[#fb8500] text-lg font-semibold mb-4 transition-colors duration-300 group-hover:text-[#1F6FEB]">
                  {solution.subtitle}
                </p>
                <p className="text-[#cbd5e1] mb-6 leading-relaxed flex-grow">
                  {solution.description}
                </p>
                
                {/* Features list */}
                <div className="mb-6">
                  <h4 className="text-white text-sm font-semibold mb-2 uppercase tracking-wider">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {solution.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#fb8500] mr-2"></div>
                        <span className="text-xs text-[#cbd5e1]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Link 
                  href={solution.link}
                  className="inline-flex items-center justify-center bg-gradient-to-r from-[#1F6FEB] to-[#fb8500] text-white font-semibold px-5 py-3 rounded-lg transition-all duration-300 hover:from-[#fb8500] hover:to-[#1F6FEB] shadow-md hover:shadow-lg transform hover:-translate-y-1 mt-auto"
                >
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional content section */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center max-w-4xl mx-auto relative"
        >
          <div className="absolute -left-20 top-10 w-40 h-40 bg-[#1F6FEB]/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -right-20 bottom-10 w-40 h-40 bg-[#fb8500]/10 rounded-full blur-3xl -z-10"></div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Integrated Technology Solutions
          </h3>
          <p className="text-lg md:text-xl text-[#cbd5e1] mb-10 leading-relaxed">
            Our comprehensive approach combines innovative technology with industry expertise to deliver solutions that enhance security, efficiency, and user experience across all your infrastructure needs.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { text: "System Integration", icon: "🔄" },
              { text: "24/7 Support", icon: "🛡️" },
              { text: "Scalable Design", icon: "📈" },
              { text: "Security First", icon: "🔒" },
              { text: "Future Proof", icon: "🚀" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                className="flex items-center gap-2 px-5 py-2.5 bg-[#232946]/80 backdrop-blur-sm border border-[#1F6FEB]/30 rounded-full text-white text-base font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:border-[#fb8500]/30 hover:bg-[#232946]"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}