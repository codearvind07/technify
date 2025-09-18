"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  Palette,
  Headphones,
  Settings,
  Shield,
  Zap,
  Lock,
  Cpu,
  Cloud
} from "lucide-react";

// Import images
import designInnovation from "../../assets/slide1.jpg";
import supportMaintenance from "../../assets/slide2.jpg";
import implementation from "../../assets/slide3.jpg";
import securityCompliance from "../../assets/automation.jpg";
import heroBg from "../../assets/beanbag-person.png";
import beanbagPerson from "../../assets/beanbag-person.png";

const services = [
  {
    title: "Design & Innovation",
    icon: Palette,
    image: designInnovation,
    description: "Creative solutions that blend aesthetics with functionality for exceptional user experiences.",
    features: ["UI/UX Design", "System Architecture", "Digital Strategy"],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Support & Maintenance",
    icon: Headphones,
    image: supportMaintenance,
    description: "Comprehensive support services to ensure optimal performance and system reliability.",
    features: ["24/7 Support", "Preventive Maintenance", "System Monitoring"],
    color: "from-purple-500/20 to-indigo-500/20"
  },
  {
    title: "Implementation",
    icon: Settings,
    image: implementation,
    description: "Expert deployment and integration services for seamless technology adoption.",
    features: ["Project Management", "System Integration", "Training & Onboarding"],
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "Security & Compliance",
    icon: Shield,
    image: securityCompliance,
    description: "Robust security frameworks and compliance solutions to protect your operations.",
    features: ["Security Audits", "Compliance Management", "Risk Assessment"],
    color: "from-amber-500/20 to-orange-500/20"
  }
];

const advantages = [
  {
    title: "Technical Excellence",
    description: "Industry-leading expertise in cutting-edge technologies and best practices.",
    icon: Cpu
  },
  {
    title: "Tailored Solutions",
    description: "Customized approaches designed specifically for your unique requirements.",
    icon: Zap
  },
  {
    title: "Proven Results",
    description: "Track record of successful implementations across diverse industries.",
    icon: Cloud
  },
  {
    title: "Long-term Partnership",
    description: "Ongoing support and continuous improvement for sustainable growth.",
    icon: Lock
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

// Custom animation for service cards
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
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

export default function HomeServices() {
  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden">
      {/* Animated background with gradient layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(circle at 15% 50%, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                radial-gradient(circle at 85% 30%, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                conic-gradient(from 0deg at 50% 50%, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))
              `,
              backgroundSize: '40px 40px, 40px 40px, 100% 100%'
            }}
          ></div>
        </div>
        
        {/* Floating geometric shapes */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative">
        {/* Decorative corner accents with glow effect */}
        <div className="absolute top-0 left-0 w-24 h-24">
          <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-blue-500/30"></div>
          <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-blue-400/50 animate-pulse"></div>
        </div>
        <div className="absolute top-0 right-0 w-24 h-24">
          <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-blue-500/30"></div>
          <div className="absolute top-0 right-0 w-10 h-10 border-t border-r border-blue-400/50 animate-pulse"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-24 h-24">
          <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-blue-500/30"></div>
          <div className="absolute bottom-0 left-0 w-10 h-10 border-b border-l border-blue-400/50 animate-pulse"></div>
        </div>
        <div className="absolute bottom-0 right-0 w-24 h-24">
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-blue-500/30"></div>
          <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-blue-400/50 animate-pulse"></div>
        </div>
        
        {/* Professional header with enhanced styling */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-20 relative"
        >
          <div className="inline-flex items-center gap-3 bg-slate-800/60 backdrop-blur-lg border border-blue-500/30 rounded-full px-6 py-3 mb-8 shadow-xl">
            <motion.div 
              className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity 
              }}
            ></motion.div>
            <div className="w-2 h-2 rounded-full bg-[#1F6FEB]"></div>
            <span className="text-[#C9D1D9]/80 text-sm font-medium tracking-wider uppercase">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block text-white mb-3">
              <span className="bg-gradient-to-r from-blue-200 via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                Comprehensive Technology
              </span>
            </span>
            <span className="block bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Services Portfolio
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-300/90 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
            End-to-end services designed for modern enterprises with cutting-edge technology integration.
          </p>
        </motion.div>

        {/* Enhanced services grid with unique card design and images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                whileHover="hover"
                viewport={{ once: true }}
                className="group relative"
              >
                <div className={`relative p-8 rounded-3xl border border-white/20 bg-gradient-to-br ${service.color} backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-500 h-full flex flex-col`}>
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Corner decorations */}
                  <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Image container with enhanced styling */}
                  <div className="relative w-full h-40 rounded-2xl overflow-hidden mb-6 border border-white/20 shadow-lg">
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  </div>
                  
                  {/* Icon container with enhanced animation */}
                  <motion.div 
                    className="relative w-20 h-20 rounded-2xl bg-slate-800/50 backdrop-blur-sm flex items-center justify-center mb-6 mx-auto border border-white/20 shadow-lg z-10 -mt-16"
                    whileHover="hover"
                    whileTap="tap"
                    initial="initial"
                    variants={iconVariants}
                  >
                    <motion.div
                      variants={floatingAnimation}
                      animate="animate"
                    >
                      <Icon className="w-10 h-10 text-blue-300 group-hover:text-white transition-colors duration-300" />
                    </motion.div>
                    
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                  
                  {/* Content */}
                  <div className="mt-4 flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-blue-100 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-200/80 text-base leading-relaxed text-center mb-6">
                      {service.description}
                    </p>
                    
                    {/* Features list with enhanced styling */}
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <motion.div 
                          key={idx} 
                          className="flex items-center gap-3 text-sm text-slate-200/90"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Decorative bottom element */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-cyan-500/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced advantages section with unique design */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-blue-200 via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                Why Choose Technify
              </span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-300/90 max-w-2xl mx-auto">
              We deliver exceptional value through our proven approach and commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className="relative p-8 rounded-3xl border border-white/20 bg-slate-800/40 backdrop-blur-xl shadow-xl transition-all duration-500 h-full overflow-hidden">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Icon with enhanced animation */}
                    <motion.div 
                      className="relative w-16 h-16 rounded-2xl bg-slate-700/50 flex items-center justify-center mb-6 mx-auto border border-white/20"
                      whileHover="hover"
                      whileTap="tap"
                      initial="initial"
                      variants={iconVariants}
                    >
                      <motion.div
                        variants={floatingAnimation}
                        animate="animate"
                      >
                        <Icon className="w-8 h-8 text-blue-300 group-hover:text-white transition-colors duration-300" />
                      </motion.div>
                    </motion.div>
                    
                    <h4 className="text-xl font-bold text-white mb-4 text-center group-hover:text-blue-100 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-slate-300/80 text-base leading-relaxed text-center">
                      {item.description}
                    </p>
                    
                    {/* Decorative element */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl group-hover:scale-110 transition-transform duration-500"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Enhanced CTA section with unique design and image */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative max-w-4xl mx-auto rounded-3xl border border-white/20 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl p-12 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5"></div>
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-cyan-500/50"></div>
            
            {/* Central image */}
            <div className="relative w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
              <Image 
                src={beanbagPerson} 
                alt="Technify Team" 
                fill
                className="object-cover"
              />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-200 via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </span>
            </h3>
            <p className="text-xl text-slate-300/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Connect with our experts to discuss how our technology solutions can drive your success
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white font-bold text-lg rounded-2xl shadow-2xl overflow-hidden group"
            >
              <span className="relative z-10">Get Started Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}