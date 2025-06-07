
"use client";
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { PawPrint, LogOut, LogIn, UserCircle2, Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link href={href} passHref>
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
  const { user, logout, loading } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/features', label: 'Features' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/about', label: 'About Us' },
  ];

  const handleLoginClick = () => {
    window.open('https://app.petmets.in', '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" passHref>
          <div className="flex items-center gap-2 cursor-pointer" aria-label="PetMets Home">
            <PawPrint className="h-8 w-8 text-primary" />
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
          {loading ? (
             <Button variant="ghost" size="sm" disabled>Loading...</Button>
          ) : user ? (
            <>
              <NavLink href="/dashboard">Dashboard</NavLink>
              <Button variant="outline" size="sm" onClick={logout} className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <LogOut className="mr-2 h-4 w-4" /> Logout
              </Button>
            </>
          ) : (
            <Button
              variant="ghost"
              onClick={handleLoginClick}
              className="justify-start md:w-auto text-foreground hover:text-accent-foreground hover:bg-accent transition-colors duration-200"
            >
              <LogIn className="mr-2 h-4 w-4" /> Login
            </Button>
          )}
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
              <div className="mb-6 flex items-center justify-between">
                <SheetClose asChild>
                  <Link href="/" passHref>
                    <div className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                      <PawPrint className="h-7 w-7 text-primary" />
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
                    <NavLink href={item.href}>{item.label}</NavLink>
                  </SheetClose>
                ))}
                <hr className="my-2 border-border" />
                 {loading ? (
                    <Button variant="ghost" className="w-full justify-start" disabled>Loading...</Button>
                  ) : user ? (
                  <>
                    <SheetClose asChild>
                      <NavLink href="/dashboard">
                        <UserCircle2 className="mr-2 h-4 w-4" /> Dashboard
                      </NavLink>
                    </SheetClose>
                    <Button variant="outline" onClick={() => { logout(); setIsMobileMenuOpen(false); }} className="w-full justify-start border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <LogOut className="mr-2 h-4 w-4" /> Logout
                    </Button>
                  </>
                ) : (
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-foreground hover:text-accent-foreground hover:bg-accent transition-colors duration-200"
                      onClick={() => {
                        handleLoginClick();
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      <LogIn className="mr-2 h-4 w-4" /> Login
                    </Button>
                  </SheetClose>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
