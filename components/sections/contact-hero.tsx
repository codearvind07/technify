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
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800 overflow-hidden">
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

      <main>

        {/* ------------------ CCTV PAGE STYLE HERO SECTION ------------------ */}
        <section className="pt-28 pb-20 px-5 relative">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT TEXT */}
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Contact Technify
                </span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Let’s Start Something Amazing Together
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
                Ready to transform your vision into reality? <span className="font-semibold text-gray-900">Our team delivers practical, modern technology solutions.</span>
              </motion.p>

              
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div variants={fadeInUp} className="relative rounded-lg overflow-hidden border border-gray-200">
              <Image src={banner} alt="Contact Office Background" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* ------------------ CONTACT FORM SECTION ------------------ */}
        <section id="contact-form" className="py-20 px-5 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
              <p className="text-slate-600 leading-relaxed">
                Have a question or a project in mind? Fill out the form below and our team will get back to you within one business day.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT SIDE INFO CARD */}
            <div className="lg:col-span-1 bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-blue-50 rounded-lg">
                      <info.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{info.title}</p>
                      {info.details.map((d, i2) => <p key={i2} className="text-sm text-gray-600">{d}</p>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <form onSubmit={handleSubmit} className="lg:col-span-2 bg-white border border-gray-200 rounded-xl p-8 shadow-sm space-y-5">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Send Us a Message</h3>

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

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
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
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all shadow-md hover:shadow-lg"
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
                </button>
              </div>
            </form>
            </div>
          </div>
        </section>

        {/* ------------------ GOOGLE MAP SECTION ------------------ */}
        <section className="w-full h-[450px] bg-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.133712359416!2d77.2134556150811!3d28.56571998244458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce26a22589e6f%3A0x438333c71f453a4!2sGautam%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110049%2C%20India!5e0!3m2!1sen!2sus!4v1678886400000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Technify Solutions Location"
          ></iframe>
        </section>
      </main>
    </div>
  );
}
