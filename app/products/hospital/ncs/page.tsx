"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {
  Bell,
  Users,
  Shield,
  Wifi,
  Check,
  Monitor,
  HardDrive,
  AlertTriangle,
  Zap,
} from "lucide-react";
import { SEO } from "@/components/seo/seo";
import hero from "@/assets/hospitalncs.jpg"; // 🔹 Replace with your hospital banner

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
  note,
}: {
  icon: any;
  title: string;
  items: string[];
  note?: string;
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
      {note && <p className="mt-4 text-gray-600 italic">{note}</p>}
    </motion.div>
  );
}

export default function HospitalNCSPage() {
  return (
    <>
      {/* ------------------ SEO ------------------ */}
      <SEO
        title="Panic Alarm & Nurse Call System (NCS) for Hospitals"
        description="nurse call system hospital, ncs healthcare, hospital panic alarm system, patient assistance system, icu nurse call, emergency call system hospital"
        path="/products/hospital/ncs"
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
                  Panic Alarm & Nurse Call <br /> System (NCS)
                </motion.h1>

                <motion.p variants={fadeInUp} className={`text-lg text-gray-600 mb-6 ${fonts.body}`}>
                  <strong>Instant Patient Assistance. Faster Response. Life-Saving Alerts.</strong>
                  <br /><br />
                  In hospitals, every second matters. Technify provides intelligent, hospital-grade
                  NCS systems that ensure instant communication between patients & medical staff,
                  improving response time and clinical efficiency.
                </motion.p>
              </motion.div>

              {/* IMAGE */}
              <motion.div variants={fadeInUp}>
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <Image src={hero} alt="Hospital NCS" width={800} height={600} className="object-cover" />
                </div>
              </motion.div>
            </div>
          </section>

          {/* ------------------ WHY NCS IS ESSENTIAL ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-100">
            <div className="max-w-6xl mx-auto">
              <motion.h2 variants={fadeInUp} className={`text-3xl text-center mb-10 ${fonts.h2}`}>
                Why NCS Is Essential for Hospitals
              </motion.h2>

              <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Fast patient-to-nurse communication",
                  "Reduces emergency response time",
                  "Staff accountability & tracking",
                  "Supports critical ward monitoring",
                  "Improves hospital service quality",
                  "Ensures safety in isolation rooms",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="p-4 bg-white border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-3"
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
            <div className="max-w-7xl mx-auto text-center">
              <motion.h2 variants={fadeInUp} className={`text-3xl mb-6 ${fonts.h2}`}>
                What Technify Delivers
              </motion.h2>
              <motion.p variants={fadeInUp} className={`text-lg text-gray-600 max-w-3xl mx-auto ${fonts.body}`}>
                A reliable & integrated NCS platform engineered for ICU, NICU, isolation & multi-floor hospitals.
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
                <CapabilityCard icon={Bell} title="Bedside Call Units" items={[
                  "Single-touch call button",
                  "Pull-cord washroom switches",
                  "Bedside nurse call panels",
                  "Visual & audio indicators",
                ]} note="Perfect for ICUs, general wards & private rooms." />

                <CapabilityCard icon={Users} title="Corridor Displays" items={[
                  "LED priority indicators",
                  "Emergency / normal / urgent alerts",
                  "Instant nurse visibility",
                ]} />

                <CapabilityCard icon={Monitor} title="Nurse Station Consoles" items={[
                  "Touchscreen console",
                  "Real-time call notifications",
                  "Call acknowledgment & tracking",
                  "Event logs for audits",
                ]} />

                <CapabilityCard icon={Zap} title="Priority & Emergency Handling" items={[
                  "Emergency code alerts",
                  "Doctor-on-call notifications",
                  "Nurse assist requests",
                  "Sensor-based fall detection",
                ]} />

                <CapabilityCard icon={HardDrive} title="Mobile App Integration" items={[
                  "Nurses receive calls on phone",
                  "Instant acknowledgment",
                  "Location-based routing",
                ]} note="Enables faster mobility & response." />

                <CapabilityCard icon={Shield} title="Event Logging & Reporting" items={[
                  "Call time tracking",
                  "Response logs",
                  "Compliance-ready reports",
                ]} />
              </div>
            </div>
          </section>

          {/* ------------------ DEPLOYMENT AREAS ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-white">
            <motion.h2 variants={fadeInUp} className={`text-3xl text-center mb-10 ${fonts.h2}`}>
              Where NCS Is Deployed
            </motion.h2>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                "ICU / NICU wards",
                "General & isolation wards",
                "Emergency & trauma centers",
                "Maternity & labor rooms",
                "OT recovery rooms",
                "Dialysis units",
                "Washrooms & restrooms",
              ].map((area, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="p-4 bg-gray-50 border rounded-lg hover:border-blue-300 transition-all"
                >
                  {area}
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* ------------------ SYSTEM INTEGRATIONS ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <motion.h2 variants={fadeInUp} className={`text-3xl text-center mb-10 ${fonts.h2}`}>
              System Integrations
            </motion.h2>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                "CCTV → Auto camera pop-up",
                "HIMS → Alerts linked with patient details",
                "Access Control → Doctor priority access",
                "Fire Alarm → Emergency override alerts",
              ].map((integration, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="p-4 bg-white border rounded-xl flex items-center gap-3 shadow-sm"
                >
                  <Zap className="w-4 h-4 text-blue-600" />
                  {integration}
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* ------------------ BENEFITS ------------------ */}
          <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50 px-4 sm:px-6 lg:px-8">
            <motion.h2 variants={fadeInUp} className={`text-3xl text-center mb-10 ${fonts.h2}`}>
              Benefits for Hospitals
            </motion.h2>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                "Faster patient response",
                "Improved patient satisfaction",
                "Doctor & nurse coordination",
                "Complete tracking & logs",
                "Better emergency handling",
                "Higher quality of healthcare",
                "Reduced patient risk",
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="p-6 bg-white border rounded-xl shadow-sm"
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
