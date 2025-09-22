"use client";

import { motion, Variants } from "framer-motion";
import { Monitor, Server, Shield, Wifi } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

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

// Partner logo component with fallback
function PartnerLogo({ name, logo }: { name: string; logo: string }) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100/20 to-orange-100/20">
        <span className="text-lg font-bold text-blue-600">{name.charAt(0)}</span>
      </div>
    );
  }

  return (
    <Image 
      src={logo} 
      alt={name} 
      width={48} 
      height={48} 
      className="object-contain"
      onError={() => setImageError(true)}
    />
  );
}

export function TechnologyPartnersSection() {
  const categories = [
    {
      id: 'displays',
      title: 'Displays & Visualization',
      icon: <Monitor className="w-6 h-6" />,
      partners: [
        { 
          name: 'Samsung', 
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png',
          description: 'Leading display technology provider' 
        },
        { 
          name: 'Panasonic', 
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Panasonic_logo_%28Blue%29.svg/2560px-Panasonic_logo_%28Blue%29.svg.png',
          description: 'Professional display solutions' 
        },
        { 
          name: 'Xtreme Media', 
          logo: 'https://www.xtrememediainc.com/wp-content/uploads/2021/09/Xtreme-Media-Logo-White.png',
          description: 'Flight Information Display Software, Active LED Displays' 
        }
      ]
    },
    {
      id: 'servers',
      title: 'Servers & Storage',
      icon: <Server className="w-6 h-6" />,
      partners: [
        { 
          name: 'HPE', 
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Hewlett_Packard_Enterprise_logo.svg/2560px-Hewlett_Packard_Enterprise_logo.svg.png',
          description: 'Enterprise servers and storage solutions' 
        },
        { 
          name: 'Dell', 
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dell_logo.png/1200px-Dell_logo.png',
          description: 'Data center infrastructure and storage' 
        },
        { 
          name: 'Spectra', 
          logo: 'https://www.spectralogic.com/wp-content/uploads/2021/03/Spectra-Logic-Logo-White.png',
          description: 'Specialized storage solutions' 
        }
      ]
    },
    {
      id: 'vms',
      title: 'VMS & Analytics',
      icon: <Shield className="w-6 h-6" />,
      partners: [
        { 
          name: 'I2V', 
          logo: 'https://i2v.com/wp-content/uploads/2021/03/i2v-logo-white.png',
          description: 'Video Management Systems' 
        },
        { 
          name: 'Videonetics', 
          logo: 'https://videonetics.com/wp-content/uploads/2021/09/Videonetics-Logo-White.png',
          description: 'Advanced video analytics' 
        }
      ]
    },
    {
      id: 'security',
      title: 'Security & Surveillance',
      icon: <Shield className="w-6 h-6" />,
      partners: [
        { 
          name: 'Honeywell', 
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Honeywell-Logo.svg/2560px-Honeywell-Logo.svg.png',
          description: 'Fire Alarm & CCTV Systems' 
        },
        { 
          name: 'IDIS', 
          logo: 'https://www.idisglobal.com/wp-content/uploads/2021/03/IDIS-Global-Logo-White.png',
          description: 'Closed Circuit Television solutions' 
        },
        { 
          name: 'Edwards by UTC', 
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/UTC_Fire_%26_Security_logo.svg/2560px-UTC_Fire_%26_Security_logo.svg.png',
          description: 'Fire Alarm Systems' 
        },
        { 
          name: 'Timewatch', 
          logo: 'https://www.timewatchglobal.com/wp-content/uploads/2021/03/Timewatch-Logo-White.png',
          description: 'Access Control & Gate Automation' 
        },
        { 
          name: 'OptiExacta', 
          logo: 'https://www.optiexacta.com/wp-content/uploads/2021/03/OptiExacta-Logo-White.png',
          description: 'Facial Recognition Solutions' 
        }
      ]
    },
    {
      id: 'audio',
      title: 'Public Address & Audio-Visual',
      icon: <Wifi className="w-6 h-6" />,
      partners: [
        { 
          name: 'Heinrich', 
          logo: 'https://www.heinrich.com/wp-content/uploads/2021/03/Heinrich-Logo-White.png',
          description: 'Professional PA & AV Systems' 
        }
      ]
    },
    {
      id: 'networking',
      title: 'Networking Solutions',
      icon: <Wifi className="w-6 h-6" />,
      partners: [
        { 
          name: 'Legrand', 
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Legrand_logo.svg/2560px-Legrand_logo.svg.png',
          description: 'Passive Networking Infrastructure' 
        },
        { 
          name: 'Cisco', 
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/2560px-Cisco_logo_blue_2016.svg.png',
          description: 'Enterprise Networking Switches' 
        },
        { 
          name: 'Watchdog', 
          logo: 'https://www.watchdogglobal.com/wp-content/uploads/2021/03/Watchdog-Logo-White.png',
          description: 'Network Monitoring Solutions' 
        },
        { 
          name: 'Fortinet', 
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Fortinet_logo.svg/2560px-Fortinet_logo.svg.png',
          description: 'Network Security Firewalls' 
        }
      ]
    }
  ];

  return (
    <section className="relative w-full py-20 md:py-28 bg-gradient-to-br from-[#232946] via-[#1e293b] to-[#3b82f6] text-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 15% 50%, #3b82f6cc 1px, transparent 1px),
                            radial-gradient(circle at 85% 30%, #ff7849cc 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-[#3b82f6]/30 to-[#232946]/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-[#ff7849]/30 to-[#232946]/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative">
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-[#3b82f6]/30"></div>
        <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-[#ff7849]/30"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-[#3b82f6]/30"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-[#ff7849]/30"></div>
        
        {/* Professional header */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-[#232946]/80 backdrop-blur-md border border-[#3b82f6]/30 rounded-full px-6 py-3 mb-8 shadow-lg">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#ff7849] animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-[#3b82f6]"></div>
            <span className="text-[#3b82f6] text-sm font-semibold tracking-wider uppercase">Strategic Partnerships</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block text-white mb-3">Trusted Technology</span>
            <span className="block bg-gradient-to-r from-[#3b82f6] via-[#ff7849] to-[#3b82f6] bg-clip-text text-transparent">
              Partners Worldwide
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
            We collaborate with industry-leading technology partners to deliver cutting-edge solutions that drive innovation and ensure reliability across all infrastructure needs.
          </p>
        </motion.div>

        {/* Enhanced partners grid with images */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={staggerItem}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="flex flex-col h-full rounded-2xl border border-[#3b82f6]/20 bg-[#232946]/90 backdrop-blur-xl shadow-xl transition-all duration-500 group-hover:bg-[#1e293b] group-hover:shadow-2xl group-hover:shadow-[#3b82f6]/20 overflow-hidden">
                {/* Category header with icon */}
                <div className="p-6 border-b border-[#3b82f6]/20 bg-gradient-to-r from-[#232946] to-[#1e293b]">
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="p-3 rounded-lg bg-gradient-to-br from-[#3b82f6]/20 to-[#ff7849]/20 text-[#3b82f6]"
                      whileHover="hover"
                      whileTap="tap"
                      initial="initial"
                      variants={iconVariants}
                    >
                      <motion.div
                        variants={floatingAnimation}
                        animate="animate"
                      >
                        {category.icon}
                      </motion.div>
                    </motion.div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#3b82f6] transition-colors">
                      {category.title}
                    </h3>
                  </div>
                </div>
                
                {/* Partners list with logos */}
                <div className="p-6 flex-grow">
                  <div className="space-y-5">
                    {category.partners.map((partner, partnerIndex) => (
                      <div key={partnerIndex} className="flex items-start gap-4 group/partner">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#232946] flex items-center justify-center overflow-hidden border border-[#3b82f6]/20">
                          <PartnerLogo name={partner.name} logo={partner.logo} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white group-hover/partner:text-[#3b82f6] transition-colors">
                            {partner.name}
                          </h4>
                          <p className="text-sm text-gray-300 mt-1">
                            {partner.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Decorative accent */}
                <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-[#3b82f6]/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Value proposition section */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-[#3b82f6] via-[#ff7849] to-[#3b82f6] bg-clip-text text-transparent">
              Why Our Partnerships Matter
            </span>
          </h3>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed">
            Our strategic technology partnerships ensure we deliver solutions built on the most reliable, 
            innovative, and future-ready platforms in the industry.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[{
                title: "Innovation First",
                description: "Access to cutting-edge technologies and early product releases",
                icon: "🚀"
              },
              {
                title: "Global Support",
                description: "24/7 technical assistance and dedicated partnership resources",
                icon: "🌐"
              },
              {
                title: "Certified Expertise",
                description: "Direct training and certification from technology leaders",
                icon: "🏆"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="p-6 rounded-2xl border border-[#3b82f6]/20 bg-[#232946]/90 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4 bg-gradient-to-r from-[#3b82f6] to-[#ff7849] bg-clip-text text-transparent">{item.icon}</div>
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}