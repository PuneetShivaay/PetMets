"use client"; // useAuth hook requires client component
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { Edit3, PawPrint, UserCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <header className="mb-8">
        <h1 className="font-headline text-3xl font-bold text-primary sm:text-4xl">
          Welcome to Your Dashboard, {user?.displayName || user?.email || 'Pet Lover'}!
        </h1>
        <p className="mt-2 text-lg text-foreground/80">
          Manage your profile, discover connections, and engage with the community.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <UserCircle2 className="h-8 w-8 text-accent" />
              <CardTitle className="font-headline text-2xl text-primary">Your Profile</CardTitle>
            </div>
            <CardDescription>
              Keep your information up-to-date to make the best connections.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-foreground/70 mb-4">
              A complete profile helps others find you and your pet. Try our AI assistant to draft your 'About Me' section!
            </p>
            <Link href="/dashboard/profile" passHref>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Edit3 className="mr-2 h-4 w-4" /> Create / Edit Profile
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
             <div className="flex items-center gap-3 mb-2">
                <PawPrint className="h-8 w-8 text-accent" />
                <CardTitle className="font-headline text-2xl text-primary">My Pets</CardTitle>
            </div>
            <CardDescription>
              Manage your pets' profiles and showcase their personalities. (Feature coming soon!)
            </CardDescription>
          </CardHeader>
          <CardContent>
             <Image
                src="https://placehold.co/300x150.png"
                alt="Placeholder for My Pets section"
                data-ai-hint="cute pets icons"
                width={300}
                height={150}
                className="w-full rounded-md object-cover aspect-[2/1] mb-4 opacity-50"
              />
            <Button className="w-full" disabled>
              Manage Pets (Soon)
            </Button>
          </CardContent>
        </Card>
        
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
             <div className="flex items-center gap-3 mb-2">
                <Users className="h-8 w-8 text-accent" />
                <CardTitle className="font-headline text-2xl text-primary">Connections</CardTitle>
            </div>
            <CardDescription>
              View your PetMet matches and messages. (Feature coming soon!)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Image
                src="https://placehold.co/300x150.png"
                alt="Placeholder for Connections section"
                data-ai-hint="social network interface"
                width={300}
                height={150}
                className="w-full rounded-md object-cover aspect-[2/1] mb-4 opacity-50"
              />
            <Button className="w-full" disabled>
              View Connections (Soon)
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
