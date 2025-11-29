"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Download } from "lucide-react";
import { ShieldCheck, Zap, Scaling } from "lucide-react";
// Import images
import EasyVigilImage from "../../assets/beanbag-person.png";
import BerhardImage from "../../assets/elv.png";
import MytenImage from "../../assets/automation.jpg";

const products = [
  {
    id: 1,
    name: "Easy Vigil",
    description:
      "Advanced surveillance solution with AI-powered monitoring and real-time alerts for enhanced security.",
    features: [
      "AI-powered motion detection",
      "24/7 real-time monitoring",
      "Cloud storage options",
      "Mobile app integration",
    ],
    image: EasyVigilImage, // Placeholder, will be used in the card
    link: "/products/easy-vigil",
    brochure: "/pdf/Easy Vigil.pdf",
  },
  {
    id: 2,
    name: "Berhard",
    description:
      "Industrial-grade automation systems designed for manufacturing and process control applications.",
    features: [
      "Industrial automation solutions",
      "Process control systems",
      "Scalable architecture",
      "Remote management",
    ],
    image: BerhardImage, // Placeholder
    link: "/products/berhard",
    brochure: "/pdf/berhard.pdf",
  },
  {
    id: 3,
    name: "Myten",
    description:
      "Smart building management system that integrates all your facility controls into one platform.",
    features: [
      "Integrated building management",
      "Energy efficiency optimization",
      "Customizable dashboards",
      "Multi-site support",
    ],
    image: MytenImage, // Placeholder
    link: "/products/myten",
    brochure: "/pdf/Myten.pdf",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      ease: "easeOut",
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
      ease: "easeOut",
    },
  },
};

export default function ProductsHero() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800 overflow-hidden">
      {/* Consistent Background Elements */}
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

      <main className="relative pt-28 pb-20 px-5">
        {/* Hero Section */}
        <section className="relative text-center">
          <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.p variants={itemVariants} className="text-sm tracking-wider font-semibold uppercase text-blue-600 mb-4">
                Industry-Leading Products
              </motion.p>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight"
              >
                Our Premium Products
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
              >
                Discover our range of cutting-edge solutions designed to enhance security, automation, and building management.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all group border border-gray-200 flex flex-col"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-56 w-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed text-sm flex-grow">
                      {product.description}
                    </p>
                    <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col gap-3">
                      <Link
                        href={product.link}
                        className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-all text-sm text-center"
                      >
                        Read More
                      </Link>
                      {product.brochure && (
                        <a
                          href={product.brochure}
                          download={`${product.name.replace(/\s+/g, "-")}-brochure.pdf`}
                          className="w-full bg-gray-100 text-gray-700 py-2.5 rounded-lg font-semibold hover:bg-gray-200 transition-all flex items-center justify-center gap-2 text-sm"
                        >
                          <Download className="w-4 h-4" />
                          Brochure
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Products Section */}
        <section className="py-20 bg-gray-50 rounded-2xl">
          <div className="max-w-7xl mx-auto px-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="text-center mb-16"
            >
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              >
                Why Choose Our Products
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-lg text-slate-600 max-w-3xl mx-auto"
              >
                Our products are designed with cutting-edge technology and a focus on user experience.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureItem icon={ShieldCheck} title="Reliable & Secure" description="Enterprise-grade security with 99.9% uptime and strong data protection." />
              <FeatureItem icon={Zap} title="High Performance" description="Optimized for speed and efficiency to handle heavy workloads." />
              <FeatureItem icon={Scaling} title="Scalable Solutions" description="Scale seamlessly as your business grows." />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-slate-600 mb-10 max-w-3xl mx-auto"
            >
              Contact our experts to discuss how our products can revolutionize your operations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
              >
                Contact Sales
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}

const FeatureItem = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
  <motion.div
    variants={itemVariants}
    className="bg-white p-8 rounded-2xl border border-gray-200 transition-all group text-center hover:shadow-lg"
    whileHover={{ y: -5 }}
  >
    <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center bg-blue-50 rounded-xl group-hover:bg-blue-100 transition">
      <Icon className="w-7 h-7 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
      {title}
    </h3>
    <p className="text-slate-600 text-sm leading-relaxed">
      {description}
    </p>
  </motion.div>
);
