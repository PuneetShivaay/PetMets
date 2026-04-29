
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PawPrint, Briefcase, TrendingUp, ShieldCheck, Users, Scissors, Home as HomeIcon, GraduationCap, Footprints, ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const providerBenefits = [
  {
    icon: <TrendingUp className="h-10 w-10 text-accent" />,
    title: "Grow Your Business",
    description: "Reach thousands of pet parents in your local area who are actively looking for the services you provide.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-accent" />,
    title: "Trusted & Verified",
    description: "Join a network of verified professionals. We build trust so you can focus on providing top-notch care.",
  },
  {
    icon: <Briefcase className="h-10 w-10 text-accent" />,
    title: "Easy Management",
    description: "Our platform helps you manage bookings, communication, and your professional profile all in one place.",
  },
];

const providerServices = [
  {
    icon: <Scissors className="h-8 w-8 text-primary" />,
    title: "Pet Grooming",
    description: "Offer professional baths, haircuts, and styling for various breeds.",
  },
  {
    icon: <HomeIcon className="h-8 w-8 text-primary" />,
    title: "Pet Boarding",
    description: "Provide a safe home-away-from-home for pets when their owners are away.",
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    title: "Pet Training",
    description: "Help owners with obedience, behavior correction, and trick training.",
  },
  {
    icon: <Footprints className="h-8 w-8 text-primary" />,
    title: "Pet Walking",
    description: "Ensure pets get their daily exercise and outdoor time with scheduled walks.",
  },
];

export default function ProvidersPage() {
  const providerAppUrl = "https://app.petmets.in";

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6 animate-fade-in-right">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-2">
                Join our Professional Network
              </div>
              <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
                Partner with PetMets and Grow Your Pet Business
              </h1>
              <p className="text-lg text-foreground/80 md:text-xl leading-relaxed">
                Connect with local pet parents, manage your bookings efficiently, and be part of India's fastest-growing pet community.
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Link href={providerAppUrl} passHref target="_blank">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-md">
                    Become a Provider <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact" passHref>
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Contact Partnerships
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-fade-in-left">
              <Image
                src="https://picsum.photos/seed/provider-hero/800/600"
                alt="Professional pet groomer at work"
                data-ai-hint="pet groomer"
                width={800}
                height={600}
                className="rounded-xl shadow-2xl object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-12 animate-fade-in-down">
            Why Choose PetMets?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {providerBenefits.map((benefit, index) => (
              <Card key={index} className="bg-card shadow-lg border-0 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <CardHeader className="flex flex-col items-center p-8 pb-4">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="font-headline text-2xl text-primary">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <p className="text-foreground/70">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4 animate-fade-in-down">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Services You Can Offer
            </h2>
            <p className="text-lg text-foreground/80">
              We're looking for passionate professionals across various categories to serve our growing community of pet parents.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {providerServices.map((service, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-background rounded-xl shadow-md animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="rounded-full bg-primary/10 p-3 mb-4">
                  {service.icon}
                </div>
                <h3 className="font-headline text-xl font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-sm text-foreground/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="animate-fade-in-right order-2 lg:order-1">
              <Image
                src="https://picsum.photos/seed/onboarding/800/600"
                alt="Pet service provider using the PetMets app"
                data-ai-hint="provider app"
                width={800}
                height={600}
                className="rounded-xl shadow-xl object-cover aspect-[4/3]"
              />
            </div>
            <div className="space-y-8 animate-fade-in-left order-1 lg:order-2">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Ready to get started?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 grid place-items-center h-10 w-10 rounded-full bg-primary text-white font-bold">1</div>
                  <div>
                    <h3 className="font-bold text-lg text-primary">Register Your Account</h3>
                    <p className="text-foreground/70">Create your professional profile on our platform.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 grid place-items-center h-10 w-10 rounded-full bg-primary text-white font-bold">2</div>
                  <div>
                    <h3 className="font-bold text-lg text-primary">Get Verified</h3>
                    <p className="text-foreground/70">Our team will verify your details to maintain community trust.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 grid place-items-center h-10 w-10 rounded-full bg-primary text-white font-bold">3</div>
                  <div>
                    <h3 className="font-bold text-lg text-primary">Start Earning</h3>
                    <p className="text-foreground/70">List your services and start receiving bookings from local pet owners.</p>
                  </div>
                </div>
              </div>
              <Link href={providerAppUrl} passHref target="_blank">
                <Button size="lg" className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90 mt-4">
                  Join as a Provider
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl font-bold sm:text-4xl mb-6">
            Help Us Build the Ultimate Pet Community
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Your expertise and passion can make a real difference in the lives of pets and their owners.
          </p>
          <Link href={providerAppUrl} passHref target="_blank">
            <Button size="lg" variant="secondary" className="px-10 py-6 text-lg font-bold">
              Register Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
