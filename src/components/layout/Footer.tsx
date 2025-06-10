
import { Twitter, Facebook, Instagram, Heart, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/features', label: 'Features' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/about', label: 'About Us' },
  ];

  const otherLinks = [
    { href: '#', label: 'Privacy Policy' }, // Placeholder
    { href: '#', label: 'Terms of Service' }, // Placeholder
    { href: '#', label: 'Contact Us' }, // Placeholder
    { href: '#', label: 'FAQs' }, // Placeholder
  ];

  return (
    <footer className="border-t border-border/40 bg-secondary/30 text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-10">
          {/* Branding Section */}
          <div className="lg:col-span-2 flex flex-col items-center text-center md:items-start md:text-left">
            <Link href="/" passHref>
              <div className="flex items-center gap-3 cursor-pointer mb-3" aria-label="PetMets Home">
                <Image
                  src="/images/logo.png"
                  alt="PetMets Logo"
                  width={40} 
                  height={40} 
                  className="h-10 w-10"
                  data-ai-hint="company logo"
                />
                <span className="font-headline text-3xl font-bold text-primary">
                  PetMets
                </span>
              </div>
            </Link>
            <p className="max-w-md text-sm text-muted-foreground">
              Connecting pets and their people, fostering a joyful community for playmates and friendships. Your trusted partner in pet happiness.
            </p>
            <div className="mt-6 flex space-x-3">
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary p-2 rounded-md hover:bg-muted/20 transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary p-2 rounded-md hover:bg-muted/20 transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary p-2 rounded-md hover:bg-muted/20 transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="font-headline text-lg font-semibold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} passHref>
                    <div className="flex items-center text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200 group">
                      <ChevronRight className="h-4 w-4 mr-1 text-accent/70 group-hover:text-primary transition-colors" />
                      {link.label}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links Section */}
          <div>
            <h3 className="font-headline text-lg font-semibold text-primary mb-4">Resources</h3>
            <ul className="space-y-2">
              {otherLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} passHref>
                     <div className="flex items-center text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200 group">
                      <ChevronRight className="h-4 w-4 mr-1 text-accent/70 group-hover:text-primary transition-colors" />
                      {link.label}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-border/60" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} PetMets. All rights reserved.
          </p>
          <div className="text-sm text-muted-foreground/80">
            <p className="inline-flex items-center gap-1.5">
              Crafted with <Heart className="h-4 w-4 text-accent/80 fill-accent/70" /> by the PetMets Team
            </p>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
