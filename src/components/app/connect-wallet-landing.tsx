import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Gem } from 'lucide-react';

export function ConnectWalletLanding() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <Gem className="w-24 h-24 text-primary mb-6 animate-pulse" />
      <h1 className="text-5xl md:text-6xl font-bold font-headline mb-4">
        Welcome to <span className="text-primary">VibeCheck</span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
        Complete fun challenges, prove your vibes, and earn unique PoV badges on the blockchain.
      </p>
      <div className="transform scale-125">
        <ConnectButton label="Connect Wallet to Start" />
      </div>
    </div>
  );
}
