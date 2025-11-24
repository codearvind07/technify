"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {
  Phone,
  Wifi,
  Users,
  Server,
  Shield,
  Check,
  AlertTriangle,
  Zap,
} from "lucide-react";
import { SEO } from "@/components/seo/seo";
import hero from "@/assets/railwayippbx.jpg"; // your image

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
            <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function RailwayIPPBXPage() {
  return (
    <>
      <SEO
        title="IP PBX & Communication System for Railways & Metro"
        description="ip pbx railway system, railway communication system, voip metro telephony, ips intercom railway, emergency call railway system, railway operations communication, digital pbx for metro stations"
        path="/products/railway/ip-pbx"
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
                  IP PBX & Communication <br /> System for Railways & Metro
                </motion.h1>

                <motion.p variants={fadeInUp} className={`text-lg text-gray-600 mb-6 ${fonts.body}`}>
                  <strong>Seamless Communication. Centralized Control. Reliable Operations.</strong>
                  <br /><br />
                  Railway & metro stations require continuous and secure communication between staff, control rooms, drivers, emergency responders, and operational teams.
                  Traditional telephony systems are slow, unreliable, and difficult to scale — leading to delays in coordination and response.
                  <br /><br />
                  <span className="font-semibold">
                    Technify provides enterprise-grade IP PBX & Unified Communication Systems designed specifically for railway and metro infrastructure — ensuring real-time voice calling, paging, intercom, and emergency connectivity across all station zones.
                  </span>
                </motion.p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <Image src={hero} alt="Railway IP PBX" width={800} height={600} className="object-cover" />
                </div>
              </motion.div>
            </div>
          </section>

          {/* ------------------ WHY IP PBX IS IMPORTANT ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <motion.h2 variants={fadeInUp} className={`text-3xl text-center mb-8 ${fonts.h2}`}>
                Why IP PBX Is Essential for Railways & Metro
              </motion.h2>

              <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Instant voice communication between departments",
                  "Faster decision-making during peak hours",
                  "Secure communication with encryption",
                  "Real-time emergency response & coordination",
                  "Auto call routing & priority-based calling",
                  "Easy scalability across multiple stations",
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

              <p className="text-center text-gray-700 mt-10 text-lg">
                A reliable IP PBX system ensures uninterrupted communication across all railway operations.
              </p>
            </div>
          </section>

          {/* ------------------ WHAT TECHNIFY DELIVERS ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-white">
            <div className="max-w-6xl mx-auto text-center">
              <motion.h2 variants={fadeInUp} className={`text-3xl mb-6 ${fonts.h2}`}>
                What Technify Delivers
              </motion.h2>
              <motion.div
                variants={fadeInUp}
                className={`text-lg text-gray-600 max-w-3xl mx-auto space-y-2 ${fonts.body}`}
              >
                <p>✔ VoIP-enabled IP PBX servers</p>
                <p>✔ Digital intercom & communication endpoints</p>
                <p>✔ Railway-grade SIP phones & VoIP gateways</p>
                <p>✔ Centralized control for multiple stations</p>
                <p>✔ Cloud-based or on-premise architecture</p>
                <p>✔ Priority-based emergency calling</p>
              </motion.div>
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
                  icon={Server}
                  title="IP-Based PBX Server"
                  items={[
                    "Supports SIP & VoIP protocols",
                    "Handles thousands of concurrent calls",
                    "Call recording & monitoring",
                    "Auto-routing of departments",
                    "Redundant failover support",
                  ]}
                />
                <CapabilityCard
                  icon={Phone}
                  title="Railway-Grade Intercom Terminals"
                  items={[
                    "Platform & concourse communication",
                    "Driver-to-control room calls",
                    "Emergency SOS call points",
                    "Weatherproof for outdoor environments",
                  ]}
                />
                <CapabilityCard
                  icon={Users}
                  title="Unified Communication Features"
                  items={[
                    "Paging & group announcements",
                    "Video/audio intercom",
                    "Call forwarding & hunting groups",
                    "Priority & emergency dialing",
                  ]}
                />
                <CapabilityCard
                  icon={Wifi}
                  title="VoIP Gateways & SIP Phones"
                  items={[
                    "Converts analog phones to IP",
                    "Supports legacy analog networks",
                    "Railway-grade SIP phones",
                    "Noise cancellation for loud stations",
                  ]}
                />
                <CapabilityCard
                  icon={Shield}
                  title="Security & Reliability Layer"
                  items={[
                    "Encrypted VoIP communication",
                    "Firewall & SIP security",
                    "Backup+failover server setup",
                    "Auto-switch during outages",
                  ]}
                />
              </div>
            </div>
          </section>

          {/* ------------------ USE CASES ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <motion.h2 variants={fadeInUp} className={`text-3xl text-center mb-10 ${fonts.h2}`}>
              Where It Is Used
            </motion.h2>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                "Railway platform & concourse zones",
                "Driver-to-control room communication",
                "Station staff coordination",
                "Depot & operational buildings",
                "Passenger emergency call points",
                "Ticket counter communication",
                "Public announcement zones",
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
                "PAS → Paging & announcements",
                "PIDS → Call-triggered alerts & displays",
                "CCTV → Incident-based alerts",
                "Fire Alarm → Emergency routing",
                "Access Control → Extension-based authentication",
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

          {/* ------------------ BENEFITS SECTION ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-orange-50">
            <motion.h2 variants={fadeInUp} className={`text-3xl text-center mb-10 ${fonts.h2}`}>
              Benefits for Railway Operators
            </motion.h2>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                "Faster decision-making in critical situations",
                "Seamless inter-department communication",
                "Central command control for all stations",
                "Priority-based emergency calling",
                "Scalable to multiple metro lines",
                "Works in high-noise environments",
                "Improves safety & operational efficiency",
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
