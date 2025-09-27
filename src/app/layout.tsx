import type { Metadata } from 'next';
import './globals.css';
import '@rainbow-me/rainbowkit/styles.css';

import { Web3Provider } from '@/providers/web3-provider';
import { ProfileProvider } from '@/providers/profile-provider';
import { AppHeader } from '@/components/app/app-header';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'VibeCheck',
  description: 'A fun Web3 challenge platform for Proof of Vibes.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 dark:from-gray-900 dark:to-slate-800">
        <Web3Provider>
          <ProfileProvider>
            <div className="flex flex-col min-h-screen">
              <AppHeader />
              <main className="flex-grow container mx-auto px-4 py-8">
                {children}
              </main>
            </div>
            <Toaster />
          </ProfileProvider>
        </Web3Provider>
      </body>
    </html>
  );
}
