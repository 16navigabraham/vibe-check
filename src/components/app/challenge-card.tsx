'use client';

import * as React from 'react';
import type { Challenge } from '@/lib/challenges';
import Link from 'next/link';
import * as Lucide from 'lucide-react';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useProfile } from '@/providers/profile-provider';

interface ChallengeCardProps {
  challenge: Challenge;
}

export function ChallengeCard({ challenge }: ChallengeCardProps) {
  const { earnedBadges } = useProfile();
  const isCompleted = earnedBadges.includes(challenge.id);

  const Icon = Lucide[challenge.icon as keyof typeof Lucide] || Lucide.HelpCircle;

  return (
    <Card className="flex flex-col bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300">
      <CardHeader className="flex-row items-center gap-4">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <div>
          <CardTitle className="font-headline text-xl">{challenge.title}</CardTitle>
          <CardDescription>+{challenge.reward} Vibes</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{challenge.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        {isCompleted ? (
          <Badge variant="secondary" className="border-green-500/50 text-green-500">
            <Lucide.CheckCircle className="w-4 h-4 mr-2"/>
            Completed
          </Badge>
        ) : (
          <Badge variant="outline">Available</Badge>
        )}
        <Button asChild disabled={isCompleted}>
          <Link href={`/challenge/${challenge.id}`}>
            {isCompleted ? 'View' : 'Start Challenge'} <Lucide.ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
