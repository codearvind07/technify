"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AboutHeroImage from "../../assets/abouthero.jpg";

// Online image URLs - Replace these with actual professional images

const TeamImage = "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80";
const OnlineCollaborationImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80";
const GlobalNetworkImage = "https://images.unsplash.com/photo-1596524460574-c594e355e48f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80";
const InnovationImage = "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80";

const strengths = [
  {
    title: "LIGHTNING-FAST DELIVERY",
    description: "We move at startup speed to deliver solutions that keep you ahead of the competition. Our agile approach means faster deployment and quicker results.",
    icon: "⚡",
    image: OnlineCollaborationImage
  },
  {
    title: "CUTTING-EDGE INNOVATION",
    description: "As a tech startup, we're always at the forefront of emerging technologies. We bring tomorrow's solutions to your business today.",
    icon: "🚀",
    image: InnovationImage
  },
  {
    title: "AGILE SOLUTIONS",
    description: "Our startup mentality means we adapt quickly to your needs. We pivot fast to ensure you get exactly what your business requires.",
    icon: "🔄",
    image: GlobalNetworkImage
  },
  {
    title: "STARTUP-POWERED EXPERTISE",
    description: "We combine the agility of a startup with enterprise-level expertise. The result is innovative solutions without the corporate overhead.",
    icon: "💡",
    image: OnlineCollaborationImage
  },
  {
    title: "FUTURE-FOCUSED APPROACH",
    description: "We don't just solve today's problems - we anticipate tomorrow's challenges. Our startup vision keeps you prepared for what's next.",
    icon: "🔮",
    image: InnovationImage
  }
];

const values = [
  {
    title: "Speed",
    description: "We move fast to keep you ahead of the competition.",
    icon: "⚡",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Innovation",
    description: "We're always exploring the next big thing in tech.",
    icon: "🚀",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Agility",
    description: "We adapt quickly to your changing needs.",
    icon: "🔄",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Simplicity",
    description: "We make complex technology simple to use.",
    icon: "🎯",
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Impact",
    description: "We focus on solutions that drive real results.",
    icon: "💥",
    color: "from-yellow-500 to-amber-500"
  }
];

const services = [
  "Knowledge of Professional Asset Groups",
  "Personal Client System",
  "Key Audit System",
  "Customer & Supervisor",
  "Power Solutions",
  "Integrated Auditor",
  "Governance System",
  "Public Address & Compliance System"
];

export default function AboutHero() {
  const [activeTab, setActiveTab] = useState("mission");
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15, 
        delayChildren: 0.2,
        ease: "easeOut"
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      },
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-cyan-50/10 font-sans">
      {/* Simplified Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px),
                             linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <main className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Simplified Hero Section */}
        <section className="relative py-12 flex flex-col items-center justify-center">
          <div className="relative z-10 w-full max-w-6xl mx-auto text-center">
            <div className="text-center">
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm text-slate-700 px-6 py-3 rounded-2xl mb-8 border border-slate-200/60 shadow-lg">
                <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mr-3"></span>
                <span className="font-semibold">About Technify Solutions</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-8 text-slate-900 tracking-tight leading-tight">
                THIS IS  WHO WE ARE
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-900 max-w-4xl mx-auto mb-12 font-light leading-relaxed">
                A high-speed tech startup revolutionizing ICT with 
                lightning-fast solutions, 
                cutting-edge innovation, and 
                agile delivery.
              </p>
            </div>
          </div>
        </section>

        {/* Enhanced Who We Are Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">
                  How We Serve You
                </h2>
                
                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {services.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start group"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mt-2 mr-4 flex-shrink-0" />
                      <span className="text-slate-700 group-hover:text-slate-900 transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-6">
                  <p className="text-slate-600 leading-relaxed text-lg">
                    <span className="font-bold text-slate-900">Technify Solutions</span> is more than just a technology provider, we're your strategic partner in digital transformation. As a dynamic startup, we bring fresh perspectives and cutting-edge solutions to drive your business forward.
                  </p>
                  
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Our agile team delivers end-to-end services across IT infrastructure, cybersecurity, automation systems, and cloud technologies. We understand that every business is unique, which is why we tailor our solutions to meet your specific challenges and objectives.
                  </p>
                  
                  <p className="text-slate-600 leading-relaxed text-lg">
                    From emerging startups to growing enterprises, organizations trust Technify Solutions to architect resilient technology ecosystems that scale with their ambitions. Our commitment to innovation and customer success drives extraordinary results.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl border border-slate-200/60">
                  <Image
                    src={AboutHeroImage}
                    alt="Technify Global Team"
                    fill
                    className="object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Why Choose Technify Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                WHY CHOOSE TECHNIFY
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Discover what sets us apart in the technology solutions industry with our innovative approach and global expertise
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {strengths.map((strength, index) => (
                <div 
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-200/60 hover:border-blue-300 transition-all group hover:shadow-2xl relative overflow-hidden"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-5">
                    <Image
                      src={strength.image}
                      alt=""
                      fill
                      className="object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="text-4xl mb-6 inline-block">
                      {strength.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {strength.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {strength.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-slate-200/60">
                      <span className="text-blue-600 text-sm font-semibold uppercase tracking-wide">
                        INNOVATION DRIVEN
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Vision & Mission Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                VISION &  MISSION
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-white p-10 rounded-3xl border border-slate-200/60 shadow-2xl hover:shadow-3xl transition-all group">
                <div className="w-20 h-20 flex items-center justify-center mb-8 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-8">OUR MISSION</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Delivered in bringing a license and intelligent virtual, launching Customer Experiences and Leading Team. We Promote a Future Home Safety and Innovation Partnership (COBE). Our responsibility is to contribute and capture specific approaches to make the world a safe, creative and more interconnected place for everyone.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-gray p-10 rounded-3xl border border-slate-200/60 shadow-2xl hover:shadow-3xl transition-all group">
                <div className="w-20 h-20 flex items-center justify-center mb-8 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-8">OUR VISION</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  To create solutions that empower communities with safety, intelligence, and security, fostering a brighter future for all. Our commitment to excellence drives us to continuously enhance our business using leading edge technology and dynamic innovation.
                </p>
              </div>
            </div>

            {/* Enhanced Values Section */}
            <div className="mt-20">
              <h3 className="text-3xl font-black text-slate-900 mb-12 text-center">OUR CORE VALUES</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {values.map((value, index) => (
                  <div 
                    key={index}
                    onMouseEnter={() => setHoveredValue(index)}
                    onMouseLeave={() => setHoveredValue(null)}
                    className="text-center p-8 rounded-3xl border border-slate-200/60 shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group"
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg text-2xl text-white`}
                    >
                      {value.icon}
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {value.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Culture Section */}
            <div className="mt-20 bg-gradient-to-br from-slate-50 to-blue-50/30 p-12 rounded-3xl border border-slate-200/60 shadow-2xl">
              <h3 className="text-3xl font-black text-slate-900 mb-8">OUR CULTURE</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-slate-600 leading-relaxed text-lg mb-6">
                    <span className="font-bold text-slate-900">People Come First.</span> We value our employees and believe they are truly responsible for our success. We continuously create opportunities for our people to grow professionally and prosper.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    At Technify, our team members work beyond customers' leadership processes and have an audience at different times, for us, and for the world.
                  </p>
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={TeamImage}
                    alt="Technify Team Culture"
                    fill
                    className="object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section className="py-20 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
              {/* Simplified Background */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-400 rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-black mb-8">
                  Let's Transform Your Vision
                </h2>
                
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl text-left max-w-md mx-auto shadow-2xl">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">GET IN TOUCH</h3>
                  <ul className="space-y-3 text-slate-700 mb-6">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      ACCOMMODATE ANNUAL REPORT
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      RESEARCH FOR YOUR COMPANY
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      WORKSHIP FOR YOU
                    </li>
                  </ul>
                  
                  <div className="space-y-2 text-slate-600">
                    <p>📧 info@technify.com</p>
                    <p>🌐 www.technify.com</p>
                    <p>📞 contact@technify.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}