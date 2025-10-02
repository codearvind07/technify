// Extend the Window interface to include custom properties
import type Lenis from 'lenis';

declare global {
  interface Window {
    lenisInstance?: Lenis;
  }
}

export {};