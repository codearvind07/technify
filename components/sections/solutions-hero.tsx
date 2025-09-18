'use client';

import { motion } from 'framer-motion';

export function SolutionsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0D1117] to-[#0D1117] py-20 sm:py-28">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold tracking-tight text-[#C9D1D9] sm:text-5xl lg:text-6xl"
          >
            Innovative Technology Solutions
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-xl text-[#C9D1D9]/80 max-w-2xl mx-auto"
          >
            Discover our comprehensive range of cutting-edge solutions designed to transform your business and drive digital innovation.
          </motion.p>
        </div>
      </div>
    </section>
  );
}