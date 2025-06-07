
import { PawPrint, Twitter, Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <PawPrint className="h-7 w-7 text-primary" />
            <span className="font-headline text-xl font-semibold text-primary">
              PetMets
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} PetMets. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-muted-foreground/80">
          <p>Built with <span className="text-accent">♥</span> by pet lovers, for pet lovers.</p>
        </div>
      </div>
    </footer>
  );
}
