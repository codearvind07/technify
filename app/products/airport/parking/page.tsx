"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {
  Eye,
  Ticket,
  MapPin,
  Server,
  Shield,
  Zap,
  Check,
  Settings,
} from "lucide-react";
import { SEO } from "@/components/seo/seo";
import hero from "@/assets/airportparking.jpg";

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
function CapabilityCard({ icon: Icon, title, items }: { icon: any; title: string; items: string[] }) {
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
            <span className={`text-gray-600 text-sm leading-relaxed ${fonts.body}`}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/* ------------------ PAGE START ------------------ */
export default function AirportParkingPage() {
  return (
    <>
      <SEO
        title="Airport Vehicle & Parking Management"
        description="airport parking management system, ANPR parking system, airport vehicle tracking, smart parking airport, automated parking solutions, airport traffic management"
        path="/products/airport/parking"
        image="/images/og-airport-parking.jpg"
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
                    Airport Mobility Solutions
                  </span>
                </motion.div>

                <motion.h1 variants={fadeInUp} className={`text-4xl md:text-5xl text-gray-900 mb-6 leading-tight ${fonts.h1}`}>
                  Vehicle & Parking Management System for Airports
                </motion.h1>

                <motion.p variants={fadeInUp} className={`text-lg text-gray-600 mb-4 leading-relaxed ${fonts.body}`}>
                  <strong>Smart Traffic Flow. Automated Parking. Zero Congestion.</strong>
                </motion.p>

                <motion.p variants={fadeInUp} className={`text-lg text-gray-600 mb-8 leading-relaxed ${fonts.body}`}>
                  Airports face heavy and continuous vehicle movement — staff vehicles, taxis, passenger cars, buses,
                  VIP transport, logistics, and service fleets. To manage this complexity, airports need an intelligent
                  system that ensures smooth traffic flow, vehicle tracking, revenue control, and safety.
                  Technify delivers <span className="font-semibold text-gray-900">AI-enabled, ANPR-driven Parking & Vehicle Management Systems</span>
                  designed specifically for airport environments.
                </motion.p>
              </motion.div>

              {/* IMAGE */}
              <motion.div variants={fadeInUp} className="relative">
                <div className="relative rounded-lg overflow-hidden border border-gray-200">
                  <Image src={hero} alt="Airport Parking" width={800} height={600} className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ------------------ WHY IT MATTERS ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-6xl mx-auto text-center">
              <motion.h2 variants={fadeInUp} className={`text-3xl text-gray-900 mb-4 ${fonts.h2}`}>
                Why Smart Parking Matters at Airports
              </motion.h2>
            </div>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                "Reduces congestion during peak hours",
                "Ensures smooth arrival/departure traffic",
                "Enhances customer experience",
                "Improves security and access control",
                "Increases parking revenue accuracy",
                "Provides visibility of all vehicles entering/exiting the airport",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-300 transition-all duration-300"
                >
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span className={`text-gray-700 text-sm ${fonts.body}`}>{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* ------------------ CORE CAPABILITIES ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-100">
            <motion.h2 variants={fadeInUp} className={`text-center text-3xl text-gray-900 mb-12 ${fonts.h2}`}>
              Core Capabilities
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              <CapabilityCard icon={Eye} title="ANPR System" items={[
                "High-speed number plate detection",
                "Works in low-light & glare",
                "Blacklist/whitelist alerts",
                "Instant vehicle ID & tracking",
                "Real-time syncing via IP network",
              ]} />

              <CapabilityCard icon={Ticket} title="Ticketless Parking" items={[
                "QR / mobile-based entry",
                "Zero manual interaction",
                "Auto toll calculation",
              ]} />

              <CapabilityCard icon={Zap} title="Entry & Exit Automation" items={[
                "Boom barrier control",
                "RFID staff access",
                "FastTag support (optional)",
              ]} />

              <CapabilityCard icon={Server} title="Central Parking Software" items={[
                "Live vehicle logs",
                "Analytics dashboard",
                "API integration with airport apps",
                "Revenue & reports module",
              ]} />
            </div>
          </section>

          {/* ------------------ TECHNICAL HIGHLIGHTS ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-white">
            <motion.h2 variants={fadeInUp} className={`text-3xl text-center mb-10 text-gray-900 ${fonts.h2}`}>
              Technical Highlights
            </motion.h2>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "AI-powered ANPR engine (95–98% accuracy)",
                "Redundant servers & backup storage",
                "Gigabit network connectivity",
                "Mobile app integration for VIP parking",
                "Fiber-optic communication network",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-all duration-300 flex gap-3"
                >
                  <Settings className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span className={`text-sm text-gray-700 ${fonts.body}`}>{item}</span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ------------------ BENEFITS ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-orange-50">
            <motion.h2 variants={fadeInUp} className={`text-3xl text-gray-900 mb-10 text-center ${fonts.h2}`}>
              Benefits for Airport Operators
            </motion.h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Higher parking revenue accuracy",
                "Faster passenger vehicle flow",
                "Reduced need for manual staff",
                "Enhanced safety & visibility",
                "Smooth VIP & emergency access",
                "Lower congestion during rush hours",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="p-6 bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300"
                >
                  <Check className="w-4 h-4 text-green-600" />
                  <p className={`mt-2 text-gray-700 ${fonts.body}`}>{item}</p>
                </motion.div>
              ))}
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
