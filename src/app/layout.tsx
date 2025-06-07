
import type { Metadata } from 'next';
import { PT_Sans } from 'next/font/google'; // Using next/font for optimal loading
import './globals.css';
// AuthProvider is no longer needed
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'], 
  variable: '--font-sans', 
});

export const metadata: Metadata = {
  title: 'PetMets',
  description: 'Connecting pet owners and their furry friends.',
  // icons: {
  //   icon: '/favicon.ico', // Example, ensure your favicon exists or remove
  // },
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
          ptSans.variable 
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
