'use client';

import Image from "next/image";
import { motion, useInView, Variants, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { TrendingUp, Users, Award, Building2, ChevronRight, Star } from 'lucide-react';

// Feature lists with professional color scheme
const statsFeatures = [
  { 
    icon: Users, 
    label: "Happy Clients", 
    value: 500, 
    suffix: "+",
    color: "text-orange-500", // Changed to orange
    bg: "bg-white",
    delay: 0.1
  },
  { 
    icon: Building2, 
    label: "Projects Completed", 
    value: 200, 
    suffix: "+",
    color: "text-orange-500", // Changed to orange
    bg: "bg-white",
    delay: 0.2
  },
  { 
    icon: Award, 
    label: "Years Experience", 
    value: 15, 
    suffix: "+",
    color: "text-orange-500", // Changed to orange
    bg: "bg-white",
    delay: 0.3
  },
  { 
    icon: TrendingUp, 
    label: "Success Rate", 
    value: 99, 
    suffix: "%",
    color: "text-orange-500", // Changed to orange
    bg: "bg-white",
    delay: 0.4
  },
];

// Animation variants
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.7,
      ease: "easeOut"
    } 
  }
};

// Icon animation variants
const iconVariants: Variants = {
  initial: { scale: 1, rotate: 0 },
  hover: { 
    scale: 1.2, 
    rotate: 360,
    transition: { 
      duration: 0.6,
      ease: "backOut"
    } 
  }
};

// Continuous subtle animation for icons
const floatingAnimation: Variants = {
  animate: {
    y: [-3, 3, -3],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

// Custom hook for counting animation
function useCounter(targetValue: number, isInView: boolean, duration: number = 2) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, targetValue, {
        duration: duration,
        ease: "easeOut"
      });
      return controls.stop;
    }
  }, [count, targetValue, isInView, duration]);

  return rounded;
}

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="relative w-full py-24 md:py-32 bg-gradient-to-br from-orange-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-300 rounded-full blur-3xl opacity-15 animate-pulse-slower"></div>
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 20px, #f59e42 20px, #f59e42 21px),
                             repeating-linear-gradient(90deg, transparent, transparent 20px, #f59e42 20px, #f59e42 21px)`,
            backgroundSize: '42px 42px'
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Decorative corner accents */}
        <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-orange-300/50"></div>
        <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-indigo-300/50"></div>
        <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-orange-300/50"></div>
        <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-indigo-300/50"></div>
        
        {/* Professional header */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-20 relative"
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-orange-200 rounded-full px-5 py-2.5 mb-8 shadow-sm hover:shadow-md transition-shadow"
            whileHover={{ y: -2 }}
          >
            <div className="flex">
              {[0, 1, 2].map(i => (
                <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
              ))}
            </div>
            <span className="text-orange-700 text-sm font-medium tracking-wider uppercase ml-2">
              Industry Recognition
            </span>
            <ChevronRight className="w-4 h-4 text-orange-500 ml-1" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
            <span className="block text-slate-900 mb-3">Excellence in Numbers</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-indigo-700">
              Measurable Success
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Our commitment to excellence is reflected in the results we deliver for our clients across the globe.
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {statsFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            const count = useCounter(feature.value, isInView);
            
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                custom={index}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative"
              >
                {/* Hover effect background */}
                <div className={`absolute inset-0 bg-gradient-to-br from-orange-600 to-indigo-700 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative flex flex-col items-center text-center p-8 rounded-2xl border border-orange-200 bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-500 group-hover:shadow-xl group-hover:border-orange-200/60 h-full">
                  <motion.div 
                    className="mb-5 p-4 rounded-lg bg-orange-50 group-hover:bg-orange-100 transition-colors duration-500"
                    whileHover="hover"
                    initial="initial"
                    variants={iconVariants}
                  >
                    <motion.div
                      variants={floatingAnimation}
                      animate="animate"
                    >
                      <IconComponent className={`w-12 h-12 ${feature.color}`} />
                    </motion.div>
                  </motion.div>
                  
                  <div className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-2">
                    <motion.span>{count}</motion.span>
                    {feature.suffix}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-slate-700 group-hover:text-orange-700 transition-colors duration-300 mb-2">
                    {feature.label}
                  </h3>
                  
                  <p className="text-sm text-slate-500 mt-auto">
                    {index === 0 && "Satisfied customers worldwide"}
                    {index === 1 && "Delivered with excellence"}
                    {index === 2 && "Industry experience"}
                    {index === 3 && "Project success rate"}
                  </p>
                  
                  {/* Animated progress bar */}
                  <div className="w-full h-1 bg-slate-100 rounded-full mt-4 overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-orange-600 to-indigo-600 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${75 + index * 7}%` }}
                      transition={{ duration: 1.5, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional content section */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center max-w-4xl mx-auto relative"
        >
          <div className="absolute -left-20 top-10 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-10 -z-10"></div>
          <div className="absolute -right-20 bottom-10 w-40 h-40 bg-indigo-200 rounded-full blur-3xl opacity-10 -z-10"></div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Driving Business Growth Through Excellence
          </h3>
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
            Our proven track record of success is built on a foundation of quality, innovation, 
            and unwavering commitment to client satisfaction. We measure our success by the value 
            we create for our partners.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Quality Assurance",
              "Client Focused",
              "Innovation Driven",
              "Global Expertise",
              "Results Oriented"
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                className="px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-orange-200 rounded-lg text-orange-700 text-base font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:border-orange-300/50"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}