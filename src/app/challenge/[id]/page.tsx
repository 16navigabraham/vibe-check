import { challenges } from '@/lib/challenges';
import { SubmissionForm } from '@/components/app/submission-form';
import { notFound } from 'next/navigation';
import * as Lucide from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ChallengePage({ params }: { params: { id: string } }) {
  const challenge = challenges.find((c) => c.id === params.id);

  if (!challenge) {
    notFound();
  }
  
  const Icon = Lucide[challenge.icon as keyof typeof Lucide] || Lucide.HelpCircle;

  return (
    <div className="max-w-4xl mx-auto">
      <Button variant="ghost" asChild className="mb-4">
        <Link href="/">
          <Lucide.ArrowLeft className="mr-2 h-4 w-4" />
          Back to Challenges
        </Link>
      </Button>

      <Card className="bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
                <Icon className="w-10 h-10 text-primary" />
            </div>
            <div>
                <CardTitle className="font-headline text-3xl">{challenge.title}</CardTitle>
                <CardDescription>Prove your vibe to earn the &quot;{challenge.title}&quot; badge and +{challenge.reward} vibes.</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">{challenge.description}</p>
          <SubmissionForm challengeId={challenge.id} />
        </CardContent>
      </Card>
    </div>
  );
}
