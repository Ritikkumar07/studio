// src/ai/flows/personalized-course-recommendations.ts
'use server';

/**
 * @fileOverview Personalized course recommendations based on user history and preferences.
 *
 * - getPersonalizedCourseRecommendations - A function that returns personalized course recommendations.
 * - PersonalizedCourseRecommendationsInput - The input type for the getPersonalizedCourseRecommendations function.
 * - PersonalizedCourseRecommendationsOutput - The return type for the getPersonalizedCourseRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedCourseRecommendationsInputSchema = z.object({
  userBrowsingHistory: z
    .string()
    .describe(
      'A detailed history of the user, their course interests and search queries, and general preferences.'
    ),
  availableCourses: z.string().describe('A list of all available courses.'),
});
export type PersonalizedCourseRecommendationsInput =
  z.infer<typeof PersonalizedCourseRecommendationsInputSchema>;

const PersonalizedCourseRecommendationsOutputSchema = z.object({
  recommendedCourses: z
    .string()
    .describe(
      'A list of courses recommended to the user, tailored to their interests. If no courses are a good fit, return an empty string.'
    ),
  reasoning: z
    .string()
    .describe(
      'An explanation of why these courses were recommended to the user. If no courses were recommended, explain why.'
    ),
});
export type PersonalizedCourseRecommendationsOutput =
  z.infer<typeof PersonalizedCourseRecommendationsOutputSchema>;

export async function getPersonalizedCourseRecommendations(
  input: PersonalizedCourseRecommendationsInput
): Promise<PersonalizedCourseRecommendationsOutput> {
  return personalizedCourseRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedCourseRecommendationsPrompt',
  input: {schema: PersonalizedCourseRecommendationsInputSchema},
  output: {schema: PersonalizedCourseRecommendationsOutputSchema},
  prompt: `You are an AI course recommendation agent. You will be provided with the user's browsing history and a list of available courses.

  Based on this information, you must generate a list of course titles that the user would be interested in, and provide a reasoning for why you recommended these courses. The titles must exactly match the titles from the "Available Courses" list.

  If none of the available courses are a good match for the user's interests, you should return an empty list for 'recommendedCourses' and explain in the 'reasoning' field why no courses were recommended.

  User Browsing History: {{{userBrowsingHistory}}}
  Available Courses: {{{availableCourses}}}
  `,
});

const personalizedCourseRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedCourseRecommendationsFlow',
    inputSchema: PersonalizedCourseRecommendationsInputSchema,
    outputSchema: PersonalizedCourseRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
