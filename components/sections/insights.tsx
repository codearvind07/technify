'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Calendar } from 'lucide-react';
import Image from 'next/image';

export function InsightsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const insights = [
    {
      title: "THE ROLE OF BIG DATA IN CRAFTING PERSONALIZED EXPERIENCES",
      category: "Data Analytics",
      date: "Dec 15, 2024",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
      gradient: "from-blue-500 to-orange-500"
    },
    {
      title: "DESIGNING TOMORROW: A GUIDE TO INNOVATIVE UX STRATEGIES",
      category: "Design",
      date: "Dec 12, 2024",
      image: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=600",
      gradient: "from-blue-400 to-orange-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Latest thoughts and innovations from our team
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {insights.map((insight, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white overflow-hidden group border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${insight.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`} />
                
                <div className="absolute top-4 left-4">
                  <span className="bg-white/80 backdrop-blur-sm px-3 py-1 text-sm text-gray-800 rounded-lg">
                    {insight.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {insight.date}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  {insight.title}
                </h3>

                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                  <span className="mr-2">Read More</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>

                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-orange-500 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center space-x-2"
          >
            <span>View All Insights</span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}