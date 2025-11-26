"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {
  Flame,
  Server,
  Bell,
  Speaker,
  Check,
  Settings,
} from "lucide-react";
import { SEO } from "@/components/seo/seo";
import hero from "@/assets/railwayfire.jpg"; // Change to your fire alarm image

/* ------------------ FONT CLASSES ------------------ */
const fonts = {
  h1: "font-poppins font-semibold",
  h2: "font-poppins font-semibold",
  body: "font-raleway",
  other: "font-open-sans",
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

/* ------------------ REUSABLE CARD COMPONENT ------------------ */
function CapabilityCard({
  icon: Icon,
  title,
  items,
}: {
  icon: any;
  title: string;
  items: string[];
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className="p-8 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-6">
        <Icon className="w-6 h-6 text-blue-600" />
        <h3 className={`text-xl ${fonts.h2}`}>{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className={`flex gap-3 text-gray-600 text-sm leading-relaxed ${fonts.body}`}>
            <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" /> {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function RailwayFireAlarmPage() {
  /* ------------------ UPDATED CONTENT ------------------ */
  const coreCapabilities = [
    {
      icon: Flame,
      title: "Intelligent Addressable Detectors",
      items: [
        "Smoke detectors",
        "Heat detectors",
        "Multi-sensor detectors",
        "Beam detectors for long halls",
        "Flame detectors for hazardous areas",
        "Each device has precise location identification for faster response.",
      ],
    },
    {
      icon: Server,
      title: "Fire Alarm Control Panels (FACP)",
      items: [
        "Multi-loop networked panels",
        "Touchscreen operation",
        "Event & fault logs",
        "Centralized monitoring for multiple stations",
        "Auto device health check",
      ],
    },
    {
      icon: Bell,
      title: "Notification Devices",
      items: [
        "High-power sounders",
        "Flashing strobes",
        "Voice evacuation speakers",
        "Tunnel-safe alarm devices",
        "Weatherproof units for outdoor platforms",
      ],
    },
    {
      icon: Speaker,
      title: "Emergency Evacuation System",
      items: [
        "Pre-recorded evacuation messages",
        "Multi-language support",
        "Automatic priority override",
        "Zone-wise evacuation strategy",
        "Seamlessly integrated with PAS",
      ],
    },
    {
      icon: Flame,
      title: "Special Hazard & Suppression Systems",
      items: [
        "Electrical & UPS rooms",
        "Server rooms",
        "Control centers",
        "Metro depots",
        "FM200 • NOVEC 1230 • CO₂ • Inert Gas Systems",
      ],
    },
  ];

  const technicalHighlights = [
    "EN 54-certified devices",
    "Redundant loop architecture",
    "Fiber-based panel networking",
    "Continuous device health monitoring",
    "UPS backup for power failure conditions",
    "Real-time alerting to central control room",
  ];

  const coverageZones = [
    "Metro stations (platform + concourse)",
    "Railway stations",
    "Ticket counters",
    "Retail & food courts",
    "Tunnels & underground sections",
    "Parking and circulation areas",
    "Depots & operational buildings",
    "Electrical & UPS rooms",
    "Data centers/communication rooms",
  ];

  const systemIntegrations = [
    "PAS → Instant evacuation announcements",
    "CCTV → Auto pop-up of incident location",
    "PIDS → Emergency message overlay",
    "Access Control → Auto door release during fire",
    "BMS → HVAC shutdown & smoke extraction activation",
  ];

  const operatorBenefits = [
    "Faster fire detection & response",
    "Coordinated emergency evacuation",
    "Total visibility across multi-level stations",
    "Reduced risk of major incidents",
    "Compliance with safety standards",
    "Reliable performance in high-density environments",
  ];

  return (
    <>
      <SEO
        title="Fire Alarm System for Railways & Metro"
        description="railway fire alarm system, metro fire detection, station fire safety system, addressable fire alarm railway"
        path="/products/railway/fire-alarm"
        image="/images/og-railway-fire.jpg"
      />

      <div className="min-h-screen bg-white text-gray-800">
        <main>

          {/* ------------------ HERO SECTION ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={staggerContainer} initial="hidden" animate="visible">
                <motion.h1 variants={fadeInUp} className={`text-4xl md:text-5xl mb-6 leading-tight text-gray-900 ${fonts.h1}`}>
                  Fire Alarm System for Railways & Metro
                </motion.h1>

                <motion.p variants={fadeInUp} className={`text-lg text-gray-600 ${fonts.body}`}>
                  <strong>Early Detection. Fast Response. Station-Wide Life Safety.</strong>
                  <br /><br />
                  Technify provides intelligent, EN-54 certified addressable fire alarm systems
                  built specifically for **railway stations, tunnels, depots and multi-level concourses**.
                </motion.p>
              </motion.div>

              <motion.div variants={floatAnimation}>
                <div className="rounded-lg overflow-hidden shadow-xl border border-gray-200">
                  <Image src={hero} alt="Railway Fire Alarm System" width={800} height={600} className="object-cover" />
                </div>
              </motion.div>
            </div>
          </section>

          {/* ------------------ WHY FIRE ALARM IS IMPORTANT ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-100">
            <motion.h2 variants={fadeInUp} className={`text-3xl text-center mb-12 ${fonts.h2}`}>
              Why Fire Alarms Matter in Railways
            </motion.h2>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {coreCapabilities[0].items.slice(0, 6).map((text, i) => (
                <motion.div key={i} variants={fadeInUp} className="p-4 bg-white border rounded-lg shadow-sm">
                  <Check className="w-4 h-4 text-green-600 mr-2 inline-block" /> {text}
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* ------------------ CORE CAPABILITIES ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-100">
            <h2 className={`text-3xl text-center mb-12 ${fonts.h2}`}>Core Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {coreCapabilities.map((cap, i) => (
                <CapabilityCard key={i} icon={cap.icon} title={cap.title} items={cap.items} />
              ))}
            </div>
          </section>

          {/* ------------------ TECHNICAL HIGHLIGHTS ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
            <h2 className={`text-3xl text-center mb-12 ${fonts.h2}`}>Technical Highlights</h2>
            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {technicalHighlights.map((text, i) => (
                <motion.div key={i} variants={fadeInUp} className="p-4 bg-white border rounded-lg shadow hover:shadow-md">
                  <Settings className="w-4 h-4 text-blue-600 inline-block mr-2" /> {text}
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* ------------------ OPERATORS BENEFITS ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-orange-50">
            <h2 className={`text-3xl text-center mb-12 ${fonts.h2}`}>Benefits for Railway Operators</h2>
            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {operatorBenefits.map((text, i) => (
                <motion.div key={i} variants={fadeInUp} whileHover={{ y: -4 }} className="p-6 bg-white border rounded-xl shadow">
                  <Check className="w-4 h-4 text-green-600 mb-2" /> {text}
                </motion.div>
              ))}
            </motion.div>
          </section>

        </main>
      </div>
    </>
  );
}
