'use client';

import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1200);
  };

  // floating particle animation
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('span');
      particle.className = 'absolute rounded-full bg-blue-400 opacity-20';
      const size = Math.random() * 10 + 6;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 6 + 4}s`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      particle.style.animationName = 'float';
      particle.style.animationIterationCount = 'infinite';
      document.getElementById('particles')?.appendChild(particle);

      setTimeout(() => particle.remove(), 10000);
    };

    const interval = setInterval(createParticle, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100">
      {/* Animated background lights */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-cyan-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-gradient-to-r from-indigo-400/30 to-pink-300/30 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Floating particles */}
      <div id="particles" className="absolute inset-0 pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_50px_rgba(0,0,0,0.05)] rounded-3xl p-10 md:p-16"
        >
          {/* Header */}
          <div className="text-center mb-10">
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 rounded-3xl  shadow-lg mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 220 }}
              viewport={{ once: true }}
            >
              <Mail className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h2
              className="text-5xl font-extrabold bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Stay Ahead with Our Newsletter
            </motion.h2>
            <motion.p
              className="text-gray-600 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Get fresh insights, industry trends, and special offers delivered straight to your inbox every month.
            </motion.p>
          </div>

          {/* Form or Success Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {isSubmitted ? (
              <motion.div
                className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border border-green-200 rounded-2xl p-10 text-center max-w-2xl mx-auto shadow-inner"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 250 }}
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                >
                  <CheckCircle className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You for Subscribing!</h3>
                <p className="text-gray-700">We’ve sent a confirmation email to your inbox. Stay tuned for updates!</p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto bg-gradient-to-r from-gray-50/70 to-gray-100/70 p-3 rounded-2xl shadow-md backdrop-blur-md"
              >
                <div className="relative flex-grow">
                  <Mail className="absolute left-5 top-1/2 transform -translate-y-1/2 text-blue-500 w-6 h-6" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-14 pr-4 py-4 text-lg bg-white/70 rounded-xl focus:ring-4 focus:ring-blue-200 outline-none transition-all shadow-sm"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-blue-300 transition-all flex items-center justify-center group"
                >
                  {isSubmitting ? (
                    <svg
                      className="animate-spin h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      ></path>
                    </svg>
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Footer note */}
          <motion.p
            className="text-center text-gray-500 mt-8 text-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <svg
              className="w-4 h-4 mr-2 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            We respect your privacy. You can unsubscribe anytime.
          </motion.p>
        </motion.div>
      </div>

      {/* Styles */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-40px);
            opacity: 0.7;
          }
          100% {
            transform: translateY(0);
            opacity: 0.4;
          }
        }
      `}</style>
    </section>
  );
}
