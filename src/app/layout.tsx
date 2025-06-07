import type { Metadata } from 'next';
import { Alegreya, Belleza } from 'next/font/google'; // Using next/font for optimal loading
import './globals.css';
import { AuthProvider } from '@/contexts/AuthContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

const belleza = Belleza({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-belleza',
});

const alegreya = Alegreya({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Added more weights if needed
  style: ['normal', 'italic'],
  variable: '--font-alegreya',
});

export const metadata: Metadata = {
  title: 'PetMets',
  description: 'Connecting pet owners and their furry friends.',
  // icons: {
  //   icon: '/favicon.ico', // Assuming a favicon might be added later
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
        {/* next/font handles font loading, direct links not needed if using next/font */}
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          belleza.variable,
          alegreya.variable
        )}
      >
        <AuthProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
