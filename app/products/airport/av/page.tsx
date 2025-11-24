"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {
  Tv,
  Video,
  Speaker,
  Monitor,
  Check,
  Server,
  Zap,
} from "lucide-react";
import { SEO } from "@/components/seo/seo";
import hero from "@/assets/airport-av.jpg"; // change filename if different

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

/* ------------------ FULL CONTENT (YOUR DATA) ------------------ */
const coreCapabilities = [
  {
    icon: Monitor,
    title: "Video Walls & Large Format Displays",
    items: [
      "LED/LCD video walls",
      "Ultra-narrow bezel displays",
      "24×7 commercial-grade screens",
      "High brightness for terminal visibility",
      "Central content management",
      "Used in: control rooms, baggage halls, departure lounges, arrival areas."
    ]
  },
  {
    icon: Tv,
    title: "Digital Signage Systems",
    items: [
      "Flight and airport information boards",
      "Retail & advertisement displays",
      "Interactive kiosks",
      "Wayfinding displays",
      "Multi-zone content layouts",
      "Supports remote scheduling and live updates."
    ]
  },
  {
    icon: Server,
    title: "Control Room AV Integration",
    items: [
      "Multi-source input switching",
      "Operator consoles",
      "KVM systems",
      "Real-time dashboards",
      "Redundant processors",
      "Integrated CCTV, FIDS, PAS feeds",
      "Ensures zero delay monitoring for security teams."
    ]
  },
  {
    icon: Video,
    title: "Meeting Room & Conference AV",
    items: [
      "Video conferencing systems",
      "Interactive displays",
      "Wireless presentation devices",
      "Digital whiteboards",
      "Acoustic optimization",
      "Used for: airline meetings, operational reviews, emergency briefings."
    ]
  },
  {
    icon: Speaker,
    title: "PA-Integrated AV Systems",
    items: [
      "AV + PAS synchronization",
      "Automated audio routing",
      "Emergency override capability",
      "Ideal for terminal-wide announcements and passenger guidance."
    ]
  },
  {
    icon: Zap,
    title: "Backend AV Processing",
    items: [
      "Media servers",
      "Audio processors",
      "Video encoders & decoders",
      "HDMI/SDI/IP-based switching",
      "Redundant rack infrastructure",
      "Built to run non-stop, even in peak traffic."
    ]
  }
];

const technicalHighlights = [
  "4K/8K resolution support",
  "Central management dashboard",
  "Fiber/IP-based AV distribution",
  "Fail-safe hardware for 24×7 usage",
  "Remote device monitoring",
  "Audio DSP for crystal-clear sound",
  "Cloud-enabled content scheduling",
];

const coverageZones = [
  "Terminal arrival and departure halls",
  "Security & surveillance control rooms",
  "Boarding gates",
  "Baggage claim areas",
  "Retail zones & food courts",
  "VIP lounges",
  "Meeting rooms",
  "Outdoor roadside displays",
];

const systemIntegrations = [
  "FIDS → Flight information display sync",
  "CCTV → Control room video feeds",
  "PAS → Emergency broadcast integration",
  "BMS → Automated power & scheduling",
  "Parking & traffic systems → Digital signage for vehicle flow",
];

const operatorBenefits = [
  "Clear & dynamic passenger communication",
  "Fully integrated control rooms",
  "Higher advertising revenue via digital signage",
  "Smooth wayfinding",
  "Modern airport ambience",
  "High visibility information points",
  "24×7 reliability",
];

/* ------------------ COMPONENT ------------------ */
function CapabilityCard({ icon: Icon, title, items }: { icon: any; title: string; items: string[] }) {
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
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 items-start">
            <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
            <span className={`text-gray-600 text-sm leading-relaxed ${fonts.body}`}>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/* ------------------ MAIN PAGE ------------------ */
export default function AirportAVPage() {
  return (
    <>
      <SEO
  title="Audio-Visual (AV) Solutions for Airports | Technify"
  description="enterprise-grade airport av solutions: digital signage, video walls, control room AV, meeting conferencing, PA integration"
  path="/products/airport/av"
  image="/images/og-airport-av.jpg"
/>

      <div className="min-h-screen bg-white text-gray-800">
        <main>

{/* ------------------ HERO ------------------ */}
<section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    {/* Text */}
    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
      <motion.h1 variants={fadeInUp} className={`text-4xl md:text-5xl text-gray-900 leading-tight mb-6 ${fonts.h1}`}>
        Audio-Visual (AV) Solutions for Airports
      </motion.h1>
      <motion.p variants={fadeInUp} className={`text-lg text-gray-600 leading-relaxed mb-4 ${fonts.body}`}>
        <strong>Immersive Displays. Intelligent Control Rooms. Seamless Passenger Experience.</strong>
      </motion.p>
      <motion.p variants={fadeInUp} className={`text-lg text-gray-600 leading-relaxed ${fonts.body}`}>
        Airports rely heavily on Audio-Visual (AV) systems to deliver information, monitor operations, manage control
        centers, and enhance the overall passenger journey. Technify provides enterprise-grade AV solutions designed
        for continuous 24×7 airport operations.
      </motion.p>
    </motion.div>

    {/* Image */}
    <motion.div variants={fadeInUp}>
      <div className="rounded-lg overflow-hidden border border-gray-200 shadow-xl">
        <Image src={hero} alt="Airport AV Solutions" width={800} height={600} className="object-cover" />
      </div>
    </motion.div>
  </div>
</section>

{/* ------------------ WHY AV MATTERS ------------------ */}
<section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-gray-50">
  <motion.div variants={staggerContainer} className="max-w-6xl mx-auto text-center">
    <motion.h2 variants={fadeInUp} className={`text-3xl text-gray-900 mb-4 ${fonts.h2}`}>
      Why AV Systems Matter in Airports
    </motion.h2>
    <motion.p variants={fadeInUp} className={`text-lg text-gray-600 mb-8 max-w-3xl mx-auto ${fonts.body}`}>
      AV systems power the airport’s:
    </motion.p>
  </motion.div>

  <motion.div variants={staggerContainer} className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      "Information displays",
      "Flight operations hubs",
      "Security control rooms",
      "Wayfinding and signage",
      "Meeting & collaboration rooms",
      "Advertising and revenue generation",
    ].map((item, i) => (
      <motion.div key={i} variants={fadeInUp} className="p-5 bg-white border rounded-xl shadow-sm hover:shadow-md transition-all	duration-300">
        <div className="flex items-start gap-3">
          <Check className="text-green-600 w-5 h-5 mt-1" />
          <p className={`text-gray-700 ${fonts.body}`}>{item}</p>
        </div>
      </motion.div>
    ))}
  </motion.div>

  <motion.p variants={fadeInUp} className="text-center mt-10 text-gray-700 italic">
    In short — AV is the visual interface of the entire airport.
  </motion.p>
</section>

{/* ------------------ CORE CAPABILITIES ------------------ */}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-100">
  <motion.div variants={fadeInUp} className="text-center mb-16">
    <h2 className={`text-3xl text-gray-900 ${fonts.h2}`}>Core Capabilities</h2>
  </motion.div>

  <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
    {coreCapabilities.map((capability, i) => (
      <CapabilityCard key={i} icon={capability.icon} title={capability.title} items={capability.items} />
    ))}
  </motion.div>
</section>

{/* ------------------ TECHNICAL HIGHLIGHTS ------------------ */}
<section className="py-20 bg-white px-4 sm:px-6 lg:px-8 border-b border-gray-100">
  <motion.div variants={fadeInUp} className="text-center mb-12">
    <h2 className={`text-3xl text-gray-900 ${fonts.h2}`}>Technical Highlights</h2>
  </motion.div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
    {technicalHighlights.map((highlight, i) => (
      <motion.div key={i} variants={fadeInUp} className="p-5 bg-white border shadow-sm hover:shadow-md rounded-xl transition-all	duration-300">
        <div className="flex items-center gap-3">
          <Check className="text-blue-600 w-5 h-5" />
          <p className={`text-gray-700 ${fonts.body}`}>{highlight}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>

{/* ------------------ BENEFITS ------------------ */}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-orange-50">
  <motion.div variants={fadeInUp} className="text-center mb-16">
    <h2 className={`text-3xl text-gray-900 ${fonts.h2}`}>Benefits for Airport Operators</h2>
  </motion.div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {operatorBenefits.map((item, i) => (
      <motion.div key={i} variants={fadeInUp} whileHover={{ y: -4 }} className="p-6 bg-white border rounded-2xl shadow-sm hover:shadow-md transition-all	duration-300">
        <div className="flex items-start gap-4">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <Check className="text-white w-3 h-3" />
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
