'use client';

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import AboutHeroImage from "../../assets/Implementation.jpg"; // Changed to a more professional image
import { CheckCircle, Zap, Lightbulb, GitBranch } from "lucide-react";

const TeamImage = "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80";
const OnlineCollaborationImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80";
const GlobalNetworkImage = "https://images.unsplash.com/photo-1596524460574-c594e355e48f?auto=format&fit=crop&w=600&q=80";
const InnovationImage = "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80";

// ------------------ DATA ------------------ //
const strengths = [
  {
    title: "Lightning-Fast Delivery",
    description: "We move at startup speed to deliver solutions that keep you ahead of competitors.",
    icon: Zap,
    image: OnlineCollaborationImage,
  },
  {
    title: "Cutting-Edge Innovation",
    description: "We bring tomorrow's solutions to your business today with leading-edge tech.",
    icon: Lightbulb,
    image: InnovationImage,
  },
  {
    title: "Agile Solutions",
    description: "We adapt quickly to your needs — pivoting fast for precision and results.",
    icon: GitBranch,
    image: GlobalNetworkImage,
  },
];

const services = [
  { title: "Power Solutions", description: "Reliable & scalable energy backup." },
  { title: "Video Systems", description: "Advanced surveillance and analytics." },
  { title: "Access Control", description: "Secure and manage physical access." },
  { title: "Building Systems", description: "Integrated building automation." },
  { title: "Fire Safety", description: "Comprehensive fire detection and suppression." },
  { title: "Public Address", description: "Clear communication and emergency alerts." },
];

/* ------------------ MOTION ------------------ */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ============================= PAGE START ============================= //
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(to right, #1F6FEB 1px, transparent 1px),
                              linear-gradient(to bottom, #fb8500 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* ------------------ HERO ------------------ */}
      <section className="pt-28 pb-20 px-5 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* TEXT */}
          <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
            <p className="text-sm tracking-wider font-semibold uppercase text-blue-600 mb-4">
              About Technify Solutions 
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
              We Build Future-Ready Digital Solutions
            </h1>
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              A high-speed tech startup revolutionizing ICT with lightning-fast solutions, cutting-edge innovation, and agile delivery.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg border">
              <Image src={AboutHeroImage} alt="About Technify" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ------------------ HOW WE SERVE ------------------ */}
      <section className="py-20 px-5 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How We Serve You</h2>
            <p className="text-slate-600 leading-relaxed">
              <strong>Technify Solutions</strong> is more than just a tech provider — we're your strategic partner in digital transformation. We deliver end-to-end services across IT infrastructure, cybersecurity, automation, and cloud systems.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-800 mb-6 text-center">Our Core Service Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {services.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-800">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------ WHY CHOOSE US ------------------ */}
      <section className="py-20 px-5">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Technify?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our startup DNA blended with enterprise expertise makes us uniquely positioned for innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {strengths.map((s, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all p-8 text-center flex flex-col"
            >
              <div className="flex-grow">
                <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center bg-blue-50 rounded-xl group-hover:bg-blue-100 transition">
                  <s.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ------------------ CONTACT  ------------------ */}
      <section className="py-20 px-5 bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Let’s Transform Your Vision
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8 text-lg">
            Talk to our experts and start your innovation journey today.
          </p>
          <a href="/contact" className="bg-blue-600 text-white px-10 py-3 rounded-xl font-semibold hover:scale-105 hover:bg-blue-700 transition">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}