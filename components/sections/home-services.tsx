"use client";

import Image from "next/image";
import { motion, Variants, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Palette,
  Headphones,
  Settings,
  Shield,
  Zap,
  Lock,
  Cpu,
  Cloud,
  ArrowRight,
  ChevronRight,
  Star,
  CheckCircle
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
    color: "from-blue-500 to-orange-500"
  },
  {
    title: "Support & Maintenance",
    icon: Headphones,
    image: supportMaintenance,
    description: "Comprehensive support services to ensure optimal performance and system reliability.",
    features: ["24/7 Support", "Preventive Maintenance", "System Monitoring"],
    color: "from-blue-500 to-orange-500"
  },
  {
    title: "Implementation",
    icon: Settings,
    image: implementation,
    description: "Expert deployment and integration services for seamless technology adoption.",
    features: ["Project Management", "System Integration", "Training & Onboarding"],
    color: "from-blue-500 to-orange-500"
  },
  {
    title: "Security & Compliance",
    icon: Shield,
    image: securityCompliance,
    description: "Robust security frameworks and compliance solutions to protect your operations.",
    features: ["Security Audits", "Compliance Management", "Risk Assessment"],
    color: "from-blue-500 to-orange-500"
  }
];

const advantages = [
  {
    title: "Technical Excellence",
    description: "Industry-leading expertise in cutting-edge technologies and best practices.",
    icon: Cpu,
    stats: "200+ Projects"
  },
  {
    title: "Tailored Solutions",
    description: "Customized approaches designed specifically for your unique requirements.",
    icon: Zap,
    stats: "100% Custom"
  },
  {
    title: "Proven Results",
    description: "Track record of successful implementations across diverse industries.",
    icon: Cloud,
    stats: "98% Success Rate"
  },
  {
    title: "Long-term Partnership",
    description: "Ongoing support and continuous improvement for sustainable growth.",
    icon: Lock,
    stats: "24/7 Support"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO at TechCorp",
    content: "Technify transformed our digital infrastructure with innovative solutions that exceeded our expectations.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Product Director at InnovateCo",
    content: "The team's technical expertise and attention to detail made our project a tremendous success.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "CEO at StartupGrid",
    content: "From design to implementation, Technify delivered exceptional value at every stage of our project.",
    rating: 5
  }
];

// Animation variants
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    } 
  }
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
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5,
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
      repeatType: "reverse",
      ease: "easeInOut"
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
    scale: 1.02,
    transition: { 
      duration: 0.3,
      ease: "easeInOut"
    } 
  }
};

// Text reveal animation
const textReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 1) => ({ 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: "easeOut",
      delay: i * 0.1
    } 
  })
};

// Particle animation
const particleVariants: Variants = {
  initial: { opacity: 0 },
  animate: (custom) => ({
    opacity: [0, 1, 0],
    y: [0, -custom.y],
    x: [0, custom.x],
    transition: {
      duration: custom.duration,
      repeat: Infinity,
      delay: custom.delay,
      ease: "easeInOut"
    }
  })
};

export default function HomeServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Generate particles for background
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100 - 50,
    y: Math.random() * 100 + 50,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5
  }));

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-orange-400/20"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={particleVariants}
            initial="initial"
            animate="animate"
            custom={{
              x: particle.x,
              y: particle.y,
              duration: particle.duration,
              delay: particle.delay
            }}
          />
        ))}
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-orange-500/10 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-32 h-32 rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Animated grid background */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0, 0, 0) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        </div>

        {/* Professional header with enhanced styling */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20 relative z-10"
        >
          <motion.div 
            variants={staggerItem}
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-lg border border-gray-200 rounded-full px-6 py-3 mb-8 shadow-lg shadow-blue-500/5"
          >
            <motion.div 
              className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-orange-500"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity 
              }}
            />
            <span className="text-gray-600 text-sm font-medium tracking-wider uppercase">Our Services</span>
          </motion.div>
          
          <motion.h2 
            variants={textReveal}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="block text-gray-900 mb-3">
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-orange-500 bg-clip-text text-transparent">
                Comprehensive Technology
              </span>
            </span>
            <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-orange-500 bg-clip-text text-transparent">
              Services Portfolio
            </span>
          </motion.h2>
          
          <motion.p 
            variants={textReveal}
            className="text-xl md:text-2xl text-gray-600/90 max-w-3xl mx-auto font-light leading-relaxed tracking-wide"
          >
            End-to-end services designed for modern enterprises with cutting-edge technology integration.
          </motion.p>
        </motion.div>

        {/* Enhanced services grid with unique card design and images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 relative z-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                whileHover="hover"
                viewport={{ once: true, amount: 0.3 }}
                className="group relative"
                custom={index}
              >
                <div className={`relative p-6 rounded-2xl border border-gray-100 bg-white/80 backdrop-blur-md shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-500 h-full flex flex-col overflow-hidden`}>
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Animated border effect */}
                  <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Image container with enhanced styling */}
                  <div className="relative w-full h-40 rounded-xl overflow-hidden mb-6 border border-gray-100 shadow-md group-hover:shadow-lg transition-shadow duration-500">
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent"></div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur rounded-full px-2 py-1 text-xs font-medium text-gray-700 shadow-sm">
                      {index + 1}/{services.length}
                    </div>
                  </div>
                  
                  {/* Icon container with enhanced animation */}
                  <motion.div 
                    className="relative w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-orange-500 flex items-center justify-center mb-6 mx-auto border border-white shadow-lg z-10 -mt-12"
                    whileHover="hover"
                    whileTap="tap"
                    initial="initial"
                    variants={iconVariants}
                  >
                    <motion.div
                      variants={floatingAnimation}
                      animate="animate"
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                    
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-blue-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                  
                  {/* Content */}
                  <div className="mt-2 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600/80 text-sm leading-relaxed text-center mb-5 flex-grow">
                      {service.description}
                    </p>
                    
                    {/* Features list with enhanced styling */}
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <motion.div 
                          key={idx} 
                          className="flex items-center gap-2 text-sm text-gray-600/90"
                          whileHover={{ x: 5 }}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.2, delay: idx * 0.1 }}
                        >
                          <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-3 h-3 text-blue-500" />
                          </div>
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Learn more button */}
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="mt-auto flex items-center justify-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-300 pt-2"
                    >
                      <span>Learn more</span>
                      <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  </div>
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
          viewport={{ once: true, amount: 0.3 }}
          className="mb-24 relative z-10"
          ref={ref}
        >
          <div className="text-center mb-16">
            <motion.h3 
              variants={textReveal}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                Why Choose Technify
              </span>
            </motion.h3>
            <motion.div 
              variants={textReveal}
              className="w-24 h-1 bg-gradient-to-r from-blue-500 via-orange-500 to-blue-500 mx-auto rounded-full mb-6"
            ></motion.div>
            <motion.p 
              variants={textReveal}
              className="text-lg text-gray-600/90 max-w-2xl mx-auto"
            >
              We deliver exceptional value through our proven approach and commitment to excellence
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                  initial="hidden"
                  whileInView="show"
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="group relative"
                  custom={index}
                >
                  <div className="relative p-6 rounded-2xl border border-gray-100 bg-white/80 backdrop-blur-md shadow-lg shadow-gray-200/30 hover:shadow-xl hover:shadow-blue-100/30 transition-all duration-500 h-full overflow-hidden">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Animated border */}
                    <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Icon with enhanced animation */}
                    <motion.div 
                      className="relative w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500 to-orange-500 flex items-center justify-center mb-5 mx-auto border border-white shadow-md"
                      whileHover="hover"
                      whileTap="tap"
                      initial="initial"
                      variants={iconVariants}
                    >
                      <motion.div
                        variants={floatingAnimation}
                        animate="animate"
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>
                    </motion.div>
                    
                    <h4 className="text-lg font-bold text-gray-900 mb-3 text-center group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-600/80 text-sm leading-relaxed text-center mb-4">
                      {item.description}
                    </p>
                    
                    <div className="text-center">
                      <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {item.stats}
                      </span>
                    </div>
                    
                    {/* Decorative element */}
                    <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-gradient-to-r from-blue-500/10 to-orange-500/10 blur-xl group-hover:scale-110 transition-transform duration-500"></div>
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