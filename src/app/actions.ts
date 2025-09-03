'use server';

import { generateCurriculumSummary } from '@/ai/flows/curriculum-summary-generation';
import type { CurriculumSummaryInput } from '@/ai/flows/curriculum-summary-generation';

export async function getCurriculumSummary(input: CurriculumSummaryInput) {
  try {
    const result = await generateCurriculumSummary(input);
    return { success: true, summary: result.summary };
  } catch (error) {
    console.error('Error generating curriculum summary:', error);
    return { success: false, error: 'Failed to generate summary. Please try again later.' };
  }
}
