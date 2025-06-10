
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PawPrint, UserPlus, Search, MessageCircle,Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // Import Link

export default function HowItWorksPage() {
  const externalAppUrl = "https://app.petmets.in";
  const steps = [
    {
      icon: <UserPlus className="h-10 w-10 text-accent" />,
      title: "Sign Up & Create Your Profile",
      description: "Joining is quick and easy! Tell us about yourself and your beloved pet(s). Add photos and details to help others get to know you.",
      image: { src: "https://placehold.co/500x300.png", alt: "User signing up and creating a pet profile on PetMets", dataAiHint: "app signup profile" },
    },
    {
      icon: <Search className="h-10 w-10 text-accent" />,
      title: "Discover & Find Matches",
      description: "Browse profiles of other pet owners in your area. Use our filters to find pets with similar play styles, breeds, or ages.",
      image: { src: "https://placehold.co/500x300.png", alt: "Discovering pet matches and browsing profiles on PetMets", dataAiHint: "pet matching discover" },
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-accent" />,
      title: "Connect & Communicate",
      description: "Once you find a potential PetMet, send a friendly message! Arrange safe and fun meetups for your pets to socialize.",
      image: { src: "https://placehold.co/500x300.png", alt: "Connecting and chatting with other pet owners on PetMets", dataAiHint: "app messaging connect" },
    },
    {
      icon: <Users className="h-10 w-10 text-accent" />,
      title: "Build Your Community",
      description: "Participate in local events, join groups, and share experiences. PetMets is more than an app – it's a community!",
      image: { src: "https://placehold.co/500x300.png", alt: "Pets and owners building a community through PetMets", dataAiHint: "pets community social" },
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="mb-12 text-center">
        <PawPrint className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          How PetMets Works
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Connecting with fellow pet lovers is simple. Follow these easy steps to start your journey with PetMets.
        </p>
      </div>

      <div className="grid gap-10 md:gap-16">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-8 md:gap-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="md:w-1/2">
              <Image
                src={step.image.src}
                alt={step.image.alt}
                data-ai-hint={step.image.dataAiHint}
                width={500}
                height={300}
                className="rounded-xl shadow-lg object-cover aspect-video"
              />
            </div>
            <div className="md:w-1/2">
              <Card className="bg-card shadow-md">
                <CardHeader className="flex-row items-center gap-4 space-y-0 pb-4">
                  <div className="rounded-full bg-accent/10 p-3">
                     {step.icon}
                  </div>
                  <CardTitle className="font-headline text-2xl text-primary">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-foreground/70">{step.description}</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary">
          Ready to Get Started?
        </h2>
        <p className="mt-3 max-w-md mx-auto text-lg text-foreground/80">
          Join PetMets today and find your pet's new best friend!
        </p>
        <Link href={externalAppUrl} passHref target="_blank" rel="noopener noreferrer">
          <button
            className="mt-8 inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-medium text-accent-foreground shadow-sm hover:bg-accent/90 transition-colors"
          >
            Sign Up Now
          </button>
        </Link>
      </div>
    </div>
  );
}
