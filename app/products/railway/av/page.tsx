"use client";

import { motion, Variants } from "framer-motion";
import {
  Tv,
  Video,
  Speaker,
  Monitor,
  Check,
  Server,
  Users,
  Zap,
} from "lucide-react";
import { SEO } from "@/components/seo/seo";
import Image from "next/image";
import hero from "@/assets/railwayav.jpg"; // 🔹 Use your railway AV banner image

/* ---------- FONT STYLES ---------- */
const fonts = {
  h1: "font-poppins font-semibold",
  h2: "font-poppins font-semibold",
  body: "font-raleway",
};

/* ---------- MOTION VARIANTS ---------- */
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

/* ---------- CAPABILITY CARD ---------- */
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
      className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        <Icon className="w-6 h-6 text-blue-600" />
        <h3 className={`text-xl ${fonts.h2}`}>{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className={`flex gap-3 text-gray-700 ${fonts.body}`}>
            <Check className="w-4 h-4 text-green-600 mt-1" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function RailwayAVPage() {
  const coreCapabilities = [
    {
      icon: Monitor,
      title: "Platform & Concourse Displays",
      items: [
        "LED/LCD screens for train information",
        "High-brightness outdoor visibility",
        "Multi-language support",
        "24×7 commercial-grade hardware",
      ],
    },
    {
      icon: Tv,
      title: "Digital Signage Solutions",
      items: [
        "Wayfinding screens",
        "Fare/route information boards",
        "Advertising displays",
        "Emergency message overlays",
        "Real-time central scheduling",
      ],
    },
    {
      icon: Video,
      title: "Video Walls for Control Rooms",
      items: [
        "Ultra-narrow bezel video walls",
        "LED walls (indoor/outdoor)",
        "Multiple data source integration",
        "HD/4K camera feeds",
        "KVM & matrix switching systems",
      ],
    },
    {
      icon: Users,
      title: "Meeting & Conference Room AV",
      items: [
        "Video conferencing systems",
        "Interactive displays",
        "Sound reinforcement solutions",
        "Wireless presentation tools",
      ],
    },
    {
      icon: Speaker,
      title: "PA & Emergency Integration",
      items: [
        "AV + PAS synchronization",
        "Automated emergency routing",
        "Instant broadcast across all displays",
      ],
    },
    {
      icon: Server,
      title: "Media Processing & Backend",
      items: [
        "Media servers & AV processors",
        "Video encoders/decoders",
        "Fiber-based AV transmission",
        "Redundant hardware architecture",
      ],
    },
  ];

  const technicalHighlights = [
    "4K/8K resolution support",
    "Centralized content management",
    "Remote monitoring of displays",
    "High-brightness 3000–5000 nits screens",
    "IP/Fiber-based AV distribution",
    "Ruggedized hardware",
    "Seamless integration with PIDS & PAS",
  ];

  const coverageZones = [
    "Platforms & concourses",
    "Ticketing halls",
    "Interchange nodes",
    "Parking & entry areas",
    "Control rooms",
    "FOH / BOH zones",
    "Administrative offices",
  ];

  const systemIntegrations = [
    "PIDS → Real-time synchronized information",
    "PAS → Emergency audio-visual messaging",
    "CCTV → Operator control room monitoring",
    "BMS → Automated energy scheduling",
    "Access Control → Restricted area alerts",
  ];

  const operatorBenefits = [
    "Clear passenger guidance",
    "Better crowd management",
    "Centralized multi-station monitoring",
    "Enhanced control room intelligence",
    "Revenue via digital signage",
    "Real-time multilingual display support",
    "Reliable 24×7 operation",
  ];

  return (
    <>
      <SEO
        title="Audio-Visual Solutions for Railways & Metro"
        description="railway av solutions, metro digital signage, railway video wall, station display systems, av technology for railways, passenger visual communication"
        path="/products/railway/av"
      />

      <div className="min-h-screen bg-white text-gray-800">
        <main>
          {/* ---------- HERO ---------- */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                <motion.h1
                  variants={fadeInUp}
                  className={`text-4xl md:text-5xl text-gray-900 mb-6 leading-tight ${fonts.h1}`}
                >
                  Audio-Visual (AV) Solutions <br /> for Railways & Metro
                </motion.h1>

                <motion.p variants={fadeInUp} className={`text-lg text-gray-600 mb-6 ${fonts.body}`}>
                  <strong>Real-Time Information. Control Room Intelligence. Enhanced Passenger Experience.</strong>
                  <br /><br />
                  Railway & metro stations depend on AV systems to manage passenger information, display updates, enable decision-making and streamline control room operations.
                  <br /><br />
                  <span className="font-semibold">
                    Technify delivers 24×7 railway-grade AV systems designed for high-density metro & railway networks.
                  </span>
                </motion.p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="rounded-lg overflow-hidden shadow-xl border border-gray-200">
                  <Image src={hero} alt="Railway AV Solutions" width={800} height={600} className="object-cover" />
                </div>
              </motion.div>
            </div>
          </section>

          {/* ---------- WHY AV ---------- */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-100">
            <div className="max-w-6xl mx-auto">
              <motion.h2 variants={fadeInUp} className={`text-3xl text-center mb-8 ${fonts.h2}`}>
                Why AV Systems Matter in Railways
              </motion.h2>

              <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Real-time train information",
                  "Control room monitoring",
                  "Crowd movement guidance",
                  "Digital signage & advertising",
                  "Emergency message alerts",
                  "Wayfinding for multi-line transit",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl border hover:border-gray-300 transition-all duration-300"
                  >
                    <Check className="w-4 h-4 text-green-600" />
                    <span className={fonts.body}>{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* ---------- WHAT TECHNIFY DELIVERS ---------- */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
            <div className="max-w-6xl mx-auto text-center">
              <motion.h2 variants={fadeInUp} className={`text-3xl mb-6 ${fonts.h2}`}>
                What Technify Delivers
              </motion.h2>
              <motion.p variants={fadeInUp} className={`text-lg text-gray-600 max-w-3xl mx-auto ${fonts.body}`}>
                An integrated AV ecosystem with high-brightness displays, control room visualization & digital signage networks.
              </motion.p>
            </div>
          </section>

          {/* ---------- CORE CAPABILITIES ---------- */}
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

          {/* ---------- TECHNICAL HIGHLIGHTS ---------- */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
            <motion.h2 variants={fadeInUp} className={`text-3xl text-center mb-12 ${fonts.h2}`}>
              Technical Highlights
            </motion.h2>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {technicalHighlights.map((text, i) => (
                <motion.div key={i} variants={fadeInUp} whileHover={{ scale: 1.03 }} className="p-6 bg-white rounded-xl shadow-md border">
                  <Check className="w-4 h-4 text-green-600" /> {text}
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* ---------- COVERAGE ---------- */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <motion.h2 variants={fadeInUp} className={`text-3xl text-center mb-12 ${fonts.h2}`}>
              Where AV Is Used
            </motion.h2>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {coverageZones.map((zone, i) => (
                <motion.div key={i} variants={fadeInUp} whileHover={{ scale: 1.03 }} className="p-4 bg-gray-50 rounded-lg border hover:border-blue-300">
                  {zone}
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* ---------- INTEGRATIONS ---------- */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <motion.h2 variants={fadeInUp} className={`text-3xl text-center mb-10 ${fonts.h2}`}>
              System Integrations
            </motion.h2>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {systemIntegrations.map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="p-4 bg-white border rounded-xl">
                  <Zap className="w-4 h-4 text-blue-600 mr-2 inline-block" />
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* ---------- BENEFITS ---------- */}
          <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50 px-4 sm:px-6 lg:px-8">
            <motion.h2 variants={fadeInUp} className={`text-3xl text-center mb-10 ${fonts.h2}`}>
              Benefits for Railway Operators
            </motion.h2>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {operatorBenefits.map((item, i) => (
                <motion.div key={i} variants={fadeInUp} whileHover={{ y: -4 }} className="p-6 bg-white rounded-xl border shadow-md">
                  <Check className="w-4 h-4 text-green-600 mb-2" /> {item}
                </motion.div>
              ))}
            </motion.div>
          </section>

        </main>
      </div>
    </>
  );
}
