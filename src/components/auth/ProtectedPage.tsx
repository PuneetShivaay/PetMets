"use client";
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { Loader2, ShieldAlert } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function ProtectedPage({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/login?redirected=true');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center bg-background p-4 text-center">
        <Loader2 className="h-16 w-16 animate-spin text-primary" />
        <p className="mt-4 text-lg font-semibold text-primary">Loading your experience...</p>
        <p className="text-muted-foreground">Please wait a moment.</p>
      </div>
    );
  }

  if (!user) {
     // This state should ideally be brief due to the useEffect redirect.
     // It can serve as a fallback UI.
    return (
       <div className="flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center bg-background p-4 text-center">
        <Card className="w-full max-w-md shadow-xl">
          <CardHeader className="items-center">
            <ShieldAlert className="h-16 w-16 text-destructive mb-4" />
            <CardTitle className="font-headline text-2xl text-destructive">Access Denied</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-foreground/80 mb-6">
              You need to be logged in to access this page.
            </p>
            <Link href="/login" passHref>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Go to Login
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return <>{children}</>;
}
