import { Metadata } from 'next';
import { SolutionsHero } from '../../components/sections/solutions-hero';
import { SEO } from '@/components/seo/seo';

export const metadata: Metadata = {
  title: 'ICT Solutions | Technify Solutions - Comprehensive Technology Solutions',
  description: 'Explore our comprehensive ICT solutions including IT infrastructure, security systems, automation, ELV systems, and complete technology solutions for modern business.',
};

export default function SolutionsPage() {
  return (
    <>
      <SEO 
        title="ICT Solutions - Comprehensive Technology Solutions for Business Transformation"
        description="Explore our comprehensive ICT solutions at Technify Solutions including IT infrastructure, security systems, automation, ELV systems, networking, and complete technology solutions designed to transform modern business operations."
        path="/solutions"
        image="/images/og-solutions.jpg"
      />
      <div className="min-h-screen">
        <SolutionsHero />
      </div>
    </>
  );
}