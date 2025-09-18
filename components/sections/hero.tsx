"use client";

import { motion } from "framer-motion";
import MagicSlider from "./magic-slider";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center justify-center bg-[#0D1117]"
      aria-label="Technify Solutions Hero Section"
    >
      {/* Enhanced background lighting effects */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#1F6FEB]/20 rounded-full blur-[160px] opacity-10 animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-[#FFB300]/20 rounded-full blur-[180px] opacity-10 animate-pulse -z-10" />
      
      {/* Subtle scanline overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]">
        <div className="h-full w-full bg-[linear-gradient(to_bottom,rgba(31,111,235,0.1)_1px,transparent_1px)] bg-[length:100%_40px]" />
      </div>

      {/* Magic Slider - Full screen */}
      <div className="absolute inset-0 z-10">
        <MagicSlider />
      </div>

      
    </section>
  );
}