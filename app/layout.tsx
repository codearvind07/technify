import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/header'; 
import { Footer } from '../components/layout/footer';
import { SEO } from '@/components/seo/seo';
import { ScrollProgress } from '@/components/ui/scroll-progress';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Technify - Modern SaaS Platform',
  description: 'Enhance, Refine, Prosper with our cutting-edge SaaS solutions',
  openGraph: {
    title: 'Technify - Modern SaaS Platform',
    description: 'Enhance, Refine, Prosper with our cutting-edge SaaS solutions',
    images: [{
      url: '/images/og-default.jpg',
      alt: 'Technify - Modern SaaS Platform',
    }],
    url: 'https://www.technify.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technify - Modern SaaS Platform',
    description: 'Enhance, Refine, Prosper with our cutting-edge SaaS solutions',
    images: ['/images/og-default.jpg'],
  },
  metadataBase: new URL('https://www.technify.com'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <SEO />
        <ScrollProgress />
        <Header />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}  