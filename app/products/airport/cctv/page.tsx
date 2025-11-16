"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {
  Camera,
  Eye,
  Shield,
  Zap,
  Cloud,
  Check,
  Play,
  Download,
  ArrowRight,
} from "lucide-react";
import { SEO } from "@/components/seo/seo";

/* ------------------ Motion Variants ------------------ */

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
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

/* ------------------ Page Component ------------------ */

export default function AirportCCTVPage() {
  const features = [
    {
      icon: Eye,
      title: "AI-Powered Analytics",
      description:
        "Real-time video analytics for active threat detection, crowd monitoring, and automated alerts.",
    },
    {
      icon: Shield,
      title: "High Security Standards",
      description:
        "Designed to meet global aviation security regulations with strict compliance.",
    },
    {
      icon: Zap,
      title: "Real-Time Monitoring",
      description:
        "Continuous 24/7 monitoring with fast response and incident detection.",
    },
    {
      icon: Cloud,
      title: "Cloud Connectivity",
      description:
        "Secure cloud video storage and remote monitoring access for authorized departments.",
    },
  ];

  const benefits = [
    "Enhanced perimeter surveillance",
    "Automated intrusion detection",
    "Face recognition intelligence",
    "Integration with access control",
    "Remote monitoring through mobile app",
    "Scalable for terminals & airside operations",
  ];

  const coreCapabilities = [
    {
      icon: Camera,
      title: "High-Definition IP Surveillance",
      items: [
        "4K / 8MP IP Cameras",
        "Low light night-vision",
        "Thermal imaging",
        "Wide dynamic range",
      ],
    },
    {
      icon: Eye,
      title: "Intelligent Video Analytics",
      items: [
        "Face recognition",
        "ANPR (Vehicle number plate)",
        "Crowd density monitoring",
        "Intrusion & object detection",
      ],
    },
    {
      icon: Shield,
      title: "Central Command & Control",
      items: [
        "Real-time dashboards",
        "Video walls",
        "Integrated alert workflows",
        "Role-based access control",
      ],
    },
    {
      icon: Cloud,
      title: "Fail-Safe Architecture",
      items: [
        "24×7 video recording",
        "Redundant NVR/RAID storage",
        "Automatic failover systems",
        "System health monitoring",
      ],
    },
  ];

  const deploymentAreas = [
    "Terminal entry & exit gates",
    "Check-in counters",
    "Security hold area",
    "Immigration & customs",
    "Boarding gates",
    "Apron & airside",
    "Runways & taxiways",
    "Parking & vehicle management",
    "Cargo & logistics area",
  ];

  return (
    <>
      <SEO
        title="Airport CCTV Surveillance Systems"
        description="Minimal, premium, airport-grade CCTV & AI surveillance solutions."
        path="/products/airport/cctv"
        image="/images/og-airport-cctv.jpg"
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
        <main>
          {/* ------------------ HERO SECTION ------------------ */}
          <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden -z-10">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Text */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-8"
              >
                <motion.div
                  variants={fadeInUp}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Airport Security System
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
                >
                  CCTV Surveillance <br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Systems
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-gray-600 max-w-xl leading-relaxed"
                >
                  A complete next-generation surveillance ecosystem for airports —
                  built for reliability, visibility, and operational excellence.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                >
                  

                </motion.div>
              </motion.div>

              {/* Image */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={floatAnimation}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                  <Image
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
                    alt="Airport Surveillance"
                    width={800}
                    height={600}
                    className="rounded-xl object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-bold">Airport Surveillance</h3>
                    <p className="text-sm opacity-90">Real-time monitoring</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ------------------ FEATURES SECTION ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="text-center mb-16"
              >
                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                >
                  Core Features
                </motion.h2>

                <motion.p
                  variants={fadeInUp}
                  className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg"
                >
                  Designed for scalability, clarity, and high-security environments.
                </motion.p>
              </motion.div>

              {/* Grid */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -10 }}
                    className="p-8 bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-7 h-7 text-blue-600" />
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* ------------------ BENEFITS SECTION ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                  <Image
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                    alt="Security Monitoring Room"
                    width={700}
                    height={500}
                    className="rounded-xl object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-bold">Security Operations</h3>
                    <p className="text-sm opacity-90">24/7 Monitoring Center</p>
                  </div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-2xl shadow-xl">
                  <div className="flex items-center">
                    <Check className="w-6 h-6 mr-2" />
                    <span className="font-bold">ICAO Compliant</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                >
                  Key Benefits
                </motion.h2>

                <motion.div
                  variants={staggerContainer}
                  className="space-y-5"
                >
                  {benefits.map((benefit, i) => (
                    <motion.div
                      key={i}
                      variants={fadeInUp}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 border border-gray-100 transition-all duration-300 group"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-800 text-lg font-medium group-hover:text-gray-900">
                        {benefit}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* ------------------ CAPABILITIES SECTION ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16"
              >
                Advanced Capabilities
              </motion.h2>

              <div className="space-y-8">
                {coreCapabilities.map((cap, i) => (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    className="bg-white border border-gray-200 shadow-lg rounded-2xl p-8 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <cap.icon className="w-8 h-8 text-blue-600" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-5">
                          {cap.title}
                        </h3>

                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {cap.items.map((item, idx) => (
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

          {/* ------------------ DEPLOYMENT AREAS ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6"
              >
                Airport Coverage Areas
              </motion.h2>
              
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-gray-600 text-center max-w-2xl mx-auto mb-16 text-lg"
              >
                Comprehensive surveillance coverage for all critical airport zones
              </motion.p>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {deploymentAreas.map((area, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.03 }}
                    className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">{area}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* ------------------ CTA SECTION ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl md:text-4xl font-bold text-white mb-6"
                >
                  Ready to Enhance Airport Security?
                </motion.h2>

                <motion.p
                  variants={fadeInUp}
                  className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
                >
                  Contact our experts to discuss how our CCTV systems can protect your airport.
                </motion.p>

                <motion.div
                  variants={staggerContainer}
                  className="flex flex-col sm:flex-row justify-center gap-4"
                >                
                </motion.div>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}