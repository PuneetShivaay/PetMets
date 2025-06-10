
"use client";
import Link from 'next/link';
import Image from 'next/image'; // Import next/image
import { Button } from '@/components/ui/button';
import { LogIn, Menu, X } from 'lucide-react'; // PawPrint removed
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link href={href} passHref onClick={onClick}>
      <Button
        variant={isActive ? "secondary" : "ghost"}
        className={cn(
          "justify-start w-full md:w-auto text-foreground hover:text-accent-foreground hover:bg-accent transition-colors duration-200",
          isActive && "text-primary font-semibold"
        )}
      >
        {children}
      </Button>
    </Link>
  );
};

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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" passHref>
          <div className="flex items-center gap-2 cursor-pointer" aria-label="PetMets Home">
            <Image
              src="/images/logo.png" // Path to your logo in the public/images folder
              alt="PetMets Logo"
              width={32} // IMPORTANT: Replace with your logo's actual width
              height={32} // IMPORTANT: Replace with your logo's actual height
              className="h-8 w-8" // Adjust styling as needed
              data-ai-hint="company logo"
            />
            <span className="font-headline text-2xl font-semibold text-primary">
              PetMets
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {navItems.map(item => (
           <NavLink key={item.href} href={item.href}>{item.label}</NavLink>
          ))}
          <Button
            variant="ghost"
            onClick={handleLoginClick}
            className="justify-start md:w-auto text-foreground hover:text-accent-foreground hover:bg-accent transition-colors duration-200"
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
              <div className="mb-6 flex items-center justify-between">
                <SheetClose asChild>
                  <Link href="/" passHref>
                    <div className="flex items-center gap-2" onClick={closeMobileMenu}>
                      <Image
                        src="/images/logo.png" // Path to your logo
                        alt="PetMets Logo"
                        width={28} // IMPORTANT: Replace with your logo's actual width for mobile if different
                        height={28} // IMPORTANT: Replace with your logo's actual height for mobile if different
                        className="h-7 w-7"
                        data-ai-hint="company logo"
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
              <nav className="flex flex-col space-y-3">
                {navItems.map(item => (
                  <SheetClose asChild key={item.href}>
                    <NavLink href={item.href} onClick={closeMobileMenu}>{item.label}</NavLink>
                  </SheetClose>
                ))}
                <hr className="my-2 border-border" />
                
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-foreground hover:text-accent-foreground hover:bg-accent transition-colors duration-200"
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
