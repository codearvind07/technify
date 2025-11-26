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
      duration: 0.6,
      ease: "easeOut"
    } 
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    } 
  }
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
     
    },
  ];

  return (
<section className="relative w-full pt-6 pb-14 md:pt-8 md:pb-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Professional header */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-1 md:mb-20 relative"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
            <span className="block text-gray-900 mb-2">Comprehensive Technology  Solutions Portfolios </span>
                     </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            End-to-end solutions designed for modern enterprises and smart environments with cutting-edge technology integration.
          </p>
        </motion.div>

        {/* Solution Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col h-full rounded-2xl overflow-hidden shadow-sm border border-gray-200 bg-white transition-all duration-500 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={solution.image} 
                  alt={solution.title} 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-20 flex flex-col flex-grow p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-orange-500">
                  {solution.title}
                </h3>
                <p className="text-orange-500 text-lg font-semibold mb-4 transition-colors duration-300 group-hover:text-blue-600">
                  {solution.subtitle}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  {solution.description}
                </p>
                
                {/* Features list */}
                <div className="mb-6">
                  <h4 className="text-gray-900 text-sm font-semibold mb-2 uppercase tracking-wider">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {solution.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></div>
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Link 
                  href={solution.link}
                  className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-orange-500 text-white font-semibold px-5 py-3 rounded-lg transition-all duration-300 hover:from-blue-700 hover:to-orange-600 shadow-sm hover:shadow-md transform hover:-translate-y-1 mt-auto border border-blue-200"
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
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto relative"
        >
          <div className="absolute -left-20 top-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -right-20 bottom-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl -z-10"></div>
          
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
            Integrated Technology Solutions
          </h3>
          <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-10 leading-relaxed">
            Our comprehensive approach combines innovative technology with industry expertise to deliver solutions that enhance security, efficiency, and user experience across all your infrastructure needs.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {[
              { text: "System Integration", icon: "🔄" },
              { text: "24/7 Support", icon: "🛡️" },
              { text: "Scalable Design", icon: "📈" },
              { text: "Security First", icon: "🔒" },
              { text: "Future Proof", icon: "🚀" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-gray-900 text-sm md:text-base font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:border-orange-300 hover:bg-white"
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