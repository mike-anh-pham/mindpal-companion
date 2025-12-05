import React from "react";

export const HeroIllustration = (props: React.ComponentProps<"svg">) => (
  <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* Abstract Background Shapes */}
    <circle cx="250" cy="200" r="180" fill="currentColor" className="text-primary/5" />
    <circle cx="350" cy="100" r="50" fill="currentColor" className="text-accent/10" />
    <circle cx="100" cy="300" r="80" fill="currentColor" className="text-secondary/20" />

    {/* Device/Interface Frame */}
    <rect x="100" y="50" width="300" height="300" rx="20" fill="white" fillOpacity="0.8" className="dark:fill-card" />
    <rect x="100" y="50" width="300" height="300" rx="20" stroke="currentColor" strokeWidth="4" className="text-border" />

    {/* Chat Bubbles */}
    {/* Left Bubble (AI) */}
    <g transform="translate(130, 100)">
      <rect width="180" height="60" rx="12" fill="currentColor" className="text-primary/10" />
      <circle cx="20" cy="30" r="4" fill="currentColor" className="text-primary/40" />
      <rect x="35" y="20" width="100" height="8" rx="4" fill="currentColor" className="text-primary/30" />
      <rect x="35" y="35" width="60" height="8" rx="4" fill="currentColor" className="text-primary/20" />
    </g>

    {/* Right Bubble (User) */}
    <g transform="translate(190, 190)">
      <rect width="180" height="60" rx="12" fill="currentColor" className="text-secondary" />
      <rect x="20" y="20" width="120" height="8" rx="4" fill="currentColor" className="text-foreground/50" />
      <rect x="20" y="35" width="80" height="8" rx="4" fill="currentColor" className="text-foreground/30" />
    </g>

     {/* Left Bubble (AI Response) */}
    <g transform="translate(130, 280)">
      <rect width="160" height="40" rx="12" fill="currentColor" className="text-primary/10" />
      <rect x="20" y="16" width="120" height="8" rx="4" fill="currentColor" className="text-primary/30" />
    </g>

    {/* Floating Elements */}
    <circle cx="420" cy="80" r="15" fill="currentColor" className="text-warning animate-bounce-dot-1" />
    <circle cx="80" cy="320" r="10" fill="currentColor" className="text-accent animate-bounce-dot-2" />
  </svg>
);

export const StepOneIllustration = (props: React.ComponentProps<"svg">) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="20" y="20" width="60" height="60" rx="12" fill="currentColor" className="text-primary/10" />
    <path d="M35 40H65" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-primary" />
    <path d="M35 55H55" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-primary/60" />
    <circle cx="70" cy="70" r="15" fill="currentColor" className="text-accent" />
    <path d="M65 70L68 73L75 66" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const StepTwoIllustration = (props: React.ComponentProps<"svg">) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="50" cy="50" r="35" fill="currentColor" className="text-secondary" />
    <path d="M35 50C35 50 40 60 50 60C60 60 65 50 65 50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-foreground" />
    <circle cx="40" cy="40" r="4" fill="currentColor" className="text-foreground" />
    <circle cx="60" cy="40" r="4" fill="currentColor" className="text-foreground" />
  </svg>
);

export const StepThreeIllustration = (props: React.ComponentProps<"svg">) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M50 20L60 40L80 40L65 55L70 75L50 65L30 75L35 55L20 40L40 40L50 20Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" className="text-warning" />
    <path d="M50 45L53 52L60 52L55 57L57 64L50 60L43 64L45 57L40 52L47 52L50 45Z" fill="currentColor" className="text-warning" />
  </svg>
);

export const ConnectIllustration = (props: React.ComponentProps<"svg">) => (
  <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M50 100C100 50 200 50 250 100" stroke="currentColor" strokeWidth="4" strokeDasharray="10 10" className="text-border" />
    <circle cx="50" cy="100" r="20" fill="currentColor" className="text-primary" />
    <circle cx="250" cy="100" r="20" fill="currentColor" className="text-accent" />
    <circle cx="150" cy="75" r="10" fill="currentColor" className="text-muted-foreground" />
    
    {/* Connection Line */}
    <path d="M70 100H230" stroke="currentColor" strokeWidth="2" className="text-foreground/20" />
  </svg>
);
