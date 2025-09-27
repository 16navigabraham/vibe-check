'use client';

import { BadgeCollection } from '@/components/app/badge-collection';
import { ProfileCard } from '@/components/app/profile-card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function MyProfilePage() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
        <Button variant="ghost" asChild className="mb-4">
            <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Challenges
            </Link>
        </Button>
      <ProfileCard />
      <div>
        <h2 className="text-3xl font-bold font-headline mb-4">My Badge Collection</h2>
        <BadgeCollection />
      </div>
    </div>
  );
}
