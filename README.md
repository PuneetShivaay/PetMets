# PetMets.in Website

This is the official informational website for PetMets, a vibrant community platform designed to connect pet owners and their furry, scaly, or feathered friends. The site showcases the features, mission, and services offered by the PetMets application.

## Overview

PetMets aims to foster a joyful and supportive community for pet owners. The platform makes it easy for pets to find compatible playmates and for owners to build meaningful friendships, enhancing the lives of both. This website serves as the primary landing spot for new users to learn about the app and its features before signing up.

## Key Features

The website highlights the core services available in the PetMets app:

*   **Match Your Pet:** A unique service to find companion pets for events like photoshoots.
*   **Pet Social Network:** Connect with other pet owners in your area for playdates and community building.
*   **GPS Pet Tracking:** Real-time location tracking for peace of mind.
*   **Verified Service Providers:** Access a network of trusted and verified pet walkers, groomers, trainers, and boarding facilities.
*   **Pet Playzone:** Discover dedicated play areas with gardens and swimming pools for pets to socialize and exercise.
*   **Premium Marketplace:** Shop for high-quality, customized pet products.

## Tech Stack

This project is built with a modern, performant, and scalable tech stack:

*   **Framework:** [Next.js](https://nextjs.org/) (using the App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **UI Library:** [React](https://react.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Component Library:** [ShadCN UI](https://ui.shadcn.com/)
*   **Generative AI:** [Genkit](https://firebase.google.com/docs/genkit) (for AI-powered features like image generation)
*   **Icons:** [Lucide React](https://lucide.dev/)

## Project Structure

The codebase is organized to be clean and maintainable, following Next.js conventions.

```
.
├── public/
│   └── images/      # Static assets like logos and feature images
├── src/
│   ├── app/         # Application pages and layouts (App Router)
│   │   ├── about/
│   │   ├── features/
│   │   ├── how-it-works/
│   │   ├── globals.css
│   │   └── layout.tsx
│   ├── components/
│   │   ├── layout/  # Site-wide layout components (Header, Footer)
│   │   └── ui/      # Reusable UI components from ShadCN
│   ├── ai/
│   │   ├── flows/   # Genkit flows for AI functionality
│   │   └── genkit.ts  # Genkit configuration
│   ├── hooks/       # Custom React hooks (e.g., use-toast)
│   └── lib/         # Utility functions
├── package.json     # Project dependencies and scripts
└── tailwind.config.ts # Tailwind CSS configuration
```

### Key Directories

*   **`src/app`**: Contains all the routes for the application. Each folder represents a URL segment.
*   **`src/components`**: Home to all reusable React components.
    *   `layout/`: Components that form the main structure of the site, like the `Header` and `Footer`.
    *   `ui/`: Components provided by ShadCN UI, forming the base of the design system.
*   **`src/ai`**: Houses all the backend logic for generative AI features using Genkit.
*   **`public`**: Stores static assets like images, fonts, and favicons that are served directly.

## Getting Started

To run the project locally, follow these steps:

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Run the Development Server:**
    The development server uses Next.js with Turbopack for fast performance.
    ```bash
    npm run dev
    ```

3.  **Open the Application:**
    Open [http://localhost:3000](http://localhost:3000) (or the port specified in the terminal) with your browser to see the result.
