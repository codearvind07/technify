'use client';

import { motion, useInView, Variants } from 'framer-motion';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import {
  Search,
  Settings,
  Zap,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Lightbulb,
  Play
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
      description:
        "Every great partnership begins with understanding. We start by listening to your unique challenges and goals.",
      icon: Search,
      content:
        "Our discovery phase includes assessments and workshops to map out your technology landscape.",
      benefits: [
        "Comprehensive needs assessment",
        "Current infrastructure analysis",
        "Goal alignment workshop",
        "Risk identification"
      ],
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      title: "The Plan",
      subtitle: "Crafting Your Solution",
      description:
        "With insights in hand, we design a tailored strategy that fits your needs and goals.",
      icon: Settings,
      content:
        "We outline a detailed implementation plan with steps, milestones, and complete visibility.",
      benefits: [
        "Custom solution architecture",
        "Detailed project roadmap",
        "Resource planning",
        "Timeline optimization"
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1415&q=80"
    },
    {
      id: 3,
      title: "The Execution",
      subtitle: "Bringing Vision to Life",
      description:
        "Our expert team deploys your solution with precision and minimal disruption.",
      icon: Zap,
      content:
        "Certified professionals ensure flawless implementation with testing and quality checks.",
      benefits: [
        "Seamless deployment process",
        "Minimal operational disruption",
        "Continuous progress updates",
        "Rigorous quality assurance"
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 4,
      title: "The Results",
      subtitle: "Ongoing Excellence",
      description:
        "We provide training, support, and optimization to ensure long-term success.",
      icon: TrendingUp,
      content:
        "Ongoing monitoring, performance reviews, and enhancements keep your system optimized.",
      benefits: [
        "Comprehensive team training",
        "24/7 dedicated support",
        "Performance monitoring",
        "Continuous improvement"
      ],
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1470&q=80"
    }
  ];

  const storyElements = [
    {
      title: "Our Partnership Philosophy",
      description:
        "We don’t just deliver solutions — we become your long-term technology partner.",
      icon: Users,
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Proven Methodology",
      description:
        "Our time-tested approach has delivered exceptional results for hundreds of clients.",
      icon: Award,
      image:
        "https://images.unsplash.com/photo-1754039984995-a91721ce1870?auto=format&fit=crop&w=1261&q=80"
    },
    {
      title: "Continuous Innovation",
      description:
        "We stay ahead of technology trends to ensure your solution remains cutting-edge.",
      icon: Lightbulb,
      image:
        "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=1470&q=80"
    }
  ];

  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const iconVariants: Variants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  const floatingAnimation: Variants = {
    animate: {
      y: [-5, 5, -5],
      transition: { duration: 4, repeat: Infinity, repeatType: "reverse" }
    }
  };

  return (
    <section
      ref={ref}
      className="relative w-full py-20 md:py-28 overflow-hidden bg-gradient-to-br from-[#f7fafc] via-[#e3e8ee] to-[#f7fafc]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative">

        {/* Header */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-[#ff7849] to-[#3b82f6] bg-clip-text text-transparent">
              The Technify Transformation Story
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Discover how we turn challenges into opportunities through innovation.
          </p>
        </motion.div>

        {/* Timeline (Top Circles Navigation) */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center">
            {storySteps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center">
                  <motion.div
                    className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer ${
                      activeStep === index
                        ? "bg-gradient-to-r from-[#ff7849] to-[#3b82f6] shadow-lg"
                        : "bg-white border border-gray-300"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => setActiveStep(index)}
                  >
                    {activeStep === index ? (
                      <Play className="w-5 h-5 text-white" />
                    ) : (
                      <span className="font-bold text-gray-700">{step.id}</span>
                    )}
                  </motion.div>

                  <h4
                    className={`mt-3 text-sm font-semibold ${
                      activeStep === index ? "text-gray-900" : "text-gray-400"
                    }`}
                  >
                    {step.title}
                  </h4>
                </div>

                {index < storySteps.length - 1 && (
                  <div className="mx-2 h-1 w-12 bg-gray-200" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ✅ Active Step Content */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/90 backdrop-blur-xl rounded-3xl border p-10 shadow-xl mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#ff7849] to-[#3b82f6] flex items-center justify-center"
                  variants={iconVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <motion.div variants={floatingAnimation} animate="animate">
                    {React.createElement(storySteps[activeStep].icon, {
                      className: "w-8 h-8 text-white"
                    })}
                  </motion.div>
                </motion.div>

                <div>
                  <span className="text-[#ff7849] font-medium">
                    {storySteps[activeStep].title}
                  </span>
                  <h3 className="text-3xl font-bold">
                    {storySteps[activeStep].subtitle}
                  </h3>
                </div>
              </div>

              <p className="text-lg text-gray-600 mb-4">
                {storySteps[activeStep].description}
              </p>

              <p className="text-gray-500 mb-6">{storySteps[activeStep].content}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {storySteps[activeStep].benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="text-[#ff7849] w-5 h-5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="h-80 rounded-2xl overflow-hidden border shadow-lg">
                <Image
                  src={storySteps[activeStep].image}
                  fill
                  className="object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* ✅ Story Elements (Bottom Section) */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {storyElements.map((element, idx) => {
            const Icon = element.icon;
            return (
              <motion.div
                whileHover={{ y: -10 }}
                key={idx}
                className="p-8 bg-white/70 rounded-3xl border shadow-lg"
              >
                <div className="relative h-40 rounded-xl overflow-hidden mb-6 border">
                  <Image
                    src={element.image}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>

                <motion.div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#ff7849] to-[#3b82f6] flex items-center justify-center mb-6"
                  variants={iconVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <motion.div variants={floatingAnimation} animate="animate">
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                </motion.div>

                <h4 className="text-xl font-bold mb-4">{element.title}</h4>
                <p className="text-gray-600">{element.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
