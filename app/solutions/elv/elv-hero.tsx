'use client';
import bag from "../../assets/beanbag-person.png";
import securityImage from "../../../assets/homepage-27267_1280.png";
import avImage from "../../../assets/ict.png";
import attendanceImage from "../../../assets/automation.jpg";
import queueImage from "../../../assets/elv.png";
import bannerImage from "../../../assets/banner.png";
import { Car, Clock, ListChecks, Shield, Volume2, Zap } from "lucide-react";
import { motion } from "framer-motion";

const elvSolutions = [
  {
    title: 'Safety & Security Systems',
    icon: Shield,
    image: securityImage,
    description: [
      'Video Surveillance Systems (CCTV), Access Control System (ACS), Fire Alarm System (FAS), Intrusion Detection System (IDS), Physical Security Systems, Gate barriers, Bollards, RFID Systems and tracking system, UVSS (Under Vehicle Scanning System), DFMD (Door Frame Metal Detector) & HHMD (Hand-held Metal Detector).',
    ],
  },
  {
    title: 'Audio-Visual Systems (AV)',
    icon: Volume2,
    image: avImage,
    description: [
      'Public Address Systems (PA) and Sound Reinforcement Systems, Meeting Room Scheduling Systems, Display & Video Walls Systems, Satellite and Master Antenna TV (SMATV), IPTV Systems, Digital Signage Systems.',
    ],
  },
  {
    title: 'Time And Attendance Management Systems',
    icon: Clock,
    image: attendanceImage,
    description: [
      'Attendance processing is effective only when it’s real-time. Employees & managers need to fix issues ASAP and not at the end of the month. Technify’s attendance management solution handles all aspects with simplicity and efficiency. You experience bliss when attendance, leave, and payroll is seamlessly integrated.',
    ],
  },
  {
    title: 'Queue Management Systems',
    icon: ListChecks,
    image: queueImage,
    description: [
      'Kiosk-based queuing systems are often used for medical, banking, and many governmental service locations. As people arrive, they enter basic information into a kiosk about themselves and the reason for their visit. The information is organized and presented to staff to allow for faster customer service response. Kiosk-based systems also include an information tracking system for the business to report on statistics such as wait times, the volume of traffic and staff performance.',
    ],
  },
];

const elvFeatures = [
  {
    title: 'Parking Management Systems',
    icon: Car,
    description:
      'Our competitive edge is that, before we embark on any project, we employ our team of engineers and technicians to survey the site, conduct thorough analyses, in order to determine the requirements and specifications of the site, consequently design site-specific tailor made innovative solutions.',
  },
  {
    title: 'Clock Systems',
    icon: Clock,
    description:
      'A clock network or clock system is a set of synchronized clocks designed to always show exactly the same time by communicating with each other. Technify’s clock solution is based open system that is easily integrated with older types clocks to provide a one set of time sync.',
  },
  {
    title: 'Uninterruptible Power Source (UPS)',
    icon: Zap,
    description:
      'With a wide range of brands, Technify offers entire range of power backup solution which can be integrated with your building’s BMS.',
  },
];

export function ELVHero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a2332] to-[#2e3a4e] font-[Poppins,sans-serif]">
      <section className="relative py-20 flex flex-col items-center justify-center text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute inset-0 bg-gradient-to-br from-[#1a2332] to-[#2e3a4e] opacity-90"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-4xl mx-auto text-center rounded-3xl bg-gradient-to-br from-[#eaf6fb] to-[#d6eaf8] p-12 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#1a2332] mb-6"
            style={{ fontFamily: 'Poppins, Inter, sans-serif' }}
          >
            ELV Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-2xl text-[#00e6f6] max-w-2xl mx-auto font-medium"
            style={{ fontFamily: 'Poppins, Inter, sans-serif' }}
          >
            Comprehensive Extra Low Voltage systems including security, networking, and communication solutions.
          </motion.p>
        </motion.div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          {elvSolutions.map((solution, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="bg-[#232e3c] rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] overflow-hidden border border-[#00e6f6]/20 flex flex-col items-center"
            >
              {solution.image && (
                <img
                  src={solution.image.src}
                  alt={solution.title}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
              )}
              <div className="p-6 w-full flex flex-col items-center">
                <div className="p-3 bg-gradient-to-r from-[#00e6f6] to-[#2e3a4e] rounded-lg w-12 h-12 flex items-center justify-center mb-4 shadow-[0_0_16px_#00e6f6]">
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center font-[Poppins,sans-serif]">
                  {solution.title}
                </h3>
                {solution.description.map((desc, i) => (
                  <p
                    key={i}
                    className="text-[#b2eaf6] mb-4 leading-relaxed text-center font-[Poppins,sans-serif]"
                  >
                    {desc}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-[#232e3c] to-[#2e3a4e]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {elvFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="bg-[#232e3c] rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] p-8 flex flex-col items-center border border-[#00e6f6]/20"
            >
              <div className="bg-[#00e6f6]/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-[0_0_16px_#00e6f6]">
                <feature.icon className="w-8 h-8 text-[#00e6f6]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center font-[Poppins,sans-serif]">
                {feature.title}
              </h3>
              <p className="text-[#b2eaf6] text-center font-[Poppins,sans-serif]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
