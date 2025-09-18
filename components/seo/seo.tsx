import { Metadata } from 'next';
// @ts-ignore
import { siteConfig } from '@/config/site';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  children?: React.ReactNode;
}

export function SEO({ title, description, path, image, children }: SEOProps) {
  const seoTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const seoDescription = description || siteConfig.description;
  const seoImage = image || `${siteConfig.url}/images/og-default.jpg`;
  const seoUrl = path ? `${siteConfig.url}${path}` : siteConfig.url;

  const metadata: Metadata = {
    title: seoTitle,
    description: seoDescription,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      images: [{
        url: seoImage,
        alt: seoTitle,
      }],
      url: seoUrl,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: [seoImage],
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: path,
    },
  };

  return (
    <>
      {children}
    </>
  );
}