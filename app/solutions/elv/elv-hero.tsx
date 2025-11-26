'use client';
import Image from "next/image";
import securityImage from "../../../assets/homepage-27267_1280.png";
import avImage from "../../../assets/ict.png";
import attendanceImage from "../../../assets/automation.jpg";
import queueImage from "../../../assets/elv.png";
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
      'Attendance processing is effective only when it\'s real-time. Employees & managers need to fix issues ASAP and not at the end of the month. Technify\'s attendance management solution handles all aspects with simplicity and efficiency. You experience bliss when attendance, leave, and payroll is seamlessly integrated.',
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
      'A clock network or clock system is a set of synchronized clocks designed to always show exactly the same time by communicating with each other. Technify\'s clock solution is based open system that is easily integrated with older types clocks to provide a one set of time sync.',
  },
  {
    title: 'Uninterruptible Power Source (UPS)',
    icon: Zap,
    description:
      'With a wide range of brands, Technify offers entire range of power backup solution which can be integrated with your building\'s BMS.',
  },
];

export function ELVHero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 font-[Poppins,sans-serif]">
      <section className="relative py-20 flex flex-col items-center justify-center text-gray-900 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 opacity-90"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-4xl mx-auto text-center rounded-3xl bg-gradient-to-br from-white to-gray-50 p-12 shadow-lg border border-gray-200"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6"
          >
            ELV Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-2xl bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent max-w-2xl mx-auto font-medium"
          >
            Comprehensive Extra Low Voltage systems including security, networking, and communication solutions.
          </motion.p>
          
          {/* Added CTA button with blue-orange gradient */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10"
          >
            <a
              href="#solutions"
              className="inline-block bg-gradient-to-r from-blue-600 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-orange-600 transition-all shadow-lg hover:-translate-y-1"
            >
              Explore Solutions
            </a>
          </motion.div>
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
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 flex flex-col items-center hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
              </div>
              <div className="p-6 w-full flex flex-col items-center">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-orange-500 rounded-lg w-12 h-12 flex items-center justify-center mb-4 shadow-lg">
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {solution.title}
                </h3>
                {solution.description.map((desc, i) => (
                  <p
                    key={i}
                    className="text-gray-600 mb-4 leading-relaxed text-center"
                  >
                    {desc}
                  </p>
                ))}
                
                {/* Added Learn More button with blue-orange gradient */}
                <button className="mt-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-700 hover:to-orange-600 transition-all shadow-md">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional ELV Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our specialized ELV solutions designed to enhance your infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {elvFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-blue-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
                
                {/* Added Learn More button with blue-orange gradient */}
                <button className="mt-6 bg-gradient-to-r from-blue-600 to-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-700 hover:to-orange-600 transition-all shadow-md">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Implement ELV Solutions?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our experts today to discuss how our ELV solutions can enhance your infrastructure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:-translate-y-1">
              Get a Consultation
            </button>
            <button className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition-all shadow-lg hover:-translate-y-1 border-2 border-transparent">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}