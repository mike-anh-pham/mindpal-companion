# Project Overview

## MindPal Companion

MindPal is a mental health AI companion application built as a React SPA. It provides a chat-based interface where users can communicate with an AI assistant that offers empathetic support with configurable humor levels.

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI framework |
| TypeScript | Type safety |
| Vite | Build tool and dev server |
| Tailwind CSS | Utility-first styling |
| shadcn/ui | UI component library (Radix-based) |
| React Router | Client-side routing |
| TanStack Query | Server state management |
| react-hook-form + zod | Form handling and validation |

## Project Structure

```
mindpal-companion/
├── src/
│   ├── components/         # Custom app components
│   │   └── ui/            # shadcn/ui components
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Route page components
│   ├── types/             # TypeScript type definitions
│   ├── lib/               # Utility functions
│   ├── App.tsx            # Root component with providers
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles and CSS variables
├── public/                # Static assets
├── docs/                  # Documentation
└── [config files]         # Various configuration files
```

## Key Features

1. **Chat Interface** - Real-time messaging with AI assistant
2. **Voice Input** - Hold-to-record voice messages using MediaRecorder API
3. **Humor Slider** - Adjustable response tone from gentle to dark humor (0-10)
4. **Crisis Resources** - Quick access to mental health crisis hotlines
5. **Session Management** - Export conversations, start new sessions
6. **Dark Mode** - Built-in dark theme (default and only mode)

## Entry Points

- `index.html` - HTML entry with meta tags and app description
- `src/main.tsx` - React DOM render and CSS import
- `src/App.tsx` - Provider setup (QueryClient, Tooltip, Toast, Router)
- `src/pages/Index.tsx` - Main chat interface composition
