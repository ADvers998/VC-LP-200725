import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vibe Coding - Launch Your MVP with Confidence',
  description:
    'Build, test, and launch your minimum viable product faster than ever. Join hundreds of founders who trust our proven methodology. Sign up for early access and stay updated on our launch.',
  keywords: [
    'MVP',
    'startup',
    'product development',
    'minimum viable product',
    'launch',
    'founders',
    'development',
  ],
  authors: [{ name: 'Vibe Coding' }],
  creator: 'Vibe Coding',
  publisher: 'Vibe Coding',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vibecoding.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Vibe Coding - Launch Your MVP with Confidence',
    description:
      'Build, test, and launch your minimum viable product faster than ever. Join hundreds of founders who trust our proven methodology.',
    url: 'https://vibecoding.com',
    siteName: 'Vibe Coding',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vibe Coding - Launch Your MVP with Confidence',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vibe Coding - Launch Your MVP with Confidence',
    description:
      'Build, test, and launch your minimum viable product faster than ever. Join hundreds of founders who trust our proven methodology.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      </head>
      <body className="font-sans antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
