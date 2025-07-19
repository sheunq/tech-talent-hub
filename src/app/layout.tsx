
import type { Metadata } from 'next';
import './globals.css';
import { MainLayout } from '@/components/layout/MainLayout';
import { Toaster } from '@/components/ui/toaster';
import { AppProviders } from './providers';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';


export const metadata: Metadata = {
  metadataBase: new URL('https://tektunnel.com'),
  title: 'TekTunnel - Your Next Career Move',
  description: 'TekTunnel is a premier platform connecting tech talent with innovative companies.',
  verification: {
    google: 'ANTIs-nVe-Ow4cuUMCFdH6_VjcrU3Inr2o5xA3X3C00',
      other: {
      'msvalidate.01': '937025D1C19D344AD76CFF6B84C2DB3A',
    }
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <AppProviders>
          <MainLayout>{children}</MainLayout>
          <Toaster />
        </AppProviders>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
