# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server on port 8080
npm run build    # Production build
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Architecture

MindPal Companion is a mental health chat companion built with React, TypeScript, Vite, and shadcn-ui.

### Key Files

- `src/pages/Index.tsx` - Main chat interface, composes all major components
- `src/hooks/useChatState.ts` - Central state management for chat (messages, settings, recording state, modals)
- `src/types/chat.ts` - Core types: `Message`, `Settings`, `InputMode`

### Component Structure

The app is a single-page chat interface:
- `Header` - Top navigation with settings access
- `ChatArea` - Message display with `MessageBubble` components
- `InputBar` - Voice/text input toggle, uses `VoiceButton` and `WaveformVisualizer` for recording
- `SettingsSidebar` - Humor level slider, voice settings, session controls
- `CrisisModal` - Emergency resources modal

### Styling

- Uses CSS custom properties for theming (defined in `src/index.css`)
- Custom color tokens: `--message-user`, `--message-ai`, `--mood-pill-*`, `--glass-*`
- Utility classes: `.glass-panel`, `.gradient-bg`
- Custom animations: `pulse-ring`, `bounce-dots`, `slide-up`, `waveform`

### Path Aliases

Use `@/` to import from `src/` (configured in vite.config.ts)
