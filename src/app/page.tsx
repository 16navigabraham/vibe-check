'use client';

import { useAccount } from 'wagmi';
import { ChallengeDashboard } from '@/components/app/challenge-dashboard';
import { ConnectWalletLanding } from '@/components/app/connect-wallet-landing';

export default function Home() {
  const { isConnected } = useAccount();

  return isConnected ? <ChallengeDashboard /> : <ConnectWalletLanding />;
}
