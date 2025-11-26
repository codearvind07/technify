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

  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const floatSmall: Variants = {
    animate: {
      y: [-4, 4, -4],
      transition: { duration: 4, repeat: Infinity, repeatType: "reverse" }
    }
  };

  return (
    <section
      ref={ref}
      className="relative w-full pt-6 pb-16 md:pt-8 md:pb-20 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">

    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative">
        {/* ✅ HEADER */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          className="text-center mb-20"
        >
          <div className="inline-block bg-white px-6 py-3 rounded-full shadow-sm border mb-5">
            <span className="text-sm font-medium text-gray-700 tracking-wide">
              Our Process
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-5 leading-snug">
            <span className="text-gray-900">
              The Technify Transformation Story
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we turn challenges into opportunities through innovation.
          </p>
        </motion.div>

        {/* ✅ TIMELINE NAVIGATION */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center gap-2">
            {storySteps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    onClick={() => setActiveStep(index)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all
                      ${
                        activeStep === index
                          ? "bg-blue-600 shadow-lg text-white"
                          : "bg-white border border-gray-300 text-gray-700"
                      }
                    `}
                  >
                    {activeStep === index ? (
                      <Play className="w-5 h-5" />
                    ) : (
                      <span className="font-bold">{step.id}</span>
                    )}
                  </motion.div>

                  <span
                    className={`mt-3 text-sm font-semibold transition-colors
                      ${
                        activeStep === index ? "text-gray-900" : "text-gray-400"
                      }
                    `}
                  >
                    {step.title}
                  </span>
                </div>

                {index < storySteps.length - 1 && (
                  <div className="w-12 h-1 bg-gray-200" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ✅ MAIN STEP CONTENT */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl border shadow-xl p-10 mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT CONTENT */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center"
                  variants={floatSmall}
                  animate="animate"
                >
                  {React.createElement(storySteps[activeStep].icon, {
                    className: "w-8 h-8 text-blue-600"
                  })}
                </motion.div>

                <div>
                  <span className="font-semibold text-blue-600">
                    {storySteps[activeStep].title}
                  </span>

                  <h3 className="text-3xl font-bold text-gray-900">
                    {storySteps[activeStep].subtitle}
                  </h3>
                </div>
              </div>

              <p className="text-lg text-gray-600 mb-3">
                {storySteps[activeStep].description}
              </p>

              <p className="text-gray-500 mb-6">
                {storySteps[activeStep].content}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {storySteps[activeStep].benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div className="h-80 rounded-2xl overflow-hidden border shadow-lg">
                <Image
                  src={storySteps[activeStep].image}
                  fill
                  alt=""
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}