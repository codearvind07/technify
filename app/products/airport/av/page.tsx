"use client";

import { motion, Variants } from "framer-motion";
import { 
  Tv, 
  Video, 
  Speaker, 
  Monitor, 
  Zap, 
  Download,
  ArrowRight,
  Play,
  Check,
  Server,
  Shield,
  Eye,
  AlertTriangle,
  Users,
  Clock
} from "lucide-react";
import { SEO } from '@/components/seo/seo';
import Image from "next/image";

export default function AirportAVPage() {
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
      icon: Monitor,
      title: "Video Walls & Large Format Displays",
      items: [
        "LED/LCD video walls",
        "Ultra-narrow bezel displays",
        "24×7 commercial-grade screens",
        "High brightness for terminal visibility",
        "Central content management"
      ]
    },
    {
      icon: Tv,
      title: "Digital Signage Systems",
      items: [
        "Flight and airport information boards",
        "Retail & advertisement displays",
        "Interactive kiosks",
        "Wayfinding displays",
        "Multi-zone content layouts"
      ]
    },
    {
      icon: Server,
      title: "Control Room AV Integration",
      items: [
        "Multi-source input switching",
        "Operator consoles",
        "KVM systems",
        "Real-time dashboards",
        "Redundant processors",
        "Integrated CCTV, FIDS, PAS feeds"
      ]
    },
    {
      icon: Video,
      title: "Meeting Room & Conference AV",
      items: [
        "Video conferencing systems",
        "Interactive displays",
        "Wireless presentation devices",
        "Digital whiteboards",
        "Acoustic optimization"
      ]
    },
    {
      icon: Speaker,
      title: "PA-Integrated AV Systems",
      items: [
        "AV + PAS synchronization",
        "Automated audio routing",
        "Emergency override capability"
      ]
    },
    {
      icon: Zap,
      title: "Backend AV Processing",
      items: [
        "Media servers",
        "Audio processors",
        "Video encoders & decoders",
        "HDMI/SDI/IP-based switching",
        "Redundant rack infrastructure"
      ]
    }
  ];

  const technicalHighlights = [
    "4K/8K resolution support",
    "Central management dashboard",
    "Fiber/IP-based AV distribution",
    "Fail-safe hardware for 24×7 usage",
    "Remote device monitoring",
    "Audio DSP for crystal-clear sound",
    "Cloud-enabled content scheduling"
  ];

  const coverageZones = [
    "Terminal arrival and departure halls",
    "Security & surveillance control rooms",
    "Boarding gates",
    "Baggage claim areas",
    "Retail zones & food courts",
    "VIP lounges",
    "Meeting rooms",
    "Outdoor roadside displays"
  ];

  const systemIntegrations = [
    "FIDS → Flight information display sync",
    "CCTV → Control room video feeds",
    "PAS → Emergency broadcast integration",
    "BMS → Automated power & scheduling",
    "Parking & traffic systems → Digital signage for vehicle flow"
  ];

  const operatorBenefits = [
    "Clear & dynamic passenger communication",
    "Fully integrated control rooms",
    "Higher advertising revenue via digital signage",
    "Smooth wayfinding",
    "Modern airport ambience",
    "High visibility information points",
    "24×7 reliability"
  ];

  return (
    <>
      <SEO 
        title="Airport Audio-Visual (AV) Solutions - Comprehensive AV Systems"
        description="Advanced Audio-Visual Solutions for airports featuring high-definition displays, video conferencing, audio systems, and control room solutions for enhanced passenger experience and operations. airport av solutions, airport video wall system, digital signage for airports, airport control room AV, terminal display systems, aviation AV technology"
        path="/products/airport/av"
        image="/images/og-airport-av.jpg"
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
                    <Tv className="w-4 h-4 mr-2" />
                    Airport AV Solution
                  </motion.div>
                  
                  <motion.h1 
                    variants={itemVariants}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900"
                  >
                    Audio-Visual{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Solutions
                    </span>
                  </motion.h1>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-xl text-gray-600 mb-2 max-w-2xl leading-relaxed"
                  >
                    Immersive Displays. Intelligent Control Rooms. Seamless Passenger Experience.
                  </motion.p>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed"
                  >
                    Airports rely heavily on Audio-Visual (AV) systems to deliver information, monitor operations, manage control centers, and enhance the overall passenger journey. Technify provides enterprise-grade AV solutions designed for continuous 24×7 airport operations.
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
                      src="https://images.unsplash.com/photo-1725111503088-6b90a4493976?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEF1ZGlvLVZpc3VhbCUyMFNvbHV0aW9ucyUyMEVuaGFuY2VkJTIwRXhwZXJpZW5jZSUyMGZvciUyMEFpcnBvcnRzfGVufDB8fDB8fHww"
                      alt="Airport Audio-Visual Solutions"
                      width={600}
                      height={400}
                      className="object-cover w-full h-96"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-bold">Audio-Visual Solutions</h3>
                      <p className="mt-2 opacity-90">Enhanced Experience for Airports</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Why AV Systems Matter Section */}
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
                  Why AV Systems Matter in Airports
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  AV systems power the airport's:
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
                  "Information displays",
                  "Flight operations hubs",
                  "Security control rooms",
                  "Wayfinding and signage",
                  "Meeting & collaboration rooms",
                  "Advertising and revenue generation"
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
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mt-12"
              >
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  In short — AV is the visual interface of the entire airport.
                </p>
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
                  A complete AV ecosystem ranging from large-format displays to fully integrated control room environments.
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
                        
                        {index === 0 && (
                          <p className="mt-4 text-gray-600 italic">
                            Used in: control rooms, baggage halls, departure lounges, arrival areas.
                          </p>
                        )}
                        {index === 4 && (
                          <p className="mt-4 text-gray-600 italic">
                            Ideal for terminal-wide announcements and passenger guidance.
                          </p>
                        )}
                        {index === 5 && (
                          <p className="mt-4 text-gray-600 italic">
                            Built to run non-stop, even in peak traffic.
                          </p>
                        )}
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

          {/* Where AV Is Used Section */}
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
                  Where AV Is Used in Airports
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
                  Technify integrates AV with:
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
                  Creates a unified and intelligent visual ecosystem across the airport.
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
                      src="https://images.unsplash.com/photo-1656336662091-29bc98d542d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEF1ZGlvLVZpc3VhbCUyMFNvbHV0aW9ucyUyMEVuaGFuY2VkJTIwRXhwZXJpZW5jZSUyMGZvciUyMEFpcnBvcnRzfGVufDB8fDB8fHww"
                      alt="AV System Components"
                      width={600}
                      height={400}
                      className="object-cover w-full h-96"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-bold">System Components</h3>
                      <p className="mt-2 opacity-90">Complete AV Infrastructure</p>
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
                    Our Audio-Visual Solutions include all essential components for comprehensive airport AV systems.
                  </motion.p>
                  
                  <motion.div 
                    variants={staggerChildren}
                    className="space-y-5"
                  >
                    {[
                      "Video walls and displays",
                      "Digital signage systems",
                      "Control room consoles",
                      "Audio processing equipment",
                      "Media servers",
                      "Central management software"
                    ].map((component, index) => (
                      <motion.div 
                        key={index}
                        variants={fadeInUp}
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 border border-gray-100 transition-all duration-300 group"
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Tv className="h-4 w-4 text-white" />
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Airport AV Experience?</h2>
                <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
                  Contact our experts to discuss how our Audio-Visual Solutions can transform your airport facilities.
                </p>
                
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}