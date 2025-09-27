'use client';

import { useAccount } from 'wagmi';
import { useProfile } from '@/providers/profile-provider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Gem } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

function truncateAddress(address: string) {
  if (!address) return '';
  return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
}

export function ProfileCard() {
  const { address } = useAccount();
  const { earnedBadges, getVibes } = useProfile();

  return (
    <Card className="bg-card/80 backdrop-blur-sm shadow-lg">
      <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
        <Avatar className="h-12 w-12">
          <AvatarImage src={`https://api.dicebear.com/8.x/bottts-neutral/svg?seed=${address}`} />
          <AvatarFallback>{address?.substring(2,4) || 'V'}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="font-headline text-2xl">{truncateAddress(address || '')}</CardTitle>
          <p className="text-sm text-muted-foreground">Vibe Checker</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center pt-4">
          <div className="flex flex-col items-center justify-center p-4 bg-background/50 rounded-lg">
            <Award className="w-8 h-8 text-primary mb-2" />
            <p className="text-2xl font-bold">{earnedBadges.length}</p>
            <p className="text-sm text-muted-foreground">Badges</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-background/50 rounded-lg">
            <Gem className="w-8 h-8 text-primary mb-2" />
            <p className="text-2xl font-bold">{getVibes()}</p>
            <p className="text-sm text-muted-foreground">Vibes</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
