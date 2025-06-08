
'use server';
/**
 * @fileOverview A Genkit flow to generate the hero image for the homepage.
 *
 * - generateHeroImage - A function that generates an image for the hero section.
 * - GenerateHeroImageOutput - The return type for the generateHeroImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateHeroImageOutputSchema = z.string().describe("A data URI of the generated hero image. Expected format: 'data:image/png;base64,<encoded_data>'.");
export type GenerateHeroImageOutput = z.infer<typeof GenerateHeroImageOutputSchema>;

export async function generateHeroImage(): Promise<GenerateHeroImageOutput> {
  return generateHeroImageFlow();
}

const heroImagePrompt = `A vibrant, photorealistic image of two happy dogs (one an Australian Shepherd, one a Golden Retriever) and five cute cats of various breeds, all sitting together amicably outdoors on lush green grass. The foreground features small, colorful flowers. Behind them are beautiful trees with pink blossoms under a bright, clear sky. The animals are looking forward or slightly towards each other. The overall mood is joyful, peaceful, and friendly. High detail.`;

const generateHeroImageFlow = ai.defineFlow(
  {
    name: 'generateHeroImageFlow',
    outputSchema: GenerateHeroImageOutputSchema,
  },
  async () => {
    try {
      const {media} = await ai.generate({
        model: 'googleai/gemini-2.0-flash-exp',
        prompt: heroImagePrompt,
        config: {
          responseModalities: ['TEXT', 'IMAGE'],
        },
      });

      if (!media?.url) {
        console.error("Failed to generate hero image: media URL is missing from Genkit response.");
        return "https://placehold.co/600x400.png"; // Fallback to placeholder
      }
      return media.url;
    } catch (error) {
      console.error("Error generating hero image with Genkit:", error);
      return "https://placehold.co/600x400.png"; // Fallback to placeholder on error
    }
  }
);
