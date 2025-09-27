import { ChallengeGrid } from './challenge-grid';
import { ProfileCard } from './profile-card';
import { challenges } from '@/lib/challenges';

export function ChallengeDashboard() {
  return (
    <div className="space-y-8">
      <ProfileCard />
      <div>
        <h2 className="text-3xl font-bold font-headline mb-4">Available Challenges</h2>
        <ChallengeGrid challenges={challenges} />
      </div>
    </div>
  );
}
