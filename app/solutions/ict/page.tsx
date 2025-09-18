import { Metadata } from 'next';
import { ICTHero } from './ict-hero';
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
      <div className="min-h-screen">
        <ICTHero />
       
      </div>
    </>
  );
}