import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PawPrint, Target, Eye, Users } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <header className="mb-12 text-center">
        <PawPrint className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          About PetMets Connect
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
            At PetMets Connect, our mission is to foster a joyful and supportive community for pet owners. We aim to make it easy for pets to find compatible playmates and for owners to build meaningful friendships, enhancing the lives of both.
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
            We envision a world where no pet feels lonely and every pet owner has a network of support. PetMets Connect aspires to be the leading platform for pet socialization, recognized for its positive impact on animal well-being and human connection.
          </p>
          <p className="text-lg text-foreground/80">
            Through innovation and a deep love for animals, we aim to continuously evolve, offering new ways for our community to connect, learn, and grow together.
          </p>
        </div>
      </section>

      <section className="text-center">
        <h2 className="font-headline text-3xl font-semibold text-primary mb-8 flex items-center justify-center">
          <Users className="mr-3 h-8 w-8 text-accent" />
          Meet the Team (Placeholder)
        </h2>
        <p className="text-lg text-foreground/80 max-w-xl mx-auto mb-8">
          We're a passionate group of pet lovers, designers, and developers dedicated to making PetMets Connect the best it can be. More about us coming soon!
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <Card key={index} className="bg-card shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src={`https://placehold.co/300x300.png`}
                  alt={`Team member ${index + 1}`}
                  data-ai-hint="team member portrait"
                  width={300}
                  height={300}
                  className="mx-auto rounded-full mb-4 h-32 w-32 object-cover"
                />
                <CardTitle className="font-headline text-xl text-primary">Team Member {index + 1}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Role/Title</p>
                <p className="text-sm text-foreground/70 mt-2">A short bio about the team member will appear here.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
