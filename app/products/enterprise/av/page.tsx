"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { 
  Tv, 
  Video, 
  Speaker, 
  Monitor, 
  Zap, 
  Mic,
  Eye,
  HardDrive,
  Check,
  Building
} from "lucide-react";
import { SEO } from '@/components/seo/seo';
import hero from "@/assets/enterprise-av.jpg"; // Placeholder, change if needed

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

export default function EnterpriseAVPage() {
  /* ------------------ REUSABLE COMPONENT ------------------ */
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
      title: "Meeting Room & Boardroom AV",
      points: [
        "4K displays & interactive touch panels",
        "Video conferencing systems (Zoom/Teams/Google Meet compatible)",
        "Wireless presentation systems",
        "Digital whiteboards",
        "Ceiling & table microphones",
        "Soundbars & speaker systems"
      ],
      note: "Creates a seamless hybrid meeting experience."
    },
    {
      title: "Audio Conferencing & Sound Reinforcement",
      points: [
        "High-fidelity speakers",
        "DSP-based audio processing",
        "Beamforming microphones",
        "Acoustic echo cancellation"
      ],
      note: "Perfect for medium and large conference rooms."
    },
    {
      title: "Digital Signage Solutions",
      points: [
        "Corporate communication screens",
        "Reception lobby displays",
        "Internal branding",
        "Digital noticeboards",
        "Multi-zone content layouts",
        "Centralized scheduling"
      ],
      note: "Ideal for HR, admin, and corporate communication teams."
    },
    {
      title: "Command Center & NOC/SOC AV",
      points: [
        "Large video walls",
        "LED/LCD wall processors",
        "Multi-source data visualization",
        "KVM matrix switching",
        "Operator consoles",
        "Real-time dashboards"
      ],
      note: "Suitable for IT monitoring centers, security command centers, and enterprise control rooms."
    },
    {
      title: "Training Rooms & Auditorium AV",
      points: [
        "Stage lighting & audio",
        "Laser projectors",
        "Handheld/lapel microphones",
        "Video recording setups",
        "Network-based audio distribution"
      ],
      note: "Supports large corporate events & training programs."
    },
    {
      title: "Backend AV Processing",
      points: [
        "Media servers",
        "Matrix switchers (HDMI/SDI/IP)",
        "Audio DSP processors",
        "Encoder/decoder systems",
        "Redundant AV racks for 24×7 operations"
      ]
    },
    // Add icons to the objects above
  ];

  const technicalHighlights = [
    "4K/8K resolution support",
    "IP-based AV distribution",
    "HDBaseT & SDVoE technologies",
    "Centralized AV management",
    "Remote device monitoring",
    "Automatic power scheduling",
    "Support for Microsoft Teams Rooms & Zoom Rooms"
  ];

  const deploymentAreas = [
    "Boardrooms",
    "Conference rooms",
    "Huddle rooms",
    "Auditoriums",
    "Training rooms",
    "Reception & common areas",
    "Corporate floors",
    "NOC/SOC control rooms",
    "HR & communication zones"
  ];

  const integrations = [
    "BMS → Lighting/AC automation during meetings",
    "Access Control → Room booking + entry integration",
    "CCTV → Video feed integration in control rooms",
    "Network Systems → Enterprise Wi-Fi & switching",
    "Digital Signage CMS → Central content distribution"
  ];

  const benefits = [
    "Professional & high-quality meetings",
    "Enhanced collaboration across teams",
    "Better decision-making through real-time data displays",
    "Automated room environment",
    "Centralized control of all AV devices",
    "Strong brand presence via digital signage",
    "Reliable performance for hybrid work culture"
  ];

  return (
    <>
      <SEO 
        title="Enterprise AV Solutions | Corporate Meeting Room & Digital Signage"
        description="Technify delivers enterprise-grade AV solutions, including video conferencing, digital signage, and command center video walls to enhance collaboration and brand experience."
        path="/products/enterprise/av"
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
                    Enterprise Collaboration Solutions
                  </span>
                </motion.div>

                <motion.h1 variants={fadeInUp} className={`text-4xl md:text-5xl ${fonts.h1} text-gray-900 mb-6`}>
                  Audio-Visual (AV) Solutions for Enterprises
                </motion.h1>

                <motion.p variants={fadeInUp} className={`text-lg text-gray-600 ${fonts.body} mb-6`}>
                  <strong>Smart Meetings. Digital Collaboration. Visual Intelligence for Modern Workplaces.</strong>
                </motion.p>

                <motion.p variants={fadeInUp} className={`text-lg text-gray-600 ${fonts.body}`}>
                  Enterprises require advanced AV systems for conference rooms, training centers, and command centers. Technify delivers enterprise-grade AV solutions that enhance collaboration and decision-making.
                </motion.p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Image src={hero} alt="Enterprise AV Solutions" width={800} height={600} className="rounded-lg border border-gray-200" />
              </motion.div>
            </div>
          </section>

          {/* ------------------ WHY IMPORTANT ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center">
              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2 variants={fadeInUp} className={`text-3xl ${fonts.h2} text-gray-900 mb-4`}>
                  Why AV Systems Matter for Enterprises
                </motion.h2>
                <motion.p variants={fadeInUp} className={`text-gray-600 max-w-3xl mx-auto ${fonts.body}`}>
                  Modern offices rely on AV systems for professional meetings, real-time monitoring in NOCs/SOCs, digital signage, and hybrid work environments. They help create a smart, collaborative, and productive enterprise.
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
              >
                {capabilities.map((capability, index) => (
                  <CapabilityCard key={index} icon={Monitor} title={capability.title} items={capability.points} note={capability.note} />
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
              Where AV Solutions Are Deployed
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
              <p className="text-center text-lg text-gray-600 -mt-12 mb-12 max-w-2xl mx-auto">Technify integrates AV with other building systems to create a smart, connected workplace experience.</p>

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