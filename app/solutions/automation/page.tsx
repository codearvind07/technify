import type { Metadata } from 'next';
import AutomationHero from '../../../components/sections/automation-hero';
import { SEO } from '@/components/seo/seo';


export const metadata: Metadata = {
  title: 'Automation Solutions | Technify Solutions - Smart Building Automation',
  description: 'Intelligent automation solutions including gate automation, building management systems, smart controls, and IoT solutions for enhanced efficiency and security.',
};

export default function AutomationSolutionsPage() {
  return (
    <>
      <SEO 
        title="Automation Solutions - Smart Building & Industrial Automation Systems"
        description="Intelligent automation solutions at Technify Solutions including gate automation, building management systems, smart controls, HVAC automation, lighting control, and IoT solutions for enhanced operational efficiency and security."
        path="/solutions/automation"
        image="/images/og-automation-solutions.jpg"
      />
      <div className="min-h-screen">
        <AutomationHero />
       
      </div>
    </>
  );
}