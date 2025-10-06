'use client';

import { motion } from 'framer-motion';
import { Upload, Send, ArrowRight, Users, Target, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export default function CareerHero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    experience: '',
    message: ''
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  const benefits = [
    {
      icon: Target,
      title: "Career Growth",
      description: "Clear progression paths and professional development opportunities"
    },
    {
      icon: TrendingUp,
      title: "Competitive Salary",
      description: "Industry-leading compensation with performance bonuses"
    },
    {
      icon: Users,
      title: "Great Culture",
      description: "Collaborative environment with work-life balance"
    }
  ];

  const positions = [
    {
      title: "Frontend Developer",
      type: "Full-time",
      location: "Remote",
      experience: "2+ years"
    },
    {
      title: "Backend Engineer",
      type: "Full-time",
      location: "New Delhi",
      experience: "3+ years"
    },
    {
      title: "UI/UX Designer",
      type: "Full-time",
      location: "Hybrid",
      experience: "2+ years"
    },
    {
      title: "DevOps Engineer",
      type: "Full-time",
      location: "Remote",
      experience: "4+ years"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20 font-sans overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-500 rounded-full blur-3xl"
        />
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <main className="relative">
        {/* Enhanced Hero Section with Images */}
        <section className="relative py-28 flex flex-col items-center justify-center text-white overflow-hidden">
          {/* Background Images with Gradient Overlay */}
          <div className="absolute inset-0">
            {/* Main hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
              }}
            />
            
            {/* Secondary overlay image for depth */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
              }}
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-900/85 via-amber-900/75 to-yellow-900/80"></div>
          </div>

          {/* Floating tech elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-20 left-10 w-24 h-24 opacity-20"
            >
              <img 
                src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                alt="Tech element"
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
            
            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -3, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-20 right-10 w-20 h-20 opacity-20"
            >
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                alt="Tech element"
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 w-full max-w-6xl mx-auto text-center px-4"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white/90 px-6 py-3 rounded-2xl mb-8 border border-white/30"
            >
              <motion.span 
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-amber-400 rounded-full mr-3"
              />
              Build Your Future With Us
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight"
            >
              Shape The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                Future
              </span>{" "}
              With Technify
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 font-light leading-relaxed"
            >
              Join our team of innovators and visionaries. Create cutting-edge solutions that transform industries and impact millions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-semibold hover:bg-orange-50 hover:shadow-2xl transition-all flex items-center justify-center group shadow-lg"
              >
                View Open Positions
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all flex items-center justify-center group"
              >
                Learn About Culture
              </motion.button>
            </motion.div>
          </motion.div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 relative -mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-black bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-6">
                Why Join Technify?
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                We invest in our team's growth and success with comprehensive benefits and opportunities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-200/60 hover:shadow-3xl transition-all group text-center"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="bg-gradient-to-br from-orange-500 to-amber-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg"
                  >
                    <benefit.icon className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Culture Section with Images */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="space-y-6">
                <h2 className="text-4xl font-black bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  Our Culture
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  At Technify, we believe in creating an environment where innovation thrives and team members grow together. Our culture is built on collaboration, creativity, and continuous learning.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200/60"
                  >
                    <div className="text-2xl font-black text-orange-600 mb-2">Flexible</div>
                    <div className="text-slate-600">Remote & hybrid work options</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200/60"
                  >
                    <div className="text-2xl font-black text-orange-600 mb-2">Learning</div>
                    <div className="text-slate-600">Regular training & workshops</div>
                  </motion.div>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="rounded-2xl overflow-hidden shadow-lg"
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      alt="Team collaboration"
                      className="w-full h-48 object-cover"
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="rounded-2xl overflow-hidden shadow-lg"
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      alt="Office environment"
                      className="w-full h-32 object-cover"
                    />
                  </motion.div>
                </div>
                <div className="space-y-4 pt-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="rounded-2xl overflow-hidden shadow-lg"
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      alt="Team meeting"
                      className="w-full h-32 object-cover"
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="rounded-2xl overflow-hidden shadow-lg"
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      alt="Innovation workspace"
                      className="w-full h-48 object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            >
              {/* Company Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="bg-white rounded-3xl shadow-2xl p-8 border border-slate-200/60">
                  <h2 className="text-3xl font-black bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-6">
                    Ready to Join Us?
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    Send us your application and let's start a conversation about your future at Technify. We're always looking for talented individuals who share our passion for innovation.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-slate-700">Fast application process</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-slate-700">Response within 48 hours</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-slate-700">Multiple interview rounds</span>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-slate-200/60">
                    <div className="text-2xl font-black bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                      50+
                    </div>
                    <div className="text-slate-600 text-sm">Team Members</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-slate-200/60">
                    <div className="text-2xl font-black bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                      15+
                    </div>
                    <div className="text-slate-600 text-sm">Years Experience</div>
                  </div>
                </div>
              </motion.div>

              {/* Application Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="bg-white rounded-3xl shadow-2xl p-8 border border-slate-200/60"
              >
                <h3 className="text-2xl font-black text-slate-900 mb-2">Apply Now</h3>
                <p className="text-slate-600 mb-8">Fill out the form below to start your application</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 border border-slate-200 transition-all hover:border-orange-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 border border-slate-200 transition-all hover:border-orange-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Mobile Number *
                      </label>
                      <input
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        required
                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 border border-slate-200 transition-all hover:border-orange-300"
                        placeholder="+91 99999 99999"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Experience
                      </label>
                      <input
                        type="text"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 border border-slate-200 transition-all hover:border-orange-300"
                        placeholder="Years of experience"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Upload Resume *
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 border border-slate-200 transition-all hover:border-orange-300 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-orange-500/10 file:text-orange-600 hover:file:bg-orange-500/20"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Cover Letter
                    </label>
                    <textarea
                      name="message"
                      placeholder="Tell us why you're interested in joining Technify..."
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 border border-slate-200 transition-all hover:border-orange-300 resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white py-5 rounded-2xl font-semibold hover:shadow-2xl transition-all shadow-lg flex items-center justify-center group"
                  >
                    <Send className="w-5 h-5 mr-3" />
                    Submit Application
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}