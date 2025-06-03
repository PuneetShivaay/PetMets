'use server';

/**
 * @fileOverview AI flow to automatically generate a draft 'about me' section for a pet's profile.
 *
 * - draftPetProfile - A function that handles the pet profile draft generation process.
 * - DraftPetProfileInput - The input type for the draftPetProfile function.
 * - DraftPetProfileOutput - The return type for the draftPetProfile function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DraftPetProfileInputSchema = z.object({
  ownerName: z.string().describe('The name of the pet owner.'),
  petName: z.string().describe('The name of the pet.'),
  petType: z.string().describe('The type of pet (e.g., dog, cat, bird).'),
  petBreed: z.string().describe('The breed of the pet.'),
  petAge: z.number().describe('The age of the pet in years.'),
  petBio: z.string().describe('A short description of the pet.'),
  ownerBio: z.string().describe('A short description of the pet owner.'),
  profileImageDataUri: z
    .string()
    .describe(
      "A profile photo of the pet or pet owner, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type DraftPetProfileInput = z.infer<typeof DraftPetProfileInputSchema>;

const DraftPetProfileOutputSchema = z.object({
  draftProfileText: z
    .string()
    .describe(
      'A draft about me section for the pet profile, combining owner and pet information.'
    ),
});
export type DraftPetProfileOutput = z.infer<typeof DraftPetProfileOutputSchema>;

export async function draftPetProfile(input: DraftPetProfileInput): Promise<DraftPetProfileOutput> {
  return draftPetProfileFlow(input);
}

const prompt = ai.definePrompt({
  name: 'draftPetProfilePrompt',
  input: {schema: DraftPetProfileInputSchema},
  output: {schema: DraftPetProfileOutputSchema},
  prompt: `You are a profile creation expert, skilled at creating engaging "about me" sections.

  Create a draft "about me" section for a pet profile using the following information.  The tone should be friendly and inviting.

  Owner Name: {{{ownerName}}}
  Pet Name: {{{petName}}}
  Pet Type: {{{petType}}}
  Pet Breed: {{{petBreed}}}
  Pet Age: {{{petAge}}}
  Pet Bio: {{{petBio}}}
  Owner Bio: {{{ownerBio}}}
  Profile Image: {{media url=profileImageDataUri}}

  The draft should be a single paragraph and should encourage other pet owners to connect.
  `,
});

const draftPetProfileFlow = ai.defineFlow(
  {
    name: 'draftPetProfileFlow',
    inputSchema: DraftPetProfileInputSchema,
    outputSchema: DraftPetProfileOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
