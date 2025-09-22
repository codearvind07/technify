"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Import images
import AboutHeroImage from "../../assets/beanbag-person.png";
import TeamImage from "../../assets/elv.png";
import VisionImage from "../../assets/beanbag-person.png";

const strengths = [
  {
    title: "CHECKOUTS DOCTOR'S",
    description: "Touchy used its identity to harness in most the unique needs and capabilities of each customer. Our team of experts volunteered to share our expertise with all our public knowledge, by delivering excellent experience with everyday creative and modernness.",
    icon: "🔄"
  },
  {
    title: "TECHNICAL REPUTER",
    description: "When highly technical investment firms, Touchy's commitment to focus technology was already one person. We only opted for the community, also healthcare, working group, conducted training with the global brand and physical technologies.",
    icon: "💻"
  },
  {
    title: "RELIABLE SERVICES",
    description: "Beyond the retail design and implementation, Touchy provides ongoing support to other local businesses across the central world. Our communications system includes digital platforms, mobile phones, electronic devices, digital applications, and mobile smartphones.",
    icon: "🛡️"
  },
  {
    title: "PUBLIC COLLETTERCENTRALIZATION",
    description: "Our company for employees of non-executive non-territory business, Touchy, uses a trusted loyalty company, which has been supported by industry-related organizations. The company has grown up on the next scale for year.",
    icon: "🌐"
  },
  {
    title: "SECURITY AND COMMUNICATION",
    description: "The use of keypoint-cleanwork events and employee numbers requirements following customers implementing them will continue to address the problem for delivery and timely pay-forward and maintenance. We are proud of these.",
    icon: "🔒"
  }
];

const values = [
  {
    title: "Relationships",
    description: "Virtual ownership and ensure accountability to all our clients.",
    icon: "🤝"
  },
  {
    title: "Integrity",
    description: "Our foundation is built on unwavering honesty and ethical principles.",
    icon: "⚖️"
  },
  {
    title: "Concerns",
    description: "We approach every interaction with respect, preference, and humility.",
    icon: "💭"
  },
  {
    title: "Adaptability",
    description: "We initially embrace change and innovation to meet evolving expectations.",
    icon: "🔄"
  },
  {
    title: "Excellence",
    description: "We constantly strive for the highest standards and practicality.",
    icon: "⭐"
  }
];

export default function AboutHero() {
  const [activeTab, setActiveTab] = useState("mission");

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
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 font-[Poppins,sans-serif] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full opacity-10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500 rounded-full opacity-10 blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-blue-500 rounded-full opacity-5 blur-3xl animate-pulse-slow animation-delay-4000"></div>
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 -z-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <main className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="relative py-12 flex flex-col items-center justify-center text-gray-900">
          <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center"
            >
              <motion.div 
                variants={itemVariants}
                className="inline-flex items-center bg-gradient-to-r from-blue-500/10 to-orange-500/10 text-blue-600 px-4 py-2 rounded-full mb-6 border border-blue-500/30"
              >
                <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full mr-2 animate-pulse"></span>
                About Technify
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900 tracking-tight leading-tight"
              >
                THIS IS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">WHO WE ARE</span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 font-light leading-relaxed"
              >
                A technology-driven solution offering company providing comprehensive services across multiple domains
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-12 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  How We Serve You
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    "Knowledge of Professional Asset Groups",
                    "Personal Client System",
                    "Key Audit System",
                    "Customer & Supervisor",
                    "Power Solutions",
                    "Integrated Auditor",
                    "Governance System",
                    "Public Address & Compliance System"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-900">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Technify Solution Controller is a technology-driven solution offering company involved in information communication & technology across Globe & Television, Electronic Society systems, Globe Automation, Electronics Systems, BFS Services, and Air Systems as core business domains.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  In our dedicated network, we enhance Customer Experience by providing comprehensive solutions and related services to customers across various verticals including Electronics, warehouses, Commercial infrastructure, industries, hospitality and many more.
                </p>
                <blockquote className="border-l-4 border-blue-500 pl-6 italic text-gray-900">
                  "Technify is our joint venture company. We pride ourselves on being your comprehensive solution provider that you can always rely on."
                </blockquote>
              </motion.div>
              
              <motion.div variants={itemVariants} className="relative">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={AboutHeroImage}
                    alt="Technify Team"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-70"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl flex items-center justify-center text-4xl text-white">
                  🚀
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Technify Section */}
        <section className="py-16 bg-white relative rounded-2xl mt-12">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNwcmltYXJ5IiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSI+PHBhdGggZD0iTSAwIDAgTCA2MCA2MCBNIDYwIDAgTCAwIDYwIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="text-center mb-16"
            >
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                WHY CHOOSE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">TECHNIFY</span>
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover what sets us apart in the technology solutions industry
              </motion.p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {strengths.map((strength, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 hover:border-blue-500/30 transition-all group hover:shadow-lg"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4">{strength.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {strength.title}
                  </h3>
                  <p className="text-gray-600">{strength.description}</p>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <span className="text-blue-600 text-sm font-semibold">LANDWORK</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-12 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="text-center mb-16"
            >
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                VISION & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">MISSION</span>
              </motion.h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Mission */}
              <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-orange-500 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-6">MISSION</h3>
                <p className="text-gray-600 leading-relaxed">
                  Delivered in bringing a license and intelligent virtual, launching Customer Experiences and Leading Team. We Promote a Future Home Safety and Innovation Partnership (COBE). Our responsibility is to contribute and capture specific approaches to make the world a safe, creative and more interconnected place for everyone.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-orange-500 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-6">VISION</h3>
                <p className="text-gray-600 leading-relaxed">
                  To create solutions that empower communities with safety, intelligence, and security, fostering a brighter future for all. Our commitment to excellence drives us to continuously enhance our business using leading edge technology and dynamic innovation.
                </p>
              </motion.div>
            </div>

            {/* Values */}
            <motion.div variants={itemVariants} className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">COBE VALUES</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="text-center bg-white p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl text-white">
                      {value.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Culture */}
            <motion.div variants={itemVariants} className="mt-12 bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">COBE CULTURE</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                People Come First. We value our employees and believe they are truly responsible for our success. We continuously create opportunities for our people to grow professionally and prosper.
              </p>
              <p className="text-gray-600 leading-relaxed">
                At Technify, our team members work beyond customers' leadership processes and have an audience at different times, for us, and for the world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-orange-500 text-white relative overflow-hidden rounded-2xl mt-12">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNwcmltYXJ5LWZvcmVncm91bmQiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2Utb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNIDAgMCBMIDYwIDYwIE0gNjAgMCBMIDAgNjAiLz48L2c+PC9zdmc+')] opacity-20"></div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Contact Us
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl text-left max-w-md mx-auto"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">INFORMATION</h3>
              <ul className="space-y-2 text-gray-900">
                <li>• ACCOMMODATE ANNUAL REPORT</li>
                <li>• RESEARCH FOR YOUR COMPANY</li>
                <li>• WORKSHIP FOR YOU</li>
              </ul>
              
              <div className="mt-6 space-y-2">
                <p className="text-gray-900">Email: info@technify.com</p>
                <p className="text-gray-900">Website: www.technify.com</p>
                <p className="text-gray-900">Email: contact@technify.com</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            >
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:-translate-y-1">
                Get In Touch
              </button>
              <button className="bg-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-800 transition-all shadow-lg hover:-translate-y-1 border-2 border-transparent">
                Request Consultation
              </button>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}