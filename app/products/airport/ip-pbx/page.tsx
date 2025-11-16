"use client";

import { motion, Variants } from "framer-motion";
import { 
  Phone, 
  Wifi, 
  Users, 
  Server, 
  Shield, 
  Download,
  ArrowRight,
  Play,
  Check,
  Zap,
  Eye,
  AlertTriangle,
  Clock
} from "lucide-react";
import { SEO } from '@/components/seo/seo';
import Image from "next/image";

export default function AirportIPPBXPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 0.2,
        ease: "easeOut"
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      },
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.1
      } 
    }
  };

  const floatAnimation: Variants = {
    hidden: { y: 0 },
    visible: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const coreCapabilities = [
    {
      icon: Phone,
      title: "VoIP-Based Unified Communication",
      items: [
        "High-definition voice calling",
        "SIP trunking for flexible connectivity",
        "Internal extensions across all departments",
        "Voice mail, call forwarding, call queuing"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Dedicated Hotlines & Priority Calling",
      items: [
        "Hotline phones for ATC",
        "Priority calling for emergency teams",
        "Direct line communication for security & CISF",
        "Zero-delay communication channels"
      ]
    },
    {
      icon: Wifi,
      title: "IP Intercom & Help Points",
      items: [
        "Touchless intercom units",
        "Emergency call points across terminals",
        "Integrated CCTV pop-up for each call",
        "Auto-location display in control room"
      ]
    },
    {
      icon: Shield,
      title: "Redundant & Fail-Safe Architecture",
      items: [
        "Dual servers in high-availability mode",
        "Auto failover switching",
        "Redundant power supply",
        "Backup routing & SIP failover"
      ]
    },
    {
      icon: Users,
      title: "Department-Wise Communication Groups",
      items: [
        "Baggage handling",
        "Terminal control",
        "Security teams",
        "Engineering & maintenance",
        "Airlines & ground staff",
        "Fire & rescue teams"
      ]
    },
    {
      icon: Server,
      title: "Smart Call Analytics & Logs",
      items: [
        "Call recording",
        "Call analytics (duration, volume, missed calls)",
        "Centralized admin console",
        "Monitoring of all extensions"
      ]
    }
  ];

  const technicalHighlights = [
    "SIP-based open standard architecture",
    "Secure RTP encryption for voice",
    "Gigabit network connectivity",
    "Compatible with IP phones, softphones, mobile apps",
    "Firewall & SBC protection",
    "Integration with airport LDAP/AD systems"
  ];

  const coverageZones = [
    "Terminal control rooms",
    "BHS & cargo operations",
    "Security command centers",
    "Boarding gates",
    "Staff offices",
    "Apron operations / airside teams",
    "Fire & rescue stations",
    "Parking management zones"
  ];

  const systemIntegrations = [
    "CCTV → Caller video popup",
    "Access Control → Door intercom communication",
    "PAS → Unified announcements + communication",
    "BMS → Automated event alerts",
    "Airport ERP/AODB → Cross-system communication"
  ];

  const operatorBenefits = [
    "Faster incident response",
    "Centralized communication control",
    "Increased staff coordination",
    "Secure communication channels",
    "Multi-terminal connectivity",
    "Lower operational downtime",
    "Future-ready VoIP/UC architecture"
  ];

  return (
    <>
      <SEO 
        title="Airport IP PBX & Communication System - Unified Communications"
        description="Advanced IP PBX and Communication Systems for airports featuring unified communications, IP-based infrastructure, high availability, and centralized management for seamless operations. airport IP PBX system, unified communication for airports, VoIP airport communication, SIP PBX airport, airport intercom system, airport emergency communication network"
        path="/products/airport/ip-pbx"
        image="/images/og-airport-ip-pbx.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
        <main>
          {/* Hero Section */}
          <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden -z-10">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
            </div>
            
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div 
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >
                  <motion.div 
                    variants={itemVariants}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Airport Communication Solution
                  </motion.div>
                  
                  <motion.h1 
                    variants={itemVariants}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900"
                  >
                    IP PBX & Communication{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      System
                    </span>
                  </motion.h1>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-xl text-gray-600 mb-2 max-w-2xl leading-relaxed"
                  >
                    Unified Communication. Instant Connectivity. Zero Communication Gaps.
                  </motion.p>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed"
                  >
                    Airports require highly reliable, secure, and instant communication between multiple departments — ATC, security teams, terminal operations, baggage handling, emergency response units, and administration. Technify provides carrier-grade IP PBX & Unified Communication Systems engineered for complex airport environments.
                  </motion.p>
                  
                  
                </motion.div>
                
                <motion.div 
                  initial="hidden"
                  animate="visible"
                  variants={floatAnimation}
                  className="relative"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                    <Image
                      src="https://images.unsplash.com/photo-1531581867168-2a28d1d86069?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SVAlMjBQQlglMjAlMjYlMjBDb21tdW5pY2F0aW9uJTIwVW5pZmllZCUyMENvbW11bmljYXRpb25zJTIwZm9yJTIwQWlycG9ydHN8ZW58MHx8MHx8fDA%3D"
                      alt="Airport IP PBX & Communication System"
                      width={600}
                      height={400}
                      className="object-cover w-full h-96"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-bold">IP PBX & Communication</h3>
                      <p className="mt-2 opacity-90">Unified Communications for Airports</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Why IP PBX Is Critical Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Why IP PBX Is Critical for Airports
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Airports operate like a city — with thousands of people working simultaneously. A robust communication backbone ensures:
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerChildren}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {[
                  "Immediate coordination during emergencies",
                  "Clear communication between departments",
                  "Faster operational decision-making",
                  "Secure and encrypted voice channels",
                  "Reliable communication even during network failures"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <p className="text-gray-800 font-medium">{item}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* What Technify Delivers Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  What Technify Delivers
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  We deploy scalable, redundant, enterprise-grade IP PBX systems tailored for small terminals, mega airports, and multi-terminal structures.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Core Capabilities Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Core Capabilities
                </h2>
              </motion.div>
              
              <div className="space-y-8">
                {coreCapabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-lg rounded-2xl p-8 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <capability.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-5">
                          {capability.title}
                        </h3>
                        
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {capability.items.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors duration-200">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span className="text-gray-700 font-medium">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Technical Highlights Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Technical Highlights
                </h2>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerChildren}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {technicalHighlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <p className="text-gray-800 font-medium">{highlight}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Where IP PBX Is Used Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Where IP PBX Is Used in Airports
                </h2>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerChildren}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {coverageZones.map((zone, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.03 }}
                    className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">{zone}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* System Integrations Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  System Integrations
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Technify integrates IP PBX with:
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerChildren}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {systemIntegrations.map((integration, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <p className="text-gray-800 font-medium">{integration}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mt-12"
              >
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Creates an end-to-end communication fabric across the airport.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Components Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                  className="relative"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                    <Image
                      src="https://images.unsplash.com/photo-1705934718499-230ad8981ba5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="IP PBX System Components"
                      width={600}
                      height={400}
                      className="object-cover w-full h-96"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-bold">System Components</h3>
                      <p className="mt-2 opacity-90">Complete Communication Infrastructure</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={containerVariants}
                >
                  <motion.h2 
                    variants={itemVariants}
                    className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
                  >
                    Key Components
                  </motion.h2>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-lg text-gray-600 mb-8 leading-relaxed"
                  >
                    Our IP PBX & Communication System includes all essential components for comprehensive airport communication.
                  </motion.p>
                  
                  <motion.div 
                    variants={staggerChildren}
                    className="space-y-5"
                  >
                    {[
                      "IP PBX servers",
                      "SIP phones",
                      "Intercom units",
                      "Emergency call points",
                      "Mobile applications",
                      "Central management software"
                    ].map((component, index) => (
                      <motion.div 
                        key={index}
                        variants={fadeInUp}
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 border border-gray-100 transition-all duration-300 group"
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Phone className="h-4 w-4 text-white" />
                        </div>
                        <div className="font-medium text-gray-900 group-hover:text-gray-900">{component}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Benefits for Airport Operators
                </h2>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerChildren}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {operatorBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <p className="text-gray-800 font-medium">{benefit}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center text-white"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Streamline Airport Communications?</h2>
                <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
                  Contact our experts to discuss how our IP PBX & Communication System can enhance operations at your airport.
                </p>
                
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}