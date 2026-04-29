
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PawPrint, Target, Eye, Star, HeartHandshake, Linkedin, Twitter, Users } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

interface Review {
  name: string;
  avatarFallback: string;
  reviewText: string;
  rating: number;
  petName?: string;
  location?: string;
}

const reviewsData: Review[] = [
  {
    name: "Sarah Awasthi",
    avatarFallback: "SA",
    reviewText: "PetMets made finding a playmate for Buddy so easy! We've met some wonderful dogs and owners in our neighborhood. The app is intuitive and safe.",
    rating: 5,
    location: "Banglore, KA",
  },
  {
    name: "Ritu Chaudhary",
    avatarFallback: "RC",
    reviewText: "I was worried about leaving Luna when I went on vacation, but PetMets boarding was fantastic. Daily updates and a happy pup when I returned!",
    rating: 5,
    location: "Pune, Maharashtra",
  },
  {
    name: "Nandani Singh",
    avatarFallback: "NS",
    reviewText: "The training resources and connections on PetMets have been invaluable. Oliver is a much more confident and well-behaved cat now. Highly recommend!",
    rating: 4,
    location: "Lucknow, UP",
  },
];

interface Founder {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

const foundersData: Founder[] = [
  {
    name: "Ghanist Baghel",
    role: "Co-founder & CEO",
    bio: "Passionate animal lover with a background in community building and business strategy. Dedicated to making pet parenting a joyful experience.",
    image: "https://picsum.photos/seed/founder1/400/400",
    linkedin: "https://www.linkedin.com/in/ghanist-baghel/",
    twitter: "#",
  },
  {
    name: "Puneet Kumar",
    role: "Co-founder & CTO",
    bio: "Tech visionary with years of experience in app development. Committed to building secure and intuitive platforms for pet enthusiasts.",
    image: "https://picsum.photos/seed/founder2/400/400",
    linkedin: "https://www.linkedin.com/in/puneetshivaay/",
    twitter: "#",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6 text-center animate-fade-in-down">
          <PawPrint className="mx-auto h-16 w-16 text-primary mb-6" />
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
            About PetMets
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80 md:text-xl">
            We believe in the power of connection – for pets and their people. Learn more about our story, our mission, and what drives us to build a happier world for animals.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-right">
            <Image
              src="/images/mission.jpeg"
              alt="Team of PetMets founders"
              data-ai-hint="team founders"
              width={550}
              height={400}
              className="rounded-xl shadow-lg object-cover aspect-[4/3]"
            />
          </div>
          <div className="space-y-4 animate-fade-in-left">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Story</h2>
            <p className="text-lg text-foreground/80">
              PetMets was born from a simple idea: what if finding friends for our pets could be as easy as finding friends for ourselves? As passionate pet owners, we saw a need for a safe, dedicated space where pets could socialize and their owners could connect.
            </p>
            <p className="text-lg text-foreground/80">
              We started with a vision to combat pet loneliness and build a supportive network for pet parents. Today, we're proud to have created a thriving community that brings joy to thousands of pets and people every day.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-16">
          <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-headline text-3xl font-semibold text-primary">Our Mission</h3>
            </div>
            <p className="text-lg text-foreground/80">
              To foster a joyful and supportive community where pets find compatible playmates and owners build meaningful friendships, enhancing the lives of both through a safe, inclusive, and engaging platform.
            </p>
          </div>
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-headline text-3xl font-semibold text-primary">Our Vision</h3>
            </div>
            <p className="text-lg text-foreground/80">
              To be the world’s leading platform for pet socialization, creating a future where no pet is lonely and every owner is empowered by a network of support, connection, and shared love for animals.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center animate-fade-in-down">
            <Users className="mx-auto h-16 w-16 text-primary mb-4" />
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Meet Our Founders
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              The visionary team behind PetMets, driven by a shared love for animals and a mission to build a more connected pet community.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 max-w-4xl mx-auto">
            {foundersData.map((founder, index) => (
              <div key={index} className="flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: `${200 + index * 200}ms` }}>
                <div className="relative h-64 w-64 mb-6 group">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    data-ai-hint="founder profile"
                    fill
                    className="rounded-full object-cover shadow-xl border-4 border-primary/10 group-hover:border-primary/30 transition-all duration-300"
                  />
                </div>
                <h3 className="font-headline text-2xl font-bold text-primary">{founder.name}</h3>
                <p className="text-accent font-medium mb-4">{founder.role}</p>
                <p className="text-foreground/70 mb-6 px-4">
                  {founder.bio}
                </p>
                <div className="flex gap-4">
                  {founder.linkedin && (
                    <Link href={founder.linkedin} target="_blank" className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  )}
                  {founder.twitter && (
                    <Link href={founder.twitter} target="_blank" className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-colors">
                      <Twitter className="h-5 w-5" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center animate-fade-in-down">
            <HeartHandshake className="mx-auto h-16 w-16 text-primary mb-4" />
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Hear From Our Happy Pet Parents
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              See what our community members are saying about their experiences with PetMets.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {reviewsData.map((review, index) => (
              <Card key={index} className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full animate-fade-in-up border-0" style={{ animationDelay: `${200 + index * 150}ms` }}>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={`https://placehold.co/100x100.png?text=${review.avatarFallback}`} alt={review.name} data-ai-hint="user avatar" />
                      <AvatarFallback>{review.avatarFallback}</AvatarFallback>
                    </Avatar>
                    <div className="flex-grow">
                      <p className="font-semibold text-primary">{review.name}</p>
                      <p className="text-xs text-muted-foreground">{review.location}</p>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-yellow-500">
                      <span>{review.rating}</span>
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                  </div>
                  <p className="text-sm text-foreground/80 flex-grow">"{review.reviewText}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
