
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PawPrint, Heart, Trees, Footprints, ClipboardList, Brain, Scissors, Home } from "lucide-react";
import Image from "next/image";
import type { ReactElement } from "react";

//const heroImageUrl = "/images/home-image.png";


interface Feature {
  icon: ReactElement;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    hint: string;
  };
}

const featuresData: Feature[] = [
  {
    icon: <Heart className="h-8 w-8 text-accent" />,
    title: "Match Your Pet",
    description: "Celebrate love, the furry way! Our Match Your Pet feature lets you pair your dog and bitch for a heartwarming pre-wedding photoshoot. Captured in a joyful, celebration-themed setup, these moments are crafted to look nothing short of magical. Imagine floral collars, twinkling lights, and tails wagging in sync — because love deserves to be cherished, even in paw prints!",
    image: { src: "/images/Romantic_pre-wedding_petmets.png", alt: "Pets in a celebration themed photoshoot", hint: "dog wedding" },
  },
  {
    icon: <Trees className="h-8 w-8 text-accent" />,
    title: "Pet Playzone",
    description: "Unleash joy at our Pet Playzone, designed for pure fun and freedom. With a spacious garden for running and a splashy swimming pool for cooling off, it’s a paradise for your four-legged companions. Let them roll on grass, chase tails, or dive into playtime with their doggy pals — while you relax and watch happiness unfold.",
    image: { src: "/images/Pet_playzone-petmets.png", alt: "Pets playing in a garden and pool", hint: "dogs playzone" },
  },
  {
    icon: <Footprints className="h-8 w-8 text-accent" />,
    title: "Pet Walker",
    description: "For those busy days, our trusted Pet Walkers step in. Professionally trained and fully verified, they ensure your pet gets their daily dose of walks and sniffs. Featured with vivid, high-quality images, you’ll always know your buddy is in good hands — enjoying the outdoors, one leash at a time.",
    image: { src: "/images/professional_pet_walker_petmets.png", alt: "Pet walker with a dog", hint: "dog walker" },
  },
  {
    icon: <ClipboardList className="h-8 w-8 text-accent" />,
    title: "Pet Reports",
    description: "All your pet’s important documents — organized, safe, and just a tap away. From bills and vet receipts to vaccination cards and health records, our Pet Reports feature keeps everything neatly displayed. Visualized with a table spread of real-life documents, it brings clarity and peace of mind to your pet-parenting journey.",
    image: { src: "/images/Pet_health_reports_and_documents_on-petmets.png", alt: "Display of pet documents", hint: "pet records" },
  },
  {
    icon: <Brain className="h-8 w-8 text-accent" />,
    title: "Pet Training",
    description: "Turn good dogs into great ones with our Pet Training section. Featuring real photos of trainers working with dogs, this space helps you connect with certified professionals who teach obedience, tricks, and confidence. Whether it’s leash manners or playful agility, your pet’s learning starts here.",
    image: { src: "/images/Professional_dog_trainer_petmets.png", alt: "Dog training session", hint: "dog training" },
  },
  {
    icon: <Scissors className="h-8 w-8 text-accent" />,
    title: "Pet Grooming",
    description: "Make your pet look picture-pawfect! Our Pet Grooming feature showcases adorable, freshly-groomed pets photographed like furry celebrities. Connect with expert groomers who understand every coat, curl, and claw — because your pet deserves to shine.",
    image: { src: "/images/Professional_pet_grooming_petmets.png", alt: "Freshly groomed pet", hint: "pet grooming" },
  },
  {
    icon: <Home className="h-8 w-8 text-accent" />,
    title: "Pet Boarding",
    description: "Going out of town? Let your pet enjoy a vacation of their own at our Pet Boarding spaces. Cozy, safe, and full of fellow furry friends, it’s a home away from home. With supervised care, playgroups, and nap corners, your pet stays happy — and so do you.",
    image: { src: "/images/Pet_boarding-petmets.png", alt: "Pets in a boarding facility", hint: "pet boarding" },
  },
];

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <header className="mb-12 text-center animate-fade-in-down">
        <PawPrint className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Explore Our Pawsome Features
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Discover how PetMets makes pet parenting more joyful and connected. From finding playmates to managing care, we've got features designed for you and your furry friends.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        {featuresData.map((feature, index) => (
          <Card key={index} className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow bg-card animate-fade-in-up" style={{ animationDelay: `${200 + index * 100}ms` }}>
            <CardHeader className="p-0">
              <Image
                src={feature.image.src}
                alt={feature.image.alt}
                data-ai-hint={feature.image.hint}
                width={500}
                height={300}
                className="rounded-t-md object-cover aspect-video w-full"
              />
            </CardHeader>
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                {feature.icon}
                <CardTitle className="font-headline text-xl text-primary">{feature.title}</CardTitle>
              </div>
              <CardContent className="p-0 flex-grow">
                <p className="text-sm text-foreground/80">{feature.description}</p>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
