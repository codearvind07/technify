'use client';

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  Cpu,
  Zap,
  Cloud,
  Lock,
  CheckCircle,
} from "lucide-react";

import designInnovation from "../../assets/Design.jpg";
import supportMaintenance from "../../assets/Support.jpg";
import implementation from "../../assets/Implementation.jpg";
import securityCompliance from "../../assets/Security.jpg";

/* -----------------------------------------------
 ✅ DATA
------------------------------------------------ */
const services = [
  {
    title: "Design & Innovation",
    image: designInnovation,
    description:
      "Creative solutions that blend aesthetics with functionality for exceptional user experiences.",
    features: ["UI/UX Design", "System Architecture", "Digital Strategy"],
  },
  {
    title: "Support & Maintenance",
    image: supportMaintenance,
    description:
      "Comprehensive support services to ensure optimal performance and system reliability.",
    features: ["24/7 Support", "Preventive Maintenance", "System Monitoring"],
  },
  {
    title: "Implementation",
    image: implementation,
    description:
      "Expert deployment and integration for seamless technology adoption.",
    features: ["Project Management", "System Integration", "Training"],
  },
  {
    title: "Security & Compliance",
    image: securityCompliance,
    description:
      "Robust security frameworks and compliance solutions to protect your operations.",
    features: ["Security Audits", "Compliance Management", "Risk Assessment"],
  },
];

const advantages = [
  {
    title: "Technical Excellence",
    desc: "Expertise in industry-leading technologies and modern practices.",
    icon: Cpu,
    stats: "200+ Projects",
  },
  {
    title: "Tailored Solutions",
    desc: "Customized approaches designed for your unique requirements.",
    icon: Zap,
    stats: "100% Custom",
  },
  {
    title: "Proven Results",
    desc: "A history of successful implementations across industries.",
    icon: Cloud,
    stats: "98% Success Rate",
  },
  {
    title: "Long-term Partnership",
    desc: "Ongoing support & continuous improvement for growth.",
    icon: Lock,
    stats: "24/7 Support",
  },
];

/* -----------------------------------------------
 ✅ ANIMATION VARIANTS
------------------------------------------------ */
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const iconFloat: Variants = {
  animate: {
    y: [-5, 5, -5],
    transition: { duration: 4, repeat: Infinity, repeatType: "reverse" },
  },
};

/* -----------------------------------------------
 ✅ MAIN COMPONENT
------------------------------------------------ */
export default function HomeServices() {
  return (
    <section className="relative pt-6 pb-16 md:pt-8 md:pb-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">

        {/* ✅ HEADER */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Comprehensive Technology Services for Modern Businesses
          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            End-to-end solutions designed to elevate your digital infrastructure,
            strengthen security, and accelerate growth.
          </p>
        </motion.div>

        {/* ✅ SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-transparent transition-all p-6 text-center flex flex-col relative overflow-hidden"
            >
              <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                <Image
                  fill
                  src={service.image}
                  alt={service.title}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-normal mb-6 flex-grow">
                {service.description}
              </p>

              <div className="space-y-2 mt-auto">
                {service.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-700 text-sm">{f}</span>
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500 transition-all duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* ✅ WHY CHOOSE US */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Technify
          </h3>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Trust our expertise, innovation, and long-lasting commitment to
            delivering transformative technology solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((adv) => {
            const Icon = adv.icon;

            return (
              <motion.div
                key={adv.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 text-center transition-all duration-300 hover:shadow-lg"
              >
                <motion.div
                  variants={iconFloat}
                  animate="animate"
                  className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-100 to-orange-100 flex items-center justify-center"
                >
                  <Icon className="w-7 h-7 text-blue-600" />
                </motion.div>

                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {adv.title}
                </h4>

                <p className="text-gray-600 text-sm leading-normal mb-4">
                  {adv.desc}
                </p>

                <span className="inline-block px-4 py-1 bg-blue-50 text-blue-700 font-medium text-sm rounded-full">
                  {adv.stats}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
