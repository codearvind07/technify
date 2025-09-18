import { Metadata } from 'next';
import { ELVHero } from './elv-hero';
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
      <div className="min-h-screen">
        <ELVHero />
       
      </div>
    </>
  );
}