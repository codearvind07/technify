"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {
  Volume2,
  Mic,
  Radio,
  Wifi,
  Zap,
  Check,
  Server,
  Settings,
} from "lucide-react";
import { SEO } from "@/components/seo/seo";
import hero from "@/assets/railwaypas.jpg"; // Use any image here

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

/* ------------------ REUSABLE COMPONENT ------------------ */
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

export default function RailwayPASPage() {
  const coreCapabilities = [
    {
      icon: Wifi,
      title: "Digital / IP-Based Audio Distribution",
      items: [
        "Audio-over-IP (AoIP)",
        "Redundant audio controllers",
        "Multi-zone paging",
        "Fiber-based distribution network",
      ],
    },
    {
      icon: Volume2,
      title: "Railway-Grade Speakers",
      items: [
        "Horn speakers for platforms",
        "Column and ceiling speakers for concourse",
        "High-power outdoor speakers",
        "Noise-adaptive volume control",
      ],
    },
    {
      icon: Radio,
      title: "Zone-Wise & Priority-Based Announcements",
      items: [
        "Platform-wise announcements",
        "Concourse announcements",
        "Emergency override messages",
        "Automated priority-based broadcasting",
      ],
    },
    {
      icon: Server,
      title: "Automated Announcement Engine",
      items: [
        "Auto-triggered train arrival messages",
        "Schedule-based announcements",
        "Multi-language support",
        "Integration with PIDS for synchronized updates",
      ],
    },
    {
      icon: Mic,
      title: "Centralized Control Console",
      items: [
        "Operator microphone",
        "Touchscreen panel",
        "Live station-wide paging",
        "Audio quality monitoring",
        "Speaker health diagnostics",
      ],
    },
  ];

  const coverageZones = [
    "Platforms",
    "Concourse halls",
    "Ticketing areas",
    "Entry/exit gates",
    "Waiting rooms",
    "Foot-over bridges",
    "Parking areas",
    "Metro stations & interchange nodes",
  ];

  const technicalHighlights = [
    "EN-54 certified audio equipment",
    "Redundant amplifiers & controllers",
    "Auto amplifier switching during faults",
    "Fail-safe loop architecture",
    "Integrated UPS for power backup",
    "Remote monitoring & logs",
  ];

  const systemIntegrations = [
    "PIDS → Automated platform announcements",
    "CCTV → Emergency visual alerts + audio triggers",
    "Fire Alarm System → Evacuation messages",
    "Access Control → Secure zone messaging",
  ];

  const operatorBenefits = [
    "Clear announcements even in heavy crowd and noise",
    "Faster passenger movement",
    "Reduced confusion and platform crowding",
    "Error-free automated updates",
    "High reliability for 24×7 operations",
    "Multi-station centralized control capability",
  ];

  return (
    <>
      <SEO
        title="Public Address System for Railways & Metro"
        description="railway pas system, metro announcement system, railway audio system, ip pas for railways"
        path="/products/railway/pas"
        image="/images/og-railway-pas.jpg"
      />

      <div className="min-h-screen bg-white text-gray-800">
        <main>

          {/* ------------------ PREMIUM HERO ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={staggerContainer} initial="hidden" animate="visible">
                <motion.h1 variants={fadeInUp} className={`text-4xl md:text-5xl text-gray-900 mb-6 leading-tight ${fonts.h1}`}>
                  Public Address System (PAS) <br /> for Railways & Metro
                </motion.h1>

                <motion.p variants={fadeInUp} className={`text-lg text-gray-600 mb-6 ${fonts.body}`}>
                  <strong>Clear Announcements. Real-Time Alerts. Reliable Passenger Communication.</strong> <br /><br />
                  Railway & metro stations depend heavily on PAS for passenger movement and station safety.  
                  Technify delivers **railway-grade PAS systems built for high-noise and heavy crowd environments**.
                </motion.p>
              </motion.div>

              <motion.div variants={floatAnimation}>
                <div className="rounded-lg overflow-hidden shadow-xl border border-gray-200">
                  <Image src={hero} alt="PAS System" width={800} height={600} className="object-cover" />
                </div>
              </motion.div>
            </div>
          </section>

          {/* ------------------ WHY PAS IS CRITICAL ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-100">
            <div className="max-w-6xl mx-auto">
              <motion.h2 variants={fadeInUp} className={`text-3xl text-center mb-8 ${fonts.h2}`}>
                Why PAS Is Critical for Railways
              </motion.h2>

              <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Train arrival/departure updates",
                  "Platform changes",
                  "Delay announcements",
                  "Emergency broadcasts",
                  "Crowd management",
                  "Lost-and-found alerts",
                  "Safety instructions",
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeInUp} className="p-4 bg-white border rounded-lg shadow-sm">
                    <Check className="w-4 h-4 text-green-600" /> {item}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* ------------------ WHAT TECHNIFY DELIVERS ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
            <div className="max-w-6xl mx-auto text-center">
              <motion.h2 variants={fadeInUp} className={`text-3xl mb-6 ${fonts.h2}`}>
                What Technify Delivers
              </motion.h2>
              <motion.p variants={fadeInUp} className={`text-lg text-gray-600 max-w-3xl mx-auto ${fonts.body}`}>
                A fully **digital, network-based PAS** designed for multi-platform and **multi-station deployment**.
              </motion.p>
            </div>
          </section>

          {/* ------------------ CORE CAPABILITIES ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-100">
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

          {/* ------------------ TECHNICAL HIGHLIGHTS ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
            <motion.h2 variants={fadeInUp} className={`text-3xl text-center mb-12 ${fonts.h2}`}>
              Technical Highlights
            </motion.h2>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {technicalHighlights.map((text, i) => (
                <motion.div key={i} variants={fadeInUp} className="p-4 bg-white border rounded-lg shadow hover:shadow-md">
                  <Settings className="w-4 h-4 text-blue-600 inline-block mr-2" />
                  {text}
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* ------------------ COVERAGE ZONES ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
            <motion.h2 variants={fadeInUp} className={`text-3xl text-center mb-12 ${fonts.h2}`}>
              Where PAS Is Used in Railways
            </motion.h2>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {coverageZones.map((zone, i) => (
                <motion.div key={i} variants={fadeInUp} className="p-4 bg-gray-50 border rounded-lg hover:border-blue-300">
                  {zone}
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* ------------------ SYSTEM INTEGRATIONS ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <motion.h2 variants={fadeInUp} className={`text-3xl text-center mb-10 ${fonts.h2}`}>
              System Integrations
            </motion.h2>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {systemIntegrations.map((text, i) => (
                <motion.div key={i} variants={fadeInUp} className="p-4 bg-white border rounded-lg shadow-sm">
                  <Zap className="w-4 h-4 text-blue-600 inline-block mr-2" />
                  {text}
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* ------------------ BENEFITS ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-orange-50">
            <motion.h2 variants={fadeInUp} className={`text-3xl text-center mb-10 ${fonts.h2}`}>
              Benefits for Railway Operators
            </motion.h2>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {operatorBenefits.map((benefit, i) => (
                <motion.div key={i} variants={fadeInUp} whileHover={{ y: -4 }} className="p-6 bg-white border rounded-xl shadow transition-all">
                  <Check className="w-4 h-4 text-green-600 mb-2" />
                  <p className={fonts.body}>{benefit}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

        </main>
      </div>
    </>
  );
}
