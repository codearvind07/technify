"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import slider1 from '../../assets/slider1.jpg';
import slider2 from '../../assets/slide2.jpg';
import slider3 from '../../assets/slide3.jpg';
import { cn } from '@/lib/utils';

interface Slide {
  id: number;
  image: string | StaticImageData;
  alt?: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  { 
    id: 1, 
    image: slider1, 
    alt: 'Technology Solution 1',
    title: 'Innovative Technology Solutions',
    description: 'Technify delivers cutting-edge technology solutions tailored to your business needs. Our expert team ensures seamless integration and optimal performance.'
  },
  { 
    id: 2, 
    image: slider2, 
    alt: 'Technology Solution 2',
    title: 'Digital Transformation Services',
    description: 'Transform your business with our comprehensive digital solutions. From cloud migration to automation, we help you stay ahead in the digital era.'
  },
  { 
    id: 3, 
    image: slider3, 
    alt: 'Technology Solution 3',
    title: 'Enterprise IT Consulting',
    description: 'Our strategic IT consulting services help enterprises optimize their technology infrastructure for maximum efficiency and growth.'
  },
];

const SLIDE_DURATION = 3;

const MagicSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next
  const [isTransitioning, setIsTransitioning] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide((index + slides.length) % slides.length);
    setProgress(0);
    
    // Reset transitioning state after animation completes
    setTimeout(() => setIsTransitioning(false), 700);
  }, [currentSlide, isTransitioning]);

  const goToNextSlide = useCallback(() => {
    setDirection(1);
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const goToPreviousSlide = useCallback(() => {
    setDirection(-1);
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  const startTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsPlaying(true);

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const increment = 100 / (SLIDE_DURATION * 10);
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          goToNextSlide();
          return 0;
        }
        return newProgress;
      });
    }, 100);
  }, [goToNextSlide, SLIDE_DURATION]);

  // Pause slider on hover
  const handleMouseEnter = () => {
    setIsPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsPlaying(true);
  };

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goToPreviousSlide();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goToNextSlide();
    } else if (e.key === ' ') {
      e.preventDefault();
      setIsPlaying(prev => !prev);
    }
  }, [goToPreviousSlide, goToNextSlide]);

  useEffect(() => {
    const sliderElement = sliderRef.current;
    if (sliderElement) {
      sliderElement.addEventListener('keydown', handleKeyDown);
      sliderElement.setAttribute('tabIndex', '0');
      sliderElement.setAttribute('role', 'region');
      sliderElement.setAttribute('aria-label', 'Image slider');
      
      return () => {
        sliderElement.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [handleKeyDown]);

  useEffect(() => {
    if (isPlaying) startTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, currentSlide, startTimer, SLIDE_DURATION]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
    setIsPlaying(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.touches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNextSlide();
      } else {
        goToPreviousSlide();
      }
      setTouchStart(null);
      setIsPlaying(true);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
    setIsPlaying(true);
  };

  // Reset direction after transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setDirection(0);
    }, 700); // Match transition duration
    return () => clearTimeout(timer);
  }, [currentSlide]);

  // Auto-focus the slider when it mounts for keyboard navigation
  useEffect(() => {
    const timer = setTimeout(() => {
      if (sliderRef.current) {
        sliderRef.current.focus({ preventScroll: true });
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: React.KeyboardEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent) {
        if (e.key === 'ArrowLeft') {
          goToPreviousSlide();
        } else if (e.key === 'ArrowRight') {
          goToNextSlide();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown as EventListener);
    return () => {
      window.removeEventListener('keydown', handleKeyDown as EventListener);
    };
  }, [goToNextSlide, goToPreviousSlide]);

  return (
    <div 
      ref={sliderRef}
      className="w-full h-full relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50 transition-all duration-1000"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.4s ease-out forwards;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .delay-100 {
          animation-delay: 0.05s;
        }
        .delay-150 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.15s;
        }
        .delay-300 {
          animation-delay: 0.25s;
        }
      `}</style>
      <section
        className="relative w-full h-full transition-all duration-500"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides */}
        <div className="absolute inset-0">
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out transform-gpu group/slide ${
                idx === currentSlide 
                  ? 'opacity-100 z-10 translate-x-0 scale-100' 
                  : direction === 1 && idx < currentSlide 
                    ? 'opacity-0 z-0 -translate-x-full scale-95' 
                    : direction === -1 && idx > currentSlide 
                    ? 'opacity-0 z-0 translate-x-full scale-95'
                    : direction === 1 && idx > currentSlide
                    ? 'opacity-0 z-0 translate-x-full scale-95'
                    : direction === -1 && idx < currentSlide
                    ? 'opacity-0 z-0 -translate-x-full scale-95'
                    : idx < currentSlide 
                    ? 'opacity-0 z-0 -translate-x-full scale-95' 
                    : 'opacity-0 z-0 translate-x-full scale-95'
              }`}
            >
              <div className="relative w-full h-full flex">
                {/* Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={slide.image}
                    alt={slide.alt || `Slide ${idx + 1}`}
                    fill
                    className="object-cover transition-all duration-700 ease-in-out hover:scale-105"
                    priority={idx === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    quality={90}
                  />
                </div>
                
                {/* Content overlay - optimized for mobile */}
                <div className="absolute inset-0 md:right-0 md:top-0 md:h-full md:w-2/5 flex items-end md:items-center justify-center md:justify-end z-10 p-3 sm:p-4 md:p-12">
                  <div className="max-w-md bg-card/85 backdrop-blur-2xl rounded-xl p-3 sm:p-4 md:p-6 shadow-xl border border-border/40 mb-12 sm:mb-16 md:mb-0 md:m-4 transform transition-all duration-500 ease-out hover:scale-[1.01] translate-y-4 md:translate-x-4 opacity-0 group-[:not(.opacity-0)]/slide:translate-y-0 md:group-[:not(.opacity-0)]/slide:translate-x-0 group-[:not(.opacity-0)]/slide:opacity-100 animate-float w-[90%] sm:w-[85%] md:w-full">
                    <div className="mb-2 sm:mb-3 animate-fade-in-up delay-100">
                      <span className="inline-flex items-center px-2 py-1 text-[10px] sm:text-xs font-semibold text-primary bg-primary/10 rounded-full group-hover/slide:animate-pulse">
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1 transition-transform duration-300 group-hover/slide:rotate-360" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        TECHNIFY
                      </span>
                    </div>
                    <h2 className="text-base sm:text-lg md:text-2xl font-bold text-foreground mb-2 sm:mb-3 leading-tight animate-fade-in-up delay-150">{slide.title}</h2>
                    <p className={`text-[10px] xs:text-xs sm:text-sm md:text-base mb-3 sm:mb-5 leading-relaxed animate-fade-in-up delay-200 ${slide.id === 2 || slide.id === 3 ? 'text-foreground' : 'text-muted-foreground'}`}>{slide.description}</p>
                    <div className="flex flex-col xs:flex-row xs:space-x-2 sm:space-x-3 space-y-2 xs:space-y-0 animate-fade-in-up delay-300">
                      <button className="inline-flex items-center bg-gradient-to-r from-primary to-secondary text-primary-foreground px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-medium text-xs sm:text-sm hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 group/button w-full xs:w-auto justify-center">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 transition-transform duration-500 group-hover/button:rotate-360" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        Learn More
                      </button>
                      <button className="inline-flex items-center border border-primary text-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-medium text-xs sm:text-sm hover:bg-primary/10 transition-all duration-300 group/button w-full xs:w-auto justify-center">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 transition-transform duration-500 group-hover/button:rotate-360" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress bar at the bottom */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-background/20 z-50">
          <div 
            className="h-full bg-primary transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Navigation Arrows - optimized for mobile */}
        <button
          onClick={goToPreviousSlide}
          className="absolute left-2 sm:left-4 top-1/2 z-40 -translate-y-1/2 group p-1.5 sm:p-2 rounded-full bg-background/30 backdrop-blur-md hover:bg-background/50 transition-all duration-300 shadow-lg"
          aria-label="Previous slide"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-foreground transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNextSlide}
          className="absolute right-2 sm:right-4 top-1/2 z-40 -translate-y-1/2 group p-1.5 sm:p-2 rounded-full bg-background/30 backdrop-blur-md hover:bg-background/50 transition-all duration-300 shadow-lg"
          aria-label="Next slide"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-foreground transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide indicators - hidden on mobile as per user preference */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 z-50 flex -translate-x-1/2 gap-1.5 sm:gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`rounded-full transition-all duration-300 ${
                idx === currentSlide
                  ? 'w-4 h-1 sm:w-6 sm:h-1.5 md:w-8 md:h-2 bg-primary shadow-lg'
                  : 'w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2 md:h-2 bg-primary/40 hover:bg-primary/80'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MagicSlider;