'use client';

import { Header } from '@/components/layout/header';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { HeroSection } from '@/components/sections/hero';
import { HomeFeatureGridSection } from '@/components/sections/home-feature-grid';
import { Footer } from '@/components/layout/footer';
import HomeAbout from '@/components/sections/homeabout';
import HomeSolutions from '@/components/sections/home-solution';
import HomeServices from '@/components/sections/home-services';
import { StatsSection } from '@/components/sections/stats';
import { TestimonialsSection } from '@/components/sections/testimonials-home';
import { CallToActionSection } from '@/components/sections/cta-section';
import { TechnologyPartnersSection } from '@/components/sections/technology-partners';
import { ProcessSection } from '@/components/sections/process';
import { SEO } from '@/components/seo/seo';

export default function Home() {
  return (
    <>
      <SEO 
        title="Technify Solutions - Complete ICT & Technology Solutions Provider"
        description="Technify Solutions offers comprehensive ICT services including IT infrastructure, electronic security systems, gate automation, fire safety, and AV systems. Your one-stop solution provider from edge to cloud for datacenters, warehouses, commercial infrastructure, and industries."
        path="/"
        image="/images/og-home.jpg"
      />
      <main className="relative">
        <ScrollProgress />
        <HeroSection />
        <HomeFeatureGridSection />
        <HomeAbout />
        <StatsSection />
        <HomeSolutions />
        <HomeServices />
        <ProcessSection />
        <TestimonialsSection />
        <TechnologyPartnersSection />
        {/* <CallToActionSection /> */}
      </main>
    </>
  );
}