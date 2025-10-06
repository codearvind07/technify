"use client";

import { motion, Variants } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { 
  Zap, Home, Command, Lightbulb, Building, Cpu,
  ArrowRight, BarChart3, Shield, Cloud, Settings,
  Monitor, Play, Star, Users, Target, Globe, CheckCircle
} from "lucide-react";
import Energy  from "../../assets/EnergyManagement.jpg";
import homeAutomation from "../../assets/HomeAutomation.jpg";
import Commanda from "../../assets/CommandControl.jpg";
import Lighting  from "../../assets/LightingControlSystem.jpg";
import robotics from "../../assets/Robotics.jpg";
import buildingManagement from "../../assets/BuildingManagementSystem.jpg";
import building from "../../assets/Integrated Building Management System (IBMS).jpg";

export default function AutomationHero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] },
    },
    hover: {
      scale: 1.04,
      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
      transition: { duration: 0.3 }
    }
  };

  const solutions = [
    {
      title: "Energy Management Monitoring System",
      icon: BarChart3,
      image: Energy,
      description: "Advanced energy management system (DMS) designed for commercial and industrial clients to optimize power consumption and reduce costs.",
      features: ["Real-time monitoring", "Energy usage reporting", "Cost optimization", "Grid performance management"],
      color: "from-blue-500 to-cyan-500",
      gradient: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
      bgGradient: "bg-gradient-to-br from-blue-100/40 via-cyan-100/30 to-white"
    },
    {
      title: "Home Automation",
      icon: Home,
      image: homeAutomation,
      description: "Sophisticated home automation system that provides seamless control and monitoring from anywhere in the world.",
      features: ["Smart lighting automation", "Entertainment scene control", "Security integration", "Remote access"],
      color: "from-violet-500 to-purple-500",
      gradient: "bg-gradient-to-br from-violet-500/20 to-purple-500/20",
      bgGradient: "bg-gradient-to-br from-violet-100/40 via-purple-100/30 to-white"
    },
    {
      title: "Command Control Center (CCSI)",
      icon: Command,
      image: Commanda,
      description: "Integrated Centralized Command System for real-time monitoring and management of multiple service operations.",
      features: ["Intelligent Traffic Management", "Data Center operations", "Safety & Security systems", "Early Warning alerts"],
      color: "from-emerald-500 to-green-500",
      gradient: "bg-gradient-to-br from-emerald-500/20 to-green-500/20",
      bgGradient: "bg-gradient-to-br from-emerald-100/40 via-green-100/30 to-white"
    },
    {
      title: "Lighting Control System (LCS)",
      icon: Lightbulb,
      image: Lighting,
      description: "Intelligent network-based lighting control that adapts to your needs while maximizing energy efficiency.",
      features: ["Network-based control", "Energy efficiency", "Custom lighting scenarios", "Remote access"],
      color: "from-amber-500 to-orange-500",
      gradient: "bg-gradient-to-br from-amber-500/20 to-orange-500/20",
      bgGradient: "bg-gradient-to-br from-amber-100/40 via-orange-100/30 to-white"
    },
    {
      title: "Building Management System (BMS)",
      icon: Building,
      image: buildingManagement,
      description: "Comprehensive building automation system that controls and monitors mechanical and electrical equipment.",
      features: ["HVAC control", "Lighting management", "Power systems", "Fire and security"],
      color: "from-red-500 to-pink-500",
      gradient: "bg-gradient-to-br from-red-500/20 to-pink-500/20",
      bgGradient: "bg-gradient-to-br from-red-100/40 via-pink-100/30 to-white"
    },
    {
      title: "Integrated Building Management System (IBMS)",
      icon: Cpu,
      image: building,
      description: "Next-generation building management with web-based integrated automation and multi-system compatibility.",
      features: ["Facility management", "ERP compatibility", "Web-based access", "Multi-system integration"],
      color: "from-indigo-500 to-blue-500",
      gradient: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20",
      bgGradient: "bg-gradient-to-br from-indigo-100/40 via-blue-100/30 to-white"
    },
    {
      title: "Robotics & Automation",
      icon: Settings,
      image: robotics,
      description: "Custom robotic solutions for industrial automation with both simple and complex system integration.",
      features: ["Industrial automation", "System integration", "Custom solutions", "Application-specific designs"],
      color: "from-gray-600 to-slate-500",
      gradient: "bg-gradient-to-br from-gray-600/20 to-slate-500/20",
      bgGradient: "bg-gradient-to-br from-gray-100/40 via-slate-100/30 to-white"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 font-sans">
      <Head>
        <title>Automation Solutions | Technify</title>
        <meta name="description" content="Advanced automation solutions for industrial, commercial, and residential applications" />
      </Head>

      <main className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 lg:py-32">
          {/* Enhanced Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-cyan-50/40 to-indigo-50/50"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-300/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow delay-500"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow delay-1500"></div>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Text Content */}
              <div className="space-y-8">
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200 shadow-lg"
                >
                  <Zap className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700">Leading Automation Solutions</span>
                </motion.div>

                <motion.h1 
                  variants={itemVariants}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                    Smart
                  </span>
                  <br />
                  <span className="text-slate-900">Automation</span>
                  <br />
                  <span className="text-slate-700">For Modern Spaces</span>
                </motion.h1>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-xl text-slate-600 leading-relaxed max-w-2xl"
                >
                  Transform your residential, commercial, or industrial spaces with cutting-edge automation technology. 
                  Experience seamless control, enhanced efficiency, and intelligent environments tailored to your needs.
                </motion.p>
                
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.button
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3)" 
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-3 text-lg shadow-xl w-full sm:w-auto"
                  >
                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Explore Solutions
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group bg-white/90 backdrop-blur-sm border-2 border-blue-200 text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:border-blue-300 transition-all flex items-center justify-center gap-3 text-lg shadow-lg w-full sm:w-auto"
                  >
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Get Started
                  </motion.button>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap items-center gap-6 pt-8 text-slate-600"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium">24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium">Custom Solutions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium">Energy Efficient</span>
                  </div>
                </motion.div>
              </div>
              
              {/* Enhanced Hero Image */}
              <motion.div
                variants={itemVariants}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white/30 backdrop-blur-sm">
                  <Image
                    src={Energy}
                    alt="Intelligent Automation Solutions"
                    width={700}
                    height={600}
                    className="object-cover w-full h-[500px] transition-transform duration-700 hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  
                  {/* Floating Cards */}
                  <motion.div
                    className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl max-w-xs border border-white/20"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-slate-900">Smart Control</span>
                    </div>
                    <p className="text-xs text-slate-600">Automated system management</p>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl max-w-xs border border-white/20"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 text-amber-500 fill-current" />
                      <span className="text-sm font-semibold text-slate-900">Energy Efficient</span>
                    </div>
                    <p className="text-xs text-slate-600">Optimized power consumption</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Solutions Section with Enhanced Background */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          {/* Section Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/20"></div>
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow delay-1000"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <div className="text-center mb-16">
                <motion.h2 
                  variants={itemVariants}
                  className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
                >
                  Comprehensive <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Automation</span> Solutions
                </motion.h2>
                <motion.p 
                  variants={itemVariants}
                  className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
                >
                  From residential comfort to industrial efficiency, our integrated automation systems 
                  deliver intelligent control, energy savings, and enhanced security across all environments.
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {solutions.map((solution, index) => {
                  const Icon = solution.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover="hover"
                      className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200 overflow-hidden"
                    >
                      {/* Enhanced Background Gradient */}
                      <div className={`absolute inset-0 ${solution.bgGradient} opacity-100`}></div>
                      <div className={`absolute inset-0 ${solution.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      
                      {/* Larger Image Container */}
                      <div className="relative h-64 w-full overflow-hidden">
                        <Image
                          src={solution.image}
                          alt={solution.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-115"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent"></div>
                        
                        {/* Enhanced Icon Badge */}
                        <motion.div 
                          className={`absolute top-4 right-4 p-4 bg-gradient-to-r ${solution.color} rounded-2xl shadow-2xl backdrop-blur-sm`}
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </motion.div>
                      </div>

                      <div className="relative p-6 bg-white/80 backdrop-blur-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">
                          {solution.title}
                        </h3>
                        <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                          {solution.description}
                        </p>
                        
                        <ul className="space-y-2 mb-6">
                          {solution.features.map((feature, featureIndex) => (
                            <motion.li 
                              key={featureIndex} 
                              className="flex items-center text-slate-700 text-sm"
                              whileHover={{ x: 4 }}
                            >
                              <div className={`w-2 h-2 bg-gradient-to-r ${solution.color} rounded-full mr-3 flex-shrink-0`}></div>
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                        
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`w-full bg-gradient-to-r ${solution.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all shadow-md flex items-center justify-center gap-2 backdrop-blur-sm`}
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Benefits Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          {/* Multi-layer Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/95 to-indigo-900/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent"></div>
          
          {/* Animated Orbs */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow delay-1000"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <div className="text-center mb-16">
                <motion.h2 
                  variants={itemVariants}
                  className="text-4xl md:text-5xl font-bold mb-6"
                >
                  Transform Your Space with <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">Intelligent Automation</span>
                </motion.h2>
                <motion.p 
                  variants={itemVariants}
                  className="text-xl text-slate-300 max-w-3xl mx-auto"
                >
                  Experience the perfect blend of advanced technology, reliable performance, and comprehensive support 
                  that makes automation accessible and effective for every environment.
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: Shield,
                    title: "Enterprise-Grade Security",
                    description: "Military-grade encryption and 99.9% uptime guarantee ensure your operations remain secure and uninterrupted."
                  },
                  {
                    icon: Cloud,
                    title: "Cloud-Connected Control",
                    description: "Access and manage your systems from anywhere with our secure, reliable cloud platform and mobile apps."
                  },
                  {
                    icon: Monitor,
                    title: "Real-Time Intelligence",
                    description: "Live data analytics and predictive insights empower informed decisions and optimal system performance."
                  },
                  {
                    icon: Users,
                    title: "Expert Implementation",
                    description: "24/7 dedicated support from industry experts ensures smooth installation and ongoing optimization."
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -8 }}
                    className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all group relative overflow-hidden"
                  >
                    {/* Feature-specific gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-2xl group-hover:shadow-3xl transition-all duration-500 relative z-10">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-white transition-colors duration-300 relative z-10">
                      {feature.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300 relative z-10">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          {/* Multi-color Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(255,255,255,0.1)_0deg,transparent_60deg)]"></div>
          
          {/* Floating Particles */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/30 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/20 rounded-full animate-float delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white/25 rounded-full animate-float delay-500"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm border border-white/20"
            >
              <Target className="w-10 h-10 text-white" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Automate Your World?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join forward-thinking businesses and homeowners who are already experiencing 
              the benefits of intelligent automation. Let's build your smart future together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "#ffffff",
                  color: "#3b82f6"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all shadow-lg flex items-center gap-3 text-lg w-full sm:w-auto backdrop-blur-sm"
              >
                <Play className="w-5 h-5" />
                Schedule Demo
              </motion.button>
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(255,255,255,0.15)"
                }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all shadow-lg flex items-center gap-3 text-lg w-full sm:w-auto backdrop-blur-sm"
              >
                <Users className="w-5 h-5" />
                Contact Expert
              </motion.button>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-blue-200 mt-8 text-sm"
            >
              Free consultation • Custom solutions • Professional installation
            </motion.p>
          </motion.div>
        </section>
      </main>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}