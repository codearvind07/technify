"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {
  Building,
  Thermometer,
  Zap,
  Sun,
  Check,
} from "lucide-react";
import { SEO } from "@/components/seo/seo";
import hero from "@/assets/enterprise-bms.jpg"; // 🔹 CHANGE IMAGE HERE

/* ------------------ FONT CLASSES ------------------ */
const fonts = {
  h1: "font-poppins font-semibold",
  h2: "font-poppins font-semibold",
  h3: "font-poppins font-semibold",
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
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ------------------ REUSABLE COMPONENT ------------------ */
function CapabilityCard({ icon: Icon, title, items, note }: any) {
  return (
    <motion.div
      variants={scaleIn}
      className="group p-8 bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-lg border border-gray-300 group-hover:border-blue-400 transition-colors duration-300">
          <Icon className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
        </div>
        <h3 className={`text-xl text-gray-900 ${fonts.h3}`}>{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item: string, i: number) => (
          <li key={i} className="flex gap-3 items-start">
            <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
            <span className={`text-gray-600 text-sm leading-relaxed ${fonts.body}`}>{item}</span>
          </li>
        ))}
      </ul>
      {note && <p className="mt-4 text-xs italic text-gray-500">{note}</p>}
    </motion.div>
  );
}

export default function EnterpriseBMSPage() {
  /* ------------- CONTENT IMPLEMENTED HERE ----------------- */

  const capabilities = [
    {
      icon: Building,
      title: "Centralized Building Command Center",
      items: [
        "Unified dashboard for all facility systems",
        "Real-time monitoring & control",
        "Video wall integration (if required)",
        "Alerts for faults, failures & maintenance",
        "Cloud-based & remote access support",
      ],
    },
    {
      icon: Zap,
      title: "Energy & Power Management",
      items: [
        "AI-based energy optimization",
        "Real-time power usage analytics",
        "Load balancing & peak-hour control",
        "Automatic shutdown of unused areas",
        "Energy reporting & audit-ready logs",
      ],
    },
    {
      icon: Thermometer,
      title: "HVAC Automation",
      items: [
        "Temperature & airflow control",
        "Demand-based cooling/heating",
        "Zone-wise HVAC scheduling",
        "Integration with occupancy sensors",
        "20–30% reduction in power usage",
      ],
    },
    {
      icon: Sun,
      title: "Smart Lighting Control",
      items: [
        "Motion-based lighting activation",
        "Daylight adaptation for savings",
        "Scheduling after work hours",
        "LED dimming & zoning",
        "Energy consumption monitoring",
      ],
    },
  ];

  const technicalHighlights = [
    "IoT-enabled sensors & controllers",
    "BACnet / Modbus / KNX / OPC UA compliant",
    "AI-driven fault prediction & alerts",
    "24×7 device health monitoring",
    "Cybersecure firmware & encryption",
    "Scalable for multi-building campuses",
  ];

  const areas = [
    "Corporate offices & IT parks",
    "Data centers & server rooms",
    "Hospitals & multi-specialty facilities",
    "Factories & warehouses",
    "Hotels and smart residences",
    "Retail malls & public spaces",
    "Airports & transport hubs",
    "Commercial buildings",
  ];

  const benefits = [
    "Up to 30% reduction in energy usage",
    "Centralized command for all facilities",
    "Improved safety & compliance",
    "Reduced operational downtime",
    "Automated HVAC & lighting control",
    "Supports ESG & sustainability goals",
  ];

  return (
    <>
      <SEO
        title="Building Management System for Enterprises"
        description="building management system, BMS for enterprises, smart building automation, hvac bms solution, bms integration services, commercial building control system"
        path="/products/enterprise/bms"
        image="/images/og-enterprise-bms.jpg"
      />

      <div className="min-h-screen bg-white text-gray-800">
        <main>
          {/* ------------------ HERO ------------------ */}
          <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={staggerContainer} initial="hidden" animate="visible">
                <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className={`text-sm text-gray-500 font-semibold uppercase tracking-wide ${fonts.other}`}>
                    Enterprise Building Solutions
                  </span>
                </motion.div>

                <motion.h1 variants={fadeInUp} className={`text-4xl md:text-5xl ${fonts.h1} text-gray-900 mb-6`}>
                  Building Management System (BMS)
                </motion.h1>

                <motion.p variants={fadeInUp} className={`text-lg text-gray-600 ${fonts.body} mb-6`}>
                  <strong>Smart Buildings. Efficient Operations. Total Control.</strong>
                </motion.p>

                <motion.p variants={fadeInUp} className={`text-lg text-gray-600 ${fonts.body}`}>
                  Technify delivers AI-driven, fully automated BMS that unify HVAC, lighting, security, fire safety,
                  energy usage, and facility control — all in one centralized platform.
                </motion.p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Image src={hero} alt="Enterprise BMS" width={800} height={600} className="rounded-lg border border-gray-200" />
              </motion.div>
            </div>
          </section>

          {/* ------------------ WHY ESSENTIAL ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-white">
            <div className="max-w-6xl mx-auto text-center">
              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2 variants={fadeInUp} className={`text-3xl ${fonts.h2} text-gray-900 mb-4`}>
                  Why BMS Is Essential for Enterprises
                </motion.h2>
                <motion.p variants={fadeInUp} className={`text-gray-600 max-w-2xl mx-auto ${fonts.body}`}>
                  A next-generation BMS enables centralized monitoring, reduced energy costs, real-time fault detection,
                  HVAC automation, predictive maintenance and total facility control.
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* ------------------ CORE CAPABILITIES ------------------ */}
          <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-7xl mx-auto">
              <motion.h2 variants={fadeInUp} className={`text-center text-3xl ${fonts.h2} text-gray-900 mb-16`}>
                Core Capabilities
              </motion.h2>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {capabilities.map((c, i) => (
                  <CapabilityCard key={i} icon={c.icon} title={c.title} items={c.items} note={c.note} />
                ))}
              </motion.div>
            </div>
          </section>

          {/* ------------------ TECH HIGHLIGHTS ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto">
              <motion.h2 className={`text-center text-3xl ${fonts.h2} mb-16 text-gray-900`} variants={fadeInUp}>
                Technical Highlights
              </motion.h2>

              <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technicalHighlights.map((item, i) => (
                  <motion.div key={i} variants={fadeInUp} className="flex items-center gap-3 p-4 border rounded-lg bg-white">
                    <Check className="h-5 w-5 text-green-600" />
                    <p className={`text-gray-700 ${fonts.body}`}>{item}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* ------------------ DEPLOYMENT ------------------ */}
          <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
            <motion.h2 className={`text-center text-3xl ${fonts.h2} mb-16 text-gray-900`} variants={fadeInUp}>
              Where BMS Is Used
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
              variants={staggerContainer}
            >
              {areas.map((area, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex items-center gap-4 border p-4 rounded-lg bg-white">
                  <Check className="text-green-600 w-4 h-4" />
                  <p className={fonts.body}>{area}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* ------------------ BENEFITS ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-orange-50">
            <motion.h2 className={`text-center text-3xl ${fonts.h2} mb-16 text-gray-900`} variants={fadeInUp}>
              Benefits for Enterprises
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
              variants={staggerContainer}
            >
              {benefits.map((benefit, i) => (
                <motion.div key={i} variants={fadeInUp} className="p-6 bg-white rounded-xl border hover:shadow-md transition">
                  <div className="flex gap-3">
                    <Check className="w-4 h-4 text-green-600" />
                    <p className={fonts.body}>{benefit}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>

        </main>
      </div>
    </>
  );
}
