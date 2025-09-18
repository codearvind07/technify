import type { Metadata } from 'next';
import CareerHero from './career-hero';
import { SEO } from '@/components/seo/seo';

export const metadata: Metadata = {
  title: 'Career at Technify Solutions - Join Our ICT Technology Team',
  description: 'Join Technify Solutions and be part of a leading ICT technology company. Explore career opportunities in technology solutions, automation, security systems, and infrastructure.',
};

export default function CareerPage() {
  return (
    <>
      <SEO 
        title="Career Opportunities at Technify Solutions - ICT Technology Jobs"
        description="Join Technify Solutions and be part of a leading ICT technology company. Explore exciting career opportunities in technology solutions, automation, security systems, networking, and infrastructure development."
        path="/career"
        image="/images/og-career.jpg"
      />
      <div className="min-h-screen">
        <CareerHero />
      </div>
    </>
  );
}