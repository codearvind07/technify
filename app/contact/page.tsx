import type { Metadata } from 'next';
import { ContactHero } from '../../components/sections/contact-hero';
import { SEO } from '@/components/seo/seo';

export const metadata: Metadata = {
  title: 'Contact Technify Solutions - Get ICT Technology Support',
  description: 'Get in touch with Technify Solutions for comprehensive ICT services, technology support, and consultation. We offer solutions for datacenters, security systems, and automation.',
};

export default function ContactPage() {
  return (
    <>
      <SEO 
        title="Contact Technify Solutions - ICT Technology Support & Consultation"
        description="Get in touch with Technify Solutions for comprehensive ICT services, technology support, and consultation. We offer expert solutions for datacenters, security systems, automation, and complete technology infrastructure."
        path="/contact"
        image="/images/og-contact.jpg"
      />
      <div className="min-h-screen">
        <ContactHero />
      </div>
    </>
  );
}