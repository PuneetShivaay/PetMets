
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { PawPrint, Users, Search, MessageSquareHeart } from "lucide-react";

export default function HomePage() {
  const externalAppUrl = "https://app.petmets.in";

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container mx-auto grid items-center gap-6 px-4 text-center md:grid-cols-2 md:px-6 md:text-left lg:gap-10">
          <div className="space-y-4">
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
              Welcome to PetMets!
            </h1>
            <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover a vibrant community where pet owners and their furry, scaly, or feathered friends can find companionship, share experiences, and create lasting bonds.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center md:justify-start">
              <Link href={externalAppUrl} passHref target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Join Our Community
                  <PawPrint className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/how-it-works" passHref>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <Image
            src="https://placehold.co/600x400.png"
            alt="Happy pets and owners"
            data-ai-hint="happy pets owners"
            width={600}
            height={400}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">
                Key Features
              </div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">
                Connect and Share with Ease
              </h2>
              <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform is designed to help you find like-minded pet owners, arrange playdates, and build a supportive network.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
            <FeatureCard
              icon={<Users className="h-8 w-8 text-accent" />}
              title="Build Your Pack"
              description="Create detailed profiles for you and your pets. Share photos, stories, and preferences to find your perfect matches."
            />
            <FeatureCard
              icon={<Search className="h-8 w-8 text-accent" />}
              title="Discover Connections"
              description="Use our smart search and matching tools to find nearby pet owners with similar interests and compatible pets."
            />
            <FeatureCard
              icon={<MessageSquareHeart className="h-8 w-8 text-accent" />}
              title="Engage & Interact"
              description="Join group discussions, attend local events, and chat privately to strengthen your new friendships."
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50 border-t border-border">
        <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary md:text-4xl/tight">
              Ready to Unleash New Friendships?
            </h2>
            <p className="mx-auto max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sign up today and start connecting with a community that shares your passion for pets. Your next adventure awaits!
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <Link href={externalAppUrl} passHref target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                Sign Up Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="flex flex-col items-center text-center p-6">
        <div className="mb-4 rounded-full bg-accent/10 p-3">
          {icon}
        </div>
        <CardTitle className="font-headline text-2xl text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0 text-center">
        <CardDescription className="text-foreground/70">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
