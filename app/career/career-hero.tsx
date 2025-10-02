'use client';
import Image from 'next/image';
import { useState } from 'react';
export default function CareerHero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    experience: '',
    message: ''
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] font-[Poppins,sans-serif]">
      {/* Hero Section */}
      <section className="relative py-20 flex flex-col items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/90 to-[#1e293b]/90" />
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-3 bg-gradient-to-r from-[#ffa726] to-[#ff9800] rounded-3xl blur opacity-30"></div>
            <div className="relative rounded-3xl bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] p-12 shadow-2xl">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ffa726] to-[#ff9800] mb-6" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
                Join Our Team
              </h1>
              <p className="text-lg text-[#475569] max-w-xl mx-auto mt-4">
                Shape the future with us. Explore opportunities to grow your career at Technify.
              </p>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#ffa726] rounded-full filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-[#ff9800] rounded-full filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </section>

      {/* Interested Candidates Section */}
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#ffa726] to-[#ff9800] rounded-2xl blur opacity-30"></div>
            <div className="relative rounded-2xl bg-white text-center py-10 px-6 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffa726] to-[#ff9800] font-[Poppins,sans-serif]">
                Interested Candidates
              </h2>
              <p className="text-lg text-[#475569] mt-2">Send your resume to start your journey with us</p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
          {/* Left: Illustration and company name */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#ffa726] to-[#ff9800] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative rounded-2xl bg-white p-8 shadow-xl flex flex-col items-center justify-center h-full">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffa726] to-[#ff9800] font-[Poppins,sans-serif]">Technify</h3>
                <div className="h-1 w-20 bg-gradient-to-r from-[#ffa726] to-[#ff9800] rounded-full mx-auto mt-2"></div>
              </div>
             
              <p className="text-center text-[#64748b] mt-6">
                Innovation meets excellence. Join our team of passionate professionals.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#ffa726] to-[#ff9800] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <form 
              onSubmit={handleSubmit}
              className="relative rounded-2xl bg-gradient-to-br from-[#ffa726] to-[#ff9800] p-8 shadow-xl flex flex-col gap-5"
            >
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 rounded-xl bg-white/95 text-[#232e3c] font-medium focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 rounded-xl bg-white/95 text-[#232e3c] font-medium focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
                  required
                />
                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 rounded-xl bg-white/95 text-[#232e3c] font-medium focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
                  required
                />
                <input
                  type="text"
                  name="experience"
                  placeholder="Experience (years)"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 rounded-xl bg-white/95 text-[#232e3c] font-medium focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
                />
                <div className="relative">
                  <input
                    type="file"
                    className="w-full px-5 py-3 rounded-xl bg-white/95 text-[#232e3c] font-medium focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#ffa726]/20 file:text-[#ffa726] hover:file:bg-[#ffa726]/30"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 rounded-xl bg-white/95 text-[#232e3c] font-medium focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-[#ff9800] py-3 rounded-xl font-semibold hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg font-[Poppins,sans-serif]"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Floating elements for visual interest */}
      <div className="fixed top-1/4 left-5 w-4 h-4 bg-[#ffa726] rounded-full opacity-50 animate-bounce hidden md:block"></div>
      <div className="fixed bottom-1/3 right-8 w-6 h-6 bg-[#ff9800] rounded-full opacity-30 animate-pulse hidden md:block"></div>
    </div>
  );
}