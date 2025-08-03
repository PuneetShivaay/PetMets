# PetMets Website - Technical Architecture
Petmets.in Code

This document provides a technical overview of the PetMets informational website, detailing its architecture, project structure, and core development concepts. It is intended for developers working on the codebase.

## Tech Stack

The project is built with a modern, performant, and scalable tech stack, chosen to optimize developer experience and application performance.

*   **Framework:** [Next.js](https://nextjs.org/) (using the App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **UI Library:** [React](https://react.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Component Library:** [ShadCN UI](https://ui.shadcn.com/)
*   **Generative AI:** [Genkit](https://firebase.google.com/docs/genkit)
*   **Icons:** [Lucide React](https://lucide.dev/)

## Project Structure

The codebase is organized to be clean and maintainable, following modern Next.js conventions. The root directory is `src/`.

```
.
├── public/
│   ├── images/
│   └── videos/
├── src/
│   ├── app/         # Application pages and layouts (App Router)
│   │   ├── about/
│   │   ├── features/
│   │   ├── how-it-works/
│   │   ├── page.tsx       # Homepage
│   │   ├── layout.tsx     # Root layout
│   │   └── globals.css    # Global styles & Tailwind directives
│   ├── components/
│   │   ├── layout/      # Site-wide layout components (Header, Footer)
│   │   └── ui/          # Reusable UI components from ShadCN
│   ├── ai/
│   │   ├── flows/       # Genkit flows for AI functionality
│   │   └── genkit.ts    # Genkit configuration
│   ├── hooks/           # Custom React hooks (e.g., use-toast)
│   └── lib/             # Utility functions (e.g., cn for classnames)
├── package.json         # Project dependencies and scripts
└── tailwind.config.ts   # Tailwind CSS configuration
```

### Key Directories Explained

*   **`src/app`**: This is the core of the application, utilizing the Next.js App Router.
    *   Each folder inside `app` maps to a URL segment (e.g., `src/app/about` corresponds to `petmets.in/about`).
    *   `page.tsx` files define the UI for a specific route.
    *   `layout.tsx` files define a UI shell that wraps child layouts and pages. The root layout in `src/app/layout.tsx` is crucial as it defines the `<html>` and `<body>` tags.
    *   **Server Components** are used by default, allowing for data fetching and rendering to happen on the server, which improves performance by reducing the amount of client-side JavaScript.

*   **`src/components`**: This directory contains all reusable React components.
    *   `layout/`: Holds the main structural components of the site that are used across multiple pages, such as the `Header` and `Footer`.
    *   `ui/`: Contains the UI components provided by **ShadCN UI**. These are the building blocks of our design system (e.g., `Button`, `Card`, `Dialog`). They are designed to be composable and customizable.

*   **`src/ai`**: This directory houses all backend logic for generative AI features.
    *   `genkit.ts`: Configures and initializes the Genkit instance with necessary plugins (like `googleAI`).
    *   `flows/`: Contains Genkit "flows," which are server-side functions that orchestrate calls to language models or other tools. These are implemented as Server Actions to be securely called from client components. For example, `generate-hero-image-flow.ts` defines the logic for creating an image with AI.

*   **`src/lib`**: Contains utility functions and libraries.
    *   `utils.ts`: A key file holding helper functions. Most notably, it includes the `cn` function, which merges Tailwind CSS classes from `clsx` and `tailwind-merge` to handle conditional and conflicting class names gracefully.

*   **`public`**: Stores static assets that are served directly from the root of the domain, such as images, videos, and favicons.

## Architectural Concepts

### Styling with Tailwind CSS & ShadCN

*   **Theme-based Styling**: The primary styling mechanism is Tailwind CSS, configured in `tailwind.config.ts`. The visual theme (colors, fonts, border-radius) is defined using CSS variables in `src/app/globals.css`. This allows for easy theming (including dark mode) and ensures consistency.
*   **Utility-First**: We use Tailwind's utility classes directly in the JSX for most styling. This approach keeps styles co-located with the markup, making components self-contained and easier to reason about.
*   **Component Abstraction**: For reusable UI elements, we leverage **ShadCN UI**. Unlike traditional component libraries, ShadCN provides unstyled components that we can style ourselves, giving us full control over the final look and feel while benefiting from pre-built accessibility and functionality.

### Generative AI with Genkit

*   **Server Actions**: All AI functionality is handled on the server via Next.js Server Actions and Genkit flows. This is a secure and performant approach, as it prevents client-side bundles from including large AI SDKs and keeps sensitive API keys off the client.
*   **Flow-Based Logic**: Genkit encourages organizing AI logic into "flows," which are type-safe, observable, and easy to debug. Each flow in `src/ai/flows` is designed to handle a specific AI task.

## Getting Started

To set up and run the project locally, follow these steps:

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
