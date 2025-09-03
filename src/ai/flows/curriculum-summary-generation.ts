// Use server directive is required in files using genkit flows.
'use server';

/**
 * @fileOverview Summarizes a course curriculum using AI.
 *
 * - generateCurriculumSummary - A function that generates a summary of the course curriculum.
 * - CurriculumSummaryInput - The input type for the generateCurriculumSummary function.
 * - CurriculumSummaryOutput - The return type for the generateCurriculumSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CurriculumSummaryInputSchema = z.object({
  courseTitle: z.string().describe('The title of the course.'),
  curriculumItems: z
    .array(z.string())
    .describe('An array of strings, where each string is a lesson or module in the course curriculum.'),
});
export type CurriculumSummaryInput = z.infer<typeof CurriculumSummaryInputSchema>;

const CurriculumSummaryOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the course curriculum.'),
});
export type CurriculumSummaryOutput = z.infer<typeof CurriculumSummaryOutputSchema>;

export async function generateCurriculumSummary(input: CurriculumSummaryInput): Promise<CurriculumSummaryOutput> {
  return curriculumSummaryFlow(input);
}

const curriculumSummaryPrompt = ai.definePrompt({
  name: 'curriculumSummaryPrompt',
  input: {schema: CurriculumSummaryInputSchema},
  output: {schema: CurriculumSummaryOutputSchema},
  prompt: `You are an AI assistant designed to provide summaries of course curriculums.

  Summarize the curriculum of the following course in a concise and informative way, highlighting the key topics and learning outcomes.

  Course Title: {{{courseTitle}}}
  Curriculum Items:
  {{#each curriculumItems}}- {{{this}}}
  {{/each}}`,
});

const curriculumSummaryFlow = ai.defineFlow(
  {
    name: 'curriculumSummaryFlow',
    inputSchema: CurriculumSummaryInputSchema,
    outputSchema: CurriculumSummaryOutputSchema,
  },
  async input => {
    const {output} = await curriculumSummaryPrompt(input);
    return output!;
  }
);
