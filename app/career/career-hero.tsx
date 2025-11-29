'use client';

import { motion, Variants } from 'framer-motion';
import { Users, Target, TrendingUp } from 'lucide-react';

/* Motion Variants */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

export default function CareerHero() {
  const benefits = [
    { icon: Target, title: 'Career Growth', description: 'Clear progression paths and professional development opportunities' },
    { icon: TrendingUp, title: 'Competitive Salary', description: 'Industry-leading compensation with performance bonuses' },
    { icon: Users, title: 'Great Culture', description: 'Collaborative environment with work-life balance' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-gray-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(to right, #1F6FEB 1px, transparent 1px),
                                linear-gradient(to bottom, #fb8500 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          ></div>
        </div>
      </div>

      <main>
        {/* ------------------ HERO SECTION ------------------ */}
        <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8">
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
                Shape The Future With Technify
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 text-center transition-all duration-300 hover:shadow-lg group flex flex-col"
                >
                  <div className="flex-grow">
                    <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-blue-50 rounded-xl group-hover:bg-blue-100 transition">
                      <benefit.icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------ APPLICATION FORM SECTION ------------------ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-12">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                Ready to Apply?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-600 max-w-2xl mx-auto">
                Fill out the application form below. Our team will review your profile and get back to you.
              </motion.p>
            </motion.div>

            {/* FORM CONTAINER */}
            <motion.form
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-gray-50/60 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg p-8 md:p-10 space-y-6"
            >
              {/* GRID INPUTS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Enter your full name" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="example@domain.com" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                  <input type="tel" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Enter your phone number" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Experience (in Years)</label>
                  <input type="number" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. 2" />
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Why should we hire you?</label>
                <textarea rows={4} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Write a short message..."></textarea>
              </div>

              {/* SUBMIT BUTTON */}
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }} className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-md hover:bg-blue-700 transition-colors duration-300">
                Submit Application
              </motion.button>
            </motion.form>
          </div>
        </section>
      </main>
    </div>
  );
}
