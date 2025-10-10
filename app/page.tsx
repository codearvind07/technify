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
        title="Technify Solutions - Dynamic Startup Partner for Digital Transformation"
        description="Technify Solutions is more than just a technology provider, we're your strategic partner in digital transformation. As a dynamic startup, we bring fresh perspectives and cutting-edge solutions to drive your business forward."
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