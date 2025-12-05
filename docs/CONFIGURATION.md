# Configuration Files Reference

## package.json

### Scripts
```json
{
  "dev": "vite",              // Start dev server (port 8080)
  "build": "vite build",      // Production build
  "build:dev": "vite build --mode development",
  "lint": "eslint .",         // Run ESLint
  "preview": "vite preview"   // Preview production build
}
```

### Key Dependencies
- **React 18** - UI framework
- **Radix UI** - Accessible component primitives
- **TanStack Query** - Server state management
- **react-hook-form** + **zod** - Form handling
- **lucide-react** - Icons
- **tailwind-merge** + **clsx** - Class utilities
- **date-fns** - Date formatting
- **sonner** - Toast notifications
- **recharts** - Charting (available but unused)

---

## vite.config.ts

```typescript
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",     // Listen on all interfaces
    port: 8080,     // Dev server port
  },
  plugins: [
    react(),        // @vitejs/plugin-react-swc
    mode === "development" && componentTagger()  // Lovable tagger
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),  // Path alias
    },
  },
}));
```

---

## tailwind.config.ts

### Content Paths
```typescript
content: [
  "./pages/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",
  "./app/**/*.{ts,tsx}",
  "./src/**/*.{ts,tsx}"
]
```

### Custom Theme Extensions
- **Font:** Inter font family
- **Colors:** All custom color tokens (see STYLING.md)
- **Border Radius:** lg, md, sm variants
- **Animations:** accordion-down, accordion-up

### Plugins
- `tailwindcss-animate` - Animation utilities

---

## tsconfig.json

### Path Mapping
```json
{
  "baseUrl": ".",
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

### Relaxed Strictness (for rapid development)
```json
{
  "noImplicitAny": false,
  "noUnusedParameters": false,
  "noUnusedLocals": false,
  "strictNullChecks": false
}
```

---

## eslint.config.js

### Configuration
- Extends: `@eslint/js` recommended + `typescript-eslint` recommended
- Plugins: `react-hooks`, `react-refresh`
- Target: `**/*.{ts,tsx}` files
- Ignores: `dist/` folder

### Custom Rules
```javascript
{
  ...reactHooks.configs.recommended.rules,
  "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
  "@typescript-eslint/no-unused-vars": "off"
}
```

---

## components.json (shadcn/ui)

Configuration for shadcn/ui CLI:

```json
{
  "style": "default",
  "rsc": false,           // No React Server Components
  "tsx": true,            // TypeScript
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

---

## postcss.config.js

Standard PostCSS config for Tailwind:
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

---

## index.html

### Meta Tags
- Viewport configuration
- Theme color: `#1a1a2e`
- OpenGraph and Twitter cards
- Description: "MindPal is a supportive AI companion..."

### Body
- `class="dark"` - Dark mode enabled
- `<div id="root">` - React mount point
- Module script: `/src/main.tsx`
