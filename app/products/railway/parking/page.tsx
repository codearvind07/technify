"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Car, Camera, QrCode, Monitor, Shield, Check, Settings, Zap } from "lucide-react";

 
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
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
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
          <li
            key={i}
            className={`flex gap-3 text-gray-600 text-sm leading-relaxed ${fonts.body}`}
          >
            <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />{" "}
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function ParkingManagementPage() {
  const whyImportant = [
    "Avoids traffic congestion at station entry/exit",
    "Provides smooth pickup/drop movement",
    "Enhances security through vehicle tracking",
    "Reduces unauthorized parking",
    "Increases revenue accuracy",
    "Ensures efficient staff parking management",
  ];

  const coreCapabilities = [
    {
      icon: Camera,
      title: "ANPR-Based Entry & Exit",
      items: [
        "Automatic number plate recognition",
        "Works during day & night",
        "Instant vehicle validation",
        "Blacklist/whitelist alerts",
        "Zero manual intervention",
      ],
    },
    {
      icon: QrCode,
      title: "Ticketless Parking System",
      items: [
        "Fast QR or mobile-based entry",
        "No paper tickets",
        "Auto fee calculation",
        "Smooth exit for passengers",
      ],
    },
    {
      icon: Monitor,
      title: "Smart Parking Guidance",
      items: [
        "LED indicators for free/occupied slots",
        "Digital signage for directions",
        "Floor-wise & zone-wise occupancy updates",
        "Decongests station parking areas",
      ],
    },
    {
      icon: Car,
      title: "Boom Barrier & Access Control",
      items: [
        "RFID-based staff entry",
        "High-speed boom barriers",
        "Anti-tailgating sensors",
        "Emergency override functionality",
      ],
    },
    {
      icon: Settings,
      title: "Central Parking Dashboard",
      items: [
        "Real-time vehicle logs",
        "Occupancy analytics",
        "Historical data & reports",
        "Revenue tracking",
        "Violation alerts",
        "Integrated mobile app support",
      ],
    },
    {
      icon: Shield,
      title: "Integrated Security Layer",
      items: [
        "CCTV feed with every vehicle event",
        "Overstay/tampering alerts",
        "Automatic incident recording",
        "Real-time notifications to control room",
      ],
    },
  ];

  const technicalHighlights = [
    "AI-powered ANPR engine (95–98% accuracy)",
    "Industrial-grade parking sensors",
    "Gigabit network communication",
    "Redundant servers and storage backup",
    "Seamless integration with station IT systems",
    "Mobile/web dashboard support",
    "24×7 system health monitoring",
  ];

  const usageAreas = [
    "Railway station parking",
    "Metro station parking",
    "Staff parking zones",
    "Auto/taxi lanes",
    "Public pickup/drop-off zones",
    "Commercial parking near stations",
    "Parking integrated with foot-over bridges",
  ];

  const systemIntegrations = [
    "CCTV → Live vehicle incident monitoring",
    "PIDS → Display parking updates",
    "PAS → Automated parking announcements",
    "Access Control → Staff entry management",
    "BMS → Lighting automation based on occupancy",
  ];

  const benefits = [
    "Faster vehicle movement during peak hours",
    "Increased parking revenue accuracy",
    "Enhanced security & monitoring",
    "Reduced congestion at entrances",
    "Smooth passenger pick-up/drop flow",
    "Centralized control for multiple stations",
    "24×7 reliable automated operations",
  ];

  return (
    <>
      <SEO
        title="Vehicle & Parking Management System for Railways & Metros"
        description="AI-powered automated parking management with ANPR, smart guidance, ticketless entry, and centralized supervision for railway and metro stations."
        path="/products/railway/parking-management"
        image="/images/og-parking.jpg"
      />

      <div className="min-h-screen bg-white text-gray-800">
        <main>
          {/* HERO SECTION */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.h1
                  variants={fadeInUp}
                  className={`text-4xl md:text-5xl mb-6 text-gray-900 ${fonts.h1}`}
                >
                  Vehicle & Parking Management System
                </motion.h1>
                <motion.p
                  variants={fadeInUp}
                  className={`text-lg text-gray-700 leading-relaxed ${fonts.body}`}
                >
                 Organized Traffic. Smart Entry Control. Hassle-Free Parking.
Railway and metro stations handle thousands of vehicles daily autos, taxis, buses, private cars, app-based cabs, staff vehicles, and commercial fleets. Managing this flow manually leads to congestion, delays, unauthorized parking, and security risks.
Technify delivers AI-powered, fully automated Parking & Vehicle Management Systems tailored for high-density railway environments.

                </motion.p>
              </motion.div>

              <motion.div variants={floatAnimation}>
                <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200">
                  <Image
                    src={hero}
                    alt="Parking System"
                    width={800}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </section>

          {/* WHY IMPORTANT */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <motion.h2
                variants={fadeInUp}
                className={`text-3xl text-center mb-10 ${fonts.h2}`}
              >
                Why Smart Parking Is Essential
              </motion.h2>
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {whyImportant.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="p-6 bg-white border rounded-xl shadow-sm"
                  >
                    <Check className="w-5 h-5 text-green-600 mb-2" /> {item}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* CORE CAPABILITIES */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <motion.h2
                variants={fadeInUp}
                className={`text-3xl text-center mb-12 ${fonts.h2}`}
              >
                Core Capabilities
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {coreCapabilities.map((cap, i) => (
                  <CapabilityCard
                    key={i}
                    icon={cap.icon}
                    title={cap.title}
                    items={cap.items}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* TECHNICAL HIGHLIGHTS */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                variants={fadeInUp}
                className={`text-3xl text-center mb-12 ${fonts.h2}`}
              >
                Technical Highlights
              </motion.h2>
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {technicalHighlights.map((highlight, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="p-6 bg-white border rounded-xl shadow-md"
                  >
                    <Settings className="w-4 h-4 text-blue-600 inline-block mr-2" />
                    {highlight}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* USAGE ZONES */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                variants={fadeInUp}
                className={`text-3xl text-center mb-12 ${fonts.h2}`}
              >
                Where The System Is Used
              </motion.h2>
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {usageAreas.map((zone, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="p-6 bg-gray-50 border rounded-xl hover:border-blue-300"
                  >
                    {zone}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* SYSTEM INTEGRATIONS */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                variants={fadeInUp}
                className={`text-3xl text-center mb-12 ${fonts.h2}`}
              >
                System Integrations
              </motion.h2>
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {systemIntegrations.map((integration, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="p-6 bg-white border rounded-xl shadow-sm"
                  >
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
              <motion.h2
                variants={fadeInUp}
                className={`text-3xl text-center mb-12 ${fonts.h2}`}
              >
                Benefits for Railway Operators
              </motion.h2>
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -4 }}
                    className="p-6 bg-white border rounded-xl shadow-md"
                  >
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
