"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import slider1 from '../../assets/slide1.jpg';
import slider2 from '../../assets/slide2.jpg';
import slider3 from '../../assets/slide3.jpg';

interface Slide {
  id: number;
  image: string | StaticImageData;
  alt?: string;
}

const slides: Slide[] = [
  { id: 1, image: slider1, alt: 'Technology Solution 1' },
  { id: 2, image: slider2, alt: 'Technology Solution 2' },
  { id: 3, image: slider3, alt: 'Technology Solution 3' },
];

const SLIDE_DURATION = 3;

const MagicSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide((index + slides.length) % slides.length);
    setProgress(0);
  }, [currentSlide]);

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
  }, [goToNextSlide]);

  // Pause slider on hover
  const handleMouseEnter = () => {
    setIsPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsPlaying(true);
  };

  useEffect(() => {
    if (isPlaying) startTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, currentSlide, startTimer]);

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
    <div className="w-full h-screen relative overflow-hidden"
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
         tabIndex={0}
         role="region"
         aria-label="Image slider">
      <section
        className="relative w-full h-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides */}
        <div className="absolute inset-0">
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                idx === currentSlide 
                  ? 'opacity-100 z-10 translate-x-0' 
                  : direction === 1 && idx < currentSlide 
                    ? 'opacity-0 z-0 -translate-x-full' 
                    : direction === -1 && idx > currentSlide 
                    ? 'opacity-0 z-0 translate-x-full'
                    : direction === 1 && idx > currentSlide
                    ? 'opacity-0 z-0 translate-x-full'
                    : direction === -1 && idx < currentSlide
                    ? 'opacity-0 z-0 -translate-x-full'
                    : idx < currentSlide 
                    ? 'opacity-0 z-0 -translate-x-full' 
                    : 'opacity-0 z-0 translate-x-full'
              }`}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src={slide.image}
                    alt={slide.alt || `Slide ${idx + 1}`}
                    fill
                    className="object-cover"
                    priority={idx === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  />
                </div>
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0D1117]/40 via-transparent to-[#0D1117]/40"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPreviousSlide}
          className="absolute left-4 sm:left-6 top-1/2 z-40 -translate-y-1/2 group p-2 sm:p-3 rounded-full bg-[#0D1117]/40 hover:bg-[#0D1117]/60 transition-all backdrop-blur-sm border border-[#C9D1D9]/30 shadow-lg hover:scale-110 active:scale-95 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-[#C9D1D9]/50"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#C9D1D9] transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNextSlide}
          className="absolute right-4 sm:right-6 top-1/2 z-40 -translate-y-1/2 group p-2 sm:p-3 rounded-full bg-[#0D1117]/40 hover:bg-[#0D1117]/60 transition-all backdrop-blur-sm border border-[#C9D1D9]/30 shadow-lg hover:scale-110 active:scale-95 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-[#C9D1D9]/50"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#C9D1D9] transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
      

        {/* Dots (visible on mobile and tablets) - kept at bottom center */}
        <div className="absolute bottom-8 left-1/2 z-50 flex -translate-x-1/2 gap-3 lg:hidden">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C9D1D9]/50 ${
                idx === currentSlide
                  ? 'w-10 h-3 bg-gradient-to-r from-[#1F6FEB] to-[#FFB300] shadow-lg shadow-[#1F6FEB]/50 rounded-full'
                  : 'w-3 h-3 bg-[#C9D1D9]/40 hover:bg-[#C9D1D9]/80 hover:scale-125 rounded-full'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            >
              {idx === currentSlide && (
                <div
                  className="h-full bg-gradient-to-r from-[#C9D1D9]/40 to-[#C9D1D9]/20 rounded-full transition-all duration-100"
                  style={{ width: `${progress}%` }}
                ></div>
              )}
            </button>
          ))}
        </div>          
      </section>
    </div>
  );
};

export default MagicSlider;