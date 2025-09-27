import type { Challenge } from '@/lib/challenges';
import { ChallengeCard } from './challenge-card';

interface ChallengeGridProps {
  challenges: Challenge[];
}

export function ChallengeGrid({ challenges }: ChallengeGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {challenges.map((challenge) => (
        <ChallengeCard key={challenge.id} challenge={challenge} />
      ))}
    </div>
  );
}
