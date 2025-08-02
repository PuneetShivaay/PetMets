
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PawPrint, UserPlus, FilePenLine, UserRoundCheck, Heart, MessageSquare, Menu, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HowItWorksPage() {
  const externalAppUrl = "https://app.petmets.in";

  const steps = [
    {
      icon: <UserPlus className="h-8 w-8 text-accent" />,
      title: "Create Your Account",
      description: "Sign up quickly with your email and start your journey with PetMets.",
      image: {
        src: "https://placehold.co/550x350.png",
        alt: "Signup screen for PetMets",
        dataAiHint: "app signup screen"
      },
    },
    {
      icon: <FilePenLine className="h-8 w-8 text-accent" />,
      title: "Complete Your Pet’s Profile",
      description: "Tell us about your pet to get the best match and service suggestions.",
      image: {
        src: "https://placehold.co/550x350.png",
        alt: "Dashboard prompting user to complete pet profile",
        dataAiHint: "app dashboard profile"
      },
    },
    {
      icon: <UserRoundCheck className="h-8 w-8 text-accent" />,
      title: "Add or Update Pet Details",
      description: "Update your pet’s age, breed, bio, and your contact info anytime.",
      image: {
        src: "https://placehold.co/550x350.png",
        alt: "Pet profile screen with edit options",
        dataAiHint: "app pet profile"
      },
    },
    {
      icon: <Heart className="h-8 w-8 text-accent" />,
      title: "Find Matches for Your Pet",
      description: "Swipe, send requests, and find the perfect playmate or match.",
      image: {
        src: "https://placehold.co/550x350.png",
        alt: "Pet matching interface on the app",
        dataAiHint: "app pet matching"
      },
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-accent" />,
      title: "Chat with Pet Owners",
      description: "Connect and communicate with fellow pet lovers directly in the app.",
      image: {
        src: "https://placehold.co/550x350.png",
        alt: "Chat interface between two pet owners",
        dataAiHint: "app chat"
      },
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-accent" />,
      title: "Chat with Anyone",
      description: "Continue conversations and build a community with other pet parents.",
      image: {
        src: "https://placehold.co/550x350.png",
        alt: "List of ongoing chats with other pet owners",
        dataAiHint: "app chat list"
      },
    },
    {
      icon: <Menu className="h-8 w-8 text-accent" />,
      title: "Explore More Pet Services",
      description: "From grooming to training and boarding—find everything your pet needs.",
      image: {
        src: "https://placehold.co/550x350.png",
        alt: "App side menu showing various pet services",
        dataAiHint: "app services menu"
      },
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6 text-center animate-fade-in-down">
          <PawPrint className="mx-auto h-16 w-16 text-primary mb-6" />
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
            How PetMets Works
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80 md:text-xl">
            A simple way to care, connect & enjoy life with your pets.
          </p>
          <div className="mt-8">
            <Link href={externalAppUrl} passHref target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-md">
                <Download className="mr-2 h-5 w-5" />
                Download the App
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Step-by-Step Walkthrough */}
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24 lg:py-32">
        <div className="grid gap-16 md:gap-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-8 md:gap-12 animate-fade-in-up ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <div className="md:w-1/2">
                <Image
                  src={step.image.src}
                  alt={step.image.alt}
                  data-ai-hint={step.image.dataAiHint}
                  width={550}
                  height={350}
                  className="rounded-xl shadow-lg object-contain aspect-video bg-muted/30"
                />
              </div>
              <div className="md:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 grid place-items-center h-12 w-12 rounded-full bg-primary/10 text-primary font-bold text-xl font-headline">
                    {index + 1}
                  </div>
                  <h2 className="font-headline text-3xl font-semibold text-primary">{step.title}</h2>
                </div>
                <p className="text-lg text-foreground/80 pl-16">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA Section */}
      <section className="w-full py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6 text-center animate-fade-in-up">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Ready to Start?
          </h2>
          <p className="mt-3 max-w-md mx-auto text-lg text-foreground/80">
            Download PetMets now and make pet parenting smarter and simpler.
          </p>
          <div className="mt-8">
            <Link href={externalAppUrl} passHref target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-md">
                <Download className="mr-2 h-5 w-5" />
                Download App
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

    