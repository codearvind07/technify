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
import heroImage from '@/assets/AdvancedAI.jpg'; // Using a more dynamic image
import analyticsImage from '@/assets/AdvancedAI.jpg';
import platformImage from '@/assets/UnifiedSecurity.jpg';

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
      
      <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800 overflow-hidden">
        {/* Consistent Background Elements */}
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

        <main>
          {/* Hero Section */}
          <section className="relative pt-28 pb-20 px-5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <motion.p variants={itemVariants} className="text-sm tracking-wider font-semibold uppercase text-blue-600 mb-4">
                  EasyVigil Platform
                </motion.p>
                
                <motion.h1 
                  variants={itemVariants}
                  className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-slate-900"
                >
                  Intelligent Video Analytics Platform
                </motion.h1>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed"
                >
                  Transform your security infrastructure with AI-powered video analytics. 
                  Detect threats in real-time, automate monitoring, and enhance operational efficiency.
                </motion.p>
                
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <a 
                    href="/contact" 
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    Request Demo
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a 
                    href="/pdf/Easy Vigil.pdf" 
                    download
                    className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-sm flex items-center justify-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    View Brochure
                  </a>
                </motion.div>

                {/* Stats */}
                <motion.div 
                  variants={itemVariants}
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
                >
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-slate-900">{stat.number}</div>
                      <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
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
          </section>

          {/* Features Section */}
          <section id="features" className="py-20 px-5 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                  Enterprise-Grade Security Features
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Comprehensive security solutions designed for modern enterprises with distributed infrastructure.
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {featureCards.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-200 flex flex-col text-center"
                  >
                    <div className="w-14 h-14 mx-auto bg-blue-50 rounded-lg flex items-center justify-center mb-5">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-slate-900">{feature.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed flex-grow">{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Video Analytics Section */}
          <section id="analytics" className="py-20 px-5 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                  className="text-3xl md:text-4xl font-bold mb-6 text-slate-900"
                >
                  Advanced AI Video Analytics
                </motion.h2>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-lg text-slate-600 mb-8 leading-relaxed"
                >
                  Leverage cutting-edge artificial intelligence to automatically detect, classify, 
                  and respond to security events in real-time across your entire surveillance network.
                </motion.p>
                
                <motion.div 
                  variants={staggerChildren}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {analyticsFeatures.map((feature, index) => (
                    <motion.div 
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 border border-gray-200"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{feature.title}</h3>
                        <p className="text-sm text-slate-600">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Platform Section */}
          <section id="platform" className="py-20 px-5 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                  Unified Security Platform
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  An open, extensible platform that integrates with your existing infrastructure and scales with your business.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                    className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm"
                  >
                    <h3 className="text-xl font-semibold mb-4 text-slate-900">Platform Capabilities</h3>
                    <p className="text-slate-600 mb-6">
                      EasyVigil supports industry-standard protocols and web services interfaces, 
                      linking to a suite of applications designed for enterprise operations from anywhere.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a 
                        href="/pdf/Easy Vigil.pdf" 
                        download
                        className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center text-sm"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download Brochure
                      </a>
                      <a 
                        href="/contact" 
                        className="bg-white border border-gray-300 text-gray-700 px-5 py-2.5 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center text-sm"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Request Demo
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    variants={itemVariants}
                    className="bg-blue-50 rounded-xl p-8 border border-blue-200"
                  >
                    <h3 className="text-xl font-semibold mb-4 text-slate-900">Key Benefits</h3>
                    <div className="space-y-3">
                      {[
                        "Reduced false alarms by 90%",
                        "24/7 automated monitoring",
                        "Seamless third-party integrations",
                        "Scalable from single site to enterprise"
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                          <span className="text-slate-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Expertise Section */}
          <section className="py-20 px-5 bg-white">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                  Comprehensive Expertise
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  End-to-end solutions across security, automation, and system integration domains.
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {expertiseAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                      {area.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-4 text-slate-900">{area.category}</h3>
                    <ul className="space-y-2">
                      {area.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-slate-600">
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
          <section id="partners" className="py-20 px-5 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                  Technology Partners
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
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
                      <Shield className="w-6 h-6 text-gray-500" />
                    </div>
                    <h3 className="font-semibold text-slate-900 text-sm mb-1">{partner.name}</h3>
                    <p className="text-xs text-slate-500">{partner.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-5 bg-gradient-to-br from-blue-50 to-slate-100">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready to Enhance Your Security?</h2>
                <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                  Join enterprise organizations using EasyVigil to transform their security operations with AI-powered analytics.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/pdf/Easy Vigil.pdf" 
                    download
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md"
                  >
                    Download Brochure
                  </a>
                  <a 
                    href="/contact" 
                    className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-sm"
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
                