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
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
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
      className="relative w-full py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(to right, #1F6FEB 1px, transparent 1px),
                              linear-gradient(to bottom, #fb8500 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            <span className="block text-gray-900 mb-3">
              <span className="text-gray-900">
                Voices of Success
              </span>
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
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
                  <div className="relative p-8 md:p-12 rounded-3xl border border-gray-200 bg-white backdrop-blur-xl shadow-sm transition-all duration-500">
                    {/* Quote icon */}
                    <div className="absolute top-6 right-6 text-blue-500/10">
                      <Quote className="w-16 h-16" />
                    </div>
                    <div className="relative flex flex-col md:flex-row gap-8 items-center">
                      {/* Profile image placeholder */}
                      <div className="relative flex-shrink-0">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-orange-50 flex items-center justify-center">
                          <Award className="w-10 h-10 text-orange-500" />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-orange-500 flex items-center justify-center shadow-lg">
                          <Star className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="flex-grow text-center md:text-left">
                        {/* Rating */}
                        <div className="flex justify-center md:justify-start mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
                          ))}
                        </div>
                        {/* Content */}
                        <p className="text-gray-900 mb-6 text-xl leading-snug whitespace-normal break-words max-w-2xl mx-auto md:mx-0">
                          "{testimonial.content}"
                        </p>
                        {/* Highlight */}
                        <div className="inline-block bg-gradient-to-r from-blue-50 to-orange-50 border border-blue-200 rounded-full px-4 py-2 mb-4">
                          <span className="text-orange-500 font-semibold">{testimonial.highlight}</span>
                        </div>
                        {/* Author */}
                        <div>
                          <h4 className="font-bold text-gray-900 text-2xl">{testimonial.name}</h4>
                          <p className="text-gray-600 text-lg">
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
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 border border-blue-200 flex items-center justify-center backdrop-blur-lg hover:bg-blue-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 border border-orange-200 flex items-center justify-center backdrop-blur-lg hover:bg-orange-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  index === currentIndex ? 'bg-gradient-to-r from-blue-500 to-orange-500' : 'bg-gray-300'
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