"use client";

import { motion, Variants } from "framer-motion";
import { 
  Monitor, 
  Database, 
  Users, 
  Calendar, 
  FileText, 
  Download,
  ArrowRight,
  Play,
  Check,
  Zap,
  Shield,
  BarChart3,
  CreditCard,
  Activity,
  Bed,
  ShoppingCart,
  Microscope,
  Image as ImageIcon,
  Scissors,
  User,
  Box,
  Settings
} from "lucide-react";
import { SEO } from '@/components/seo/seo';
import Image from "next/image";

export default function HospitalHIMSPage() {
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

  const coreModules = [
    {
      title: "Patient Registration & EMR",
      points: [
        "Centralized patient file",
        "Appointment scheduling",
        "Digital consent forms",
        "Visit history tracking",
        "Electronic Medical Records (EMR)"
      ]
    },
    {
      title: "OPD & IPD Management",
      points: [
        "Doctor notes & treatments",
        "Bed allotment & ward management",
        "Nursing charts",
        "Vital & medication logs",
        "Diet plan management"
      ]
    },
    {
      title: "Billing & Finance",
      points: [
        "Automated billing",
        "Insurance/TPA claims processing",
        "Cashless settlement workflows",
        "Multi-department billing",
        "Financial dashboards & MIS reports"
      ]
    },
    {
      title: "Pharmacy Management",
      points: [
        "Prescription integration",
        "Stock & inventory management",
        "Purchase orders",
        "Expiry & batch tracking",
        "Counter and IPD medicine issue"
      ]
    },
    {
      title: "Laboratory & Diagnostic Module",
      points: [
        "Test order management",
        "Lab sample tracking",
        "Equipment integration (LIS)",
        "Report generation & delivery",
        "Doctor dashboard for results"
      ]
    },
    {
      title: "Radiology Information System (RIS)",
      points: [
        "Digital imaging orders",
        "PACS integration (X-ray, CT, MRI)",
        "Secure doctor access",
        "Report storage & sharing"
      ]
    },
    {
      title: "OT & Procedure Management",
      points: [
        "OT scheduling",
        "Pre-op & post-op records",
        "Surgical team management",
        "Procedure documentation"
      ]
    },
    {
      title: "HR & Staff Management",
      points: [
        "Duty rosters",
        "Attendance & payroll",
        "Staff performance analytics"
      ]
    },
    {
      title: "Inventory & Asset Management",
      points: [
        "Consumables tracking",
        "Equipment logs",
        "Maintenance schedules",
        "Vendor management"
      ]
    },
    {
      title: "Admin & MIS Dashboard",
      points: [
        "Real-time hospital metrics",
        "Revenue analysis",
        "Department-wise performance",
        "Alerts & notifications"
      ]
    }
  ];

  const technicalHighlights = [
    "Cloud/on-prem deployment",
    "Role-based access control",
    "HIPAA & healthcare data security compliance",
    "Audit trails & activity logs",
    "API integration with third-party systems",
    "Multi-location support",
    "Mobile & tablet-enabled dashboards"
  ];

  const integrations = [
    "CCTV → Patient room monitoring",
    "Nurse Call System → Patient alerts + logs",
    "QMS → Appointment & queue sync",
    "PACS/RIS/LIS → Diagnostic system integration",
    "Parking System → Patient-validated parking",
    "Access Control → Role-based movement"
  ];

  const benefits = [
    "Centralized patient data",
    "Faster admissions & discharges",
    "Improved clinical decision-making",
    "Smooth coordination between doctors & nurses",
    "Reduced paperwork and duplication",
    "Better billing accuracy & compliance",
    "Higher patient satisfaction",
    "Full hospital automation"
  ];

  return (
    <>
      <SEO 
        title="HIMS - Hospital Information Management System for Healthcare"
        description="Advanced Hospital Information Management System featuring patient data management, appointment scheduling, electronic health records, and staff management for improved healthcare delivery. hospital information management system, hims software, digital hospital solution, emr ehr system, hospital automation system, healthcare management platform"
        path="/products/hospital/hims"
        image="/images/og-hospital-hims.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
        <main>
          {/* Hero Section */}
          <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden -z-10">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
            </div>
            
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
                    Digital Hospital. Unified Records. Faster Clinical Decisions.
                  </motion.div>
                  
                  <motion.h1 
                    variants={itemVariants}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900"
                  >
                    Hospital Information{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Management System
                    </span>
                  </motion.h1>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed"
                  >
                    Comprehensive Hospital Information Management System designed to streamline healthcare operations, manage patient data efficiently, and enhance the quality of patient care.
                  </motion.p>
                </motion.div>
                
                <motion.div 
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className="relative"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                    <Image 
                      src="https://acropolium.com/img/articles/hospital-management-software/img02.jpg" 
                      alt="Hospital Information Management System" 
                      width={600} 
                      height={400} 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Importance Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="text-center mb-16"
              >
                <motion.h2 
                  variants={itemVariants}
                  className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
                >
                  Why HIMS Is Essential for Hospitals
                </motion.h2>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
                >
                  A modern hospital requires a powerful digital backbone to manage patients, doctors, records, billing, diagnostics, pharmacy, and operations — all in one place.
                </motion.p>
                
                <motion.div 
                  variants={staggerChildren}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  <motion.div 
                    variants={fadeInUp}
                    className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Digital Records</h3>
                    <p className="text-gray-600">Centralize patient records (EHR/EMR) and reduce paperwork and manual errors.</p>
                  </motion.div>
                  
                  <motion.div 
                    variants={fadeInUp}
                    className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                  >
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                      <Zap className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Efficiency Boost</h3>
                    <p className="text-gray-600">Speed up billing & discharge while improving coordination between departments.</p>
                  </motion.div>
                  
                  <motion.div 
                    variants={fadeInUp}
                    className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Compliance & Security</h3>
                    <p className="text-gray-600">Ensure compliance and audit readiness while supporting telemedicine & digital healthcare.</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* What We Deliver Section */}
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
                      src="https://bhishakblog.wordpress.com/wp-content/uploads/2020/10/features-of-bhishak-hospital-information-management-system.png?w=500" 
                      alt="Comprehensive HIMS Platform" 
                      width={600} 
                      height={400} 
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
                    What Technify Delivers
                  </motion.h2>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-lg text-gray-600 mb-8 leading-relaxed"
                  >
                    A comprehensive, modular HIMS platform that supports multi-specialty hospitals, clinics, chains, and diagnostic centers.
                  </motion.p>
                  
                  <motion.div 
                    variants={itemVariants}
                    className="space-y-4"
                  >
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-gray-200">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mt-1">
                        <Check className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Modular Architecture</h3>
                        <p className="text-gray-600 text-sm">Customizable modules that can be tailored to specific hospital needs.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-gray-200">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mt-1">
                        <Database className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Secure Data Management</h3>
                        <p className="text-gray-600 text-sm">HIPAA-compliant data storage with robust security measures.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-gray-200">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mt-1">
                        <Zap className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Real-Time Integration</h3>
                        <p className="text-gray-600 text-sm">Seamless connectivity with existing hospital systems and workflows.</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Core Modules Section */}
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
                  Core Modules
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Comprehensive healthcare management solutions with specialized modules for every department.
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {coreModules.map((module, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-gradient-to-b from-white to-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        {index === 0 && <Users className="w-6 h-6 text-white" />}
                        {index === 1 && <Bed className="w-6 h-6 text-white" />}
                        {index === 2 && <CreditCard className="w-6 h-6 text-white" />}
                        {index === 3 && <ShoppingCart className="w-6 h-6 text-white" />}
                        {index === 4 && <Microscope className="w-6 h-6 text-white" />}
                        {index === 5 && <ImageIcon className="w-6 h-6 text-white" />}
                        {index === 6 && <Scissors className="w-6 h-6 text-white" />}
                        {index === 7 && <User className="w-6 h-6 text-white" />}
                        {index === 8 && <Box className="w-6 h-6 text-white" />}
                        {index === 9 && <Settings className="w-6 h-6 text-white" />}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{module.title}</h3>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {module.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          </div>
                          <span className="text-gray-600 text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Technical Highlights Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                    Technical Highlights
                  </motion.h2>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-lg text-gray-600 mb-8 leading-relaxed"
                  >
                    Cutting-edge technology designed to meet the unique challenges of healthcare environments with reliability and security.
                  </motion.p>
                  
                  <motion.div 
                    variants={staggerChildren}
                    className="grid grid-cols-1 gap-4"
                  >
                    {technicalHighlights.map((highlight, index) => (
                      <motion.div 
                        key={index}
                        variants={fadeInUp}
                        className="flex items-center gap-4 p-4 rounded-lg bg-white border border-gray-200"
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                          <Zap className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="font-medium text-gray-900">{highlight}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
                
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className="relative"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                    <Image 
                      src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="HIMS Technical Highlights" 
                      width={600} 
                      height={400} 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* System Integrations Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="text-center mb-16"
              >
                <motion.h2 
                  variants={itemVariants}
                  className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
                >
                  Integrations Supported
                </motion.h2>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto"
                >
                  Seamless connectivity with existing hospital infrastructure for enhanced operational efficiency.
                </motion.p>
                
                <motion.div 
                  variants={staggerChildren}
                  className="max-w-4xl mx-auto space-y-4"
                >
                  {integrations.map((integration, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center gap-4 p-6 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200 shadow-sm"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium text-gray-900">{integration}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-lg text-gray-600 mt-8 max-w-3xl mx-auto"
                >
                  Creates a complete digital hospital ecosystem.
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* Benefits Section */}
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
                      src="https://images.unsplash.com/photo-1691934310598-27528df21f9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fEhvc3BpdGFsJTIwSW5mb3JtYXRpb24lMjBNYW5hZ2VtZW50JTIwU3lzdGVtfGVufDB8fDB8fHww" 
                      alt="Hospital HIMS Benefits" 
                      width={600} 
                      height={400} 
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
                    Benefits for Hospitals
                  </motion.h2>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-lg text-gray-600 mb-8 leading-relaxed"
                  >
                    Our Hospital Information Management System enhances healthcare delivery while improving operational efficiency.
                  </motion.p>
                  
                  <motion.div 
                    variants={staggerChildren}
                    className="grid grid-cols-1 gap-4"
                  >
                    {benefits.map((benefit, index) => (
                      <motion.div 
                        key={index}
                        variants={fadeInUp}
                        className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200"
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                          <Check className="h-5 w-5 text-white" />
                        </div>
                        <div className="font-medium text-gray-900">{benefit}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center text-white"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Healthcare Management?</h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
                  Contact our experts to discuss how our HIMS can enhance the efficiency of your healthcare facility.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact" 
                    className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg flex items-center justify-center"
                  >
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
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