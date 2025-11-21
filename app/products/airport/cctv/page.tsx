"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {
  Camera,
  Eye,
  Shield,
  Check,
  Server,
  Network,
  Users,
  Building,
  Plane,
  BarChart3,
  Zap,
  Cctv,
  Monitor,
  Settings,
} from "lucide-react";
import { SEO } from "@/components/seo/seo";
import hero from "@/assets/airportcctv.jpg"

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
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 items-start">
            <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
            <span className={`text-gray-600 text-sm leading-relaxed ${fonts.body}`}>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function FeatureItem({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg hover:border-blue-300 transition-all duration-300"
    >
      <Icon className="w-4 h-4 text-blue-600 flex-shrink-0" />
      <span className={`text-gray-700 text-sm font-medium ${fonts.other}`}>{text}</span>
    </motion.div>
  );
}

function StatCard({ number, label, icon: Icon }: { number: string; label: string; icon: any }) {
  return (
    <motion.div
      variants={scaleIn}
      className="text-center p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-all duration-300"
    >
      <div className="flex justify-center mb-3">
        <Icon className="w-6 h-6 text-gray-600" />
      </div>
      <div className={`text-2xl text-gray-900 mb-1 ${fonts.h3}`}>{number}</div>
      <div className={`text-gray-500 text-sm font-medium ${fonts.other}`}>{label}</div>
    </motion.div>
  );
}

function IntegrationItem({ text }: { text: string }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-all duration-300"
    >
      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
      <span className={`text-gray-700 text-sm ${fonts.body}`}>{text}</span>
    </motion.div>
  );
}

export default function AirportCCTVPage() {
  return (
    <>
      <SEO
        title="Airport CCTV Surveillance Systems"
        description="airport cctv system, airport surveillance solutions, IP CCTV for airports, aviation security monitoring"
        path="/products/airport/cctv"
        image="/images/og-airport-cctv.jpg"
      />

      <div className="min-h-screen bg-white text-gray-800">
        <main>

          {/* ------------------ PREMIUM HERO ------------------ */}
          <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* TEXT */}
              <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className={`text-sm font-semibold text-gray-500 uppercase tracking-wide ${fonts.other}`}>
                    Airport Security Solutions
                  </span>
                </motion.div>
                
                <motion.h1 variants={fadeInUp} className={`text-4xl md:text-5xl text-gray-900 mb-6 leading-tight ${fonts.h1}`}>
                  CCTV Surveillance Systems for Airports
                </motion.h1>

                <motion.p variants={fadeInUp} className={`text-lg text-gray-600 mb-4 leading-relaxed ${fonts.body}`}>
                  <strong>Smart Monitoring. Zero Blind Spots. Total Security.</strong>
                </motion.p>

                <motion.p variants={fadeInUp} className={`text-lg text-gray-600 mb-8 leading-relaxed ${fonts.body}`}>
                  Airports operate 24×7, handling thousands of passengers, aircraft movements, and high-value zones. 
                  A robust CCTV Surveillance System is the backbone of airport security.{" "}
                  <span className="font-semibold text-gray-900">
                    Technify delivers enterprise-grade, analytics-driven CCTV solutions designed specifically for complex airport environments.
                  </span>
                </motion.p>

                {/* Feature Grid */}
                <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-3 max-w-md">
                  <FeatureItem icon={Zap} text="AI-Powered Analytics" />
                  <FeatureItem icon={Cctv} text="4K Ultra HD" />
                  <FeatureItem icon={Network} text="Seamless Integration" />
                  <FeatureItem icon={Shield} text="24/7 Monitoring" />
                </motion.div>
              </motion.div>

              {/* IMAGE */}
              <motion.div variants={fadeInUp} className="relative">
                <div className="relative rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src={hero}
                    alt="Airport Surveillance Control Room"
                    width={800}
                    height={600}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ------------------ WHY AIRPORT CCTV MATTERS ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-6xl mx-auto">
              <motion.div variants={staggerContainer} className="text-center mb-16">
                <motion.h2 variants={fadeInUp} className={`text-3xl text-gray-900 mb-4 ${fonts.h2}`}>
                  Why Airport CCTV Matters
                </motion.h2>
                <motion.p variants={fadeInUp} className={`text-gray-600 max-w-2xl mx-auto ${fonts.body}`}>
                  Airports are high-security zones with multiple sensitive areas: check-in counters, boarding gates, 
                  baggage zones, airside operations, perimeters, runways, and passenger movement areas.
                </motion.p>
              </motion.div>

              <motion.p variants={fadeInUp} className={`text-lg text-gray-600 mb-8 text-center ${fonts.body}`}>
                A well-designed CCTV system ensures:
              </motion.p>

              <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
                {[
                  "Non-stop monitoring",
                  "Rapid incident detection",
                  "Passenger safety",
                  "Operational efficiency",
                  "Compliance with global aviation security standards",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-all duration-300"
                  >
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className={`text-gray-700 text-sm text-center ${fonts.body}`}>{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* ------------------ WHAT TECHNIFY DELIVERS ------------------ */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
            <div className="max-w-6xl mx-auto text-center">
              <motion.h2 variants={fadeInUp} className={`text-3xl text-gray-900 mb-4 ${fonts.h2}`}>
                What Technify Delivers
              </motion.h2>
              <motion.p variants={fadeInUp} className={`text-lg text-gray-600 max-w-4xl mx-auto ${fonts.body}`}>
                We integrate an advanced, scalable CCTV ecosystem that covers every inch of your airport environment —{" "}
                <span className="font-semibold text-gray-900">both airside and terminal side.</span>
              </motion.p>
            </div>
          </section>

          {/* ------------------ CORE CAPABILITIES ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto">
              <motion.div variants={staggerContainer} className="text-center mb-16">
                <motion.h2 variants={fadeInUp} className={`text-3xl text-gray-900 mb-4 ${fonts.h2}`}>
                  Core Capabilities
                </motion.h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <CapabilityCard
                  icon={Camera}
                  title="High-Definition IP Surveillance"
                  items={[
                    "4K/8MP IP cameras",
                    "Wide dynamic range",
                    "Low-light & night-vision capability",
                    "Thermal imaging for perimeter and runway safety",
                  ]}
                />

                <CapabilityCard
                  icon={Eye}
                  title="Intelligent Video Analytics (IVA)"
                  items={[
                    "Face Recognition (FR)",
                    "ANPR (Automatic Number Plate Recognition)",
                    "Crowd detection & density monitoring",
                    "Left luggage detection",
                    "Intrusion & perimeter breach alerts",
                    "Queue monitoring analytics",
                  ]}
                />

                <CapabilityCard
                  icon={Monitor}
                  title="Centralized Command & Control"
                  items={[
                    "Real-time monitoring dashboards",
                    "Multi-screen video walls",
                    "Integrated alarms and alert workflows",
                    "Remote access for authorized departments",
                  ]}
                />

                <CapabilityCard
                  icon={Server}
                  title="Redundant & Fail-Safe Architecture"
                  items={[
                    "24×7 recording",
                    "RAID/NVR storage redundancy",
                    "Backup servers & network failover",
                    "Health monitoring of all devices",
                  ]}
                />
              </div>
            </div>
          </section>

          {/* ------------------ SEAMLESS INTEGRATION ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-7xl mx-auto">
              <motion.div variants={staggerContainer} className="text-center mb-16">
                <motion.h2 variants={fadeInUp} className={`text-3xl text-gray-900 mb-4 ${fonts.h2}`}>
                  Seamless Integration with Airport Systems
                </motion.h2>
                <motion.p variants={fadeInUp} className={`text-gray-600 max-w-2xl mx-auto ${fonts.body}`}>
                  Our CCTV integrates with all critical airport systems for comprehensive security management.
                </motion.p>
              </motion.div>

              <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                  "Access control",
                  "Public Address System (PAS)",
                  "Fire alarm systems",
                  "Building Management System (BMS)",
                  "Perimeter security",
                  "Flight information systems",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-all duration-300"
                  >
                    <Network className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className={`text-gray-700 text-sm ${fonts.body}`}>{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* ------------------ KEY TECHNICAL HIGHLIGHTS ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-100">
            <div className="max-w-6xl mx-auto">
              <motion.div variants={staggerContainer} className="text-center mb-16">
                <motion.h2 variants={fadeInUp} className={`text-3xl text-gray-900 mb-4 ${fonts.h2}`}>
                  Key Technical Highlights
                </motion.h2>
              </motion.div>

              <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
                {[
                  "ONVIF-compliant for multi-brand camera support",
                  "Fiber-based backbone for zero data loss",
                  "AI-enabled storage optimization",
                  "Cybersecure camera firmware",
                  "SLA-backed maintenance & AMC options",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-all duration-300"
                  >
                    <Settings className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className={`text-gray-700 text-sm text-center ${fonts.body}`}>{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* ------------------ DEPLOYMENT AREAS ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-7xl mx-auto">
              <motion.div variants={staggerContainer} className="text-center mb-16">
                <motion.h2 variants={fadeInUp} className={`text-3xl text-gray-900 mb-4 ${fonts.h2}`}>
                  Where CCTV Is Deployed in Airports
                </motion.h2>
              </motion.div>

              <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {[
                  "Terminal entry & exit gates",
                  "Check-in counters",
                  "Security hold area",
                  "Immigration & customs",
                  "Boarding gates",
                  "Apron & airside",
                  "Runway and taxiway perimeters",
                  "Car parking & vehicle entry",
                  "Cargo and logistics area",
                ].map((area, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-all duration-300"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className={`text-gray-700 text-sm ${fonts.body}`}>{area}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* ------------------ BENEFITS FOR AIRPORT OPERATORS ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-orange-50">
            <div className="max-w-6xl mx-auto">
              <motion.div variants={staggerContainer} className="text-center mb-16">
                <motion.h2 variants={fadeInUp} className={`text-3xl text-gray-900 mb-4 ${fonts.h2}`}>
                  Benefits for Airport Operators
                </motion.h2>
              </motion.div>

              <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Enhanced situational awareness",
                  "Reduced security incidents",
                  "Faster response to emergencies",
                  "Better passenger experience",
                  "Smooth coordination between departments",
                  "Data logging for audits and compliance",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -4 }}
                    className="p-6 bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <div className={`text-gray-700 leading-relaxed ${fonts.body} group-hover:text-gray-900 transition-colors duration-300`}>
                        {item}
                      </div>
                    </div>
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