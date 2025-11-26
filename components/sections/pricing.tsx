'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check, Zap, Crown, Rocket } from 'lucide-react';

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "STARTER",
      icon: <Zap className="w-6 h-6" />,
      monthlyPrice: 29,
      yearlyPrice: 290,
      description: "Perfect for small teams getting started",
      features: [
        "Up to 5 team members",
        "10GB storage",
        "Basic analytics",
        "Email support",
        "API access"
      ],
      gradient: "from-blue-500 to-orange-500",
      popular: false
    },
    {
      name: "PREMIUM",
      icon: <Crown className="w-6 h-6" />,
      monthlyPrice: 79,
      yearlyPrice: 790,
      description: "Best for growing businesses",
      features: [
        "Up to 25 team members",
        "100GB storage",
        "Advanced analytics",
        "Priority support",
        "API access",
        "Custom integrations",
        "Advanced security"
      ],
      gradient: "from-blue-600 to-orange-600",
      popular: true
    },
    {
      name: "ENTERPRISE",
      icon: <Rocket className="w-6 h-6" />,
      monthlyPrice: 149,
      yearlyPrice: 1490,
      description: "For large-scale operations",
      features: [
        "Unlimited team members",
        "1TB storage",
        "Enterprise analytics",
        "24/7 phone support",
        "Full API access",
        "Custom integrations",
        "Advanced security",
        "Dedicated account manager",
        "SLA guarantee"
      ],
      gradient: "from-blue-700 to-orange-700",
      popular: false
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
        duration: 0.6
      }
    }
  };

  return (
    <section id="pricing" className="py-20 relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Our Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your business needs
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white p-1 rounded-lg border border-gray-200 shadow-sm">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                !isYearly 
                  ? 'bg-gradient-to-r from-blue-500 to-orange-500 text-white' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                isYearly 
                  ? 'bg-gradient-to-r from-blue-500 to-orange-500 text-white' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly <span className="text-green-500 text-xs ml-1">-20%</span>
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`bg-white p-8 relative group border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 ${
                plan.popular ? 'ring-2 ring-blue-500/50' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${plan.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {plan.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {plan.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-600 ml-2">
                    /{isYearly ? 'year' : 'month'}
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-500 to-orange-500 text-white hover:from-blue-600 hover:to-orange-600' 
                      : 'bg-gradient-to-r from-blue-400 to-orange-400 text-white hover:from-blue-500 hover:to-orange-500'
                  } font-medium px-4 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300`}
                >
                  Get Started
                </motion.button>
              </div>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm group-hover:text-gray-900 transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}