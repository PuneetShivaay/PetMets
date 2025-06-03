"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/contexts/AuthContext";
import { useState, useRef } from "react";
import { Loader2, Sparkles, UploadCloud, Edit, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { generateProfileDraft } from "@/app/dashboard/profile/actions";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];

const profileFormSchema = z.object({
  ownerName: z.string().min(2, { message: "Owner name must be at least 2 characters." }),
  petName: z.string().min(1, { message: "Pet name is required." }),
  petType: z.string().min(2, { message: "Pet type (e.g., dog, cat) is required." }),
  petBreed: z.string().min(2, { message: "Pet breed is required." }),
  petAge: z.coerce.number().min(0, { message: "Pet age cannot be negative." }).max(100, {message: "Pet age seems too high."}),
  petBio: z.string().min(10, { message: "Pet bio must be at least 10 characters." }).max(500, {message: "Pet bio too long."}),
  ownerBio: z.string().min(10, { message: "Your bio must be at least 10 characters." }).max(500, {message: "Owner bio too long."}),
  profileImage: z
    .custom<FileList>((val) => val instanceof FileList && val.length > 0, "Profile image is required.")
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (files) => ALLOWED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png, .webp and .gif formats are supported."
    ),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

const toBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export default function ProfileForm() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [draft, setDraft] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      ownerName: user?.displayName || "",
      petName: "",
      petType: "",
      petBreed: "",
      petAge: 0,
      petBio: "",
      ownerBio: "",
    },
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      const file = files[0];
      form.setValue("profileImage", files); // For validation
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageUrl(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImageUrl(null);
      form.setValue("profileImage", undefined as any); // Clear value for validation
    }
  };

  async function onSubmit(values: ProfileFormValues) {
    setIsLoading(true);
    setDraft(null);

    if (!values.profileImage || values.profileImage.length === 0) {
      toast({ title: "Error", description: "Profile image is required.", variant: "destructive" });
      setIsLoading(false);
      return;
    }

    try {
      const imageFile = values.profileImage[0];
      const profileImageDataUri = await toBase64(imageFile);

      const inputForAI = {
        ownerName: values.ownerName,
        petName: values.petName,
        petType: values.petType,
        petBreed: values.petBreed,
        petAge: values.petAge,
        petBio: values.petBio,
        ownerBio: values.ownerBio,
        profileImageDataUri: profileImageDataUri,
      };

      const result = await generateProfileDraft(inputForAI);
      setDraft(result.draftProfileText);
      toast({
        title: "Draft Generated!",
        description: "Your AI-powered profile draft is ready. Review and publish!",
        variant: "default"
      });
    } catch (error) {
      console.error("Error generating profile draft:", error);
      toast({
        title: "Draft Generation Failed",
        description: (error as Error).message || "Could not generate profile draft. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="w-full max-w-2xl shadow-xl">
      <CardHeader>
        <CardTitle className="font-headline text-3xl text-primary flex items-center">
          <Sparkles className="mr-2 h-7 w-7 text-accent" /> Create Your Profile with AI
        </CardTitle>
        <CardDescription>
          Fill in your details, and our AI will help draft an engaging 'About Me' section for you and your pet!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="ownerName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl><Input placeholder="Your full name" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="petName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pet's Name</FormLabel>
                    <FormControl><Input placeholder="E.g., Buddy, Luna" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FormField
                control={form.control}
                name="petType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pet Type</FormLabel>
                    <FormControl><Input placeholder="Dog, Cat, Bird" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="petBreed"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pet Breed</FormLabel>
                    <FormControl><Input placeholder="Golden Retriever, Siamese" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="petAge"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pet Age (years)</FormLabel>
                    <FormControl><Input type="number" placeholder="E.g., 3" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="petBio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>About Your Pet</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Tell us about your pet's personality, favorite toys, quirks..." {...field} rows={4}/>
                  </FormControl>
                  <FormDescription>Min 10 characters, max 500.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ownerBio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>About You (the Owner)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="A little about yourself, what you're looking for in pet connections..." {...field} rows={4}/>
                  </FormControl>
                  <FormDescription>Min 10 characters, max 500.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="profileImage"
              render={({ field: { onChange, value, ...rest } }) => ( // Destructure onChange to use custom handler
                <FormItem>
                  <FormLabel>Profile Image (Pet or You & Pet)</FormLabel>
                  <FormControl>
                    <div className="flex flex-col items-center space-y-2">
                      {imageUrl && (
                        <Image
                          src={imageUrl}
                          alt="Profile preview"
                          width={150}
                          height={150}
                          className="rounded-lg object-cover h-[150px] w-[150px] border border-border"
                          data-ai-hint="pet avatar"
                        />
                      )}
                      <Button type="button" variant="outline" onClick={() => fileInputRef.current?.click()} className="w-full md:w-auto">
                        <UploadCloud className="mr-2 h-4 w-4" /> Upload Image
                      </Button>
                      <Input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept={ALLOWED_IMAGE_TYPES.join(",")}
                        onChange={handleImageChange} // Use custom handler
                        {...rest}
                      />
                    </div>
                  </FormControl>
                  <FormDescription>Max 5MB. JPG, PNG, WEBP, GIF.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-4 w-4" />
              )}
              Generate AI Profile Draft
            </Button>
          </form>
        </Form>
      </CardContent>

      {draft && (
        <CardFooter className="flex flex-col items-start space-y-4 border-t border-border pt-6 mt-6">
          <h3 className="font-headline text-2xl text-primary flex items-center">
             <Edit className="mr-2 h-6 w-6 text-accent"/> Your AI-Generated Draft:
          </h3>
          <Card className="w-full bg-secondary/50 p-4 rounded-md">
            <p className="text-foreground whitespace-pre-wrap">{draft}</p>
          </Card>
          <div className="flex space-x-4 w-full">
            <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => toast({ title: "Coming Soon!", description: "Publish functionality will be available soon." })}>
              <CheckCircle className="mr-2 h-4 w-4" /> Publish Profile (Soon)
            </Button>
            <Button variant="outline" className="flex-1" onClick={() => { setDraft(null); form.setFocus('ownerName'); toast({title: "Draft Cleared", description:"You can edit the form and generate a new draft."}) }}>
              <Edit className="mr-2 h-4 w-4" /> Edit & Regenerate
            </Button>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
