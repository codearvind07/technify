"use client";

import { motion, Variants } from "framer-motion";
import pas from "@/assets/pas.jpg";
import { 
  Volume2, 
  Mic, 
  Radio, 
  Wifi, 
  Zap, 
  Check,
  Server,
  Speaker,
  Monitor,
  Shield
} from "lucide-react";
import { SEO } from '@/components/seo/seo';
import Image from "next/image";

export default function AirportPASPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2, ease: "easeOut" },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const floatAnimation: Variants = {
    hidden: { y: 0 },
    visible: {
      y: [-10, 10, -10],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  // YOUR ACTUAL CONTENT USING ARRAYS
  const features = [
    { icon: Volume2, title: "Crystal-Clear Audio", description: "Loud and clear announcements across terminals." },
    { icon: Wifi, title: "Instant Delivery", description: "Announcements instantly delivered across zones." },
    { icon: Mic, title: "Zone-Wise Control", description: "Separate audio control for terminals, gates & baggage areas." },
    { icon: Radio, title: "Redundant Design", description: "No single point of failure – ensures zero downtime." }
  ];

  const coreCapabilities = [
    {
      icon: Server,
      title: "Digital & IP-Based Audio System",
      items: [
        "Fully IP-enabled architecture",
        "Fiber-backbone audio distribution",
        "Audio over network (AoIP)",
        "Redundant amplifiers & controllers"
      ]
    },
    {
      icon: Speaker,
      title: "Airport-Grade Loudspeakers",
      items: [
        "High-power ceiling and column speakers",
        "Directional speakers for terminals",
        "Weatherproof outdoor speakers for airside",
        "Noise-adaptive output control"
      ]
    },
    {
      icon: Monitor,
      title: "Zone-Based Announcements",
      items: [
        "Terminal-wise zones",
        "Gate-wise announcements",
        "Baggage area announcements",
        "Priority-based emergency zones"
      ]
    },
    {
      icon: Mic,
      title: "Automated & Pre-Recorded Messages",
      items: [
        "Auto announcements for flight boarding",
        "Gate changes",
        "Delay updates",
        "Emergency evacuation messages"
      ]
    },
    {
      icon: Monitor,
      title: "Centralized Audio Control Console",
      items: [
        "Touch-panel based UI",
        "Live mic announcements",
        "Real-time volume control",
        "Fault and health monitoring"
      ]
    }
  ];

  const technicalHighlights = [
    "EN 54-compliant equipment",
    "24×7 redundancy",
    "Auto amplifier switching",
    "Fail-safe loop design",
    "Integrated UPS backup",
    "Remote monitoring & analytics"
  ];

  const coverageZones = [
    "Terminals (departures & arrivals)",
    "Boarding gates",
    "Check-in counters",
    "Immigration & customs",
    "Baggage claim area",
    "Food courts & retail zones",
    "Apron & airside (optional)",
    "Parking and access roads"
  ];

  const systemIntegrations = [
    "FIDS for auto-flight announcements",
    "CCTV for incident-triggered alerts",
    "Fire Alarm System for evacuation",
    "BMS for central facility control"
  ];

  const operatorBenefits = [
    "Clear communication even in noisy environments",
    "Faster passenger movement",
    "Fewer missed flights due to unclear announcements",
    "Efficient crowd flow during peak hours",
    "High reliability with zero outage",
    "Fully compliant with aviation safety standards"
  ];

  return (
    <>
      <SEO 
        title="Public Address System (PAS) for Airports"
        description="Crystal-clear announcements, zero downtime & total coverage. Technify provides broadcast-grade PAS solutions built for high-traffic airport environments."
        path="/products/airport/pas"
        image="/images/og-airport-pas.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
        <main>

          {/* HERO SECTION */}
          <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial="hidden" animate="visible" variants={containerVariants}>
                <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Public Address System (PAS) for Airports
                </motion.h1>

                <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-4">
                  Crystal-Clear Announcements. Zero Downtime. Total Coverage.
                </motion.p>

                <motion.p variants={itemVariants} className="text-lg text-gray-600 leading-relaxed">
                  The Public Address System (PAS) is the <strong>voice of the airport</strong>—guiding passengers, managing crowd movement, and enabling fast communication during normal and emergency operations.  
                  Technify delivers <strong>broadcast-grade, fail-safe PAS solutions</strong> engineered for large, noisy, and high-traffic airport environments.
                </motion.p>
              </motion.div>

              <motion.div initial="hidden" animate="visible" variants={floatAnimation} className="relative">
                <Image
                  src={pas}
                  alt="Public Address System"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg object-cover"
                />
              </motion.div>
            </div>
          </section>

          {/* WHY SECTION */}
          <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why PAS Is Critical for Airports</h2>
              <p className="text-lg text-gray-600">Airports need announcements that are:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {["Loud and clear", "Instantly deliverable", "Zone-wise controllable", "Redundant (no single point of failure)"].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="p-6 bg-white rounded-xl border text-gray-800 flex items-center gap-3">
                  <Check className="text-green-600 w-5 h-5" />
                  {item}
                </motion.div>
              ))}
            </div>

            <p className="text-center text-lg text-gray-600 mt-8 max-w-4xl mx-auto">
              Passenger guidance, safety communication, gate changes, emergency alerts — all depend on a reliable PAS network.
            </p>
          </section>

          {/* WHAT TECHNIFY DELIVERS */}
          <section className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">What Technify Delivers</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A modern, network-based PAS with IP-audio distribution, intelligent control, and seamless integration with airport systems.
              </p>
            </div>
          </section>

          {/* CORE CAPABILITIES */}
          <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold">Core Capabilities</h2>
            </div>

            <div className="space-y-8 max-w-6xl mx-auto">
              {coreCapabilities.map((capability, index) => (
                <motion.div key={index} variants={fadeInUp} className="p-6 bg-white border rounded-2xl shadow-md">
                  <div className="flex gap-6">
                    <div className="w-14 h-14 flex items-center justify-center bg-blue-50 rounded-xl">
                      <capability.icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">{capability.title}</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {capability.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* TECHNICAL HIGHLIGHTS */}
          <section className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold">Technical Highlights</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {technicalHighlights.map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="bg-gray-50 p-6 rounded-xl border">
                  <Check className="text-green-600 w-5 h-5 mb-2" />
                  {item}
                </motion.div>
              ))}
            </div>
          </section>

          {/* COVERAGE ZONES */}
          <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold">PAS Coverage Zones in Airports</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {coverageZones.map((zone, i) => (
                <motion.div key={i} variants={fadeInUp} className="bg-white p-6 rounded-xl border">
                  {zone}
                </motion.div>
              ))}
            </div>
          </section>

          {/* SYSTEM INTEGRATIONS */}
          <section className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold">System Integrations</h2>
              <p className="text-lg text-gray-600">Technify integrates PAS with:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {systemIntegrations.map((integration, i) => (
                <motion.div key={i} variants={fadeInUp} className="bg-gray-50 p-6 rounded-xl border">
                  {integration}
                </motion.div>
              ))}
            </div>

            <p className="text-center text-lg text-gray-600 mt-8">
              This ensures one unified communication platform for the entire airport.
            </p>
          </section>

          {/* BENEFITS */}
          <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold">Benefits for Airport Operators</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {operatorBenefits.map((benefit, i) => (
                <motion.div key={i} variants={fadeInUp} className="bg-white p-6 rounded-xl border">
                  <Check className="text-green-600 w-5 h-5 mb-2" />
                  {benefit}
                </motion.div>
              ))}
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
