'use client';

import { useEffect, useMemo } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useProfile } from '@/providers/profile-provider';
import { badges } from '@/lib/badges';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, User, ExternalLink } from 'lucide-react';

function Confetti() {
    const confettiCount = 50;
    const colors = ['#87CEEB', '#E6E6FA', '#FFC0CB', '#98FB98'];
  
    const confetti = useMemo(() => Array.from({ length: confettiCount }).map((_, i) => {
      const style = {
        left: `${Math.random() * 100}vw`,
        animationDelay: `${Math.random() * 5}s`,
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        width: `${Math.random() * 10 + 5}px`,
        height: `${Math.random() * 10 + 5}px`,
        opacity: Math.random() * 0.5 + 0.5,
      };
      return <div key={i} className="absolute top-0 animate-confetti-fall" style={style}></div>;
    }), [colors]);
  
    return <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">{confetti}</div>;
}


export default function SuccessPage() {
  const params = useParams();
  const id = params.id as string;
  const { addBadge } = useProfile();
  const badge = badges[id];

  useEffect(() => {
    if (id) {
      addBadge(id);
    }
  }, [id, addBadge]);

  if (!badge) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold">Badge not found</h1>
        <Button asChild className="mt-4">
          <Link href="/">Go to Dashboard</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
        <Confetti />
        <div className="flex flex-col items-center justify-center text-center py-10 relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold font-headline mb-4 text-primary">
            Vibe Confirmed!
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
            You've successfully earned a new Proof of Vibe badge.
        </p>

        <Card className="w-full max-w-sm animate-in fade-in zoom-in-90 duration-500">
            <CardHeader className="items-center">
            <div className="text-7xl mb-4 p-4 bg-accent rounded-full animate-bounce">
                {badge.emoji}
            </div>
            <CardTitle className="text-3xl font-headline">{badge.name}</CardTitle>
            <CardDescription>{badge.description}</CardDescription>
            </CardHeader>
            <CardContent>
            <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full inline-flex items-center justify-center text-sm text-primary hover:underline"
            >
                View on BaseScan (Simulated) <ExternalLink className="ml-2 h-4 w-4" />
            </a>
            </CardContent>
            <CardFooter className="grid grid-cols-2 gap-4">
            <Button variant="outline" asChild>
                <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                More Challenges
                </Link>
            </Button>
            <Button asChild>
                <Link href="/my-profile">
                <User className="mr-2 h-4 w-4" />
                My Profile
                </Link>
            </Button>
            </CardFooter>
        </Card>
        </div>
    </>
  );
}
