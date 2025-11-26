"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {
  Users,
  Bed,
  CreditCard,
  ShoppingCart,
  Microscope,
  Image as ImageIcon,
  Scissors,
  User,
  Box,
  Settings,
  Monitor,
  Zap,
  Shield,
  FileText,
  Check,
} from "lucide-react";
import { SEO } from "@/components/seo/seo";

/* ------------------- MOTION VARIANTS ------------------- */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

/* ------------------- CARD COMPONENTS ------------------- */
const InfoCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <motion.div
    variants={fadeInUp}
    className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
  >
    <div className="flex items-center gap-4 mb-4">
      <Icon className="w-6 h-6 text-blue-600" />
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const ListCard = ({ icon: Icon, title, items }: { icon: any; title: string; items: string[] }) => (
  <motion.div
    variants={fadeInUp}
    className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
  >
    <div className="flex items-center gap-4 mb-4">
      <Icon className="w-6 h-6 text-blue-600" />
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    </div>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2 text-gray-700">
          <Check className="w-4 h-4 mt-1 text-green-600" /> {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

export default function HospitalHIMSPage() {
  /* ------------------- ACTUAL CONTENT DATA ------------------- */
  const coreModules = [
    {
      icon: Users,
      title: "Patient Registration & EMR",
      points: [
        "Centralized patient file",
        "Appointment scheduling",
        "Digital consent forms",
        "Visit history tracking",
        "Electronic Medical Records (EMR)",
      ],
    },
    {
      icon: Bed,
      title: "OPD & IPD Management",
      points: [
        "Doctor notes & treatments",
        "Bed allotment & ward management",
        "Nursing charts",
        "Vital & medication logs",
        "Diet plan management",
      ],
    },
    {
      icon: CreditCard,
      title: "Billing & Finance",
      points: [
        "Automated billing",
        "Insurance/TPA claims processing",
        "Cashless settlement workflows",
        "Multi-department billing",
        "Financial dashboards & MIS reports",
      ],
    },
    {
      icon: ShoppingCart,
      title: "Pharmacy Management",
      points: [
        "Prescription integration",
        "Stock & inventory management",
        "Purchase orders",
        "Expiry & batch tracking",
        "Counter and IPD medicine issue",
      ],
    },
    {
      icon: Microscope,
      title: "Laboratory & Diagnostic Module",
      points: [
        "Test order management",
        "Lab sample tracking",
        "Equipment integration (LIS)",
        "Report generation & delivery",
        "Doctor dashboard for results",
      ],
    },
    {
      icon: ImageIcon,
      title: "Radiology Information System (RIS)",
      points: [
        "Digital imaging orders",
        "PACS integration (X-ray, CT, MRI)",
        "Secure doctor access",
        "Report storage & sharing",
      ],
    },
    {
      icon: Scissors,
      title: "OT & Procedure Management",
      points: [
        "OT scheduling",
        "Pre-op & post-op records",
        "Surgical team management",
        "Procedure documentation",
      ],
    },
    {
      icon: User,
      title: "HR & Staff Management",
      points: ["Duty rosters", "Attendance & payroll", "Staff performance analytics"],
    },
    {
      icon: Box,
      title: "Inventory & Asset Management",
      points: ["Consumables tracking", "Equipment logs", "Maintenance schedules", "Vendor management"],
    },
    {
      icon: Settings,
      title: "Admin & MIS Dashboard",
      points: [
        "Real-time hospital metrics",
        "Revenue analysis",
        "Department-wise performance",
        "Alerts & notifications",
      ],
    },
  ];

  const technicalHighlights = [
    "Cloud/on-prem deployment",
    "Role-based access control",
    "HIPAA & healthcare data security compliance",
    "Audit trails & activity logs",
    "API integration with third-party systems",
    "Multi-location support",
    "Mobile & tablet-enabled dashboards",
  ];

  const integrations = [
    "CCTV → Patient room monitoring",
    "Nurse Call System → Patient alerts + logs",
    "QMS → Appointment & queue sync",
    "PACS/RIS/LIS → Diagnostic system integration",
    "Parking System → Patient-validated parking",
    "Access Control → Role-based movement",
  ];

  const benefits = [
    "Centralized patient data",
    "Faster admissions & discharges",
    "Improved clinical decision-making",
    "Smooth coordination between doctors & nurses",
    "Reduced paperwork and duplication",
    "Better billing accuracy & compliance",
    "Higher patient satisfaction",
    "Full hospital automation",
  ];

  return (
    <>
      {/* ------------------- SEO ------------------- */}
      <SEO
        title="HIMS – Hospital Information Management System"
        description="hospital information management system, hims software, digital hospital solution, emr ehr system, hospital automation system, healthcare management platform"
        path="/products/hospital/hims"
      />

      <div className="min-h-screen bg-white text-gray-800">
        <main>
          {/* ------------------- HERO SECTION ------------------- */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                <motion.p variants={fadeInUp} className="text-blue-600 font-medium mb-4">
                  Digital Hospital. Unified Records. Faster Clinical Decisions.
                </motion.p>

                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
                >
                  HIMS – Hospital Information <br /> Management System
                </motion.h1>

                <motion.p variants={fadeInUp} className="text-lg text-gray-600 mt-6">
                  Technify delivers end-to-end HIMS platform designed to streamline healthcare workflows,  
                  improve patient care, and enable complete hospital digitization.
                </motion.p>
              </motion.div>

              <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                <Image
                  src="https://acropolium.com/img/articles/hospital-management-software/img02.jpg"
                  alt="HIMS System"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg border border-gray-200"
                />
              </motion.div>
            </div>
          </section>

          {/* ------------------- WHY HIMS ------------------- */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-100">
            <div className="max-w-6xl mx-auto text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900">Why HIMS Is Essential for Hospitals</h2>
              <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                A robust HIMS helps hospitals reduce paperwork, centralize records, improve workflow, and boost efficiency.
              </p>
            </div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <InfoCard icon={FileText} title="Digital Records" description="Centralize data with EMR/EHR & reduce documentation errors." />
              <InfoCard icon={Zap} title="Operational Efficiency" description="Faster billing, discharge, and coordination between departments." />
              <InfoCard icon={Shield} title="Compliance & Audit" description="Ensure healthcare compliance & audit readiness with digital systems." />
            </motion.div>
          </section>

          {/* ------------------- CORE MODULES ------------------- */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Core Modules</h2>
              <p className="text-gray-600 mt-4">
                A comprehensive, modular HIMS platform for hospitals, clinics & diagnostic centers.
              </p>
            </div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreModules.map((module, index) => (
                <ListCard key={index} icon={module.icon} title={module.title} items={module.points} />
              ))}
            </motion.div>
          </section>

          {/* ------------------- TECHNICAL HIGHLIGHTS ------------------- */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Highlights</h2>
                {technicalHighlights.map((item, index) => (
                  <InfoCard key={index} icon={Zap} title={item} description="" />
                ))}
              </motion.div>

              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible">
                <Image
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
                  alt="Technical Highlights"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg border-gray-200 border"
                />
              </motion.div>
            </div>
          </section>

          {/* ------------------- INTEGRATIONS ------------------- */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Integrations Supported</h2>
            </div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" className="max-w-4xl mx-auto space-y-4">
              {integrations.map((integration, index) => (
                <InfoCard key={index} icon={Monitor} title={integration} description="" />
              ))}
            </motion.div>
          </section>

          {/* ------------------- BENEFITS ------------------- */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp}>
                <Image
                  src="https://images.unsplash.com/photo-1691934310598-27528df21f9c"
                  width={600}
                  height={400}
                  alt="Benefits"
                  className="rounded-xl shadow-lg border-gray-200 border"
                />
              </motion.div>

              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Benefits for Hospitals
                </h2>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex gap-3 text-gray-700">
                      <Check className="text-green-600 w-5 h-5 mt-1" /> {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
