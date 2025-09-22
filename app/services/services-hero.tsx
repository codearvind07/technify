"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Import images
import DesignServiceImage from "../../assets/beanbag-person.png";
import SupportServiceImage from "../../assets/beanbag-person.png";

const services = [
  {
    id: 1,
    title: "Design",
    description: "Technify design engineers have a vast experience in the different phases of all aspects of solutions, whereby the performance and regulations are met.",
    detailedDescription: "Our team is located in India and Singapore, are involved first hand in building clients designs and re-design of an existing requirement or simply provide consultations to our clients.",
    features: [
      "Comprehensive solution design",
      "Performance optimization",
      "Regulatory compliance",
      "Client consultation services",
      "Redesign of existing systems"
    ],
    image: DesignServiceImage,
    color: "from-blue-500 to-orange-500",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Support",
    description: "Technify's Support team also known as Pre and Post sales service team are measured (and appreciated) by their prompt response.",
    detailedDescription: "The team's main focus is to take full ownership of the project's solution in the form of create, design, and built a solution which not only meet but exceeds customers expectation and ensure customer's delight.",
    features: [
      "Pre and post-sales support",
      "Prompt response times",
      "Full project ownership",
      "Customer satisfaction focus",
      "Solution design and implementation"
    ],
    image: SupportServiceImage,
    color: "from-blue-500 to-orange-500",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 19.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  }
];

const stats = [
  { value: "24/7", label: "Support Availability" },
  { value: "100+", label: "Projects Completed" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" }
];

export default function ServicesHero() {
  const [activeService, setActiveService] = useState(0);

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

  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 font-[Poppins,sans-serif] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full opacity-10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500 rounded-full opacity-10 blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-blue-500 rounded-full opacity-5 blur-3xl animate-pulse-slow animation-delay-4000"></div>
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 -z-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <main className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="relative py-12 flex flex-col items-center justify-center text-gray-900">
          <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center"
            >
              <motion.div 
                variants={itemVariants}
                className="inline-flex items-center bg-gradient-to-r from-blue-500/10 to-orange-500/10 text-blue-600 px-4 py-2 rounded-full mb-6 border border-blue-500/30"
              >
                <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full mr-2 animate-pulse"></span>
                Expert Services
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900 tracking-tight leading-tight"
              >
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Professional Services</span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 font-light leading-relaxed"
              >
                Comprehensive design and support services to bring your vision to life with technical excellence and customer satisfaction.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-blue-500/10 to-orange-500/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <motion.div 
                variants={itemVariants}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Services</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Delivering exceptional design and support services with global expertise
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    variants={itemVariants}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all group border border-gray-200 hover:border-blue-500/30 relative"
                    whileHover={{ y: -8 }}
                    onMouseEnter={() => setActiveService(index)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                    
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
                    </div>
                    
                    <div className="p-8 relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div className={`p-3 bg-gradient-to-r ${service.color} rounded-xl w-14 h-14 flex items-center justify-center mb-4 shadow-lg`}>
                          {service.icon}
                        </div>
                        <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">0{service.id}</div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <p className="text-gray-900 mb-6 leading-relaxed border-l-4 border-blue-500 pl-4 italic">
                        {service.detailedDescription}
                      </p>
                      
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                              <span className="text-gray-900">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button className="flex-1 bg-gradient-to-r from-blue-600 to-orange-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all shadow-md hover:-translate-y-0.5">
                          Learn More
                        </button>
                        <button className="flex-1 border-2 border-blue-500 text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-500/10 transition-all">
                          Contact Us
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white relative rounded-2xl mt-12">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNwcmltYXJ5IiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSI+PHBhdGggZD0iTSAwIDAgTCA2MCA2MCBNIDYwIDAgTCAwIDYwIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="text-center mb-16"
            >
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Process</span>
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
                How we deliver exceptional results for our clients
              </motion.p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div 
                variants={itemVariants}
                className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 hover:border-blue-500/30 transition-all group text-center hover:shadow-lg"
                whileHover={{ y: -5 }}
              >
                <div className="bg-gradient-to-r from-blue-500 to-orange-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Consultation</h3>
                <p className="text-gray-600">We begin by understanding your unique requirements and challenges through detailed consultation.</p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 hover:border-blue-500/30 transition-all group text-center hover:shadow-lg"
                whileHover={{ y: -5 }}
              >
                <div className="bg-gradient-to-r from-blue-500 to-orange-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Design</h3>
                <p className="text-gray-600">Our expert team creates comprehensive solutions tailored to your specific needs and regulations.</p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 hover:border-blue-500/30 transition-all group text-center hover:shadow-lg"
                whileHover={{ y: -5 }}
              >
                <div className="bg-gradient-to-r from-blue-500 to-orange-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Implementation</h3>
                <p className="text-gray-600">We build and deploy your solution with precision, ensuring quality and performance standards.</p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 hover:border-blue-500/30 transition-all group text-center hover:shadow-lg"
                whileHover={{ y: -5 }}
              >
                <div className="bg-gradient-to-r from-blue-500 to-orange-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Support</h3>
                <p className="text-gray-600">Our dedicated team provides ongoing support to ensure your solution continues to perform optimally.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-orange-500 text-white relative overflow-hidden rounded-2xl mt-12">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNwcmltYXJ5LWZvcmVncm91bmQiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2Utb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNIDAgMCBMIDYwIDYwIE0gNjAgMCBMIDAgNjAiLz48L2c+PC9zdmc+')] opacity-20"></div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Start Your Project?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl mb-10 max-w-3xl mx-auto"
            >
              Contact our experts today to discuss how our services can help you achieve your goals
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:-translate-y-1">
                Get a Consultation
              </button>
              <button className="bg-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-800 transition-all shadow-lg hover:-translate-y-1 border-2 border-transparent">
                View Our Portfolio
              </button>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}