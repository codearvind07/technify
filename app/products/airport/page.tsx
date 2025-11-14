"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Camera, 
  Volume2, 
  Shield, 
  Monitor, 
  Car, 
  Phone, 
  Tv,
  Download,
  ArrowRight,
  Play
} from "lucide-react";
import { SEO } from '@/components/seo/seo';

const solutions = [
  {
    id: 1,
    name: "CCTV Surveillance Systems",
    description: "Advanced surveillance solutions with AI-powered monitoring and real-time alerts for enhanced airport security.",
    icon: Camera,
    link: "/products/airport/cctv",
    brochure: "/pdf/airport-cctv-brochure.pdf"
  },
  {
    id: 2,
    name: "Public Address System (PAS)",
    description: "High-quality audio communication systems for clear announcements and emergency notifications.",
    icon: Volume2,
    link: "/products/airport/pas",
    brochure: "/pdf/airport-pas-brochure.pdf"
  },
  {
    id: 3,
    name: "Fire Alarm System",
    description: "Comprehensive fire detection and alarm systems designed for airport environments.",
    icon: Shield,
    link: "/products/airport/fire-alarm",
    brochure: "/pdf/airport-fire-alarm-brochure.pdf"
  },
  {
    id: 4,
    name: "FIDS (Flight Information Display System)",
    description: "Real-time flight information display systems for passengers and airport operations.",
    icon: Monitor,
    link: "/products/airport/fids",
    brochure: "/pdf/airport-fids-brochure.pdf"
  },
  {
    id: 5,
    name: "Vehicle / Parking Management System",
    description: "Intelligent vehicle and parking management solutions for airport facilities.",
    icon: Car,
    link: "/products/airport/parking",
    brochure: "/pdf/airport-parking-brochure.pdf"
  },
  {
    id: 6,
    name: "IP PBX & Communication System",
    description: "Advanced IP-based communication systems for seamless airport operations.",
    icon: Phone,
    link: "/products/airport/ip-pbx",
    brochure: "/pdf/airport-ip-pbx-brochure.pdf"
  },
  {
    id: 7,
    name: "Audio-Visual (AV) Solutions",
    description: "Comprehensive audio-visual systems for conference rooms, control centers, and public areas.",
    icon: Tv,
    link: "/products/airport/av",
    brochure: "/pdf/airport-av-brochure.pdf"
  }
];

export default function AirportSolutionsPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 0.2,
        ease: "easeOut"
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      },
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.1
      } 
    }
  };

  return (
    <>
      <SEO 
        title="Airport Solutions - Comprehensive Technology Systems for Airports"
        description="Complete suite of airport technology solutions including CCTV, PAS, Fire Alarm, FIDS, Parking Management, IP PBX, and AV systems for enhanced security and operations."
        path="/products/airport"
        image="/images/og-airport-solutions.jpg"
      />
      
      <div className="min-h-screen bg-white text-gray-800">
        <main>
          {/* Hero Section */}
          <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div 
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >
                  <motion.div 
                    variants={itemVariants}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6"
                  >
                    Airport Technology Solutions
                  </motion.div>
                  
                  <motion.h1 
                    variants={itemVariants}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900"
                  >
                    Comprehensive{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                      Airport Solutions
                    </span>
                  </motion.h1>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed"
                  >
                    Advanced technology systems designed specifically for airport environments to enhance security, operations, and passenger experience.
                  </motion.p>
                  
                  <motion.div 
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <a 
                      href="/contact" 
                      className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center"
                    >
                      Request Demo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                    <a 
                      href="/pdf/airport-solutions-brochure.pdf" 
                      download
                      className="bg-white text-gray-700 border border-gray-300 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-md flex items-center justify-center"
                    >
                      <Play className="mr-2 h-5 w-5" />
                      View Brochure
                    </a>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className="relative"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-full h-96 flex items-center justify-center">
                      <div className="text-white text-center p-8">
                        <Airport className="w-24 h-24 mx-auto mb-6" />
                        <h3 className="text-2xl font-bold">Airport Technology Solutions</h3>
                        <p className="mt-2 opacity-90">Comprehensive Systems for Modern Airports</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Solutions Grid */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Airport Technology Solutions
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Comprehensive technology systems designed to meet the unique requirements of airport environments.
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {solutions.map((solution) => (
                  <motion.div
                    key={solution.id}
                    variants={fadeInUp}
                    className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200"
                  >
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                      <solution.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">{solution.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{solution.description}</p>
                    <div className="flex flex-col gap-3">
                      <Link 
                        href={solution.link}
                        className="text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors flex items-center"
                      >
                        Learn More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                      {solution.brochure && (
                        <a 
                          href={solution.brochure}
                          download
                          className="text-gray-600 font-medium text-sm hover:text-gray-700 transition-colors flex items-center"
                        >
                          <Download className="mr-1 h-4 w-4" />
                          Download Brochure
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center text-white"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Your Airport Operations?</h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
                  Contact our experts to discuss how our airport solutions can revolutionize your operations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/pdf/airport-solutions-brochure.pdf" 
                    download
                    className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg flex items-center"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download Brochure
                  </a>
                  <a 
                    href="/contact" 
                    className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all"
                  >
                    Request Demo
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

// Simple Airport icon component
function Airport({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
    </svg>
  );
}