'use client';

import { useProfile } from '@/providers/profile-provider';
import { badges } from '@/lib/badges';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award } from 'lucide-react';

export function BadgeCollection() {
  const { earnedBadges } = useProfile();

  if (earnedBadges.length === 0) {
    return (
      <Card className="flex flex-col items-center justify-center text-center p-10 bg-card/80 backdrop-blur-sm">
        <Award className="w-16 h-16 text-muted-foreground mb-4" />
        <h3 className="text-xl font-semibold">No Badges Yet</h3>
        <p className="text-muted-foreground">Complete challenges to start your collection!</p>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {earnedBadges.map((badgeId) => {
        const badge = badges[badgeId];
        if (!badge) return null;
        return (
          <Card key={badge.id} className="text-center bg-card/80 backdrop-blur-sm shadow-lg">
            <CardHeader className="items-center">
              <div className="text-6xl mb-4">{badge.emoji}</div>
              <CardTitle className="font-headline">{badge.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{badge.description}</CardDescription>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
