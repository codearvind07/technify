"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {
  Camera,
  Eye,
  Server,
  Cloud,
  Zap,
  Check,
  Settings,
} from "lucide-react";
import { SEO } from "@/components/seo/seo";
import hero from "@/assets/railwaycctv.png";

/* ------------------ FONT STYLES ------------------ */
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

/* ------------------ REUSABLE CARD ------------------ */
function CapabilityCard({ icon: Icon, title, items }: { icon: any; title: string; items: string[] }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        <Icon className="w-6 h-6 text-blue-600" />
        <h3 className={`text-xl text-gray-900 ${fonts.h2}`}>{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className={`text-gray-700 flex gap-3 ${fonts.body}`}>
            <Check className="w-4 h-4 text-green-600 mt-1" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function RailwayCCTVPage() {
  return (
    <>
      <SEO
        title="CCTV Surveillance System for Railways & Metro"
        description="railway cctv system, metro surveillance solutions, platform monitoring technology, track intrusion detection, railway video analytics, railway security system"
        path="/products/railway/cctv"
      />

      <div className="min-h-screen bg-white text-gray-800">
        <main>

          {/* ------------------ HERO SECTION ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                <motion.h1
                  variants={fadeInUp}
                  className={`text-4xl md:text-5xl text-gray-900 mb-6 leading-tight ${fonts.h1}`}
                >
                  CCTV Surveillance System for <br /> Railways & Metro
                </motion.h1>

                <motion.p variants={fadeInUp} className={`text-lg text-gray-600 mb-6 ${fonts.body}`}>
                  <strong>High-Density Monitoring. Intelligent Analytics. Passenger-Safe Infrastructure.</strong>
                  <br /><br />
                  Railway and metro stations experience massive footfall, crowd movement, and continuous train operations.  
                  A robust CCTV Surveillance System is the core security infrastructure for ensuring passenger safety and operational control.
                  <br /><br />
                  <span className="font-semibold">
                    Technify delivers AI-powered, multi-station CCTV solutions designed for high-traffic railway environments.
                  </span>
                </motion.p>
              </motion.div>

              {/* IMAGE */}
              <motion.div variants={fadeInUp}>
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <Image src={hero} alt="Railway CCTV" width={800} height={600} className="object-cover" />
                </div>
              </motion.div>
            </div>
          </section>

          {/* ------------------ WHY CCTV IS CRITICAL ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <motion.h2 variants={fadeInUp} className={`text-3xl text-center mb-8 ${fonts.h2}`}>
                Why CCTV Is Critical for Railways
              </motion.h2>

              <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Platform safety",
                  "Track intrusion detection",
                  "Crowd density",
                  "Passenger movement patterns",
                  "Emergency situations",
                  "Theft & vandalism",
                  "Unattended baggage alerts",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl border hover:border-gray-300 transition-all duration-300"
                  >
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className={fonts.body}>{item}</span>
                  </motion.div>
                ))}
              </motion.div>

              <p className="text-center text-gray-700 mt-10 text-lg">
                A smart CCTV system helps reduce incidents and enhances safety.
              </p>
            </div>
          </section>

          {/* ------------------ WHAT TECHNIFY DELIVERS ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-white">
            <div className="max-w-6xl mx-auto text-center">
              <motion.h2 variants={fadeInUp} className={`text-3xl mb-6 ${fonts.h2}`}>
                What Technify Delivers
              </motion.h2>
              <motion.p variants={fadeInUp} className={`text-lg text-gray-600 max-w-3xl mx-auto ${fonts.body}`}>
                A complete, connected surveillance ecosystem designed for multi-platform, multi-level,
                and multi-station networks.
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
                <CapabilityCard
                  icon={Camera}
                  title="High-Definition IP Cameras"
                  items={[
                    "4K/8MP IP cameras",
                    "PTZ cameras for long-distance monitoring",
                    "Low-light and night-vision cameras",
                    "Anti-vandal dome cameras",
                    "Track-side rugged cameras",
                  ]}
                />
                <CapabilityCard
                  icon={Eye}
                  title="Intelligent Video Analytics (IVA)"
                  items={[
                    "Intrusion detection",
                    "Crowd density monitoring",
                    "Left luggage detection",
                    "Face recognition (optional)",
                    "Platform edge violation",
                    "Suspicious behavior alerts",
                  ]}
                />
                <CapabilityCard
                  icon={Server}
                  title="Centralized Control Room"
                  items={[
                    "Multi-station viewing",
                    "Video walls",
                    "Operator access control",
                    "Instant playback & bookmarks",
                  ]}
                />
                <CapabilityCard
                  icon={Cloud}
                  title="Storage & Reliability"
                  items={[
                    "NVR/server-based recording",
                    "RAID protection",
                    "Failover servers",
                    "90+ days retention",
                  ]}
                />
              </div>
            </div>
          </section>

          {/* ------------------ DEPLOYMENT AREAS ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <motion.h2 variants={fadeInUp} className={`text-3xl text-center mb-10 ${fonts.h2}`}>
              Where CCTV Is Deployed in Railways
            </motion.h2>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                "Platforms",
                "FOB (Foot-over bridges)",
                "Concourse halls",
                "Ticket counters",
                "Track areas",
                "Entry/exit gates",
                "Waiting rooms",
                "Metro concourses",
                "Baggage scanning areas",
              ].map((zone, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="p-4 bg-white border rounded-lg hover:border-blue-300 transition-all duration-300"
                >
                  {zone}
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* ------------------ SYSTEM INTEGRATIONS ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <motion.h2 variants={fadeInUp} className={`text-3xl text-center mb-10 ${fonts.h2}`}>
              System Integrations
            </motion.h2>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                "PIDS → Auto alerts during crowd surges",
                "PAS → Announcement triggers",
                "Fire Alarm System → Emergency visual pop-ups",
                "Access Control → Monitoring of restricted areas",
                "Parking Management → ANPR video integration",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border hover:border-gray-300 transition-all duration-300"
                >
                  <Zap className="w-4 h-4 text-blue-600" />
                  <span className={fonts.body}>{item}</span>
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
              {[
                "Enhanced passenger safety",
                "Improved crowd control",
                "Rapid emergency response",
                "Reduced vandalism & crime",
                "Smart alerts for high-risk events",
                "24×7 reliable surveillance",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  className="p-6 bg-white rounded-xl border hover:border-blue-200 hover:shadow-md transition-all duration-300"
                >
                  <Check className="w-4 h-4 text-green-600 mb-2" />
                  <p className={fonts.body}>{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

        </main>
      </div>
    </>
  );
}
