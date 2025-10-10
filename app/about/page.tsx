import type { Metadata } from 'next';
import AboutHero from '@/app/about/about-hero';
import { SEO } from '@/components/seo/seo';

export const metadata: Metadata = {
  title: 'About Technify Solutions - Dynamic Startup Partner for Digital Transformation',
  description: 'Learn about Technify Solutions, a dynamic startup delivering cutting-edge technology solutions as your strategic partner in digital transformation.',
};

export default function AboutPage() {
  return (
    <>
      <SEO 
        title="About Technify Solutions - Dynamic Startup Technology Partner"
        description="Discover how Technify Solutions, a fast-moving startup, is revolutionizing the technology industry with fresh perspectives, cutting-edge solutions, and strategic partnership approach to digital transformation."
        path="/about"
        image="/images/og-about.jpg"
      />
      <div className="min-h-screen">
        <AboutHero />
      </div>
    </>
  );
}