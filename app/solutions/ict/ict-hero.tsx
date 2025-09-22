'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ictNetwork from '../../../assets/ict.png';
import ictTracking from '../../../assets/elv.png';
import ictStorage from '../../../assets/automation.jpg';

const ictSolutions = [
  {
    title: "Network Solution",
    image: ictNetwork,
    description: [
      "Technify's Network solution consists of Structured Cabling Systems (Passive), Converged Networking (Active), Data Centres Solutions and WiFi Systems.",
      "Our latest implementation was done through intelligent structured cabling; it was implemented through the real time monitoring of each and every port on both switches and patches."
    ]
  },
  {
    title: "Tracking Systems",
    image: ictTracking,
    description: [
      "Technify's Asset tracking solutions covers company's physical assets either by scanning barcode labels attached to the assets or by using tags using GPS or RFID, which broadcast their location. Our solution is unique where it provides real-time, accurate data on what a company owns, how an asset is used and its contribution."
    ]
  },
  {
    title: "Data Storage Systems",
    image: ictStorage,
    description: [
      "The most important asset is information availability and relevance of which are the key factors of success in competitive environment. This situation stimulates large-scale development of data storage technologies.",
      "Technify's state-of-the-art data storage solutions ensures reliable storage of information resources and access to them. The system includes disc arrays, access infrastructure and data storage control software systems."
    ]
  }
];

export function ICTHero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 font-[Poppins,sans-serif]">
      <section className="relative py-20 flex flex-col items-center justify-center text-gray-900 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 opacity-90"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full max-w-4xl mx-auto text-center rounded-3xl bg-gradient-to-br from-white to-gray-50 p-12 shadow-lg border border-gray-200"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6"
          >
            ICT Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-2xl bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent max-w-2xl mx-auto font-medium"
          >
            Discover our comprehensive range of cutting-edge ICT solutions designed to transform your business and drive digital innovation.
          </motion.p>
          
          {/* Added CTA button with blue-orange gradient */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10"
          >
            <a
              href="#solutions"
              className="inline-block bg-gradient-to-r from-blue-600 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-orange-600 transition-all shadow-lg hover:-translate-y-1"
            >
              Explore Solutions
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ictSolutions.map((solution, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 flex flex-col hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
              </div>
              <div className="p-6 w-full flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-orange-500 flex items-center justify-center mb-4 shadow-lg">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {solution.title}
                </h3>
                {solution.description.map((desc, i) => (
                  <p key={i} className="text-gray-600 mb-4 leading-relaxed text-center">
                    {desc}
                  </p>
                ))}
                
                {/* Added Learn More button with blue-orange gradient */}
                <button className="mt-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-700 hover:to-orange-600 transition-all shadow-md">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business with ICT Solutions?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our experts today to discuss how our ICT solutions can help you achieve your goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:-translate-y-1">
              Get a Consultation
            </button>
            <button className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition-all shadow-lg hover:-translate-y-1 border-2 border-transparent">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}