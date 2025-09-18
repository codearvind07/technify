'use client';

import Image from "next/image";
import { motion, useInView, Variants, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { TrendingUp, Users, Award, Building2 } from 'lucide-react';

// Feature lists with improved color scheme
const statsFeatures = [
  { icon: Users, label: "Happy Clients", value: "500+", color: "text-[#C9D1D9]", bg: "bg-[#0D1117]" },
  { icon: Building2, label: "Projects Completed", value: "200+", color: "text-[#C9D1D9]", bg: "bg-[#0D1117]" },
  { icon: Award, label: "Years Experience", value: "15+", color: "text-[#C9D1D9]", bg: "bg-[#0D1117]" },
  { icon: TrendingUp, label: "Success Rate", value: "99%", color: "text-[#C9D1D9]", bg: "bg-[#0D1117]" },
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
    scale: 1.3, 
    rotate: 360,
    transition: { 
      duration: 1.2,
      ease: "circOut"
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
    y: [-2, 2, -2],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

// Custom hook for counting animation
function useCounter(targetValue: number, isInView: boolean) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, targetValue, {
        duration: 5,
        ease: "easeOut"
      });
      return controls.stop;
    }
  }, [count, targetValue, isInView]);

  return rounded;
}

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative w-full py-20 md:py-28 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full" style={
          {
            backgroundImage: `radial-gradient(circle at 15% 50%, hsl(210 10% 20%) 1px, transparent 1px),
                            radial-gradient(circle at 85% 30%, hsl(210 10% 15%) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }
        }></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative">
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-white/10"></div>
        <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-white/10"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-white/10"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-white/10"></div>
        
        {/* Professional header */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-slate-800/80 backdrop-blur-md border border-blue-500/40 rounded-full px-6 py-3 mb-8 shadow-lg">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-[#1F6FEB]"></div>
            <span className="text-[#C9D1D9]/70 text-sm font-medium tracking-wider uppercase">Our Achievements</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block text-white mb-3 bg-gradient-to-r from-blue-100 to-purple-100 bg-clip-text text-transparent">Trusted by Industry</span>
            <span className="block text-white bg-gradient-to-r from-cyan-100 to-blue-100 bg-clip-text text-transparent">
              Leaders Worldwide
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-300/90 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
            Our commitment to excellence has earned us the trust of leading organizations across diverse sectors.
          </p>
        </motion.div>

        {/* Stats in one row for large screens, column for mobile */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
        >
          {statsFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-white/20 bg-slate-800/60 backdrop-blur-xl shadow-xl transition-all duration-500 group-hover:bg-slate-700/80 group-hover:shadow-blue-500/20 h-full">
                  <motion.div 
                    className="mb-4 p-4 rounded-lg group-hover:opacity-80 transition-opacity"
                    whileHover="hover"
                    whileTap="tap"
                    initial="initial"
                    variants={iconVariants}
                  >
                    <motion.div
                      variants={floatingAnimation}
                      animate="animate"
                    >
                      <IconComponent className="w-16 h-16 text-[#C9D1D9]" />
                    </motion.div>
                  </motion.div>
                  <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(59,130,246,0.8)] leading-tight mb-2">
                    {feature.value}
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-200 transition-all duration-300">
                    {feature.label}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Simplified content section */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-7 bg-gradient-to-r from-blue-100 to-purple-100 bg-clip-text text-transparent">
            Excellence in Every Project
          </h3>
          <p className="text-lg md:text-xl text-slate-300/95 mb-10 leading-relaxed tracking-wide">
            Our track record speaks for itself. With over 500 satisfied clients and a 99% success rate, we deliver exceptional results that exceed expectations.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Client Satisfaction",
              "Quality Assurance",
              "Innovation Focus",
              "Global Reach"
            ].map((item, idx) => (
              <div key={idx} className="px-6 py-3 bg-slate-800/70 backdrop-blur-md border border-white/20 rounded-full text-slate-300/90 text-base font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
