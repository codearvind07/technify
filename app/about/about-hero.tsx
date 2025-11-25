"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import AboutHeroImage from "../../assets/abouthero.jpg";

const TeamImage = "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80";
const OnlineCollaborationImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80";
const GlobalNetworkImage = "https://images.unsplash.com/photo-1596524460574-c594e355e48f?auto=format&fit=crop&w=600&q=80";
const InnovationImage = "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80";

// ------------------ DATA ------------------ //
const strengths = [
  {
    title: "Lightning-Fast Delivery",
    description: "We move at startup speed to deliver solutions that keep you ahead of competitors.",
    icon: "⚡",
    image: OnlineCollaborationImage,
  },
  {
    title: "Cutting-Edge Innovation",
    description: "We bring tomorrow's solutions to your business today with leading-edge tech.",
    icon: "🚀",
    image: InnovationImage,
  },
  {
    title: "Agile Solutions",
    description: "We adapt quickly to your needs — pivoting fast for precision and results.",
    icon: "🔄",
    image: GlobalNetworkImage,
  },
];

const services = [
  "Knowledge of Professional Asset Groups",
  "Personal Client System",
  "Key Audit System",
  "Customer & Supervisor",
  "Power Solutions",
  "Integrated Auditor",
  "Governance System",
  "Public Address & Compliance System",
];

/* ------------------ MOTION ------------------ */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// ============================= PAGE START ============================= //
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">

      {/* ------------------ HERO ------------------ */}
      <section className="pt-28 pb-20 px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
            <p className="text-sm tracking-wider font-semibold uppercase text-blue-600 mb-4">
              About Technify Solutions 
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              We Build Future-Ready <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"></span> Digital Solutions
            </h1>
            <p className="text-lg text-slate-600 max-w-lg">
              A high-speed tech startup revolutionizing ICT with lightning-fast solutions, cutting-edge innovation, and agile delivery.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
            <div className="rounded-2xl overflow-hidden shadow-lg border">
              <Image src={AboutHeroImage} alt="About Technify" className="object-cover" />
            </div>
          </motion.div>
        </div>
      </section>


      {/* ------------------ HOW WE SERVE ------------------ */}
      <section className="py-20 px-5 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">How We Serve You</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p><strong>Technify Solutions</strong> is more than just a tech provider — we're your strategic partner in digital transformation.</p>
            <p>We deliver end-to-end services across IT infrastructure, cybersecurity, automation, and cloud systems.</p>
            <p>From startups to enterprises, organizations trust us to architect scalable technology ecosystems.</p>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {strengths.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              className="p-8 bg-white rounded-2xl shadow-lg border hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-slate-600 text-sm">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* ------------------ CONTACT  ------------------ */}
      <section className="py-20 px-5 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-5xl mx-auto text-center backdrop-blur-md bg-white/10 p-12 rounded-2xl border border-white/20 shadow-lg">
          <h2 className="text-4xl font-bold mb-6">Let’s Transform Your Vision</h2>
          <p className="text-blue-100 mb-6">Talk to our experts and start your innovation journey today.</p>
          <a href="/contact" className="bg-white text-slate-900 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition">
            Contact Us
          </a>
        </div>
      </section>

    </div>
  );
}
