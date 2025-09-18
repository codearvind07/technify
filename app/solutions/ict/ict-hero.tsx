'use client';

import { motion } from 'framer-motion';

const ictSolutions = [
  {
    title: "Network Solution",
    image: "/ict-network.jpg",
    description: [
      "Technify’s Network solution consists of Structured Cabling Systems (Passive), Converged Networking (Active), Data Centres Solutions and WiFi Systems.",
      "Our latest implementation was done through intelligent structured cabling; it was implemented through the real time monitoring of each and every port on both switches and patches."
    ]
  },
  {
    title: "Tracking Systems",
    image: "/ict-tracking.jpg",
    description: [
      "Technify’s Asset tracking solutions covers company’s physical assets either by scanning barcode labels attached to the assets or by using tags using GPS or RFID, which broadcast their location. Our solution is unique where it provides real-time, accurate data on what a company owns, how an asset is used and its contribution."
    ]
  },
  {
    title: "Data Storage Systems",
    image: "/ict-storage.jpg",
    description: [
      "The most important asset is information availability and relevance of which are the key factors of success in competitive environment. This situation stimulates large-scale development of data storage technologies.",
      "Technify’s state-of-the-art data storage solutions ensures reliable storage of information resources and access to them. The system includes disc arrays, access infrastructure and data storage control software systems."
    ]
  }
];

export function ICTHero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a2332] to-[#2e3a4e] font-[Poppins,sans-serif]">
      <section className="relative py-20 flex flex-col items-center justify-center text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 bg-gradient-to-br from-[#1a2332] to-[#2e3a4e] opacity-90"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full max-w-4xl mx-auto text-center rounded-3xl bg-gradient-to-br from-[#eaf6fb] to-[#d6eaf8] p-12 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#1a2332] mb-6"
            style={{ fontFamily: 'Poppins, Inter, sans-serif' }}
          >
            ICT Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-2xl text-[#00e6f6] max-w-2xl mx-auto font-medium"
            style={{ fontFamily: 'Poppins, Inter, sans-serif' }}
          >
            Discover our comprehensive range of cutting-edge ICT solutions designed to transform your business and drive digital innovation.
          </motion.p>
        </motion.div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          {ictSolutions.map((solution, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="bg-[#232e3c] rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] overflow-hidden border border-[#00e6f6]/20 flex flex-col items-center"
            >
              {solution.image && (
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
              )}
              <div className="p-6 w-full flex flex-col items-center">
                <h3 className="text-xl font-bold text-white mb-3 text-center font-[Poppins,sans-serif]">
                  {solution.title}
                </h3>
                {solution.description.map((desc, i) => (
                  <p key={i} className="text-[#b2eaf6] mb-4 leading-relaxed text-center font-[Poppins,sans-serif]">
                    {desc}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}