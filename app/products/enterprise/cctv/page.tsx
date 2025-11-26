"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {
  Camera,
  Eye,
  Shield,
  Zap,
  Check,
  HardDrive,
  Monitor,
  Users,
  DoorOpen,
  Server,
  Car,
  Package,
  Coffee,
  Fence,
  Building,
  Box,
} from "lucide-react";
import { SEO } from "@/components/seo/seo";
import hero from "@/assets/enterprise-cctv.jpg"; // 🔹 CHANGE IMAGE HERE

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

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ------------------ REUSABLE COMPONENTS ------------------ */
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

export default function EnterpriseCCTVPage() {
  const capabilities = [
    {
      icon: Camera,
      title: "High-Definition IP Cameras",
      items: [
        "4MP/8MP/4K cameras",
        "Dome, bullet & PTZ options",
        "Low-light and IR night vision",
        "Indoor/outdoor weatherproof cameras",
        "Anti-vandal cameras for public zones",
      ],
      note: "Ideal for office floors, parking, reception, and perimeter.",
    },
    {
      icon: Eye,
      title: "AI-Based Video Analytics",
      items: [
        "Face recognition",
        "ANPR for parking",
        "Intrusion detection",
        "People counting & occupancy analytics",
        "Queue monitoring",
        "Motion alerts",
        "Tailgating detection",
      ],
      note: "Perfect for access-controlled workplaces.",
    },
    {
      icon: Monitor,
      title: "Centralized Command Center",
      items: [
        "Multi-location monitoring",
        "Large video wall setup",
        "Real-time alert dashboard",
        "Event-based notifications",
        "Secure access via remote devices",
      ],
    },
    {
      icon: HardDrive,
      title: "Enterprise Storage Solutions",
      items: [
        "High-availability NVR/server-based recording",
        "30–180 day retention",
        "RAID storage protection",
        "Redundant failover servers",
        "Encrypted data retention & backups",
      ],
    },
    {
      icon: Zap,
      title: "Integration with Enterprise Systems",
      items: [
        "Access Control → Door badge + video capture",
        "BMS → Environmental triggers",
        "Parking System → Vehicle entry footage",
        "Fire Alarm → Automatic alert pop-up",
        "HR & Attendance → Incident verification",
      ],
    },
  ];

  const technicalHighlights = [
    "ONVIF-compliant multi-brand support",
    "Gigabit fiber backbone",
    "Cybersecure camera firmware",
    "Role-based access privileges",
    "Real-time device health monitoring",
    "SLA-backed 24×7 AMC support",
  ];

  const areas = [
    "Office floors",
    "Reception & lobby",
    "Meeting rooms & corridors",
    "Data centers & server rooms",
    "Parking & basements",
    "Loading/unloading areas",
    "Cafeterias",
    "Building perimeter",
    "Lift lobbies",
    "Warehousing zones",
  ];

  const benefits = [
    "Enhanced security & incident prevention",
    "Data-driven analytics for smart workspace management",
    "Faster emergency response times",
    "Zero blind spots across the campus",
    "Protection of confidential & sensitive areas",
    "Multi-location central monitoring",
  ];

  return (
    <>
      <SEO
        title="Enterprise CCTV Surveillance Systems"
        description="enterprise cctv system, corporate surveillance solution, smart monitoring for offices"
        path="/products/enterprise/cctv"
        image="/images/og-enterprise-cctv.jpg"
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
                    Enterprise Surveillance Solutions
                  </span>
                </motion.div>

                <motion.h1 variants={fadeInUp} className={`text-4xl md:text-5xl ${fonts.h1} text-gray-900 mb-6`}>
                  CCTV Surveillance System for Enterprises
                </motion.h1>

                <motion.p variants={fadeInUp} className={`text-lg text-gray-600 ${fonts.body} mb-6`}>
                  <strong>Secure Workspaces. Smart Monitoring. Operational Control.</strong>
                </motion.p>

                <motion.p variants={fadeInUp} className={`text-lg text-gray-600 ${fonts.body}`}>
                 Enterprises need a reliable CCTV Surveillance System to protect employees, assets, data centers, sensitive zones, and multi-floor office environments.
Technify provides enterprise-grade, AI-enabled CCTV solutions built for corporate offices, IT parks, commercial buildings, and large campuses.

                </motion.p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Image src={hero} alt="Enterprise CCTV" width={800} height={600} className="rounded-lg border border-gray-200" />
              </motion.div>
            </div>
          </section>

          {/* ------------------ WHY IMPORTANT ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-white">
            <div className="max-w-6xl mx-auto text-center">
              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2 variants={fadeInUp} className={`text-3xl ${fonts.h2} text-gray-900 mb-4`}>
                  Why CCTV Is Critical for Enterprises
                </motion.h2>
                <motion.p variants={fadeInUp} className={`text-gray-600 max-w-2xl mx-auto ${fonts.body}`}>
                  A modern CCTV system supports security, compliance, incident detection,
                  employee safety, and workspace monitoring.
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
                    <Zap className="h-5 w-5 text-blue-600" />
                    <p className={`text-gray-700 ${fonts.body}`}>{item}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* ------------------ DEPLOYMENT AREAS ------------------ */}
          <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
            <motion.h2 className={`text-center text-3xl ${fonts.h2} mb-16 text-gray-900`} variants={fadeInUp}>
              Where CCTV Is Installed
            </motion.h2>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" variants={staggerContainer}>
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
