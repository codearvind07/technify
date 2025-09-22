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
      highlight: "300% ROI in first year"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Operations Director", 
      company: "Global Industries",
      rating: 5,
      content: "Professional ELV solutions that revolutionized our building management systems. The seamless integration and ongoing support have been instrumental to our success.",
      highlight: "50% reduction in operational costs"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      position: "Digital Transformation Lead",
      company: "FutureTech Enterprises",
      rating: 5,
      content: "Working with Technify was a game-changer for our digital transformation journey. Their strategic approach and technical excellence delivered measurable business impact.",
      highlight: "40% faster time-to-market"
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Head of Innovation",
      company: "InnovateCorp",
      rating: 5,
      content: "The cloud migration project executed by Technify was flawless. Their proactive communication and technical expertise made a complex transition seamless for our organization.",
      highlight: "Zero downtime migration"
    }
  ];

  // Auto-advance slider
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length, isPaused]);

  // Animation variants
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const staggerItem: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Handle next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Handle previous testimonial
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Handle dot navigation
  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section 
      ref={ref}
      className="relative w-full py-20 md:py-28 overflow-hidden bg-gradient-to-br from-[#f7fafc] via-[#e3e8ee] to-[#f7fafc]"
    >
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e3e8ee]/90 via-[#f7fafc]/90 to-[#f7fafc]/90"></div>
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(circle at 15% 50%, #3b82f622 1px, transparent 1px),
                radial-gradient(circle at 85% 30%, #ff784922 1px, transparent 1px)
              `,
              backgroundSize: '44px 44px'
            }}
          ></div>
        </div>
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#3b82f6]/10 blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-[#ff7849]/10 blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Decorative corners */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-[#3b82f6]/20"></div>
        <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-[#ff7849]/20"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-[#3b82f6]/20"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-[#ff7849]/20"></div>

        {/* Header */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-lg border border-[#3b82f6]/20 rounded-full px-6 py-3 mb-8 shadow-xl">
            <motion.div 
              className="w-3 h-3 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#ff7849] animate-pulse"
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.div>
            <div className="w-2 h-2 rounded-full bg-[#3b82f6]"></div>
            <span className="text-[#3b82f6] text-sm font-semibold tracking-wider uppercase">Client Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            <span className="block text-[#232946] mb-3">
              <span className="bg-gradient-to-r from-[#3b82f6] via-[#ff7849] to-[#3b82f6] bg-clip-text text-transparent">
                Voices of Success
              </span>
            </span>
            <span className="block bg-gradient-to-r from-[#3b82f6] via-[#ff7849] to-[#3b82f6] bg-clip-text text-transparent">
              From Our Clients
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-[#4b5563] max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
            Discover how we've helped businesses transform their operations and achieve extraordinary results.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
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
                <div 
                  key={testimonial.id}
                  className="min-w-full flex-shrink-0"
                >
                  <div className="relative p-8 md:p-12 rounded-3xl border border-[#3b82f6]/10 bg-white backdrop-blur-xl shadow-xl transition-all duration-500">
                    {/* Quote icon */}
                    <div className="absolute top-6 right-6 text-[#3b82f6]/10">
                      <Quote className="w-16 h-16" />
                    </div>
                    <div className="relative flex flex-col md:flex-row gap-8 items-center">
                      {/* Profile image placeholder */}
                      <div className="relative flex-shrink-0">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#3b82f6]/20 bg-gradient-to-br from-[#3b82f6]/10 to-[#ff7849]/10 flex items-center justify-center">
                          <Award className="w-10 h-10 text-[#ff7849]" />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#ff7849] flex items-center justify-center shadow-lg">
                          <Star className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="flex-grow text-center md:text-left">
                        {/* Rating */}
                        <div className="flex justify-center md:justify-start mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 text-[#ffb400] fill-current" />
                          ))}
                        </div>
                        {/* Content */}
                        <p className="text-[#232946] mb-6 text-xl leading-snug whitespace-normal break-words max-w-2xl mx-auto md:mx-0">
                          "{testimonial.content}"
                        </p>
                        {/* Highlight */}
                        <div className="inline-block bg-gradient-to-r from-[#3b82f6]/10 to-[#ff7849]/10 border border-[#3b82f6]/20 rounded-full px-4 py-2 mb-4">
                          <span className="text-[#ff7849] font-semibold">{testimonial.highlight}</span>
                        </div>
                        {/* Author */}
                        <div>
                          <h4 className="font-bold text-[#232946] text-2xl">{testimonial.name}</h4>
                          <p className="text-[#4b5563] text-lg">
                            {testimonial.position}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Slider Controls */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 border border-[#3b82f6]/20 flex items-center justify-center backdrop-blur-lg hover:bg-[#3b82f6]/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] shadow-lg"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 border border-[#ff7849]/20 flex items-center justify-center backdrop-blur-lg hover:bg-[#ff7849]/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#ff7849] shadow-lg"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ff7849]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] ${
                  index === currentIndex ? 'bg-gradient-to-r from-[#3b82f6] to-[#ff7849]' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}