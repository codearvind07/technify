"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { 
  Shield, 
  Zap, 
  Bell, 
  Eye,
  Monitor,
  Volume2,
  HardDrive,
  Check,
  Building
} from "lucide-react";
import { SEO } from '@/components/seo/seo';
import hero from "@/assets/enterprise-fire-alarm.jpg"; // Placeholder, change if needed

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
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

export default function EnterpriseFireAlarmPage() {
  /* ------------------ REUSABLE COMPONENT (like airport/cctv) ------------------ */
  function CapabilityCard({ icon: Icon, title, items, note }: any) {
    return (
      <motion.div
        variants={fadeInUp}
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

  /* ------------------ PAGE CONTENT ------------------ */
  const capabilities = [
    {
      title: "Addressable Smoke & Heat Detectors",
      points: [
        "Optical smoke detectors",
        "Heat detectors (fixed & rate-of-rise)",
        "Multi-sensor detectors",
        "Beam detectors for long corridors",
        "Gas & flame detectors (optional)"
      ],
      note: "Each device identifies the exact room and location.",
      icon: Bell
    },
    {
      title: "Fire Alarm Control Panels (FACP)",
      points: [
        "Intelligent multi-loop systems",
        "Touchscreen or LED display",
        "Zone-wise status monitoring",
        "Real-time event logs",
        "Multi-building connectivity"
      ],
      icon: Monitor
    },
    {
      title: "Notification Appliances",
      points: [
        "Sounders",
        "Strobes",
        "Hooters",
        "Voice evacuation speakers"
      ],
      note: "Ensures alerts are clear and audible across office floors.",
      icon: Volume2
    },
    {
      title: "Voice Evacuation System",
      points: [
        "Pre-recorded multi-language messages",
        "Automated emergency broadcasts",
        "Priority override during fire events",
        "Integration with PAS & AV systems"
      ],
      icon: Volume2
    },
    {
      title: "Suppression System Integration",
      points: [
        "FM200",
        "NOVEC 1230",
        "Clean agent systems",
        "CO₂ suppression",
        "Inert gas systems"
      ],
      note: "For critical zones like data centers. Prevents downtime and data loss.",
      icon: HardDrive
    }
  ];

  const technicalHighlights = [
    "EN-54 certified components",
    "IP-based panel networking",
    "Redundant loop architecture",
    "Automatic fault diagnostics",
    "UPS-backed power supply",
    "Central monitoring system",
    "Integration-ready with BMS"
  ];

  const deploymentAreas = [
    "Corporate offices",
    "IT parks",
    "Banking & finance buildings",
    "Retail malls",
    "Manufacturing units",
    "Data centers",
    "Server rooms",
    "Warehouses",
    "Commercial towers",
    "Meeting & training halls"
  ];

  const integrations = [
    "BMS → HVAC shutdown, elevator recall, smoke extraction",
    "CCTV → Auto camera pop-up for fire zones",
    "Access Control → Emergency door release",
    "PA/AV Systems → Evacuation announcements",
    "Network Systems → Alerts sent to facility heads"
  ];

  const benefits = [
    "Early detection avoids major damage",
    "Faster evacuation & emergency handling",
    "Centralized monitoring of multiple floors",
    "Highly reliable EN-54 certified system",
    "Reduced downtime & business disruption",
    "Protection for critical IT infrastructure",
    "Compliance with global fire safety norms"
  ];

  return (
    <>
      <SEO 
        title="Enterprise Fire Alarm System | Commercial Fire Detection Solutions"
        description="Technify provides intelligent, addressable fire alarm systems for enterprises, featuring early detection, automated alerts, and seamless integration for corporate and commercial buildings."
        path="/products/enterprise/fire-alarm"
        image={hero.src}
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
                    Enterprise Safety Solutions
                  </span>
                </motion.div>

                <motion.h1 variants={fadeInUp} className={`text-4xl md:text-5xl ${fonts.h1} text-gray-900 mb-6`}>
                  Fire Alarm System for Enterprises
                </motion.h1>

                <motion.p variants={fadeInUp} className={`text-lg text-gray-600 ${fonts.body} mb-6`}>
                  <strong>Early Detection. Zero Downtime Safety. Complete Building Protection.</strong>
                </motion.p>

                <motion.p variants={fadeInUp} className={`text-lg text-gray-600 ${fonts.body}`}>
                  Enterprises operate in multi-floor buildings, data centers, and high-density office spaces. Ensuring immediate fire detection and safe evacuation is essential. Technify provides intelligent, addressable Fire Alarm Systems for modern commercial environments.
                </motion.p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Image src={hero} alt="Enterprise Fire Alarm System" width={800} height={600} className="rounded-lg border border-gray-200" />
              </motion.div>
            </div>
          </section>

          {/* ------------------ WHY IMPORTANT ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center">
              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2 variants={fadeInUp} className={`text-3xl ${fonts.h2} text-gray-900 mb-4`}>
                  Why Fire Alarms Matter for Enterprises
                </motion.h2>
                <motion.p variants={fadeInUp} className={`text-gray-600 max-w-3xl mx-auto ${fonts.body}`}>
                  A reliable fire alarm system helps organizations detect smoke/heat early, automate emergency alerts, ensure fast evacuation, protect high-value infrastructure, and meet compliance standards.
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* ------------------ CORE CAPABILITIES ------------------ */}
          <section className="py-20 bg-white px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-7xl mx-auto">
              <motion.h2 variants={fadeInUp} className={`text-center text-3xl ${fonts.h2} text-gray-900 mb-16`}>
                Core Capabilities
              </motion.h2>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >a
                {capabilities.map((capability, index) => (
                  <CapabilityCard key={index} icon={capability.icon} title={capability.title} items={capability.points} note={capability.note} />
                ))}
              </motion.div>
            </div>
          </section>

          {/* ------------------ TECH HIGHLIGHTS ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <motion.h2 className={`text-center text-3xl ${fonts.h2} mb-16 text-gray-900`} variants={fadeInUp}>
                Technical Highlights
              </motion.h2>

              <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technicalHighlights.map((item, i) => (
                  <motion.div key={i} variants={fadeInUp} className="flex items-center gap-3 p-4 border rounded-lg bg-white">
                    <Zap className="h-5 w-5 text-blue-600" />
                    <p className={`text-gray-700 ${fonts.body}`}>{item}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* ------------------ DEPLOYMENT AREAS ------------------ */}
          <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
            <motion.h2 className={`text-center text-3xl ${fonts.h2} mb-16 text-gray-900`} variants={fadeInUp}>
              Where Fire Alarm Systems Are Deployed
            </motion.h2>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
              >
                {deploymentAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center gap-4 border p-4 rounded-lg bg-gray-50"
                  >
                    <Building className="text-blue-600 w-4 h-4" />
                    <p className={fonts.body}>{area}</p>
                  </motion.div>
                ))}
              </motion.div>
          </section>

          {/* ------------------ SYSTEM INTEGRATIONS ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <motion.h2 className={`text-center text-3xl ${fonts.h2} mb-16 text-gray-900`} variants={fadeInUp}>
                System Integrations
              </motion.h2>
              <p className="text-center text-lg text-gray-600 -mt-12 mb-12 max-w-2xl mx-auto">Technify integrates Fire Alarm Systems with other building systems to create a unified life safety ecosystem.</p>

              <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {integrations.map((item, i) => (
                  <motion.div key={i} variants={fadeInUp} className="flex items-center gap-3 p-4 border rounded-lg bg-white">
                    <Zap className="h-5 w-5 text-blue-600" />
                    <p className={`text-gray-700 ${fonts.body}`}>{item}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* ------------------ BENEFITS ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-orange-50">
            <motion.h2 className={`text-center text-3xl ${fonts.h2} mb-16 text-gray-900`} variants={fadeInUp}>
              Benefits for Enterprises
            </motion.h2>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" variants={staggerContainer}>
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