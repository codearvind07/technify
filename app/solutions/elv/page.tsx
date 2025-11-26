'use client';

import { SEO } from '@/components/seo/seo';
import img1 from "../../../assets/LightingControlSystem.jpg"
import img2 from "../../../assets/BuildingManagementSystem.jpg"
import img3 from "../../../assets/HomeAutomation.jpg"
import img4 from "../../../assets/LightingControlSystem.jpg"
import img5 from "../../../assets/TimeAndAttendance.jpg"
import img6 from "../../../assets/Queue Management Systems.jpg"
import img7 from "../../../assets/Parking.jpg"
import img8 from "../../../assets/Clock Systems.jpg"
import img9 from "../../../assets/Uninterruptible.jpg"
import Image from 'next/image';
import { useState } from 'react';

export default function ELVSolutionsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is an ELV system?",
      answer: "Extra Low Voltage (ELV) systems operate at voltages typically below 50V AC or 120V DC. These systems include security, communication, and control technologies that are safer and more efficient for modern buildings."
    },
    {
      question: "How do ELV systems improve building security?",
      answer: "Our ELV security solutions include integrated CCTV, access control, intrusion detection, and fire alarm systems that work together to provide comprehensive protection. These systems offer real-time monitoring, instant alerts, and remote access capabilities."
    },
    {
      question: "What maintenance is required for ELV systems?",
      answer: "We recommend quarterly inspections for critical systems and annual comprehensive maintenance. Our systems are designed for reliability with remote monitoring capabilities that can predict and prevent issues before they occur."
    },
    {
      question: "Can ELV systems be integrated with existing infrastructure?",
      answer: "Yes, our ELV solutions are designed for seamless integration with existing building management systems. We provide retrofit solutions that enhance your current infrastructure without requiring complete replacement."
    },
    {
      question: "What is the typical implementation timeline?",
      answer: "Implementation varies based on project scope. Small installations can be completed in 2-4 weeks, while large commercial projects typically take 2-6 months. We provide detailed project timelines during the consultation phase."
    }
  ];

  return (
    <>
      <SEO 
        title="ELV Solutions - Extra Low Voltage Systems & Security Solutions"
        description="Comprehensive ELV solutions including security systems, CCTV, access control, fire safety, public address, networking, and communication systems."
        path="/solutions/elv"
        image={img1}
      />

      {/* HERO SECTION - MATCHES AutomationHero STYLE */}
      <section className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 text-blue-900">
        {/* Floating Blurred Orbs */}
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse-slow delay-700"></div>

        {/* Optional: Subtle background image overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image 
            src={img2}
            alt="ELV Solutions"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/90"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2">
               
                
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Cutting-Edge <span className="text-orange-500">ELV Systems</span>
                <br />
                For Secure & Smart Infrastructure
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-blue-700 leading-relaxed max-w-2xl">
                Integrated Extra Low Voltage solutions enhancing safety, security, 
                communication, and operational efficiency for commercial, industrial, 
                and large-scale enterprise environments.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 text-blue-700">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
                  <span className="text-sm font-medium">24/7 Monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
                  <span className="text-sm font-medium">System Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
                  <span className="text-sm font-medium">High-Level Security</span>
                </div>
              </div>
            </div>

            {/* RIGHT VISUAL CARD */}
            <div className="relative hidden lg:block">
              <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl border-8 border-blue-100/40">
                <Image
                  src={img2}
                  alt="ELV Solutions Visual"
                  fill
                  className="object-cover transform transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-100/60 to-transparent"></div>

                {/* Floating Mini Card */}
                <div className="absolute top-6 left-6 bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-blue-200 shadow-lg">
                  <p className="text-sm font-semibold text-blue-900">Integrated Security</p>
                  <p className="text-xs text-blue-700">CCTV • Access Control • Fire Safety</p>
                </div>

                <div className="absolute bottom-6 right-6 bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-blue-200 shadow-lg">
                  <p className="text-sm font-semibold text-blue-900">Reliable Performance</p>
                  <p className="text-xs text-blue-700">Real-time Monitoring & Alerts</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animation Keyframe */}
        <style jsx>{`
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.1); }
          }
          .animate-pulse-slow {
            animation: pulse-slow 6s ease-in-out infinite;
          }
        `}</style>
      </section>
      {/* ✅ END NEW HERO SECTION */}


      {/* ✅ ALL YOUR ORIGINAL CONTENT BELOW (UNCHANGED) */}


      {/* Safety & Security Systems */}
      <div className="container mx-auto px-6 py-16">
        {/* All sections below remain EXACTLY the same */}
        
        {/* SAFETY */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src={img3}
                  alt="Safety & Security Systems" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="h-1 bg-gradient-to-r from-blue-600 to-orange-500 w-16 mr-4"></div>
                <h2 className="text-3xl font-bold text-gray-900">Safety & Security Systems</h2>
              </div>
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Video Surveillance Systems (CCTV), Access Control System (ACS), Fire Alarm System (FAS),
                  Intrusion Detection System (IDS), Physical Security Systems, Gate barriers, Bolands RFID 
                  Systems, UVSS, DPMD & HMMD.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Feature text="Integrated security ecosystem" />
                  <Feature text="Advanced surveillance technology" />
                  <Feature text="Comprehensive access management" />
                  <Feature text="Emergency response systems" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AUDIO VISUAL */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 md:order-2">
              <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src={img4}
                  alt="Audio-Visual Systems" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:w-1/2 md:order-1">
              <div className="flex items-center mb-4">
                <div className="h-1 bg-gradient-to-r from-blue-600 to-orange-500 w-16 mr-4"></div>
                <h2 className="text-3xl font-bold text-gray-900">Audio-Visual Systems (AV)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Public Address Systems (PA), Sound Reinforcement, Meeting Room Booking, Display Walls, SMATV, 
                IPTV & Digital Signage Systems.
              </p>

              <AVGrid />
            </div>
          </div>
        </section>


        {/* TIME & ATTENDANCE */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src={img5}
                  alt="Time & Attendance Management" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="h-1 bg-gradient-to-r from-blue-600 to-orange-500 w-16 mr-4"></div>
                <h2 className="text-3xl font-bold text-gray-900">Time And Attendance Management Systems</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Attendance processing is effective only when it's real-time. Our attendance management solution 
                handles all aspects with simplicity and efficiency.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200 mb-4">
                <p className="text-blue-800 font-semibold">
                  Experience bliss when attendance, leave, and payroll work seamlessly together.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Tag text="Real-time Processing" />
                <Tag text="Seamless Integration" />
                <Tag text="Cloud-based Solution" />
              </div>
            </div>
          </div>
        </section>


        {/* QUEUE MANAGEMENT */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 md:order-2">
              <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src={img6}
                  alt="Queue Management Systems" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:w-1/2 md:order-1">
              <div className="flex items-center mb-4">
                <div className="h-1 bg-gradient-to-r from-blue-600 to-orange-500 w-16 mr-4"></div>
                <h2 className="text-3xl font-bold text-gray-900">Queue Management Systems</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Kiosk-based queuing systems used in hospitals, banks, government services, and more provide 
                faster service, transparency, and analytics.
              </p>

              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h3 className="font-semibold text-orange-900 mb-3">Business Intelligence</h3>
                <p className="text-gray-700">
                  Track wait times, customer volume, staff performance, and real-time service analytics.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* PARKING MANAGEMENT */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src={img7}
                  alt="Parking Management Systems"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="h-1 bg-gradient-to-r from-blue-600 to-orange-500 w-16 mr-4"></div>
                <h2 className="text-3xl font-bold text-gray-900">Parking Management Systems</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                We survey and analyze your site to design tailored, high-performance parking solutions.
              </p>

              <ul className="space-y-3">
                <ListItem text="Automated entry and exit systems" />
                <ListItem text="Real-time parking availability" />
                <ListItem text="Mobile payment integration" />
                <ListItem text="Analytics and reporting" />
              </ul>
            </div>
          </div>
        </section>


        {/* CLOCK SYSTEMS */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 md:order-2">
              <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src={img8}
                  alt="Clock Systems" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:w-1/2 md:order-1">
              <div className="flex items-center mb-4">
                <div className="h-1 bg-gradient-to-r from-blue-600 to-orange-500 w-16 mr-4"></div>
                <h2 className="text-3xl font-bold text-gray-900">Clock Systems</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                A synchronized clock system ensuring a unified, accurate time display across all devices 
                and full integration with legacy clocks.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SyncCard />
              </div>
            </div>
          </div>
        </section>


        {/* UPS */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src={img9}
                  alt="UPS Systems" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="h-1 bg-gradient-to-r from-blue-600 to-orange-500 w-16 mr-4"></div>
                <h2 className="text-3xl font-bold text-gray-900">Uninterruptible Power Source (UPS)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Technify offers a full range of UPS solutions integrated with your building’s 
                automation system for consistent and reliable backup.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <StatCard number="99.9%" label="Reliability" />
                <StatCard number="24/7" label="Support" />
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                <Tag text="Backup Power" />
                <Tag text="Power Monitoring" />
                <Tag text="Energy Efficiency" />
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl mb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Find answers to common questions about our ELV solutions</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md">
                <button 
                  className="flex justify-between items-center w-full p-6 text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <svg 
                    className={`w-5 h-5 text-blue-600 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6 text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl text-white mb-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Implement ELV Solutions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us to discuss how our Extra Low Voltage systems can enhance your facility's 
            safety, security, and efficiency.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg transform hover:scale-105 duration-300">
              Get In Touch
            </a>
           
          </div>
        </div>
      </section>

    </>
  );
}

/* ===================== MINI COMPONENTS ===================== */

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-start">
      <div className="bg-blue-100 p-2 rounded-full mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
        </svg>
      </div>
      <p>{text}</p>
    </div>
  );
}

function ListItem({ text }: { text: string }) {
  return (
    <li className="flex items-start">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
      </svg>
      <span>{text}</span>
    </li>
  );
}

function Tag({ text }: { text: string }) {
  return (
    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
      {text}
    </span>
  );
}

function StatCard({ number, label }: { number: string, label: string }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 text-center">
      <div className="text-3xl font-bold text-blue-600 mb-2">{number}</div>
      <p className="text-sm">{label}</p>
    </div>
  );
}

function AVGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        </div>
        <h4 className="font-semibold text-blue-800 mb-2">Public Address</h4>
        <p className="text-sm text-gray-600">Clear audio communication systems</p>
      </div>

      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h4 className="font-semibold text-blue-800 mb-2">Digital Signage</h4>
        <p className="text-sm text-gray-600">Dynamic information displays</p>
      </div>

      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </div>
        <h4 className="font-semibold text-blue-800 mb-2">Video Systems</h4>
        <p className="text-sm text-gray-600">IPTV and video wall solutions</p>
      </div>
    </div>
  );
}

function SyncCard() {
  return (
    <>
      <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-start">
        <div className="bg-blue-100 p-2 rounded-lg mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <h4 className="font-semibold">Synchronization</h4>
          <p className="text-sm text-gray-600">All clocks show the same time</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-start">
        <div className="bg-blue-100 p-2 rounded-lg mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </div>
        <div>
          <h4 className="font-semibold">Integration</h4>
          <p className="text-sm text-gray-600">Works with existing systems</p>
        </div>
      </div>
    </>
  );
}
