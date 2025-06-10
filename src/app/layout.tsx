
import type { Metadata } from 'next';
import { Belleza, Alegreya_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

const belleza = Belleza({
  subsets: ['latin'],
  weight: '400', // Changed from ['400']
  variable: '--font-belleza',
  display: 'swap',
});

const alegreyaSans = Alegreya_Sans({
  subsets: ['latin'],
  weight: '400', // Changed from ['400', '700']
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PetMets',
  description: 'Connecting pet owners and their furry friends.',
  icons: {
    icon: '/favicon.ico',
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
          alegreyaSans.variable,
          belleza.variable
        )}
      >
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
