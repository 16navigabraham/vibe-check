'use client';

import type { ReactNode } from 'react';
import { createContext, useContext, useState, useEffect, useCallback } from 'react';

type ProfileContextType = {
  earnedBadges: string[];
  addBadge: (challengeId: string) => void;
  getVibes: () => number;
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

const VIBES_PER_BADGE = 10;
const STORAGE_KEY = 'vibecheck-badges';

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [earnedBadges, setEarnedBadges] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedBadges = localStorage.getItem(STORAGE_KEY);
      if (storedBadges) {
        setEarnedBadges(JSON.parse(storedBadges));
      }
    } catch (error) {
      console.error("Failed to load badges from localStorage", error);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(earnedBadges));
      } catch (error) {
        console.error("Failed to save badges to localStorage", error);
      }
    }
  }, [earnedBadges, isLoaded]);

  const addBadge = useCallback((challengeId: string) => {
    setEarnedBadges((prev) => {
      if (prev.includes(challengeId)) {
        return prev;
      }
      return [...prev, challengeId];
    });
  }, []);

  const getVibes = () => {
    return earnedBadges.length * VIBES_PER_BADGE;
  };
  
  const value = { earnedBadges, addBadge, getVibes };

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
}
