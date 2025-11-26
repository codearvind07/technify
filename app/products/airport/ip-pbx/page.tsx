"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {
  Phone,
  AlertTriangle,
  Wifi,
  Shield,
  Users,
  Server,
  Check,
  Settings,
} from "lucide-react";
import { SEO } from "@/components/seo/seo";
import hero from "@/assets/airportipbx.jpg"; // CHANGE IMAGE IF NEEDED

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

/* ------------------ REUSABLE CARD COMPONENT ------------------ */
function CapabilityCard({ icon: Icon, title, items }: { icon: any; title: string; items: string[] }) {
  return (
    <motion.div variants={scaleIn} className="group p-8 bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-lg border border-gray-300 group-hover:border-blue-400">
          <Icon className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
        </div>
        <h3 className={`text-xl text-gray-900 ${fonts.h3}`}>{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 items-start">
            <Check className="w-4 h-4 text-green-600 mt-1" />
            <span className={`text-gray-600 text-sm ${fonts.body}`}>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function AirportIPPBXPage() {
  return (
    <>
      {/* SEO (Optimized) */}
      <SEO
        title="Audio-Visual (AV) Solutions for Airports | Technify"
        description="enterprise-grade airport av solutions: digital signage, video walls, control room AV, meeting conferencing, PA integration"
        path="/products/airport/av"
        image="/images/og-airport-av.jpg"
      />

      <div className="min-h-screen bg-white text-gray-800">
        <main>
          {/* ------------------ HERO SECTION ------------------ */}
          <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className={`text-sm font-semibold text-gray-500 uppercase tracking-wide ${fonts.other}`}>
                    Airport Communication Solutions
                  </span>
                </motion.div>

                <motion.h1 variants={fadeInUp} className={`text-4xl md:text-5xl text-gray-900 mb-6 leading-tight ${fonts.h1}`}>
                  IP PBX & Communication System for Airports
                </motion.h1>

                <motion.p variants={fadeInUp} className={`text-lg text-gray-600 mb-4 leading-relaxed ${fonts.body}`}>
                  <strong>Unified Communication. Instant Connectivity. Zero Communication Gaps.</strong>
                </motion.p>

                <motion.p variants={fadeInUp} className={`text-lg text-gray-600 mb-8 leading-relaxed ${fonts.body}`}>
                  Airports require highly reliable, secure, and instant communication between multiple departments — ATC, security teams, terminal operations,
                  baggage handling, emergency response units, and administration. Technify provides carrier-grade IP PBX & Unified Communication Systems engineered
                  for complex airport environments.
                </motion.p>
              </motion.div>

              <motion.div variants={fadeInUp} className="relative">
                <div className="relative rounded-lg overflow-hidden border border-gray-200">
                  <Image src={hero} alt="Airport IP PBX System" width={800} height={600} className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </motion.div>
            </div>
          </section>

          {/* ------------------ WHY IP PBX MATTERS ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-6xl mx-auto text-center">
              <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" className={`text-3xl text-gray-900 mb-4 ${fonts.h2}`}>
                Why IP PBX Is Critical for Airports
              </motion.h2>
              <motion.p variants={fadeInUp} className={`text-gray-600 max-w-3xl mx-auto ${fonts.body}`}>
                Airports operate like a city — with thousands of people working simultaneously. A robust communication backbone ensures:
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10">
              {[
                "Immediate coordination during emergencies",
                "Clear communication between departments",
                "Faster operational decision-making",
                "Secure and encrypted voice channels",
                "Reliable communication even during network failures",
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="p-4 bg-white border border-gray-200 rounded-xl hover:border-blue-300 transition-all duration-300">
                  <Check className="text-green-600 w-5 h-5 mb-2" />
                  <p className={`text-gray-700 ${fonts.body}`}>{item}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ------------------ WHAT TECHNIFY DELIVERS ------------------ */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
            <div className="max-w-6xl mx-auto text-center">
              <motion.h2 variants={fadeInUp} className={`text-3xl text-gray-900 mb-4 ${fonts.h2}`}>
                What Technify Delivers
              </motion.h2>
              <motion.p variants={fadeInUp} className={`text-lg text-gray-600 max-w-4xl mx-auto ${fonts.body}`}>
                We deploy scalable, redundant, enterprise-grade IP PBX systems tailored for small terminals, mega airports, and multi-terminal structures.
              </motion.p>
            </div>
          </section>

          {/* ------------------ CORE CAPABILITIES ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto text-center mb-16">
              <motion.h2 variants={fadeInUp} className={`text-3xl text-gray-900 ${fonts.h2}`}>
                Core Capabilities
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <CapabilityCard icon={Phone} title="VoIP-Based Unified Communication" items={[
                "High-definition voice calling",
                "SIP trunking for flexible connectivity",
                "Internal extensions across all departments",
                "Voice mail, call forwarding, call queuing",
              ]} />

              <CapabilityCard icon={AlertTriangle} title="Dedicated Hotlines & Priority Calling" items={[
                "Hotline phones for ATC",
                "Priority calling for emergency teams",
                "Direct line communication for security & CISF",
                "Zero-delay communication channels",
              ]} />

              <CapabilityCard icon={Wifi} title="IP Intercom & Help Points" items={[
                "Touchless intercom units",
                "Emergency call points across terminals",
                "Integrated CCTV pop-up for each call",
                "Auto-location display in control room",
              ]} />

              <CapabilityCard icon={Shield} title="Redundant & Fail-Safe Architecture" items={[
                "Dual servers in high-availability mode",
                "Auto failover switching",
                "Redundant power supply",
                "Backup routing & SIP failover",
              ]} />

              <CapabilityCard icon={Users} title="Department-Wise Communication Groups" items={[
                "Baggage handling",
                "Terminal control",
                "Security teams",
                "Engineering & maintenance",
                "Airlines & ground staff",
                "Fire & rescue teams",
              ]} />

              <CapabilityCard icon={Server} title="Smart Call Analytics & Logs" items={[
                "Call recording",
                "Call analytics (duration, volume, missed calls)",
                "Centralized admin console",
                "Monitoring of all extensions",
              ]} />
            </div>
          </section>

          {/* ------------------ TECHNICAL HIGHLIGHTS ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-100">
            <div className="max-w-6xl mx-auto text-center">
              <motion.h2 variants={fadeInUp} className={`text-3xl text-gray-900 mb-4 ${fonts.h2}`}>
                Technical Highlights
              </motion.h2>

              <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {[
                  "SIP-based open standard architecture",
                  "Secure RTP encryption for voice",
                  "Gigabit network connectivity",
                  "Compatible with IP phones, softphones, mobile apps",
                  "Firewall & SBC protection",
                  "Integration with airport LDAP/AD systems",
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeInUp} className="p-4 bg-white border border-gray-200 rounded-xl hover:border-blue-300 transition-all duration-300">
                    <Settings className="text-blue-600 w-5 h-5 mb-2" />
                    <p className={`text-gray-700 ${fonts.body}`}>{item}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* ------------------ WHERE IT IS USED ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-6xl mx-auto">
              <motion.h2 variants={fadeInUp} className={`text-3xl text-gray-900 text-center mb-10 ${fonts.h2}`}>
                Where IP PBX Is Used in Airports
              </motion.h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                  "Terminal control rooms",
                  "BHS & cargo operations",
                  "Security command centers",
                  "Boarding gates",
                  "Staff offices",
                  "Apron operations / airside teams",
                  "Fire & rescue stations",
                  "Parking management zones",
                ].map((zone, i) => (
                  <motion.div key={i} variants={fadeInUp} className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-300 transition-all duration-300 flex gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span className={`text-gray-700 ${fonts.body}`}>{zone}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ------------------ SYSTEM INTEGRATIONS ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-100">
            <div className="max-w-6xl mx-auto text-center mb-12">
              <motion.h2 variants={fadeInUp} className={`text-3xl text-gray-900 ${fonts.h2}`}>
                System Integrations
              </motion.h2>
              <p className={`text-gray-600 mt-4 ${fonts.body}`}>Technify integrates IP PBX with:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                "CCTV → Caller video popup",
                "Access Control → Door intercom communication",
                "PAS → Unified announcements + communication",
                "BMS → Automated event alerts",
                "Airport ERP/AODB → Cross-system communication",
              ].map((integration, i) => (
                <motion.div key={i} variants={fadeInUp} className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-300 transition-all duration-300 flex gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className={`text-gray-700 ${fonts.body}`}>{integration}</span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ------------------ BENEFITS ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-orange-50">
            <div className="max-w-6xl mx-auto text-center mb-16">
              <motion.h2 variants={fadeInUp} className={`text-3xl text-gray-900 ${fonts.h2}`}>
                Benefits for Airport Operators
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                "Faster incident response",
                "Centralized communication control",
                "Increased staff coordination",
                "Secure communication channels",
                "Multi-terminal connectivity",
                "Lower operational downtime",
                "Future-ready VoIP/UC architecture",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <p className={`text-gray-700 ${fonts.body}`}>{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
