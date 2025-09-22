'use client';

import { motion, useInView, Variants } from 'framer-motion';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import {
  Search,
  Settings,
  Headphones,
  Zap,
  Shield,
  Cpu,
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Play,
  BookOpen,
  Award,
  Lightbulb
} from "lucide-react";

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeStep, setActiveStep] = useState(0);

  const storySteps = [
    {
      id: 1,
      title: "The Challenge",
      subtitle: "Understanding Your Needs",
      description: "Every great partnership begins with understanding. We start by listening to your unique challenges and goals, diving deep into your current infrastructure to identify opportunities for improvement.",
      icon: Search,
      color: "from-blue-500 to-orange-500",
      content: "Our discovery phase is where we build the foundation for success. Through comprehensive assessments and collaborative workshops, we map out your technology landscape and align on measurable outcomes.",
      benefits: [
        "Comprehensive needs assessment",
        "Current infrastructure analysis",
        "Goal alignment workshop",
        "Risk identification"
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      title: "The Plan",
      subtitle: "Crafting Your Solution",
      description: "With insights in hand, we design a tailored strategy that addresses your specific requirements. Our architects create a blueprint that balances innovation with practicality, ensuring seamless integration.",
      icon: Settings,
      color: "from-blue-500 to-orange-500",
      content: "We believe in transparency and collaboration. Our detailed implementation plan outlines every step, timeline, and milestone, giving you complete visibility into the transformation journey ahead.",
      benefits: [
        "Custom solution architecture",
        "Detailed project roadmap",
        "Resource planning",
        "Timeline optimization"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80"
    },
    {
      id: 3,
      title: "The Execution",
      subtitle: "Bringing Vision to Life",
      description: "Our expert team deploys your solution with precision, minimizing disruption to your operations. We maintain constant communication throughout the process, ensuring alignment with your expectations.",
      icon: Zap,
      color: "from-blue-500 to-orange-500",
      content: "During implementation, our certified professionals work tirelessly to bring your vision to life. With rigorous testing protocols and quality checks, we ensure every component performs flawlessly.",
      benefits: [
        "Seamless deployment process",
        "Minimal operational disruption",
        "Continuous progress updates",
        "Rigorous quality assurance"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 4,
      title: "The Results",
      subtitle: "Ongoing Excellence",
      description: "The journey doesn't end at implementation. We provide comprehensive training, 24/7 support, and continuous optimization to ensure you maximize the value of your investment.",
      icon: TrendingUp,
      color: "from-blue-500 to-orange-500",
      content: "Our commitment extends far beyond project completion. With proactive monitoring, regular performance reviews, and ongoing enhancements, we ensure your technology continues to drive results.",
      benefits: [
        "Comprehensive team training",
        "24/7 dedicated support",
        "Performance monitoring",
        "Continuous improvement"
      ],
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  const storyElements = [
    {
      title: "Our Partnership Philosophy",
      description: "We don't just deliver technology solutions - we become your long-term technology partner, invested in your success.",
      icon: Users,
      color: "from-blue-400 to-orange-400",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Proven Methodology",
      description: "Our time-tested approach has delivered exceptional results for hundreds of clients across diverse industries.",
      icon: Award,
      color: "from-blue-400 to-orange-400",
      image: "https://images.unsplash.com/photo-1552664196-f6b40617a25d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
      title: "Continuous Innovation",
      description: "We stay ahead of technology trends to ensure your solutions remain cutting-edge and future-proof.",
      icon: Lightbulb,
      color: "from-blue-400 to-orange-400",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  // Animation variants
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const staggerItem: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Icon animation variants
  const iconVariants: Variants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.2, 
      rotate: 360,
      transition: { 
        duration: 0.8,
        ease: "easeInOut"
      } 
    },
    tap: { 
      scale: 0.95, 
      rotate: -10,
      transition: { 
        duration: 0.2,
        ease: "backIn"
      } 
    }
  };

  // Continuous subtle animation for icons
  const floatingAnimation: Variants = {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  // Custom animation for story cards
  const storyCardVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    show: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      } 
    },
    hover: { 
      y: -10, 
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      } 
    }
  };

  // Timeline connector animation
  const timelineConnectorVariants: Variants = {
    hidden: { width: 0 },
    show: { 
      width: "100%", 
      transition: { 
        duration: 1,
        ease: "easeInOut"
      } 
    }
  };

  return (
    <section
      ref={ref}
      aria-labelledby="process-heading"
      className="relative w-full py-20 md:py-28 overflow-hidden bg-gradient-to-br from-[#f7fafc] via-[#e3e8ee] to-[#f7fafc] text-[#232946]"
    >
      {/* Animated background with gradient layers and floating shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e3e8ee]/90 via-[#f7fafc]/90 to-[#f7fafc]/90"></div>
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: ``
            }}
          ></div>
        </div>
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-[#ff7849]/10 blur-3xl"
          animate={{ x: [0, 60, 0], y: [0, -60, 0] }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full bg-[#3b82f6]/10 blur-3xl"
          animate={{ x: [0, -60, 0], y: [0, 60, 0] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-[#3b82f6]/20"></div>
        <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-[#ff7849]/20"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-[#3b82f6]/20"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-[#ff7849]/20"></div>

        {/* Header */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#ff7849]/20 to-[#3b82f6]/20 backdrop-blur-lg border border-[#ff7849]/30 rounded-full px-7 py-4 mb-8 shadow-xl">
            <motion.div
              className="w-3 h-3 rounded-full bg-gradient-to-r from-[#ff7849] to-[#3b82f6] animate-pulse"
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.div>
            <div className="w-2 h-2 rounded-full bg-[#ff7849]"></div>
            <span className="text-[#ff7849] text-sm font-semibold tracking-wider uppercase">Our Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            <span className="block text-[#232946] mb-3">
              <span className="bg-gradient-to-r from-[#ff7849] to-[#3b82f6] bg-clip-text text-transparent">
                The Technify
              </span>
            </span>
            <span className="block bg-gradient-to-r from-[#ff7849] to-[#3b82f6] bg-clip-text text-transparent">
              Transformation Story
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-[#4b5563] max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
            Discover how we partner with clients to transform challenges into opportunities through innovative technology solutions.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mb-24">
          <div className="flex justify-center mb-16">
            <div className="flex items-center">
              {storySteps.map((step, index) => (
                <React.Fragment key={step.id}>
                  <div className="flex flex-col items-center">
                    <motion.div
                      className={`relative w-12 h-12 rounded-full flex items-center justify-center cursor-pointer ${
                        activeStep === index
                          ? `bg-gradient-to-r from-[#ff7849] to-[#3b82f6] shadow-lg`
                          : 'bg-white border-2 border-[#3b82f6]/30'
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setActiveStep(index)}
                    >
                      {activeStep === index ? (
                        <Play className="w-5 h-5 text-white fill-current" />
                      ) : (
                        <span className="text-[#232946] font-bold">{step.id}</span>
                      )}
                    </motion.div>
                    <div className="mt-3 text-center max-w-[120px]">
                      <h4 className={`font-bold text-sm ${
                        activeStep === index ? 'text-[#232946]' : 'text-[#9ca3af]'
                      }`}>
                        {step.title}
                      </h4>
                    </div>
                  </div>
                  {index < storySteps.length - 1 && (
                    <div className="flex items-center mx-2">
                      <motion.div
                        className={`h-1 ${
                          activeStep > index
                            ? `bg-gradient-to-r from-[#ff7849] to-[#3b82f6]`
                            : 'bg-[#e5e7eb]'
                        }`}
                        variants={timelineConnectorVariants}
                        initial="hidden"
                        animate={activeStep >= index ? "show" : "hidden"}
                      ></motion.div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Active story step details */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/90 backdrop-blur-xl rounded-3xl border border-[#ff7849]/30 p-8 md:p-12 mb-16 shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className={`relative w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-r from-[#ff7849] to-[#3b82f6]`}
                    whileHover="hover"
                    whileTap="tap"
                    initial="initial"
                    variants={iconVariants}
                  >
                    <motion.div
                      variants={floatingAnimation}
                      animate="animate"
                    >
                      {React.createElement(storySteps[activeStep].icon, { className: "w-8 h-8 text-white" })}
                    </motion.div>
                  </motion.div>
                  <div>
                    <span className="text-[#ff7849] font-medium">{storySteps[activeStep].title}</span>
                    <h3 className="text-3xl font-bold text-[#232946]">{storySteps[activeStep].subtitle}</h3>
                  </div>
                </div>
                <p className="text-xl text-[#4b5563] mb-6 leading-relaxed">
                  {storySteps[activeStep].description}
                </p>
                <p className="text-[#6b7280] mb-8">
                  {storySteps[activeStep].content}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {storySteps[activeStep].benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#ff7849] flex-shrink-0" />
                      <span className="text-[#232946]">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="relative h-80 rounded-2xl overflow-hidden border border-[#ff7849]/30 shadow-lg">
                  <Image
                    src={storySteps[activeStep].image}
                    alt={`${storySteps[activeStep].title} illustration`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-r from-[#ff7849]/20 to-[#3b82f6]/20 blur-2xl"></div>
              </div>
            </div>
          </motion.div>

          {/* Story steps navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {storySteps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={storyCardVariants}
                initial="hidden"
                whileInView="show"
                whileHover="hover"
                viewport={{ once: true }}
                onClick={() => setActiveStep(index)}
                className={`group relative cursor-pointer ${activeStep === index ? 'ring-2 ring-[#ff7849]' : ''}`}
              >
                <div className="relative p-6 rounded-2xl border border-[#ff7849]/30 bg-white/80 backdrop-blur-xl shadow-lg transition-all duration-500 h-full hover:bg-gradient-to-br hover:from-[#ff7849]/10 hover:to-[#3b82f6]/10">
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r from-[#ff7849] to-[#3b82f6]`}>
                      <span className="text-white font-bold">{step.id}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#232946] mb-2 group-hover:text-[#ff7849] transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-[#6b7280] text-sm">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5 text-[#ff7849]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Story elements section */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-[#232946] mb-4">
              <span className="bg-gradient-to-r from-[#ff7849] to-[#3b82f6] bg-clip-text text-transparent">
                What Makes Our Story Different
              </span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ff7849] via-[#3b82f6] to-[#ff7849] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-[#4b5563] max-w-2xl mx-auto">
              The elements that define our unique approach to technology transformation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {storyElements.map((element, index) => {
              const Icon = element.icon;
              return (
                <motion.div
                  key={element.title}
                  variants={staggerItem}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className="relative p-8 rounded-3xl border border-[#ff7849]/30 bg-white/80 backdrop-blur-xl shadow-lg transition-all duration-500 h-full overflow-hidden hover:bg-gradient-to-br hover:from-[#ff7849]/10 hover:to-[#3b82f6]/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff7849]/10 to-[#3b82f6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative h-40 rounded-xl overflow-hidden mb-6 border border-[#ff7849]/30">
                      <Image
                        src={element.image}
                        alt={`${element.title} illustration`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <motion.div
                      className={`relative w-16 h-16 rounded-2xl bg-gradient-to-r from-[#ff7849] to-[#3b82f6] flex items-center justify-center mb-6 border border-[#ff7849]/30`}
                      whileHover="hover"
                      whileTap="tap"
                      initial="initial"
                      variants={iconVariants}
                    >
                      <motion.div
                        variants={floatingAnimation}
                        animate="animate"
                      >
                        <Icon className="w-8 h-8 text-white group-hover:text-[#ff7849] transition-colors duration-300" />
                      </motion.div>
                    </motion.div>
                    <h4 className="text-xl font-bold text-[#232946] mb-4 group-hover:text-[#ff7849] transition-colors duration-300">
                      {element.title}
                    </h4>
                    <p className="text-[#4b5563] leading-relaxed">
                      {element.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}