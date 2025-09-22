import { Metadata } from 'next';
import { SEO } from '@/components/seo/seo';

export const metadata: Metadata = {
  title: 'ELV Solutions | Technify Solutions - Extra Low Voltage Systems',
  description: 'Comprehensive ELV solutions including security systems, CCTV, access control, fire safety, public address, and communication systems for commercial and industrial applications.',
};

export default function ELVSolutionsPage() {
  return (
    <>
      <SEO 
        title="ELV Solutions - Extra Low Voltage Systems & Security Solutions"
        description="Comprehensive ELV solutions at Technify Solutions including security systems, CCTV, access control, fire safety, public address, networking, and communication systems for commercial, industrial, and datacenter applications."
        path="/solutions/elv"
        image="/images/og-elv-solutions.jpg"
      />
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ELV Solutions</h1>
          <p className="text-xl text-gray-600 mb-8">
            For detailed information about our ELV solutions, please visit our main solutions page.
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