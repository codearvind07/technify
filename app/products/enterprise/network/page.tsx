"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {
  Wifi,
  Server,
  Cloud,
  Shield,
  Zap,
  ArrowRight,
  Cable,
  Router,
  Check,  
  Network,
  Settings,
  Building,
} from "lucide-react";
import { SEO } from "@/components/seo/seo";
import hero from "@/assets/network-hero.jpg";

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

/* ------------------ REUSABLE ------------------ */
function SolutionCard({ icon: Icon, title, items }: any) {
  return (
    <motion.div
      variants={scaleIn}
      className="group p-8 bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-lg border border-gray-300 group-hover:border-blue-400 transition-colors duration-300">
          <Icon className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
        </div>
        <h3 className={`text-xl text-gray-900 ${fonts.h3}`}>{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item: string, i: number) => (
          <li key={i} className="flex gap-3 items-start">
            <Check className="w-4 h-4 text-green-600 mt-0.5" />
            <span className={`text-gray-600 text-sm leading-relaxed ${fonts.body}`}>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function FeatureItem({ icon: Icon, text }: any) {
  return (
    <motion.div
      variants={fadeInUp}
      className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg hover:border-blue-300 transition-all duration-300"
    >
      <Icon className="w-4 h-4 text-blue-600" />
      <span className={`text-gray-700 text-sm font-medium ${fonts.body}`}>{text}</span>
    </motion.div>
  );
}

/* ------------------ MAIN PAGE ------------------ */
export default function EnterpriseNetworkPage() {
  return (
    <>
      <SEO
        title="Enterprise Network Solutions | Active & Passive Infrastructure"
        description="Discover our end-to-end enterprise network solutions, including structured cabling, Wi-Fi, data center networking, and robust security for corporate infrastructure."
        path="/products/enterprise/network"
        image={hero.src}
      />

      <div className="min-h-screen bg-white text-gray-800">
        <main>

          {/* ------------------ HERO (SAME LAYOUT AS AIRPORT CCTV) ------------------ */}
          <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* TEXT */}
              <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className={`text-sm font-semibold text-gray-500 uppercase tracking-wide ${fonts.other}`}>
                    Enterprise Network Infrastructure
                  </span>
                </motion.div>

                <motion.h1 variants={fadeInUp} className={`text-4xl md:text-5xl text-gray-900 mb-6 leading-tight ${fonts.h1}`}>
                  Active & Passive Network Solutions
                </motion.h1>

                <motion.p variants={fadeInUp} className={`text-lg text-gray-600 mb-4 leading-relaxed ${fonts.body}`}>
                  <strong>High-Speed Connectivity. Reliable Infrastructure. Zero Downtime for Modern Enterprises.</strong>
                </motion.p>

                <motion.p variants={fadeInUp} className={`text-lg text-gray-600 mb-8 leading-relaxed ${fonts.body}`}>
                  Every enterprise runs on a strong network backbone. Technify delivers end-to-end Active & Passive Network
                  Solutions that power offices, campuses, and data centers with seamless connectivity.
                </motion.p>

                {/* Feature Badges (Matching Airport Style) */}
                <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-3 max-w-md">
                  <FeatureItem icon={Wifi} text="Secure Wi-Fi 6 & 6E" />
                  <FeatureItem icon={Router} text="Enterprise Routers" />
                  <FeatureItem icon={Cable} text="Structured Cabling" />
                  <FeatureItem icon={Shield} text="Firewall Security" />
                </motion.div>
              </motion.div>

              {/* IMAGE */}
              <motion.div variants={fadeInUp} className="relative">
                <div className="relative rounded-lg overflow-hidden border border-gray-200">
                  <Image src={hero} alt="Network Solutions" width={800} height={600} className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ------------------ WHY NETWORK MATTERS SECTION ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center">
              <motion.h2 variants={fadeInUp} className={`text-3xl text-gray-900 mb-4 ${fonts.h2}`}>
                Why Strong Network Infrastructure Matters
              </motion.h2>
              <motion.p variants={fadeInUp} className={`text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed ${fonts.body}`}>
                A reliable network ensures high-speed communication, stable access to business applications, secure data transfer,
                and real-time monitoring for CCTV and BMS systems. A strong network equals a high-performance enterprise.
              </motion.p>
            </div>
            <div className="max-w-4xl mx-auto mt-12 text-center">
              <motion.p variants={fadeInUp} className={`text-lg text-gray-800 font-semibold max-w-3xl mx-auto ${fonts.body}`}>
                What Technify Delivers: A complete network infrastructure — from structured cabling to advanced core switching and wireless networks.
              </motion.p>
            </div>
          </section>

          {/* ------------------ PASSIVE SOLUTIONS ------------------ */}
          <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <motion.h2 variants={fadeInUp} className={`text-center text-3xl text-gray-900 mb-16 ${fonts.h2}`}>
              Passive Network Solutions
            </motion.h2>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {[
                {
                  icon: Cable,
                  title: "Structured Cabling Systems",
                  items: ["Cat6 / Cat6A / Cat7 cabling", "Fiber optic cabling", "FTTx deployment", "Internal/external OFC links", "Patch panels & intelligent cabling"],
                },
                {
                  icon: Server,
                  title: "Data Center Cabling",
                  items: ["Server rack cabling", "Fiber backbone", "Redundant pathways", "High-density cabling solutions"],
                },
                {
                  icon: Building,
                  title: "Rack & Cabinet Solutions",
                  items: ["Wall-mount & floor-standing racks", "Cable management", "Cooling-friendly ventilation", "Power rail integration"],
                },
                {
                  icon: Settings,
                  title: "Cable Testing & Certification",
                  items: ["Fluke testing", "OTDR testing for fiber", "Compliance reports"],
                },
              ].map((sol, i) => (
                <SolutionCard key={i} icon={sol.icon} title={sol.title} items={sol.items} note={undefined} />
              ))}
            </motion.div>
          </section>

          {/* ------------------ ACTIVE SOLUTIONS ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
            <motion.h2 variants={fadeInUp} className={`text-center text-3xl text-gray-900 mb-16 ${fonts.h2}`}>
              Active Network Solutions
            </motion.h2>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {[
                {
                  icon: Router,
                  title: "Core, Distribution & Access Switching",
                  items: ["Layer 2 & Layer 3 switches", "Managed PoE switches for CCTV & Wi-Fi", "High-throughput backbone", "Redundant switching topology"],
                },
                {
                  icon: Network,
                  title: "Enterprise Routers",
                  items: ["Secure routing & WAN/LAN connectivity", "Multi-SIM/ISP failover", "MPLS/SD-WAN compatibility"],
                },
                {
                  icon: Wifi,
                  title: "Enterprise Wi-Fi Solutions",
                  items: ["High-density access points", "Seamless roaming & Wi-Fi 6/6E", "Guest network with captive portal", "Heatmap-based RF planning"],
                },
                {
                  icon: Shield,
                  title: "Network Security",
                  items: ["Firewalls & Intrusion Prevention (IPS)", "VPN solutions", "Zero Trust & NAC (optional)", "Content filtering & threat protection"],
                },
              ].map((sol, i) => (
                <SolutionCard key={i} icon={sol.icon} title={sol.title} items={sol.items} note={undefined} />
              ))}
            </motion.div>
          </section>

          {/* ------------------ TECHNICAL HIGHLIGHTS ------------------ */}
          <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <motion.h2 variants={fadeInUp} className={`text-center text-3xl text-gray-900 mb-16 ${fonts.h2}`}>
              Technical Architecture Highlights
            </motion.h2>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {[
                "Gigabit & 10G fiber backbone",
                "Redundant ring topology",
                "VLAN-based segmentation",
                "QoS for VoIP & video traffic",
                "SNMP network monitoring",
                "Secure authentication (802.1x)",
                "Network uptime optimization (SLA-backed)",
              ].map((item, i) => (
                <FeatureItem key={i} icon={Check} text={item} />
              ))}
            </motion.div>
          </section>

          {/* ------------------ DEPLOYMENT AREAS & INTEGRATIONS ------------------ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* DEPLOYMENT */}
              <div>
                <motion.h2 variants={fadeInUp} className={`text-3xl text-gray-900 mb-8 ${fonts.h2}`}>
                  Where We Deploy
                </motion.h2>
                <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Corporate offices", "IT parks & campuses", "Retail chains", "Data centers",
                    "Manufacturing plants", "Warehouses", "Banking & finance", "Educational institutions"
                  ].map((item, i) => (
                    <FeatureItem key={i} icon={Building} text={item} />
                  ))}
                </motion.div>
              </div>
              {/* INTEGRATIONS */}
              <div>
                <motion.h2 variants={fadeInUp} className={`text-3xl text-gray-900 mb-8 ${fonts.h2}`}>
                  System Integrations
                </motion.h2>
                <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "CCTV Surveillance", "Building Management (BMS)", "Fire Alarm System", "Access Control",
                    "Wi-Fi Systems", "Data Center Infrastructure", "Cloud Applications"
                  ].map((item, i) => (
                    <FeatureItem key={i} icon={Check} text={item} />
                  ))}
                </motion.div>
              </div>
            </div>
          </section>

          {/* ------------------ BENEFITS ------------------ */}
          <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
            <motion.h2 variants={fadeInUp} className={`text-center text-3xl text-gray-900 mb-16 ${fonts.h2}`}>
              Benefits for Your Enterprise
            </motion.h2>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: "High-speed and stable connectivity" },
                { title: "Zero network downtime" },
                { title: "Secure and encrypted communication" },
                { title: "Seamless Wi-Fi for employees & guests" },
                { title: "Future-ready fiber backbone" },
                { title: "Centralized network monitoring" },
              ].map((benefit, i) => (
                <motion.div key={i} variants={fadeInUp} className="p-6 bg-white rounded-xl border hover:shadow-md transition flex items-center gap-4">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <p className={`${fonts.body} font-medium text-gray-800`}>{benefit.title}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          

        </main>
      </div>
    </>
  );
}
