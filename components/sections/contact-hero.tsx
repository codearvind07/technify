'use client';

import { motion, Variants } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import banner from "../../assets/contact.jpg";

/* ------------------ MOTION VARIANTS (TS FIXED) ------------------ */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: ["easeOut"] }, // FIXED TS ERROR
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

export function ContactHero() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [mathCaptcha, setMathCaptcha] = useState({ num1: 0, num2: 0, operator: "" });
  const [userCaptchaAnswer, setUserCaptchaAnswer] = useState("");
  const [captchaResult, setCaptchaResult] = useState<number | null>(null);

  useEffect(() => {
    generateMathCaptcha();
  }, []);

  /* ------------------ CAPTCHA FUNCTION ------------------ */
  const generateMathCaptcha = (): void => {
    const ops = ["+", "-"];
    const operator = ops[Math.random() > 0.5 ? 1 : 0];
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    if (operator === "-" && num1 < num2) return generateMathCaptcha();

    setMathCaptcha({ num1, num2, operator });
    setCaptchaResult(operator === "+" ? num1 + num2 : num1 - num2);
  };

  /* ------------------ FORM HANDLERS ------------------ */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleCaptchaInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserCaptchaAnswer(e.target.value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(userCaptchaAnswer) !== captchaResult) {
      alert("CAPTCHA Invalid");
      generateMathCaptcha();
      setUserCaptchaAnswer("");
      return;
    }
    console.log("Form submitted:", formData);
  };

  /* ------------------ CONTACT INFO DATA ------------------ */
  const contactInfo = [
    { icon: MapPin, title: "Our Location", details: ["5, Gautam Nagar", "New Delhi 110049"] },
    { icon: Phone, title: "Phone Numbers", details: ["+91 9999769378", "+91 9821112352"] },
    { icon: Mail, title: "Email Address", details: ["info@technify.co.in"] },
    { icon: Clock, title: "Business Hours", details: ["Mon–Fri: 9 AM - 6 PM"] },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <main>

        {/* ------------------ CCTV PAGE STYLE HERO SECTION ------------------ */}
        <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT TEXT */}
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Contact Technify
                </span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
                Let’s Start Something Amazing Together
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg text-gray-600 leading-relaxed mb-8">
                Ready to transform your vision into reality?
                <span className="font-semibold text-gray-900"> Our team is here to help with cutting-edge technology solutions.</span>
              </motion.p>

              
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div variants={fadeInUp} className="relative rounded-lg overflow-hidden border border-gray-200">
              <Image src={banner} alt="Contact Office Background" width={800} height={500} className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* ------------------ CONTACT FORM SECTION ------------------ */}
        <section id="contact-form" className="py-20 border-b border-gray-100 bg-gray-50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 lg:px-8">

            {/* LEFT SIDE INFO CARD */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get In Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="p-3 border border-gray-200 rounded-xl">
                      <info.icon className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{info.title}</p>
                      {info.details.map((d, i2) => <p key={i2} className="text-sm text-gray-600">{d}</p>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <form onSubmit={handleSubmit} className="lg:col-span-2 bg-white border border-gray-200 rounded-xl p-8 shadow-sm space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Send a Message</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" className="input-field" required />
                <input name="email" value={formData.email} onChange={handleInputChange} placeholder="Email Address" className="input-field" required />
              </div>

              <input name="subject" value={formData.subject} onChange={handleInputChange} placeholder="Subject" className="input-field" required />

              <textarea name="message" rows={4} value={formData.message} onChange={handleInputChange} placeholder="Message..." className="input-field" required />

              {/* CAPTCHA */}
              <div>
                <div className="font-medium text-gray-700 mb-2">Solve to verify:</div>
                <div className="flex items-center justify-center gap-3 bg-gray-100 p-3 rounded-lg w-max">
                  <span className="font-semibold">{mathCaptcha.num1} {mathCaptcha.operator} {mathCaptcha.num2} = ?</span>
                </div>
                <input type="number" value={userCaptchaAnswer} onChange={handleCaptchaInputChange} className="input-field w-40 text-center mt-3" required />
              </div>

              <motion.button whileHover={{ scale: 1.02 }} className="w-full py-4 rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 text-white flex items-center justify-center gap-2">
                <Send className="w-5 h-5" /> Send Message <ArrowRight className="w-4 h-4" />
              </motion.button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
