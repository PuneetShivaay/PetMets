
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PawPrint, Target, Eye, Star, HeartHandshake } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
    name: "Sarah M. & Buddy",
    avatarFallback: "SM",
    reviewText: "PetMets made finding a playmate for Buddy so easy! We've met some wonderful dogs and owners in our neighborhood. The app is intuitive and safe.",
    rating: 5,
    location: "Sunnyvale, CA",
  },
  {
    name: "John B. & Luna",
    avatarFallback: "JB",
    reviewText: "I was worried about leaving Luna when I went on vacation, but PetMets boarding was fantastic. Daily updates and a happy pup when I returned!",
    rating: 5,
    location: "Austin, TX",
  },
  {
    name: "Lisa K. & Oliver",
    avatarFallback: "LK",
    reviewText: "The training resources and connections on PetMets have been invaluable. Oliver is a much more confident and well-behaved cat now. Highly recommend!",
    rating: 4,
    location: "Chicago, IL",
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <header className="mb-12 text-center">
        <PawPrint className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          About PetMets
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          We believe in the power of connection – for pets and their people. Learn more about our story and what drives us.
        </p>
      </header>

      <section className="mb-16 grid gap-8 md:grid-cols-2 md:gap-12 items-center">
        <div>
          <h2 className="font-headline text-3xl font-semibold text-primary mb-4 flex items-center">
            <Target className="mr-3 h-8 w-8 text-accent" />
            Our Mission
          </h2>
          <p className="text-lg text-foreground/80 mb-4">
            At PetMets, our mission is to foster a joyful and supportive community for pet owners. We aim to make it easy for pets to find compatible playmates and for owners to build meaningful friendships, enhancing the lives of both.
          </p>
          <p className="text-lg text-foreground/80">
            We strive to create a safe, inclusive, and engaging platform where every wagging tail and happy purr leads to a stronger bond within the pet-loving community.
          </p>
        </div>
        <Image
          src="https://placehold.co/550x350.png"
          alt="Diverse group of pets playing happily"
          data-ai-hint="happy pets community"
          width={550}
          height={350}
          className="rounded-xl shadow-lg object-cover aspect-video"
        />
      </section>

      <section className="mb-16 grid gap-8 md:grid-cols-2 md:gap-12 items-center">
         <Image
          src="https://placehold.co/550x350.png"
          alt="A bright, hopeful future for pet connections"
          data-ai-hint="future vision pets"
          width={550}
          height={350}
          className="rounded-xl shadow-lg object-cover aspect-video md:order-first"
        />
        <div className="md:order-last">
          <h2 className="font-headline text-3xl font-semibold text-primary mb-4 flex items-center">
            <Eye className="mr-3 h-8 w-8 text-accent" />
            Our Vision
          </h2>
          <p className="text-lg text-foreground/80 mb-4">
            We envision a world where no pet feels lonely and every pet owner has a network of support. PetMets aspires to be the leading platform for pet socialization, recognized for its positive impact on animal well-being and human connection.
          </p>
          <p className="text-lg text-foreground/80">
            Through innovation and a deep love for animals, we aim to continuously evolve, offering new ways for our community to connect, learn, and grow together.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-24 bg-secondary/30 rounded-xl">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
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
              <Card key={index} className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={`https://placehold.co/100x100.png?text=${review.avatarFallback}`} alt={review.name} data-ai-hint="user avatar" />
                    <AvatarFallback>{review.avatarFallback}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="font-headline text-lg text-primary">{review.name}</CardTitle>
                    {review.location && (
                      <p className="text-xs text-muted-foreground">{review.location}</p>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow pt-0">
                  <div className="flex items-center mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/50'}`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-foreground/80">{review.reviewText}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
