'use client';

import { SEO } from '@/components/seo/seo';
import Image from 'next/image';
import { useState } from 'react';
// Import images for the automation solutions
import Energy from "../../../assets/EnergyManagement.jpg";
import homeAutomation from "../../../assets/HomeAutomation.jpg";
import Commanda from "../../../assets/CommandControl.jpg";
import Lighting from "../../../assets/LCS.jpg";
import buildingManagement from "../../../assets/BuildingManagementSystem.jpg";
import building from "../../../assets/Integrated Building Management System (IBMS).jpg";
import robotics from "../../../assets/Robotics.jpg";

export default function AutomationSolutionsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What types of automation solutions do you offer?",
      answer: "We provide comprehensive automation solutions including building management systems (BMS), home automation, industrial process control, lighting control systems, energy management systems, and robotics automation. Each solution is tailored to meet specific client requirements."
    },
    {
      question: "How can automation improve energy efficiency?",
      answer: "Our automation systems optimize energy consumption by monitoring and controlling HVAC, lighting, and other electrical systems based on occupancy, time of day, and environmental conditions. Clients typically see 20-40% reduction in energy costs after implementation."
    },
    {
      question: "What is the implementation process?",
      answer: "Our implementation process includes initial consultation, system design, equipment procurement, installation, testing, and training. The timeline varies from 2-4 weeks for small residential projects to 3-6 months for large commercial installations."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support packages including 24/7 monitoring, preventive maintenance, system updates, and technical support. Our team ensures your automation systems operate at peak performance throughout their lifecycle."
    },
    {
      question: "Can existing buildings be retrofitted with automation systems?",
      answer: "Absolutely. We specialize in retrofitting existing buildings with modern automation solutions. Our systems are designed to integrate with existing infrastructure, minimizing disruption while maximizing efficiency improvements."
    }
  ];

  // Feature component
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

  // ListItem component
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

  // Tag component
  function Tag({ text }: { text: string }) {
    return (
      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
        {text}
      </span>
    );
  }

  return (
    <>
      <SEO 
        title="Automation Solutions - Smart Building & Industrial Automation Systems"
        description="Intelligent automation solutions at Technify Solutions including gate automation, building management systems, smart controls, HVAC automation, lighting control, and IoT solutions for enhanced operational efficiency and security."
        path="/solutions/automation"
        image={Energy}
      />
      
      {/* HERO SECTION - MATCHES ELV STYLE */}
      <section className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 text-blue-900">
        {/* Floating Blurred Orbs */}
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse-slow delay-700"></div>

        {/* Optional: Subtle background image overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image 
            src={Energy}
            alt="Automation Solutions"
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
                {/* Badge content can be added here if needed */}
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Smart <span className="text-orange-500">Automation</span>
                <br />
                For Modern Infrastructure
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-blue-700 leading-relaxed max-w-2xl">
                Transform your residential, commercial, or industrial spaces with cutting-edge automation technology 
                for enhanced efficiency, security, and comfort.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 text-blue-700">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
                  <span className="text-sm font-medium">24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
                  <span className="text-sm font-medium">Custom Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
                  <span className="text-sm font-medium">Energy Efficient</span>
                </div>
              </div>
            </div>

            {/* RIGHT VISUAL CARD */}
            <div className="relative hidden lg:block">
              <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl border-8 border-blue-100/40">
                <Image
                  src={Energy}
                  alt="Automation Solutions Visual"
                  fill
                  className="object-cover transform transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-100/60 to-transparent"></div>

                {/* Floating Mini Card */}
                <div className="absolute top-6 left-6 bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-blue-200 shadow-lg">
                  <p className="text-sm font-semibold text-blue-900">Smart Control</p>
                  <p className="text-xs text-blue-700">BMS • Lighting • HVAC</p>
                </div>

                <div className="absolute bottom-6 right-6 bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-blue-200 shadow-lg">
                  <p className="text-sm font-semibold text-blue-900">Energy Savings</p>
                  <p className="text-xs text-blue-700">20-40% Reduction</p>
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

      {/* ✅ ALL SOLUTIONS CONTENT BELOW (NEW STRUCTURE) */}

      <div className="container mx-auto px-6 py-16">
        {/* ENERGY MANAGEMENT */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src={Energy}
                  alt="Energy Management System" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="h-1 bg-gradient-to-r from-blue-600 to-orange-500 w-16 mr-4"></div>
                <h2 className="text-3xl font-bold text-gray-900">Energy Management System</h2>
              </div>
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  A smart energy monitoring platform that tracks usage, analyzes patterns, and optimizes consumption 
                  for commercial and industrial operations.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Feature text="Real-time monitoring" />
                  <Feature text="Energy usage reporting" />
                  <Feature text="Cost optimization" />
                  <Feature text="Grid performance management" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOME AUTOMATION */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 md:order-2">
              <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src={homeAutomation}
                  alt="Home Automation" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:w-1/2 md:order-1">
              <div className="flex items-center mb-4">
                <div className="h-1 bg-gradient-to-r from-blue-600 to-orange-500 w-16 mr-4"></div>
                <h2 className="text-3xl font-bold text-gray-900">Home Automation</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                An intelligent home automation ecosystem that connects lighting, scenes, security, and appliances 
                for seamless control from anywhere.
              </p>

              <div className="flex flex-wrap gap-3">
                <Tag text="Smart lighting automation" />
                <Tag text="Entertainment scene control" />
                <Tag text="Security integration" />
                <Tag text="Remote access" />
              </div>
            </div>
          </div>
        </section>

        {/* COMMAND CONTROL */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src={Commanda}
                  alt="Command Control Center" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="h-1 bg-gradient-to-r from-blue-600 to-orange-500 w-16 mr-4"></div>
                <h2 className="text-3xl font-bold text-gray-900">Command Control Center (CCSI)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                A centralized command platform that unifies real-time data, system alerts, and critical operations 
                into one intelligent control environment.
              </p>

              <ul className="space-y-3">
                <ListItem text="Intelligent Traffic Management" />
                <ListItem text="Data Center operations" />
                <ListItem text="Safety & Security systems" />
                <ListItem text="Early Warning alerts" />
              </ul>
            </div>
          </div>
        </section>

        {/* LIGHTING CONTROL */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 md:order-2">
              <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src={Lighting}
                  alt="Lighting Control System" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:w-1/2 md:order-1">
              <div className="flex items-center mb-4">
                <div className="h-1 bg-gradient-to-r from-blue-600 to-orange-500 w-16 mr-4"></div>
                <h2 className="text-3xl font-bold text-gray-900">Lighting Control System (LCS)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                An intelligent network-based lighting system that adapts to user needs and boosts efficiency 
                through automation and energy optimization.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200 mb-4">
                <p className="text-blue-800 font-semibold">
                  Network-based control with custom lighting scenarios and remote access capabilities.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Tag text="Network-based control" />
                <Tag text="Energy efficiency" />
                <Tag text="Custom lighting scenarios" />
                <Tag text="Remote access" />
              </div>
            </div>
          </div>
        </section>

        {/* BUILDING MANAGEMENT */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src={buildingManagement}
                  alt="Building Management System"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="h-1 bg-gradient-to-r from-blue-600 to-orange-500 w-16 mr-4"></div>
                <h2 className="text-3xl font-bold text-gray-900">Building Management System (BMS)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                A comprehensive building automation suite that manages HVAC, lighting, electrical systems, 
                and safety infrastructure with precision.
              </p>

              <ul className="space-y-3">
                <ListItem text="HVAC control" />
                <ListItem text="Lighting management" />
                <ListItem text="Power systems" />
                <ListItem text="Fire and security" />
              </ul>
            </div>
          </div>
        </section>

        {/* INTEGRATED BUILDING MANAGEMENT */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 md:order-2">
              <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src={building}
                  alt="Integrated Building Management System" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:w-1/2 md:order-1">
              <div className="flex items-center mb-4">
                <div className="h-1 bg-gradient-to-r from-blue-600 to-orange-500 w-16 mr-4"></div>
                <h2 className="text-3xl font-bold text-gray-900">Integrated Building Management System (IBMS)</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                A next-generation unified platform that integrates multiple building systems with web-based access, 
                analytics, and automated control.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Feature text="Facility management" />
                <Feature text="ERP compatibility" />
                <Feature text="Web-based access" />
                <Feature text="Multi-system integration" />
              </div>
            </div>
          </div>
        </section>

        {/* ROBOTICS */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src={robotics}
                  alt="Robotics & Automation" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="h-1 bg-gradient-to-r from-blue-600 to-orange-500 w-16 mr-4"></div>
                <h2 className="text-3xl font-bold text-gray-900">Robotics & Automation</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Custom robotic and industrial automation solutions designed to streamline workflows, 
                increase reliability, and support complex operations.
              </p>

              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h3 className="font-semibold text-orange-900 mb-3">Application-Specific Designs</h3>
                <p className="text-gray-700">
                  Industrial automation, system integration, and custom solutions tailored to your specific requirements.
                </p>
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
            <p className="text-gray-600 max-w-2xl mx-auto">Find answers to common questions about our automation solutions</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Implement Automation Solutions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us to discuss how our automation systems can transform your space for enhanced efficiency, 
            security, and comfort.
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