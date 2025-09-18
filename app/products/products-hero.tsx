"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Mock product images (replace with your actual images)
import EasyVigilImage from "../../assets/beanbag-person.png";
import BerhardImage from "../../assets/elv.png";
import MytenImage from "../../assets/automation.jpg";

const products = [
  {
    id: 1,
    name: "Easy Vigil",
    description: "Advanced surveillance solution with AI-powered monitoring and real-time alerts for enhanced security.",
    features: [
      "AI-powered motion detection",
      "24/7 real-time monitoring",
      "Cloud storage options",
      "Mobile app integration"
    ],
    image: EasyVigilImage,
    color: "from-primary to-secondary",
    link: "/products/easy-vigil"
  },
  {
    id: 2,
    name: "Berhard",
    description: "Industrial-grade automation systems designed for manufacturing and process control applications.",
    features: [
      "Industrial automation solutions",
      "Process control systems",
      "Scalable architecture",
      "Remote management"
    ],
    image: BerhardImage,
    color: "from-primary to-secondary",
    link: "/products/berhard"
  },
  {
    id: 3,
    name: "Myten",
    description: "Smart building management system that integrates all your facility controls into one platform.",
    features: [
      "Integrated building management",
      "Energy efficiency optimization",
      "Customizable dashboards",
      "Multi-site support"
    ],
    image: MytenImage,
    color: "from-primary to-secondary",
    link: "/products/myten"
  }
];

export default function ProductsHero() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15, 
        delayChildren: 0.2,
        ease: "easeOut"
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      },
    },
  };

  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted font-[Poppins,sans-serif] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#1F6FEB] rounded-full opacity-10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#FFB300] rounded-full opacity-10 blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-[#1F6FEB] rounded-full opacity-5 blur-3xl animate-pulse-slow animation-delay-4000"></div>
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 -z-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <main className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="relative py-12 flex flex-col items-center justify-center text-foreground">
          <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center"
            >
              <motion.div 
                variants={itemVariants}
                className="inline-flex items-center bg-[#1F6FEB]/10 text-[#1F6FEB] px-4 py-2 rounded-full mb-6 border border-[#1F6FEB]/30"
              >
                <span className="w-2 h-2 bg-[#1F6FEB] rounded-full mr-2 animate-pulse"></span>
                Industry-leading products
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-6xl font-extrabold mb-6 text-foreground tracking-tight leading-tight"
              >
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1F6FEB] to-[#FFB300]">Premium Products</span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 font-light leading-relaxed"
              >
                Discover our range of cutting-edge solutions designed to enhance security, automation, and building management.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <motion.div
                    key={product.id}
                    variants={itemVariants}
                    className="bg-card rounded-2xl shadow-2xl overflow-hidden hover:shadow-2xl transition-all group border border-border hover:border-[#1F6FEB]/30 relative"
                    whileHover={{ y: -8 }}
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#1F6FEB]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="h-2 bg-gradient-to-r from-[#1F6FEB] to-[#FFB300]"></div>
                    
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10"></div>
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute bottom-4 left-4 z-20">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-[#1F6FEB] transition-colors">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="p-6 relative z-10">
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {product.description}
                      </p>
                      
                      <ul className="space-y-2 mb-6">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <div className={`w-2 h-2 bg-gradient-to-r ${product.color} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                            <span className="text-foreground text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Link
                        href={product.link}
                        className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground py-3 rounded-xl font-semibold hover:shadow-lg transition-all shadow-md hover:-translate-y-0.5 flex items-center justify-center gap-2"
                      >
                        Read More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-card relative rounded-2xl mt-12">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNwcmltYXJ5IiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSI+PHBhdGggZD0iTSAwIDAgTCA2MCA2MCBNIDYwIDAgTCAwIDYwIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="text-center mb-16"
            >
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Products</span>
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our products are designed with cutting-edge technology and a focus on user experience
              </motion.p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                variants={itemVariants}
                className="bg-card/70 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-primary/30 transition-all group text-center"
                whileHover={{ y: -5 }}
              >
                <div className="bg-primary/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">Reliable & Secure</h3>
                <p className="text-muted-foreground">Enterprise-grade security with 99.9% uptime guarantee and robust data protection measures.</p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="bg-card/70 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-primary/30 transition-all group text-center"
                whileHover={{ y: -5 }}
              >
                <div className="bg-primary/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">High Performance</h3>
                <p className="text-muted-foreground">Optimized for speed and efficiency, delivering exceptional performance even under heavy loads.</p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="bg-card/70 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-primary/30 transition-all group text-center"
                whileHover={{ y: -5 }}
              >
                <div className="bg-primary/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2zm10-4a2 2 0 11-4 0 2 2 0 014 0zM4 6a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">Scalable Solutions</h3>
                <p className="text-muted-foreground">Grow with your business needs with our scalable architecture designed for expansion.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary text-primary-foreground relative overflow-hidden rounded-2xl mt-12">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNwcmltYXJ5LWZvcmVncm91bmQiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2Utb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNIDAgMCBMIDYwIDYwIE0gNjAgMCBMIDAgNjAiLz48L2c+PC9zdmc+')] opacity-20"></div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl mb-10 max-w-3xl mx-auto"
            >
              Contact our experts to discuss how our products can revolutionize your operations
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-foreground text-background px-8 py-4 rounded-full font-semibold hover:bg-muted transition-all shadow-lg hover:-translate-y-1">
                Request a Demo
              </button>
              <button className="bg-primary-foreground text-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/10 transition-all shadow-lg hover:-translate-y-1 border-2 border-transparent">
                Contact Sales
              </button>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}