"use client";

import { Metadata } from 'next';
import ScrollStack, { ScrollStackItem } from '@/components/ui/scroll-stack';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import auto from '../../assets/automation.jpg';
import elv from '../../assets/elv.png';
import ict from '../../assets/ict.png';
import { SEO } from '@/components/seo/seo';



// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function SolutionsPage() {
  const solutions = [
    {
      title: "AUTOMATION SOLUTIONS",
      subtitle: "Intelligent Control Systems",
      description:
        "Technify's automation division continuously researches innovative control applications and delivers integrated solutions tailored to every need. Our in-house Automation Systems Engineers help design and implement robust, scalable processing systems.",
      extendedDescription: "From industrial process automation to smart building management, we create intelligent ecosystems that optimize performance, reduce operational costs, and enhance safety protocols through cutting-edge technology integration.",
      features: [
        "Industrial Process Control",
        "Smart Building Management",
        "SCADA Systems",
        "PLC Programming",
        "HMI Development",
        "IoT Integration"
      ],
      benefits: [
        "40% Reduction in Operational Costs",
        "Enhanced Safety & Compliance",
        "Real-time Monitoring & Control",
        "Predictive Maintenance"
      ],
      image: auto,
      link: "/solutions/automation",
      color: "from-blue-500 to-orange-500"
    },
    {
      title: "ELV SOLUTIONS",
      subtitle: "Extra-Low Voltage Systems",
      description:
        "Technify's Extra-Low Voltage (ELV) solutions are an integral part of any electrical project scope. We specialize in turnkey delivery across a comprehensive stack of ELV systems for safety, efficiency, and seamless integration.",
      extendedDescription: "Our comprehensive ELV portfolio covers security, communication, and control systems that form the backbone of modern intelligent buildings and infrastructure projects.",
      features: [
        "CCTV & Security Systems",
        "Access Control Solutions",
        "Fire Alarm Systems",
        "Public Address Systems",
        "Structured Cabling",
        "Nurse Call Systems"
      ],
      benefits: [
        "Integrated Security Solutions",
        "24/7 Monitoring Capabilities",
        "Scalable Infrastructure",
        "Compliance with Safety Standards"
      ],
      image: elv,
      link: "/solutions/elv",
      color: "from-orange-500 to-blue-500"
    },
    {
      title: "ICT SOLUTIONS",
      subtitle: "Information & Communication Technology",
      description:
        "Technify's Information & Communication Technology (ICT) division unifies connectivity through reliable infrastructure and modern architectures to enable cohesive, scalable communication across the enterprise.",
      extendedDescription: "We deliver future-ready ICT infrastructure that supports digital transformation initiatives, cloud integration, and seamless communication across all organizational levels.",
      features: [
        "Network Infrastructure",
        "Cloud Solutions",
        "Unified Communications",
        "Data Center Solutions",
        "Cybersecurity Services",
        "Managed IT Services"
      ],
      benefits: [
        "99.9% Network Uptime",
        "Enhanced Data Security",
        "Scalable Cloud Infrastructure",
        "24/7 Technical Support"
      ],
      image: ict,
      link: "/solutions/ict",
      color: "from-blue-600 to-orange-400"
    },
  ];

  return (
    <>
      <SEO 
        title="Solutions - Comprehensive Technology Solutions for Business Transformation"
        description="Explore our comprehensive solutions at Technify including Automation, ELV, and ICT systems designed to transform modern business operations."
        path="/solutions"
        image="/images/og-solutions.jpg"
      />
      <div className="min-h-screen bg-gradient-to-br from-white to-gray-100">
        {/* Hero Section */}
        <section className="relative py-20 flex flex-col items-center justify-center text-gray-900 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 opacity-90"
          />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 w-full max-w-4xl mx-auto text-center rounded-3xl bg-gradient-to-br from-white to-gray-50 p-12 shadow-lg border border-gray-200"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6"
            >
              Our Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-2xl bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent max-w-2xl mx-auto font-medium"
            >
              Comprehensive technology solutions designed to transform your business and drive innovation.
            </motion.p>
          </motion.div>
        </section>

        {/* Scroll Stack Solutions */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <ScrollStack
              itemDistance={80}
              itemScale={0.04}
              itemStackDistance={25}
              stackPosition="20%"
              scaleEndPosition="10%"
              baseScale={0.85}
              rotationAmount={1}
              blurAmount={0.5}
            >
              {solutions.map((solution, index) => (
                <ScrollStackItem key={index}>
                  <div className="flex flex-col md:flex-row items-center gap-12 h-full">
                    <div className="md:w-2/5 flex justify-center">
                      <div className="relative w-80 h-80 rounded-3xl overflow-hidden shadow-2xl">
                        <Image 
                          src={solution.image} 
                          alt={solution.title} 
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${solution.color} opacity-20`}></div>
                      </div>
                    </div>
                    <div className="md:w-3/5 text-center md:text-left">
                      <h3 className="text-4xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                      <p className={`text-xl font-semibold mb-6 bg-gradient-to-r ${solution.color} bg-clip-text text-transparent`}>
                        {solution.subtitle}
                      </p>
                      <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                        {solution.description}
                      </p>
                      <div className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start">
                        {solution.features.slice(0, 4).map((feature, idx) => (
                          <span 
                            key={idx} 
                            className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 text-sm shadow-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <Link 
                        href={solution.link}
                        className={`inline-block bg-gradient-to-r ${solution.color} text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1`}
                      >
                        Explore {solution.title.split(' ')[0]}
                      </Link>
                    </div>
                  </div>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-2xl text-white mb-8 max-w-3xl mx-auto">
              Contact our experts to discuss how our solutions can help you achieve your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#eff6ff", color: "#3b82f6" }}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all shadow-lg"
              >
                Schedule a Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#3b82f6" }}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all shadow-lg"
              >
                View Our Portfolio
              </motion.button>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}