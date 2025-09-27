# **App Name**: VibeCheck

## Core Features:

- Wallet Connection: Connect to user's MetaMask wallet using wagmi/rainbowkit. Store wallet connection status in component state.
- Challenge Dashboard: Display available challenges fetched from static file.
- Challenge Submission: Allow users to upload an image/file and a text description for a selected challenge.
- PoV Badge Generation: After submission, determine eligibility for PoV badge with AI analysis. An LLM 'tool' can check similarity to current top 'vibes' or relevance to community sentiment. Mint (simulate) the badge to user.
- Badge Display: Display earned PoV badges in a collection, along with a total 'vibes' score.
- Profile Display: Show user's wallet address, earned badges, and simulated leaderboard position.

## Style Guidelines:

- Primary color: Sky blue (#87CEEB) to evoke a sense of openness and trust, as well as refer to the requested theme.
- Background color: Very light desaturated blue (#F0F8FF) to create a calming backdrop that complements the primary color.
- Accent color: Soft purple (#E6E6FA) as an analogous hue, but distinct in brightness and saturation to bring visual interest and complement user interaction elements.
- Font pairing: 'Space Grotesk' (sans-serif) for headlines and short text, combined with 'Inter' (sans-serif) for body text.
- Use fun, modern emojis and icons throughout the app to represent different challenges and rewards.
- Implement a modern layout with gradient backgrounds (purple/blue/pink), smooth animations, and a mobile-responsive design.
- Use subtle animations on buttons and hover effects. Implement badge animations upon earning them.