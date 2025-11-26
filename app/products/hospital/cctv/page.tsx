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
  Shield,
  Settings,
} from "lucide-react";
import { SEO } from "@/components/seo/seo";
import hero from "@/assets/hospitalcctv.jpg"; // 🔹 Replace with hospital CCTV banner

/* ------------------ FONT STYLES ------------------ */
const fonts = {
  h1: "font-poppins font-semibold",
  h2: "font-poppins font-semibold",
  body: "font-raleway",
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

/* ------------------ REUSABLE CARD ------------------ */
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

export default function HospitalCCTVPage() {
  return (
    <>
      <SEO
        title="CCTV Surveillance System for Hospitals"
        description="hospital cctv system, healthcare surveillance, ICU monitoring cameras, hospital security system, medical CCTV solutions, patient safety monitoring"
        path="/products/healthcare/cctv"
      />

      <div className="min-h-screen bg-white text-gray-800">
        <main>
          {/* ------------------ HERO SECTION ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.h1
                  variants={fadeInUp}
                  className={`text-4xl md:text-5xl text-gray-900 mb-6 leading-tight ${fonts.h1}`}
                >
                  CCTV Surveillance System for <br /> Hospitals
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className={`text-lg text-gray-600 mb-6 ${fonts.body}`}
                >
                  <strong>Patient Safety. Secure Environment. Complete Visibility.</strong>
                  <br />
                  <br />
                  Hospitals require continuous real-time monitoring across ICUs,
                  OTs, NICUs, pharmacies, corridors & entry points. A robust CCTV
                  ecosystem ensures safety, prevents misuse, and enables
                  fast emergency response.
                  <br />
                  <br />
                  <span className="font-semibold">
                    Technify delivers healthcare-grade, AI-enabled CCTV solutions
                    for 24×7 monitoring of multi-floor hospital environments.
                  </span>
                </motion.p>
              </motion.div>

              {/* IMAGE */}
              <motion.div variants={fadeInUp}>
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={hero}
                    alt="Hospital CCTV"
                    width={800}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </section>

          {/* ------------------ WHY CCTV IS CRITICAL ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-100">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                variants={fadeInUp}
                className={`text-3xl text-center mb-8 ${fonts.h2}`}
              >
                Why CCTV Is Critical for Hospitals
              </motion.h2>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {[
                  "Patient safety & incident tracking",
                  "Protection against theft & malpractice",
                  "NICU/ICU real-time monitoring",
                  "Medicine/equipment security",
                  "Staff behavior & accountability",
                  "Ambulance bay monitoring",
                  "Evidence-based dispute management",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="p-4 bg-white rounded-xl border hover:border-gray-300 transition-all duration-300 flex items-center gap-3"
                  >
                    <Check className="w-4 h-4 text-green-600" />
                    <span className={fonts.body}>{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* ------------------ WHAT TECHNIFY DELIVERS ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
            <div className="max-w-6xl mx-auto text-center">
              <motion.h2
                variants={fadeInUp}
                className={`text-3xl mb-6 ${fonts.h2}`}
              >
                What Technify Delivers
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className={`text-lg text-gray-600 max-w-3xl mx-auto ${fonts.body}`}
              >
                A fully integrated, multi-layer CCTV ecosystem designed for
                hospital safety & clinical monitoring.
              </motion.p>
            </div>
          </section>

          {/* ------------------ CORE CAPABILITIES ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto">
              <motion.h2
                variants={fadeInUp}
                className={`text-3xl text-center mb-12 ${fonts.h2}`}
              >
                Core Capabilities
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <CapabilityCard
                  icon={Camera}
                  title="High-Definition IP Cameras"
                  items={[
                    "4MP / 8MP / 4K cameras",
                    "Bullet / Dome / PTZ models",
                    "Night vision for ICU wards",
                    "Anti-vandal cameras for public areas",
                  ]}
                />
                <CapabilityCard
                  icon={Shield}
                  title="ICU / NICU Monitoring"
                  items={[
                    "Secure hospital-only streaming",
                    "Role-based viewing for doctors",
                    "Abnormal patient activity alerts",
                    "Privacy-safe monitoring",
                  ]}
                />
                <CapabilityCard
                  icon={Eye}
                  title="Intelligent Video Analytics"
                  items={[
                    "Patient fall detection",
                    "Door open/close tracking",
                    "Queue detection & alerts",
                    "Loitering & restricted area alerts",
                  ]}
                />
                <CapabilityCard
                  icon={Server}
                  title="Central Monitoring Room"
                  items={[
                    "24×7 live feed",
                    "Video walls & analytics",
                    "Incident tagging & response",
                    "Ward-level monitoring",
                  ]}
                />
              </div>
            </div>
          </section>

          {/* ------------------ DEPLOYMENT AREAS ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
            <motion.h2
              variants={fadeInUp}
              className={`text-3xl text-center mb-10 ${fonts.h2}`}
            >
              Where CCTV Is Installed
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
              {[
                "ICU / NICU wards",
                "Emergency & trauma centers",
                "OT & corridor monitoring",
                "Doctors’ rooms & nursing stations",
                "Pharmacy & record rooms",
                "Parking & ambulance bay",
                "In-patient wards",
                "Entry / Exit gates",
                "Waiting halls & cafeterias",
              ].map((zone, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="p-4 bg-gray-50 rounded-lg border hover:border-blue-300 transition-all"
                >
                  {zone}
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* ------------------ SYSTEM INTEGRATIONS ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <motion.h2
              variants={fadeInUp}
              className={`text-3xl text-center mb-10 ${fonts.h2}`}
            >
              System Integrations
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              {[
                "Nurse Call System → Patient alerts",
                "Access Control → Restricted medical zones",
                "HIMS → Staff movement logs",
                "Parking System → ANPR vehicle logging",
                "Fire Alarm → Visual emergency pop-ups",
              ].map((integration, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="p-4 bg-white rounded-xl border flex items-center gap-3"
                >
                  <Zap className="w-4 h-4 text-blue-600" />
                  {integration}
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* ------------------ BENEFITS ------------------ */}
          <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50 px-4 sm:px-6 lg:px-8">
            <motion.h2
              variants={fadeInUp}
              className={`text-3xl text-center mb-12 ${fonts.h2}`}
            >
              Benefits for Hospitals
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
            >
              {[
                "Safer patient environment",
                "Eliminates blind spots in hospitals",
                "Better staff accountability",
                "Reduced malpractice & disputes",
                "Fast emergency response",
                "Secured medicines & assets",
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.03 }}
                  className="p-6 bg-white rounded-xl border shadow-sm"
                >
                  <Check className="w-4 h-4 text-green-600 mb-2" />
                  {benefit}
                </motion.div>
              ))}
            </motion.div>
          </section>
        </main>
      </div>
    </>
  );
}
