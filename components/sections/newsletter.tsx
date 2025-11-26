'use client';

import { motion, Variants } from 'framer-motion';
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

  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Floating particle animation
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
    <section className="relative pt-4 pb-12 md:pt-6 md:pb-16 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-2 left-2 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-2 right-2 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, #1F6FEB 1px, transparent 1px),
                linear-gradient(to bottom, #fb8500 1px, transparent 1px)
              `,
              backgroundSize: '45px 45px',
            }}
          ></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-sm rounded-3xl p-8 md:p-12"
        >
          {/* Header */}
          <div className="text-center mb-6">
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-orange-500 shadow-lg mb-4"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 220 }}
              viewport={{ once: true }}
            >
              <Mail className="w-8 h-8 text-white" />
            </motion.div>

            <motion.h2
              className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Stay Ahead with Our Newsletter
            </motion.h2>

            <motion.p
              className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Get insights, trends, and exclusive offers delivered to your inbox.
            </motion.p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto bg-gradient-to-r from-gray-50/70 to-gray-100/70 p-3 rounded-2xl shadow-sm backdrop-blur-md"
          >
            <div className="relative flex-grow">
              <Mail className="absolute left-5 top-1/2 transform -translate-y-1/2 text-blue-500 w-5 h-5" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full pl-14 pr-4 py-3 text-base bg-white/70 rounded-xl focus:ring-4 focus:ring-blue-200 outline-none transition-all shadow-sm border border-gray-200"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl shadow-sm hover:from-blue-700 hover:to-orange-600"
            >
              {isSubmitting ? 'Sending...' : 'Subscribe'}
            </button>
          </form>
        </motion.div>
      </div>

      
    </section>
  );
}
