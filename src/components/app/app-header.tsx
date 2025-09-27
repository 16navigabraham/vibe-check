'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import { Gem, User } from 'lucide-react';

export function AppHeader() {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 border-b border-white/10 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold font-headline text-primary">
          <Gem className="w-6 h-6" />
          <span>VibeCheck</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/my-profile" className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <User className="w-5 h-5" />
            <span className="sr-only">My Profile</span>
          </Link>
          <ConnectButton />
        </div>
      </div>
    </header>
  );
}
