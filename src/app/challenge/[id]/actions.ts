'use server';

import { generatePovBadge } from '@/ai/flows/generate-pov-badge';
import { redirect } from 'next/navigation';

export async function handleSubmission(formData: FormData) {
  const description = formData.get('description') as string;
  const fileDataUri = formData.get('fileDataUri') as string;
  const challengeId = formData.get('challengeId') as string;

  if (!description || !fileDataUri || !challengeId) {
    throw new Error('Missing form data');
  }

  try {
    const result = await generatePovBadge({
      description,
      fileDataUri,
    });

    if (result.isEligible) {
      console.log('AI determined submission is eligible. Reason:', result.reason);
    } else {
      console.log('AI determined submission is NOT eligible. Reason:', result.reason);
    }
  } catch (error) {
    console.error("AI flow failed:", error);
  }

  redirect(`/success/${challengeId}`);
}
