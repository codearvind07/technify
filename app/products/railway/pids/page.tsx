"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {
  Monitor,
  Database,
  Server,
  Zap,
  Users,
  Check,
  Settings,
} from "lucide-react";
import { SEO } from "@/components/seo/seo";
import hero from "@/assets/pids.jpg";

/* ------------------ FONT CLASSES ------------------ */
const fonts = {
  h1: "font-poppins font-semibold",
  h2: "font-poppins font-semibold",
  body: "font-raleway",
};

/* ------------------ MOTION VARIANTS ------------------ */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const floatAnimation: Variants = {
  hidden: { y: 0 },
  visible: {
    y: [-10, 10, -10],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

/* ------------------ REUSABLE CARD ------------------ */
function CapabilityCard({ icon: Icon, title, items }: any) {
  return (
    <motion.div
      variants={fadeInUp}
      className="p-8 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-6">
        <Icon className="w-6 h-6 text-blue-600" />
        <h3 className={`text-xl text-gray-900 ${fonts.h2}`}>{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item: string, i: number) => (
          <li key={i} className={`flex gap-3 text-gray-600 text-sm leading-relaxed ${fonts.body}`}>
            <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" /> {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function RailwayPIDSPage() {
  const coreCapabilities = [
    {
      icon: Database,
      title: "Real-Time Train Data Integration",
      items: [
        "Automated updates from CC/traffic control",
        "Instant platform changes",
        "Delay and skip updates",
        "Route and interchange data",
        "API integration with metro OCC systems",
      ],
    },
    {
      icon: Monitor,
      title: "High-Brightness Display Systems",
      items: [
        "LED and LCD platform displays",
        "Concourse display boards",
        "Coach and door-side LED bars",
        "Large format video walls",
        "Sunlight-readable screens for outdoor areas",
        "Designed for 24×7 railway operation",
      ],
    },
    {
      icon: Server,
      title: "Smart Backend & Control Software",
      items: [
        "Centralized content management",
        "Real-time dashboard",
        "Multi-language screen templates",
        "Priority message broadcasting",
        "Emergency overlays",
        "Custom layouts for train status and routing",
      ],
    },
    {
      icon: Users,
      title: "Multilingual Support",
      items: ["English", "Hindi", "Regional languages (customizable)"],
    },
    {
      icon: Zap,
      title: "Audio Synchronization",
      items: [
        "PIDS integrates with PAS",
        "Auto-triggered announcements",
        "Ideal for high-noise railway platforms",
      ],
    },
    {
      icon: Settings,
      title: "Redundancy & High Availability",
      items: [
        "Dual servers for reliability",
        "Automatic failover",
        "Backup syncing",
        "Continuous health monitoring",
      ],
    },
  ];

  const coverageZones = [
    "Metro platforms",
    "Railway station platforms",
    "Concourse and ticketing areas",
    "Interchange and passenger flow points",
    "Parking and entry zones",
    "Train doors (LED route bars)",
    "Escalators and FOBs (wayfinding displays)",
  ];

  const technicalHighlights = [
    "Gigabit backbone for fast data flow",
    "API / XML / JSON integration capabilities",
    "Real-time display health monitoring",
    "3000–5000 nits brightness displays",
    "Wide viewing angle visibility",
    "Dust and vibration resistance hardware",
    "SLA-supported system maintenance",
  ];

  const systemIntegrations = [
    "PAS → Audio announcement synchronization",
    "CCTV → Crowd alert visualization",
    "Fire Alarm System → Emergency messaging",
    "Access Control → Restricted area signage",
    "BMS → Smart energy and scheduling",
  ];

  const operatorBenefits = [
    "Reduced passenger confusion",
    "Faster passenger movement",
    "Real-time accurate train updates",
    "Multilingual accessibility",
    "Better operational coordination",
    "Minimal manual intervention",
    "Enhanced passenger satisfaction",
  ];

  return (
    <>
      <SEO
        title="Passenger Information Display System (PIDS)"
        description="Real-time train status, multilingual display technology, API integration, and advanced display systems for railway networks."
        path="/products/railway/pids"
        image="/images/og-railway-pids.jpg"
      />

      <div className="min-h-screen bg-white text-gray-800">
        <main>

          {/* HERO SECTION */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <motion.div variants={staggerContainer} initial="hidden" animate="visible">
                <motion.h1 variants={fadeInUp} className={`text-4xl md:text-5xl mb-6 text-gray-900 ${fonts.h1}`}>
                  Passenger Information Display System (PIDS)
                </motion.h1>
                <motion.p variants={fadeInUp} className={`text-lg text-gray-700 leading-relaxed ${fonts.body}`}>
                  Real-Time Train Information. Clear Guidance. Smooth Passenger Flow.
                  The Passenger Information Display System is the digital communication backbone of railway and metro stations.
                  It ensures passengers receive accurate platform data, real-time train schedules, route updates, interchange guidance,
                  alerts, and safety messages. Technify builds railway-grade PIDS solutions for multi-platform and high-footfall stations.
                </motion.p>
              </motion.div>

              <motion.div variants={floatAnimation}>
                <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200">
                  <Image src={hero} alt="Passenger Info Display" width={800} height={600} className="object-cover" />
                </div>
              </motion.div>
            </div>
          </section>

          {/* WHY PIDS IS ESSENTIAL */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <motion.h2 variants={fadeInUp} className={`text-3xl text-center mb-10 ${fonts.h2}`}>
                Why PIDS Is Essential
              </motion.h2>
              <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Reduce station crowding and confusion",
                  "Speed up passenger movement",
                  "Real-time train status communication",
                  "Multilingual passenger guidance",
                  "Peak-hour operational support",
                  "Instant broadcasting of safety messages",
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeInUp} className="p-6 bg-white border rounded-xl shadow-sm">
                    <Check className="w-5 h-5 text-green-600 mb-2" /> {item}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* CORE CAPABILITIES */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <motion.h2 variants={fadeInUp} className={`text-3xl text-center mb-12 ${fonts.h2}`}>
                Core Capabilities
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {coreCapabilities.map((cap, i) => (
                  <CapabilityCard key={i} icon={cap.icon} title={cap.title} items={cap.items} />
                ))}
              </div>
            </div>
          </section>

          {/* TECHNICAL HIGHLIGHTS */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="max-w-6xl mx-auto">
              <motion.h2 variants={fadeInUp} className={`text-3xl text-center mb-12 ${fonts.h2}`}>
                Technical Highlights
              </motion.h2>
              <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technicalHighlights.map((highlight, i) => (
                  <motion.div key={i} variants={fadeInUp} className="p-6 bg-white border rounded-xl shadow-md">
                    <Settings className="w-4 h-4 text-blue-600 inline-block mr-2" />
                    {highlight}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* COVERAGE ZONES */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
              <motion.h2 variants={fadeInUp} className={`text-3xl text-center mb-12 ${fonts.h2}`}>
                Where PIDS Is Used
              </motion.h2>
              <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coverageZones.map((zone, i) => (
                  <motion.div key={i} variants={fadeInUp} className="p-6 bg-gray-50 border rounded-xl hover:border-blue-300">
                    {zone}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* SYSTEM INTEGRATIONS */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <motion.h2 variants={fadeInUp} className={`text-3xl text-center mb-12 ${fonts.h2}`}>
                System Integrations
              </motion.h2>
              <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {systemIntegrations.map((integration, i) => (
                  <motion.div key={i} variants={fadeInUp} className="p-6 bg-white border rounded-xl shadow-sm">
                    <Zap className="w-4 h-4 text-blue-600 inline-block mr-2" />
                    {integration}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* BENEFITS */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-orange-50">
            <div className="max-w-6xl mx-auto">
              <motion.h2 variants={fadeInUp} className={`text-3xl text-center mb-12 ${fonts.h2}`}>
                Benefits for Railway Operators
              </motion.h2>
              <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {operatorBenefits.map((benefit, i) => (
                  <motion.div key={i} variants={fadeInUp} whileHover={{ y: -4 }} className="p-6 bg-white border rounded-xl shadow-md">
                    <Check className="w-4 h-4 text-green-600 mb-2" /> {benefit}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
