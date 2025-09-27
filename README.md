# VibeCheck

VibeCheck is a fun Web3 challenge platform where users can prove their "vibe" by completing creative challenges and earning unique Proof of Vibe (PoV) badges on the blockchain.

## Features

- **Web3 Wallet Integration:** Connect your Ethereum wallet using RainbowKit.
- **Challenge System:** Participate in various challenges like submitting memes, sharing workspace photos, or creating GIFs.
- **AI-Powered Vibe Checks:** Submissions are analyzed by an AI to determine if they meet the "vibe" criteria for earning a badge.
- **Badge Collection:** View your earned PoV badges on your personal profile page.
- **Vibe Score:** Accumulate "Vibes" for each badge you earn.
- **Simulated Profile:** See your profile with your address, number of badges, and total vibes.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (with App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **Web3:**
    - [Wagmi](https://wagmi.sh/) & [Viem](https://viem.sh/) for wallet interaction.
    - [RainbowKit](https://www.rainbowkit.com/) for a beautiful wallet connection experience.
- **Generative AI:**
    - [Google AI](https://ai.google.dev/) with Gemini models.
    - [Genkit](https://firebase.google.com/docs/genkit) for building AI flows.


## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd vibecheck
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application

To run the development server:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Project Structure

- `src/app/`: Contains the main pages and layouts for the Next.js application.
- `src/components/`: Shared React components used throughout the app, including UI components from `shadcn/ui`.
- `src/ai/`: Holds the Genkit AI flows and configuration.
  - `src/ai/flows/`: Genkit flows for AI-powered features.
- `src/lib/`: Contains library code, constants, and mock data.
- `src/providers/`: React context providers for managing global state (Web3, Profile).
- `public/`: Static assets.
