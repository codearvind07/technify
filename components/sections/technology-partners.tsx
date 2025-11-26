'use client';

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { useState } from "react";

// Import local icons
import SamsungIcon from "../../assets/icon/Samsung.png";
import Panasonic from "../../assets/icon/Panasonic.png";
import Timewatch from "../../assets/icon/Timewatch.png";
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

/* ----------------- ANIMATION VARIANTS ------------------ */
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

/* ----------------- LOGO FALLBACK ------------------ */
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
      className="object-contain p-2"
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
        { name: 'Samsung', logo: SamsungIcon, description: 'Leading display technology provider' },
        { name: 'Panasonic', logo: Panasonic, description: 'Professional display solutions' },
        { name: 'Xtreme Media', logo: XtremeMediaIcon, description: 'Flight Information Display Software, Active LED Displays' }
      ]
    },
    {
      id: 'servers',
      title: 'Servers & Storage',
      partners: [
        { name: 'Myten', logo: MytenIcon, description: 'Edge Computing & Storage Solutions' },
        { name: 'HPE', logo: HPEIcon, description: 'Enterprise servers and storage solutions' },
        { name: 'Dell', logo: DellIcon, description: 'Data center infrastructure and storage' },
        { name: 'Spectra', logo: SpectraIcon, description: 'Specialized storage solutions' }
      ]
    },
    {
      id: 'vms',
      title: 'VMS & Analytics',
      partners: [
        { name: 'EasyVigil', logo: EasyVigilIcon, description: 'Video Management Systems' },
        { name: 'I2V', logo: I2VIcon, description: 'Video Management Systems' },
        { name: 'Videonetics', logo: VideoneticsIcon, description: 'Advanced video analytics' }
      ]
    },
    {
      id: 'security',
      title: 'Security & Surveillance',
      partners: [
        { name: 'Honeywell', logo: HoneywellIcon, description: 'Fire Alarm & CCTV Systems' },
        { name: 'IDIS', logo: IDISIcon, description: 'Closed Circuit Television solutions' },
        { name: 'Edwards by UTC', logo: EdwardsIcon, description: 'Fire Alarm Systems' },
        { name: 'Timewatch', logo: Timewatch, description: 'Access Control & Gate Automation' },
        { name: 'OptiExacta', logo: OptiExactaIcon, description: 'Facial Recognition Solutions' }
      ]
    },
    {
      id: 'audio',
      title: 'Public Address & Audio-Visual',
      partners: [
        { name: 'Heinrich', logo: HeinrichIcon, description: 'Professional PA & AV Systems' }
      ]
    },
    {
      id: 'networking',
      title: 'Networking Solutions',
      partners: [
        { name: 'Legrand', logo: LegrandIcon, description: 'Passive Networking Infrastructure' },
        { name: 'Cisco', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/2560px-Cisco_logo_blue_2016.svg.png', description: 'Enterprise Networking Switches' },
        { name: 'Watchdog', logo: WatchdogIcon, description: 'Network Monitoring Solutions' },
        { name: 'Fortinet', logo: Fortinet, description: 'Network Security Firewalls' }
      ]
    }
  ];

  return (
    <section className="relative w-full pt-6 pb-6 md:pt-10 md:pb-10 bg-gradient-to-b from-white via-slate-50 to-white">
      
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slower"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative">

        {/* HEADER */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Trusted Technology <br /> Partners Worldwide
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We collaborate with industry-leading technology partners to deliver cutting-edge solutions.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="flex flex-col h-full rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden transition-all duration-500 group-hover:shadow-lg">
                <div className="p-6 border-b bg-gray-50">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </h3>
                </div>
                <div className="p-6 flex-grow space-y-6">
                  {category.partners.map((partner, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-16 h-16 border rounded-lg overflow-hidden relative">
                        <PartnerLogo name={partner.name} logo={partner.logo} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{partner.name}</h4>
                        <p className="text-sm text-gray-600">{partner.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
