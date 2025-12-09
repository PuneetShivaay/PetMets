
"use client";
import Link from 'next/link';
import Image from 'next/image'; // Import next/image
import { Button } from '@/components/ui/button';
import { LogIn, Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useState } from 'react';
import { NavLink } from './NavLink';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/features', label: 'Features' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/about', label: 'About Us' },
  ];

  const externalAppLoginUrl = "https://app.petmets.in";

  const handleLoginClick = () => {
    window.open(externalAppLoginUrl, '_blank', 'noopener,noreferrer');
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" passHref>
          <div className="flex items-center gap-3 cursor-pointer" aria-label="PetMets Home">
            <Image
              src="/images/logo.png" 
              alt="PetMets Logo"
              width={36} 
              height={36} 
              className="h-9 w-9" 
              data-ai-hint="company logo"
              priority
            />
            <span className="font-headline text-3xl font-bold text-primary">
              PetMets
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map(item => (
           <NavLink key={item.href} href={item.href}>{item.label}</NavLink>
          ))}
          <Button
            onClick={handleLoginClick}
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-6 shadow-sm"
          >
            <LogIn className="mr-2 h-4 w-4" /> Login
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-6">
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              </SheetHeader>
              <div className="mb-8 flex items-center justify-between">
                <SheetClose asChild>
                  <Link href="/" passHref>
                    <div className="flex items-center gap-2" onClick={closeMobileMenu}>
                      <Image
                        src="/images/logo.png" 
                        alt="PetMets Logo"
                        width={28} 
                        height={28} 
                        className="h-7 w-7"
                        data-ai-hint="company logo"
                        priority 
                      />
                      <span className="font-headline text-xl font-semibold text-primary">
                        PetMets
                      </span>
                    </div>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" aria-label="Close menu">
                    <X className="h-6 w-6" />
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col space-y-4">
                {navItems.map(item => (
                  <SheetClose asChild key={item.href}>
                    <Link href={item.href} passHref>
                      <span onClick={closeMobileMenu} className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors">{item.label}</span>
                    </Link>
                  </SheetClose>
                ))}
                <hr className="my-4 border-border" />
                
                <Button
                  className="w-full justify-center bg-accent text-accent-foreground hover:bg-accent/90"
                  onClick={() => {
                    handleLoginClick();
                    closeMobileMenu();
                  }}
                >
                  <LogIn className="mr-2 h-4 w-4" /> Login
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
