"use server";

import { draftPetProfile, type DraftPetProfileInput, type DraftPetProfileOutput } from "@/ai/flows/draft-pet-profile";
import { z } from "zod";

// Re-define or import schema if it's complex and used for validation here
const ActionInputSchema = z.object({
  ownerName: z.string(),
  petName: z.string(),
  petType: z.string(),
  petBreed: z.string(),
  petAge: z.number(),
  petBio: z.string(),
  ownerBio: z.string(),
  profileImageDataUri: z.string().refine(val => val.startsWith('data:image/'), {
    message: "Image data URI must start with 'data:image/'"
  }),
});


export async function generateProfileDraft(
  input: DraftPetProfileInput
): Promise<DraftPetProfileOutput> {
  // Validate input against the schema expected by the AI flow
  // This server action acts as a passthrough but could add more logic/validation if needed.
  const validatedInput = ActionInputSchema.parse(input);

  try {
    const result = await draftPetProfile(validatedInput);
    if (!result || !result.draftProfileText) {
      throw new Error("AI failed to generate a draft.");
    }
    return result;
  } catch (error) {
    console.error("Error in generateProfileDraft server action:", error);
    // It's good practice to throw a more user-friendly error or a structured error object
    if (error instanceof z.ZodError) {
      throw new Error(`Invalid input: ${error.errors.map(e => e.message).join(', ')}`);
    }
    throw new Error("Failed to generate profile draft due to an internal error.");
  }
}
