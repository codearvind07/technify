"use client";

import { motion } from "framer-motion";
import MagicSlider from "./magic-slider";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center justify-center bg-background py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white"
      aria-label="Technify Solutions Hero Section"
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
      
      {/* Subtle scanline overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]">
        <div className="h-full w-full bg-[linear-gradient(to_bottom,rgba(31,111,235,0.1)_1px,transparent_1px)] bg-[length:100%_40px]" />
      </div>
      
      {/* Mobile responsive adjustments */}
      <style jsx>{`
        @media (max-width: 768px) {
          .absolute.top-0.left-0 {
            width: min(400px, 100vw);
            height: 400px;
          }
          .absolute.bottom-0.right-0 {
            width: min(500px, 100vw);
            height: 500px;
          }
        }
      `}</style>

      {/* Magic Slider - moved down after header */}
      {/* place slider flush under header (removed extra top padding causing gap) */}
      <div className="w-full h-full absolute inset-0">
        <MagicSlider />
      </div>
    </section>
  );
}