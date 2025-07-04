
import type { Metadata } from 'next';
import './globals.css';
import { MainLayout } from '@/components/layout/MainLayout';
import { Toaster } from '@/components/ui/toaster';
import { AppProviders } from './providers';


export const metadata: Metadata = {
  title: 'TekTunnel - Your Next Career Move',
  description: 'TekTunnel is a premier platform connecting tech talent with innovative companies.',
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
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6433526967216348"
     crossOrigin="anonymous"></script>
      </head>
      <body className="font-body antialiased">
        <AppProviders>
          <MainLayout>{children}</MainLayout>
          <Toaster />
        </AppProviders>
      </body>
    </html>
  );
}

