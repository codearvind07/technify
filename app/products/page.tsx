import type { Metadata } from 'next';
import ProductsHero from '@/app/products/products-hero';
import { SEO } from '@/components/seo/seo';

export const metadata: Metadata = {
  title: 'Technology Products | Technify Solutions - Innovative ICT Solutions',
  description: 'Explore our cutting-edge technology products including security systems, networking solutions, automation products, and AV systems designed for modern business infrastructure.',
};

export default function ProductsPage() {
  return (
    <>
      <SEO 
        title="Technology Products - Innovative ICT Solutions for Business Infrastructure"
        description="Explore our cutting-edge technology products at Technify Solutions including security systems, networking solutions, automation products, and AV systems designed for modern business infrastructure and industrial applications."
        path="/products"
        image="/images/og-products.jpg"
      />
      <div className="min-h-screen bg-white">
        <ProductsHero />
      </div>
    </>
  );
}