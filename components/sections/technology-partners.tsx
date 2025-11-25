"use client";

import { motion, Variants } from "framer-motion";
import { Monitor, Server, Shield, Wifi } from "lucide-react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { useState } from "react";

// Import local icons
import SamsungIcon from "../../assets/icon/Samsung.png";
import Panasonic from "../../assets/icon/Panasonic.png"
import Timewatch from "../../assets/icon/Timewatch.png"
import XtremeMediaIcon from "../../assets/icon/xtreme media.png";
import MytenIcon from "../../assets/icon/Mytenlogo.jpeg";
import HPEIcon from "../../assets/icon/HPE.png";
import DellIcon from "../../assets/icon/Dell.png";
import SpectraIcon from "../../assets/icon/Spectra.png";
import EasyVigilIcon from "../../assets/icon/EasyVigil.jpg";
import I2VIcon from "../../assets/icon/I2V.png";
import VideoneticsIcon from "../../assets/icon/Videonetics.png";
import HoneywellIcon from "../../assets/icon/Honeywell.png";
import IDISIcon from "../../assets/icon/IDIS.png";
import EdwardsIcon from "../../assets/icon/Edwards by UTC.jpg";
import Fortinet from "../../assets/icon/Fortinet.png";
import OptiExactaIcon from "../../assets/icon/OptiExacta.png";
import HeinrichIcon from "../../assets/icon/Heinrich.png";
import LegrandIcon from "../../assets/icon/legrand.png";
import WatchdogIcon from "../../assets/icon/watchdog.png";

// Animation variants
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
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
function PartnerLogo({ name, logo }: { name: string; logo: string | StaticImageData }) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-white">
        <span className="text-xl font-bold text-blue-600">{name.charAt(0)}</span>
      </div>
    );
  }

  return (
    <Image 
      src={logo} 
      alt={name} 
      fill
      className="object-contain p-2 filter brightness-100 contrast-100 saturate-100"
      onError={() => setImageError(true)}
    />
  );
}

export function TechnologyPartnersSection() {
  const categories = [
    {
      id: 'displays',
      title: 'Displays & Visualization',
     
      partners: [
        { 
          name: 'Samsung', 
          logo: SamsungIcon,
          description: 'Leading display technology provider' 
        },
        { 
          name: 'Panasonic', 
          logo: Panasonic,
          description: 'Professional display solutions' 
        },
        { 
          name: 'Xtreme Media', 
          logo: XtremeMediaIcon,
          description: 'Flight Information Display Software, Active LED Displays' 
        }
      ]
    },
    {
      id: 'servers',
      title: 'Servers & Storage',
     
      partners: [
        { 
          name: 'Myten', 
          logo: MytenIcon,
          description: 'Edge Computing & Storage Solutions' 
        },
        { 
          name: 'HPE', 
          logo: HPEIcon,
          description: 'Enterprise servers and storage solutions' 
        },
        { 
          name: 'Dell', 
          logo: DellIcon,
          description: 'Data center infrastructure and storage' 
        },
        { 
          name: 'Spectra', 
          logo: SpectraIcon,
          description: 'Specialized storage solutions' 
        }
      ]
    },
    {
      id: 'vms',
      title: 'VMS & Analytics',
      
      partners: [
        {
          name: 'EasyVigil',
          logo: EasyVigilIcon,
          description: 'Video Management Systems'
        },
        { 
          name: 'I2V', 
          logo: I2VIcon,
          description: 'Video Management Systems' 
        },
        { 
          name: 'Videonetics', 
          logo: VideoneticsIcon,
          description: 'Advanced video analytics' 
        }
      ]
    },
    {
      id: 'security',
      title: 'Security & Surveillance',
    
      partners: [
        { 
          name: 'Honeywell', 
          logo: HoneywellIcon,
          description: 'Fire Alarm & CCTV Systems' 
        },
        { 
          name: 'IDIS', 
          logo: IDISIcon,
          description: 'Closed Circuit Television solutions' 
        },
        { 
          name: 'Edwards by UTC', 
          logo: EdwardsIcon,
          description: 'Fire Alarm Systems' 
        },
        { 
          name: 'Timewatch', 
          logo: Timewatch,
          description: 'Access Control & Gate Automation' 
        },
        { 
          name: 'OptiExacta', 
          logo: OptiExactaIcon,
          description: 'Facial Recognition Solutions' 
        }
      ]
    },
    {
      id: 'audio',
      title: 'Public Address & Audio-Visual',
     
      partners: [
        { 
          name: 'Heinrich', 
          logo: HeinrichIcon,
          description: 'Professional PA & AV Systems' 
        }
      ]
    },
    {
      id: 'networking',
      title: 'Networking Solutions',
     
      partners: [
        { 
          name: 'Legrand', 
          logo: LegrandIcon,
          description: 'Passive Networking Infrastructure' 
        },
        { 
          name: 'Cisco', 
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/2560px-Cisco_logo_blue_2016.svg.png',
          description: 'Enterprise Networking Switches' 
        },
        { 
          name: 'Watchdog', 
          logo: WatchdogIcon,
          description: 'Network Monitoring Solutions' 
        },
        { 
          name: 'Fortinet', 
          logo: Fortinet,
          description: 'Network Security Firewalls' 
        }
      ]
    }
  ];

  return (
    <section className="relative w-full py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(to right, #1F6FEB 1px, transparent 1px),
                              linear-gradient(to bottom, #fb8500 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative">
        {/* Professional header */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
         
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block text-gray-900 mb-3">Trusted Technology <br /> Partners Worldwide </span>
            <span className="block bg-gradient-to-r from-blue-600 via-orange-500 to-blue-600 bg-clip-text text-transparent">
             
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
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
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="flex flex-col h-full rounded-2xl border border-gray-200 bg-white backdrop-blur-xl shadow-sm transition-all duration-500 group-hover:bg-white group-hover:shadow-lg group-hover:shadow-blue-500/10 overflow-hidden">
                {/* Category header with icon */}
                <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-white to-gray-50">
                  <div className="flex items-center gap-4">
                   
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {category.title}
                    </h3>
                  </div>
                </div>
                
                {/* Partners list with logos */}
                <div className="p-6 flex-grow">
                  <div className="space-y-6">
                    {category.partners.map((partner, partnerIndex) => (
                      <div key={partnerIndex} className="flex items-start gap-4 group/partner">
                        <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-white flex items-center justify-center overflow-hidden border border-gray-200 shadow-sm relative">
                          <PartnerLogo name={partner.name} logo={partner.logo} />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h4 className="font-bold text-gray-900 text-lg group-hover/partner:text-blue-600 transition-colors">
                            {partner.name}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">
                            {partner.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Decorative accent */}
                <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-blue-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            <span className="text-gray-900">
              Why Our Partnerships Matter
            </span>
          </h3>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
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
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="p-6 rounded-2xl border border-gray-200 bg-white backdrop-blur-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="text-4xl mb-4 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">{item.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}