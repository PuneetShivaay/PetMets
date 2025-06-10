
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google'; // Changed from PT_Sans to Nunito
import './globals.css';
// AuthProvider is no longer needed
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

// Instantiated Nunito instead of PT_Sans
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'], // Kept the same weights as previously used for PT Sans
  variable: '--font-sans', // Kept the same CSS variable name
});

export const metadata: Metadata = {
  title: 'PetMets',
  description: 'Connecting pet owners and their furry friends.',
  icons: {
    icon: '/favicon.ico', // Next.js will look for src/app/favicon.ico
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
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          nunito.variable // Applied nunito variable
        )}
      >
        {/* AuthProvider removed */}
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
