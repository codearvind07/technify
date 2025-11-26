"use client";

import { motion, Variants } from "framer-motion";
import alarm from "@/assets/alarm.jpg";
import { 
  Shield, 
  Zap, 
  Bell, 
  Wifi, 
  Battery, 
  ArrowRight,
  Check,
  Server,
  Speaker,
  Monitor,
  Flame
} from "lucide-react";
import { SEO } from '@/components/seo/seo';
import Image from "next/image";

export default function AirportFireAlarmPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2, ease: "easeOut" },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
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

  // YOUR ACTUAL CONTENT IN ARRAYS FOR UI
  const features = [
    { icon: Bell, title: "Early Detection", description: "Advanced sensors for rapid fire and smoke detection to ensure immediate response." },
    { icon: Shield, title: "Comprehensive Coverage", description: "Full airport coverage with strategically placed detectors and notification devices." },
    { icon: Wifi, title: "Network Integration", description: "IP-based system with remote monitoring and integration with other airport systems." },
    { icon: Battery, title: "Backup Power", description: "Uninterrupted operation with battery backup and generator integration." }
  ];

  const coreCapabilities = [
    {
      icon: Monitor,
      title: "Intelligent Addressable Detectors",
      items: [
        "Smoke detectors",
        "Heat detectors",
        "Multi-sensor detectors",
        "Beam detectors for large halls",
        "Flame detectors for fuel zones"
      ],
    },
    {
      icon: Server,
      title: "Fire Alarm Control Panels (FACP)",
      items: [
        "Redundant CPU architecture",
        "Networked panels across multiple terminals",
        "LCD / touchscreen operation",
        "Event logs & device health reports",
      ],
    },
    {
      icon: Bell,
      title: "Sounders, Strobes & Hooters",
      items: [
        "High-decibel fire sounders",
        "LED strobes for noisy areas",
        "Voice evacuation speakers",
        "Airport-grade durable housings",
      ],
    },
    {
      icon: Speaker,
      title: "Emergency Voice Evacuation System",
      items: [
        "Pre-recorded evacuation messages",
        "Multi-language support",
        "Zone-wise evacuation control",
        "Integration with PAS for priority override",
      ],
    },
    {
      icon: Flame,
      title: "Gas Suppression & Special Hazard Systems",
      items: ["FM200", "NOVEC", "CO₂", "Inert Gas Systems"],
    },
  ];

  const technicalHighlights = [
    "EN-54 certified components",
    "Loop-powered, self-diagnosing detectors",
    "Fiber-networked fire panels",
    "Redundant power supply & UPS backup",
    "Automatic paging to emergency teams",
    "Event monitoring through centralized command center",
  ];

  const coverageZones = [
    "Terminal buildings (Departure/Arrival)",
    "Baggage handling system (BHS)",
    "Retail & food courts",
    "Electrical rooms & UPS rooms",
    "Data centers & communication rooms",
    "Security hold area",
    "Airside operations building",
    "Cargo & warehouse zones",
    "Parking and utility blocks",
  ];

  const systemIntegrations = [
    "PAS → Automated fire announcements",
    "CCTV → Live feed pop-ups during alarms",
    "BMS → HVAC shutdown, lift control, smoke extraction",
    "Access Control → Door release during emergencies",
  ];

  const operatorBenefits = [
    "Fastest smoke/heat detection",
    "Intelligent zone-based evacuation",
    "Centralized visibility for multiple terminals",
    "Automation reduces human error",
    "Global standards compliance",
    "Maximum passenger & staff safety",
  ];

  return (
    <>
      <SEO 
        title="Airport Fire Alarm System - Comprehensive Fire Safety Solutions"
        description="Airport fire alarm system, addressable fire detection, aviation life safety systems, EN-54 fire system airport, fire evacuation system, airport fire protection technology"
        path="/products/airport/fire-alarm"
        image="/images/og-airport-fire-alarm.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
        <main>

          {/* HERO SECTION */}
          <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial="hidden" animate="visible" variants={containerVariants}>
                
                <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                  Fire Alarm <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">System</span>
                </motion.h1>

                <motion.p variants={itemVariants} className="text-xl text-gray-600 mb-4">
                  Early Detection. Instant Response. Life-Safety Engineered for Airports.
                </motion.p>

                <motion.p variants={itemVariants} className="text-lg text-gray-600 leading-relaxed">
                  Airports are complex facilities with continuous movement of passengers, aircraft, luggage, fuel, and critical equipment.  
                  A Fire Alarm System must be ultra-reliable, intelligent, and compliant with global aviation safety standards.  
                  <strong>Technify delivers advanced addressable fire alarm systems designed to protect every zone — from terminals to airside facilities.</strong>
                </motion.p>

              </motion.div>

              {/* IMAGE SECTION */}
              <motion.div initial="hidden" animate="visible" variants={floatAnimation}>
                <Image
                  src={alarm}
                  alt="Airport Fire Alarm System"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl object-cover"
                />
              </motion.div>
            </div>
          </section>

          {/* WHY FIRE ALARMS ARE CRITICAL */}
          <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-red-50">
            <div className="max-w-7xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Why Fire Alarms Are Mission-Critical at Airports
              </h2>
              <p className="text-lg text-gray-600">
                Airports cannot afford delays in detection or evacuation. A modern fire alarm system ensures:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {[
                "Early smoke/heat detection",
                "Automated emergency responses",
                "Real-time alerts to control rooms",
                "Rapid coordination with fire & rescue teams",
                "Full compliance with DGCA, NFPA, and ICAO safety norms",
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="p-6 bg-white border rounded-xl shadow-md">
                  <Check className="text-red-500 w-5 h-5 mb-2" /> {item}
                </motion.div>
              ))}
            </div>
          </section>

          {/* WHAT TECHNIFY DELIVERS */}
          <section className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Technify Delivers</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A fully integrated Addressable Fire Alarm & Life Safety System that monitors thousands of devices across the airport.
              </p>
            </div>
          </section>

          {/* CORE CAPABILITIES */}
          <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Core Capabilities</h2>
            </div>

            <div className="space-y-8 max-w-6xl mx-auto">
              {coreCapabilities.map((capability, index) => (
                <motion.div key={index} variants={fadeInUp} className="p-6 bg-white border rounded-2xl shadow-lg">
                  <div className="flex gap-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-100 to-orange-100 rounded-xl flex items-center justify-center">
                      <capability.icon className="w-7 h-7 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">{capability.title}</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {capability.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600" /> {item}
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
          <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-red-50">
            <div className="max-w-6xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Technical Highlights</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {technicalHighlights.map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="p-6 bg-white rounded-xl border shadow-md">
                  <Check className="text-red-500 w-5 h-5 mb-2" /> {item}
                </motion.div>
              ))}
            </div>
          </section>

          {/* COVERAGE ZONES */}
          <section className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Fire Alarm Coverage Zones</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {coverageZones.map((zone, i) => (
                <motion.div key={i} variants={fadeInUp} className="p-6 bg-gray-50 rounded-xl border shadow-md">
                  {zone}
                </motion.div>
              ))}
            </div>
          </section>

          {/* SYSTEM INTEGRATIONS */}
          <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-red-50">
            <div className="max-w-6xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">System Integrations</h2>
              <p className="text-lg text-gray-600">Technify integrates Fire Alarm System with:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {systemIntegrations.map((integration, i) => (
                <motion.div key={i} variants={fadeInUp} className="p-6 bg-white rounded-xl border shadow-md">
                  {integration}
                </motion.div>
              ))}
            </div>

            <p className="text-center text-lg text-gray-600 mt-8">
              This creates a single, intelligent life-safety ecosystem.
            </p>
          </section>

          {/* BENEFITS */}
          <section className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Benefits for Airport Operators</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {operatorBenefits.map((benefit, i) => (
                <motion.div key={i} variants={fadeInUp} className="p-6 bg-gray-50 rounded-xl border shadow-lg">
                  <Check className="text-green-600 w-5 h-5 mb-2" /> {benefit}
                </motion.div>
              ))}
            </div>
          </section>

         
        </main>
      </div>
    </>
  );
}
