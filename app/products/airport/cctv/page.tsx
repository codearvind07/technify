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
                  Enterprise <span className="font-poppins font-semibold">CCTV Surveillance</span> for Modern Airports
                </motion.h1>

                <motion.p variants={fadeInUp} className={`text-lg text-gray-600 mb-8 leading-relaxed ${fonts.body}`}>
                  Advanced monitoring systems designed for complex airport environments. 
                  Zero blind spots, intelligent analytics, and seamless integration for comprehensive security.
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

         

          {/* ------------------ WHY IT MATTERS ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-6xl mx-auto">
              <motion.div variants={staggerContainer} className="text-center mb-16">
                <motion.h2 variants={fadeInUp} className={`text-3xl text-gray-900 mb-4 ${fonts.h2}`}>
                  Why <span className="font-poppins font-semibold">Airport Surveillance</span> Matters
                </motion.h2>
                <motion.p variants={fadeInUp} className={`text-gray-600 max-w-2xl mx-auto ${fonts.body}`}>
                  Comprehensive security monitoring for high-traffic, sensitive airport environments
                </motion.p>
              </motion.div>

              <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Shield, text: "Continuous monitoring of all zones" },
                  { icon: Eye, text: "Real-time incident detection" },
                  { icon: Users, text: "Enhanced passenger safety" },
                  { icon: BarChart3, text: "Operational efficiency analytics" },
                  { icon: Building, text: "Regulatory compliance" },
                  { icon: Plane, text: "Flight operation security" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-all duration-300"
                  >
                    <item.icon className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    <span className={`text-gray-700 text-sm ${fonts.body}`}>{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* ------------------ CORE CAPABILITIES ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto">
              <motion.div variants={staggerContainer} className="text-center mb-16">
                <motion.h2 variants={fadeInUp} className={`text-3xl text-gray-900 mb-4 ${fonts.h2}`}>
                  Core <span className="font-poppins font-semibold">Capabilities</span>
                </motion.h2>
                <motion.p variants={fadeInUp} className={`text-gray-600 max-w-2xl mx-auto ${fonts.body}`}>
                  Advanced surveillance technologies designed for airport security requirements
                </motion.p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <CapabilityCard
                  icon={Camera}
                  title="High-Definition IP Surveillance"
                  items={[
                    "4K / 8MP IP Cameras with superior image quality",
                    "Wide Dynamic Range for challenging lighting",
                    "Advanced low-light & night vision capabilities",
                    "Thermal imaging for perimeter security",
                  ]}
                />

                <CapabilityCard
                  icon={Eye}
                  title="Intelligent Video Analytics"
                  items={[
                    "Facial Recognition for access control",
                    "Automatic Number Plate Recognition",
                    "Crowd density and behavior analytics",
                    "Left luggage and object detection",
                  ]}
                />

                <CapabilityCard
                  icon={Monitor}
                  title="Centralized Command & Control"
                  items={[
                    "Real-time monitoring dashboards",
                    "Multi-screen video wall integration",
                    "Automated alert workflows",
                    "Remote access for authorized personnel",
                  ]}
                />

                <CapabilityCard
                  icon={Settings}
                  title="Redundant Architecture"
                  items={[
                    "24/7 continuous recording",
                    "RAID storage with NVR redundancy",
                    "Backup servers and failover systems",
                    "Proactive device health monitoring",
                  ]}
                />
              </div>
            </div>
          </section>

          {/* ------------------ INTEGRATION & FEATURES ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                
                {/* Integration */}
                <motion.div variants={staggerContainer}>
                  <motion.h2 variants={fadeInUp} className={`text-2xl text-gray-900 mb-8 ${fonts.h2}`}>
                    System <span className="font-poppins font-semibold">Integration</span>
                  </motion.h2>
                  <motion.div variants={staggerContainer} className="space-y-3">
                    {[
                      "Access Control Systems",
                      "Public Address System (PAS)",
                      "Fire Alarm and Safety Systems",
                      "Building Management System",
                      "Perimeter Security Systems",
                      "Flight Information Displays",
                    ].map((item, i) => (
                      <IntegrationItem key={i} text={item} />
                    ))}
                  </motion.div>
                </motion.div>

                {/* Technical Features */}
                <motion.div variants={staggerContainer}>
                  <motion.h2 variants={fadeInUp} className={`text-2xl text-gray-900 mb-8 ${fonts.h2}`}>
                    Technical <span className="font-poppins font-semibold">Features</span>
                  </motion.h2>
                  <motion.div variants={staggerContainer} className="space-y-3">
                    {[
                      "ONVIF-compliant multi-vendor support",
                      "Fiber-optic backbone infrastructure",
                      "AI-driven storage optimization",
                      "Cybersecurity hardened firmware",
                      "SLA-backed maintenance services",
                    ].map((item, i) => (
                      <IntegrationItem key={i} text={item} />
                    ))}
                  </motion.div>
                </motion.div>

              </div>
            </div>
          </section>

          {/* ------------------ COVERAGE AREAS ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto">
              <motion.div variants={staggerContainer} className="text-center mb-16">
                <motion.h2 variants={fadeInUp} className={`text-3xl text-gray-900 mb-4 ${fonts.h2}`}>
                  Comprehensive <span className="font-poppins font-semibold">Coverage</span>
                </motion.h2>
                <motion.p variants={fadeInUp} className={`text-gray-600 max-w-2xl mx-auto ${fonts.body}`}>
                  Strategic camera placement across all critical airport zones and operations
                </motion.p>
              </motion.div>

              <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Terminal Entry & Exit Points",
                  "Check-in and Baggage Counters",
                  "Security Screening Areas",
                  "Immigration & Customs Zones",
                  "Boarding Gates and Lounges",
                  "Apron and Airside Operations",
                  "Runway and Taxiway Monitoring",
                  "Parking and Ground Transport",
                  "Cargo and Logistics Facilities",
                ].map((area, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span className={`text-gray-700 text-sm ${fonts.body}`}>{area}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

        {/* ------------------ ELEGANT BENEFITS ------------------ */}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-orange-50">
  <div className="max-w-6xl mx-auto">
    <motion.div variants={staggerContainer} className="text-center mb-16">
      <motion.h2 variants={fadeInUp} className={`text-3xl text-gray-900 mb-4 ${fonts.h2}`}>
        Operational <span className="font-semibold">Benefits</span>
      </motion.h2>
      <motion.p variants={fadeInUp} className={`text-gray-600 max-w-2xl mx-auto ${fonts.body}`}>
        Enhancing airport security, efficiency, and passenger experience
      </motion.p>
    </motion.div>

    <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        "Enhanced situational awareness and monitoring",
        "Reduced security incidents and response time",
        "Faster emergency response coordination",
        "Improved passenger experience and flow",
        "Cross-department operational coordination",
        "Comprehensive audit trails and compliance",
      ].map((item, i) => (
        <motion.div
          key={i}
          variants={fadeInUp}
          whileHover={{ y: -4 }}
          className="p-6 bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 group"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
              <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
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