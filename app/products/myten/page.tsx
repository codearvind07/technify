"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { 
  Building2, 
  Thermometer, 
  Lightbulb, 
  Lock, 
  BarChart3, 
  CheckCircle,
  Download,
  FileText,
  Zap,
  Shield,
  Users,
  Layers,
  Cpu,
  Database,
  ArrowRight,
  Play,
  Star,
  TrendingUp,
  Clock,
  Server,
  Monitor,
  HardDrive,
  Eye
} from "lucide-react";
import { SEO } from '@/components/seo/seo';

export default function MytenPage() {
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

  const floatAnimation: Variants = {
    hidden: { y: 0 },
    visible: {
      y: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // NAS Solution Features from document
  const nasFeatures = [
    { 
      title: "High Availability", 
      desc: "Minimizes downtime, ensuring continuous data availability.", 
      icon: Cpu 
    },
    { 
      title: "Active-Active/Passive Controllers", 
      desc: "Both controllers operate in an active-active or active-passive mode.", 
      icon: Layers 
    },
    { 
      title: "Scalability", 
      desc: "Easy to scale with additional drives or expansion units without interrupting services.", 
      icon: BarChart3 
    },
    { 
      title: "Data Integrity", 
      desc: "Advanced error correction, checksums, and data scrubbing to maintain data integrity.", 
      icon: Database 
    }
  ];

  // Active LED Wall Features from document
  const activeLedFeatures = [
    { 
      title: "High Brightness", 
      desc: "5000-8000 nits or more for outdoor visibility.",
      icon: Lightbulb
    },
    { 
      title: "IP Rating", 
      desc: "IP65/66/67 protection against extreme conditions.",
      icon: Shield
    },
    { 
      title: "Durable Build", 
      desc: "Withstands extreme weather for long-term use.",
      icon: HardDrive
    },
    { 
      title: "Front/Rear Access", 
      desc: "Efficient and flexible maintenance options.",
      icon: Server
    }
  ];

  // Video Wall Technology Features from document
  const videoWallFeatures = [
    {
      title: "Display Size",
      desc: "55-inch diagonal screen, providing an expansive visual area suitable for various applications.",
      icon: Monitor
    },
    {
      title: "Viewing Angle",
      desc: "Wide viewing angle of 178° both horizontally and vertically, ensuring clear images from any position.",
      icon: Eye
    },
    {
      title: "Bezel Size",
      desc: "Ultra-narrow 0.88mm bezel allows for seamless multi-screen setups and immersive experiences.",
      icon: BarChart3
    }
  ];

  // LED Wall Sizes & Configurations
  const ledConfigurations = [
    {
      title: "Various Sizes",
      desc: "Multiple size options to suit different spaces and requirements."
    },
    {
      title: "Front/Rear Access",
      desc: "Efficient maintenance with flexible access options."
    },
    {
      title: "Glare Reduction",
      desc: "Advanced technology for optimal viewing performance."
    }
  ];

  const downloads = [
    { 
      title: "NAS Solution", 
      file: "Myten-ASKV-12AC2R.pdf", 
      icon: FileText,
      color: "from-blue-500 to-cyan-500",
      description: "Network Attached Storage Solution Specifications"
    },
    { 
      title: "Active LED Wall", 
      file: "Active-LED-Wall.pdf", 
      icon: Lightbulb,
      color: "from-purple-500 to-pink-500",
      description: "High-Brightness Outdoor Display Technology"
    },
    { 
      title: "Video Wall Tech", 
      file: "Video-Wall-Tech.pdf", 
      icon: Monitor,
      color: "from-green-500 to-emerald-500",
      description: "Innovative Video Wall Technology Specifications"
    }
  ];

  const nasSpecifications = [
    { label: "Model", value: "Myten ASKV-12AC2R", icon: HardDrive },
    { label: "Type", value: "Network Attached Storage (NAS)", icon: Server },
    { label: "Controller Mode", value: "Active-Active/Passive", icon: Cpu },
    { label: "Scalability", value: "Expandable with additional drives", icon: Database },
    { label: "Data Protection", value: "Advanced error correction & scrubbing", icon: Shield },
    { label: "Availability", value: "High availability with minimal downtime", icon: TrendingUp }
  ];

  const benefits = [
    "Continuous data availability with high uptime",
    "Easy scalability without service interruption",
    "Advanced data integrity protection",
    "High-brightness displays for outdoor visibility",
    "Weather-resistant construction for durability",
    "Seamless multi-screen setups for immersive experiences"
  ];

  const performanceStats = [
    { number: "99.9%", label: "Uptime Guarantee", icon: TrendingUp },
    { number: "5000-8000", label: "Nits Brightness", icon: Lightbulb },
    { number: "IP65/66/67", label: "Weather Protection", icon: Shield },
    { number: "178°", label: "Viewing Angle", icon: Eye }
  ];

  const productLines = [
    {
      name: "Network Attached Storage",
      description: "Myten ASKV-12AC2R NAS solutions with high availability and scalability",
      features: ["High Availability", "Active Controllers", "Easy Scalability", "Data Integrity"],
      icon: <Server className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Active LED Walls",
      description: "High-brightness outdoor displays with extreme weather resistance",
      features: ["5000-8000 Nits", "IP65/66/67", "Durable Build", "Multiple Sizes"],
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Video Wall Technology",
      description: "Advanced display solutions with seamless multi-screen setups",
      features: ["55-inch Display", "178° Viewing", "0.88mm Bezel", "Immersive Experience"],
      icon: <Monitor className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <>
      <SEO 
        title="Myten - Advanced NAS Solutions & Display Technology"
        description="Myten offers innovative Network Attached Storage solutions, Active LED Walls, and Video Wall Technology with high availability, scalability, and exceptional display performance."
        path="/products/myten"
        image="/images/og-myten.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/20 text-gray-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            variants={floatAnimation}
            initial="hidden"
            animate="visible"
            className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl"
          />
          <motion.div
            variants={floatAnimation}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
            className="absolute top-40 right-20 w-40 h-40 bg-cyan-200/20 rounded-full blur-xl"
          />
          <motion.div
            variants={floatAnimation}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2 }}
            className="absolute bottom-40 left-20 w-36 h-36 bg-indigo-200/20 rounded-full blur-xl"
          />
        </div>

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center">
                <motion.div 
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >
                  <motion.div 
                    variants={itemVariants}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6 border border-blue-200/50"
                  >
                    <motion.span 
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 bg-blue-600 rounded-full mr-2"
                    />
                    Advanced Storage & Display Solutions
                  </motion.div>
                  
                  <motion.h1 
                    variants={itemVariants}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900"
                  >
                    Myten <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      NAS & Display Technology
                    </span>
                  </motion.h1>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
                  >
                    Discover innovative solutions in Network Attached Storage and high-performance display technology. 
                    Myten delivers reliability, scalability, and exceptional visual experiences.
                  </motion.p>

                  {/* Performance Stats */}
                  <motion.div 
                    variants={itemVariants}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
                  >
                    {performanceStats.map((stat, index) => {
                      const IconComponent = stat.icon;
                      return (
                        <motion.div 
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          className="text-center p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 shadow-sm"
                        >
                          <div className="flex justify-center mb-2">
                            <IconComponent className="h-6 w-6 text-blue-600" />
                          </div>
                          <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                  
                  <motion.div 
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                  >
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all shadow-lg flex items-center justify-center"
                    >
                      Request Demo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-gray-700 border border-gray-300 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-md flex items-center justify-center hover:border-blue-300"
                    >
                      <Play className="mr-2 h-5 w-5" />
                      View Presentation
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Product Lines Overview */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Our Product Solutions
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Comprehensive range of storage and display solutions designed for enterprise applications.
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {productLines.map((product, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-200 group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center mb-4 text-white`}>
                      {product.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* NAS Solution Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Myten ASKV-12AC2R Network Attached Storage
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  High-performance NAS solution with enterprise-grade features for continuous data availability and scalability.
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
              >
                {nasFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-200 group"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-100 group-hover:to-cyan-100 transition-all"
                      >
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </motion.div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* NAS Specifications */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              >
                <h3 className="text-2xl font-bold mb-8 text-gray-900 text-center">
                  NAS Specifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {nasSpecifications.map((spec, index) => {
                    const IconComponent = spec.icon;
                    return (
                      <motion.div 
                        key={index}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200 group hover:border-blue-200 transition-all"
                      >
                        <IconComponent className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-gray-700 text-sm">{spec.label}</div>
                          <div className="text-blue-600 font-semibold">{spec.value}</div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Active LED Wall Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Active LED Wall Solutions
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  High-brightness outdoor displays designed for exceptional visibility and durability in extreme conditions.
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
              >
                {activeLedFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-200 group"
                    >
                      <div className="flex items-start gap-4">
                        <motion.div 
                          whileHover={{ scale: 1.1 }}
                          className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg flex items-center justify-center group-hover:from-blue-100 group-hover:to-cyan-100 transition-all"
                        >
                          <IconComponent className="w-5 h-5 text-blue-600" />
                        </motion.div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* LED Configurations */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100"
              >
                <h3 className="text-2xl font-bold mb-8 text-gray-900 text-center">
                  Sizes & Configurations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {ledConfigurations.map((config, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -3 }}
                      className="bg-white/80 rounded-xl p-6 text-center backdrop-blur-sm border border-white/50"
                    >
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{config.title}</h4>
                      <p className="text-gray-600 text-sm">{config.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Video Wall Technology Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Innovative Video Wall Technology
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Advanced display solutions designed for optimal visibility and performance in various applications.
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {videoWallFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-200 group text-center"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-green-100 group-hover:to-emerald-100 transition-all"
                      >
                        <IconComponent className="w-6 h-6 text-green-600" />
                      </motion.div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-900 group-hover:text-green-600 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </section>

          {/* Downloads Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Product Documentation
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Download comprehensive product specifications and technical documentation.
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {downloads.map((doc, index) => {
                  const IconComponent = doc.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-200 text-center group"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className={`w-12 h-12 bg-gradient-to-br ${doc.color} rounded-xl flex items-center justify-center mx-auto mb-4 text-white`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </motion.div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                        {doc.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{doc.description}</p>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        href={`/pdf/${doc.file}`}
                        download
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </motion.a>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center text-white"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-12">Key Benefits</h2>
                
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerChildren}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/30 transition-all text-center"
                    >
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-white/90 text-sm">{benefit}</p>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerChildren}
                  className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
                >
                  <motion.button 
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg flex items-center justify-center"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Get Technical Specs
                  </motion.button>
                  
                  <Link href="/contact">
                    <motion.div
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all flex items-center justify-center"
                    >
                      Contact Sales
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}