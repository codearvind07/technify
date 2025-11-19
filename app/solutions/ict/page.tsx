'use client';

import { SEO } from '@/components/seo/seo';
import Image from 'next/image';
import { useState } from 'react';
// Import images for the ICT solutions
import networkInfrastructure from '../../../assets/Intelligent.jpg';
import dataStorage from '../../../assets/AdvancedDataStorage.jpg';
import ictHero from '../../../assets/ictnabber.jpg';
import trackingImage from '../../../assets/SmartAsset.jpg';

export default function ICTSolutionsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is included in your ICT solutions?",
      answer: "Our comprehensive ICT solutions include network infrastructure, data storage systems, asset tracking, communication technology, cybersecurity services, cloud solutions, and managed IT services. We provide end-to-end technology solutions tailored to your business needs."
    },
    {
      question: "How do you ensure network security in your ICT solutions?",
      answer: "We implement multi-layered security approaches including firewalls, intrusion detection systems, encryption protocols, access controls, and regular security audits. Our solutions comply with industry standards and best practices to protect your data and infrastructure."
    },
    {
      question: "What kind of support do you provide after implementation?",
      answer: "We offer 24/7 monitoring, proactive maintenance, system updates, technical support, and regular performance optimization. Our dedicated support team ensures your ICT infrastructure operates at peak performance with minimal downtime."
    },
    {
      question: "Can you integrate your solutions with our existing systems?",
      answer: "Yes, our solutions are designed for seamless integration with existing infrastructure. We conduct thorough assessments to ensure compatibility and provide migration strategies that minimize disruption to your operations while maximizing the benefits of new technology."
    },
    {
      question: "What is the typical implementation timeline for ICT projects?",
      answer: "Implementation timelines vary based on project scope and complexity. Small network upgrades can be completed in 2-3 weeks, while comprehensive ICT infrastructure projects typically take 2-4 months. We provide detailed project timelines during the consultation phase."
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
        title="ICT Solutions - Complete Information Communication Technology Services"
        description="Comprehensive ICT solutions at Technify Solutions including IT infrastructure, networking, data management, communication technology, and complete information systems for enterprise and commercial applications."
        path="/solutions/ict"
        image={ictHero}
      />
      
      {/* HERO SECTION - MATCHES ELV STYLE */}
      <section className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 text-blue-900">
        {/* Floating Blurred Orbs */}
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse-slow delay-700"></div>

        {/* Optional: Subtle background image overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image 
            src={ictHero}
            alt="ICT Solutions"
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
                Smart <span className="text-orange-500">ICT Solutions</span>
                <br />
                For Modern Businesses
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-blue-700 leading-relaxed max-w-2xl">
                Transform your business with cutting-edge Information Communication Technology infrastructure 
                for enhanced connectivity, data management, and operational efficiency.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 text-blue-700">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
                  <span className="text-sm font-medium">99.9% Network Uptime</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
                  <span className="text-sm font-medium">24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
                  <span className="text-sm font-medium">Scalable Solutions</span>
                </div>
              </div>
            </div>

            {/* RIGHT VISUAL CARD */}
            <div className="relative hidden lg:block">
              <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl border-8 border-blue-100/40">
                <Image
                  src={ictHero}
                  alt="ICT Solutions Visual"
                  fill
                  className="object-cover transform transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-100/60 to-transparent"></div>

                {/* Floating Mini Card */}
                <div className="absolute top-6 left-6 bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-blue-200 shadow-lg">
                  <p className="text-sm font-semibold text-blue-900">Network Infrastructure</p>
                  <p className="text-xs text-blue-700">Cabling • WIFI • Data Centers</p>
                </div>

                <div className="absolute bottom-6 right-6 bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-blue-200 shadow-lg">
                  <p className="text-sm font-semibold text-blue-900">Data Storage</p>
                  <p className="text-xs text-blue-700">Secure & Scalable Solutions</p>
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
        {/* NETWORK INFRASTRUCTURE */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src={networkInfrastructure}
                  alt="Intelligent Network Infrastructure" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="h-1 bg-gradient-to-r from-blue-600 to-orange-500 w-16 mr-4"></div>
                <h2 className="text-3xl font-bold text-gray-900">Intelligent Network Infrastructure</h2>
              </div>
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Technify's Network solution consists of Structured Cabling System (Passive), 
                  Converged Networking (Active), Data Centres Solutions and WIFI Systems.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Our latest implementation was done through intelligent structured cabling. 
                  It was implemented through the real time monitoring of each and every port 
                  on both switches and patches.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Feature text="Structured Cabling" />
                  <Feature text="Converged Networking" />
                  <Feature text="Data Centre Solutions" />
                  <Feature text="WIFI Systems" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ASSET TRACKING */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 md:order-2">
              <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src={trackingImage}
                  alt="Smart Asset Tracking" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:w-1/2 md:order-1">
              <div className="flex items-center mb-4">
                <div className="h-1 bg-gradient-to-r from-blue-600 to-orange-500 w-16 mr-4"></div>
                <h2 className="text-3xl font-bold text-gray-900">Smart Asset Tracking</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Technify's Asset tracking solutions covers company's physical assets either 
                by scanning barcode labels attached to the assets or by using tags using 
                GPS or RFID, which broadcast their location.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Our Solution is unique where it provides real-time, accurate data on what 
                a company owns, how an asset is used and its contribution.
              </p>

              <div className="flex flex-wrap gap-3">
                <Tag text="Barcode Scanning" />
                <Tag text="GPS Tracking" />
                <Tag text="RFID Technology" />
                <Tag text="Real-time Analytics" />
              </div>
            </div>
          </div>
        </section>

        {/* DATA STORAGE */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src={dataStorage}
                  alt="Advanced Data Storage" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="h-1 bg-gradient-to-r from-blue-600 to-orange-500 w-16 mr-4"></div>
                <h2 className="text-3xl font-bold text-gray-900">Advanced Data Storage</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The most important asset is information availability and relevance of which 
                are the key factors of success in competitive environment. This situation 
                stimulates large-scale development of data storage technologies.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Technify's state-of-the-art data storage solutions ensures reliable storage 
                of information resources and access to them. The system includes disc arrays, 
                access infrastructure and data storage control software systems.
              </p>

              <ul className="space-y-3">
                <ListItem text="Disk Arrays" />
                <ListItem text="Access Infrastructure" />
                <ListItem text="Control Software" />
                <ListItem text="High Availability" />
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl mb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Find answers to common questions about our ICT solutions</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Revolutionize Your ICT Infrastructure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that trust Technify Solutions for their digital transformation journey. 
            Contact us to discuss how our ICT solutions can transform your business operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg transform hover:scale-105 duration-300">
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}