"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: 'chars' | 'words' | 'lines';
  from?: { opacity?: number; y?: number; x?: number };
  to?: { opacity?: number; y?: number; x?: number };
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'center' | 'right';
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onLetterAnimationComplete,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!elementRef.current || hasAnimated.current) return;

    const element = elementRef.current;
    
    // Split text based on splitType
    let chars: Element[] = [];
    
    if (splitType === 'chars') {
      // Simple character splitting for demonstration
      element.innerHTML = text
        .split('')
        .map(char => `<span class="split-char">${char === ' ' ? '&nbsp;' : char}</span>`)
        .join('');
      chars = Array.from(element.querySelectorAll('.split-char'));
    } else if (splitType === 'words') {
      element.innerHTML = text
        .split(' ')
        .map(word => `<span class="split-word">${word}</span>`)
        .join(' ');
      chars = Array.from(element.querySelectorAll('.split-word'));
    } else {
      // For lines, we'll treat the whole text as one line
      element.innerHTML = `<span class="split-line">${text}</span>`;
      chars = Array.from(element.querySelectorAll('.split-line'));
    }

    // Set initial state
    gsap.set(chars, {
      opacity: from.opacity,
      x: from.x || 0,
      y: from.y || 0,
    });

    // Create animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: `top ${threshold * 100}%`,
        end: 'bottom top',
        toggleActions: 'play none none reverse',
        once: true,
      },
      onComplete: () => {
        if (onLetterAnimationComplete) {
          onLetterAnimationComplete();
        }
        hasAnimated.current = true;
      }
    });

    tl.to(chars, {
      opacity: to.opacity,
      x: to.x || 0,
      y: to.y || 0,
      duration: duration,
      ease: ease,
      stagger: 0.02,
      delay: delay,
    });

    // Cleanup function
    return () => {
      tl.kill();
    };
  }, [text, delay, duration, ease, splitType, from, to, threshold, onLetterAnimationComplete]);

  return (
    <div 
      ref={elementRef} 
      className={className}
      style={{ textAlign }}
    />
  );
};

export default SplitText;