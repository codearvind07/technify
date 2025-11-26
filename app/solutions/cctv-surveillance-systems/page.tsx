'use client';

import { SEO } from '@/components/seo/seo';

export default function CctvPage() {
  return (
    <>
      <SEO 
        title="CCTV Surveillance Systems"
        description="CCTV Surveillance Systems"
        path="/solutions/cctv-surveillance-systems"
      />
      <div className="min-h-screen py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">CCTV Surveillance Systems</h1>
          </div>
        </div>
      </div>
    </>
  );
}
