import './globals.css';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/header'; 
import { Footer } from '../components/layout/footer';
import { SEO } from '@/components/seo/seo';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { MessageCircle, Phone } from 'lucide-react';
import Link from 'next/link';



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
      <body className="bg-background text-foreground antialiased">
        <SEO />
        <ScrollProgress />
        <Header />
        <main className="w-full">{children}</main>
        <Footer />
        
        {/* Contact Buttons - Stacked vertically on the right side */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
          {/* Phone Contact Button */}
          <Link 
            href="tel:+919999769378" 
            className="text-blue-500 p-4 rounded-full shadow-lg hover:text-blue-600 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 bg-white/80 backdrop-blur-sm"
            aria-label="Call us"
          >
            <Phone className="w-6 h-6" />
          </Link>
          
          {/* WhatsApp Chat Button */}
          <Link 
            href="https://wa.me/+919999769378" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 p-4 rounded-full shadow-lg hover:text-green-600 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 bg-white/80 backdrop-blur-sm"
            aria-label="Chat with us on WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
          </Link>
        </div>
      </body>
    </html>
  );
}