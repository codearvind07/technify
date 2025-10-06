'use client';

import { SEO } from '@/components/seo/seo';
import Image from 'next/image';
import networkInfrastructure from '../../../assets/BuildingManagementSystem.jpg';
import dataStorage from '../../../assets/EnergyManagement.jpg';
import ictHero from '../../../assets/ict.png';
import trackingImage from '../../../assets/anunay-rai-6zXiSHgQDcM-unsplash.jpg';

export default function ICTSolutionsPage() {
  return (
    <>
      <SEO 
        title="ICT Solutions - Complete Information Communication Technology Services"
        description="Comprehensive ICT solutions at Technify Solutions including IT infrastructure, networking, data management, communication technology, and complete information systems for enterprise and commercial applications."
        path="/solutions/ict"
        image="/images/og-ict-solutions.jpg"
      />
      
      {/* Animated Hero Section */}
      <div className="relative bg-gray-900 text-white py-24 overflow-hidden pt-24"> {/* Increased padding from pt-20 to pt-24 */}
        <div className="absolute inset-0">
          <Image 
            src={networkInfrastructure} 
            alt="ICT Solutions Background" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-700/70 to-orange-600/70"></div>
        </div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-8">
            
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb- bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
            ICT Solutions
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
            Transform Your Business with Cutting-Edge Information Communication Technology Infrastructure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Start Your Digital Transformation
            </a>
            <a 
              href="#solutions" 
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Explore Solutions
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div id="solutions" className="container mx-auto px-4 py-20">
        {/* Network Solution Section */}
        <section className="mb-28 relative">
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
            <div className="text-8xl font-bold text-gray-100 -rotate-90 whitespace-nowrap">
              NETWORK
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-8 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Intelligent Network Infrastructure</h2>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Technify's Network solution consists of Structured Cabling System (Passive), 
                  Converged Networking (Active), Data Centres Solutions and WIFI Systems.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Our latest implementation was done through intelligent structured cabling. 
                  It was implemented through the real time monitoring of each and every port 
                  on both switches and patches.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Structured Cabling
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Converged Networking
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Data Centre Solutions
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    WIFI Systems
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <Image 
                    src={networkInfrastructure} 
                    alt="Network Infrastructure" 
                    fill 
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">Real-time Monitoring Visualization</h3>
                      <p className="opacity-90">Intelligent structured cabling with port monitoring</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tracking Systems Section */}
        <section className="mb-28 relative">
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
            <div className="text-8xl font-bold text-gray-100 rotate-90 whitespace-nowrap">
              TRACKING
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-200">
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <Image 
                    src={trackingImage} 
                    alt="Asset Tracking" 
                    fill 
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">Smart Asset Tracking</h3>
                      <p className="opacity-90">GPS & RFID Technology for real-time asset monitoring</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-orange-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-8 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Smart Asset Tracking</h2>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Technify's Asset tracking solutions covers company's physical assets either 
                  by scanning barcode labels attached to the assets or by using tags using 
                  GPS or RFID, which broadcast their location.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Our Solution is unique where it provides real-time, accurate data on what 
                  a company owns, how an asset is used and its contribution.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Barcode Scanning
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    GPS Tracking
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    RFID Technology
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Real-time Analytics
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Storage Systems Section */}
        <section className="mb-28 relative">
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
            <div className="text-8xl font-bold text-gray-100 -rotate-90 whitespace-nowrap">
              STORAGE
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-600 to-green-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-8 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Advanced Data Storage</h2>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  The most important asset is information availability and relevance of which 
                  are the key factors of success in competitive environment. This situation 
                  stimulates large-scale development of data storage technologies.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Technify's state-of-the-art data storage solutions ensures reliable storage 
                  of information resources and access to them. The system includes disc arrays, 
                  access infrastructure and data storage control software systems.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Disk Arrays
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Access Infrastructure
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Control Software
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    High Availability
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200">
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <Image 
                    src={dataStorage} 
                    alt="Data Storage Systems" 
                    fill 
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">Data Storage Systems</h3>
                      <p className="opacity-90">Secure & Scalable Solutions for Enterprise Data</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform hover:scale-105 transition duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Network Uptime</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform hover:scale-105 transition duration-300">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Asset Tracking</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform hover:scale-105 transition duration-300">
              <div className="text-3xl font-bold text-green-600 mb-2">PB+</div>
              <div className="text-gray-600">Data Storage Capacity</div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-orange-500 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 text-center text-white py-16 px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Revolutionize Your ICT Infrastructure?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that trust Technify Solutions for their digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Get Free Consultation
              </a>
              <a 
                href="/solutions" 
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Explore All Solutions
              </a>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
}