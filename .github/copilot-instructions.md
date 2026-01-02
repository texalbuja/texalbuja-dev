# Copilot Instructions for texalbuja-dev

## Architecture Overview

This is a single-page React application built with Vite, TypeScript, and GitHub Primer Design System.

- **Main entry**: `src/main.tsx` renders `App.tsx`
- **Components**: Use Primer React components for UI consistency
- **Styling**: Primer primitives for design tokens
- **Build tool**: Vite with SWC for fast React compilation

## Development Workflow

- Start dev server: `npm run dev`
- Build for production: `npm run build` (includes TypeScript compilation)
- Lint code: `npm run lint`
- Preview build: `npm run preview`

## Coding Patterns

- Always use TypeScript with strict mode enabled
- Import UI components from `@primer/react`
- Follow React hooks best practices
- Use Primer's design tokens for consistent theming

Example component usage:
```tsx
import { Header, Button } from "@primer/react";

<Header>
  <Header.Item full>Menu</Header.Item>
</Header>
```

## Key Files

- `package.json`: Scripts and dependencies
- `vite.config.ts`: Build configuration
- `src/App.tsx`: Main app component
- `src/main.tsx`: App entry point</content>
<parameter name="filePath">/Users/texalbuja/portfolio/texalbuja-dev/.github/copilot-instructions.md