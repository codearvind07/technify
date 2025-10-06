"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { 
  Settings, 
  Cpu, 
  BarChart3, 
  Wifi, 
  Shield, 
  Zap, 
  CheckCircle,
  Lock,
  Download,
  FileText,
  ArrowRight,
  Play
} from "lucide-react";
import { SEO } from '@/components/seo/seo';
import heroImage from '@/assets/CommandControl.jpg';
import durabilityImage from '@/assets/BuildingManagementSystem.jpg';
import complianceImage from '@/assets/EnergyManagement.jpg';

export default function BerhardPage() {
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

  const qualityFeatures = [
    { icon: CheckCircle, title: "ISO Certification", desc: "Consistent product quality & adherence to regulatory norms." },
    { icon: Shield, title: "Lifespan", desc: "Built to withstand at least 10 years of normal use." },
    { icon: Settings, title: "Modular Design", desc: "Interchangeable and replaceable parts for easy maintenance." }
  ];

  const durabilityFeatures = [
    { title: "Rugged Design", desc: "Minimum lifespan of 10 years for structural stability." },
    { title: "Rodent Proof", desc: "IP22 compliant rodent-proof enclosure." },
    { title: "User Comfort", desc: "PU wrist support for enhanced user comfort." }
  ];

  const complianceFeatures = [
    { num: "1", title: "Grouting Provision", desc: "Concealed provision of grouting to the floor with anchor fasteners." },
    { num: "2", title: "Foam Gasket", desc: "All doors have foam gasket to protect equipment from dust." },
    { num: "3", title: "RoHS Certified", desc: "Enclosure certified to restrict hazardous material." }
  ];

  const technologyPartners = [
    { 
      category: "Public Address & Audio-Visual",
      partners: [{ name: "Heinrich", desc: "Professional PA & Audio-Visual Systems for Industrial Applications" }]
    },
    { 
      category: "Networking (Passive & Active)",
      partners: [
        { name: "Legrand", desc: "Passive Networking Infrastructure" },
        { name: "Cisco", desc: "Enterprise Networking Switches" },
        { name: "Watchdog", desc: "Industrial Networking Switches" },
        { name: "Fortinet", desc: "Advanced Firewall Solutions" }
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Berhard Control Kiosk - Durable High-Performance Technology Solutions"
        description="Berhard Control Kiosk designed for parking management, retail, airports, banking, and IT networking applications. Featuring rugged design, 10-year lifespan, IP22 compliance, and modular components."
        path="/products/berhard"
        image="/images/og-berhard.jpg"
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
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    Industrial Control Solution
                  </motion.div>
                  
                  <motion.h1 
                    variants={itemVariants}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900"
                  >
                    Berhard{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                      Control Kiosk
                    </span>
                  </motion.h1>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed"
                  >
                    Durable and high-performance <span className="font-semibold">Control Kiosk</span> designed for Parking Management, Retail, Airports, Banking, and IT Networking applications.
                  </motion.p>
                  
                  <motion.div 
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center">
                      Request Demo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                    <button className="bg-white text-gray-700 border border-gray-300 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-md flex items-center justify-center">
                      <Play className="mr-2 h-5 w-5" />
                      View Brochure
                    </button>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className="relative"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                    <Image 
                      src={heroImage} 
                      alt="Berhard Control Kiosk" 
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Quality Section */}
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
                  Quality and Longevity Requirements
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Engineered to the highest standards for industrial applications.
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {qualityFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200"
                  >
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Durability Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                    <Image 
                      src={durabilityImage} 
                      alt="Durability Features" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </motion.div>
                
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={containerVariants}
                >
                  <motion.h2 
                    variants={itemVariants}
                    className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
                  >
                    Durability and Protection
                  </motion.h2>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-lg text-gray-600 mb-8 leading-relaxed"
                  >
                    Built to withstand the harshest industrial environments with robust construction and protective features.
                  </motion.p>
                  
                  <motion.div 
                    variants={staggerChildren}
                    className="grid grid-cols-1 gap-4"
                  >
                    {durabilityFeatures.map((feature, index) => (
                      <motion.div 
                        key={index}
                        variants={fadeInUp}
                        className="flex items-start gap-4 p-4 rounded-lg bg-white border border-gray-200"
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                          <Shield className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                          <p className="text-sm text-gray-600">{feature.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Compliance Section */}
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
                  Additional Compliance & Design Features
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Designed with industry standards and user experience in mind.
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {complianceFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all relative"
                  >
                    <div className="absolute -top-3 left-4 w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold shadow-lg">
                      {feature.num}
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 mt-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Technology Partners Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Technology Partners & Products
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Integrated with industry-leading technology providers for comprehensive solutions.
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="space-y-12"
              >
                {technologyPartners.map((category, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants} 
                    className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        {index === 0 ? (
                          <Settings className="w-5 h-5 text-blue-600" />
                        ) : (
                          <Wifi className="w-5 h-5 text-blue-600" />
                        )}
                      </div>
                      {category.category}
                    </h3>
                    
                    <div className={`grid grid-cols-1 ${category.partners.length > 1 ? 'md:grid-cols-2' : ''} gap-6`}>
                      {category.partners.map((partner, partnerIndex) => (
                        <div 
                          key={partnerIndex}
                          className="bg-gradient-to-br from-blue-50/50 to-blue-100/50 rounded-xl p-6 border border-blue-200/50 hover:transform hover:-translate-y-1 transition-all duration-300"
                        >
                          <h4 className="font-semibold text-gray-900 mb-2">{partner.name}</h4>
                          <p className="text-sm text-gray-600">{partner.desc}</p>
                        </div>
                      ))}
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Deploy Berhard Control Kiosk?</h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
                  Experience the durability and performance of our industrial-grade control solution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg flex items-center">
                    <Download className="h-5 w-5 mr-2" />
                    Download Brochure
                  </button>
                  <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all">
                    Contact Sales
                  </button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}