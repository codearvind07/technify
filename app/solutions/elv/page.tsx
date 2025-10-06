import { Metadata } from 'next';
import { SEO } from '@/components/seo/seo';
import img1 from "../../../assets/LightingControlSystem.jpg"
import img2 from "../../../assets/BuildingManagementSystem.jpg"
import img3 from "../../../assets/HomeAutomation.jpg"
import img4 from "../../../assets/LightingControlSystem.jpg"
import img5 from "../../../assets/victor.jpg"
import img6 from "../../../assets/slider1.jpg"
import img7 from "../../../assets/slide2.jpg"
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'ELV Solutions | Technify Solutions - Extra Low Voltage Systems',
  description: 'Comprehensive ELV solutions including security systems, CCTV, access control, fire safety, public address, and communication systems for commercial and industrial applications.',
};

export default function ELVSolutionsPage() {
  return (
    <>
      <SEO 
        title="ELV Solutions - Extra Low Voltage Systems & Security Solutions"
        description="Comprehensive ELV solutions at Technify Solutions including security systems, CCTV, access control, fire safety, public address, networking, and communication systems for commercial, industrial, and datacenter applications."
        path="/solutions/elv"
        image={img1}
      />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden pt-20"> {/* Added pt-20 to account for header height */}
        <div className="absolute inset-0 z-0 opacity-30">
          <Image 
            src={img2} 
            alt="ELV Solutions" 
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">ELV Solutions</h1>
            <p className="text-xl mb-8">
              Comprehensive Extra Low Voltage systems integrating safety, security, and communication solutions for modern infrastructure
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Get a Quote
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-full font-semibold transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Safety & Security Systems */}
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
                  Systems and tracking system, UVSS (Under Vehicle Scanning System), DPMD (Door Frame Metal 
                  Detector) & HMMD (Hand-held Metal Detector).
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>Integrated security ecosystem</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>Advanced surveillance technology</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>Comprehensive access management</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>Emergency response systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Audio-Visual Systems */}
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
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Public Address Systems (PA) and Sound Reinforcement Systems, Meeting Rooms Scheduling Systems, 
                  Display & Video Walls Systems, Satellite and Master Antenna TV (SMATV), IPTV Systems, Digital 
                  Signage Systems.
                </p>
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
              </div>
            </div>
          </div>
        </section>

        {/* Time & Attendance Management */}
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
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Attendance processing is effective only when it's real-time. Employees & managers need to fix 
                  issues ASAP and not at the end of the month. Technify's attendance management solution handles 
                  all aspects with simplicity and efficiency.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                  <p className="text-blue-800 font-semibold">
                    You experience bliss when attendance, leave, and payroll is seamlessly integrated.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Real-time Processing</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Seamless Integration</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Cloud-based Solution</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Queue Management Systems */}
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
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Kiosk-based queuing systems are often used for medical, banking and many governmental service 
                  locations. As people arrive, they enter basic information into a kiosk about themselves and 
                  the reason for their visit.
                </p>
                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                  <h3 className="font-semibold text-orange-900 mb-3">Business Intelligence</h3>
                  <p className="text-gray-700">
                    The information is organised and presented to staff to allow for faster customer service response. 
                    Kiosk-based systems also include an information tracking system for the business to report on 
                    statistics such as wait times, the volume of traffic and staff performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Parking Management Systems */}
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
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Our competitive edge is that, before we embark on any project, we employ our team of engineers 
                  and technicians to survey the site, conduct thorough analyses, in order to determine the 
                  requirements and specifications of the site, consequently design site-specific tailor made 
                  innovative solutions.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Automated entry and exit systems</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Real-time parking availability</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Mobile payment integration</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Analytics and reporting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Clock Systems */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 md:order-2">
              <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src={img1} 
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
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  A clock network or clock system is a set of synchronized clocks designed to always show exactly 
                  the same time by communicating with each other. Technify's clock solution is based upon system 
                  that is easily integrated with older types clocks to provide a one set of time sync.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* UPS Systems */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src={img2} 
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
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  With a wide range of brands, Technify offers entire range of power backup solution which can 
                  be integrated with your building's BMS.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                    <p className="text-sm">Reliability</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                    <p className="text-sm">Support</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Backup Power</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Power Monitoring</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Energy Efficiency</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl text-white mb-16">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Implement ELV Solutions?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us to discuss how our Extra Low Voltage systems can enhance your facility's safety, security, and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg transform hover:scale-105 duration-300"
              >
                Get In Touch
              </a>
              <a 
                href="/solutions" 
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all shadow-lg transform hover:scale-105 duration-300"
              >
                View All Solutions
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}