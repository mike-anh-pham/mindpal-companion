# Styling Guide

## Overview

The project uses Tailwind CSS with CSS custom properties for theming. All theme tokens are defined in `src/index.css`.

## Color Palette

### Core Colors (HSL values)
```css
--background: 234 47% 8%;        /* Deep blue-black */
--foreground: 210 40% 98%;       /* Near white */
--primary: 262 83% 66%;          /* Purple */
--secondary: 217 91% 60%;        /* Blue */
--accent: 330 81% 60%;           /* Pink */
--destructive: 0 84% 60%;        /* Red */
--success: 160 84% 39%;          /* Green */
--warning: 38 92% 50%;           /* Orange */
--muted: 234 30% 20%;            /* Muted background */
--muted-foreground: 215 14% 64%; /* Muted text */
```

### Custom MindPal Tokens
```css
--gradient-bg          /* Page background gradient */
--glass-bg             /* Glass panel background */
--glass-border         /* Subtle white border */
--message-user         /* User message bubble */
--message-ai           /* AI message bubble */
--mood-pill-bg         /* Mood indicator background */
--mood-pill-text       /* Mood indicator text */
```

### Sidebar Colors
```css
--sidebar-background
--sidebar-foreground
--sidebar-primary
--sidebar-accent
--sidebar-border
```

## Utility Classes

### Glass Effect
```css
.glass-panel {
  @apply bg-glass backdrop-blur-xl border border-glass-border;
}
```

### Background Gradient
```css
.gradient-bg {
  background: var(--gradient-bg);
}
```

### Mood Pill
```css
.bg-mood-pill    /* Background */
.text-mood-pill  /* Text color */
```

## Custom Animations

| Class | Animation | Duration |
|-------|-----------|----------|
| `.animate-pulse-ring` | Expanding rings | 1.5s infinite |
| `.animate-bounce-dot` | Bouncing dots | 1.4s infinite |
| `.animate-slide-up` | Fade in from below | 0.2s |
| `.animate-slide-in-right` | Slide from right | 0.3s |
| `.animate-fade-in` | Opacity fade | 0.2s |
| `.animate-waveform` | Audio bars | 0.6s infinite |

### Bounce Dot Delays
```css
.animate-bounce-dot-1 { animation-delay: 0s; }
.animate-bounce-dot-2 { animation-delay: 0.16s; }
.animate-bounce-dot-3 { animation-delay: 0.32s; }
```

## Typography

- **Font Family:** Inter (Google Fonts)
- **Weights:** 300, 400, 500, 600, 700
- **Fallbacks:** system-ui, sans-serif

## Layout Constants

| Element | Height | Position |
|---------|--------|----------|
| Header | 60px | Fixed top |
| InputBar | 100px | Fixed bottom |
| Content margin-top | 60px | Clears header |
| Content margin-bottom | 100px | Clears input |
| Max content width | 768px (3xl) | Centered |

## Scrollbar

Custom webkit scrollbar styling:
- Width: 6px
- Track: Transparent
- Thumb: Muted color with hover state

## Border Radius

Uses Tailwind's built-in `--radius` variable:
- `lg`: var(--radius) = 0.75rem
- `md`: calc(var(--radius) - 2px)
- `sm`: calc(var(--radius) - 4px)

## Dark Mode

The app is dark mode only. The `dark` class is applied to `<body>` in `index.html`.

## Path Alias

Import from `src/` using `@/`:
```typescript
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
```

## cn() Utility

The `cn()` function (`src/lib/utils.ts`) merges Tailwind classes with conflict resolution:
```typescript
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```
