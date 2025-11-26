import { Metadata } from 'next';
import ServicesHero from '@/app/services/services-hero';
import { SEO } from '@/components/seo/seo';

export const metadata: Metadata = {
  title: 'ICT Services | Technify Solutions - Complete Technology Services',
  description: 'Discover our comprehensive ICT services including IT infrastructure, electronic security systems, gate automation, fire safety, public address, and AV systems for various industries.',
};

export default function ServicesPage() {
  return (
    <>
      <SEO 
        title="ICT Services - Comprehensive Technology Solutions for Modern Business"
        description="Discover our comprehensive ICT services at Technify Solutions including IT infrastructure, electronic security systems, gate automation, fire safety, public address, and AV systems. Serving datacenters, warehouses, commercial infrastructure, and various industries."
        path="/services"
        image="/images/og-services.jpg"
      />
      <div className="min-h-screen">
        <ServicesHero />
      </div>
    </>
  );
}