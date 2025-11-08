'use client';

import { motion, useInView, Variants, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { TrendingUp, Users, Award, Building2 } from 'lucide-react';

const stats = [
  { 
    icon: Users, 
    label: "Happy Clients", 
    value: 500, 
    suffix: "+"
  },
  { 
    icon: Building2, 
    label: "Projects", 
    value: 200, 
    suffix: "+"
  },
  { 
    icon: Award, 
    label: "Years Experience", 
    value: 15, 
    suffix: "+"
  },
  { 
    icon: TrendingUp, 
    label: "Success Rate", 
    value: 99, 
    suffix: "%"
  },
];

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  }
};

function useCounter(targetValue: number, isInView: boolean, duration: number = 2) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (isInView) {
      animate(count, targetValue, { duration, ease: "easeOut" });
    }
  }, [count, targetValue, isInView, duration]);

  return rounded;
}

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-slate-50 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-50/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
            
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 mt-2">
             Excellence in Numbers
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Our commitment to quality reflected through measurable results
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const count = useCounter(stat.value, isInView);
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center hover:shadow-2xl hover:border-orange-200 transition-all duration-500">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-50 rounded-2xl mb-6 group-hover:bg-orange-100 transition-colors">
                    <IconComponent className="w-8 h-8 text-orange-500" />
                  </div>
                  
                  <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                    <motion.span>{count}</motion.span>
                    {stat.suffix}
                  </div>
                  
                  <div className="text-slate-600 text-lg font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}