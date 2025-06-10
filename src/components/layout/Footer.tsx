
import { Twitter, Facebook, Instagram, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-secondary/30 text-secondary-foreground">
      <div className="container mx-auto px-4 py-10 md:px-6">
        
        <div className="flex flex-col items-center gap-6 text-center">
          <Link href="/" passHref>
            <div className="flex items-center gap-3 cursor-pointer" aria-label="PetMets Home">
              <Image
                src="/images/logo.png"
                alt="PetMets Logo"
                width={36} 
                height={36} 
                className="h-9 w-9"
                data-ai-hint="company logo"
              />
              <span className="font-headline text-2xl font-bold text-primary">
                PetMets
              </span>
            </div>
          </Link>
          <p className="max-w-md text-sm text-muted-foreground">
            Connecting pets and their people, fostering a joyful community for playmates and friendships.
          </p>
        </div>

        <Separator className="my-8 bg-border/60" />

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} PetMets. All rights reserved.
          </p>
          <div className="flex items-center space-x-2">
            <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary p-2 rounded-md hover:bg-muted/20 transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary p-2 rounded-md hover:bg-muted/20 transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary p-2 rounded-md hover:bg-muted/20 transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs text-muted-foreground/80">
          <p className="inline-flex items-center gap-1">
            Crafted with <Heart className="h-3 w-3 text-accent/80 fill-accent/70" /> by the PetMets Team
          </p>
        </div>
      </div>
    </footer>
  );
}
