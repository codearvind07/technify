import type { Metadata } from 'next';
import AboutHero from '@/app/about/about-hero';
import { SEO } from '@/components/seo/seo';

export const metadata: Metadata = {
  title: 'About Technify Solutions - ICT Technology Leader',
  description: 'Learn about Technify Solutions, a technology-driven ICT company offering comprehensive solutions including IT infrastructure, security systems, automation, and more.',
};

export default function AboutPage() {
  return (
    <>
      <SEO 
        title="About Technify Solutions - Technology-Driven ICT Company"
        description="Learn about Technify Solutions, a leading ICT company providing comprehensive technology solutions including IT infrastructure, electronic security systems, gate automation, fire safety, and AV systems for datacenters, warehouses, and commercial infrastructure."
        path="/about"
        image="/images/og-about.jpg"
      />
      <div className="min-h-screen">
        <AboutHero />
      </div>
    </>
  );
}