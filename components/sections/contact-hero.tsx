'use client';

import { motion, Variants } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, RefreshCw, ArrowRight } from "lucide-react";
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
  const [mathCaptcha, setMathCaptcha] = useState({ num1: 0, num2: 0, operator: "+" });
  const [userCaptchaAnswer, setUserCaptchaAnswer] = useState("");
  const [captchaResult, setCaptchaResult] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    generateMathCaptcha();
  }, []);

  /* ------------------ CAPTCHA FUNCTION ------------------ */
  const generateMathCaptcha = (): void => {
    const ops = ["+", "-"];
    const operator = ops[Math.random() > 0.5 ? 1 : 0];
    let num1 = Math.floor(Math.random() * 9) + 1;
    let num2 = Math.floor(Math.random() * 9) + 1;
    if (operator === "-" && num1 < num2) [num1, num2] = [num2, num1];

    setMathCaptcha({ num1, num2, operator });
    setCaptchaResult(operator === "+" ? num1 + num2 : num1 - num2);
  };

  /* ------------------ FORM HANDLERS ------------------ */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleCaptchaInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserCaptchaAnswer(e.target.value);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitError("Please fill in name, email and message.");
      return;
    }

    if (!captchaResult || parseInt(userCaptchaAnswer || "0") !== captchaResult) {
      setSubmitError("CAPTCHA is incorrect. Try again.");
      generateMathCaptcha();
      setUserCaptchaAnswer("");
      return;
    }

    try {
      setIsSubmitting(true);
      // Replace below with real submit call (fetch/axios)
      await new Promise((res) => setTimeout(res, 900));
      setSubmitSuccess("Message sent — we'll get back to you within 1 business day.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setUserCaptchaAnswer("");
      generateMathCaptcha();
    } catch (err) {
      setSubmitError("Failed to send. Please try again later.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitSuccess(null), 7000);
    }
  };

  /* ------------------ CONTACT INFO DATA ------------------ */
  const contactInfo = [
    { icon: MapPin, title: "Our Location", details: ["5, Gautam Nagar", "New Delhi 110049"] },
    { icon: Phone, title: "Phone Numbers", details: ["+91 9999769378", "+91 9821112352"] },
    { icon: Mail, title: "Email Address", details: ["info@technify.co.in"] },
    { icon: Clock, title: "Business Hours", details: ["Mon–Fri: 9 AM - 6 PM"] },
  ];

  return (
    <div className="bg-white text-gray-800">
      <main>

        {/* ------------------ CCTV PAGE STYLE HERO SECTION ------------------ */}
        <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT TEXT */}
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Contact Technify
                </span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-4">
                Let’s Start Something Amazing Together
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
                Ready to transform your vision into reality? <span className="font-semibold text-gray-900">Our team delivers practical, modern technology solutions.</span>
              </motion.p>

              
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div variants={fadeInUp} className="relative rounded-lg overflow-hidden border border-gray-200">
              <Image src={banner} alt="Contact Office Background" width={1200} height={800} className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* ------------------ CONTACT FORM SECTION ------------------ */}
        <section id="contact-form" className="py-12 bg-slate-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
            {/* LEFT SIDE INFO CARD */}
            <div className="lg:col-span-1 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Get In Touch</h2>
              <p className="text-sm text-gray-600 mb-4">Fill the form and our team will reach out to you shortly.</p>
              <div className="space-y-4">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="p-3 border border-gray-100 rounded-lg bg-white">
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
            <form onSubmit={handleSubmit} className="lg:col-span-2 bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Send a Message</h3>

              {submitSuccess && <div className="rounded-md bg-green-50 border border-green-100 p-3 text-sm text-green-700">{submitSuccess}</div>}
              {submitError && <div className="rounded-md bg-red-50 border border-red-100 p-3 text-sm text-red-700">{submitError}</div>}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col">
                  <span className="text-sm text-gray-700 mb-1">Your Name</span>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full name"
                    className="rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-100 bg-white text-sm"
                    required
                    aria-required
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-sm text-gray-700 mb-1">Email Address</span>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@company.com"
                    className="rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-100 bg-white text-sm"
                    required
                    aria-required
                  />
                </label>
              </div>

              <label className="flex flex-col">
                <span className="text-sm text-gray-700 mb-1">Subject</span>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject (optional)"
                  className="rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-100 bg-white text-sm"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm text-gray-700 mb-1">Message</span>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message..."
                  className="rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-100 bg-white text-sm"
                  required
                  aria-required
                />
              </label>

              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-3 py-2">
                  <div className="text-sm font-medium text-gray-700">Solve:</div>
                  <div className="font-semibold text-gray-900 text-lg">
                    {mathCaptcha.num1} {mathCaptcha.operator} {mathCaptcha.num2} = ?
                  </div>
                  <input
                    type="number"
                    value={userCaptchaAnswer}
                    onChange={handleCaptchaInputChange}
                    className="w-24 rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
                    placeholder="Answer"
                    aria-label="Captcha answer"
                    required
                  />
                  <button type="button" onClick={generateMathCaptcha} className="text-sm text-blue-600 p-2 rounded-md hover:bg-blue-50">
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="ml-auto inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-blue-100 bg-blue-50 text-blue-700 font-semibold text-sm hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                >
                  {isSubmitting ? (
                    <svg className="animate-spin w-4 h-4 text-blue-600" viewBox="0 0 24 24" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                  ) : (
                    <Send className="w-4 h-4 text-blue-600" />
                  )}
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
