"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {
  Car,
  Ticket,
  CreditCard,
  MapPin,
  Smartphone,
  Check,
  Eye,
  Shield,
  Zap,
  Monitor,
  HardDrive,
  Users,
  DoorOpen,
  Activity,
  Pill,
  Building,
} from "lucide-react";
import { SEO } from "@/components/seo/seo";

/* -------------- MOTION VARIANTS -------------- */
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

/* -------------- REUSABLE CARD COMPONENT -------------- */
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
      <div className="flex items-center gap-4 mb-5">
        <Icon className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-gray-700 flex gap-3">
            <Check className="w-4 h-4 text-green-600 mt-1" /> {item}
          </li>
        ))}
      </ul>
      {note && <p className="mt-4 text-gray-600 italic">{note}</p>}
    </motion.div>
  );
}

export default function HospitalParkingPage() {
  const capabilities = [
    {
      icon: Eye,
      title: "ANPR (Automatic Number Plate Recognition)",
      items: [
        "Automatically detects vehicle number plates",
        "Works in low light & bad weather",
        "Identifies staff, visitors, and ambulance vehicles",
        "Sends alerts for blacklisted vehicles",
      ],
    },
    {
      icon: Ticket,
      title: "Ticketless Entry & Exit",
      items: [
        "QR-based or mobile-based entry",
        "No human interaction required",
        "Auto-calculated parking duration & fees",
        "Faster movement for patient vehicles",
      ],
    },
    {
      icon: MapPin,
      title: "Parking Guidance System",
      items: [
        "LED indicators for empty/occupied slots",
        "Wayfinding signboards",
        "Floor-wise occupancy display",
        "Helps reduce waiting time for parking",
      ],
    },
    {
      icon: Car,
      title: "Ambulance Priority Access",
      items: [
        "Dedicated ambulance lane",
        "Auto gate opening through ANPR",
        "Real-time monitoring for emergency movement",
      ],
      note: "Critical for trauma & emergency units.",
    },
    {
      icon: CreditCard,
      title: "Staff & Doctor Parking Management",
      items: [
        "RFID-based staff parking",
        "Fixed/reserved parking slots",
        "Entry logs for compliance",
        "Time-based access rules",
      ],
    },
    {
      icon: Monitor,
      title: "Central Parking Management Dashboard",
      items: [
        "Live monitoring of parking areas",
        "Occupancy reports",
        "Vehicle movement logs",
        "Overstay alerts",
        "Revenue tracking (for paid parking)",
      ],
    },
  ];

  const technicalHighlights = [
    "AI-powered ANPR engine",
    "Industrial-grade cameras & sensors",
    "Fiber/Gigabit network distribution",
    "Redundant server backup",
    "24×7 device health monitoring",
    "Emergency override support",
    "Integration-ready with CCTV & HIMS",
  ];

  const deploymentAreas = [
    "Main hospital entry & exit",
    "Emergency/Trauma entrance",
    "Staff and doctor parking",
    "Visitor parking areas",
    "Pharmacy/outpatient block parking",
    "Basement & multilevel parking",
  ];

  const integrations = [
    "CCTV → Live stream for every parking event",
    "HIMS → Patient-linked parking validation",
    "PAS → Parking announcements",
    "Access Control → Staff gate control",
    "Digital Display Boards → Real-time occupancy info",
  ];

  const benefits = [
    "Smooth vehicle flow",
    "Quick access for ambulances",
    "Controlled visitor parking",
    "Reduced congestion at peak hours",
    "Higher security & tracking",
    "Increased parking revenue accuracy",
    "Better patient and visitor experience",
  ];

  return (
    <>
      {/* ------------------ SEO ------------------ */}
      <SEO
        title="Parking Management System for Hospitals"
        description="hospital parking management system, ANPR hospital parking, smart parking healthcare, automated hospital parking, hospital vehicle tracking, patient parking system"
        path="/products/hospital/parking"
      />

      <div className="min-h-screen bg-white text-gray-800">
        <main>
          {/* ------------------ HERO SECTION ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={staggerContainer}>
                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight"
                >
                  Parking Management System for Hospitals
                </motion.h1>

                <motion.p variants={fadeInUp} className="text-lg text-gray-600 mb-6">
                  <strong>Organized Traffic. Zero Congestion. Hassle-Free Patient Access.</strong> <br />
                  Hospitals experience continuous vehicle movement — ambulances, patient vehicles, visitors, doctors, staff, and emergency services.  
                  <br />
                  <span className="font-semibold">
                    Technify delivers AI-driven, ANPR-based Parking Management Systems purpose-built for hospitals, ensuring secure & efficient vehicle operations 24×7.
                  </span>
                </motion.p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Image
                  src="https://plus.unsplash.com/premium_photo-1743759708746-fe50e7f9adce?w=600&auto=format&fit=crop&q=60"
                  alt="Hospital Parking System"
                  width={700}
                  height={500}
                  className="rounded-2xl shadow-xl border object-cover"
                />
              </motion.div>
            </div>
          </section>

          {/* ------------------ WHY CRITICAL ------------------ */}
          <section className="py-20 bg-gray-50 px-4">
            <motion.h2 variants={fadeInUp} className="text-3xl text-center font-semibold mb-10">
              Why Smart Parking Is Critical for Hospitals
            </motion.h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Ensures quick access for emergency vehicles",
                "Reduces chaos at entry/exit gates",
                "Speeds up patient drop-off & pick-up",
                "Prevents unauthorized parking",
                "Improves parking revenue accuracy",
                "Keeps staff & visitor parking organized",
                "Enhances overall hospital efficiency",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="p-4 bg-white border rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <Check className="w-4 h-4 text-green-600 mb-2" /> {item}
                </motion.div>
              ))}
            </div>
          </section>

          {/* ------------------ CAPABILITIES ------------------ */}
          <section className="py-20 px-4 bg-white">
            <motion.h2 variants={fadeInUp} className="text-3xl text-center font-semibold mb-12">
              Core Capabilities
            </motion.h2>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilities.map((cap, i) => (
                <CapabilityCard key={i} icon={cap.icon} title={cap.title} items={cap.items} note={cap.note} />
              ))}
            </div>
          </section>

          {/* ------------------ TECHNOLOGY ------------------ */}
          <section className="py-20 px-4 bg-gray-50">
            <motion.h2 variants={fadeInUp} className="text-3xl text-center font-semibold mb-10">
              Technical Highlights
            </motion.h2>

            <div className="max-w-4xl mx-auto grid grid-cols-1 gap-4">
              {technicalHighlights.map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="p-4 bg-white border rounded-lg flex gap-4">
                  <Zap className="w-5 h-5 text-blue-600 mt-1" /> {item}
                </motion.div>
              ))}
            </div>
          </section>

          {/* ------------------ DEPLOYMENT ------------------ */}
          <section className="py-20 px-4">
            <motion.h2 variants={fadeInUp} className="text-3xl text-center font-semibold mb-10">
              Where the System Is Installed
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              {deploymentAreas.map((area, i) => (
                <motion.div key={i} variants={fadeInUp} className="p-4 bg-white border rounded-lg">
                  {area}
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* ------------------ BENEFITS ------------------ */}
          <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-green-50">
            <motion.h2 variants={fadeInUp} className="text-3xl text-center font-semibold mb-10">
              Benefits for Hospitals
            </motion.h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="p-6 bg-white border rounded-xl shadow-sm">
                  <Check className="w-4 h-4 text-green-600 mb-2" /> {item}
                </motion.div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
