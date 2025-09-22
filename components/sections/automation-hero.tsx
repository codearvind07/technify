"use client";

import { motion, Variants } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { 
  Zap, 
  Home, 
  Command, 
  Lightbulb, 
  Building, 
  Cpu,
  ArrowRight,
  BarChart3,
  Shield,
  Cloud,
  Settings,
  Monitor
} from "lucide-react";
import homeAutomation from "../../assets/beanbag-person.png";
import buildingManagement from "../../assets/elv.png";
import robotics from "../../assets/automation.jpg";

export default function AutomationHero() {
  // Type your variants for better type safety
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
      boxShadow: "0 8px 32px 0 rgba(59, 130, 246, 0.37)",
      transition: { duration: 0.3 }
    }
  };

  const solutions = [
    {
      title: "Energy Management Monitoring System",
      icon: BarChart3,
      image: buildingManagement,
      description: "Technify's energy management system (DMS) is a solution designed to cater for both commercial and industrial clients. Our solution is used by operators of electric utility grids to monitor, control, and optimize the performance of the generation or transmission system.",
      features: ["Real-time monitoring", "Energy usage reporting", "Cost optimization", "Grid performance management"],
      color: "from-blue-500 to-orange-500"
    },
    {
      title: "Home Automation",
      icon: Home,
      image: homeAutomation,
      description: "Technify's Home solution business provides homeowners with a sophisticated system that is monitored and controlled from anywhere in the world.",
      features: [
        "Lights turn on when the sun sets and you are home",
        "Lights turn on when anyone comes home and it is dark",
        "Lights dim when you start watching a movie",
        "Notifications when lights turn on while you're away"
      ],
      color: "from-blue-500 to-orange-500"
    },
    {
      title: "Command Control Report (CCSI)",
      icon: Command,
      image: buildingManagement,
      description: "The Integrated Centralized Commercial & Control Center (ICCC) is an integrated system that will operate to manage multiple service-generation including real-time monitoring & improving services delivery efficiency.",
      features: [
        "Intelligent Traffic & Transport Management",
        "Data Center management",
        "Safety & Security systems",
        "Early Warning System for hazards"
      ],
      color: "from-blue-500 to-orange-500"
    },
    {
      title: "Lighting Control System (LCS)",
      icon: Lightbulb,
      image: buildingManagement,
      description: "Technify's lighting control solution is an intelligent network-based lighting control solution that incorporates communication between various system types and outputs related to lighting control systems.",
      features: ["Network-based control", "Energy efficiency", "Custom lighting scenarios", "Remote access"],
      color: "from-blue-500 to-orange-500"
    },
    {
      title: "Building Management System (BMS)",
      icon: Building,
      image: buildingManagement,
      description: "A building management system, otherwise known as a building automation system, controls and monitors the building's mechanical and electrical equipment.",
      features: ["Ventilation control", "Lighting management", "Power systems", "Fire and security systems"],
      color: "from-blue-500 to-orange-500"
    },
    {
      title: "Integrated Building Management System (IBMS)",
      icon: Cpu,
      image: buildingManagement,
      description: "The latest technology in Building Management System designed to work in stand-alone mode or as web-based Integrated Automation ready to integrate with several systems.",
      features: ["Facility management integration", "ERP compatibility", "Web-based access", "Multi-system integration"],
      color: "from-blue-500 to-orange-500"
    },
    {
      title: "Robotics",
      icon: Settings,
      image: robotics,
      description: "We are a leader in commercial and industrial automation and provide robotic solutions that help companies automate their operations with both simple and complex robotic systems.",
      features: ["Industrial automation", "Complex system integration", "Custom robotic solutions", "Application-specific designs"],
      color: "from-blue-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 font-[Poppins,sans-serif]">
      <Head>
        <title>Automation Solutions | Technify</title>
        <meta name="description" content="Advanced automation solutions for industrial, commercial, and residential applications" />
      </Head>

      <main className="relative">
        {/* Hero Section */}
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
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center"
            >
              <motion.h1 
                variants={itemVariants}
                className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 tracking-tight"
              >
                Automation Solutions
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-2xl bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent max-w-3xl mx-auto mb-8 font-medium"
              >
                Intelligent automation systems for industrial, commercial, and residential applications
              </motion.p>
              <motion.div variants={itemVariants}>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#eff6ff" }}
                  className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-orange-600 transition-all flex items-center justify-center mx-auto gap-2 text-lg shadow-lg"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 text-white" />
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <motion.h2 
                variants={itemVariants}
                className="text-4xl font-bold text-center text-gray-900 mb-16"
              >
                Our Automation Solutions
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {solutions.map((solution, index) => {
                  const Icon = solution.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover="hover"
                      className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all group border border-gray-200 hover:shadow-xl"
                    >
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={solution.image}
                          alt={solution.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
                      </div>
                      <motion.div 
                        className={`h-2 bg-gradient-to-r ${solution.color}`}
                        layoutId={`solution-bar-${index}`}
                      />
                      <div className="p-6">
                        <motion.div 
                          className={`p-3 bg-gradient-to-r ${solution.color} rounded-lg w-12 h-12 flex items-center justify-center mb-4 shadow-lg`}
                          whileHover={{ rotate: 12, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {solution.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {solution.description}
                        </p>
                        <ul className="space-y-2 mb-6">
                          {solution.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <div className={`w-2 h-2 bg-gradient-to-r ${solution.color} rounded-full mt-2 mr-3`}></div>
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <motion.button
                          whileHover={{ scale: 1.04, backgroundColor: "#3b82f6", color: "#fff" }}
                          className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-2 rounded-full font-semibold hover:from-blue-700 hover:to-orange-600 transition-all shadow-md"
                        >
                          Learn More
                        </motion.button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <div className="text-center mb-16">
                <motion.h2 
                  variants={itemVariants}
                  className="text-4xl font-bold text-gray-900 mb-4"
                >
                  Why Choose Our Automation Solutions
                </motion.h2>
                <motion.p 
                  variants={itemVariants}
                  className="text-2xl text-gray-600 max-w-3xl mx-auto"
                >
                  Advanced technology, reliable performance, and comprehensive support
                </motion.p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure & Reliable</h3>
                  <p className="text-gray-600">Enterprise-grade security and 99.9% uptime guarantee</p>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Cloud Connected</h3>
                  <p className="text-gray-600">Access and control your systems from anywhere in the world</p>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Monitor className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Monitoring</h3>
                  <p className="text-gray-600">Live data and analytics for informed decision making</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Automate Your Operations?
            </h2>
            <p className="text-2xl text-white mb-8 max-w-3xl mx-auto">
              Contact our experts to discuss how our automation solutions can transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#eff6ff", color: "#3b82f6" }}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all shadow-lg"
              >
                Schedule a Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#3b82f6" }}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all shadow-lg"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}