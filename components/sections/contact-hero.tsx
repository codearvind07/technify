'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';
import contactImage from '../../assets/beanbag-person.png';

export function ContactHero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 font-[Poppins,sans-serif]">
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
            style={{ fontFamily: 'Poppins, Inter, sans-serif' }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-2xl bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent max-w-2xl mx-auto font-medium"
            style={{ fontFamily: 'Poppins, Inter, sans-serif' }}
          >
            Get in touch with our team. We're here to help with any questions or inquiries you may have.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Details & Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 flex flex-col justify-center"
          >
            <div className="relative h-80 w-full rounded-xl overflow-hidden">
              <Image
                src={contactImage}
                alt="Contact Us"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-4">GET IN TOUCH</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Details</h3>
            <div className="flex items-start gap-4 mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-orange-500 p-3 rounded-full text-white">
                <MapPin className="w-6 h-6" />
              </span>
              <div>
                <div className="font-bold text-gray-900 mb-1">Address</div>
                <div className="text-gray-600 text-sm">
                  5,Gautam Nagar New Delhi 110049<br />
                  29-71, Block 19, Cantonment tower, Close-080019
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-orange-500 p-3 rounded-full text-white">
                <Phone className="w-6 h-6" />
              </span>
              <div>
                <div className="font-bold text-gray-900 mb-1">Phone Numbers</div>
                <div className="text-gray-600 text-sm">
                  91- 9999769378<br />
                  +91 9821112352
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="bg-gradient-to-r from-blue-500 to-orange-500 p-3 rounded-full text-white">
                <Mail className="w-6 h-6" />
              </span>
              <div>
                <div className="font-bold text-gray-900 mb-1">Email</div>
                <div className="text-gray-600 text-sm">
                  info@technify.co.in<br />
                  Nishant@technify.co.in
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 flex flex-col justify-center"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Get Technified</h3>
            <form className="space-y-4 mb-8">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200 transition-all"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200 transition-all"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200 transition-all"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200 transition-all"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-3 rounded-full font-semibold hover:from-blue-700 hover:to-orange-600 transition-all shadow-lg font-[Poppins,sans-serif]"
              >
                Submit
              </button>
            </form>
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-orange-500 p-3 rounded-full text-white hover:from-blue-700 hover:to-orange-600 transition-all">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.593 1.325-1.326v-21.349c0-.734-.592-1.326-1.325-1.326z"/></svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-orange-500 p-3 rounded-full text-white hover:from-blue-700 hover:to-orange-600 transition-all">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 00-8.384 4.482c-4.083-.205-7.697-2.162-10.125-5.144a4.822 4.822 0 00-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.418a9.867 9.867 0 01-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 007.548 2.212c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.025 10.025 0 0024 4.557z"/></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-orange-500 p-3 rounded-full text-white hover:from-blue-700 hover:to-orange-600 transition-all">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.601 2.002 3.601 4.604v5.592z"/></svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps?q=Gautam+Nagar+New+Delhi+110049&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Technify Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}