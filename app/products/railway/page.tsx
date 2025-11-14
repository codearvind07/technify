"use client";

import { motion, Variants } from "framer-motion";
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
    description: "Advanced surveillance solutions with AI-powered monitoring and real-time alerts for enhanced railway security.",
    icon: Camera,
    link: "/products/railway/cctv",
    brochure: "/pdf/railway-cctv-brochure.pdf"
  },
  {
    id: 2,
    name: "Public Address System (PAS)",
    description: "High-quality audio communication systems for clear announcements and emergency notifications in railway stations.",
    icon: Volume2,
    link: "/products/railway/pas",
    brochure: "/pdf/railway-pas-brochure.pdf"
  },
  {
    id: 3,
    name: "Fire Alarm System",
    description: "Comprehensive fire detection and alarm systems designed for railway environments.",
    icon: Shield,
    link: "/products/railway/fire-alarm",
    brochure: "/pdf/railway-fire-alarm-brochure.pdf"
  },
  {
    id: 4,
    name: "PIDS (Passenger Information Display System)",
    description: "Real-time passenger information display systems for train schedules, platform information, and travel updates.",
    icon: Monitor,
    link: "/products/railway/pids",
    brochure: "/pdf/railway-pids-brochure.pdf"
  },
  {
    id: 5,
    name: "Vehicle / Parking Management System",
    description: "Intelligent vehicle and parking management solutions for railway station facilities.",
    icon: Car,
    link: "/products/railway/parking",
    brochure: "/pdf/railway-parking-brochure.pdf"
  },
  {
    id: 6,
    name: "IP PBX & Communication System",
    description: "Advanced IP-based communication systems for seamless railway operations.",
    icon: Phone,
    link: "/products/railway/ip-pbx",
    brochure: "/pdf/railway-ip-pbx-brochure.pdf"
  },
  {
    id: 7,
    name: "Audio-Visual (AV) Solutions",
    description: "Comprehensive audio-visual systems for passenger areas, control centers, and information kiosks.",
    icon: Tv,
    link: "/products/railway/av",
    brochure: "/pdf/railway-av-brochure.pdf"
  }
];

export default function RailwaySolutionsPage() {
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
        title="Railway Solutions - Comprehensive Technology Systems for Railways"
        description="Complete suite of railway technology solutions including CCTV, PAS, Fire Alarm, PIDS, Parking Management, IP PBX, and AV systems for enhanced safety and operations."
        path="/products/railway"
        image="/images/og-railway-solutions.jpg"
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
                    Railway Technology Solutions
                  </motion.div>
                  
                  <motion.h1 
                    variants={itemVariants}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900"
                  >
                    Comprehensive{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                      Railway Solutions
                    </span>
                  </motion.h1>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed"
                  >
                    Advanced technology systems designed specifically for railway environments to enhance safety, operations, and passenger experience.
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
                      href="/pdf/railway-solutions-brochure.pdf" 
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
                        <Railway className="w-24 h-24 mx-auto mb-6" />
                        <h3 className="text-2xl font-bold">Railway Technology Solutions</h3>
                        <p className="mt-2 opacity-90">Comprehensive Systems for Modern Railways</p>
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
                  Railway Technology Solutions
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Comprehensive technology systems designed to meet the unique requirements of railway environments.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Your Railway Operations?</h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
                  Contact our experts to discuss how our railway solutions can revolutionize your operations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/pdf/railway-solutions-brochure.pdf" 
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

// Simple Railway icon component
function Railway({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-4-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/>
    </svg>
  );
}
