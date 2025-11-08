'use client';

import AutomationHero from '../../../components/sections/automation-hero';
import { SEO } from '@/components/seo/seo';
import { useState } from 'react';

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

  return (
    <>
      <SEO 
        title="Automation Solutions - Smart Building & Industrial Automation Systems"
        description="Intelligent automation solutions at Technify Solutions including gate automation, building management systems, smart controls, HVAC automation, lighting control, and IoT solutions for enhanced operational efficiency and security."
        path="/solutions/automation"
        image="/images/og-automation-solutions.jpg"
      />
      <div className="min-h-screen">
        <AutomationHero />
       
        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our automation solutions
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md">
                  <button 
                    className="flex justify-between items-center w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    <svg 
                      className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  <div className={`px-6 pb-6 text-gray-600 ${openIndex === index ? 'block' : 'hidden'}`}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}