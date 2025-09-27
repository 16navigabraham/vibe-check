'use server';

/**
 * @fileOverview Flow to determine PoV badge eligibility using AI analysis.
 *
 * - generatePovBadge - Determines PoV badge eligibility based on submission content.
 * - GeneratePovBadgeInput - Input type for the generatePovBadge function.
 * - GeneratePovBadgeOutput - Return type for the generatePovBadge function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePovBadgeInputSchema = z.object({
  fileDataUri: z
    .string()
    .describe(
      "The submitted file as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  description: z.string().describe('The text description accompanying the submission.'),
});
export type GeneratePovBadgeInput = z.infer<typeof GeneratePovBadgeInputSchema>;

const GeneratePovBadgeOutputSchema = z.object({
  isEligible: z
    .boolean()
    .describe('Whether the submission is eligible for a PoV badge.'),
  reason: z
    .string()
    .describe('The reason for the eligibility determination.'),
});
export type GeneratePovBadgeOutput = z.infer<typeof GeneratePovBadgeOutputSchema>;

export async function generatePovBadge(input: GeneratePovBadgeInput): Promise<GeneratePovBadgeOutput> {
  return generatePovBadgeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePovBadgePrompt',
  input: {schema: GeneratePovBadgeInputSchema},
  output: {schema: GeneratePovBadgeOutputSchema},
  prompt: `You are an AI assistant that determines if a user submission is eligible for a Proof of Vibes (PoV) badge.

  Consider the following factors:
  - Similarity to current top 'vibes' in the community.
  - Relevance to current community sentiment and trending topics.

  Based on the image/file and text description provided, determine if the submission is eligible for a badge.

  Image/File: {{media url=fileDataUri}}
  Description: {{{description}}}

  Respond with a JSON object indicating 'isEligible' (true/false) and a 'reason' for the decision.
`,
});

const generatePovBadgeFlow = ai.defineFlow(
  {
    name: 'generatePovBadgeFlow',
    inputSchema: GeneratePovBadgeInputSchema,
    outputSchema: GeneratePovBadgeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
