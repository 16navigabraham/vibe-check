import type { Challenge } from './challenges';

export interface BadgeInfo {
  id: Challenge['id'];
  name: string;
  description: string;
  emoji: string;
}

export const badges: Record<string, BadgeInfo> = {
  'crypto-meme': {
    id: 'crypto-meme',
    name: 'Meme Lord',
    description: 'For submitting a top-tier crypto meme.',
    emoji: '😂',
  },
  'workspace-photo': {
    id: 'workspace-photo',
    name: 'Setup Stylist',
    description: 'For sharing an inspiring workspace photo.',
    emoji: '💻',
  },
  'gif-reaction': {
    id: 'gif-reaction',
    name: 'GIF Grandmaster',
    description: 'For creating a legendary GIF reaction.',
    emoji: '🎬',
  },
};
