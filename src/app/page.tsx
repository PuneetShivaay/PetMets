
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { PawPrint, Users, Search, Dog, Scissors, Home as HomeIcon, GraduationCap, ToyBrick, ArrowRight, ShieldCheck, Heart, MessageSquare, Play, AppStore, PlayStore, StepForward, UserPlus, CheckCircle, Menu, Download, Check } from "lucide-react";
import type { ReactNode } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


const PlayStoreIcon = () => (
  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.5,12.5c0.3-0.8,0.5-1.6,0.5-2.5c0-0.9-0.2-1.7-0.5-2.5L14.7,12L21.5,12.5z M3.5,12c0,3.3,1.9,6.2,4.6,7.6l6.3-6.3l-6.3-6.3C5.4,5.8,3.5,8.7,3.5,12z M12.5,3.5c-0.8-0.3-1.6-0.5-2.5-0.5c-0.9,0-1.7,0.2-2.5,0.5l4.5,4.5L12.5,3.5z M12.5,20.5c0.8,0.3,1.6,0.5,2.5,0.5c0.9,0-1.7-0.2-2.5-0.5l-4.5-4.5L12.5,20.5z M19.4,7.6L14,2.2C13.1,2.1,12.1,2,11,2c-2.4,0-4.6,0.7-6.5,1.8L12,11.3L19.4,7.6z M4.5,14.2l7.5,7.5c1.9,1.1,4.1,1.8,6.5,1.8c1.1,0,2.1-0.1,3-0.3l-7.4-3.7L4.5,14.2z"/>
  </svg>
);
const AppStoreIcon = () => (
  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.6,15.6c-0.5,1.5-1.5,2.9-3,2.9s-1.5-0.8-3-0.8s-2.1,0.8-3.3,0.8c-1.5,0-2.8-1.5-3.8-3.6c-1.4-2.8-0.7-6.9,1.2-9.1C3.6,5.3,5,4.4,6.5,4.4c1.3,0,2.4,0.8,3.3,0.8c0.8,0,1.8-0.8,3.2-0.8c1.3,0,2.8,0.9,3.6,2.1c-1.4,0.9-2.3,2.4-2.3,4.1C15.3,13.1,16.2,14.5,17.6,15.6z M15.5,3.5C15,2.6,13.9,2,12.8,2c-0.1,0-0.2,0-0.3,0c-0.8,0-1.6,0.4-2.1,0.4c-0.6,0-1.4-0.4-2.2-0.4c-1.5,0-2.8,0.9-3.6,2.1C4,5,3.5,6,3.5,7c0,1,0.4,2,0.9,2.8c0.5,0.8,1.2,1.4,2.1,1.4c0.1,0,0.2,0,0.3,0c0.8,0,1.6-0.4,2.2-0.4c0.5,0,1.3,0.4,2.1,0.4c1.5,0,2.8-0.9,3.6,2.1c0.5-0.8,0.9-1.8,0.9-2.8C16,6.3,15.8,4.6,15.5,3.5z"/>
  </svg>
);


export default async function HomePage() {
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.petmets.petmets&hl=en_IN";
  const appStoreUrl = "https://app.petmets.in";

  const howItWorksSteps = [
    {
      icon: <UserPlus className="h-10 w-10 text-accent" />,
      title: "Create Profile",
      description: "Sign up and create detailed profiles for you and your pet to find the best connections.",
    },
    {
      icon: <Search className="h-10 w-10 text-accent" />,
      title: "Find Connections",
      description: "Discover nearby pet owners, search for playmates, and build your local pet community.",
    },
    {
      icon: <Menu className="h-10 w-10 text-accent" />,
      title: "Explore Services",
      description: "Access a wide range of trusted pet services, from grooming to vet care, all in one place.",
    },
  ];

  interface ServiceCardItemProps {
    icon: ReactNode;
    title: string;
    description: string;
    features: string[];
    buttonText: string;
    buttonLink: string;
  }

  const serviceCardItems: ServiceCardItemProps[] = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Match Your Pet",
      description: "Find the perfect pet companion for pre-wedding photoshoots and joyous celebrations. Coordinate booking details seamlessly.",
      features: [
        "Ideal for pre-wedding photoshoots",
        "Connect with compatible pet partners",
        "Create memorable celebration moments",
        "Seamless booking coordination",
      ],
      buttonText: "Find a Match",
      buttonLink: "/features",
    },
    {
      icon: <Dog className="h-8 w-8 text-primary" />,
      title: "Pet Walking",
      description: "Professional, GPS-tracked walks for your pet when you're busy.",
      features: [
        "Real-time GPS tracking",
        "Verified, trained walkers",
        "Walk reports & photos",
        "Flexible scheduling options",
      ],
      buttonText: "Book a Walker",
      buttonLink: "/features",
    },
    {
      icon: <Scissors className="h-8 w-8 text-primary" />,
      title: "Pet Grooming",
      description: "Professional grooming services to keep your pet looking their best.",
      features: [
        "Bath & full grooming",
        "Nail trimming & ear cleaning",
        "Breed-specific styling",
        "Gentle & safe products used",
      ],
      buttonText: "Book Grooming",
      buttonLink: "/features",
    },
    {
      icon: <HomeIcon className="h-8 w-8 text-primary" />,
      title: "Pet Boarding",
      description: "Safe, comfortable boarding when you need to be away from home.",
      features: [
        "24/7 supervision",
        "Daily updates & photos",
        "Playtime & exercise included",
        "Spacious & comfortable stays",
      ],
      buttonText: "Reserve Boarding",
      buttonLink: "/features",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Pet Training",
      description: "Expert training services to help your pet learn and grow.",
      features: [
        "Basic obedience training",
        "Behavior correction",
        "Private & group sessions",
        "Positive reinforcement methods",
      ],
      buttonText: "Book Training",
      buttonLink: "/features",
    },
    {
      icon: <ToyBrick className="h-8 w-8 text-primary" />,
      title: "Pet Playzone",
      description: "Our dedicated pet play area offers a spacious garden and a refreshing swimming pool for pure fun and freedom.",
      features: [
        "Spacious garden for running",
        "Refreshing swimming pool",
        "Safe and stimulating environment",
        "Socialize and exercise",
      ],
      buttonText: "Explore Playzone",
      buttonLink: "/features",
    },
  ];

  const benefits = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-accent" />,
      title: "Safe & Verified Professionals",
      description: "Your pet’s safety is our top priority. All service providers on PetMets undergo strict verification so you can have peace of mind.",
    },
    {
      icon: <Users className="h-10 w-10 text-accent" />,
      title: "Pet-Centered Community",
      description: "Connect with a vibrant community of pet lovers. Share advice, arrange playdates, and build lasting friendships for you and your pet.",
    },
    {
      icon: <PawPrint className="h-10 w-10 text-accent" />,
      title: "All-in-One Pet Management",
      description: "From health records and reminders to booking services and socializing, manage your pet’s entire world from a single, easy-to-use app.",
    },
  ];

  const faqItems = [
    {
      question: "Is it free to use PetMets?",
      answer: "Yes, the PetMets app is free to download and use for finding matches and connecting with the community. Charges may apply for booking specific services from our verified providers."
    },
    {
      question: "What services can I book?",
      answer: "You can book a wide range of services including pet grooming, boarding, walking, training, and even in-home vet consultations. We are continuously expanding our offerings."
    },
    {
      question: "Is my pet’s data safe?",
      answer: "Absolutely. We use secure systems to protect all your data. Your pet's information is only shared with your consent, for example, when you connect with other users or book a service."
    },
    {
      question: "How do I contact support?",
      answer: "You can contact our support team directly through the app's 'Help & Support' section or by emailing us at support@petmets.in. We're always here to help!"
    }
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Section 1: Hero Banner */}
      <section className="w-full py-20 md:py-32 lg:py-40 bg-secondary/30">
        <div className="container mx-auto grid items-center gap-8 px-4 text-center md:grid-cols-2 md:px-6 md:text-left lg:gap-12">
          <div className="space-y-6 animate-fade-in-right">
            <h1 className="font-headline text-5xl font-bold tracking-tight text-primary sm:text-6xl md:text-7xl">
              Simplify Pet Parenting with PetMets
            </h1>
            <p className="max-w-[600px] text-foreground/80 text-base sm:text-lg md:text-xl leading-relaxed">
              Book trusted services, connect with pet lovers, and manage your pet’s world—all in one app.
            </p>
            <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center md:justify-start">
              <Link href={playStoreUrl} passHref target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-md">
                   <PlayStoreIcon /> Download for Android
                </Button>
              </Link>
              <Link href={appStoreUrl} passHref target="_blank" rel="noopener noreferrer">
                 <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                   <AppStoreIcon /> Download for iOS
                </Button>
              </Link>
            </div>
          </div>
          <div className="mx-auto overflow-hidden rounded-xl object-center sm:w-full animate-fade-in-left shadow-2xl bg-muted/30">
            <Image
              src="/images/home-image.png"
              alt="Happy pets using the PetMets app"
              data-ai-hint="happy pets app"
              width={600}
              height={400}
              className="w-full h-full object-contain"
              priority 
            />
          </div>
        </div>
      </section>

      {/* Section 2: How PetMets Works */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-down mb-12">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Get Started in Three Simple Steps
            </h2>
            <p className="max-w-[900px] text-foreground/80 text-base sm:text-lg md:text-xl leading-relaxed">
              Joining our community is quick and easy. Follow these steps to begin your journey.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center gap-4 animate-fade-in-up" style={{ animationDelay: `${200 + index * 100}ms` }}>
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-secondary/80 border-2 border-primary/20 mb-4">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary">
                    {step.icon}
                  </div>
                </div>
                <h3 className="font-headline text-2xl font-semibold text-primary">{step.title}</h3>
                <p className="text-foreground/70">{step.description}</p>
              </div>
            ))}
          </div>
           <div className="text-center mt-8 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <Link href="/how-it-works" passHref>
                <Button size="lg" variant="outline">
                  See the Full Guide <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
        </div>
      </section>

      {/* Section 3: Pet Services */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-fade-in-down">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Comprehensive Pet Services
            </h2>
            <p className="max-w-[900px] text-foreground/80 text-base sm:text-lg md:text-xl leading-relaxed">
              Everything your pet needs, right at your fingertips. Access a wide range of trusted services through our verified network.
            </p>
          </div>
          <div className="mx-auto grid max-w-7xl items-stretch gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {serviceCardItems.map((service, index) => (
               <Card key={index} className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full animate-fade-in-up border-0" style={{ animationDelay: `${200 + index * 100}ms` }}>
                <CardHeader className="flex flex-row items-center gap-4 p-6 pb-4 space-y-0">
                  <div className="rounded-full bg-primary/10 p-3">
                    {service.icon}
                  </div>
                  <CardTitle className="font-headline text-xl text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-2 flex-grow">
                  <p className="text-sm text-foreground/80 mb-4">{service.description}</p>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                   <Link href={service.buttonLink} passHref>
                    <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                      {service.buttonText}
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Section 4: See PetMets in Action */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-down mb-12">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              See PetMets in Action
            </h2>
            <p className="max-w-[900px] text-foreground/80 text-base sm:text-lg md:text-xl leading-relaxed">
              Get a glimpse into the joyful connections and happy moments created every day on our platform.
            </p>
          </div>
          <div className="animate-fade-in-up">
            <div className="aspect-video max-w-4xl mx-auto overflow-hidden rounded-xl shadow-2xl border">
              <video
                className="w-full h-full object-cover"
                src="/videos/petmetsvideo.mp4"
                title="PetMets - See It In Action"
                autoPlay
                loop
                muted
                playsInline
                controls
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Benefits for Pet Parents */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-down mb-12">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Designed for You and Your Pet
            </h2>
            <p className="max-w-[900px] text-foreground/80 text-base sm:text-lg md:text-xl leading-relaxed">
              We focus on what matters most: safety, community, and convenience.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 h-full animate-fade-in-up border-0 text-center" style={{ animationDelay: `${200 + index * 100}ms` }}>
                <CardHeader className="flex flex-col items-center p-8">
                  <div className="mb-4 rounded-full bg-primary/10 p-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="font-headline text-2xl text-primary">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <p className="text-foreground/70">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Final CTA Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto grid items-center justify-center gap-8 px-4 md:px-6 md:grid-cols-2 lg:gap-16">
          <div className="animate-fade-in-right">
            <Image
              src="/images/Know More About PetMets.png"
              alt="PetMets app being used on a phone"
              data-ai-hint="app mobile screenshot"
              width={1200}
              height={800}
              className="rounded-xl mx-auto w-full max-w-md h-auto object-contain"
            />
          </div>
          <div className="space-y-6 text-center md:text-left animate-fade-in-left">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl/tight">
              Start Your PetMets Journey Today!
            </h2>
            <p className="mx-auto max-w-[600px] text-foreground/80 text-base sm:text-lg md:text-xl leading-relaxed md:mx-0">
              Join 10,000+ happy pet parents across India. Download the app now and unlock a new world of possibilities for you and your pet.
            </p>
            <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center md:justify-start">
               <Link href={playStoreUrl} passHref target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-md">
                   <PlayStoreIcon /> Download for Android
                </Button>
              </Link>
              <Link href={appStoreUrl} passHref target="_blank" rel="noopener noreferrer">
                 <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                   <AppStoreIcon /> Download for iOS
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: FAQ Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
           <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-down mb-12">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-foreground/80 text-base sm:text-lg md:text-xl leading-relaxed">
              Have questions? We've got answers. Here are some of the most common queries from our community.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((faq, index) => (
              <AccordionItem value={`item-${index+1}`} key={index} className="bg-background rounded-lg mb-4 px-6 shadow-md border-b-0 animate-fade-in-up" style={{ animationDelay: `${200 + index * 100}ms` }}>
                <AccordionTrigger className="font-headline text-lg text-primary hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
