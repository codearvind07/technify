import { Metadata } from 'next';
import { SEO } from '@/components/seo/seo';

export const metadata: Metadata = {
  title: 'ICT Solutions | Technify Solutions - Information Communication Technology',
  description: 'Comprehensive ICT solutions including IT infrastructure, networking, data management, and communication technology for modern business operations.',
};

export default function ICTSolutionsPage() {
  return (
    <>
      <SEO 
        title="ICT Solutions - Complete Information Communication Technology Services"
        description="Comprehensive ICT solutions at Technify Solutions including IT infrastructure, networking, data management, communication technology, and complete information systems for enterprise and commercial applications."
        path="/solutions/ict"
        image="/images/og-ict-solutions.jpg"
      />
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ICT Solutions</h1>
          <p className="text-xl text-gray-600 mb-8">
            For detailed information about our ICT solutions, please visit our main solutions page.
          </p>
          <a 
            href="/solutions" 
            className="inline-block bg-gradient-to-r from-blue-600 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-orange-600 transition-all"
          >
            View All Solutions
          </a>
        </div>
      </div>
    </>
  );
}