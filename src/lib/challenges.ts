import type { LucideIcon } from "lucide-react";

export interface Challenge {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof import('lucide-react');
  reward: number;
}

export const challenges: Challenge[] = [
  {
    id: 'crypto-meme',
    title: 'Submit a Crypto Meme',
    description: 'Share your funniest crypto-related meme. The spicier, the better!',
    icon: 'SmilePlus',
    reward: 10,
  },
  {
    id: 'workspace-photo',
    title: 'Share Your Workspace',
    description: 'Show off your trading setup or coding corner. We want to see where the magic happens.',
    icon: 'Camera',
    reward: 10,
  },
  {
    id: 'gif-reaction',
    title: 'Create a GIF Reaction',
    description: 'Make a GIF that perfectly captures the feeling of a 10x gain.',
    icon: 'Film',
    reward: 10,
  },
];
