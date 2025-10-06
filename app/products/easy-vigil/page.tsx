"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { 
  Camera, 
  Shield, 
  Eye, 
  Lock,
  Search,
  Palette,
  Users,
  Download,
  FileText,
  Monitor,
  Cpu,
  Wifi,
  Cloud,
  CheckCircle,
  ArrowRight,
  Play
} from "lucide-react";
import { SEO } from '@/components/seo/seo';
import heroImage from '@/assets/CommandControl.jpg';
import analyticsImage from '@/assets/BuildingManagementSystem.jpg';
import platformImage from '@/assets/EnergyManagement.jpg';

export default function EasyVigilPage() {
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

  const featureCards = [
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: "Unified Control Center",
      description: "Streamline complex operations by better coordinating your systems, teams and devices, even across distributed facilities."
    },
    {
      icon: <Eye className="w-6 h-6 text-blue-600" />,
      title: "Intuitive Interface",
      description: "Access critical information quickly with an intuitive user interface and incident workflows based on standard operating procedures."
    },
    {
      icon: <Monitor className="w-6 h-6 text-blue-600" />,
      title: "Real-time Monitoring",
      description: "Monitor your entire infrastructure in real-time with comprehensive dashboards and alerts."
    },
    {
      icon: <Cpu className="w-6 h-6 text-blue-600" />,
      title: "AI-Powered Analytics",
      description: "Leverage artificial intelligence to predict and prevent issues before they impact operations."
    }
  ];

  const analyticsFeatures = [
    { icon: <Lock className="h-5 w-5 text-blue-600" />, title: "Intrusion Detection", description: "Automatically detect unauthorized access to restricted areas" },
    { icon: <Camera className="h-5 w-5 text-blue-600" />, title: "Camera Tampering", description: "Immediately detect when cameras are obstructed or tampered with" },
    { icon: <Eye className="h-5 w-5 text-blue-600" />, title: "Object Detection", description: "Identify and classify objects, people, and vehicles in real-time" },
    { icon: <Palette className="h-5 w-5 text-blue-600" />, title: "Color Search", description: "Quickly search for objects based on color characteristics" },
    { icon: <Search className="h-5 w-5 text-blue-600" />, title: "Combination Search", description: "Advanced search combining multiple attributes and criteria" },
    { icon: <Users className="h-5 w-5 text-blue-600" />, title: "False Person Detection", description: "Distinguish between real people and representations" }
  ];

  const expertiseAreas = [
    { 
      category: "Building Automation & Control", 
      items: ["Flexive comfort", "The PA, CCTV & Marine Control", "Mission critical systems"],
      icon: <Cpu className="w-5 h-5" />
    },
    { 
      category: "Easy Management", 
      items: ["Customized reporting", "Automation", "Automated Demand Response"],
      icon: <Cloud className="w-5 h-5" />
    },
    { 
      category: "System Integration", 
      items: ["Multi-vendor/legacy support", "Web-based IoT solutions", "Wireless & Open Protocols"],
      icon: <Wifi className="w-5 h-5" />
    },
    { 
      category: "Support Services", 
      items: ["24/7 Monitoring & Response", "Alarm Management", "Prevention Maintenance"],
      icon: <Shield className="w-5 h-5" />
    },
    { 
      category: "Energy & Systems Analytic", 
      items: ["Risk Detection & Diagnosis", "Operating dashboards & reporting", "Predictive Maintenance"],
      icon: <Monitor className="w-5 h-5" />
    }
  ];

  const partners = [
    { name: "Honeywell", description: "Fire Alarm & CCTV Systems" },
    { name: "IDIS", description: "Professional CCTV Solutions" },
    { name: "Edwards by UTC", description: "Fire Alarm Systems" },
    { name: "Timewatch", description: "Access Control & Gate Automation" },
    { name: "OptiExacta", description: "Facial Recognition Solutions" },
    { name: "I2V", description: "Advanced VMS & Analytics Solutions" }
  ];

  const stats = [
    { number: "99.9%", label: "System Uptime" },
    { number: "24/7", label: "Monitoring" },
    { number: "50+", label: "Integrations" },
    { number: "1000+", label: "Active Deployments" }
  ];

  return (
    <>
      <SEO 
        title="EasyVigil - AI-Powered Video Analytics & Surveillance Platform"
        description="EasyVigil unified platform for video analytics, surveillance, and building automation. Features AI-powered intrusion detection, camera tampering detection, object recognition, and comprehensive security management."
        path="/products/easy-vigil"
        image="/images/og-easyvigil.jpg"
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
                    AI-Powered Security Platform
                  </motion.div>
                  
                  <motion.h1 
                    variants={itemVariants}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900"
                  >
                    Intelligent Video{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                      Analytics
                    </span>{" "}
                    Platform
                  </motion.h1>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed"
                  >
                    Transform your security infrastructure with AI-powered video analytics. 
                    Detect threats in real-time, automate monitoring, and enhance operational efficiency.
                  </motion.p>
                  
                  <motion.div 
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center">
                      Start Free Trial
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                    <button className="bg-white text-gray-700 border border-gray-300 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-md flex items-center justify-center">
                      <Play className="mr-2 h-5 w-5" />
                      Watch Demo
                    </button>
                  </motion.div>

                  {/* Stats */}
                  <motion.div 
                    variants={itemVariants}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
                  >
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    ))}
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
                      alt="EasyVigil Platform Dashboard" 
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Enterprise-Grade Security Features
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Comprehensive security solutions designed for modern enterprises with distributed infrastructure.
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {featureCards.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200"
                  >
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Video Analytics Section */}
          <section id="analytics" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
                      src={analyticsImage} 
                      alt="Video Analytics Dashboard" 
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
                    Advanced AI Video Analytics
                  </motion.h2>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-lg text-gray-600 mb-8 leading-relaxed"
                  >
                    Leverage cutting-edge artificial intelligence to automatically detect, classify, 
                    and respond to security events in real-time across your entire surveillance network.
                  </motion.p>
                  
                  <motion.div 
                    variants={staggerChildren}
                    className="grid grid-cols-1 gap-4"
                  >
                    {analyticsFeatures.map((feature, index) => (
                      <motion.div 
                        key={index}
                        variants={fadeInUp}
                        className="flex items-center gap-4 p-4 rounded-lg bg-white border border-gray-200"
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Platform Section */}
          <section id="platform" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Unified Security Platform
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  An open, extensible platform that integrates with your existing infrastructure and scales with your business.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                    <Image 
                      src={platformImage} 
                      alt="Platform Interface" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </motion.div>
                
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={containerVariants}
                  className="space-y-6"
                >
                  <motion.div 
                    variants={itemVariants}
                    className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
                  >
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Platform Capabilities</h3>
                    <p className="text-gray-600 mb-6">
                      EasyVigil supports industry-standard protocols and web services interfaces, 
                      linking to a suite of applications designed for enterprise operations from anywhere.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <button className="bg-blue-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center">
                        <Download className="h-4 w-4 mr-2" />
                        Download Brochure
                      </button>
                      <button className="bg-white border border-gray-300 text-gray-700 px-5 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center">
                        <FileText className="h-4 w-4 mr-2" />
                        Technical Specs
                      </button>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    variants={itemVariants}
                    className="bg-blue-50 rounded-xl p-6 border border-blue-200"
                  >
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Key Benefits</h3>
                    <div className="space-y-3">
                      {[
                        "Reduced false alarms by 90%",
                        "24/7 automated monitoring",
                        "Seamless third-party integrations",
                        "Scalable from single site to enterprise"
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Expertise Section */}
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
                  Comprehensive Expertise
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  End-to-end solutions across security, automation, and system integration domains.
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {expertiseAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                      {area.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">{area.category}</h3>
                    <ul className="space-y-2">
                      {area.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Technology Partners Section */}
          <section id="partners" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Technology Partners
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Integrated with industry-leading technology providers for comprehensive solutions.
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
              >
                {partners.map((partner, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm text-center hover:shadow-md transition-all"
                  >
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-6 h-6 text-gray-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{partner.name}</h3>
                    <p className="text-xs text-gray-500">{partner.description}</p>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Your Security?</h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
                  Join enterprise organizations using EasyVigil to transform their security operations with AI-powered analytics.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg">
                    Schedule Demo
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