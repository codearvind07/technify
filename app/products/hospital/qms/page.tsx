"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {
  Users,
  Timer,
  Monitor,
  Smartphone,
  Database,
  Ticket,
  Layout,
  Volume2,
  Check,
  Zap,
  FlaskConical,
  Scan,
  Pill,
  CreditCard,
  User,
  Car,
} from "lucide-react";
import { SEO } from "@/components/seo/seo";

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

export default function HospitalQMSPage() {
  const capabilities = [
    {
      icon: Ticket,
      title: "Token Generation System",
      items: [
        "Touchscreen kiosks",
        "Counter-selection options (OPD/Billing/Pharmacy)",
        "Appointment or walk-in support",
        "QR code token generation (optional)",
      ],
    },
    {
      icon: Monitor,
      title: "Digital Display Boards",
      items: [
        "Token display for each counter",
        "Central waiting area screen",
        "Priority-based display",
        "Multilingual support & audio announcements",
      ],
    },
    {
      icon: Database,
      title: "Queue Management Software",
      items: [
        "Real-time dashboard",
        "Counter assignment",
        "Token prioritization (Emergency/Normal)",
        "Estimated wait time & analytics",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile & SMS Integration",
      items: [
        "Turn alerts via SMS",
        "Live queue tracking",
        "Crowdless waiting areas",
      ],
    },
    {
      icon: Layout,
      title: "Multi-Counter & Department",
      items: [
        "OPD",
        "Billing",
        "Pharmacy",
        "Diagnostic labs & radiology",
        "Reception counters",
      ],
      note: "Ideal for all hospital departments.",
    },
    {
      icon: Volume2,
      title: "Audio Announcement Engine",
      items: [
        "Auto call for next token",
        "Counter mapping",
        "Multi-language support",
        "Volume management",
      ],
    },
  ];

  const technicalHighlights = [
    "Web-based backend console",
    "API integration with HIMS",
    "Real-time analytics & reports",
    "Touch-safe compliant hardware",
    "Cloud or on-prem deployment",
    "UPS-supported kiosks",
  ];

  const deploymentAreas = [
    "OPD waiting areas",
    "Billing counters",
    "Pathology & sample collection",
    "Radiology imaging units",
    "Pharmacy counters",
    "Registration & reception desks",
  ];

  const integrations = [
    "HIMS → Appointment syncing",
    "PAS → Audio announcements",
    "Digital Signage → Token display boards",
    "Access Control → Priority queues",
    "Parking System → Token-based parking",
  ];

  const benefits = [
    "Smooth patient flow",
    "Reduced waiting time",
    "No overcrowded counters",
    "Improved patient satisfaction",
    "Higher staff productivity",
    "Transparent queue management",
    "Analytics-driven operations",
  ];

  return (
    <>
      {/* ------------------ SEO ------------------ */}
      <SEO
        title="Queue Management System (QMS) for Hospitals"
        description="hospital queue management system, opd qms, patient token system, hospital ticketing system, healthcare queue software, hospital waiting management"
        path="/products/hospital/qms"
      />

      <div className="min-h-screen bg-white text-gray-800">
        <main>
          {/* ------------------ HERO ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                <motion.h1
                  variants={fadeInUp}
                  className={`text-4xl md:text-5xl text-gray-900 mb-6 leading-tight ${fonts.h1}`}
                >
                  Queue Management System <br /> for Hospitals
                </motion.h1>
                <motion.p variants={fadeInUp} className={`text-lg text-gray-600 ${fonts.body}`}>
                  <strong>Streamlined Patient Flow. Reduced Waiting Time. Better Hospital Experience.</strong>
                  <br /><br />
                  A modern Queue Management System (QMS) helps hospitals organize patient flow,
                  reduce waiting time, and ensure a smooth experience.
                  Technify provides advanced, integrated QMS solutions tailored for multi-department, multi-counter hospital environments.
                </motion.p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Image
                  src="https://cdn.prod.website-files.com/64abb91e69c1429ab62638be/64b75b6bce357c104562d4c1_Blog-4---Queue-management.svg"
                  alt="Hospital QMS"
                  width={600}
                  height={450}
                  className="rounded-2xl shadow-xl border border-gray-200 object-cover"
                />
              </motion.div>
            </div>
          </section>

          {/* ------------------ WHY QMS ------------------ */}
          <section className="py-20 bg-gray-50 px-4 border-b">
            <div className="max-w-6xl mx-auto">
              <motion.h2 variants={fadeInUp} className={`text-3xl text-center mb-10 ${fonts.h2}`}>
                Why QMS Is Important
              </motion.h2>

              <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Reduce patient crowding",
                  "Efficient queue handling",
                  "Improved patient satisfaction",
                  "Faster OPD experience",
                  "Increase staff productivity",
                  "Support social distancing",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="p-4 bg-white border rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <Check className="w-4 h-4 text-green-600 mb-2" />
                    <span className={fonts.body}>{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* ------------------ CORE CAPABILITIES ------------------ */}
          <section className="py-20 px-4 bg-white border-b">
            <div className="max-w-7xl mx-auto">
              <motion.h2 variants={fadeInUp} className={`text-3xl text-center mb-12 ${fonts.h2}`}>
                Core Capabilities
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {capabilities.map((cap, i) => (
                  <CapabilityCard key={i} icon={cap.icon} title={cap.title} items={cap.items} note={cap.note} />
                ))}
              </div>
            </div>
          </section>

          {/* ------------------ DEPLOYMENT ------------------ */}
          <section className="py-20 px-4 bg-gray-50 border-b">
            <motion.h2 variants={fadeInUp} className={`text-3xl text-center mb-10 ${fonts.h2}`}>
              Where QMS Is Used
            </motion.h2>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {deploymentAreas.map((area, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="p-4 bg-white border rounded-lg hover:border-blue-300 transition-all"
                >
                  {area}
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* ------------------ INTEGRATIONS ------------------ */}
          <section className="py-20 px-4 bg-white border-b">
            <motion.h2 variants={fadeInUp} className={`text-3xl text-center mb-10 ${fonts.h2}`}>
              System Integrations
            </motion.h2>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {integrations.map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border">
                  <Zap className="w-5 h-5 text-blue-600" /> {item}
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* ------------------ BENEFITS ------------------ */}
          <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-green-50">
            <motion.h2 variants={fadeInUp} className={`text-3xl text-center mb-10 ${fonts.h2}`}>
              Benefits for Hospitals
            </motion.h2>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, i) => (
                <motion.div key={i} variants={fadeInUp} className="p-6 bg-white border rounded-xl shadow-sm">
                  <Check className="w-4 h-4 text-green-600 mb-2" /> {benefit}
                </motion.div>
              ))}
            </motion.div>
          </section>
        </main>
      </div>
    </>
  );
}
