"use client";

import { motion, Variants, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { 
  Building2, 
  Thermometer, 
  Lightbulb, 
  Lock, 
  BarChart3, 
  Smartphone, 
  CheckCircle,
  Download,
  FileText,
  Star,
  Zap,
  Shield,
  Users,
  TreePine,
  ArrowRight,
  Cpu,
  Database,
  Monitor,
  Wifi,
  Activity,
  Layers
} from "lucide-react";
import { SEO } from '@/components/seo/seo';

export default function MytenPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);
  
  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 60, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94]
      },
    },
  };

  const floatingVariants: Variants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants: Variants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const modules = [
    {
      name: "Access Control",
      description: "Secure access management with smart card and biometric authentication",
      icon: <Lock className="w-8 h-8" />,
      color: "from-[#1F6FEB] to-[#1F6FEB]",
      delay: 0
    },
    {
      name: "HVAC Management",
      description: "Intelligent climate control for optimal comfort and energy efficiency",
      icon: <Thermometer className="w-8 h-8" />,
      color: "from-[#FFB300] to-[#FFB300]",
      delay: 0.1
    },
    {
      name: "Lighting Control",
      description: "Smart lighting systems with automated scheduling and energy optimization",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "from-[#FFB300] to-[#FFB300]",
      delay: 0.2
    },
    {
      name: "Security Monitoring",
      description: "Comprehensive surveillance and intrusion detection systems",
      icon: <Shield className="w-8 h-8" />,
      color: "from-[#1F6FEB] to-[#1F6FEB]",
      delay: 0.3
    },
    {
      name: "Energy Analytics",
      description: "Real-time energy consumption monitoring and optimization insights",
      icon: <Zap className="w-8 h-8" />,
      color: "from-[#1F6FEB] to-[#1F6FEB]",
      delay: 0.4
    },
    {
      name: "User Management",
      description: "Centralized user access and permission management system",
      icon: <Users className="w-8 h-8" />,
      color: "from-[#FFB300] to-[#FFB300]",
      delay: 0.5
    }
  ];

  const specifications = [
    { label: "Processing Power", value: "Intel Xeon E5-2600 v4" },
    { label: "Memory", value: "Up to 128GB DDR4" },
    { label: "Storage", value: "SSD + HDD Hybrid" },
    { label: "Network", value: "Gigabit Ethernet" },
    { label: "Operating System", value: "Windows Server 2019" },
    { label: "Display Support", value: "Up to 4K Resolution" }
  ];

  const benefits = [
    "Reduced energy consumption by 30-40%",
    "Improved security with multi-factor authentication",
    "Centralized management of all building systems",
    "Real-time monitoring and alerts",
    "Scalable architecture for future expansion",
    "24/7 technical support and maintenance"
  ];

  return (
    <>
      <SEO 
        title="Myten - Advanced Displays & Data Storage Solutions"
        description="Myten offers innovative solutions in displays and data storage with high availability, scalability, and reliability for enterprise applications. Featuring LED walls, NAS solutions, and building management systems."
        path="/products/myten"
        image="/images/og-myten.jpg"
      />
      <div ref={containerRef} className="font-[Poppins,sans-serif] min-h-screen relative overflow-hidden">
      {/* Dynamic Background with Gradient Mesh */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0D1117] via-[#0D1117] to-[#0D1117] -z-20" />
      
      {/* Animated Background Orbs */}
      <motion.div 
        className="absolute top-20 left-20 w-96 h-96 rounded-full opacity-10 -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(31, 111, 235, 0.4) 0%, rgba(31, 111, 235, 0.2) 50%, transparent 70%)',
          filter: 'blur(40px)'
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-20 w-80 h-80 rounded-full opacity-10 -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(255, 179, 0, 0.4) 0%, rgba(31, 111, 235, 0.2) 50%, transparent 70%)',
          filter: 'blur(50px)'
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.8, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full opacity-5 -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(31, 111, 235, 0.4) 0%, rgba(255, 179, 0, 0.2) 50%, transparent 70%)',
          filter: 'blur(60px)'
        }}
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -30, 30, 0],
          scale: [1, 1.1, 0.9, 1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating Geometric Shapes */}
      {isLoaded && [
        { size: 'w-4 h-4', top: '20%', left: '10%', delay: 0 },
        { size: 'w-6 h-6', top: '60%', left: '80%', delay: 2 },
        { size: 'w-3 h-3', top: '80%', left: '20%', delay: 4 },
        { size: 'w-5 h-5', top: '30%', left: '70%', delay: 1 },
        { size: 'w-4 h-4', top: '50%', left: '5%', delay: 3 }
      ].map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.size} bg-gradient-to-r from-[#1F6FEB] to-[#1F6FEB] rounded-full opacity-60 -z-10`}
          style={{ top: shape.top, left: shape.left }}
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
            rotate: [0, 180, 360],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay
          }}
        />
      ))}
      
      {/* Mouse Follow Effect */}
      <motion.div
        className="fixed w-96 h-96 rounded-full pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(31, 111, 235, 0.1) 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 -z-10" />

      <main className="relative text-[#C9D1D9] z-10">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-center py-32 px-4">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              <motion.h1
                className="text-7xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1F6FEB] via-[#1F6FEB] to-[#FFB300]"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200% 200%'
                }}
              >
                Myten
              </motion.h1>
              
              {/* Floating particles around title */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-[#1F6FEB] to-[#1F6FEB] rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`
                  }}
                  animate={{
                    y: [-20, 20, -20],
                    x: [-10, 10, -10],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </AnimatePresence>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="relative max-w-4xl"
          >
            <motion.p
              className="text-xl md:text-2xl text-[#C9D1D9] leading-relaxed"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              Explore innovative solutions in{" "}
              <motion.span 
                className="font-semibold bg-gradient-to-r from-[#1F6FEB] to-[#1F6FEB] bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity
                }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Displays & Data Storage
              </motion.span>{" "}
              with Myten — delivering high availability, scalability, and reliability for enterprise applications.
            </motion.p>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-[#1F6FEB] rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-[#1F6FEB] rounded-full mt-2"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </section>

        {/* Key Features Section */}
        <section className="py-20 px-6 md:px-16 relative">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#1F6FEB]/5 to-[#FFB300]/5 rounded-3xl backdrop-blur-sm"
            variants={pulseVariants}
            animate="animate"
          />
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 relative z-10"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-[#1F6FEB] via-[#1F6FEB] to-[#FFB300] bg-clip-text text-transparent">
              Key Features
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-8">
              {[
                { title: "High Availability", desc: "Minimizes downtime, ensuring continuous data availability.", icon: Activity },
                { title: "Active-Active/Passive Controllers", desc: "Both controllers operate in active-active or active-passive mode.", icon: Cpu },
                { title: "Scalability", desc: "Easily expandable with additional drives or units without downtime.", icon: Layers },
                { title: "Data Integrity", desc: "Advanced error correction and scrubbing to maintain data integrity.", icon: Database }
              ].map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={i}
                    className="group relative"
                    initial={{ opacity: 0, x: -60, rotateY: -45 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <div className="flex items-start space-x-6 bg-gradient-to-br from-[#0D1117] to-[#0D1117] p-8 rounded-2xl shadow-2xl backdrop-blur-sm border border-[#1F6FEB]/20 hover:border-[#1F6FEB]/40 transition-all duration-500">
                      <motion.div 
                        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#1F6FEB] to-[#1F6FEB] text-white font-bold shadow-lg"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <IconComponent className="w-8 h-8" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-[#1F6FEB] mb-3 group-hover:text-[#1F6FEB] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-[#C9D1D9] text-lg leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1F6FEB]/20 to-[#1F6FEB]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.5, rotateY: 45 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.div
                className="w-full h-96 bg-gradient-to-br from-[#1F6FEB]/30 to-[#1F6FEB]/30 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-[#1F6FEB]/30 shadow-2xl"
                variants={floatingVariants}
                animate="animate"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <BarChart3 className="w-32 h-32 text-[#1F6FEB]" />
                </motion.div>
              </motion.div>
              
              {/* Orbiting elements */}
              {[Monitor, Database, Wifi].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="absolute w-12 h-12 bg-gradient-to-r from-[#1F6FEB] to-[#1F6FEB] rounded-full flex items-center justify-center shadow-lg"
                  style={{
                    top: '50%',
                    left: '50%',
                    marginTop: '-24px',
                    marginLeft: '-24px'
                  }}
                  animate={{
                    rotate: 360,
                    x: Math.cos((index * 120) * Math.PI / 180) * 150,
                    y: Math.sin((index * 120) * Math.PI / 180) * 150
                  }}
                  transition={{
                    duration: 10 + index * 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Active LED Wall Section */}
        <section className="py-24 px-6 md:px-16 relative">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#0D1117]/50 to-[#0D1117]/50 backdrop-blur-sm rounded-3xl"
            variants={pulseVariants}
            animate="animate"
          />
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 relative z-10"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-[#1F6FEB] via-[#1F6FEB] to-[#FFB300] bg-clip-text text-transparent">
              Active LED Wall
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              className="relative order-2 md:order-1"
              initial={{ opacity: 0, scale: 0.5, rotateY: -45 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.div
                className="w-full h-96 bg-gradient-to-br from-[#1F6FEB]/30 to-[#1F6FEB]/30 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-[#1F6FEB]/30 shadow-2xl relative overflow-hidden"
                variants={floatingVariants}
                animate="animate"
              >
                {/* LED Grid Effect */}
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-2 p-4">
                  {[...Array(48)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="bg-[#1F6FEB]/20 rounded-sm"
                      animate={{
                        opacity: [0.2, 1, 0.2],
                        backgroundColor: [
                          'rgba(31, 111, 235, 0.2)',
                          'rgba(31, 111, 235, 0.8)',
                          'rgba(255, 179, 0, 0.4)',
                          'rgba(31, 111, 235, 0.2)'
                        ]
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
                
                <motion.div
                  animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="relative z-10"
                >
                  <Lightbulb className="w-32 h-32 text-[#1F6FEB]" />
                </motion.div>
              </motion.div>
            </motion.div>

            <div className="space-y-8 order-1 md:order-2">
              {[
                { title: "High Brightness", desc: "5000-8000 nits or more for outdoor visibility.", color: "from-[#FFB300] to-[#FFB300]" },
                { title: "IP Rating", desc: "IP65/66/67 protection against extreme conditions.", color: "from-[#1F6FEB] to-[#1F6FEB]" },
                { title: "Durable Build", desc: "Withstands harsh weather for long-term use.", color: "from-[#1F6FEB] to-[#1F6FEB]" },
                { title: "Front/Rear Access", desc: "Efficient and flexible maintenance options.", color: "from-[#FFB300] to-[#FFB300]" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="group relative"
                  initial={{ opacity: 0, x: 60, rotateY: 45 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ scale: 1.02, x: -10 }}
                >
                  <div className="flex items-start space-x-6 bg-gradient-to-br from-[#0D1117] to-[#0D1117] p-8 rounded-2xl shadow-2xl backdrop-blur-sm border border-[#1F6FEB]/20 hover:border-[#1F6FEB]/40 transition-all duration-500">
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: 180, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-[#1F6FEB] mb-3 group-hover:text-[#1F6FEB] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[#C9D1D9] text-lg leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl rounded-2xl -z-10`} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PDF Downloads Section */}
        <section className="py-20 px-6 md:px-16 relative">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#0D1117]/30 to-[#0D1117]/30 backdrop-blur-sm rounded-3xl"
            variants={pulseVariants}
            animate="animate"
          />
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 relative z-10"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-[#1F6FEB] via-[#1F6FEB] to-[#FFB300] bg-clip-text text-transparent">
              Downloads
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {[
              { title: "NAS Solution", file: "Myten-ASSV-E24C2R.pdf", icon: FileText, color: "from-[#1F6FEB] to-[#1F6FEB]" },
              { title: "Active LED Wall", file: "Active-LED-Wall.pdf", icon: Lightbulb, color: "from-[#FFB300] to-[#FFB300]" },
              { title: "Video Wall Tech", file: "Video-Wall-Tech.pdf", icon: BarChart3, color: "from-[#1F6FEB] to-[#1F6FEB]" }
            ].map((doc, i) => {
              const IconComponent = doc.icon;
              return (
                <motion.div
                  key={i}
                  className="group relative perspective-1000"
                  initial={{ opacity: 0, y: 60, rotateX: 45 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    z: 50
                  }}
                >
                  <div className="bg-gradient-to-br from-[#0D1117]/80 to-[#0D1117]/80 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm border border-[#1F6FEB]/20 hover:border-[#1F6FEB]/40 transition-all duration-500 transform-gpu">
                    <motion.div 
                      className={`w-full h-48 bg-gradient-to-br ${doc.color} bg-opacity-20 flex items-center justify-center relative overflow-hidden`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="w-full h-full" style={{
                          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
                          backgroundSize: '20px 20px'
                        }} />
                      </div>
                      
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="relative z-10"
                      >
                        <IconComponent className="w-16 h-16 text-white" />
                      </motion.div>
                      
                      {/* Floating particles */}
                      {[...Array(5)].map((_, idx) => (
                        <motion.div
                          key={idx}
                          className="absolute w-1 h-1 bg-white/60 rounded-full"
                          style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`
                          }}
                          animate={{
                            y: [-10, 10, -10],
                            opacity: [0.6, 1, 0.6]
                          }}
                          transition={{
                            duration: 2 + idx * 0.5,
                            repeat: Infinity,
                            delay: idx * 0.3
                          }}
                        />
                      ))}
                    </motion.div>
                    
                    <div className="flex items-center justify-between p-6">
                      <h3 className="text-xl font-semibold text-[#C9D1D9] group-hover:text-[#1F6FEB] transition-colors">
                        {doc.title}
                      </h3>
                      
                      <motion.a
                        href={`/pdf/${doc.file}`}
                        download
                        className="flex items-center text-[#1F6FEB] hover:text-[#1F6FEB] transition-all duration-300 bg-[#1F6FEB]/10 px-4 py-2 rounded-lg hover:bg-[#1F6FEB]/20"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.div
                          animate={{ y: [0, -2, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <Download className="w-5 h-5 mr-2" />
                        </motion.div>
                        Download
                      </motion.a>
                    </div>
                  </div>
                  
                  {/* Card glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${doc.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl rounded-2xl -z-10`} />
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Products & Partners Section */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className="text-center mb-20"
            >
              <motion.h2 
                variants={itemVariants} 
                className="text-5xl md:text-6xl font-bold mb-8"
              >
                <span className="bg-gradient-to-r from-[#1F6FEB] via-[#1F6FEB] to-[#FFB300] bg-clip-text text-transparent">
                  Products & Solutions
                </span>
              </motion.h2>
              
              <motion.p 
                variants={itemVariants} 
                className="text-2xl text-[#C9D1D9] max-w-3xl mx-auto leading-relaxed"
              >
                Premium products from leading technology partners
              </motion.p>
            </motion.div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-16"
            >
              {/* Displays & Visualization */}
              <motion.div 
                variants={itemVariants} 
                className="group relative perspective-1000"
              >
                <motion.div 
                  className="bg-[#0D1117]/10 backdrop-blur-md border border-[#0D1117]/30 rounded-3xl shadow-2xl p-10 hover:shadow-[#1F6FEB]/25 transition-all duration-500"
                  whileHover={{ scale: 1.02, rotateX: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-[#1F6FEB] to-[#1F6FEB] rounded-2xl flex items-center justify-center shadow-lg"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Lightbulb className="w-6 h-6 text-white" />
                    </motion.div>
                    
                    <h3 className="text-3xl font-bold text-[#C9D1D9] group-hover:text-[#1F6FEB] transition-colors">
                      Displays & Visualization
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      { name: "Samsung", desc: "Professional displays for building visualization and information systems", color: "from-[#1F6FEB] to-[#1F6FEB]" },
                      { name: "Panasonic", desc: "High-quality displays for building management interfaces", color: "from-[#1F6FEB] to-[#1F6FEB]" },
                      { name: "Xtreme Media", desc: "Flight Information Display Software & Active LED Displays", color: "from-[#1F6FEB] to-[#1F6FEB]" }
                    ].map((partner, index) => (
                      <motion.div
                        key={index}
                        className="group/card relative"
                        initial={{ opacity: 0, y: 50, rotateX: 45 }}
                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        whileHover={{ 
                          scale: 1.05, 
                          rotateY: 5,
                          z: 20
                        }}
                      >
                        <div className="bg-gradient-to-br from-[#0D1117]/10 to-[#0D1117]/10 backdrop-blur-sm rounded-2xl p-8 border border-[#0D1117]/20 hover:border-[#1F6FEB]/40 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                          <motion.div
                            className={`w-12 h-12 bg-gradient-to-r ${partner.color} rounded-xl mb-4 flex items-center justify-center shadow-lg`}
                            whileHover={{ rotate: 180, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Building2 className="w-6 h-6 text-white" />
                          </motion.div>
                          
                          <h4 className="font-semibold text-xl text-[#C9D1D9] mb-3 group-hover/card:text-[#1F6FEB] transition-colors">
                            {partner.name}
                          </h4>
                          
                          <p className="text-[#C9D1D9] text-sm leading-relaxed group-hover/card:text-[#C9D1D9] transition-colors">
                            {partner.desc}
                          </p>
                        </div>
                        
                        {/* Card glow effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${partner.color} opacity-0 group-hover/card:opacity-20 transition-opacity duration-500 blur-xl rounded-2xl -z-10`} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Servers & Storage */}
              <motion.div 
                variants={itemVariants} 
                className="group relative perspective-1000"
              >
                <motion.div 
                  className="bg-[#0D1117]/10 backdrop-blur-md border border-[#0D1117]/30 rounded-3xl shadow-2xl p-10 hover:shadow-[#1F6FEB]/25 transition-all duration-500"
                  whileHover={{ scale: 1.02, rotateX: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-[#1F6FEB] to-[#1F6FEB] rounded-2xl flex items-center justify-center shadow-lg"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <BarChart3 className="w-6 h-6 text-white" />
                    </motion.div>
                    
                    <h3 className="text-3xl font-bold text-[#C9D1D9] group-hover:text-[#1F6FEB] transition-colors">
                      Servers & Storage
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      { name: "HPE", desc: "Enterprise servers and storage solutions for building management data", color: "from-[#FFB300] to-[#FFB300]" },
                      { name: "Dell", desc: "Reliable servers and storage infrastructure for smart buildings", color: "from-[#1F6FEB] to-[#1F6FEB]" },
                      { name: "Spectra", desc: "Advanced storage solutions for building automation systems", color: "from-[#1F6FEB] to-[#1F6FEB]" }
                    ].map((partner, index) => (
                      <motion.div
                        key={index}
                        className="group/card relative"
                        initial={{ opacity: 0, y: 50, rotateX: 45 }}
                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        whileHover={{ 
                          scale: 1.05, 
                          rotateY: 5,
                          z: 20
                        }}
                      >
                        <div className="bg-gradient-to-br from-[#0D1117]/10 to-[#0D1117]/10 backdrop-blur-sm rounded-2xl p-8 border border-[#0D1117]/20 hover:border-[#1F6FEB]/40 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                          <motion.div
                            className={`w-12 h-12 bg-gradient-to-r ${partner.color} rounded-xl mb-4 flex items-center justify-center shadow-lg`}
                            whileHover={{ rotate: 180, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Database className="w-6 h-6 text-white" />
                          </motion.div>
                          
                          <h4 className="font-semibold text-xl text-[#C9D1D9] mb-3 group-hover/card:text-[#1F6FEB] transition-colors">
                            {partner.name}
                          </h4>
                          
                          <p className="text-[#C9D1D9] text-sm leading-relaxed group-hover/card:text-[#C9D1D9] transition-colors">
                            {partner.desc}
                          </p>
                        </div>
                        
                        {/* Card glow effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${partner.color} opacity-0 group-hover/card:opacity-20 transition-opacity duration-500 blur-xl rounded-2xl -z-10`} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Modules Section */}
        <section className="py-24 relative">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#0D1117]/5 to-[#1F6FEB]/10 rounded-3xl backdrop-blur-sm mx-4"
            variants={pulseVariants}
            animate="animate"
          />
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.h2 
                variants={itemVariants} 
                className="text-4xl md:text-5xl font-bold text-center mb-16"
              >
                <span className="bg-gradient-to-r from-[#1F6FEB] via-[#1F6FEB] to-[#FFB300] bg-clip-text text-transparent">
                  System Modules
                </span>
              </motion.h2>
              
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
              >
                {modules.map((module, index) => (
                  <motion.div
                    key={index}
                    className="group relative perspective-1000"
                    initial={{ 
                      opacity: 0, 
                      y: 100,
                      rotateX: 45,
                      scale: 0.8
                    }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      rotateX: 0,
                      scale: 1
                    }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: module.delay, 
                      duration: 0.8,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      rotateY: 5,
                      z: 50
                    }}
                  >
                    <div className="bg-gradient-to-br from-[#0D1117]/10 to-[#0D1117]/10 backdrop-blur-sm rounded-2xl p-8 border border-[#0D1117]/20 hover:border-[#1F6FEB]/40 shadow-2xl hover:shadow-[#1F6FEB]/25 transition-all duration-500 transform-gpu h-full">
                      <motion.div 
                        className={`text-[#1F6FEB] mb-6 p-4 rounded-xl bg-gradient-to-br ${module.color} bg-opacity-20 w-fit`}
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.1
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        {module.icon}
                      </motion.div>
                      
                      <h3 className="text-xl font-semibold text-[#C9D1D9] mb-4 group-hover:text-[#1F6FEB] transition-colors">
                        {module.name}
                      </h3>
                      
                      <p className="text-[#C9D1D9] text-sm leading-relaxed group-hover:text-[#C9D1D9] transition-colors">
                        {module.description}
                      </p>
                      
                      {/* Card glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl rounded-2xl -z-10`} />
                      
                      {/* Floating particles on hover */}
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-[#1F6FEB] rounded-full"
                            style={{
                              top: `${Math.random() * 100}%`,
                              left: `${Math.random() * 100}%`
                            }}
                            animate={{
                              y: [-10, -30, -10],
                              opacity: [0, 1, 0],
                              scale: [0, 1, 0]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.2
                            }}
                          />
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div 
                  variants={itemVariants} 
                  className="space-y-8"
                >
                  <h3 className="text-3xl font-bold mb-8">
                    <span className="bg-gradient-to-r from-[#1F6FEB] to-[#1F6FEB] bg-clip-text text-transparent">
                      System Specifications
                    </span>
                  </h3>
                  
                  {specifications.map((spec, index) => (
                    <motion.div 
                      key={index} 
                      className="flex justify-between items-center py-4 px-6 bg-[#0D1117]/50 rounded-xl backdrop-blur-sm border border-[#0D1117]/50 hover:border-[#1F6FEB]/50 transition-all duration-300 group"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                    >
                      <span className="font-medium text-[#C9D1D9] group-hover:text-[#C9D1D9] transition-colors">
                        {spec.label}
                      </span>
                      <span className="text-[#1F6FEB] font-semibold group-hover:text-[#1F6FEB] transition-colors">
                        {spec.value}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div 
                  variants={itemVariants} 
                  className="bg-gradient-to-br from-[#1F6FEB]/10 to-[#1F6FEB]/10 backdrop-blur-sm rounded-3xl p-8 border border-[#1F6FEB]/30 shadow-2xl"
                >
                  <h3 className="text-3xl font-bold mb-8">
                    <span className="bg-gradient-to-r from-[#FFB300] to-[#FFB300] bg-clip-text text-transparent">
                      Key Benefits
                    </span>
                  </h3>
                  
                  <ul className="space-y-6">
                    {benefits.map((benefit, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start gap-4 group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ x: 10 }}
                      >
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.5 }}
                        >
                          <CheckCircle className="w-6 h-6 text-[#FFB300] mt-0.5 flex-shrink-0" />
                        </motion.div>
                        <span className="text-[#C9D1D9] leading-relaxed group-hover:text-[#C9D1D9] transition-colors">
                          {benefit}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ROI Calculator Section */}
        <section className="py-24 relative">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="relative"
            >
              {/* Background with animated gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#1F6FEB]/20 via-[#1F6FEB]/20 to-[#FFB300]/20 rounded-3xl backdrop-blur-sm border border-[#0D1117]/30"
                animate={{
                  background: [
                    'linear-gradient(45deg, rgba(31, 111, 235, 0.2), rgba(31, 111, 235, 0.2), rgba(31, 111, 235, 0.2))',
                    'linear-gradient(90deg, rgba(31, 111, 235, 0.2), rgba(255, 179, 0, 0.2), rgba(31, 111, 235, 0.2))',
                    'linear-gradient(135deg, rgba(255, 179, 0, 0.2), rgba(31, 111, 235, 0.2), rgba(255, 179, 0, 0.2))'
                  ]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative z-10 p-12">
                <motion.h2 
                  variants={itemVariants} 
                  className="text-4xl md:text-5xl font-bold text-center mb-8"
                >
                  <span className="bg-gradient-to-r from-[#1F6FEB] via-[#1F6FEB] to-[#FFB300] bg-clip-text text-transparent">
                    Calculate Your Savings
                  </span>
                </motion.h2>
                
                <motion.p 
                  variants={itemVariants} 
                  className="text-xl text-[#C9D1D9] mb-12 max-w-2xl mx-auto text-center leading-relaxed"
                >
                  See how Myten can reduce your building operational costs and improve efficiency
                </motion.p>
                
                <motion.div 
                  variants={itemVariants} 
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
                >
                  {[
                    { value: "30-40%", label: "Energy Savings", color: "from-[#1F6FEB] to-[#1F6FEB]", icon: Zap },
                    { value: "25%", label: "Maintenance Reduction", color: "from-[#1F6FEB] to-[#1F6FEB]", icon: Shield },
                    { value: "18 months", label: "Average ROI", color: "from-[#FFB300] to-[#FFB300]", icon: BarChart3 }
                  ].map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                      <motion.div
                        key={index}
                        className="group relative"
                        initial={{ opacity: 0, y: 50, rotateX: 45 }}
                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.8 }}
                        whileHover={{ 
                          scale: 1.05, 
                          rotateY: 5,
                          z: 30
                        }}
                      >
                        <div className="text-center bg-[#0D1117]/10 backdrop-blur-sm rounded-2xl p-8 border border-[#0D1117]/20 hover:border-[#C9D1D9]/40 transition-all duration-500 shadow-2xl">
                          <motion.div
                            className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center shadow-lg`}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <IconComponent className="w-8 h-8 text-white" />
                          </motion.div>
                          
                          <motion.div 
                            className="text-4xl font-bold mb-3"
                            animate={{ 
                              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity
                            }}
                            style={{
                              background: `linear-gradient(90deg, ${stat.color.split(' ')[1]}, ${stat.color.split(' ')[3]}, ${stat.color.split(' ')[1]})`,
                              backgroundSize: '200% 200%',
                              backgroundClip: 'text',
                              WebkitBackgroundClip: 'text',
                              color: 'transparent'
                            }}
                          >
                            {stat.value}
                          </motion.div>
                          
                          <div className="text-[#C9D1D9] group-hover:text-[#C9D1D9] transition-colors">
                            {stat.label}
                          </div>
                        </div>
                        
                        {/* Hover glow effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl rounded-2xl -z-10`} />
                      </motion.div>
                    );
                  })}
                </motion.div>

                <motion.div 
                  variants={itemVariants} 
                  className="flex flex-col sm:flex-row gap-6 justify-center"
                >
                  <motion.button 
                    className="group relative bg-gradient-to-r from-[#1F6FEB] to-[#1F6FEB] text-white px-10 py-5 rounded-2xl font-semibold shadow-2xl overflow-hidden"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(31, 111, 235, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#1F6FEB] to-[#1F6FEB] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Get ROI Report
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </span>
                  </motion.button>
                  
                  <Link href="/contact">
                    <motion.div
                      className="group border border-[#C9D1D9]/50 text-[#C9D1D9] px-10 py-5 rounded-2xl font-semibold hover:bg-[#1F6FEB]/10 transition-all duration-300 text-center backdrop-blur-sm"
                      whileHover={{ 
                        scale: 1.05,
                        borderColor: 'rgba(201, 209, 217, 0.8)',
                        color: 'rgba(201, 209, 217, 1)'
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Schedule Consultation
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
              
              {/* Floating elements */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-[#1F6FEB] rounded-full opacity-60"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`
                  }}
                  animate={{
                    y: [-20, 20, -20],
                    x: [-10, 10, -10],
                    opacity: [0.6, 1, 0.6],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </div>
    </>
  );
}