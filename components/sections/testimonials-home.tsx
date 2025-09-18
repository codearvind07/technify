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
      className="relative w-full py-20 md:py-28 overflow-hidden"
    >
      {/* Animated background with gradient layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(circle at 15% 50%, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                radial-gradient(circle at 85% 30%, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                conic-gradient(from 0deg at 50% 50%, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))
              `,
              backgroundSize: '40px 40px, 40px 40px, 100% 100%'
            }}
          ></div>
        </div>
        
        {/* Floating geometric shapes */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative">
        {/* Decorative corner accents with glow effect */}
        <div className="absolute top-0 left-0 w-24 h-24">
          <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-blue-500/30"></div>
          <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-blue-400/50 animate-pulse"></div>
        </div>
        <div className="absolute top-0 right-0 w-24 h-24">
          <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-blue-500/30"></div>
          <div className="absolute top-0 right-0 w-10 h-10 border-t border-r border-blue-400/50 animate-pulse"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-24 h-24">
          <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-blue-500/30"></div>
          <div className="absolute bottom-0 left-0 w-10 h-10 border-b border-l border-blue-400/50 animate-pulse"></div>
        </div>
        <div className="absolute bottom-0 right-0 w-24 h-24">
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-blue-500/30"></div>
          <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-blue-400/50 animate-pulse"></div>
        </div>
        
        {/* Professional header with enhanced storytelling */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-20 relative"
        >
          <div className="inline-flex items-center gap-3 bg-slate-800/60 backdrop-blur-lg border border-blue-500/30 rounded-full px-6 py-3 mb-8 shadow-xl">
            <motion.div 
              className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity 
              }}
            ></motion.div>
            <div className="w-2 h-2 rounded-full bg-[#1F6FEB]"></div>
            <span className="text-[#C9D1D9]/80 text-sm font-medium tracking-wider uppercase">Client Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block text-white mb-3">
              <span className="bg-gradient-to-r from-blue-200 via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                Voices of Success
              </span>
            </span>
            <span className="block bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 bg-clip-text text-transparent">
                From Our Clients
              </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-300/90 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
            Discover how we've helped businesses transform their operations and achieve extraordinary results
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slider Container */}
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
                  <div className="relative p-8 md:p-12 rounded-3xl border border-white/20 bg-slate-800/40 backdrop-blur-xl shadow-xl transition-all duration-500">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Quote icon */}
                    <div className="absolute top-6 right-6 text-blue-400/20">
                      <Quote className="w-16 h-16" />
                    </div>
                    
                    {/* Content */}
                    <div className="relative flex flex-col md:flex-row gap-8 items-center">
                      {/* Profile image */}
                      <div className="relative flex-shrink-0">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-blue-400/30">
                          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                          <Award className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-grow text-center md:text-left">
                        {/* Rating */}
                        <div className="flex justify-center md:justify-start mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        
                        {/* Content */}
                        <p className="text-slate-200/90 mb-6 text-xl leading-snug whitespace-normal break-words max-w-2xl mx-auto md:mx-0">
                          "{testimonial.content}"
                        </p>
                        
                        {/* Highlight */}
                        <div className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full px-4 py-2 mb-4">
                          <span className="text-blue-300 font-medium">{testimonial.highlight}</span>
                        </div>
                        
                        {/* Author */}
                        <div>
                          <h4 className="font-bold text-white text-2xl">{testimonial.name}</h4>
                          <p className="text-slate-300/80 text-lg">
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
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-800/60 border border-white/30 flex items-center justify-center backdrop-blur-lg hover:bg-slate-700/60 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-800/60 border border-white/30 flex items-center justify-center backdrop-blur-lg hover:bg-slate-700/60 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  index === currentIndex ? 'bg-blue-500' : 'bg-slate-600'
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