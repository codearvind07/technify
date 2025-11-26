"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Check, Cpu, PhoneCall } from "lucide-react";
import designImg from "../../assets/designImg.jpg";
import supportImg from "../../assets/DesignEngineering.jpg";
import SupportServices from "../../assets/SupportServices.jpg";

/* ------------------ FONT STYLES (COLOR REMOVED) ------------------ */
const fonts = {
  h1: "font-poppins font-semibold",
  h2: "font-poppins font-semibold",
  h3: "font-poppins font-semibold",
  body: "font-raleway",
  label: "font-open-sans",
};

/* ------------------ MOTION VARIANTS ------------------ */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

/* ------------------ REUSABLE SERVICE CARD ------------------ */
function ServiceCard({ icon: Icon, title, description, features, image }: any) {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white rounded-xl shadow-lg overflow-hidden border hover:shadow-xl transition-all duration-300"
    >
      {/* IMAGE */}
      <div className="relative h-56 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* TEXT */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-blue-50 rounded-lg">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className={`text-xl text-slate-800 ${fonts.h3}`}>{title}</h3>
        </div>

        <p className={`text-sm text-slate-700 mb-6 leading-relaxed ${fonts.body}`}>{description}</p>

        <div className="space-y-3">
          {features.map((item: string, i: number) => (
            <div key={i} className="flex items-start gap-3">
              <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
              <p className={`text-sm text-slate-700 leading-relaxed ${fonts.body}`}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------ PAGE ------------------ */
export default function DigitalServicesPage() {
  return (
    <div className="bg-white text-slate-700">
      <main>

        {/* ------------------ HERO SECTION ------------------ */}
        <section className="py-16 md:py-24 px-6 border-b bg-gray-50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* TEXT */}
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.span
                variants={fadeInUp}
                className={`text-sm font-semibold uppercase tracking-wide text-slate-700 ${fonts.label}`}
              >
                Technify Professional Services
              </motion.span>

              <motion.h1
                variants={fadeInUp}
                className={`text-4xl md:text-5xl mb-6 leading-tight text-slate-900 ${fonts.h1}`}
              >
                Transform Your   Digital Vision {" "}
               
                Into Reality
              </motion.h1>

              <motion.p variants={fadeInUp} className={`text-lg mb-4 text-slate-700 ${fonts.body}`}>
                Comprehensive online design engineering & digital support services to bring your vision to life.
              </motion.p>

              <motion.p variants={fadeInUp} className={`text-lg mb-8 text-slate-700 ${fonts.body}`}>
                Our expert teams in India & Singapore provide remote design sessions, cloud collaboration & 24/7 support.
              </motion.p>
            </motion.div>

            {/* IMAGE */}
            <motion.div variants={fadeInUp}>
              <div className="rounded-lg overflow-hidden shadow-lg border">
                <Image src={designImg} alt="Digital Services" width={700} height={500} className="object-cover" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ------------------ SERVICES SECTION ------------------ */}
        <section className="py-20 px-6 bg-white border-b">
          <div className="max-w-7xl mx-auto mb-16 text-center">
            <h2 className={`text-3xl text-slate-800 mb-4 ${fonts.h2}`}>Our Digital Services</h2>
            <p className={`${fonts.body} text-slate-700 max-w-2xl mx-auto`}>
              We offer professional digital services tailored for modern business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ServiceCard
              icon={Cpu}
              image={SupportServices}
              title="Design Engineering"
              description="Technify design engineers are experienced in all solution phases ensuring performance and compliance."
              features={[
                "Comprehensive solution design",
                "Performance optimization",
                "Regulatory compliance",
                "Client consultation",
                "Redesign of existing systems",
              ]}
            />

            <ServiceCard
              icon={PhoneCall}
              image={supportImg}
              title="Support Services"
              description="Our Pre & Post Sales team ensures complete ownership, prompt response & customer delight."
              features={[
                "24/7 remote support",
                "Screen sharing sessions",
                "Prompt response times",
                "Live chat assistance",
                "Full project ownership",
              ]}
            />
          </div>
        </section>

        {/* ------------------ CTA SECTION (FIXED WHITE TEXT) ------------------ */}
        <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
          <div className="max-w-5xl mx-auto text-center">

            {/* FIXED TEXT COLOR */}
            <h2 className={`text-4xl md:text-5xl mb-4 !text-white ${fonts.h2}`}>
              Ready to Start Your Project?
            </h2>

            <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
              Connect with our global team & bring your digital vision to life with precision & innovation.
            </p>

            <a
              href="/contact"
              className="bg-white text-slate-900 px-10 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              Get Connected
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}
