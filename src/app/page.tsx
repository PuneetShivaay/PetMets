
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { PawPrint, Users, Search, MessageSquareHeart, MapPin, Send, CalendarCheck, ShoppingCart, ShieldCheck, Heart, Dog, Scissors, Home as HomeIcon, GraduationCap, ToyBrick, Check } from "lucide-react";
import type { ReactNode } from "react";

export default async function HomePage() {
  const externalAppUrl = "https://app.petmets.in";
  const heroImageUrl = "/images/home-image.png"; 

  const whyChoosePetMetsItems = [
    {
      icon: <MapPin className="h-10 w-10 text-accent" />,
      title: "GPS Pet Tracking",
      description: "Always know where your pet is. Track real-time location when with pet walkers or at boarding facilities.",
    },
    {
      icon: <Users className="h-10 w-10 text-accent" />,
      title: "Pet Social Network",
      description: "Connect your pet with furry friends nearby. Arrange playdates and make lasting friendships.",
    },
    {
      icon: <Send className="h-10 w-10 text-accent" />,
      title: "Community Engagement",
      description: "Share thoughts, experiences, or fun pet moments within the PetMets community.",
    },
    {
      icon: <CalendarCheck className="h-10 w-10 text-accent" />,
      title: "Smart Reminders",
      description: "Never miss vaccination dates, grooming appointments, walks, or meal times with our innovative reminder system.",
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-accent" />,
      title: "Premium Pet Marketplace",
      description: "Shop high-quality, customized pet products from leashes to toys, beds, and treats.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-accent" />,
      title: "Verified Service Providers",
      description: "All service providers undergo strict KYC verification to ensure your pet's safety and security.",
    },
  ];

  interface ServiceCardItemProps {
    icon: ReactNode;
    title: string;
    description: string;
    features: string[];
    ctaText: string;
    ctaLink: string;
  }

  const serviceCardItems: ServiceCardItemProps[] = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Match Your Pet",
      description: "Find the perfect pet companion for pre-wedding photoshoots and joyous celebrations. Coordinate booking details seamlessly.",
      features: ["Ideal for pre-wedding photoshoots", "Connect with compatible pet partners", "Create memorable celebration moments", "Seamless booking coordination"],
      ctaText: "Find a Match",
      ctaLink: externalAppUrl,
    },
    {
      icon: <Dog className="h-8 w-8 text-primary" />,
      title: "Pet Walking",
      description: "Professional, GPS-tracked walks for your pet when you're busy.",
      features: ["Real-time GPS tracking", "Verified, trained walkers", "Walk reports & photos"],
      ctaText: "Book a Walker",
      ctaLink: externalAppUrl,
    },
    {
      icon: <Scissors className="h-8 w-8 text-primary" />,
      title: "Pet Grooming",
      description: "Professional grooming services to keep your pet looking their best.",
      features: ["Bath & full grooming", "Nail trimming & ear cleaning", "Breed-specific styling"],
      ctaText: "Book Grooming",
      ctaLink: externalAppUrl,
    },
    {
      icon: <HomeIcon className="h-8 w-8 text-primary" />,
      title: "Pet Boarding",
      description: "Safe, comfortable boarding when you need to be away from home.",
      features: ["24/7 supervision", "Daily updates & photos", "Playtime & exercise included"],
      ctaText: "Reserve Boarding",
      ctaLink: externalAppUrl,
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Pet Training",
      description: "Expert training services to help your pet learn and grow.",
      features: ["Basic obedience training", "Behavior correction", "Private & group sessions"],
      ctaText: "Book Training",
      ctaLink: externalAppUrl,
    },
    {
      icon: <ToyBrick className="h-8 w-8 text-primary" />,
      title: "Pet Playzone",
      description: "Our dedicated pet play area offers a spacious garden and a refreshing swimming pool for pure fun and freedom.",
      features: ["Spacious garden for running", "Refreshing swimming pool", "Safe and stimulating environment", "Socialize and exercise"],
      ctaText: "Explore Playzone",
      ctaLink: externalAppUrl,
    },
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container mx-auto grid items-center gap-6 px-4 text-center md:grid-cols-2 md:px-6 md:text-left lg:gap-10">
          <div className="space-y-4">
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
              Welcome to PetMets!
            </h1>
            <p className="max-w-[600px] text-foreground/80 text-base sm:text-lg md:text-xl leading-relaxed">
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
            src={heroImageUrl}
            alt="Two happy dogs and five cute cats together in a vibrant outdoor setting"
            data-ai-hint="dogs cats garden"
            width={600}
            height={400}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            priority 
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
              <p className="max-w-[900px] text-foreground/80 text-base sm:text-lg md:text-xl leading-relaxed">
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

      {/* Why Choose PetMets Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">
              Our Advantages
            </div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">
              Why Choose PetMets?
            </h2>
            <p className="max-w-[900px] text-foreground/80 text-base sm:text-lg md:text-xl leading-relaxed">
              We offer a comprehensive suite of features designed to enhance the lives of pets and their owners.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
            {whyChoosePetMetsItems.map((item, index) => (
              <BenefitItem key={index} icon={item.icon} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Pet Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">
              Our Services
            </div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">
              Pet Services
            </h2>
            <p className="max-w-[900px] text-foreground/80 text-base sm:text-lg md:text-xl leading-relaxed">
              Everything your pet needs in one place. Access a wide range of services through our trusted network.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl items-stretch gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {serviceCardItems.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                ctaText={service.ctaText}
                ctaLink={service.ctaLink}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background border-t border-border">
        <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary md:text-4xl/tight">
              Ready to Unleash New Friendships?
            </h2>
            <p className="mx-auto max-w-[600px] text-foreground/80 text-base sm:text-lg md:text-xl leading-relaxed">
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
    <Card className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
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

interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function BenefitItem({ icon, title, description }: BenefitItemProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card shadow-md hover:shadow-lg transition-shadow h-full">
      <div className="mb-4 rounded-full bg-primary/10 p-4">
        {icon}
      </div>
      <h3 className="font-headline text-xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-sm text-foreground/70">{description}</p>
    </div>
  );
}

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
}

function ServiceCard({ icon, title, description, features, ctaText, ctaLink }: ServiceCardProps) {
  return (
    <Card className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <CardHeader className="flex flex-row items-center gap-4 p-6 space-y-0">
        <div className="rounded-full bg-primary/10 p-3">
          {icon}
        </div>
        <CardTitle className="font-headline text-2xl text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0 flex-grow">
        <p className="text-sm text-foreground/70 mb-4">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-foreground/80">
              <Check className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-6 pt-0 mt-auto">
        <Link href={ctaLink} passHref target="_blank" rel="noopener noreferrer" className="w-full">
          <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            {ctaText}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
