'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { Star, Quote, Award } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CTO",
      company: "TechCorp Solutions",
      rating: 5,
      content: "Technify transformed our IT infrastructure with exceptional automation solutions. Their team's expertise and dedication delivered results beyond our expectations.",
      highlight: "300% ROI in first year",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Operations Director",
      company: "Global Industries",
      rating: 5,
      content: "Professional ELV solutions that revolutionized our building management systems. The seamless integration and ongoing support have been instrumental to our success.",
      highlight: "50% reduction in operational costs",
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      position: "Digital Transformation Lead",
      company: "FutureTech Enterprises",
      rating: 5,
      content: "Working with Technify was a game-changer for our digital transformation journey. Their strategic approach and technical excellence delivered measurable business impact.",
      highlight: "40% faster time-to-market",
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Head of Innovation",
      company: "InnovateCorp",
      rating: 5,
      content: "The cloud migration project executed by Technify was flawless. Their proactive communication and technical expertise made a complex transition seamless for our organization.",
      highlight: "Zero downtime migration",
    },
  ];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      ref={ref}
      className="relative w-full pt-10 md:pt-14 pb-20 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white"
    >
      {/* Background Decorations – FIXED */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(to right, #1F6FEB 1px, transparent 1px),
                                linear-gradient(to bottom, #fb8500 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header Section – Optimized */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Voices of Success
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">
            Discover how we've helped businesses transform their operations and achieve extraordinary results.
          </p>
        </motion.div>

        {/* Slider Container */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative rounded-3xl overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full flex-shrink-0">
                  <div className="relative p-8 md:p-12 rounded-3xl border border-gray-200 bg-white shadow-lg transition-all duration-500">
                    <div className="absolute top-6 right-6 text-blue-500/10">
                      <Quote className="w-16 h-16" />
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-orange-50 flex items-center justify-center">
                        <Award className="w-10 h-10 text-orange-500" />
                      </div>
                      <div className="text-center md:text-left flex-grow">
                        <p className="text-gray-900 text-xl leading-snug mb-4">"{testimonial.content}"</p>
                        <div className="bg-gradient-to-r from-blue-50 to-orange-50 border border-blue-200 rounded-full px-4 py-2 inline-block mb-4">
                          <span className="text-orange-500 font-semibold">{testimonial.highlight}</span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-gray-600">{testimonial.position}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-gradient-to-r from-blue-500 to-orange-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
