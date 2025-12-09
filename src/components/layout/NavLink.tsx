
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

export const NavLink = ({ href, children, onClick }: { href: string; children: ReactNode; onClick?: () => void }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link href={href} passHref onClick={onClick}>
      <span
        className={cn(
          "font-medium text-foreground/70 transition-colors hover:text-primary",
          isActive && "text-primary font-semibold"
        )}
      >
        {children}
      </span>
    </Link>
  );
};
