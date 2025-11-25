'use client';

import { motion, Variants } from 'framer-motion';
import { Upload, Send, ArrowRight, Users, Target, TrendingUp } from 'lucide-react';
import { useState } from 'react';

/* Motion Variants */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

export default function CareerHero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    experience: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const benefits = [
    { icon: Target, title: "Career Growth", description: "Clear progression paths and professional development opportunities" },
    { icon: TrendingUp, title: "Competitive Salary", description: "Industry-leading compensation with performance bonuses" },
    { icon: Users, title: "Great Culture", description: "Collaborative environment with work-life balance" }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <main>

        {/* ------------------ HERO SECTION ------------------ */}
        <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* TEXT */}
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Build Your Career with Technify
                </span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl text-gray-900 mb-6 leading-tight font-semibold">
                Shape The <span className="text-blue-600">Future</span> With Technify
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-2xl leading-relaxed mb-4">
                Join our team of innovators and visionaries. Create cutting-edge solutions that transform industries.
              </motion.p>
            </motion.div>

            {/* IMAGE */}
            <motion.div variants={fadeInUp} className="relative">
              <div className="relative rounded-lg overflow-hidden border border-gray-200 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200"
                  alt="Career Hero"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ------------------ BENEFITS SECTION ------------------ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div variants={staggerContainer} className="text-center mb-16">
              <motion.h2 variants={fadeInUp} className="text-3xl text-gray-900 font-semibold mb-4">
                Why Join Technify?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-600 max-w-2xl mx-auto">
                We invest in our team's growth and success with comprehensive benefits and opportunities.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-8 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-blue-50 rounded-xl">
                    <benefit.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------ FORM SECTION ------------------ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-gray-50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* INFO */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl border border-gray-200">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Ready to Join Us?</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Send us your application and let's start a conversation.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>Fast application process</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>Response within 48 hours</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>Multiple interview rounds</li>
              </ul>
            </motion.div>

            {/* FORM */}
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-xl border border-gray-200 space-y-6"
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-semibold text-gray-900">Apply Now</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input name="name" value={formData.name} onChange={handleInputChange} required placeholder="Full Name" className="input-field" />
                <input name="email" value={formData.email} onChange={handleInputChange} required placeholder="Email" className="input-field" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input name="mobile" value={formData.mobile} onChange={handleInputChange} required placeholder="Mobile Number" className="input-field" />
                <input name="experience" value={formData.experience} onChange={handleInputChange} placeholder="Experience" className="input-field" />
              </div>
              <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4} placeholder="Cover Letter" className="input-field" />
              <motion.button whileHover={{ scale: 1.02 }} className="w-full bg-gradient-to-r from-blue-600 to-sky-500 text-white py-4 rounded-lg flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Submit Application
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.form>
          </div>
        </section>

      </main>
    </div>
  );
}
